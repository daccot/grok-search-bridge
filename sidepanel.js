import { DEFAULT_PRESETS } from './lib/presets.js';
import {
  buildGrokImprovePrompt,
  buildGrokPrompt,
  buildGrokUrl,
  buildGrokVariationsPrompt,
  buildXSearchUrl,
  detectTokens,
  fillTemplate,
  hasUnfilledToken
} from './lib/queryBuilder.js';
import { clearHistory, getState, resetManagedPresets, saveHistory, saveManagedPresets } from './lib/storage.js';
import { $, copyText, escapeHtml, uniqueTags } from './lib/utils.js';

const els = {
  freeInput: $('#freeInput'),
  inputHint: $('#inputHint'),
  tokenFields: $('#tokenFields'),
  generateBtn: $('#generateBtn'),
  clearBtn: $('#clearBtn'),
  queryOutput: $('#queryOutput'),
  warning: $('#warning'),
  status: $('#status'),
  openXBtn: $('#openXBtn'),
  copyQueryBtn: $('#copyQueryBtn'),
  copyUrlBtn: $('#copyUrlBtn'),
  openGrokBtn: $('#openGrokBtn'),
  improveGrokBtn: $('#improveGrokBtn'),
  variationsGrokBtn: $('#variationsGrokBtn'),
  presetSearch: $('#presetSearch'),
  tagBar: $('#tagBar'),
  presetList: $('#presetList'),
  presetCount: $('#presetCount'),
  resetFilterBtn: $('#resetFilterBtn'),
  historyList: $('#historyList'),
  clearHistoryBtn: $('#clearHistoryBtn'),
  newPresetBtn: $('#newPresetBtn'),
  editPresetBtn: $('#editPresetBtn'),
  deletePresetBtn: $('#deletePresetBtn'),
  exportBtn: $('#exportBtn'),
  importBtn: $('#importBtn'),
  importFile: $('#importFile'),
  resetPresetsBtn: $('#resetPresetsBtn'),
  presetEditor: $('#presetEditor'),
  editorTitle: $('#editorTitle'),
  editId: $('#editId'),
  editName: $('#editName'),
  editDescription: $('#editDescription'),
  editTags: $('#editTags'),
  editPlaceholder: $('#editPlaceholder'),
  editTemplate: $('#editTemplate'),
  savePresetBtn: $('#savePresetBtn'),
  cancelEditBtn: $('#cancelEditBtn'),
  saveAsNewBtn: $('#saveAsNewBtn'),
  overwritePresetBtn: $('#overwritePresetBtn')
};

let state = {
  presets: DEFAULT_PRESETS,
  selectedPreset: null,
  selectedTag: '',
  history: [],
  editMode: 'new'
};

init().catch((error) => {
  console.error('[Grok Search Bridge] init failed', error);
  setStatus('初期化エラー');
});

async function init() {
  const saved = await getState();
  state.presets = Array.isArray(saved.managedPresets) ? saved.managedPresets : DEFAULT_PRESETS;
  state.history = saved.history || [];
  renderTags();
  renderPresets();
  renderHistory();
  bindEvents();
  bindTabs();
  await loadPendingContext();
  setStatus('準備完了');
}

function bindEvents() {
  els.generateBtn.addEventListener('click', generateQuery);
  els.clearBtn.addEventListener('click', clearAll);
  els.openXBtn.addEventListener('click', openX);
  els.copyQueryBtn.addEventListener('click', copyQuery);
  els.copyUrlBtn.addEventListener('click', copySearchUrl);
  els.openGrokBtn.addEventListener('click', () => openGrokWithPrompt('explain'));
  els.improveGrokBtn.addEventListener('click', () => openGrokWithPrompt('improve'));
  els.variationsGrokBtn.addEventListener('click', () => openGrokWithPrompt('variations'));
  els.presetSearch.addEventListener('input', renderPresets);
  els.resetFilterBtn.addEventListener('click', () => {
    state.selectedTag = '';
    els.presetSearch.value = '';
    renderTags();
    renderPresets();
  });
  els.clearHistoryBtn.addEventListener('click', async () => {
    await clearHistory();
    state.history = [];
    renderHistory();
    setStatus('履歴を削除');
  });
  els.queryOutput.addEventListener('input', validateOutput);
  els.saveAsNewBtn.addEventListener('click', saveCurrentQueryAsNew);
  els.overwritePresetBtn.addEventListener('click', overwriteSelectedPresetWithCurrentQuery);

  els.newPresetBtn.addEventListener('click', startNewPreset);
  els.editPresetBtn.addEventListener('click', editSelectedPreset);
  els.deletePresetBtn.addEventListener('click', deleteSelectedPreset);
  els.savePresetBtn.addEventListener('click', saveEditorPreset);
  els.cancelEditBtn.addEventListener('click', closeEditor);
  els.exportBtn.addEventListener('click', exportPresets);
  els.importBtn.addEventListener('click', () => els.importFile.click());
  els.importFile.addEventListener('change', importPresetsFromFile);
  els.resetPresetsBtn.addEventListener('click', restoreDefaultPresets);
}

function bindTabs() {
  document.querySelectorAll('[data-tab]').forEach((tab) => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });
}

function switchTab(name) {
  document.querySelectorAll('[data-tab]').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.tab === name);
  });
  document.querySelectorAll('[data-panel]').forEach((panel) => {
    panel.classList.toggle('active', panel.dataset.panel === name);
  });
}

async function loadPendingContext() {
  const { pendingContext } = await chrome.storage.sync.get(['pendingContext']);
  if (!pendingContext) return;
  await chrome.storage.sync.remove(['pendingContext']);
  els.freeInput.value = pendingContext.input || '';
  if (pendingContext.query) {
    els.queryOutput.value = pendingContext.query;
    validateOutput();
  }
}

function renderTags() {
  const tags = uniqueTags(state.presets);
  els.tagBar.innerHTML = tags.map((tag) => `
    <button class="tag ${state.selectedTag === tag ? 'active' : ''}" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>
  `).join('');
  els.tagBar.querySelectorAll('[data-tag]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.selectedTag = state.selectedTag === btn.dataset.tag ? '' : btn.dataset.tag;
      renderTags();
      renderPresets();
    });
  });
}

function renderPresets() {
  const keyword = els.presetSearch.value.trim().toLowerCase();
  const filtered = state.presets.filter((p) => {
    const tagOk = !state.selectedTag || (p.tags || []).includes(state.selectedTag);
    const text = `${p.id} ${p.name} ${p.description} ${(p.tags || []).join(' ')} ${p.input_placeholder} ${p.query_template}`.toLowerCase();
    const keywordOk = !keyword || text.includes(keyword);
    return tagOk && keywordOk;
  });

  els.presetCount.textContent = `(${filtered.length}/${state.presets.length})`;
  els.presetList.innerHTML = filtered.map((p) => `
    <article class="preset-item ${state.selectedPreset?.id === p.id ? 'selected' : ''}" data-id="${escapeHtml(p.id)}">
      <div class="preset-title"><span>${escapeHtml(p.name)}</span><span>${escapeHtml(p.id)}</span></div>
      <div class="preset-desc">${escapeHtml(p.description)}</div>
      <div class="preset-desc">入力例: ${escapeHtml(p.input_placeholder || 'キーワード')}</div>
      <div class="preset-desc">式: ${escapeHtml(p.query_template || '')}</div>
      <div class="preset-tags">${(p.tags || []).map((t) => `<span>${escapeHtml(t)}</span>`).join('')}</div>
      <div class="preset-actions-inline">
        <button class="small-action" data-action="use" data-id="${escapeHtml(p.id)}">使う</button>
        <button class="small-action" data-action="edit" data-id="${escapeHtml(p.id)}">編集</button>
        <button class="small-action" data-action="delete" data-id="${escapeHtml(p.id)}">削除</button>
      </div>
    </article>
  `).join('') || '<div class="empty">該当プリセットなし</div>';

  els.presetList.querySelectorAll('[data-id]').forEach((node) => {
    node.addEventListener('click', (event) => {
      const action = event.target?.dataset?.action;
      const id = node.dataset.id || event.target?.dataset?.id;
      if (action === 'edit') return editPresetById(id);
      if (action === 'delete') return deletePresetById(id);
      selectPreset(id);
    });
  });
}

function renderHistory() {
  if (!state.history.length) {
    els.historyList.className = 'history-list empty';
    els.historyList.textContent = '履歴はありません';
    return;
  }

  els.historyList.className = 'history-list';
  els.historyList.innerHTML = state.history.map((h, index) => `
    <article class="history-item" data-index="${index}">
      <div class="preset-title"><span>${escapeHtml(h.name || '検索式')}</span><span>↩</span></div>
      <div class="history-meta">${escapeHtml(h.query)}</div>
    </article>
  `).join('');

  els.historyList.querySelectorAll('[data-index]').forEach((item) => {
    item.addEventListener('click', () => {
      const h = state.history[Number(item.dataset.index)];
      els.freeInput.value = h.input || '';
      els.queryOutput.value = h.query || '';
      validateOutput();
      setStatus('履歴を復元');
    });
  });
}

function selectPreset(id) {
  const preset = state.presets.find((p) => p.id === id);
  if (!preset) return;

  state.selectedPreset = preset;
  els.freeInput.value = '';
  els.freeInput.placeholder = `例: ${preset.input_placeholder || 'キーワード'}`;
  els.inputHint.textContent = `選択中: ${preset.name} / 手入力例: ${preset.input_placeholder || 'キーワード'}`;
  renderTokenFields(preset);
  switchTab('compose');

  const tokens = detectTokens(preset.query_template);
  if (tokens.length === 0) {
    els.queryOutput.value = preset.query_template;
    validateOutput();
  } else {
    els.queryOutput.value = '';
    setStatus('入力待ち');
  }
  renderPresets();
}

function renderTokenFields(preset) {
  const tokens = detectTokens(preset.query_template);
  if (!tokens.length) {
    els.tokenFields.innerHTML = '';
    return;
  }

  els.tokenFields.innerHTML = tokens.map((token) => `
    <div class="token-field">
      <label for="token-${token}">${tokenLabel(token)} / 例: ${escapeHtml(exampleForToken(token, preset))}</label>
      <input id="token-${token}" data-token="${token}" placeholder="${escapeHtml(exampleForToken(token, preset))}">
    </div>
  `).join('');
}

function tokenLabel(token) {
  return {
    keyword: 'キーワード',
    brand: 'ブランド名',
    competitor: '競合名',
    account: 'アカウント名',
    hashtag: 'ハッシュタグ'
  }[token] || token;
}

function exampleForToken(token, preset) {
  const base = preset.input_placeholder || 'キーワード';
  return {
    keyword: base,
    brand: '自社ブランド名',
    competitor: '競合ブランド名',
    account: '@example_account',
    hashtag: '#example'
  }[token] || base;
}

async function generateQuery() {
  const preset = state.selectedPreset;
  const freeInput = els.freeInput.value.trim();

  let query = '';
  if (preset) {
    const values = collectTokenValues();
    if (freeInput) {
      values.keyword = values.keyword || freeInput;
      values.brand = values.brand || freeInput;
      values.competitor = values.competitor || freeInput;
      values.account = values.account || freeInput;
      values.hashtag = values.hashtag || freeInput;
    }
    query = fillTemplate(preset.query_template, values);
  } else {
    query = buildSimpleQuery(freeInput);
  }

  els.queryOutput.value = query;
  validateOutput();
  await addHistory(query, freeInput, preset?.name || '手入力検索');
  setStatus('生成済み');
}

function collectTokenValues() {
  const values = {};
  els.tokenFields.querySelectorAll('[data-token]').forEach((input) => {
    values[input.dataset.token] = input.value.trim();
  });
  return values;
}

function buildSimpleQuery(input) {
  const value = input.trim();
  if (!value) return '';
  if (/\b(lang:|from:|to:|filter:|min_faves:|since:|until:)\b/.test(value)) return value;
  return `${value} lang:ja -filter:retweets -bot -プレゼント -キャンペーン`;
}

async function addHistory(query, input, name) {
  if (!query) return;
  state.history = await saveHistory({ name, query, input, createdAt: Date.now() });
  renderHistory();
}

function validateOutput() {
  const query = els.queryOutput.value.trim();
  const warnings = [];
  if (!query) warnings.push('検索式が空です。');
  if (hasUnfilledToken(query)) warnings.push('未置換のプレースホルダーが残っています。例: {keyword}');
  if (/自社名|商品名|ブランド名|キーワード|アカウント名|ハッシュタグ/.test(query)) {
    warnings.push('例示語が残っている可能性があります。実際の固有名詞に置き換えてください。');
  }

  if (warnings.length) {
    els.warning.hidden = false;
    els.warning.textContent = warnings.join(' ');
  } else {
    els.warning.hidden = true;
    els.warning.textContent = '';
  }
}

function currentQuery() {
  return els.queryOutput.value.trim();
}

async function openX() {
  const query = currentQuery();
  validateOutput();
  if (!query || hasUnfilledToken(query)) return setStatus('検索式を確認');
  await chrome.tabs.create({ url: buildXSearchUrl(query) });
  await addHistory(query, els.freeInput.value.trim(), state.selectedPreset?.name || '手入力検索');
  setStatus('Xで開きました');
}

async function copyQuery() {
  const query = currentQuery();
  if (!query) return setStatus('コピー対象なし');
  await copyText(query);
  setStatus('検索式をコピー');
}

async function copySearchUrl() {
  const query = currentQuery();
  if (!query) return setStatus('コピー対象なし');
  await copyText(buildXSearchUrl(query));
  setStatus('検索URLをコピー');
}

async function openGrokWithPrompt(mode) {
  const query = currentQuery();
  if (!query) return setStatus('Grok対象なし');
  const original = els.freeInput.value.trim();
  const prompt = mode === 'improve'
    ? buildGrokImprovePrompt(query, original)
    : mode === 'variations'
      ? buildGrokVariationsPrompt(query, original)
      : buildGrokPrompt(query, original);

  // 失敗時の保険として必ずクリップボードへコピー。
  await copyText(prompt);

  // v0.3.4: 過去版の「Grok画面へ流し込み」を復活。
  // URL hashだけではX/Grok側SPAの都合で拾えないことがあるため、storage.localにも渡す。
  const requestId = `gsb_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  await chrome.storage.local.set({
    gsbPendingGrokPrompt: {
      id: requestId,
      mode,
      prompt,
      query,
      original,
      createdAt: Date.now(),
      expiresAt: Date.now() + 5 * 60 * 1000
    }
  });

  await openOrReuseGrokTab(buildGrokUrl(prompt, requestId));
  setStatus(mode === 'improve'
    ? 'Grokへ改善プロンプトを流し込み'
    : mode === 'variations'
      ? 'Grokへ派生案プロンプトを流し込み'
      : 'Grokへ解説プロンプトを流し込み');
}


async function openOrReuseGrokTab(url) {
  const tabs = await chrome.tabs.query({});
  const grokTab = tabs.find((tab) => {
    try {
      const u = new URL(tab.url || '');
      return (u.hostname === 'x.com' && u.pathname.startsWith('/i/grok')) ||
             u.hostname === 'grok.com' ||
             u.hostname === 'grok.x.com';
    } catch (_) {
      return false;
    }
  });

  if (grokTab?.id) {
    await chrome.tabs.update(grokTab.id, { url, active: true });
    if (grokTab.windowId) await chrome.windows.update(grokTab.windowId, { focused: true });
    return;
  }

  await chrome.tabs.create({ url });
}

async function saveCurrentQueryAsNew() {
  const query = currentQuery();
  if (!query) return setStatus('保存する検索式なし');
  const baseName = state.selectedPreset?.name || 'カスタム検索式';
  const name = prompt('別名で追加する名前', `${baseName} の派生`);
  if (!name) return;
  const preset = normalizePreset({
    id: makeCustomId(),
    name,
    description: '生成結果から追加した検索式',
    tags: state.selectedPreset?.tags || ['カスタム'],
    input_placeholder: state.selectedPreset?.input_placeholder || els.freeInput.value.trim() || 'キーワード',
    query_template: query
  });
  state.presets = [preset, ...state.presets];
  await saveManagedPresets(state.presets);
  state.selectedPreset = preset;
  renderTags();
  renderPresets();
  setStatus('別名で追加しました');
}

async function overwriteSelectedPresetWithCurrentQuery() {
  const query = currentQuery();
  if (!query) return setStatus('上書きする検索式なし');
  if (!state.selectedPreset) return setStatus('上書き先プリセット未選択');
  if (!confirm(`選択中の検索式を上書きしますか？\n${state.selectedPreset.name}`)) return;
  const updated = { ...state.selectedPreset, query_template: query };
  state.presets = state.presets.map((p) => p.id === updated.id ? updated : p);
  await saveManagedPresets(state.presets);
  state.selectedPreset = updated;
  renderPresets();
  setStatus('選択中に上書きしました');
}

function clearAll() {
  state.selectedPreset = null;
  els.freeInput.value = '';
  els.freeInput.placeholder = '例: ChatGPTのChrome拡張について、日本語の不満・要望をRT除外で探したい';
  els.inputHint.textContent = 'プリセットを選ぶと、ここに入力例が表示されます。';
  els.tokenFields.innerHTML = '';
  els.queryOutput.value = '';
  els.warning.hidden = true;
  renderPresets();
  setStatus('クリア');
}

function startNewPreset() {
  state.editMode = 'new';
  els.editorTitle.textContent = '検索式を新規追加';
  els.editId.value = makeCustomId();
  els.editName.value = '';
  els.editDescription.value = '';
  els.editTags.value = '';
  els.editPlaceholder.value = '';
  els.editTemplate.value = '';
  els.presetEditor.hidden = false;
}

function editSelectedPreset() {
  if (!state.selectedPreset) return setStatus('プリセット未選択');
  editPresetById(state.selectedPreset.id);
}

function editPresetById(id) {
  const preset = state.presets.find((p) => p.id === id);
  if (!preset) return;
  state.editMode = 'edit';
  state.selectedPreset = preset;
  els.editorTitle.textContent = `検索式を編集: ${preset.name}`;
  els.editId.value = preset.id;
  els.editName.value = preset.name || '';
  els.editDescription.value = preset.description || '';
  els.editTags.value = (preset.tags || []).join(',');
  els.editPlaceholder.value = preset.input_placeholder || '';
  els.editTemplate.value = preset.query_template || '';
  els.presetEditor.hidden = false;
  renderPresets();
}

async function saveEditorPreset() {
  const preset = normalizePreset({
    id: els.editId.value,
    name: els.editName.value,
    description: els.editDescription.value,
    tags: els.editTags.value.split(',').map((x) => x.trim()).filter(Boolean),
    input_placeholder: els.editPlaceholder.value,
    query_template: els.editTemplate.value
  });

  const error = validatePreset(preset);
  if (error) return setStatus(error);

  const sameId = state.presets.find((p) => p.id === preset.id);
  if (sameId && state.editMode === 'new') return setStatus('同じIDが存在します');

  if (state.editMode === 'edit') {
    state.presets = state.presets.map((p) => p.id === preset.id ? preset : p);
  } else {
    state.presets = [preset, ...state.presets];
  }
  await saveManagedPresets(state.presets);
  state.selectedPreset = preset;
  closeEditor();
  renderTags();
  renderPresets();
  setStatus('検索式を保存');
}

function closeEditor() {
  els.presetEditor.hidden = true;
}

async function deleteSelectedPreset() {
  if (!state.selectedPreset) return setStatus('プリセット未選択');
  await deletePresetById(state.selectedPreset.id);
}

async function deletePresetById(id) {
  const preset = state.presets.find((p) => p.id === id);
  if (!preset) return;
  if (!confirm(`削除しますか？\n${preset.name}`)) return;
  state.presets = state.presets.filter((p) => p.id !== id);
  if (state.selectedPreset?.id === id) state.selectedPreset = null;
  await saveManagedPresets(state.presets);
  renderTags();
  renderPresets();
  setStatus('削除しました');
}

function exportPresets() {
  const payload = JSON.stringify(state.presets, null, 2);
  const blob = new Blob([payload], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `grok-search-bridge-presets-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  setStatus('エクスポート完了');
}

async function importPresetsFromFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    const imported = parsePresetImport(text);
    if (!imported.length) return setStatus('有効な検索式なし');
    const merged = mergePresets(state.presets, imported);
    state.presets = merged;
    await saveManagedPresets(state.presets);
    renderTags();
    renderPresets();
    setStatus(`${imported.length}件をインポート`);
  } catch (error) {
    console.error(error);
    setStatus('インポート失敗');
    alert(`インポートに失敗しました。\n${error.message}`);
  } finally {
    event.target.value = '';
  }
}

function parsePresetImport(text) {
  let value;
  try {
    value = JSON.parse(text);
  } catch (_) {
    // Grok出力で配列区切りが崩れた場合の救済。{...}単位で抜き出す。
    const objects = [];
    const re = /\{[\s\S]*?"query_template"\s*:\s*"[\s\S]*?"\s*\}/g;
    const matches = text.match(re) || [];
    for (const m of matches) {
      try { objects.push(JSON.parse(m)); } catch (_) {}
    }
    value = objects;
  }
  const arr = Array.isArray(value) ? value : (Array.isArray(value?.presets) ? value.presets : []);
  return arr.map(normalizePreset).filter((p) => !validatePreset(p));
}

function mergePresets(current, imported) {
  const map = new Map(current.map((p) => [p.id, p]));
  for (const p of imported) map.set(p.id, p);
  return Array.from(map.values()).sort((a, b) => String(a.id).localeCompare(String(b.id), 'ja'));
}

function normalizePreset(p) {
  return {
    id: String(p.id || makeCustomId()).trim(),
    name: String(p.name || '無題の検索式').trim(),
    description: String(p.description || '').trim(),
    tags: Array.isArray(p.tags) ? p.tags.map(String).map((x) => x.trim()).filter(Boolean) : String(p.tags || '').split(',').map((x) => x.trim()).filter(Boolean),
    input_placeholder: String(p.input_placeholder || p.placeholder || '').replace(/\n/g, '').trim(),
    query_template: String(p.query_template || p.query || '').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()
  };
}

function validatePreset(p) {
  if (!p.id) return 'IDが空です';
  if (!p.name) return '名前が空です';
  if (!p.query_template) return '検索式が空です';
  return '';
}

function makeCustomId() {
  const ts = new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14);
  return `custom_${ts}`;
}

async function restoreDefaultPresets() {
  if (!confirm('初期プリセットに戻します。追加・編集した検索式は消えます。続行しますか？')) return;
  await resetManagedPresets();
  state.presets = DEFAULT_PRESETS;
  state.selectedPreset = null;
  renderTags();
  renderPresets();
  setStatus('初期プリセットを復元');
}

function setStatus(text) {
  els.status.textContent = text;
}

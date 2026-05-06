const TOKEN_RE = /\{(keyword|brand|competitor|account|hashtag)\}/g;

export function detectTokens(template) {
  return Array.from(new Set([...String(template || '').matchAll(TOKEN_RE)].map((m) => m[1])));
}

export function normalizeInput(value = '') {
  return String(value).trim().replace(/\s+/g, ' ');
}

export function normalizeHashtag(value = '') {
  const v = normalizeInput(value);
  if (!v) return '';
  return v.startsWith('#') ? v : `#${v.replace(/^＃/, '')}`;
}

export function normalizeAccount(value = '') {
  const v = normalizeInput(value);
  if (!v) return '';
  return v.startsWith('@') ? v : `@${v}`;
}

export function fillTemplate(template, values) {
  return String(template || '').replace(TOKEN_RE, (_all, key) => {
    const raw = values[key] || values.keyword || '';
    if (key === 'hashtag') return normalizeHashtag(raw);
    if (key === 'account') return normalizeAccount(raw);
    return normalizeInput(raw);
  }).replace(/\s+/g, ' ').trim();
}

export function hasUnfilledToken(query) {
  return /\{[^}]+\}/.test(query || '');
}

export function buildXSearchUrl(query) {
  return `https://x.com/search?q=${encodeURIComponent(query)}&src=typed_query&f=live`;
}

export function buildGrokPrompt(query, originalInput = '') {
  return [
    'あなたはX検索式の専門家です。以下のX検索式を解説してください。',
    '',
    `X検索式: ${query}`,
    originalInput ? `元の入力: ${originalInput}` : '',
    '',
    '必ず次の形式で簡潔に出力してください。',
    '1. 検索意図',
    '2. 拾える投稿',
    '3. ノイズになりやすい投稿',
    '4. 使いどころ',
    '5. 追加するとよい条件'
  ].filter(Boolean).join('\n');
}

export function buildGrokImprovePrompt(query, originalInput = '') {
  return [
    'あなたはX検索式設計の専門家です。以下のX検索式を改善してください。',
    '',
    `現在のX検索式: ${query}`,
    originalInput ? `元の目的/入力: ${originalInput}` : '',
    '',
    '要件:',
    '- X検索構文として成立させる',
    '- lang:ja / -filter:retweets / -bot / min_faves: / since: / OR を必要に応じて使う',
    '- ノイズ除外を強化する',
    '- 検索意図を変えずに精度を上げる',
    '',
    '出力形式:',
    'improved_query:',
    '<改善済み検索式>',
    '',
    'reason:',
    '<改善理由>',
    '',
    'notes:',
    '<運用メモ>'
  ].filter(Boolean).join('\n');
}

export function buildGrokVariationsPrompt(query, originalInput = '') {
  return [
    'あなたはX検索式設計の専門家です。以下のX検索式から派生検索式を提案してください。',
    '',
    `元のX検索式: ${query}`,
    originalInput ? `元の目的/入力: ${originalInput}` : '',
    '',
    '要件:',
    '- 目的別に5個出す',
    '- 広めに拾う式、厳しめに絞る式、バズ検知式、不満抽出式、競合比較式を含める',
    '- 各queryはそのままX検索に貼れる形',
    '',
    '出力形式:',
    '[',
    '  { "name": "...", "query": "...", "intent": "..." }',
    ']'
  ].filter(Boolean).join('\n');
}

export function buildGrokUrl(prompt, requestId = '') {
  const params = new URLSearchParams({ focus: '1' });
  if (requestId) params.set('gsb', requestId);
  // hashはstorage.localが読めない場合のフォールバック。
  return `https://x.com/i/grok?${params.toString()}#${encodeURIComponent(prompt)}`;
}

(() => {
  'use strict';

  const LOG_PREFIX = '[Grok Search Bridge][grok]';
  const STORAGE_KEY = 'gsbPendingGrokPrompt';
  const MAX_ATTEMPTS = 40;
  const INTERVAL_MS = 250;

  if (!isGrokPage()) return;

  log('loaded', { url: location.href });
  run().catch((error) => log('error', String(error)));

  function isGrokPage() {
    const host = location.hostname;
    const path = location.pathname;
    return (
      (host === 'x.com' && path.startsWith('/i/grok')) ||
      host === 'grok.com' ||
      host === 'grok.x.com'
    );
  }

  async function run() {
    const prompt = await getPrompt();
    if (!prompt) {
      log('no pending prompt');
      return;
    }
    await waitAndInject(prompt);
  }

  async function getPrompt() {
    const fromHash = decodeHashPrompt();
    try {
      const data = await chrome.storage.local.get([STORAGE_KEY]);
      const pending = data?.[STORAGE_KEY];
      if (pending?.prompt) {
        if (!pending.expiresAt || pending.expiresAt > Date.now()) {
          await chrome.storage.local.remove([STORAGE_KEY]);
          return String(pending.prompt);
        }
        await chrome.storage.local.remove([STORAGE_KEY]);
      }
    } catch (error) {
      log('storage read failed', String(error));
    }
    return fromHash;
  }

  function decodeHashPrompt() {
    try {
      const raw = location.hash ? location.hash.slice(1) : '';
      if (!raw) return '';
      return decodeURIComponent(raw);
    } catch (_) {
      return '';
    }
  }

  async function waitAndInject(prompt) {
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      const target = findBestInput();
      if (target) {
        const ok = injectText(target, prompt);
        log('inject result', { ok, attempt, target: describeElement(target), promptLength: prompt.length });
        flashNotice(ok ? 'Grokにプロンプトを流し込みました。内容確認後、手動で送信してください。' : 'Grokへの流し込みに失敗しました。コピー済みプロンプトを貼り付けてください。');
        return ok;
      }
      await sleep(INTERVAL_MS);
    }
    log('input not found');
    flashNotice('Grok入力欄が見つかりません。コピー済みプロンプトを手動で貼り付けてください。');
    return false;
  }

  function findBestInput() {
    const selectors = [
      'textarea[placeholder*="尋ね"]',
      'textarea[placeholder*="お尋ね"]',
      'textarea[placeholder*="Ask"]',
      'textarea[placeholder*="Message"]',
      'textarea',
      '[contenteditable="true"][role="textbox"]',
      '[contenteditable="true"]',
      '[role="textbox"]',
      'input[type="text"]'
    ];
    const found = [];
    for (const selector of selectors) {
      try {
        document.querySelectorAll(selector).forEach((el) => {
          if (!found.includes(el)) found.push(el);
        });
      } catch (_) {}
    }
    return found
      .map((el) => ({ el, score: scoreInput(el) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)[0]?.el || null;
  }

  function scoreInput(el) {
    if (!el) return 0;
    let score = 0;
    const tag = el.tagName.toLowerCase();
    const placeholder = (el.getAttribute('placeholder') || '').toLowerCase();
    const role = (el.getAttribute('role') || '').toLowerCase();
    const rect = el.getBoundingClientRect();

    if (!isVisible(el)) return 0;
    if (tag === 'textarea') score += 100;
    if (role === 'textbox') score += 40;
    if (el.isContentEditable) score += 30;
    if (placeholder.includes('尋ね') || placeholder.includes('お尋ね')) score += 160;
    if (placeholder.includes('ask') || placeholder.includes('message')) score += 60;
    if (rect.width > 180) score += 25;
    if (rect.height >= 36) score += 25;
    if (rect.y > window.innerHeight * 0.30) score += 10;
    // プローブ用UIや拡張由来のtextareaを誤検出しない
    if (el.closest('[id*="probe"], [class*="probe"], [id*="grok-bridge"]')) score -= 500;
    return score;
  }

  function injectText(el, text) {
    try {
      el.scrollIntoView({ block: 'center', inline: 'nearest' });
      el.focus();
      setNativeValue(el, '');
      dispatchInputEvents(el, '');
      setNativeValue(el, text);
      dispatchInputEvents(el, text);

      // React/Twitter UIで値が消えることがあるため少し後に再確認
      setTimeout(() => {
        const current = getValue(el);
        if (!current || !current.includes(text.slice(0, Math.min(40, text.length)))) {
          el.focus();
          setNativeValue(el, text);
          dispatchInputEvents(el, text);
          log('re-injected after verification');
        }
      }, 500);
      return true;
    } catch (error) {
      log('inject failed', String(error));
      return false;
    }
  }

  function setNativeValue(el, value) {
    const tag = el.tagName.toLowerCase();
    if (tag === 'textarea' || tag === 'input') {
      const proto = tag === 'textarea' ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(proto, 'value');
      if (descriptor?.set) descriptor.set.call(el, value);
      else el.value = value;
      if (el._valueTracker) {
        try { el._valueTracker.setValue(''); } catch (_) {}
      }
      return;
    }
    if (el.isContentEditable) {
      el.focus();
      document.execCommand('selectAll', false, null);
      document.execCommand('insertText', false, value);
      return;
    }
    try { el.textContent = value; } catch (_) {}
  }

  function dispatchInputEvents(el, text) {
    const events = [
      new FocusEvent('focus', { bubbles: true, composed: true }),
      new InputEvent('beforeinput', { bubbles: true, composed: true, cancelable: true, inputType: 'insertText', data: text }),
      new InputEvent('input', { bubbles: true, composed: true, inputType: 'insertText', data: text }),
      new Event('change', { bubbles: true, composed: true })
    ];
    for (const ev of events) {
      try { el.dispatchEvent(ev); } catch (_) {}
    }
  }

  function getValue(el) {
    if (!el) return '';
    if (typeof el.value === 'string') return el.value;
    return el.innerText || el.textContent || '';
  }

  function isVisible(el) {
    const rect = el.getBoundingClientRect();
    const style = getComputedStyle(el);
    return rect.width > 0 && rect.height > 0 && style.visibility !== 'hidden' && style.display !== 'none' && Number(style.opacity || 1) > 0;
  }

  function describeElement(el) {
    const rect = el.getBoundingClientRect();
    return {
      tag: el.tagName,
      placeholder: el.getAttribute('placeholder') || '',
      role: el.getAttribute('role') || '',
      rect: { x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) },
      valueLength: getValue(el).length
    };
  }

  function flashNotice(message) {
    try {
      const old = document.getElementById('gsb-grok-inject-notice');
      if (old) old.remove();
      const box = document.createElement('div');
      box.id = 'gsb-grok-inject-notice';
      box.textContent = message;
      box.style.cssText = [
        'position:fixed',
        'right:16px',
        'bottom:16px',
        'z-index:2147483647',
        'background:#111',
        'color:#fff',
        'border:1px solid #333',
        'border-radius:12px',
        'box-shadow:0 12px 40px rgba(0,0,0,.35)',
        'padding:12px 14px',
        'font:13px/1.5 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
        'max-width:360px'
      ].join(';');
      document.documentElement.appendChild(box);
      setTimeout(() => box.remove(), 7000);
    } catch (_) {}
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function log(message, data) {
    console.log(LOG_PREFIX, message, data || '');
  }
})();

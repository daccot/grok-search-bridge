export function $(selector, root = document) {
  return root.querySelector(selector);
}

export function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[c]));
}

export async function copyText(text) {
  await navigator.clipboard.writeText(text);
}

export function uniqueTags(presets) {
  return Array.from(new Set(presets.flatMap((p) => p.tags || []))).sort((a, b) => a.localeCompare(b, 'ja'));
}

const MENU_SUMMARIZE = 'grok-search-bridge-summarize-x-results';

chrome.runtime.onInstalled.addListener(async () => {
  try {
    await chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
  } catch (error) {
    console.warn('[Grok Search Bridge] setPanelBehavior failed', error);
  }

  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: MENU_SUMMARIZE,
      title: 'このX検索結果をGrok用に要約プロンプト化',
      contexts: ['page'],
      documentUrlPatterns: ['https://x.com/*', 'https://twitter.com/*']
    });
  });
});

chrome.action.onClicked.addListener(async (tab) => {
  try {
    await chrome.sidePanel.open({ windowId: tab.windowId });
  } catch (error) {
    console.warn('[Grok Search Bridge] open side panel failed', error);
  }
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId !== MENU_SUMMARIZE || !tab?.id) return;
  const url = tab.url || '';
  const payload = {
    source: 'contextMenu',
    input: `現在のX検索結果ページを要約したい。URL: ${url}`,
    query: extractQueryFromXUrl(url),
    createdAt: Date.now()
  };
  await chrome.storage.sync.set({ pendingContext: payload });
  try {
    await chrome.sidePanel.open({ windowId: tab.windowId });
  } catch (error) {
    console.warn('[Grok Search Bridge] open panel from context menu failed', error);
  }
});

function extractQueryFromXUrl(url) {
  try {
    const u = new URL(url);
    if (!u.pathname.startsWith('/search')) return '';
    return u.searchParams.get('q') || '';
  } catch (_) {
    return '';
  }
}

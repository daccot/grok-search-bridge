(() => {
  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message?.type !== 'GSB_GET_PAGE_CONTEXT') return;
    sendResponse({
      url: location.href,
      title: document.title,
      selection: String(window.getSelection?.() || '').trim()
    });
  });
})();

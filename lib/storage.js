const PRESETS_KEY = 'managedPresets';
const HISTORY_KEY = 'history';

export async function getState() {
  const syncDefaults = { [HISTORY_KEY]: [], favorites: [] };
  const localDefaults = { [PRESETS_KEY]: null };
  const [syncData, localData] = await Promise.all([
    chrome.storage.sync.get(Object.keys(syncDefaults)),
    chrome.storage.local.get(Object.keys(localDefaults))
  ]);
  return { ...syncDefaults, ...syncData, ...localDefaults, ...localData };
}

export async function saveManagedPresets(presets) {
  await chrome.storage.local.set({ [PRESETS_KEY]: presets });
  return presets;
}

export async function resetManagedPresets() {
  await chrome.storage.local.remove([PRESETS_KEY]);
}

export async function saveHistory(item) {
  const { history = [] } = await chrome.storage.sync.get([HISTORY_KEY]);
  const normalized = [item, ...history.filter((x) => x.query !== item.query)].slice(0, 20);
  await chrome.storage.sync.set({ [HISTORY_KEY]: normalized });
  return normalized;
}

export async function clearHistory() {
  await chrome.storage.sync.set({ [HISTORY_KEY]: [] });
}

export async function toggleFavorite(presetId) {
  const { favorites = [] } = await chrome.storage.sync.get(['favorites']);
  const next = favorites.includes(presetId)
    ? favorites.filter((x) => x !== presetId)
    : [...favorites, presetId];
  await chrome.storage.sync.set({ favorites: next });
  return next;
}

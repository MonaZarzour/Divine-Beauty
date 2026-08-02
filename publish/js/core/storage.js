export const readPreference = (key) => {
  try { return window.localStorage.getItem(key); } catch { return null; }
};
export const savePreference = (key, value) => {
  try { window.localStorage.setItem(key, value); } catch { /* Siden fungerer også uten lagring. */ }
};

export const LocalStorageService = {
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  getItem(key) {
    return localStorage.getItem(key);
  },

  clear() {
    localStorage.clear();
  },

  removeItem(key) {
    localStorage.removeItem(key);
  },
};

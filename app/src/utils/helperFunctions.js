export const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
    return null;
  }
}
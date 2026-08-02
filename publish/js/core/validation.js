export const isSafeExternalUrl = (value) => {
  try {
    const url = new URL(value, window.location.href);
    return ["http:", "https:"].includes(url.protocol);
  } catch {
    return false;
  }
};

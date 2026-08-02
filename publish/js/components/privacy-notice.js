import { readPreference, savePreference } from "../core/storage.js";

export const initPrivacyNotice = () => {
  const notice = document.querySelector("[data-privacy-notice]");
  const close = document.querySelector("[data-privacy-close]");
  if (!notice || !close) return;
  if (readPreference("divineBeautyPrivacyNotice") === "closed") notice.hidden = true;
  close.addEventListener("click", () => { notice.hidden = true; savePreference("divineBeautyPrivacyNotice", "closed"); });
};

import { clinicConfig } from "../core/config.js";

const setTextAndHref = (selector, text, href) => document.querySelectorAll(selector).forEach((element) => { element.textContent = text; element.setAttribute("href", href); });

export const initContactLinks = () => {
  setTextAndHref("[data-config-phone]", clinicConfig.phoneDisplay, clinicConfig.phoneHref);
  setTextAndHref("[data-config-email]", clinicConfig.email, clinicConfig.emailHref);
  document.querySelectorAll("[data-config-phone-link]").forEach((link) => link.href = clinicConfig.phoneHref);
  document.querySelectorAll("[data-config-email-link]").forEach((link) => link.href = `${clinicConfig.emailHref}?subject=Forespørsel%20om%20hudbehandling`);
  document.querySelectorAll("[data-config-address]").forEach((element) => element.innerHTML = `${clinicConfig.address}<br>${clinicConfig.postalCode} ${clinicConfig.city}`);
  document.querySelectorAll("[data-config-hours]").forEach((element) => element.textContent = clinicConfig.openingHours);
  document.querySelectorAll("[data-config-place]").forEach((element) => element.textContent = clinicConfig.city);
  document.querySelectorAll("[data-config-map]").forEach((link) => link.href = clinicConfig.mapUrl);
  document.querySelectorAll("[data-config-booking]").forEach((link) => {
    link.href = clinicConfig.bookingUrl;
    link.target = "_blank";
    link.rel = "noopener";
  });
  const socialLinks = [
    ["[data-config-instagram]", clinicConfig.instagram],
    ["[data-config-facebook]", clinicConfig.facebook]
  ];
  socialLinks.forEach(([selector, href]) => document.querySelectorAll(selector).forEach((link) => {
    link.hidden = !href;
    if (href) link.href = href;
    else link.removeAttribute("href");
  }));
  document.querySelectorAll("[data-config-social]").forEach((container) => {
    container.hidden = !clinicConfig.instagram && !clinicConfig.facebook;
  });
  document.querySelectorAll("[data-current-year]").forEach((element) => element.textContent = new Date().getFullYear());
};

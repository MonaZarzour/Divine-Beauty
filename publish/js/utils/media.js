import { assetVersions } from "../data/media-manifest.js?v=4";

export const versionedAssetPath = (src) => {
  const path = src.split(/[?#]/, 1)[0];
  const version = assetVersions[path];
  return version ? `${path}?v=${version}` : src;
};

export const applyAssetVersions = (root = document) => {
  const changedParents = new Set();
  root.querySelectorAll("img[src], source[src]").forEach((element) => {
    const current = element.getAttribute("src");
    const versioned = versionedAssetPath(current);
    if (versioned === current) return;
    element.setAttribute("src", versioned);
    if (element.tagName === "SOURCE") changedParents.add(element.parentElement);
  });
  changedParents.forEach((media) => media?.load?.());
};

export const filterExistingMedia = async (sources) => {
  const checks = await Promise.all(sources.map(async (src) => {
    try {
      const response = await fetch(src, { method: "HEAD" });
      return response.ok ? src : null;
    } catch {
      return null;
    }
  }));
  return checks.filter(Boolean);
};

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

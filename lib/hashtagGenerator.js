
export function generateHashtags(keyword) {
  const base = keyword.replace(/\s+/g, "");
  return [
    `#${base}`,
    `#${base}Reels`,
    `#${base}Trending`,
    `#${base}Viral`,
    `#${base}2026`,
    `#${base}Shorts`,
    `#${base}InIndia`
  ];
}

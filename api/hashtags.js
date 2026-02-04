
import { getTrends } from "../lib/trends.js";
import { generateHashtags } from "../lib/hashtagGenerator.js";

export default async function handler(req, res) {
  const { query, category } = req.query;

  let keyword = query || category || "trending";

  const viralScore = await getTrends(keyword);
  const hashtags = generateHashtags(keyword);

  res.status(200).json({
    success: true,
    keyword,
    viralScore,
    hashtags,
    updated: new Date().toISOString()
  });
}

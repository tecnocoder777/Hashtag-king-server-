
import googleTrends from "google-trends-api";

export async function getTrends(keyword) {
  try {
    const results = await googleTrends.interestOverTime({
      keyword,
      geo: "IN",
      time: "now 7-d"
    });

    return JSON.parse(results).default.timelineData.length;
  } catch (e) {
    return Math.floor(Math.random() * 100);
  }
}

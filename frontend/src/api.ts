import type { MetricsResponse } from "./types";

const API_URL = "http://localhost:8000";

export async function fetchMetrics(): Promise<MetricsResponse> {
  const res = await fetch(`${API_URL}/metrics`);
  if (!res.ok) throw new Error("Failed to fetch metrics");
  return res.json();
}

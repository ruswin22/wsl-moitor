import React, { useEffect, useState } from "react";
import { fetchMetrics } from "./api";
import type { MetricsResponse } from "./types";

import CpuCard from "./components/CpuCard";
import MemoryCard from "./components/MemoryCard";
import DiskCard from "./components/DiskCard";
import NetworkCard from "./components/NetworkCard";

const App: React.FC = () => {
  const [data, setData] = useState<MetricsResponse | null>(null);

  useEffect(() => {
    load();
    const interval = setInterval(load, 3000);
    return () => clearInterval(interval);
  }, []);

  async function load() {
    try {
      const metrics = await fetchMetrics();
      setData(metrics);
    } catch (err) {
      console.error("Error fetching metrics:", err);
    }
  }

  if (!data) return <h2>Loading WSL Stats…</h2>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>WSL Vitals Dashboard</h1>

      <CpuCard cpu={data.cpu} />
      <MemoryCard memory={data.memory} />
      <DiskCard disk={data.disk} />
      <NetworkCard network={data.network} />

      <p>Uptime: {data.uptime}</p>
    </div>
  );
};

export default App;

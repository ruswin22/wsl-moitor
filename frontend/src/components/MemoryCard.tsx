import React from "react";
import type { MemoryMetrics } from "../types";

interface Props {
  memory: MemoryMetrics;
}

const MemoryCard: React.FC<Props> = ({ memory }) => {
  return (
    <div style={{ margin: 10, padding: 10, border: "1px solid #ccc" }}>
      <h3>Memory Usage</h3>
      <p>
        {Math.round(memory.used / 1_000_000_000)}GB /{" "}
        {Math.round(memory.total / 1_000_000_000)}GB
      </p>
      <p>{memory.percent}%</p>
    </div>
  );
};

export default MemoryCard;

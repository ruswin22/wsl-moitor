import React from "react";
import type { DiskMetrics } from "../types";

interface Props {
  disk: DiskMetrics;
}

const DiskCard: React.FC<Props> = ({ disk }) => {
  return (
    <div style={{ margin: 10, padding: 10, border: "1px solid #ccc" }}>
      <h3>Disk Usage</h3>
      <p>
        {Math.round(disk.used / 1_000_000_000)}GB /{" "}
        {Math.round(disk.total / 1_000_000_000)}GB
      </p>
      <p>{disk.percent}%</p>
    </div>
  );
};

export default DiskCard;

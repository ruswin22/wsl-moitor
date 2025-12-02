import React from "react";
import type { NetworkMetrics } from "../types";

interface Props {
  network: NetworkMetrics;
}

const NetworkCard: React.FC<Props> = ({ network }) => {
  return (
    <div style={{ margin: 10, padding: 10, border: "1px solid #ccc" }}>
      <h3>Network I/O</h3>
      <p>Sent: {Math.round(network.bytes_sent / 1024)} KB</p>
      <p>Received: {Math.round(network.bytes_recv / 1024)} KB</p>
    </div>
  );
};

export default NetworkCard;

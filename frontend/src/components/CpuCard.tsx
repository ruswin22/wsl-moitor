import React from "react";

interface Props {
  cpu: number;
}

const CpuCard: React.FC<Props> = ({ cpu }) => {
  return (
    <div style={{ margin: 10, padding: 10, border: "1px solid #ccc" }}>
      <h3>CPU Usage</h3>
      <p>{cpu}%</p>
    </div>
  );
};

export default CpuCard;

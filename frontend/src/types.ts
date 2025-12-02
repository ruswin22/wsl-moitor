export interface CpuMetrics {
  percent: number;
}

export interface MemoryMetrics {
  total: number;
  used: number;
  percent: number;
}

export interface DiskMetrics {
  total: number;
  used: number;
  percent: number;
}

export interface NetworkMetrics {
  bytes_sent: number;
  bytes_recv: number;
}

export interface MetricsResponse {
  cpu: number | CpuMetrics;
  memory: MemoryMetrics;
  disk: DiskMetrics;
  network: NetworkMetrics;
  uptime: string;
}

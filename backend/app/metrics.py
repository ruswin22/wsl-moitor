# backend/app/metrics.py
import psutil
from prometheus_client import Gauge, generate_latest, CONTENT_TYPE_LATEST
from prometheus_client import CollectorRegistry

# Create registry to avoid global metrics collision in tests or repeated imports
registry = CollectorRegistry()

cpu_gauge = Gauge("wsl_cpu_percent", "CPU Usage Percentage", registry=registry)
mem_used = Gauge("wsl_memory_used_bytes", "Memory Used in Bytes", registry=registry)
mem_total = Gauge("wsl_memory_total_bytes", "Total Memory Bytes", registry=registry)
disk_used = Gauge("wsl_disk_used_bytes", "Disk Used in Bytes", registry=registry)
disk_total = Gauge("wsl_disk_total_bytes", "Disk Total in Bytes", registry=registry)
net_sent = Gauge("wsl_network_bytes_sent", "Network Bytes Sent", registry=registry)
net_recv = Gauge("wsl_network_bytes_recv", "Network Bytes Received", registry=registry)
uptime_gauge = Gauge("wsl_uptime_seconds", "WSL Uptime Seconds", registry=registry)

def collect_metrics():
    cpu = psutil.cpu_percent(interval=0.5)
    cpu_gauge.set(cpu)

    mem = psutil.virtual_memory()
    mem_used.set(mem.used)
    mem_total.set(mem.total)

    disk = psutil.disk_usage("/")
    disk_used.set(disk.used)
    disk_total.set(disk.total)

    net = psutil.net_io_counters()
    net_sent.set(net.bytes_sent)
    net_recv.set(net.bytes_recv)

    # uptime in seconds derived from psutil.boot_time
    import time
    uptime_seconds = int(time.time() - psutil.boot_time())
    uptime_gauge.set(uptime_seconds)

def prometheus_metrics_response():
    # update gauges
    collect_metrics()
    output = generate_latest(registry)
    return output

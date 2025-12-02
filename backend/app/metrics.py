import psutil
import subprocess
import json

def get_cpu():
    return psutil.cpu_percent(interval=1)

def get_memory():
    mem = psutil.virtual_memory()
    return {
        "total": mem.total,
        "used": mem.used,
        "percent": mem.percent
    }

def get_disk():
    disk = psutil.disk_usage("/")
    return {
        "total": disk.total,
        "used": disk.used,
        "percent": disk.percent
    }

def get_network():
    net = psutil.net_io_counters()
    return {
        "bytes_sent": net.bytes_sent,
        "bytes_recv": net.bytes_recv
    }

def get_uptime():
    output = subprocess.check_output(["uptime", "-p"]).decode()
    return output.strip()

def get_all_metrics():
    return {
        "cpu": get_cpu(),
        "memory": get_memory(),
        "disk": get_disk(),
        "network": get_network(),
        "uptime": get_uptime(),
    }

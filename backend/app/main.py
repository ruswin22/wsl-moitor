# backend/app/main.py
from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
from .metrics import prometheus_metrics_response

app = FastAPI(title="WSL Monitor Exporter")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "WSL Monitor Exporter Running"}

@app.get("/metrics")
def metrics():
    content = prometheus_metrics_response()
    return Response(content, media_type="text/plain; version=0.0.4; charset=utf-8")

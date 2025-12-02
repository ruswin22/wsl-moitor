from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .metrics import get_all_metrics

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "WSL Monitor Backend Running"}

@app.get("/metrics")
def metrics():
    return get_all_metrics()

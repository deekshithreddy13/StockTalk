from __future__ import annotations

from dataclasses import asdict, dataclass
from typing import Literal

try:
    from fastapi import FastAPI
    from fastapi.middleware.cors import CORSMiddleware
except ImportError:  # Allows syntax checks even before dependencies are installed.
    FastAPI = None
    CORSMiddleware = None


@dataclass
class Stock:
    symbol: str
    name: str
    sector: str
    price: float
    change: float
    market_cap_b: float
    pe_ratio: float
    eps: float
    dividend_yield: float
    rsi: int
    macd: float
    volume_m: int
    growth: int
    risk: int
    momentum: int
    trend: int


STOCKS = [
    Stock("AAPL", "Apple", "Technology", 213.40, 1.8, 3340, 31.2, 6.78, 0.52, 58, 1.4, 62, 78, 34, 82, 79),
    Stock("MSFT", "Microsoft", "Technology", 478.10, 2.3, 3550, 35.1, 13.6, 0.69, 62, 1.9, 38, 84, 29, 86, 88),
    Stock("NVDA", "Nvidia", "Technology", 141.20, 3.9, 3480, 46.8, 2.95, 0.03, 68, 2.5, 245, 94, 46, 93, 91),
    Stock("TSLA", "Tesla", "Automobile", 184.70, -1.7, 590, 52.4, 3.2, 0.0, 42, -0.8, 112, 70, 69, 46, 49),
    Stock("HDFCBANK", "HDFC Bank", "Banking", 1644.60, 1.5, 152, 19.1, 86.0, 1.17, 61, 1.2, 21, 73, 32, 77, 76),
    Stock("TCS", "TCS", "Technology", 3920.40, 0.7, 171, 29.8, 131.6, 1.38, 55, 0.8, 5, 71, 27, 64, 72),
]


def investment_score(stock: Stock) -> int:
    volume_score = min(stock.volume_m, 100)
    return round((stock.growth + (100 - stock.risk) + stock.momentum + stock.trend + volume_score) / 5)


def grade(score: int) -> str:
    if score >= 88:
        return "A+"
    if score >= 78:
        return "A"
    if score >= 68:
        return "B+"
    if score >= 58:
        return "B"
    if score >= 45:
        return "C"
    return "D"


def recommendation(stock: Stock) -> dict[str, str | int]:
    score = investment_score(stock)
    if stock.rsi > 70 or stock.trend < 42 or stock.macd < -0.6:
        return {
            "action": "SELL",
            "confidence": max(62, 100 - score),
            "reason": "Weak trend or overextended indicators are reducing short-term confidence.",
        }
    if score >= 70 and stock.rsi < 70 and stock.macd > 0:
        return {
            "action": "BUY",
            "confidence": score,
            "reason": "Strong momentum, positive MACD, and healthy trend strength support a bullish setup.",
        }
    return {
        "action": "HOLD",
        "confidence": max(58, score),
        "reason": "Signals are mixed, so waiting for stronger confirmation is more suitable.",
    }


def find_stock(query: str) -> Stock:
    normalized = query.lower()
    for stock in STOCKS:
        if stock.symbol.lower() in normalized or stock.name.lower() in normalized:
            return stock
    return STOCKS[0]


def build_ai_response(query: str) -> dict[str, object]:
    stock = find_stock(query)
    score = investment_score(stock)
    rec = recommendation(stock)
    return {
        "query": query,
        "intent": classify_intent(query),
        "stock": stock.symbol,
        "score": score,
        "grade": grade(score),
        "recommendation": rec,
        "answer": (
            f"{stock.name} ({stock.symbol}) has an investment score of {score}/100 "
            f"with grade {grade(score)}. Recommendation: {rec['action']} at "
            f"{rec['confidence']}% confidence. {rec['reason']}"
        ),
    }


def classify_intent(query: str) -> Literal["compare", "predict", "screen", "portfolio", "analyze"]:
    normalized = query.lower()
    if "compare" in normalized:
        return "compare"
    if "predict" in normalized:
        return "predict"
    if "best" in normalized or "undervalued" in normalized or "safe" in normalized:
        return "screen"
    if "invest" in normalized or "portfolio" in normalized:
        return "portfolio"
    return "analyze"


def create_app():
    if FastAPI is None:
        raise RuntimeError("FastAPI is not installed. Run: pip install -r requirements.txt")

    app = FastAPI(title="Stock Talk API", version="1.0.0")
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.get("/health")
    def health() -> dict[str, str]:
        return {"status": "ok", "service": "stock-talk-api"}

    @app.get("/api/stocks")
    def stocks() -> list[dict[str, object]]:
        return [{**asdict(stock), "score": investment_score(stock), "grade": grade(investment_score(stock))} for stock in STOCKS]

    @app.get("/api/market/overview")
    def market_overview() -> dict[str, object]:
        bullish = [stock for stock in STOCKS if stock.change > 0]
        bearish = [stock for stock in STOCKS if stock.change < 0]
        return {
            "total": len(STOCKS),
            "bullish": len(bullish),
            "bearish": len(bearish),
            "top_gainers": sorted((asdict(stock) for stock in STOCKS), key=lambda item: item["change"], reverse=True)[:5],
            "top_losers": sorted((asdict(stock) for stock in STOCKS), key=lambda item: item["change"])[:5],
            "ai_summary": "Technology and Banking are leading while high-volatility names require risk control.",
        }

    @app.get("/api/analyze/{symbol}")
    def analyze(symbol: str) -> dict[str, object]:
        stock = find_stock(symbol)
        score = investment_score(stock)
        return {
            **asdict(stock),
            "score": score,
            "grade": grade(score),
            "recommendation": recommendation(stock),
            "support": round(stock.price * 0.94, 2),
            "resistance": round(stock.price * 1.09, 2),
        }

    @app.post("/api/assistant")
    def assistant(payload: dict[str, str]) -> dict[str, object]:
        return build_ai_response(payload.get("message", "Analyze Apple"))

    @app.post("/api/search")
    def search(payload: dict[str, str]) -> dict[str, object]:
        return build_ai_response(payload.get("query", "Analyze Apple"))

    return app


app = create_app() if FastAPI is not None else None

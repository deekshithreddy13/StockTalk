# Stock Talk Setup Guide

## Clean VS Code Process

1. Open VS Code.
2. Choose `File > Open Folder`.
3. Open `/Users/eppadeekshithreddy/Documents/Stock Talk`.
4. Open a terminal in VS Code.
5. Run the frontend demo:

```bash
python3 -m http.server 5173 -d frontend
```

6. Open `http://localhost:5173`.
7. Click `ENTER STOCK TALK` to open `home.html`.
8. Use the large search bar and example stock questions to open `search.html?q=your-question`.
9. Use the left sidebar to move into dedicated pages such as `dashboard.html`, `portfolio.html`, `market-heatmap.html`, and `ai-assistant.html`.

## Backend Setup

1. Create a virtual environment:

```bash
python3 -m venv .venv
```

2. Activate it:

```bash
source .venv/bin/activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Create environment file:

```bash
cp .env.example .env
```

5. Start the API:

```bash
uvicorn backend.app.main:app --reload --port 8000
```

6. Test API:

```bash
curl http://localhost:8000/health
```

## Module-by-Module Implementation

1. Landing Page: `frontend/index.html`, `frontend/styles.css`, animated canvas in `frontend/app.js`.
2. Search Home: dedicated `home.html` page with left sidebar, large AI search, and example stock queries.
3. Dashboard: dedicated `dashboard.html` page with sidebar, top navigation, ticker, market cards, charts.
4. AI Search: dedicated `search.html` page with frontend intent simulation plus `/api/search` backend route.
4. Market Overview: gainers, losers, active stocks, AI summary.
5. Heatmap: sector filter, green/red performance, market-cap tile size.
6. Sector Analysis: growth, momentum, risk, leader, AI summary.
7. Stock Scoring: growth, risk, momentum, trend, volume, overall grade.
8. Stock Analysis: price, PE, EPS, RSI, MACD, support, resistance, recommendation.
9. Prediction: simple educational trend forecast with disclaimer.
10. News Sentiment: positive, negative, neutral, sentiment trend.
11. Portfolio Simulator: amount, basket, horizon, expected value, risk, diversification.
12. AI Assistant: floating assistant, beginner explanations, dashboard context.

## API Documentation

- `GET /health`: API status.
- `GET /api/stocks`: stock universe with scores and grades.
- `GET /api/market/overview`: market counts, gainers, losers, summary.
- `GET /api/analyze/{symbol}`: detailed stock analysis.
- `POST /api/search`: natural language market query.
- `POST /api/assistant`: assistant conversation response.

## Connecting Real Services

- Gemini: add `GEMINI_API_KEY` in `.env`, then replace `build_ai_response` with a Gemini prompt call.
- Yahoo Finance: use `yfinance.Ticker(symbol)` inside `/api/analyze/{symbol}` when `ENABLE_LIVE_MARKET_DATA=true`.
- Redis: store assistant conversation history using `REDIS_URL`.

## Deployment Guide

- Frontend: deploy `frontend/` to Netlify, Vercel static hosting, or GitHub Pages.
- Backend: deploy FastAPI to Render, Railway, Fly.io, or an AWS EC2 instance.
- Set environment variables on the hosting platform.
- Keep the educational disclaimer visible for prediction and recommendation modules.

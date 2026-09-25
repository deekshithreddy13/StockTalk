# Stock Talk

Stock Talk is a mini-project AI Market Intelligence Platform with a premium dark UI, landing page, dedicated search home page, dashboard, AI search result page, market overview, heatmap, sector analysis, screener, stock analysis, prediction, sentiment, portfolio simulator, profile page, and floating assistant.

## Run the Frontend

```bash
python3 -m http.server 5173 -d frontend
```

Open `http://localhost:5173`.

The app uses real page files:

```text
index.html              Landing page
home.html               First in-app page with only AI search and examples
profile.html            User profile and learning session page
dashboard.html          Main dashboard
search.html             Universal AI search results
market-overview.html    Market overview
market-heatmap.html     Market heatmap
sector-analysis.html    Sector analysis
ai-screener.html        AI screener
stock-analysis.html     Stock analysis
stock-prediction.html   Stock prediction
news-sentiment.html     News sentiment
portfolio.html          Portfolio simulator
ai-assistant.html       AI assistant
settings.html           Settings
```

## Run the Backend

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn backend.app.main:app --reload --port 8000
```

## Project Structure

```text
frontend/
  index.html
  home.html
  profile.html
  dashboard.html
  search.html
  module pages...
  styles.css
  app.js
backend/
  app/
    main.py
docs/
  SETUP.md
requirements.txt
.env.example
```

See `docs/SETUP.md` for the full VS Code setup, API documentation, integration notes, and deployment guide.

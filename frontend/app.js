const stocks = [
  { symbol: "AAPL", name: "Apple", sector: "Technology", price: 213.4, currency: "$", tier: "Large", change: 1.8, cap: 3340, pe: 31.2, eps: 6.78, dividend: 0.52, rsi: 58, macd: 1.4, volume: 62, growth: 78, risk: 34, momentum: 82, trend: 79 },
  { symbol: "MSFT", name: "Microsoft", sector: "Technology", price: 478.1, currency: "$", tier: "Large", change: 2.3, cap: 3550, pe: 35.1, eps: 13.6, dividend: 0.69, rsi: 62, macd: 1.9, volume: 38, growth: 84, risk: 29, momentum: 86, trend: 88 },
  { symbol: "NVDA", name: "Nvidia", sector: "Technology", price: 141.2, currency: "$", tier: "Large", change: 3.9, cap: 3480, pe: 46.8, eps: 2.95, dividend: 0.03, rsi: 68, macd: 2.5, volume: 245, growth: 94, risk: 46, momentum: 93, trend: 91 },
  { symbol: "TSLA", name: "Tesla", sector: "Automobile", price: 184.7, currency: "$", tier: "Large", change: -1.7, cap: 590, pe: 52.4, eps: 3.2, dividend: 0, rsi: 42, macd: -0.8, volume: 112, growth: 70, risk: 69, momentum: 46, trend: 49 },
  { symbol: "JPM", name: "JPMorgan", sector: "Finance", price: 268.9, currency: "$", tier: "Large", change: 0.9, cap: 742, pe: 14.1, eps: 19.0, dividend: 2.1, rsi: 54, macd: 0.9, volume: 13, growth: 65, risk: 31, momentum: 68, trend: 71 },
  { symbol: "UNH", name: "UnitedHealth", sector: "Healthcare", price: 306.5, currency: "$", tier: "Large", change: -0.6, cap: 281, pe: 13.7, eps: 22.3, dividend: 2.75, rsi: 38, macd: -0.5, volume: 8, growth: 48, risk: 42, momentum: 39, trend: 44 },
  { symbol: "RELIANCE", name: "Reliance", sector: "Energy", price: 1430.2, currency: "₹", tier: "Large", change: 1.1, cap: 234, pe: 24.6, eps: 58.1, dividend: 0.62, rsi: 57, macd: 0.6, volume: 18, growth: 69, risk: 36, momentum: 63, trend: 66 },
  { symbol: "TCS", name: "TCS", sector: "Technology", price: 3920.4, currency: "₹", tier: "Large", change: 0.7, cap: 171, pe: 29.8, eps: 131.6, dividend: 1.38, rsi: 55, macd: 0.8, volume: 5, growth: 71, risk: 27, momentum: 64, trend: 72 },
  { symbol: "HDFCBANK", name: "HDFC Bank", sector: "Banking", price: 1644.6, currency: "₹", tier: "Large", change: 1.5, cap: 152, pe: 19.1, eps: 86.0, dividend: 1.17, rsi: 61, macd: 1.2, volume: 21, growth: 73, risk: 32, momentum: 77, trend: 76 },
  { symbol: "PFE", name: "Pfizer", sector: "Pharma", price: 24.5, currency: "$", tier: "Large", change: -0.9, cap: 138, pe: 17.5, eps: 1.4, dividend: 6.8, rsi: 36, macd: -0.7, volume: 42, growth: 38, risk: 48, momentum: 34, trend: 37 },
  { symbol: "AMZN", name: "Amazon", sector: "Consumer Goods", price: 183.6, currency: "$", tier: "Large", change: 2.1, cap: 1920, pe: 33.9, eps: 5.4, dividend: 0, rsi: 64, macd: 1.6, volume: 54, growth: 83, risk: 41, momentum: 81, trend: 84 },
  { symbol: "PLD", name: "Prologis", sector: "Real Estate", price: 109.3, currency: "$", tier: "Large", change: -0.3, cap: 101, pe: 28.3, eps: 3.9, dividend: 3.7, rsi: 47, macd: -0.1, volume: 7, growth: 46, risk: 39, momentum: 45, trend: 48 },
  { symbol: "GTLINFRA", name: "GTL Infrastructure", sector: "Telecom", price: 1.65, currency: "₹", tier: "Penny", change: -1.2, cap: 0.26, pe: 0, eps: -0.4, dividend: 0, rsi: 35, macd: -0.2, volume: 188, growth: 32, risk: 88, momentum: 34, trend: 31 },
  { symbol: "FILATFASH", name: "Filatex Fashions", sector: "Textiles", price: 1.18, currency: "₹", tier: "Penny", change: 0.6, cap: 0.08, pe: 18.4, eps: 0.06, dividend: 0, rsi: 49, macd: 0.1, volume: 74, growth: 36, risk: 84, momentum: 42, trend: 39 },
  { symbol: "IDEA", name: "Vodafone Idea", sector: "Telecom", price: 7.85, currency: "₹", tier: "Low", change: 2.8, cap: 7.9, pe: 0, eps: -6.2, dividend: 0, rsi: 53, macd: 0.4, volume: 310, growth: 54, risk: 82, momentum: 58, trend: 52 },
  { symbol: "YESBANK", name: "Yes Bank", sector: "Banking", price: 22.4, currency: "₹", tier: "Low", change: 1.1, cap: 8.1, pe: 38.2, eps: 0.59, dividend: 0, rsi: 56, macd: 0.3, volume: 146, growth: 55, risk: 62, momentum: 57, trend: 54 },
  { symbol: "SOUTHBANK", name: "South Indian Bank", sector: "Banking", price: 28.7, currency: "₹", tier: "Low", change: -0.4, cap: 0.9, pe: 6.7, eps: 4.2, dividend: 1.1, rsi: 47, macd: -0.1, volume: 48, growth: 52, risk: 55, momentum: 45, trend: 49 },
  { symbol: "TRIDENT", name: "Trident", sector: "Textiles", price: 33.1, currency: "₹", tier: "Low", change: 0.8, cap: 2.1, pe: 31.5, eps: 1.05, dividend: 1.4, rsi: 51, macd: 0.2, volume: 36, growth: 50, risk: 52, momentum: 52, trend: 51 },
  { symbol: "SUZLON", name: "Suzlon Energy", sector: "Energy", price: 58.2, currency: "₹", tier: "Low", change: 3.4, cap: 9.8, pe: 44.6, eps: 1.3, dividend: 0, rsi: 66, macd: 1.1, volume: 132, growth: 78, risk: 64, momentum: 81, trend: 76 },
  { symbol: "IDFCFIRSTB", name: "IDFC First Bank", sector: "Banking", price: 72.4, currency: "₹", tier: "Medium", change: 0.5, cap: 6.3, pe: 18.6, eps: 3.9, dividend: 0, rsi: 52, macd: 0.2, volume: 41, growth: 61, risk: 46, momentum: 55, trend: 58 },
  { symbol: "NHPC", name: "NHPC", sector: "Energy", price: 92.3, currency: "₹", tier: "Medium", change: 1.7, cap: 11.1, pe: 26.8, eps: 3.4, dividend: 2.1, rsi: 59, macd: 0.7, volume: 63, growth: 64, risk: 42, momentum: 68, trend: 66 },
  { symbol: "IRFC", name: "Indian Railway Finance", sector: "Finance", price: 136.5, currency: "₹", tier: "Medium", change: -0.8, cap: 21.4, pe: 27.2, eps: 5.0, dividend: 1.2, rsi: 44, macd: -0.2, volume: 54, growth: 58, risk: 48, momentum: 43, trend: 50 },
  { symbol: "TATASTEEL", name: "Tata Steel", sector: "Metals", price: 158.2, currency: "₹", tier: "Medium", change: 1.3, cap: 23.5, pe: 18.1, eps: 8.7, dividend: 2.3, rsi: 57, macd: 0.5, volume: 39, growth: 60, risk: 47, momentum: 61, trend: 62 },
  { symbol: "BIOCON", name: "Biocon", sector: "Pharma", price: 355.4, currency: "₹", tier: "Medium", change: 0.4, cap: 5.2, pe: 41.8, eps: 8.5, dividend: 0.6, rsi: 50, macd: 0.1, volume: 11, growth: 57, risk: 44, momentum: 52, trend: 55 }
];

const ipos = [
  { symbol: "NSEIPO", name: "National Stock Exchange IPO", sector: "Financial Markets", priceBand: "TBA", lotSize: "TBA", type: "Mainboard", status: "DRHP filed", affordability: "Large ticket", risk: 42, demand: 88, growth: 82 },
  { symbol: "UTKALSPEC", name: "Utkal Speciality Industries", sector: "Manufacturing", priceBand: "₹62-₹66", lotSize: "2,000 shares", type: "SME", status: "Recent SME issue", affordability: "High minimum lot", risk: 68, demand: 58, growth: 63 },
  { symbol: "SAFERETAIL", name: "Safe Enterprises Retail Fixtures", sector: "Retail Fixtures", priceBand: "₹131-₹138", lotSize: "SME lot", type: "SME", status: "SME listed", affordability: "Medium price, lot based", risk: 61, demand: 56, growth: 59 },
  { symbol: "GROWWIPO", name: "Groww IPO", sector: "Fintech", priceBand: "Expected", lotSize: "TBA", type: "Mainboard", status: "Expected", affordability: "To be confirmed", risk: 55, demand: 76, growth: 80 },
  { symbol: "MEESHOIPO", name: "Meesho IPO", sector: "Consumer Internet", priceBand: "Expected", lotSize: "TBA", type: "Mainboard", status: "Expected", affordability: "To be confirmed", risk: 62, demand: 72, growth: 78 },
  { symbol: "SMELOW", name: "Sample Low-Price SME IPO", sector: "Small Business", priceBand: "₹10-₹20", lotSize: "Large SME lot", type: "SME Demo", status: "Educational demo", affordability: "Low share price, lot risk", risk: 78, demand: 44, growth: 50 }
];

const navItems = [
  ["Profile", "◉", "profile.html"],
  ["Search Home", "⌕", "home.html"],
  ["Dashboard", "▣", "dashboard.html"],
  ["Market Overview", "▤", "market-overview.html"],
  ["Market Heatmap", "▦", "market-heatmap.html"],
  ["Sector Analysis", "◌", "sector-analysis.html"],
  ["AI Screener", "⚯", "ai-screener.html"],
  ["Stock Analysis", "⌁", "stock-analysis.html"],
  ["Stock Prediction", "⌃", "stock-prediction.html"],
  ["News Sentiment", "◍", "news-sentiment.html"],
  ["Portfolio Simulator", "₹", "portfolio.html"],
  ["IPOs", "IPO", "ipos.html"],
  ["AI Assistant", "AI", "ai-assistant.html"],
  ["Settings", "⚙", "settings.html"]
];

let currentView = document.body.dataset.page || "Dashboard";
let beginnerMode = false;

const $ = (selector) => document.querySelector(selector);
let root = null;

function score(stock) {
  return Math.round((stock.growth + (100 - stock.risk) + stock.momentum + stock.trend + Math.min(stock.volume, 100)) / 5);
}

function grade(value) {
  if (value >= 88) return "A+";
  if (value >= 78) return "A";
  if (value >= 68) return "B+";
  if (value >= 58) return "B";
  if (value >= 45) return "C";
  return "D";
}

function recommendation(stock) {
  const total = score(stock);
  if (stock.rsi > 70 || stock.trend < 42 || stock.macd < -0.6) return ["SELL", Math.max(62, 100 - total), "Weak trend or overextended indicators are reducing short-term confidence."];
  if (total >= 70 && stock.rsi < 70 && stock.macd > 0) return ["BUY", total, "Strong momentum, positive MACD, and healthy trend strength support a bullish setup."];
  return ["HOLD", Math.max(58, total), "Signals are mixed, so waiting for stronger confirmation is more suitable."];
}

function findStock(query) {
  const q = query.toLowerCase();
  return stocks.find((item) => q.includes(item.symbol.toLowerCase()) || q.includes(item.name.toLowerCase())) || stocks[0];
}

function stockAliases(stock) {
  const aliases = [stock.symbol, stock.name];
  if (stock.symbol === "MSFT") aliases.push("Microsoft");
  if (stock.symbol === "NVDA") aliases.push("Nvidia");
  if (stock.symbol === "AAPL") aliases.push("Apple");
  if (stock.symbol === "TSLA") aliases.push("Tesla");
  if (stock.symbol === "HDFCBANK") aliases.push("HDFC", "HDFC Bank");
  if (stock.symbol === "RELIANCE") aliases.push("Reliance");
  if (stock.symbol === "IDEA") aliases.push("VI", "Vodafone");
  if (stock.symbol === "GTLINFRA") aliases.push("GTL Infra");
  if (stock.symbol === "IDFCFIRSTB") aliases.push("IDFC", "IDFC First");
  return aliases.map((item) => item.toLowerCase());
}

function extractStocks(query) {
  const q = query.toLowerCase();
  return stocks
    .map((stock) => {
      const matches = stockAliases(stock)
        .map((alias) => q.indexOf(alias))
        .filter((index) => index >= 0);
      return matches.length ? { stock, index: Math.min(...matches) } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.index - b.index)
    .map((item) => item.stock);
}

function extractIpos(query) {
  const q = query.toLowerCase();
  if ((q.includes("compare") || q.includes("best") || q.includes("safe") || q.includes("ipo")) && !ipos.some((ipo) => q.includes(ipo.symbol.toLowerCase()) || q.includes(ipo.name.toLowerCase()))) {
    return ipos;
  }
  return ipos
    .map((ipo) => {
      const aliases = [ipo.symbol, ipo.name, ipo.sector].map((item) => item.toLowerCase());
      const matches = aliases.map((alias) => q.indexOf(alias)).filter((index) => index >= 0);
      return matches.length
        ? { ipo, index: Math.min(...matches) }
        : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.index - b.index)
    .map((item) => item.ipo);
}

function selectedStockFromUrl(fallback = stocks[0]) {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q") || params.get("symbol") || "";
  return extractStocks(query)[0] || fallback;
}

function comparisonSummary(selected) {
  const ranked = [...selected].sort((a, b) => score(b) - score(a));
  const best = ranked[0];
  const safest = [...selected].sort((a, b) => a.risk - b.risk)[0];
  const highReturn = [...selected].sort((a, b) => b.growth + b.momentum - (a.growth + a.momentum))[0];
  const details = selected.map((stock) => {
    const [rec, confidence] = recommendation(stock);
    return `${stock.name} (${stock.symbol}) price ${money(stock.price, stock.currency)}, tier ${stock.tier}, score ${score(stock)}/100, risk ${stock.risk}/100, momentum ${stock.momentum}/100, signal ${rec} (${confidence}%)`;
  }).join("; ");
  return `${details}. Best to buy among these: ${best.name}, because it has the strongest combined score, trend, and momentum. Safer choice: ${safest.name}, because it has the lowest risk score. Higher-return candidate: ${highReturn.name}, but only with risk control.`;
}

function ipoSummary(selected) {
  const list = selected.length ? selected : ipos.slice(0, 4);
  const bestDemand = [...list].sort((a, b) => b.demand - a.demand)[0];
  const lowestRisk = [...list].sort((a, b) => a.risk - b.risk)[0];
  return `${list.map((ipo) => `${ipo.name}: ${ipo.priceBand}, ${ipo.type}, ${ipo.status}, risk ${ipo.risk}/100`).join("; ")}. Strongest demand signal: ${bestDemand.name}. Lower-risk profile: ${lowestRisk.name}. IPOs can require lot-size investment, so beginners should check minimum amount before applying.`;
}

function requestedPriceLimit(query) {
  const q = query.toLowerCase();
  const match = q.match(/(?:under|below|less than|within)\s*(?:₹|rs\.?|rupees?)?\s*(\d+)/i);
  if (match) return Number(match[1]);
  if (q.includes("1rs") || q.includes("1 rupee")) return 5;
  if (q.includes("penny") || q.includes("cheap") || q.includes("lowest")) return 100;
  return 100;
}

function renderShell() {
  const app = $("#app");
  if (!app) return;

  app.innerHTML = `
    <aside class="sidebar">
      <a class="sidebar-brand" href="home.html" aria-label="Stock Talk Home">
        <div class="brand-mark">ST</div>
        <div>
          <strong>Stock Talk</strong>
          <span>AI Terminal</span>
        </div>
      </a>
      <nav id="sideNav"></nav>
      <button id="beginnerToggle" class="beginner-toggle" type="button">Beginner Mode: Off</button>
    </aside>

    <main class="workspace">
      <header class="topbar">
        <form id="searchForm" class="search-box">
          <span>⌕</span>
          <input id="aiSearch" placeholder="Search stocks/IPOs: cheapest stocks, compare Tesla and Nvidia, analyze Suzlon, compare IPOs..." />
        </form>
        <div class="status-pill"><span></span> Market Open · Bullish</div>
        <button class="icon-button" aria-label="Notifications">◔</button>
        <div class="user-chip">Student Demo</div>
      </header>

      <div class="ticker" aria-label="Market ticker">
        <div id="tickerTrack"></div>
      </div>

      <section class="content">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Live Demo Workspace</p>
            <h2 id="viewTitle">${currentView}</h2>
          </div>
          <p id="viewSubtitle">${subtitles[currentView] || "Explore AI powered market intelligence."}</p>
        </div>
        <div id="viewRoot"></div>
      </section>
    </main>

    <button id="assistantButton" class="assistant-button" aria-label="Open Stock Talk Assistant">AI</button>
    <section id="assistantPanel" class="assistant-panel hidden" aria-live="polite">
      <header>
        <div>
          <strong>Stock Talk Assistant</strong>
          <span>Context-aware learning guide</span>
        </div>
        <button id="closeAssistant" class="icon-button" aria-label="Close assistant">×</button>
      </header>
      <div id="assistantMessages" class="assistant-messages"></div>
      <form id="assistantForm" class="assistant-form">
        <input id="assistantInput" placeholder="Ask about RSI, MACD, buy/sell signals..." />
        <button type="submit">Send</button>
      </form>
    </section>
  `;

  root = $("#viewRoot");
}

function renderNav() {
  $("#sideNav").innerHTML = navItems.map(([label, icon, href]) => `
    <a class="nav-item ${label === currentView ? "active" : ""}" href="${href}">
      <span class="nav-icon">${icon}</span><span>${label}</span>
    </a>
  `).join("");
}

function setView(view) {
  const item = navItems.find(([label]) => label === view);
  if (item) window.location.href = item[2];
}

const subtitles = {
  Profile: "Your demo profile, learning mode, watchlist, and session overview.",
  "Search Home": "Start by asking any stock-market question or selecting an example.",
  Dashboard: "AI market intelligence summary for students, investors, and beginners.",
  "Market Overview": "Track gainers, losers, active stocks, bullish signals, and AI market summary.",
  "Market Heatmap": "Green shows positive performance, red shows weakness, tile size reflects market capitalization.",
  "Sector Analysis": "Compare growth, momentum, risk, market strength, and sector leaders.",
  "AI Screener": "Filter stocks using RSI, MACD, market cap, volume, sector, growth, and dividend yield.",
  "Stock Analysis": "Inspect price, valuation, indicators, support, resistance, risk, and AI explanation.",
  "Stock Prediction": "Educational forecast using simple trend and moving-average style projection.",
  "News Sentiment": "Demo sentiment engine for recent market news and investor mood.",
  "Portfolio Simulator": "Estimate expected return, risk level, diversification, and AI suggestions.",
  IPOs: "Explore beginner-friendly IPO education, SME IPO risk, price bands, lots, and demand signals.",
  "AI Assistant": "Ask beginner-friendly stock market questions and dashboard guidance.",
  "AI Search": "Ask any stock-market question and get a focused AI intelligence response.",
  Settings: "Configure demo mode, API readiness, and presentation preferences."
};

function metricCard(label, value, detail = "") {
  return `<article class="card"><span class="metric">${label}</span><strong class="metric-value">${value}</strong><span class="muted">${detail}</span></article>`;
}

function searchHome() {
  const examples = [
    "Analyze Apple",
    "Compare Apple and Microsoft",
    "Show best technology stocks",
    "Which sectors are growing?",
    "Top gainers today",
    "Which stocks are undervalued?",
    "Should I buy Tesla?",
    "Where should I invest ₹50,000?",
    "Predict Nvidia stock",
    "Show safest stocks",
    "Show cheapest stocks under ₹20",
    "Compare Suzlon and Yes Bank",
    "Show beginner IPOs",
    "Compare NSE IPO and SME IPO"
  ];

  root.innerHTML = `
    <section class="search-home-panel">
      <p class="eyebrow">Universal AI Search Engine</p>
      <h3>Ask Stock Talk anything</h3>
      <p>Search stocks, compare companies, ask beginner questions, find sectors, simulate investments, or request predictions.</p>
      <form id="heroSearchForm" class="hero-search">
        <span>⌕</span>
        <input id="heroSearchInput" placeholder="Example: cheapest stocks under ₹20, analyze Suzlon, compare IPOs, where should I invest ₹5,000..." autofocus />
        <button type="submit">Search</button>
      </form>
      <div class="example-grid">
        ${examples.map((example) => `<button class="example-card" type="button" data-query="${example}">${example}</button>`).join("")}
      </div>
    </section>
  `;

  const go = (query) => {
    if (!query.trim()) return;
    window.location.href = `search.html?q=${encodeURIComponent(query.trim())}`;
  };

  $("#heroSearchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    go($("#heroSearchInput").value);
  });

  document.querySelectorAll(".example-card").forEach((button) => {
    button.addEventListener("click", () => go(button.dataset.query));
  });
}

function profile() {
  const savedProfile = JSON.parse(localStorage.getItem("stockTalkProfile") || "{}");
  const profileData = {
    name: savedProfile.name || "Student Demo",
    gmail: savedProfile.gmail || "student@gmail.com",
    phone: savedProfile.phone || "+91 98765 43210",
    beginner: savedProfile.beginner || "Yes"
  };
  root.innerHTML = `
    <div class="grid cols-4">
      ${metricCard("Name", profileData.name, "Profile identity")}
      ${metricCard("Gmail", profileData.gmail, "Login email")}
      ${metricCard("Phone", profileData.phone, "Contact number")}
      ${metricCard("Beginner", profileData.beginner, "Learning mode")}
    </div>
    <div class="grid cols-2" style="margin-top:16px">
      <article class="card">
        <h3>Edit Profile</h3>
        <form id="profileForm" class="form-grid">
          <div class="field"><label>Name</label><input id="profileName" value="${profileData.name}" /></div>
          <div class="field"><label>Gmail</label><input id="profileGmail" type="email" value="${profileData.gmail}" /></div>
          <div class="field"><label>Phone Number</label><input id="profilePhone" value="${profileData.phone}" /></div>
          <div class="field"><label>Beginner or Not</label><select id="profileBeginner"><option ${profileData.beginner === "Yes" ? "selected" : ""}>Yes</option><option ${profileData.beginner === "No" ? "selected" : ""}>No</option></select></div>
          <button class="primary-cta small-cta" type="submit">Save Profile</button>
        </form>
        <p id="profileSaved" class="muted"></p>
      </article>
      <article class="card">
        <h3>Profile Overview</h3>
        <p class="insight-box">Profile opens only when you select Profile from the sidebar. It stores Gmail, name, phone number, and beginner status locally for the demo.</p>
      </article>
    </div>
    <div class="grid cols-2" style="margin-top:16px">
      <article class="card">
        <h3>Saved Watchlist</h3>
        ${metricCard("Watchlist", "8 Stocks", "AAPL, MSFT, NVDA, TCS")}
        ${metricCard("Saved Queries", "12", "Demo memory ready")}
      </article>
      <article class="card">
        <h3>Learning Progress</h3>
        ${bar("RSI Understanding", 72)}
        ${bar("MACD Understanding", 58)}
        ${bar("Portfolio Basics", 81)}
      </article>
    </div>
  `;

  $("#profileForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const updated = {
      name: $("#profileName").value.trim() || "Student Demo",
      gmail: $("#profileGmail").value.trim() || "student@gmail.com",
      phone: $("#profilePhone").value.trim() || "+91 98765 43210",
      beginner: $("#profileBeginner").value
    };
    localStorage.setItem("stockTalkProfile", JSON.stringify(updated));
    beginnerMode = updated.beginner === "Yes";
    $("#profileSaved").textContent = "Profile saved successfully.";
  });
}

function table(title, rows, columns) {
  return `
    <article class="table-card">
      <h3>${title}</h3>
      <table>
        <thead><tr>${columns.map((col) => `<th>${col}</th>`).join("")}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </article>
  `;
}

function drawLineChart(canvas, seed = 1, positive = true, progress = 1) {
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const w = Math.max(320, Math.round(rect.width || canvas.clientWidth || 640));
  const h = Math.max(220, Math.round(rect.height || canvas.clientHeight || 260));
  canvas.width = Math.round(w * devicePixelRatio);
  canvas.height = Math.round(h * devicePixelRatio);
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "rgba(7,16,32,.76)";
  ctx.fillRect(0, 0, w, h);

  const area = ctx.createLinearGradient(0, 0, 0, h);
  area.addColorStop(0, positive ? "rgba(78,222,163,.22)" : "rgba(255,111,127,.22)");
  area.addColorStop(1, "rgba(77,142,255,0)");

  ctx.strokeStyle = "rgba(190,207,255,.1)";
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(0, (h / 5) * i + 22);
    ctx.lineTo(w, (h / 5) * i + 22);
    ctx.stroke();
  }
  const gradient = ctx.createLinearGradient(0, 0, w, 0);
  gradient.addColorStop(0, "#4d8eff");
  gradient.addColorStop(1, positive ? "#4edea3" : "#ff6f7f");
  ctx.strokeStyle = gradient;
  ctx.lineWidth = 3;
  ctx.beginPath();
  const points = [];
  const change = Number(canvas.dataset.change || (positive ? 1 : -1));
  const risk = Number(canvas.dataset.risk || 45);
  const momentum = Number(canvas.dataset.momentum || (positive ? 65 : 35));
  const direction = change >= 0 ? -1 : 1;
  const slope = Math.max(0.55, Math.min(2.4, Math.abs(change) / 1.8 + Math.abs(momentum - risk) / 70));
  for (let i = 0; i < 58; i++) {
    const x = (w / 57) * i;
    const trend = direction * i * slope;
    const shock = Math.sin(i * 0.72 + seed) * 14;
    const y = h * 0.62 + Math.sin(i * 0.38 + seed) * 28 + Math.cos(i * 0.13 + seed) * 12 + shock + trend;
    points.push([x, y]);
  }
  const visibleCount = Math.max(2, Math.floor(points.length * progress));
  const visiblePoints = points.slice(0, visibleCount);

  ctx.beginPath();
  visiblePoints.forEach(([x, y], index) => {
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  const lastPoint = visiblePoints[visiblePoints.length - 1];
  ctx.lineTo(lastPoint[0], h);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.fillStyle = area;
  ctx.fill();

  ctx.beginPath();
  visiblePoints.forEach(([x, y], index) => {
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = gradient;
  ctx.lineWidth = 3;
  ctx.stroke();

  visiblePoints.slice(-8).forEach(([x, y], index) => {
    const candleHeight = 18 + index * 2;
    ctx.strokeStyle = positive ? "rgba(78,222,163,.72)" : "rgba(255,111,127,.72)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y - candleHeight / 2);
    ctx.lineTo(x, y + candleHeight / 2);
    ctx.stroke();
  });

  ctx.fillStyle = "rgba(228,235,255,.86)";
  ctx.font = "12px Inter, sans-serif";
  ctx.fillText(change >= 0 ? "Bullish / profit movement" : "Bearish / loss movement", 16, 26);
}

function attachCharts() {
  requestAnimationFrame(() => {
    document.querySelectorAll("canvas[data-chart]").forEach((canvas, index) => {
      const start = performance.now();
      const positive = canvas.dataset.chart !== "down";
      const animate = (now) => {
        const progress = Math.min(1, (now - start) / 900);
        drawLineChart(canvas, index + 1, positive, progress);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    });
  });
}

function dashboard() {
  const bullish = stocks.filter((item) => item.change > 0).length;
  const bearish = stocks.length - bullish;
  const top = [...stocks].sort((a, b) => score(b) - score(a))[0];
  root.innerHTML = `
    <div class="grid cols-4">
      ${metricCard("Total Stocks Tracked", stocks.length, "Demo universe")}
      ${metricCard("Bullish Stocks", bullish, "Positive daily change")}
      ${metricCard("Bearish Stocks", bearish, "Needs caution")}
      ${metricCard("Top AI Grade", `${top.symbol} · ${grade(score(top))}`, `${score(top)}/100 investment score`)}
    </div>
    <div class="grid cols-2" style="margin-top:16px">
      <article class="card">
        <h3>Market Intelligence Trend</h3>
        <canvas class="chart" data-chart="up"></canvas>
      </article>
      <article class="card">
        <h3>Universal AI Search Result</h3>
        <div id="aiResult" class="insight-box">
          Ask anything from the search bar: "Analyze Apple", "Compare Apple and Microsoft", "Show safest stocks", or "Where should I invest ₹50,000".
        </div>
      </article>
    </div>
    <div class="grid cols-3" style="margin-top:16px">
      ${stockCard(stocks[2])}
      ${stockCard(stocks[1])}
      ${stockCard(stocks[8])}
    </div>
  `;
  attachCharts();
}

function stockCard(stock) {
  const [rec, confidence, reason] = recommendation(stock);
  return `
    <article class="card">
      <h3>${stock.name} <span class="muted">${stock.symbol}</span></h3>
      <span class="metric">Current Price</span>
      <strong class="metric-value">${money(stock.price, stock.currency)}</strong>
      <span class="muted">${stock.tier || "Tracked"} · ${stock.sector}</span>
      <p class="${stock.change >= 0 ? "up" : "down"}">${stock.change >= 0 ? "+" : ""}${stock.change}% today</p>
      <div class="score-row"><span>Overall Score</span><div class="bar"><span style="width:${score(stock)}%"></span></div><strong>${score(stock)}</strong></div>
      <p><strong>${rec}</strong> · ${confidence}% confidence</p>
      <p class="muted">${reason}</p>
    </article>
  `;
}

function money(value, currency = "$") {
  if (currency === "₹") return `₹${Number(value).toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
  return `$${Number(value).toFixed(2)}`;
}

function marketOverview() {
  const gainers = [...stocks].sort((a, b) => b.change - a.change).slice(0, 5);
  const losers = [...stocks].sort((a, b) => a.change - b.change).slice(0, 5);
  const active = [...stocks].sort((a, b) => b.volume - a.volume).slice(0, 5);
  root.innerHTML = `
    <div class="grid cols-3">
      ${listTable("Top Gainers", gainers)}
      ${listTable("Top Losers", losers)}
      ${listTable("Most Active", active, "volume")}
    </div>
    <div class="grid cols-2" style="margin-top:16px">
      <article class="card"><h3>Market Summary</h3><canvas class="chart" data-chart="up"></canvas></article>
      <article class="card"><h3>AI Generated Overview</h3><p class="insight-box">Technology and Banking show the strongest momentum. Nvidia, Microsoft, HDFC Bank, and Amazon lead the growth basket. Healthcare and Pharma remain defensive but currently show weaker momentum.</p></article>
    </div>
  `;
  attachCharts();
}

function listTable(title, data, mode = "change") {
  const rows = data.map((stock) => `
    <tr><td><strong>${stock.symbol}</strong><br><span class="muted">${stock.name}</span></td><td>${stock.sector}</td><td class="${stock.change >= 0 ? "up" : "down"}">${mode === "volume" ? `${stock.volume}M` : `${stock.change}%`}</td></tr>
  `).join("");
  return table(title, rows, ["Stock", "Sector", mode === "volume" ? "Volume" : "Change"]);
}

function marketHeatmap() {
  const sectors = ["All", ...new Set(stocks.map((stock) => stock.sector))].sort();
  root.innerHTML = `
    <div class="filters">${sectors.map((sector, index) => `<button class="chip ${index === 0 ? "active" : ""}" data-sector="${sector}">${sector}</button>`).join("")}</div>
    <div id="heatmap" class="heatmap"></div>
  `;
  const draw = (sector = "All") => {
    const data = sector === "All" ? stocks : stocks.filter((stock) => stock.sector === sector);
    $("#heatmap").innerHTML = data.map((stock) => {
      const size = Math.max(1, Math.min(3, Math.round(stock.cap / 1200)));
      const color = stock.change >= 0 ? `rgba(37, ${135 + stock.change * 20}, 105, .92)` : `rgba(${135 + Math.abs(stock.change) * 32}, 44, 64, .92)`;
      return `<article class="heat-tile" style="background:${color}; grid-column:span ${size};"><strong>${stock.symbol}</strong><small>${stock.name}</small><span>${stock.change >= 0 ? "+" : ""}${stock.change}%</span></article>`;
    }).join("");
  };
  document.querySelectorAll(".chip").forEach((chip) => chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    draw(chip.dataset.sector);
  }));
  draw();
}

function sectorAnalysis() {
  const groups = [...new Set(stocks.map((stock) => stock.sector))].map((sector) => {
    const items = stocks.filter((stock) => stock.sector === sector);
    return {
      sector,
      growth: Math.round(avg(items, "growth")),
      risk: Math.round(avg(items, "risk")),
      momentum: Math.round(avg(items, "momentum")),
      leader: [...items].sort((a, b) => score(b) - score(a))[0].symbol
    };
  });
  root.innerHTML = `
    <div class="grid cols-3">
      ${groups.map((group) => `
        <article class="card">
          <h3>${group.sector}</h3>
          ${bar("Growth", group.growth)}
          ${bar("Momentum", group.momentum)}
          ${bar("Risk", group.risk, true)}
          <p class="muted">Top company: <strong>${group.leader}</strong>. AI Summary: ${group.momentum > 70 ? "Strong market strength and consistent buying interest." : "Mixed performance with selective opportunities."}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function avg(items, key) {
  return items.reduce((sum, item) => sum + item[key], 0) / items.length;
}

function bar(label, value, risk = false) {
  return `<div class="score-row"><span>${label}</span><div class="bar"><span style="width:${value}%; background:${risk ? "linear-gradient(90deg,#4edea3,#ffd166,#ff6f7f)" : ""}"></span></div><strong>${value}</strong></div>`;
}

function chartAttrs(stock) {
  return `data-chart="${stock.change >= 0 ? "up" : "down"}" data-change="${stock.change}" data-risk="${stock.risk}" data-momentum="${stock.momentum}"`;
}

function aiScreener() {
  const sectors = ["All", ...new Set(stocks.map((stock) => stock.sector))].sort();
  root.innerHTML = `
    <article class="card">
      <h3>Intelligent Screening Filters</h3>
      <div class="form-grid">
        <div class="field"><label>Sector</label><select id="filterSector">${sectors.map((sector) => `<option>${sector}</option>`).join("")}</select></div>
        <div class="field"><label>Affordability Tier</label><select id="filterTier"><option>All</option><option>Penny</option><option>Low</option><option>Medium</option><option>Large</option></select></div>
        <div class="field"><label>Minimum Growth Score</label><input id="filterGrowth" type="number" value="65" /></div>
        <div class="field"><label>Maximum Risk Score</label><input id="filterRisk" type="number" value="50" /></div>
      </div>
    </article>
    <div id="screenResult" style="margin-top:16px"></div>
  `;
  const update = () => {
    const sector = $("#filterSector").value;
    const tier = $("#filterTier").value;
    const minGrowth = Number($("#filterGrowth").value);
    const maxRisk = Number($("#filterRisk").value);
    const data = stocks.filter((stock) => (sector === "All" || stock.sector === sector) && (tier === "All" || stock.tier === tier) && stock.growth >= minGrowth && stock.risk <= maxRisk);
    $("#screenResult").innerHTML = table("Potential Buy Candidates", data.map((stock) => `<tr><td>${stock.symbol}</td><td>${stock.sector}</td><td>${money(stock.price, stock.currency)}</td><td>${stock.tier}</td><td>${stock.growth}</td><td>${stock.risk}</td><td>${grade(score(stock))}</td></tr>`).join("") || `<tr><td colspan="7">No stocks match the selected filters.</td></tr>`, ["Stock", "Sector", "Price", "Tier", "Growth", "Risk", "Grade"]);
  };
  $("#filterTier").addEventListener("change", () => {
    if ($("#filterTier").value !== "All") {
      $("#filterGrowth").value = 0;
      $("#filterRisk").value = 100;
    }
    update();
  });
  ["filterSector", "filterGrowth", "filterRisk"].forEach((id) => $(`#${id}`).addEventListener("input", update));
  update();
}

function stockAnalysis() {
  const stock = selectedStockFromUrl(stocks[0]);
  renderStockAnalysis(stock);
}

function renderStockAnalysis(stock) {
  const [rec, confidence, reason] = recommendation(stock);
  root.innerHTML = `
    <article class="card">
      <h3>Search Stock Analysis</h3>
      <form id="stockAnalysisForm" class="form-grid">
        <div class="field">
          <label>Enter Stock Name or Symbol</label>
          <input id="stockAnalysisInput" value="${stock.symbol}" placeholder="Example: Tesla, NVDA, Reliance, HDFC Bank" />
        </div>
        <div class="field">
          <label>Quick Select</label>
          <select id="stockAnalysisSelect">
            ${stocks.map((item) => `<option value="${item.symbol}" ${item.symbol === stock.symbol ? "selected" : ""}>${item.name} (${item.symbol})</option>`).join("")}
          </select>
        </div>
        <button class="primary-cta small-cta" type="submit">Analyze</button>
      </form>
    </article>
    <div class="grid cols-2">
      ${stockCard(stock)}
      <article class="card"><h3>${stock.symbol} Historical Chart</h3><canvas class="chart" ${chartAttrs(stock)}></canvas></article>
    </div>
    <div class="grid cols-4" style="margin-top:16px">
      ${metricCard("52 Week High", money(stock.price * 1.18, stock.currency))}
      ${metricCard("52 Week Low", money(stock.price * 0.72, stock.currency))}
      ${metricCard("Market Cap", `$${stock.cap}B`)}
      ${metricCard("PE Ratio", stock.pe)}
      ${metricCard("EPS", stock.eps)}
      ${metricCard("Dividend Yield", `${stock.dividend}%`)}
      ${metricCard("RSI", stock.rsi)}
      ${metricCard("MACD", stock.macd)}
    </div>
    <article class="card" style="margin-top:16px">
      <h3>Buy / Sell / Hold System</h3>
      <p class="insight-box">Recommendation: <strong>${rec}</strong>. Confidence: <strong>${confidence}%</strong>. ${reason} Support is near ${money(stock.price * 0.94, stock.currency)} and resistance is near ${money(stock.price * 1.09, stock.currency)}.</p>
    </article>
  `;
  $("#stockAnalysisSelect").addEventListener("change", () => {
    window.location.href = `stock-analysis.html?symbol=${encodeURIComponent($("#stockAnalysisSelect").value)}`;
  });
  $("#stockAnalysisForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = $("#stockAnalysisInput").value.trim();
    if (!query) return;
    window.location.href = `stock-analysis.html?q=${encodeURIComponent(query)}`;
  });
  attachCharts();
}

function stockPrediction() {
  const stock = selectedStockFromUrl(stocks[2]);
  const expectedGrowth = Math.round(((stock.growth + stock.momentum + stock.trend) / 3 - stock.risk) * 0.55);
  const futureTrend = expectedGrowth > 10 ? "Bullish" : expectedGrowth < 0 ? "Bearish" : "Neutral";
  const riskLabel = stock.risk >= 70 ? "High" : stock.risk >= 45 ? "Medium" : "Low";
  root.innerHTML = `
    <article class="card">
      <h3>Prediction Stock</h3>
      <form id="predictionForm" class="form-grid">
        <div class="field"><label>Choose Stock</label><select id="predictionSelect">${stocks.map((item) => `<option value="${item.symbol}" ${item.symbol === stock.symbol ? "selected" : ""}>${item.name} (${item.symbol})</option>`).join("")}</select></div>
        <button class="primary-cta small-cta" type="submit">Predict</button>
      </form>
    </article>
    <div class="grid cols-2">
      <article class="card"><h3>${stock.name} Prediction Chart</h3><canvas class="chart" data-chart="${expectedGrowth >= 0 ? "up" : "down"}" data-change="${expectedGrowth}" data-risk="${stock.risk}" data-momentum="${stock.momentum}"></canvas></article>
      <article class="card">
        <h3>Simple Prediction Engine</h3>
        ${metricCard("Expected Growth", `${expectedGrowth}%`, "Trend + momentum demo")}
        ${metricCard("Expected Risk", riskLabel, `Risk score ${stock.risk}/100`)}
        <p class="insight-box">Future Trend: <strong>${futureTrend}</strong>. ${stock.name} has momentum ${stock.momentum}/100 and trend ${stock.trend}/100. ${expectedGrowth < 0 ? "The model expects possible loss unless trend improves." : "The model expects possible upside, but risk control is still required."}</p>
        <p class="disclaimer">Educational disclaimer: this prediction is for academic demonstration only and is not financial advice.</p>
      </article>
    </div>
  `;
  $("#predictionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = `stock-prediction.html?symbol=${encodeURIComponent($("#predictionSelect").value)}`;
  });
  attachCharts();
}

function newsSentiment() {
  root.innerHTML = `
    <div class="grid cols-4">
      ${metricCard("Positive", "64%", "AI and earnings strength")}
      ${metricCard("Negative", "16%", "Valuation concerns")}
      ${metricCard("Neutral", "20%", "Macro wait-and-watch")}
      ${metricCard("Trend", "Improving", "3-day sentiment")}
    </div>
    <article class="card" style="margin-top:16px">
      <h3>AI News Summary</h3>
      <p class="insight-box">Apple sentiment remains positive due to AI-related product expectations and market confidence. Tesla sentiment is mixed because of price competition and demand uncertainty. Nvidia sentiment stays highly positive but valuation risk is increasing.</p>
    </article>
  `;
}

function portfolioSimulator() {
  root.innerHTML = `
    <article class="card">
      <h3>Portfolio Simulator</h3>
      <div class="form-grid">
        <div class="field"><label>Investment Amount</label><input id="amount" type="number" value="50000" /></div>
        <div class="field"><label>Select Stock</label><select id="portfolioStock">${stocks.map((stock) => `<option value="${stock.symbol}">${stock.name} (${stock.symbol}) - ${money(stock.price, stock.currency)}</option>`).join("")}</select></div>
        <div class="field"><label>Stock Basket</label><select id="basket"><option>Balanced AI Basket</option><option>Low Budget Basket</option><option>High Growth Basket</option><option>Low Risk Basket</option></select></div>
        <div class="field"><label>Time Horizon</label><select id="horizon"><option>1 Year</option><option>3 Years</option><option>5 Years</option></select></div>
      </div>
    </article>
    <div id="portfolioResult" class="grid cols-4" style="margin-top:16px"></div>
    <article class="card" style="margin-top:16px"><h3>Portfolio Chart</h3><canvas class="chart" data-chart="up"></canvas></article>
  `;
  const update = () => {
    const amount = Number($("#amount").value || 0);
    const basket = $("#basket").value;
    const selected = stocks.find((stock) => stock.symbol === $("#portfolioStock").value) || stocks[0];
    const horizonYears = Number($("#horizon").value.split(" ")[0]) || 1;
    const baseRate = ((selected.growth + selected.momentum + selected.trend) / 3 - selected.risk) / 100;
    const basketBoost = basket.includes("High") ? 0.06 : basket.includes("Low Risk") ? -0.02 : basket.includes("Low Budget") ? 0.01 : 0.02;
    const growth = Math.max(-0.45, Math.min(0.55, baseRate + basketBoost));
    const projectedValue = amount * Math.pow(1 + growth, horizonYears);
    const profitLoss = projectedValue - amount;
    const units = selected.price > 0 ? Math.floor(amount / selected.price) : 0;
    $("#portfolioResult").innerHTML = `
      ${metricCard("Selected Stock", selected.symbol, `${selected.name} · ${selected.tier}`)}
      ${metricCard("Estimated Units", units.toLocaleString("en-IN"), `At ${money(selected.price, selected.currency)} per share`)}
      ${metricCard("Expected Value", `₹${Math.round(projectedValue).toLocaleString("en-IN")}`, `${horizonYears} year estimate`)}
      ${metricCard(profitLoss >= 0 ? "Expected Profit" : "Expected Loss", `₹${Math.abs(Math.round(profitLoss)).toLocaleString("en-IN")}`, `${Math.round(growth * 100)}% yearly model`)}
      ${metricCard("Risk Level", selected.risk >= 70 ? "High" : selected.risk >= 45 ? "Medium" : "Low", `Risk score ${selected.risk}/100`)}
      ${metricCard("AI View", growth >= 0 ? "Potential Gain" : "Potential Loss", growth >= 0 ? "Trend supports upside" : "Risk is higher than growth")}
    `;
    const chart = document.querySelector("canvas[data-chart]");
    if (chart) {
      chart.dataset.chart = growth >= 0 ? "up" : "down";
      chart.dataset.change = String(growth * 100);
      chart.dataset.risk = String(selected.risk);
      chart.dataset.momentum = String(selected.momentum);
    }
    attachCharts();
  };
  ["amount", "portfolioStock", "basket", "horizon"].forEach((id) => $(`#${id}`).addEventListener("input", update));
  update();
}

function ipoCard(ipo) {
  return `
    <article class="card">
      <h3>${ipo.name} <span class="muted">${ipo.symbol}</span></h3>
      <span class="metric">Price Band</span>
      <strong class="metric-value">${ipo.priceBand}</strong>
      <p class="muted">${ipo.type} · ${ipo.status}</p>
      ${bar("Demand Signal", ipo.demand)}
      ${bar("Growth Signal", ipo.growth)}
      ${bar("Risk Score", ipo.risk, true)}
      <p class="disclaimer">Check lot size and minimum application amount before applying.</p>
    </article>
  `;
}

function iposPage() {
  const lowStocks = [...stocks].filter((stock) => stock.currency === "₹" && stock.price <= 100).sort((a, b) => a.price - b.price);
  const mediumStocks = [...stocks].filter((stock) => stock.currency === "₹" && stock.price > 100 && stock.price <= 500).sort((a, b) => a.price - b.price);
  root.innerHTML = `
    <div class="grid cols-4">
      ${metricCard("Lowest Demo Stock", `${lowStocks[0].symbol} · ${money(lowStocks[0].price, lowStocks[0].currency)}`, lowStocks[0].name)}
      ${metricCard("Affordable Stocks", lowStocks.length, "Under ₹100 demo list")}
      ${metricCard("IPO Profiles", ipos.length, "Mainboard + SME")}
      ${metricCard("Beginner Warning", "Lot Size", "IPOs may need more capital")}
    </div>
    <article class="card" style="margin-top:16px">
      <h3>IPO Search</h3>
      <form id="ipoSearchForm" class="form-grid">
        <div class="field"><label>Ask IPO Query</label><input id="ipoSearchInput" placeholder="Example: compare NSE IPO and SME IPO, safest IPO, low price IPO" /></div>
        <button class="primary-cta small-cta" type="submit">Search IPO</button>
      </form>
      <p id="ipoSearchResult" class="insight-box" style="margin-top:14px">Use this page to compare IPO demand, risk, price band, lot size, and beginner affordability.</p>
    </article>
    <div class="grid cols-3" style="margin-top:16px">
      ${ipos.map(ipoCard).join("")}
    </div>
    <div class="grid cols-2" style="margin-top:16px">
      ${table("Affordable Stocks Under ₹100", lowStocks.map((stock) => `<tr><td><strong>${stock.symbol}</strong><br><span class="muted">${stock.name}</span></td><td>${stock.sector}</td><td>${money(stock.price, stock.currency)}</td><td>${stock.tier}</td><td>${stock.risk}</td></tr>`).join(""), ["Stock", "Sector", "Price", "Tier", "Risk"])}
      ${table("Medium Stocks ₹100-₹500", mediumStocks.map((stock) => `<tr><td><strong>${stock.symbol}</strong><br><span class="muted">${stock.name}</span></td><td>${stock.sector}</td><td>${money(stock.price, stock.currency)}</td><td>${stock.tier}</td><td>${score(stock)}</td></tr>`).join(""), ["Stock", "Sector", "Price", "Tier", "Score"])}
    </div>
  `;
  $("#ipoSearchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = $("#ipoSearchInput").value.trim();
    if (!query) return;
    $("#ipoSearchResult").textContent = buildSearchResponse(query.includes("ipo") ? query : `${query} IPO`);
  });
}

function assistantView() {
  root.innerHTML = `
    <div class="grid cols-2">
      <article class="card">
        <h3>Stock Talk Assistant</h3>
        <p class="insight-box">Ask beginner questions like what to do next, where to invest, how to compare stocks, where returns may be high, and how much risk each choice carries.</p>
      </article>
      <article class="card">
        <h3>Beginner Guide</h3>
        <div class="example-grid">
          ${["Where should I start?", "Show cheapest stocks", "Compare Suzlon and Yes Bank", "Compare IPOs", "Where can I invest with low risk?", "Explain IPO lot size", "Where can I get high returns?", "What should I do in portfolio simulator?"].map((item) => `<button class="example-card assistant-example" type="button" data-query="${item}">${item}</button>`).join("")}
        </div>
      </article>
    </div>
  `;
  openAssistant();
  document.querySelectorAll(".assistant-example").forEach((button) => {
    button.addEventListener("click", () => {
      addMessage(button.dataset.query, "user");
      addMessage(buildSearchResponse(button.dataset.query));
    });
  });
}

function settings() {
  root.innerHTML = `
    <div class="grid cols-2">
      <article class="card"><h3>Integration Readiness</h3><p class="insight-box">Frontend demo is active. Backend scaffold supports FastAPI routes for analysis, screener, assistant, portfolio, Gemini, yfinance, and Redis integration.</p></article>
      <article class="card"><h3>Mini Project Mode</h3><p class="insight-box">Scope is presentation-ready: real-looking UI, explainable scoring formulas, educational disclaimer, and simple prediction logic without overbuilding a major-project platform.</p></article>
    </div>
  `;
}

function searchResults() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q") || "Analyze Apple";
  const response = buildSearchResponse(query);
  const selectedStocks = extractStocks(query);
  const selectedIpos = extractIpos(query);
  const isCompareQuery = query.toLowerCase().includes(" vs ") || query.toLowerCase().includes(" versus ") || query.toLowerCase().includes("compare");
  const stock = selectedStocks[0] || findStock(query);
  const displayStocks = selectedStocks.length ? selectedStocks : [stock];
  const isIpoQuery = query.toLowerCase().includes("ipo") || selectedIpos.length > 0;
  root.innerHTML = `
    <div class="search-hero">
      <p class="eyebrow">Universal AI Search Engine</p>
      <h3>${query}</h3>
      <p>${response}</p>
    </div>
    <div class="grid cols-3" style="margin-top:16px">
      ${isIpoQuery ? (selectedIpos.length ? selectedIpos : ipos.slice(0, 3)).map(ipoCard).join("") : displayStocks.map((item) => stockCard(item)).join("")}
      <article class="card">
        <h3>Intent Understanding</h3>
        <div class="mini-metric"><span>Detected Intent</span><strong>${detectIntent(query)}</strong></div>
        <div class="mini-metric"><span>${isIpoQuery ? "IPOs Found" : "Stocks Found"}</span><strong>${isIpoQuery ? (selectedIpos.length ? selectedIpos : ipos.slice(0, 3)).map((item) => item.symbol).join(", ") : displayStocks.map((item) => item.symbol).join(", ")}</strong><small>${isIpoQuery ? "IPO price band, lot size, demand and risk" : displayStocks.map((item) => item.name).join(isCompareQuery ? " vs " : ", ")}</small></div>
      </article>
      <article class="card">
        <h3>Next Actions</h3>
        <p class="insight-box">${isIpoQuery ? "Open IPOs to compare price band, lot size, SME risk and beginner affordability." : "Open Stock Analysis for indicators, Stock Prediction for future trend, or Portfolio Simulator to test investment allocation."}</p>
        <a class="primary-cta small-cta" href="${isIpoQuery ? "ipos.html" : `stock-analysis.html?q=${encodeURIComponent(query)}`}">${isIpoQuery ? "Open IPOs" : "Open Stock Analysis"}</a>
      </article>
    </div>
    <div class="grid cols-2" style="margin-top:16px">
      <article class="card"><h3>AI Query Chart</h3><canvas class="chart" data-chart="${stock.change >= 0 ? "up" : "down"}"></canvas></article>
      <article class="card"><h3>Educational Note</h3><p class="disclaimer">This is a mini-project intelligence demo. It explains market signals for learning and presentation, not financial advice.</p></article>
    </div>
  `;
  attachCharts();
}

const views = {
  Profile: profile,
  "Search Home": searchHome,
  Dashboard: dashboard,
  "Market Overview": marketOverview,
  "Market Heatmap": marketHeatmap,
  "Sector Analysis": sectorAnalysis,
  "AI Screener": aiScreener,
  "Stock Analysis": stockAnalysis,
  "Stock Prediction": stockPrediction,
  "News Sentiment": newsSentiment,
  "Portfolio Simulator": portfolioSimulator,
  IPOs: iposPage,
  "AI Assistant": assistantView,
  "AI Search": searchResults,
  Settings: settings
};

function detectIntent(query) {
  const q = query.toLowerCase();
  if (q.includes("ipo") || extractIpos(q).length) return "IPO Intelligence";
  if (q.includes("compare") || q.includes(" vs ") || q.includes(" versus ") || extractStocks(q).length > 1) return "Multi Stock Comparison";
  if (q.includes("predict")) return "Stock Prediction";
  if (q.includes("cheap") || q.includes("lowest") || q.includes("affordable") || q.includes("under") || q.includes("small stock") || q.includes("medium stock") || q.includes("penny") || q.includes("1rs") || q.includes("1 rupee")) return "Affordable Stock Search";
  if (q.includes("safe") || q.includes("best") || q.includes("undervalued")) return "AI Screener";
  if (q.includes("invest") || q.includes("portfolio") || q.includes("50,000") || q.includes("50000")) return "Portfolio Planning";
  if (q.includes("sector")) return "Sector Intelligence";
  return "Stock Analysis";
}

function buildSearchResponse(query) {
  const q = query.toLowerCase();
  let response = "";
  const mentionedStocks = extractStocks(query);
  const mentionedIpos = extractIpos(query);
  if (q.includes("ipo") || mentionedIpos.length) {
    response = ipoSummary(mentionedIpos);
  } else if (q.includes("cheap") || q.includes("lowest") || q.includes("affordable") || q.includes("under ₹20") || q.includes("under 20") || q.includes("small stock") || q.includes("medium stock") || q.includes("penny") || q.includes("1rs") || q.includes("1 rupee")) {
    const limit = requestedPriceLimit(query);
    const affordable = [...stocks].filter((stock) => stock.currency === "₹" && stock.price <= limit).sort((a, b) => a.price - b.price).slice(0, 10);
    response = `${affordable.length ? `Affordable demo stocks under ₹${limit} from lowest upward: ${affordable.map((stock) => `${stock.name} (${stock.symbol}) ${money(stock.price, stock.currency)}, risk ${stock.risk}/100`).join("; ")}.` : `No demo stocks found under ₹${limit}. Try under ₹100 or use AI Screener with the Penny/Low tier.`} Very low-price stocks can be highly risky, so beginners should compare risk, volume, debt, and business quality before investing.`;
  } else if (q.includes("compare") || q.includes(" vs ") || q.includes(" versus ") || mentionedStocks.length > 1) {
    const selected = mentionedStocks.length > 1 ? mentionedStocks : stocks.slice(0, 2);
    response = comparisonSummary(selected);
  } else if (q.includes("safe") || q.includes("low risk") || q.includes("without risk")) {
    response = `Safest demo candidates: ${[...stocks].sort((a, b) => a.risk - b.risk).slice(0, 4).map((s) => `${s.symbol} (${s.risk} risk)`).join(", ")}.`;
  } else if (q.includes("high return") || q.includes("high returns") || q.includes("profit") || q.includes("profits") || q.includes("growth")) {
    const growthStocks = [...stocks].sort((a, b) => (b.growth + b.momentum - b.risk * 0.4) - (a.growth + a.momentum - a.risk * 0.4)).slice(0, 4);
    response = `Higher-return candidates in this demo are ${growthStocks.map((stock) => `${stock.name} (${stock.symbol}) score ${score(stock)}`).join(", ")}. Higher return usually carries higher risk, so compare risk score, momentum, and diversification before investing.`;
  } else if (q.includes("invest") || q.includes("50000") || q.includes("50,000")) {
    response = "For a ₹50,000 educational demo portfolio: 35% Microsoft, 25% HDFC Bank, 20% TCS, 10% Reliance, 10% cash. This balances growth, stability, and sector diversification.";
  } else if (q.includes("where should i start") || q.includes("beginner") || q.includes("what should i do")) {
    response = "Beginner path: start with Dashboard for market mood, use Stock Analysis to check RSI/MACD/trend for one company, use AI Screener for safe or growth candidates, then test allocation in Portfolio Simulator before making any decision.";
  } else if (q.includes("rsi") || q.includes("macd") || q.includes("moving average")) {
    response = "RSI shows whether a stock may be overbought or oversold. MACD shows momentum direction. Moving averages show trend strength. A beginner should not use one indicator alone; combine trend, risk score, volume, and sector strength.";
  } else if (q.includes("sector")) {
    response = "Technology and Banking are currently leading. Energy is stable, Pharma is defensive but weak, and Automobile has higher volatility.";
  } else if (q.includes("predict")) {
    const stock = findStock(q);
    response = `${stock.name} prediction is ${stock.momentum > 65 ? "bullish" : "neutral"} with expected growth near ${Math.round(stock.growth / 6)}% in this educational model.`;
  } else {
    const stock = findStock(q);
    const [rec, confidence, reason] = recommendation(stock);
    response = `${stock.name} (${stock.symbol}) analysis: price ${money(stock.price, stock.currency)}, tier ${stock.tier || "Tracked"}, RSI ${stock.rsi}, MACD ${stock.macd}, overall score ${score(stock)}/100, grade ${grade(score(stock))}. Recommendation: ${rec} with ${confidence}% confidence. ${reason}`;
  }
  return response;
}

function handleSearch(query) {
  const response = buildSearchResponse(query);
  if ($("#aiResult")) $("#aiResult").innerHTML = response;
  else addMessage(response);
  return response;
}

function addMessage(text, role = "assistant") {
  const message = document.createElement("p");
  message.className = `message ${role === "user" ? "user" : ""}`;
  message.textContent = text;
  $("#assistantMessages").appendChild(message);
  $("#assistantMessages").scrollTop = $("#assistantMessages").scrollHeight;
}

function openAssistant() {
  $("#assistantPanel").classList.remove("hidden");
  if (!$("#assistantMessages").children.length) {
    addMessage("Hi, I am Stock Talk Assistant. If you are a beginner, ask me where to start, where to invest, which stocks may give high returns, which choices are lower risk, or compare two or more stocks.");
  }
}

function beginnerTip(view) {
  openAssistant();
  addMessage(`Beginner Mode: You are viewing ${view}. I can explain the key chart, indicators, buy/sell signal, and what action to explore next.`);
}

function setupTicker() {
  if (!$("#tickerTrack")) return;
  const html = stocks.map((stock) => `<span class="ticker-item"><strong>${stock.symbol}</strong> <span class="${stock.change >= 0 ? "up" : "down"}">${stock.change >= 0 ? "+" : ""}${stock.change}%</span></span>`).join("");
  $("#tickerTrack").innerHTML = html + html;
}

function setupHeroCanvas() {
  const canvas = $("#heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let tick = 0;
  function frame() {
    canvas.width = innerWidth * devicePixelRatio;
    canvas.height = innerHeight * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let line = 0; line < 5; line++) {
      ctx.beginPath();
      ctx.strokeStyle = line % 2 ? "rgba(78,222,163,.22)" : "rgba(159,197,255,.28)";
      ctx.lineWidth = 2;
      for (let i = 0; i < 90; i++) {
        const x = (innerWidth / 89) * i;
        const y = innerHeight * (0.34 + line * 0.09) + Math.sin(i * 0.23 + tick * 0.02 + line) * 32 + Math.cos(i * 0.09 + line) * 18;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    tick++;
    requestAnimationFrame(frame);
  }
  frame();
}

function bindPlatformEvents() {
  $("#searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = $("#aiSearch").value.trim();
    if (!query) return;
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  });

  $("#aiSearch").addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const query = $("#aiSearch").value.trim();
    if (!query) return;
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  });

  $("#assistantButton").addEventListener("click", openAssistant);
  $("#closeAssistant").addEventListener("click", () => $("#assistantPanel").classList.add("hidden"));
  $("#assistantForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const text = $("#assistantInput").value.trim();
    if (!text) return;
    addMessage(text, "user");
    $("#assistantInput").value = "";
    addMessage(buildSearchResponse(text));
  });

  $("#beginnerToggle").addEventListener("click", () => {
    beginnerMode = !beginnerMode;
    $("#beginnerToggle").textContent = `Beginner Mode: ${beginnerMode ? "On" : "Off"}`;
    if (beginnerMode) beginnerTip(currentView);
  });
}

function initPlatform() {
  renderShell();
  if (!root) return;
  renderNav();
  setupTicker();
  const renderer = views[currentView] || dashboard;
  renderer();
  bindPlatformEvents();
  window.addEventListener("resize", attachCharts);
}

setupHeroCanvas();
initPlatform();

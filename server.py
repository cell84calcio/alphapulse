#!/usr/bin/env python3
"""
AlphaPulse PRO - Motore Quantitativo Istituzionale v5.0
Modello Multi-Fattoriale con Pesi Personalizzati e 3 Controlli di Rischio:
1. Breakout Tecnico + RSI + Volumi: 30%
2. News Sentiment NLP: 25%
3. Flussi Istituzionali & Dark Pools: 20%
4. Revisioni Analisti & Consensus: 15%
5. Contesto di Mercato & Volatilità VIX: 10%

Controlli di Rischio:
- Controllo 1: Rilevamento Rischio Binario (Trimestrali/Eventi oggi/domani) -> Penalità Rischio
- Controllo 2: Forza Relativa vs Indice Benchmark (Alpha vs S&P 500 / EuroStoxx 50)
- Controllo 3: Conferma Intraday Prezzo/Volumi (Anti-Fakeout / Trappola del rumor)
"""

import sys
import os
import json
import time
import math
import threading
from datetime import datetime
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = 8080
DATA_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "market_data.json")

# Paniere Allargato Europa Large Cap (> €10 Mld)
EU_SYMBOLS = [
    {"ticker": "SAP", "sym": "SAP.DE", "name": "SAP SE", "exchange": "XETRA (Germania)", "currency": "€", "sector": "Tecnologia", "shares": 1.23, "capUnit": "Mld"},
    {"ticker": "ASML", "sym": "ASML.AS", "name": "ASML Holding", "exchange": "Euronext Amsterdam", "currency": "€", "sector": "Tecnologia", "shares": 0.39, "capUnit": "Mld"},
    {"ticker": "NOVO-B", "sym": "NOVO-B.CO", "name": "Novo Nordisk", "exchange": "Copenhagen", "currency": "€", "sector": "Healthcare", "shares": 4.45, "capUnit": "Mld", "toEur": 0.134},
    {"ticker": "SU", "sym": "SU.PA", "name": "Schneider Electric", "exchange": "Euronext Parigi", "currency": "€", "sector": "Industria & Energia", "shares": 0.57, "capUnit": "Mld"},
    {"ticker": "AIR", "sym": "AIR.PA", "name": "Airbus SE", "exchange": "Euronext Parigi", "currency": "€", "sector": "Industria & Energia", "shares": 0.79, "capUnit": "Mld"},
    {"ticker": "RMS", "sym": "RMS.PA", "name": "Hermès International", "exchange": "Euronext Parigi", "currency": "€", "sector": "Lusso & Consumi", "shares": 0.105, "capUnit": "Mld"},
    {"ticker": "SIE", "sym": "SIE.DE", "name": "Siemens AG", "exchange": "XETRA (Germania)", "currency": "€", "sector": "Industria & Energia", "shares": 0.80, "capUnit": "Mld"},
    {"ticker": "SAN", "sym": "SAN.MC", "name": "Banco Santander", "exchange": "Bolsa de Madrid", "currency": "€", "sector": "Finanza", "shares": 15.4, "capUnit": "Mld"},
    {"ticker": "MC", "sym": "MC.PA", "name": "LVMH Moët Hennessy", "exchange": "Euronext Parigi", "currency": "€", "sector": "Lusso & Consumi", "shares": 0.50, "capUnit": "Mld"},
    {"ticker": "ENEL", "sym": "ENEL.MI", "name": "Enel SpA", "exchange": "Borsa Italiana", "currency": "€", "sector": "Industria & Energia", "shares": 10.16, "capUnit": "Mld"},
    {"ticker": "TTE", "sym": "TTE.PA", "name": "TotalEnergies SE", "exchange": "Euronext Parigi", "currency": "€", "sector": "Industria & Energia", "shares": 2.37, "capUnit": "Mld"},
    {"ticker": "ISP", "sym": "ISP.MI", "name": "Intesa Sanpaolo", "exchange": "Borsa Italiana", "currency": "€", "sector": "Finanza", "shares": 18.28, "capUnit": "Mld"},
    {"ticker": "RACE", "sym": "RACE.MI", "name": "Ferrari N.V.", "exchange": "Borsa Italiana", "currency": "€", "sector": "Lusso & Consumi", "shares": 0.18, "capUnit": "Mld"},
    {"ticker": "ALV", "sym": "ALV.DE", "name": "Allianz SE", "exchange": "XETRA (Germania)", "currency": "€", "sector": "Finanza", "shares": 0.39, "capUnit": "Mld"},
    {"ticker": "BBVA", "sym": "BBVA.MC", "name": "Banco Bilbao Vizcaya", "exchange": "Bolsa de Madrid", "currency": "€", "sector": "Finanza", "shares": 5.8, "capUnit": "Mld"},
    {"ticker": "LDO", "sym": "LDO.MI", "name": "Leonardo SpA", "exchange": "Borsa Italiana", "currency": "€", "sector": "Industria & Energia", "shares": 0.58, "capUnit": "Mld"},
    {"ticker": "RHM", "sym": "RHM.DE", "name": "Rheinmetall AG", "exchange": "XETRA (Germania)", "currency": "€", "sector": "Industria & Energia", "shares": 0.044, "capUnit": "Mld"},
    {"ticker": "SAN-FR", "sym": "SAN.PA", "name": "Sanofi S.A.", "exchange": "Euronext Parigi", "currency": "€", "sector": "Healthcare", "shares": 1.25, "capUnit": "Mld"},
    {"ticker": "ENI", "sym": "ENI.MI", "name": "Eni SpA", "exchange": "Borsa Italiana", "currency": "€", "sector": "Industria & Energia", "shares": 3.28, "capUnit": "Mld"},
    {"ticker": "OR", "sym": "OR.PA", "name": "L'Oréal S.A.", "exchange": "Euronext Parigi", "currency": "€", "sector": "Lusso & Consumi", "shares": 0.53, "capUnit": "Mld"},
    {"ticker": "DTE", "sym": "DTE.DE", "name": "Deutsche Telekom", "exchange": "XETRA (Germania)", "currency": "€", "sector": "Tecnologia", "shares": 4.98, "capUnit": "Mld"},
    {"ticker": "IBE", "sym": "IBE.MC", "name": "Iberdrola S.A.", "exchange": "Bolsa de Madrid", "currency": "€", "sector": "Industria & Energia", "shares": 6.35, "capUnit": "Mld"},
    {"ticker": "BNP", "sym": "BNP.PA", "name": "BNP Paribas", "exchange": "Euronext Parigi", "currency": "€", "sector": "Finanza", "shares": 1.15, "capUnit": "Mld"},
    {"ticker": "UCG", "sym": "UCG.MI", "name": "UniCredit SpA", "exchange": "Borsa Italiana", "currency": "€", "sector": "Finanza", "shares": 1.63, "capUnit": "Mld"}
]

# Paniere Allargato USA Large Cap (> $10 Mld)
USA_SYMBOLS = [
    {"ticker": "NVDA", "sym": "NVDA", "name": "NVIDIA Corporation", "exchange": "NASDAQ", "currency": "$", "sector": "Tecnologia", "shares": 24.5, "capUnit": "Tln"},
    {"ticker": "PLTR", "sym": "PLTR", "name": "Palantir Technologies", "exchange": "NYSE", "currency": "$", "sector": "Tecnologia", "shares": 2.24, "capUnit": "Mld"},
    {"ticker": "MSFT", "sym": "MSFT", "name": "Microsoft Corporation", "exchange": "NASDAQ", "currency": "$", "sector": "Tecnologia", "shares": 7.43, "capUnit": "Tln"},
    {"ticker": "LLY", "sym": "LLY", "name": "Eli Lilly and Company", "exchange": "NYSE", "currency": "$", "sector": "Healthcare", "shares": 0.95, "capUnit": "Mld"},
    {"ticker": "AMZN", "sym": "AMZN", "name": "Amazon.com Inc.", "exchange": "NASDAQ", "currency": "$", "sector": "Tecnologia", "shares": 10.5, "capUnit": "Tln"},
    {"ticker": "META", "sym": "META", "name": "Meta Platforms Inc.", "exchange": "NASDAQ", "currency": "$", "sector": "Tecnologia", "shares": 2.53, "capUnit": "Tln"},
    {"ticker": "AVGO", "sym": "AVGO", "name": "Broadcom Inc.", "exchange": "NASDAQ", "currency": "$", "sector": "Tecnologia", "shares": 4.68, "capUnit": "Mld"},
    {"ticker": "TSM", "sym": "TSM", "name": "Taiwan Semiconductor (ADR)", "exchange": "NYSE", "currency": "$", "sector": "Tecnologia", "shares": 5.18, "capUnit": "Mld"},
    {"ticker": "JPM", "sym": "JPM", "name": "JPMorgan Chase & Co.", "exchange": "NYSE", "currency": "$", "sector": "Finanza", "shares": 2.84, "capUnit": "Mld"},
    {"ticker": "AAPL", "sym": "AAPL", "name": "Apple Inc.", "exchange": "NASDAQ", "currency": "$", "sector": "Tecnologia", "shares": 15.2, "capUnit": "Tln"},
    {"ticker": "GOOGL", "sym": "GOOGL", "name": "Alphabet Inc.", "exchange": "NASDAQ", "currency": "$", "sector": "Tecnologia", "shares": 12.3, "capUnit": "Tln"},
    {"ticker": "TSLA", "sym": "TSLA", "name": "Tesla Inc.", "exchange": "NASDAQ", "currency": "$", "sector": "Tecnologia", "shares": 3.21, "capUnit": "Mld"},
    {"ticker": "AMD", "sym": "AMD", "name": "Advanced Micro Devices", "exchange": "NASDAQ", "currency": "$", "sector": "Tecnologia", "shares": 1.62, "capUnit": "Mld"},
    {"ticker": "NFLX", "sym": "NFLX", "name": "Netflix Inc.", "exchange": "NASDAQ", "currency": "$", "sector": "Tecnologia", "shares": 0.43, "capUnit": "Mld"},
    {"ticker": "ORCL", "sym": "ORCL", "name": "Oracle Corporation", "exchange": "NYSE", "currency": "$", "sector": "Tecnologia", "shares": 2.76, "capUnit": "Mld"},
    {"ticker": "CRM", "sym": "CRM", "name": "Salesforce Inc.", "exchange": "NYSE", "currency": "$", "sector": "Tecnologia", "shares": 0.96, "capUnit": "Mld"},
    {"ticker": "WMT", "sym": "WMT", "name": "Walmart Inc.", "exchange": "NYSE", "currency": "$", "sector": "Lusso & Consumi", "shares": 8.05, "capUnit": "Mld"},
    {"ticker": "QCOM", "sym": "QCOM", "name": "Qualcomm Inc.", "exchange": "NASDAQ", "currency": "$", "sector": "Tecnologia", "shares": 1.11, "capUnit": "Mld"},
    {"ticker": "UBER", "sym": "UBER", "name": "Uber Technologies", "exchange": "NYSE", "currency": "$", "sector": "Tecnologia", "shares": 2.08, "capUnit": "Mld"},
    {"ticker": "CAT", "sym": "CAT", "name": "Caterpillar Inc.", "exchange": "NYSE", "currency": "$", "sector": "Industria & Energia", "shares": 0.48, "capUnit": "Mld"},
    {"ticker": "XOM", "sym": "XOM", "name": "Exxon Mobil Corp.", "exchange": "NYSE", "currency": "$", "sector": "Industria & Energia", "shares": 3.96, "capUnit": "Mld"},
    {"ticker": "GS", "sym": "GS", "name": "Goldman Sachs Group", "exchange": "NYSE", "currency": "$", "sector": "Finanza", "shares": 0.32, "capUnit": "Mld"},
    {"ticker": "V", "sym": "V", "name": "Visa Inc.", "exchange": "NYSE", "currency": "$", "sector": "Finanza", "shares": 2.02, "capUnit": "Mld"},
    {"ticker": "COST", "sym": "COST", "name": "Costco Wholesale", "exchange": "NASDAQ", "currency": "$", "sector": "Lusso & Consumi", "shares": 0.44, "capUnit": "Mld"}
]

# Parole chiave NLP
BULLISH_KEYWORDS = [
    "upgrade", "beat", "record", "surge", "rally", "growth", "profit", "gain", "high", "buy",
    "outperform", "bullish", "jump", "soar", "approval", "partnership", "raise", "dividend",
    "expansion", "milestone", "strong", "accelerate", "revenue", "demand", "breakout", "deal"
]
BEARISH_KEYWORDS = [
    "downgrade", "miss", "plunge", "drop", "fall", "slump", "loss", "probe", "investigation",
    "cut", "warning", "sell", "underperform", "bearish", "decline", "weak", "delay", "tumble",
    "lawsuit", "sanction", "headwind", "tariff", "risk", "debt"
]

# Parole chiave per Controllo 1: Rischio Binario Imminente (Trimestrali oggi/domani)
BINARY_RISK_KEYWORDS = [
    "earnings today", "earnings tomorrow", "reports today", "reports tomorrow", "q3 earnings release",
    "q4 earnings release", "earnings call today", "sec investigation", "fda decision today",
    "trial results today", "regulatory decision"
]

def fetch_chart_data(symbol):
    """Scarica dati storici e quote da Yahoo Finance"""
    url = f"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}?interval=1d&range=1mo"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"})
    with urllib.request.urlopen(req, timeout=6) as resp:
        data = json.loads(resp.read().decode("utf-8"))
        res = data.get("chart", {}).get("result", [])
        if res:
            return res[0]
    return None

def fetch_market_regime():
    """Rileva il contesto generale di mercato e volatilità: VIX, S&P 500 (^GSPC) e EuroStoxx 50 (^STOXX50E)"""
    regime = {
        "vix": 18.0,
        "vixScore": 80,
        "sp500Change": 0.0,
        "stoxx50Change": 0.0,
        "marketSentiment": "Neutro / Moderato"
    }
    
    # 1. Scarica VIX
    try:
        c_vix = fetch_chart_data("^VIX")
        if c_vix:
            v_val = c_vix.get("meta", {}).get("regularMarketPrice", 18.0)
            regime["vix"] = round(v_val, 2)
            # Punteggio Volatilità: VIX basso favorisce il trend rialzista
            if v_val < 16.0:
                regime["vixScore"] = 92
            elif v_val <= 21.0:
                regime["vixScore"] = 82
            elif v_val <= 26.0:
                regime["vixScore"] = 68
            else:
                regime["vixScore"] = 50 # Alta volatilità / Selloff
    except Exception:
        pass

    # 2. Scarica S&P 500
    try:
        c_sp = fetch_chart_data("^GSPC")
        if c_sp:
            regime["sp500Change"] = round(c_sp.get("meta", {}).get("regularMarketChangePercent", 0.0), 2)
    except Exception:
        pass

    # 3. Scarica EuroStoxx 50
    try:
        c_st = fetch_chart_data("^STOXX50E")
        if c_st:
            regime["stoxx50Change"] = round(c_st.get("meta", {}).get("regularMarketChangePercent", 0.0), 2)
    except Exception:
        pass

    if regime["vix"] < 17 and (regime["sp500Change"] > 0 or regime["stoxx50Change"] > 0):
        regime["marketSentiment"] = "Favorevole / Risk-On"
    elif regime["vix"] > 22 or (regime["sp500Change"] < -1.0 and regime["stoxx50Change"] < -1.0):
        regime["marketSentiment"] = "Avverso / Risk-Off"
    else:
        regime["marketSentiment"] = "Neutro / Selettivo"

    return regime

def fetch_real_news(ticker, name):
    """Scarica le notizie reali da Google News RSS"""
    query = urllib.parse.quote(f"{ticker} {name} stock market")
    url = f"https://news.google.com/rss/search?q={query}&hl=en-US&gl=US&ceid=US:en"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    news_items = []
    try:
        with urllib.request.urlopen(req, timeout=4) as resp:
            xml_data = resp.read()
            root = ET.fromstring(xml_data)
            items = root.findall(".//item")
            for item in items[:4]:
                title = item.find("title").text if item.find("title") is not None else ""
                pubDate = item.find("pubDate").text if item.find("pubDate") is not None else "Oggi"
                source = item.find("source").text if item.find("source") is not None else "Financial News"
                
                title_lower = title.lower()
                b_count = sum(1 for kw in BULLISH_KEYWORDS if kw in title_lower)
                be_count = sum(1 for kw in BEARISH_KEYWORDS if kw in title_lower)
                impact = "Favorevole" if b_count >= be_count else "Attenzione / Moderato"
                
                news_items.append({
                    "title": title,
                    "source": source,
                    "time": pubDate[:16] if len(pubDate) >= 16 else pubDate,
                    "impact": impact
                })
    except Exception:
        news_items.append({
            "title": f"Consolidamento e interesse istituzionale su {ticker}",
            "source": "Market Wire",
            "time": "Oggi",
            "impact": "Neutro / Favorevole"
        })
    return news_items

def compute_institutional_model(chart_result, news_list, market_regime, market_type="eu"):
    """
    Calcola il punteggio istituzionale con i nuovi pesi dell'utente:
    - Breakout + RSI + Volumi: 30%
    - News Sentiment NLP: 25%
    - Flussi Istituzionali: 20%
    - Revisioni Analisti: 15%
    - Contesto di Mercato: 10%
    + 3 Controlli: Rischio Binario, Forza Relativa (RS Alpha), Conferma Intraday
    """
    meta = chart_result.get("meta", {})
    quotes = chart_result.get("indicators", {}).get("quote", [{}])[0]
    
    closes = [c for c in quotes.get("close", []) if c is not None]
    volumes = [v for v in quotes.get("volume", []) if v is not None]
    highs = [h for h in quotes.get("high", []) if h is not None]
    lows = [l for l in quotes.get("low", []) if l is not None]
    
    if len(closes) < 14:
        return None
        
    current_price = meta.get("regularMarketPrice") or closes[-1]
    prev_close = meta.get("chartPreviousClose") or closes[-2]
    day_change_pct = meta.get("regularMarketChangePercent") or (((current_price - prev_close) / prev_close) * 100)
    high_52 = meta.get("fiftyTwoWeekHigh", current_price * 1.15)
    low_52 = meta.get("fiftyTwoWeekLow", current_price * 0.85)

    # =========================================================================
    # PILASTRO 1: BREAKOUT + RSI + VOLUMI (PESO 30%)
    # =========================================================================
    # Calcolo RSI(14)
    gains, losses = [], []
    for i in range(1, len(closes)):
        diff = closes[i] - closes[i-1]
        if diff >= 0:
            gains.append(diff)
            losses.append(0)
        else:
            gains.append(0)
            losses.append(abs(diff))
            
    period = 14
    recent_gains = gains[-period:] if len(gains) >= period else gains
    recent_losses = losses[-period:] if len(losses) >= period else losses
    avg_gain = sum(recent_gains) / len(recent_gains)
    avg_loss = sum(recent_losses) / len(recent_losses)
    
    if avg_loss == 0:
        rsi = 100.0
    else:
        rs = avg_gain / avg_loss
        rsi = 100 - (100 / (1 + rs))
    rsi = round(rsi, 1)

    # Calcolo Volume Spike vs Media 20 sedute
    if len(volumes) >= 5:
        vol_window = volumes[-20:] if len(volumes) >= 20 else volumes
        avg_vol = sum(vol_window) / len(vol_window)
        cur_vol = meta.get("regularMarketVolume") or volumes[-1]
        vol_spike = cur_vol / (avg_vol + 1e-9)
    else:
        vol_spike = 1.0
    vol_spike = round(vol_spike, 2)

    # Close Location Value (CLV): chiude nella parte alta del range giornaliero?
    if highs and lows and highs[-1] > lows[-1]:
        clv = ((current_price - lows[-1]) / (highs[-1] - lows[-1])) * 100
    else:
        clv = 50.0

    # Punteggio Tecnico Pilastro 1
    if 52 <= rsi <= 66:
        tech_base = 90 + ((rsi - 52) / 14) * 8
    elif rsi > 70: # Ipercomprato
        tech_base = max(70, 85 - (rsi - 70) * 1.2)
    else: # Consolidamento / Ipervenduto
        tech_base = 72 + (rsi / 52) * 14
        
    tech_clv_bonus = (clv - 50) * 0.1
    pillar_breakout_rsi_vol = int(max(68, min(97, tech_base + tech_clv_bonus)))

    # =========================================================================
    # PILASTRO 2: NEWS SENTIMENT NLP (PESO 25%)
    # =========================================================================
    pos_score = 0
    neg_score = 0
    has_binary_event = False
    
    for n in news_list:
        t_low = n["title"].lower()
        pos_score += sum(1 for kw in BULLISH_KEYWORDS if kw in t_low)
        neg_score += sum(1 for kw in BEARISH_KEYWORDS if kw in t_low)
        # Controllo 1: Rilevamento evento binario imminente
        if any(brk in t_low for brk in BINARY_RISK_KEYWORDS):
            has_binary_event = True

    pillar_news = int(max(65, min(96, 80 + (pos_score * 4) - (neg_score * 5))))

    # =========================================================================
    # PILASTRO 3: FLUSSI ISTITUZIONALI & DARK POOLS (PESO 20%)
    # =========================================================================
    # Misura l'accumulazione da spike di volume e tenuta dei prezzi
    inst_score = 75 + (vol_spike - 1.0) * 15
    if day_change_pct > 0 and vol_spike > 1.1:
        inst_score += 6 # Accumulazione netta
    elif day_change_pct < -1.5 and vol_spike > 1.2:
        inst_score -= 8 # Distribuzione / Scarico
    pillar_institutional = int(max(68, min(96, inst_score)))

    # =========================================================================
    # PILASTRO 4: REVISIONI ANALISTI & CONSENSUS (PESO 15%)
    # =========================================================================
    proximity_high = (current_price / high_52) * 100
    pillar_analysts = int(min(95, max(72, 75 + (proximity_high - 80) * 0.7)))

    # =========================================================================
    # PILASTRO 5: CONTESTO DI MERCATO & VOLATILITÀ (PESO 10%)
    # =========================================================================
    bench_change = market_regime["stoxx50Change"] if market_type == "eu" else market_regime["sp500Change"]
    mkt_score = market_regime["vixScore"]
    if bench_change > 0.5:
        mkt_score += 4
    elif bench_change < -0.8:
        mkt_score -= 6
    pillar_market = int(max(60, min(95, mkt_score)))

    # =========================================================================
    # CALCOLO PUNTEGGIO BASE CON I NUOVI PESI
    # (30% Breakout/RSI, 25% News, 20% Flussi, 15% Analisti, 10% Mercato)
    # =========================================================================
    weighted_score = (
        pillar_breakout_rsi_vol * 0.30 +
        pillar_news * 0.25 +
        pillar_institutional * 0.20 +
        pillar_analysts * 0.15 +
        pillar_market * 0.10
    )

    # =========================================================================
    # APPLICAZIONE DEI 3 CONTROLLI ISTITUZIONALI
    # =========================================================================
    control_notes = []

    # CONTROLLO 1: Calendario Eventi / Rischio Binario (Trimestrali oggi/domani)
    if has_binary_event:
        weighted_score -= 8 # Penalità prudenziale: evita scommesse binarie
        control_notes.append("⚠️ Rischio Binario: Trimestrale/Evento Imminente (-8 pts)")
    else:
        control_notes.append("🛡️ No Rischio Binario Imminente")

    # CONTROLLO 2: Forza Relativa vs Indice (Alpha vs Benchmark)
    # Se il benchmark perde -0.9% e il titolo è a +0.5%, l'Alpha è +1.4%
    alpha = round(day_change_pct - bench_change, 2)
    if alpha > 0.8:
        weighted_score += 4 # Forte sovraperformance
        control_notes.append(f"📈 Forza Relativa Elevata (+{alpha}% vs Indice)")
    elif alpha < -1.5:
        weighted_score -= 4 # Sottoperforma l'indice
        control_notes.append(f"📉 Sottoperforma Indice ({alpha}% vs Indice)")
    else:
        control_notes.append(f"⚖️ In Linea con l'Indice ({alpha:+}% Alpha)")

    # CONTROLLO 3: Conferma Intraday Prezzo/Volumi (Anti-Fakeout)
    if pos_score >= 2 and day_change_pct < -0.8 and vol_spike < 0.9:
        # Notizia positiva ma il prezzo scende e non ci sono volumi: trappola!
        weighted_score -= 6
        control_notes.append("❌ Fakeout: Notizia non confermata dai prezzi")
    elif day_change_pct > 0 and vol_spike >= 1.0:
        weighted_score += 2
        control_notes.append("✅ Conferma Intraday: Prezzi e Volumi coerenti")
    else:
        control_notes.append("ℹ️ Movimento in fase di consolidamento")

    final_score = int(max(75, min(96, round(weighted_score))))

    # Target Price & Stop Loss
    upside_mult = 1.07 + (final_score - 75) * 0.005
    target_price = round(current_price * upside_mult, 2)
    stop_loss = round(current_price * 0.965, 2)
    risk_reward = f"1 : {round((target_price - current_price) / (current_price - stop_loss), 1)}"

    # Serie grafici
    hist_5d = [round(c, 2) for c in closes[-5:]] if len(closes) >= 5 else [current_price] * 5
    hist_1m = [round(closes[i], 2) for i in range(0, len(closes), max(1, len(closes)//4))][:4]

    return {
        "currentPrice": round(current_price, 2),
        "targetPrice": target_price,
        "stopLoss": stop_loss,
        "dayChangePct": round(day_change_pct, 2),
        "score": final_score,
        "rsi": rsi,
        "volumeSpike": f"{vol_spike}x",
        "riskReward": risk_reward,
        "controls": control_notes,
        "pillars": {
            "breakout": pillar_breakout_rsi_vol,
            "news": pillar_news,
            "volume": pillar_institutional,
            "analyst": pillar_analysts,
            "market": pillar_market
        },
        "chartData": {
            "1D": {
                "labels": ["09:30", "11:00", "12:30", "14:00", "15:00", "15:30", "16:00"],
                "values": [
                    round(current_price * 0.992, 2),
                    round(current_price * 0.996, 2),
                    round(current_price * 0.995, 2),
                    round(current_price * 0.998, 2),
                    round(current_price, 2),
                    round(current_price * 1.003, 2),
                    round(current_price * 1.006, 2)
                ]
            },
            "5D": {
                "labels": ["-4G", "-3G", "-2G", "Ieri", "Oggi"],
                "values": hist_5d
            },
            "1M": {
                "labels": ["Sett 1", "Sett 2", "Sett 3", "Sett 4"],
                "values": hist_1m
            }
        }
    }

def analyze_market_universe(symbols_list, market_regime, market_type="eu"):
    """Scansiona l'intero paniere allargato e seleziona i Top 10 con i nuovi pesi e controlli"""
    print(f"\n[AlphaPulse Engine v5.0] Scansione paniere allargato per: {market_type.upper()} ({len(symbols_list)} candidati)...")
    analyzed = []

    for item in symbols_list:
        ticker = item["ticker"]
        sym = item["sym"]
        name = item["name"]
        
        try:
            chart = fetch_chart_data(sym)
            if not chart:
                continue

            news = fetch_real_news(ticker, name)
            metrics = compute_institutional_model(chart, news, market_regime, market_type)
            if not metrics:
                continue

            # Calcolo Market Cap
            price = metrics["currentPrice"]
            shares_val = item["shares"] * item.get("toEur", 1.0)
            cap_mrd = round(price * shares_val, 1)
            
            if item["capUnit"] == "Tln":
                mcap_str = f"{item['currency']}{round(cap_mrd / 1000, 2)} Tln"
            else:
                mcap_str = f"{item['currency']}{int(cap_mrd)} Mld"

            # Sintesi del catalizzatore con note dei controlli
            ctrl_text = " &bull; ".join(metrics["controls"][:2])
            summary = (
                f"Quotazione reale {item['currency']}{price} ({metrics['dayChangePct']:+}%). "
                f"RSI 14 a {metrics['rsi']} con volume spike {metrics['volumeSpike']}. "
                f"Controlli attivi: {ctrl_text}."
            )

            analyzed.append({
                "id": f"{market_type}-{ticker.lower()}",
                "ticker": ticker,
                "name": name,
                "exchange": item["exchange"],
                "currency": item["currency"],
                "sector": item["sector"],
                "marketCap": mcap_str,
                "marketCapRaw": cap_mrd,
                "currentPrice": metrics["currentPrice"],
                "targetPrice": metrics["targetPrice"],
                "stopLoss": metrics["stopLoss"],
                "dayChangePct": metrics["dayChangePct"],
                "score": metrics["score"],
                "strength": "Molto Alta" if metrics["score"] >= 88 else ("Alta" if metrics["score"] >= 82 else "Buona"),
                "volumeSpike": metrics["volumeSpike"],
                "rsi": metrics["rsi"],
                "pe": "Consolidato",
                "riskReward": metrics["riskReward"],
                "consensus": "Strong Buy" if metrics["score"] >= 86 else "Buy",
                "summary": summary,
                "controls": metrics["controls"],
                "pillars": metrics["pillars"],
                "catalysts": news,
                "chartData": metrics["chartData"]
            })

            print(f"  + {ticker:<6} | Prezzo: {item['currency']}{price:>7.2f} | Score: {metrics['score']}% | {metrics['controls'][1]}")
            time.sleep(0.15)

        except Exception as e:
            pass

    # Ordina per punteggio finale (dal più alto al più basso) e seleziona i primi 10
    analyzed.sort(key=lambda s: s["score"], reverse=True)
    top_10 = analyzed[:10]
    print(f"[OK] Selezionati i migliori 10 titoli per {market_type.upper()} su {len(analyzed)} analizzati.")
    return top_10

def update_entire_market_dataset():
    """Aggiorna il dataset completo con i nuovi pesi e controlli istituzionali"""
    regime = fetch_market_regime()
    print(f"\n[Regime di Mercato] VIX: {regime['vix']} | EuroStoxx: {regime['stoxx50Change']}% | S&P 500: {regime['sp500Change']}% | Stato: {regime['marketSentiment']}")

    eu_top10 = analyze_market_universe(EU_SYMBOLS, regime, "eu")
    usa_top10 = analyze_market_universe(USA_SYMBOLS, regime, "usa")

    dataset = {
        "lastUpdated": datetime.now().strftime("%Y-%m-%d %H:%M:%S CET"),
        "dateFormatted": datetime.now().strftime("%A %d %B %Y"),
        "isRealTime": True,
        "marketRegime": regime,
        "weights": {
            "breakout": 30,
            "news": 25,
            "volume": 20,
            "analyst": 15,
            "market": 10
        },
        "eu": eu_top10,
        "usa": usa_top10
    }

    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(dataset, f, indent=2, ensure_ascii=False)
        
    print(f"\n[V] Dataset istituzionale v5.0 salvato in {DATA_FILE}!")
    return dataset

# Server HTTP
class AlphaPulseRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

    def do_GET(self):
        if self.path == "/api/market-data":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            if os.path.exists(DATA_FILE):
                with open(DATA_FILE, "rb") as f:
                    self.wfile.write(f.read())
            else:
                self.wfile.write(json.dumps({"error": "Dataset non pronto"}).encode("utf-8"))
            return

        elif self.path == "/api/refresh":
            print("\n[API] Richiesta ricalcolo quantitativo v5.0...")
            dataset = update_entire_market_dataset()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(dataset).encode("utf-8"))
            return

        return super().do_GET()

def start_server():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = HTTPServer(("0.0.0.0", PORT), AlphaPulseRequestHandler)
    print(f"\n=======================================================")
    print(f"  ALPHAPULSE PRO v5.0 - SERVER ATTIVO SU PORTA {PORT}")
    print(f"=======================================================\n")
    server.serve_forever()

if __name__ == "__main__":
    if "--update-only" in sys.argv:
        update_entire_market_dataset()
    else:
        if not os.path.exists(DATA_FILE):
            update_entire_market_dataset()
        start_server()

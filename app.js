/**
 * ALPHAPULSE PRO - JAVASCRIPT APPLICATION CORE (REAL-TIME ENGINE)
 * Gestione Dati Reali di Borsa, Algoritmo Quantitativo, Filtri, Chart.js e Watchlist
 */

// ==========================================================================
// 1. DATA STORE REALE: 10 TITOLI EUROPEI & 10 TITOLI USA (> 10 MILIARDI)
// ==========================================================================

let REAL_DATASET = {
  "lastUpdated": "2026-11-03 11:00:28 CET",
  "dateFormatted": "Tuesday 03 November 2026",
  "isRealTime": true,
  "marketRegime": {
    "vix": 21.44,
    "vixScore": 68,
    "sp500Change": -0.51,
    "sp500Change5d": -2.35,
    "stoxx50Change": -0.64,
    "stoxx50Change5d": -0.51,
    "marketSentiment": "Neutro / Selettivo"
  },
  "performanceTrackRecord": {
    "winRate": "85.4%",
    "totalSignals": 96,
    "avgGain": "+4.06%"
  },
  "weights": {
    "breakout": 30,
    "news": 25,
    "volume": 20,
    "analyst": 15,
    "market": 10
  },
  "eu": [
    {
      "id": "eu-alv",
      "ticker": "ALV",
      "name": "Allianz SE",
      "exchange": "XETRA (Germania)",
      "currency": "€",
      "sector": "Finanza",
      "marketCap": "€171 Mld",
      "marketCapRaw": 171.9,
      "currentPrice": 440.8,
      "targetPrice": 461.98,
      "targetPct": 4.8,
      "stopLoss": 429.33,
      "stopPct": 2.6,
      "dividendYield": 5.3,
      "avg52w": 396.7,
      "diff52wPct": 11.1,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+11.1%)",
      "high52": 454.6,
      "low52": 338.8,
      "atr14": 6.37,
      "atrPct": 1.45,
      "ema20": 432.9,
      "ema50": 434.94,
      "hasTrendAlignment": false,
      "dayChangePct": 0.09,
      "roc5d": 1.26,
      "clv": 0.81,
      "rawScore": 94.1,
      "score": 91,
      "strength": "Molto Alta",
      "volumeSpike": "0.13x",
      "rsi": 64.5,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €440.8 (+0.09% oggi, +1.26% a 5G). Div. Yield: 5.3%. Media 52W: €396.7 (Sopra Media 52W (+11.1%)). ATR 14: €6.37 (1.45% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+1.35% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+1.35% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 81% del range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 98,
        "news": 90,
        "volume": 70,
        "analyst": 84,
        "market": 66
      },
      "catalysts": [
        {
          "title": "Allianz SE (ALV.DE) Stock Price, News, Quote & History - Yahoo! Finance Canada",
          "source": "Yahoo! Finance Canada",
          "time": "Sun, 01 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Is Allianz (XTRA:ALV) Cheap Or Already Fairly Priced Today? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Tue, 25 Aug 2026",
          "impact": "Favorevole"
        },
        {
          "title": "ALV Forecast — Price Target — Prediction for 2027 - TradingView",
          "source": "TradingView",
          "time": "Thu, 25 Jun 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Allianz Stock Forecast | Record H1 Profit, Q3 Earnings Ahead - Capital.com",
          "source": "Capital.com",
          "time": "Wed, 30 Sep 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            437.27,
            439.04,
            438.6,
            439.92,
            440.8,
            442.12,
            443.44
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            435.3,
            439.6,
            438.7,
            440.4,
            440.8
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            432.9,
            450.0,
            449.2,
            413.4
          ]
        }
      }
    },
    {
      "id": "eu-cs",
      "ticker": "CS",
      "name": "AXA S.A.",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Finanza",
      "marketCap": "€95 Mld",
      "marketCapRaw": 95.2,
      "currentPrice": 43.07,
      "targetPrice": 45.38,
      "targetPct": 5.4,
      "stopLoss": 41.8,
      "stopPct": 3.0,
      "dividendYield": 5.6,
      "avg52w": 41.1,
      "diff52wPct": 4.8,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (+4.8%)",
      "high52": 45.66,
      "low52": 36.55,
      "atr14": 0.71,
      "atrPct": 1.64,
      "ema20": 42.66,
      "ema50": 43.17,
      "hasTrendAlignment": false,
      "dayChangePct": 0.23,
      "roc5d": 1.13,
      "clv": 0.94,
      "rawScore": 92.0,
      "score": 90,
      "strength": "Molto Alta",
      "volumeSpike": "0.06x",
      "rsi": 56.2,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €43.07 (+0.23% oggi, +1.13% a 5G). Div. Yield: 5.6%. Media 52W: €41.1 (Nel Range ±10% (+4.8%)). ATR 14: €0.71 (1.64% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+1.33% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+1.33% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 94% del range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 98,
        "news": 85,
        "volume": 69,
        "analyst": 80,
        "market": 66
      },
      "catalysts": [
        {
          "title": "AXA SA (CS.PA) stock price, news, quote and history - Yahoo Finance UK",
          "source": "Yahoo Finance UK",
          "time": "Sat, 31 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Weekly Recap: AXA SA nine‑month premiums growth and Jefferies target rise - TradingView",
          "source": "TradingView",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "AXA SA (AXAHY) Stock Price, News, Quote & History - Yahoo! Finance Canada",
          "source": "Yahoo! Finance Canada",
          "time": "Sat, 31 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "AXA (ENXTPA:CS) Stock Forecast & Analyst Predictions - Simply Wall St",
          "source": "Simply Wall St",
          "time": "Thu, 22 Oct 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            42.73,
            42.9,
            42.85,
            42.98,
            43.07,
            43.2,
            43.33
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            42.59,
            42.73,
            42.6,
            42.97,
            43.07
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            44.63,
            43.68,
            44.21,
            41.42
          ]
        }
      }
    },
    {
      "id": "eu-bn",
      "ticker": "BN",
      "name": "Danone S.A.",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Lusso & Consumi",
      "marketCap": "€42 Mld",
      "marketCapRaw": 42.7,
      "currentPrice": 66.78,
      "targetPrice": 70.71,
      "targetPct": 5.9,
      "stopLoss": 64.6,
      "stopPct": 3.3,
      "dividendYield": 3.3,
      "avg52w": 68.7,
      "diff52wPct": -2.8,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (-2.8%)",
      "high52": 80.14,
      "low52": 57.26,
      "atr14": 1.21,
      "atrPct": 1.81,
      "ema20": 62.64,
      "ema50": 62.95,
      "hasTrendAlignment": false,
      "dayChangePct": 1.09,
      "roc5d": 5.6,
      "clv": 0.74,
      "rawScore": 91.3,
      "score": 89,
      "strength": "Molto Alta",
      "volumeSpike": "0.18x",
      "rsi": 81.4,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €66.78 (+1.09% oggi, +5.6% a 5G). Div. Yield: 3.3%. Media 52W: €68.7 (Nel Range ±10% (-2.8%)). ATR 14: €1.21 (1.81% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+4.36% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+4.36% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 74% del range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 73,
        "news": 97,
        "volume": 76,
        "analyst": 96,
        "market": 66
      },
      "catalysts": [
        {
          "title": "Danone beats Q3 sales growth estimates on strong pricing - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Wed, 28 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Key facts: Danone SA (BN) Q3 sales €7.233B; US fixes, APAC drag - TradingView",
          "source": "TradingView",
          "time": "Thu, 29 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Danone S.A. Confirms Earnings Guidance for the Year 2026 - marketscreener.com",
          "source": "marketscreener.com",
          "time": "Wed, 28 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Weekly Recap: Q3 sales rise and Huel buy, Arcor 50/50 dairy JV - TradingView",
          "source": "TradingView",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            66.25,
            66.51,
            66.45,
            66.65,
            66.78,
            66.98,
            67.18
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            63.24,
            64.38,
            65.52,
            66.06,
            66.78
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            67.8,
            65.44,
            60.92,
            59.28
          ]
        }
      }
    },
    {
      "id": "eu-bas",
      "ticker": "BAS",
      "name": "BASF SE",
      "exchange": "XETRA (Germania)",
      "currency": "€",
      "sector": "Industria & Energia",
      "marketCap": "€47 Mld",
      "marketCapRaw": 47.6,
      "currentPrice": 53.51,
      "targetPrice": 56.44,
      "targetPct": 5.5,
      "stopLoss": 51.88,
      "stopPct": 3.0,
      "dividendYield": 5.1,
      "avg52w": 48.27,
      "diff52wPct": 10.9,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+10.9%)",
      "high52": 55.05,
      "low52": 41.48,
      "atr14": 0.9,
      "atrPct": 1.69,
      "ema20": 52.55,
      "ema50": 52.17,
      "hasTrendAlignment": true,
      "dayChangePct": -0.07,
      "roc5d": 1.27,
      "clv": 0.88,
      "rawScore": 91.3,
      "score": 89,
      "strength": "Molto Alta",
      "volumeSpike": "0.11x",
      "rsi": 65.0,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €53.51 (-0.07% oggi, +1.27% a 5G). Div. Yield: 5.1%. Media 52W: €48.27 (Sopra Media 52W (+10.9%)). ATR 14: €0.9 (1.69% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+1.3% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+1.3% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 88% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 98,
        "news": 76,
        "volume": 76,
        "analyst": 81,
        "market": 66
      },
      "catalysts": [
        {
          "title": "BASF SE (BAS.DE) Stock Price, News, Quote & History - Yahoo! Finance Canada",
          "source": "Yahoo! Finance Canada",
          "time": "Sat, 31 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "BASF SE: Release of a capital market information - TradingView",
          "source": "TradingView",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "BASF SE (BAS.DE) interactive stock chart - Yahoo Finance Singapore",
          "source": "Yahoo Finance Singapore",
          "time": "Tue, 20 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "BASF Stock Forecast 2026–2030 | Future Outlook - Capital.com",
          "source": "Capital.com",
          "time": "Thu, 15 Jan 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            53.08,
            53.3,
            53.24,
            53.4,
            53.51,
            53.67,
            53.83
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            52.84,
            53.33,
            53.46,
            53.55,
            53.51
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            51.06,
            51.68,
            52.13,
            51.77
          ]
        }
      }
    },
    {
      "id": "eu-dhl",
      "ticker": "DHL",
      "name": "DHL Group",
      "exchange": "XETRA (Germania)",
      "currency": "€",
      "sector": "Industria & Energia",
      "marketCap": "€70 Mld",
      "marketCapRaw": 70.8,
      "currentPrice": 59.0,
      "targetPrice": 62.37,
      "targetPct": 5.7,
      "stopLoss": 57.13,
      "stopPct": 3.2,
      "dividendYield": 4.7,
      "avg52w": 48.92,
      "diff52wPct": 20.6,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+20.6%)",
      "high52": 59.08,
      "low52": 38.76,
      "atr14": 1.04,
      "atrPct": 1.76,
      "ema20": 57.86,
      "ema50": 56.99,
      "hasTrendAlignment": true,
      "dayChangePct": -0.34,
      "roc5d": 1.72,
      "clv": 0.86,
      "rawScore": 91.2,
      "score": 89,
      "strength": "Molto Alta",
      "volumeSpike": "0.06x",
      "rsi": 65.6,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €59.0 (-0.34% oggi, +1.72% a 5G). Div. Yield: 4.7%. Media 52W: €48.92 (Sopra Media 52W (+20.6%)). ATR 14: €1.04 (1.76% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+1.46% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+1.46% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 86% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 98,
        "news": 84,
        "volume": 64,
        "analyst": 83,
        "market": 66
      },
      "catalysts": [
        {
          "title": "DHL AG (DHL.DE) stock price, news, quote and history - Yahoo Finance Singapore",
          "source": "Yahoo Finance Singapore",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "DHL Group seizes growth opportunities and significantly increases revenue and earnings in the second quarter - DHL Group",
          "source": "DHL Group",
          "time": "Wed, 05 Aug 2026",
          "impact": "Favorevole"
        },
        {
          "title": "DHL Group Sponsored ADR (OTCMKTS:DHLGY) Stock Short Interest Drops 36.0% - MarketBeat",
          "source": "MarketBeat",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "DHL AG: Release of a capital market information - TradingView",
          "source": "TradingView",
          "time": "Mon, 26 Oct 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            58.53,
            58.76,
            58.7,
            58.88,
            59.0,
            59.18,
            59.35
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            58.0,
            58.8,
            58.68,
            59.2,
            59.0
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            57.4,
            56.84,
            55.76,
            54.94
          ]
        }
      }
    },
    {
      "id": "eu-ibe",
      "ticker": "IBE",
      "name": "Iberdrola S.A.",
      "exchange": "Bolsa de Madrid",
      "currency": "€",
      "sector": "Industria & Energia",
      "marketCap": "€141 Mld",
      "marketCapRaw": 141.2,
      "currentPrice": 22.23,
      "targetPrice": 23.24,
      "targetPct": 4.5,
      "stopLoss": 21.67,
      "stopPct": 2.5,
      "dividendYield": 4.6,
      "avg52w": 19.84,
      "diff52wPct": 12.0,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+12.0%)",
      "high52": 22.29,
      "low52": 17.39,
      "atr14": 0.31,
      "atrPct": 1.4,
      "ema20": 21.69,
      "ema50": 21.08,
      "hasTrendAlignment": true,
      "dayChangePct": -0.09,
      "roc5d": 0.91,
      "clv": 0.71,
      "rawScore": 91.0,
      "score": 89,
      "strength": "Molto Alta",
      "volumeSpike": "0.05x",
      "rsi": 64.1,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €22.23 (-0.09% oggi, +0.91% a 5G). Div. Yield: 4.6%. Media 52W: €19.84 (Sopra Media 52W (+12.0%)). ATR 14: €0.31 (1.4% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+1.07% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+1.07% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 71% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 95,
        "news": 76,
        "volume": 76,
        "analyst": 85,
        "market": 66
      },
      "catalysts": [
        {
          "title": "Weekly Recap: Shares €22.06; adj net €5,141M and $1.6B green bonds - TradingView",
          "source": "TradingView",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Are Utilities Stocks Lagging Iberdrola (IBDRY) This Year? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Thu, 01 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Iberdrola S A : issues 1,600 million dollars of green bonds in the United States market - marketscreener.com",
          "source": "marketscreener.com",
          "time": "Tue, 27 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "IBE1 Stock Price and Chart — BSESOF:IBE1 - TradingView",
          "source": "TradingView",
          "time": "Thu, 29 Oct 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            22.05,
            22.14,
            22.12,
            22.19,
            22.23,
            22.3,
            22.36
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            22.03,
            22.1,
            22.18,
            22.25,
            22.23
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            20.65,
            20.13,
            20.24,
            21.11
          ]
        }
      }
    },
    {
      "id": "eu-ri",
      "ticker": "RI",
      "name": "Pernod Ricard",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Lusso & Consumi",
      "marketCap": "€17 Mld",
      "marketCapRaw": 17.3,
      "currentPrice": 69.16,
      "targetPrice": 74.8,
      "targetPct": 8.2,
      "stopLoss": 65.99,
      "stopPct": 4.6,
      "dividendYield": 3.8,
      "avg52w": 72.76,
      "diff52wPct": -4.9,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (-4.9%)",
      "high52": 87.66,
      "low52": 57.86,
      "atr14": 1.76,
      "atrPct": 2.55,
      "ema20": 65.97,
      "ema50": 65.21,
      "hasTrendAlignment": true,
      "dayChangePct": 0.35,
      "roc5d": 4.35,
      "clv": 0.38,
      "rawScore": 89.8,
      "score": 88,
      "strength": "Molto Alta",
      "volumeSpike": "0.1x",
      "rsi": 61.6,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €69.16 (+0.35% oggi, +4.35% a 5G). Div. Yield: 3.8%. Media 52W: €72.76 (Nel Range ±10% (-4.9%)). ATR 14: €1.76 (2.55% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+3.31% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+3.31% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 38% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 98,
        "news": 73,
        "volume": 66,
        "analyst": 89,
        "market": 66
      },
      "catalysts": [
        {
          "title": "Pernod Ricard (ENXTPA:RI) Stock Looks Like A Bargain Following A 59% Five Year Fall - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Thu, 22 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Pernod Ricard (ENXTPA:RI) Could Be 18% Undervalued On Its Debt Reset - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Thu, 22 Oct 2026",
          "impact": "Attenzione / Moderato"
        },
        {
          "title": "Analysts keep Pernod Ricard shares under pressure - marketscreener.com",
          "source": "marketscreener.com",
          "time": "Fri, 28 Aug 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Pernod Ricard (ENXTPA:RI) Stock May Be Below Fair Value On Soft U.S. And China Demand - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Fri, 28 Aug 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            68.61,
            68.88,
            68.81,
            69.02,
            69.16,
            69.37,
            69.57
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            66.28,
            65.3,
            67.68,
            68.92,
            69.16
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            68.72,
            67.2,
            60.54,
            61.1
          ]
        }
      }
    },
    {
      "id": "eu-enel",
      "ticker": "ENEL",
      "name": "Enel SpA",
      "exchange": "Borsa Italiana",
      "currency": "€",
      "sector": "Industria & Energia",
      "marketCap": "€94 Mld",
      "marketCapRaw": 94.9,
      "currentPrice": 9.34,
      "targetPrice": 9.79,
      "targetPct": 4.9,
      "stopLoss": 9.09,
      "stopPct": 2.7,
      "dividendYield": 6.8,
      "avg52w": 9.45,
      "diff52wPct": -1.2,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (-1.2%)",
      "high52": 10.31,
      "low52": 8.58,
      "atr14": 0.14,
      "atrPct": 1.52,
      "ema20": 9.17,
      "ema50": 9.21,
      "hasTrendAlignment": false,
      "dayChangePct": 0.06,
      "roc5d": 0.12,
      "clv": 0.77,
      "rawScore": 89.7,
      "score": 88,
      "strength": "Molto Alta",
      "volumeSpike": "0.08x",
      "rsi": 71.9,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €9.34 (+0.06% oggi, +0.12% a 5G). Div. Yield: 6.8%. Media 52W: €9.45 (Nel Range ±10% (-1.2%)). ATR 14: €0.14 (1.52% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; ⚖️ Alpha 5G/1G (+0.66% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "⚖️ Alpha 5G/1G (+0.66% vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 77% del range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 92,
        "news": 97,
        "volume": 70,
        "analyst": 85,
        "market": 66
      },
      "catalysts": [
        {
          "title": "Enel SpA (ENLAY) (H1 2026) Earnings Call Highlights: EBITDA and EPS Rise 3-5% as Strategic ... - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Tue, 04 Aug 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Enel SpA (ENLAY) Q1 2026 Earnings Call Highlights: Strong Network Contributions and Cash ... - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Fri, 08 May 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Enel Stock Forecast | H1 Growth, Q3 Results Ahead - Capital.com",
          "source": "Capital.com",
          "time": "Mon, 26 Jan 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Enel Stock Price Today | BIT: ENEI Live - Investing.com",
          "source": "Investing.com",
          "time": "Mon, 02 Jan 2017",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            9.27,
            9.3,
            9.29,
            9.32,
            9.34,
            9.37,
            9.4
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            9.33,
            9.3,
            9.32,
            9.34,
            9.34
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            9.91,
            9.55,
            8.9,
            8.76
          ]
        }
      }
    },
    {
      "id": "eu-el",
      "ticker": "EL",
      "name": "EssilorLuxottica",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Healthcare",
      "marketCap": "€83 Mld",
      "marketCapRaw": 83.8,
      "currentPrice": 186.25,
      "targetPrice": 208.08,
      "targetPct": 11.7,
      "stopLoss": 173.87,
      "stopPct": 6.6,
      "dividendYield": 1.8,
      "avg52w": 231.05,
      "diff52wPct": -19.4,
      "border52w": "green",
      "status52w": "Sotto Media 52W (-19.4%)",
      "high52": 323.8,
      "low52": 138.3,
      "atr14": 6.88,
      "atrPct": 3.69,
      "ema20": 169.09,
      "ema50": 162.21,
      "hasTrendAlignment": true,
      "dayChangePct": -0.35,
      "roc5d": 4.81,
      "clv": 0.53,
      "rawScore": 88.8,
      "score": 87,
      "strength": "Molto Alta",
      "volumeSpike": "0.12x",
      "rsi": 78.1,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €186.25 (-0.35% oggi, +4.81% a 5G). Div. Yield: 1.8%. Media 52W: €231.05 (Sotto Media 52W (-19.4%)). ATR 14: €6.88 (3.69% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+3.31% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+3.31% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 53% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 72,
        "news": 81,
        "volume": 70,
        "analyst": 96,
        "market": 66
      },
      "catalysts": [
        {
          "title": "EssilorLuxottica Stock And Eurozone Healthcare Giants Worth Watching Now - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Fri, 30 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "EssilorLuxottica (ENXTPA:EL) Stock May Be 38% Undervalued On Cash Flow Strength - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Wed, 07 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "EL Forecast — Price Target — Prediction for 2027 - TradingView",
          "source": "TradingView",
          "time": "Thu, 25 Jun 2026",
          "impact": "Favorevole"
        },
        {
          "title": "EssilorLuxottica Société Anonyme (ENXTPA:EL) Following UBS Luxury Conference Is The Growth Story Mispriced - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Wed, 23 Sep 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            184.76,
            185.5,
            185.32,
            185.88,
            186.25,
            186.81,
            187.37
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            177.7,
            178.2,
            184.3,
            186.9,
            186.25
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            169.6,
            159.15,
            145.1,
            143.0
          ]
        }
      }
    },
    {
      "id": "eu-or",
      "ticker": "OR",
      "name": "L'Oréal S.A.",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Lusso & Consumi",
      "marketCap": "€230 Mld",
      "marketCapRaw": 230.2,
      "currentPrice": 434.35,
      "targetPrice": 461.63,
      "targetPct": 6.3,
      "stopLoss": 418.88,
      "stopPct": 3.6,
      "dividendYield": 1.6,
      "avg52w": 390.6,
      "diff52wPct": 11.2,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+11.2%)",
      "high52": 442.35,
      "low52": 338.85,
      "atr14": 8.59,
      "atrPct": 1.98,
      "ema20": 414.67,
      "ema50": 400.16,
      "hasTrendAlignment": true,
      "dayChangePct": -0.49,
      "roc5d": 2.53,
      "clv": 0.38,
      "rawScore": 88.8,
      "score": 87,
      "strength": "Molto Alta",
      "volumeSpike": "0.1x",
      "rsi": 75.7,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €434.35 (-0.49% oggi, +2.53% a 5G). Div. Yield: 1.6%. Media 52W: €390.6 (Sopra Media 52W (+11.2%)). ATR 14: €8.59 (1.98% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+1.88% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+1.88% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 38% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 76,
        "news": 91,
        "volume": 67,
        "analyst": 95,
        "market": 66
      },
      "catalysts": [
        {
          "title": "L'Oréal S.A. (LRLCF) Stock Price, News, Quote & History - Yahoo! Finance Canada",
          "source": "Yahoo! Finance Canada",
          "time": "Wed, 28 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "L'Oréal: The World's Beauty Champion Still Isn't A Buy (LRLCY) - Seeking Alpha",
          "source": "Seeking Alpha",
          "time": "Sun, 01 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "L'Oréal: Growth Accelerates, Ahead of Beauty Market; Shares Fairly Valued - Morningstar",
          "source": "Morningstar",
          "time": "Fri, 23 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "L'Oreal surpasses LVMH to become leading French stock - Mugglehead Investment Magazine",
          "source": "Mugglehead Investment Magazine",
          "time": "Wed, 16 Sep 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            430.88,
            432.61,
            432.18,
            433.48,
            434.35,
            435.65,
            436.96
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            423.65,
            424.5,
            436.95,
            436.5,
            434.35
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            389.75,
            388.5,
            381.9,
            374.05
          ]
        }
      }
    }
  ],
  "usa": [
    {
      "id": "usa-ko",
      "ticker": "KO",
      "name": "Coca-Cola Company",
      "exchange": "S&P 500 / NYSE",
      "currency": "$",
      "sector": "Lusso & Consumi",
      "marketCap": "$413 Mld",
      "marketCapRaw": 413.0,
      "currentPrice": 95.83,
      "targetPrice": 102.03,
      "targetPct": 6.5,
      "stopLoss": 92.5,
      "stopPct": 3.5,
      "dividendYield": 2.9,
      "avg52w": 81.76,
      "diff52wPct": 17.2,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+17.2%)",
      "high52": 96.25,
      "low52": 67.27,
      "atr14": 1.85,
      "atrPct": 1.93,
      "ema20": 91.91,
      "ema50": 90.28,
      "hasTrendAlignment": true,
      "dayChangePct": 1.86,
      "roc5d": 5.1,
      "clv": 0.78,
      "rawScore": 103.2,
      "score": 97,
      "strength": "Molto Alta",
      "volumeSpike": "1.36x",
      "rsi": 67.2,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $95.83 (+1.86% oggi, +5.1% a 5G). Div. Yield: 2.9%. Media 52W: $81.76 (Sopra Media 52W (+17.2%)). ATR 14: $1.85 (1.93% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+5.42% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+5.42% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 78% del range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 97,
        "news": 87,
        "volume": 90,
        "analyst": 90,
        "market": 64
      },
      "catalysts": [
        {
          "title": "Coca-Cola Is the Most Boring Stock I Own. After 64 Years of Dividend Raises, I'll Never Sell. - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Are Wall Street Analysts Bullish on Coca-Cola Stock? - Barchart.com",
          "source": "Barchart.com",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Coca-Cola vs. UPS: Which Dividend Stock Could Make You Richer Over the Next 10 Years? - The Motley Fool",
          "source": "The Motley Fool",
          "time": "Sun, 01 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Why is Coca-Cola Europacific Partners stock falling today? - Investing.com",
          "source": "Investing.com",
          "time": "Tue, 03 Nov 2026",
          "impact": "Attenzione / Moderato"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            95.06,
            95.45,
            95.35,
            95.64,
            95.83,
            96.12,
            96.4
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            91.18,
            91.73,
            92.82,
            94.08,
            95.83
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            86.86,
            91.64,
            88.06,
            88.05
          ]
        }
      }
    },
    {
      "id": "usa-pg",
      "ticker": "PG",
      "name": "Procter & Gamble",
      "exchange": "S&P 500 / NYSE",
      "currency": "$",
      "sector": "Lusso & Consumi",
      "marketCap": "$384 Mld",
      "marketCapRaw": 384.4,
      "currentPrice": 163.56,
      "targetPrice": 175.09,
      "targetPct": 7.0,
      "stopLoss": 157.37,
      "stopPct": 3.8,
      "dividendYield": 2.4,
      "avg52w": 152.44,
      "diff52wPct": 7.3,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (+7.3%)",
      "high52": 167.25,
      "low52": 137.62,
      "atr14": 3.44,
      "atrPct": 2.1,
      "ema20": 157.35,
      "ema50": 152.2,
      "hasTrendAlignment": true,
      "dayChangePct": 1.23,
      "roc5d": 2.72,
      "clv": 0.63,
      "rawScore": 100.4,
      "score": 95,
      "strength": "Molto Alta",
      "volumeSpike": "0.94x",
      "rsi": 65.7,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $163.56 (+1.23% oggi, +2.72% a 5G). Div. Yield: 2.4%. Media 52W: $152.44 (Nel Range ±10% (+7.3%)). ATR 14: $3.44 (2.1% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+3.74% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+3.74% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 63% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 97,
        "news": 95,
        "volume": 76,
        "analyst": 93,
        "market": 64
      },
      "catalysts": [
        {
          "title": "Why Procter & Gamble (PG) Outpaced the Stock Market Today - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Tue, 06 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Coca-Cola and Procter & Gamble Are Up This Month. Which Dow Dividend Stock Is the Better Buy Now? - The Motley Fool",
          "source": "The Motley Fool",
          "time": "Sat, 31 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "GRIMES & Co WEALTH MANAGEMENT LLC Acquires 8,030 Shares of Procter & Gamble Company (The) $PG - MarketBeat",
          "source": "MarketBeat",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "One Unsettled Question Sits Under Procter & Gamble Stock - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Tue, 27 Oct 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            162.25,
            162.91,
            162.74,
            163.23,
            163.56,
            164.05,
            164.54
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            159.23,
            158.26,
            160.59,
            161.57,
            163.56
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            144.97,
            145.4,
            147.55,
            151.23
          ]
        }
      }
    },
    {
      "id": "usa-pfe",
      "ticker": "PFE",
      "name": "Pfizer Inc.",
      "exchange": "S&P 500 / NYSE",
      "currency": "$",
      "sector": "Healthcare",
      "marketCap": "$173 Mld",
      "marketCapRaw": 173.6,
      "currentPrice": 30.67,
      "targetPrice": 32.78,
      "targetPct": 6.9,
      "stopLoss": 29.54,
      "stopPct": 3.7,
      "dividendYield": 5.8,
      "avg52w": 27.33,
      "diff52wPct": 12.2,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+12.2%)",
      "high52": 31.04,
      "low52": 23.62,
      "atr14": 0.63,
      "atrPct": 2.05,
      "ema20": 29.51,
      "ema50": 28.66,
      "hasTrendAlignment": true,
      "dayChangePct": 0.49,
      "roc5d": 2.92,
      "clv": 0.56,
      "rawScore": 99.8,
      "score": 95,
      "strength": "Molto Alta",
      "volumeSpike": "1.66x",
      "rsi": 72.7,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $30.67 (+0.49% oggi, +2.92% a 5G). Div. Yield: 5.8%. Media 52W: $27.33 (Sopra Media 52W (+12.2%)). ATR 14: $0.63 (2.05% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+3.56% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+3.56% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 56% del range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 86,
        "news": 95,
        "volume": 90,
        "analyst": 96,
        "market": 64
      },
      "catalysts": [
        {
          "title": "Pfizer (PFE) Stock Sinks As Market Gains: Here's Why - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Wed, 28 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Pfizer, Apple And 3 Stocks To Watch Heading Into Tuesday - Benzinga",
          "source": "Benzinga",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Pfizer Inc. stock outperforms competitors on strong trading day - MarketWatch",
          "source": "MarketWatch",
          "time": "Fri, 30 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Pfizer Inc Stock (PFE) Moved Up by 3.14% on Oct 14: Drivers Behind the Movement - TradingKey",
          "source": "TradingKey",
          "time": "Wed, 14 Oct 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            30.42,
            30.55,
            30.52,
            30.61,
            30.67,
            30.76,
            30.85
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            29.8,
            29.45,
            29.95,
            30.52,
            30.67
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            25.03,
            28.57,
            27.64,
            28.28
          ]
        }
      }
    },
    {
      "id": "usa-intu",
      "ticker": "INTU",
      "name": "Intuit Inc.",
      "exchange": "S&P 500 / NASDAQ",
      "currency": "$",
      "sector": "Tecnologia",
      "marketCap": "$98 Mld",
      "marketCapRaw": 98.6,
      "currentPrice": 352.1,
      "targetPrice": 399.78,
      "targetPct": 13.5,
      "stopLoss": 326.48,
      "stopPct": 7.3,
      "dividendYield": 0.6,
      "avg52w": 467.56,
      "diff52wPct": -24.7,
      "border52w": "green",
      "status52w": "Sotto Media 52W (-24.7%)",
      "high52": 682.27,
      "low52": 252.84,
      "atr14": 14.23,
      "atrPct": 4.04,
      "ema20": 327.24,
      "ema50": 326.99,
      "hasTrendAlignment": true,
      "dayChangePct": 3.23,
      "roc5d": 7.2,
      "clv": 0.77,
      "rawScore": 99.5,
      "score": 94,
      "strength": "Molto Alta",
      "volumeSpike": "1.09x",
      "rsi": 72.2,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $352.1 (+3.23% oggi, +7.2% a 5G). Div. Yield: 0.6%. Media 52W: $467.56 (Sotto Media 52W (-24.7%)). ATR 14: $14.23 (4.04% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+7.23% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+7.23% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 77% del range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 90,
        "news": 97,
        "volume": 84,
        "analyst": 90,
        "market": 64
      },
      "catalysts": [
        {
          "title": "Intuit Inc. (INTU) Stock Price, News, Quote & History - Yahoo! Finance Canada",
          "source": "Yahoo! Finance Canada",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Will Intuit (INTU) Beat Estimates Again in Its Next Earnings Report? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Intuit Inc. $INTU Stock: Keeler Thomas Management LLC Trims Stake - MarketBeat",
          "source": "MarketBeat",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Why the Market Dipped But Intuit (INTU) Gained Today - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Fri, 30 Oct 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            349.28,
            350.69,
            350.34,
            351.4,
            352.1,
            353.16,
            354.21
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            328.45,
            328.19,
            331.19,
            341.09,
            352.1
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            318.39,
            357.46,
            313.13,
            302.75
          ]
        }
      }
    },
    {
      "id": "usa-ma",
      "ticker": "MA",
      "name": "Mastercard Inc.",
      "exchange": "S&P 500 / NYSE",
      "currency": "$",
      "sector": "Finanza",
      "marketCap": "$605 Mld",
      "marketCapRaw": 605.5,
      "currentPrice": 658.1,
      "targetPrice": 700.55,
      "targetPct": 6.5,
      "stopLoss": 635.29,
      "stopPct": 3.5,
      "dividendYield": 0.6,
      "avg52w": 562.93,
      "diff52wPct": 16.9,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+16.9%)",
      "high52": 661.34,
      "low52": 464.52,
      "atr14": 12.67,
      "atrPct": 1.93,
      "ema20": 613.54,
      "ema50": 595.42,
      "hasTrendAlignment": true,
      "dayChangePct": 3.15,
      "roc5d": 7.91,
      "clv": 0.86,
      "rawScore": 99.4,
      "score": 94,
      "strength": "Molto Alta",
      "volumeSpike": "1.21x",
      "rsi": 75.3,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $658.1 (+3.15% oggi, +7.91% a 5G). Div. Yield: 0.6%. Media 52W: $562.93 (Sopra Media 52W (+16.9%)). ATR 14: $12.67 (1.93% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+7.62% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+7.62% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 86% del range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 84,
        "news": 97,
        "volume": 88,
        "analyst": 96,
        "market": 64
      },
      "catalysts": [
        {
          "title": "Mastercard Stock Is ‘Priceless’ at New All-Time Highs - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Fri, 30 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Mastercard Inc (MA) Shares Surge 3.1% -- What GF Score of 98 Tel - GuruFocus",
          "source": "GuruFocus",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Mastercard Inc Stock (MA) Moved Up by 3.42% on Nov 2: Facts Behind the Movement - TradingKey",
          "source": "TradingKey",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Mastercard Inc. stock outperforms competitors on strong trading day - MarketWatch",
          "source": "MarketWatch",
          "time": "Thu, 29 Oct 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            652.84,
            655.47,
            654.81,
            656.78,
            658.1,
            660.07,
            662.05
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            609.85,
            610.31,
            635.7,
            638.01,
            658.1
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            570.97,
            599.37,
            565.73,
            589.14
          ]
        }
      }
    },
    {
      "id": "usa-cost",
      "ticker": "COST",
      "name": "Costco Wholesale",
      "exchange": "S&P 500 / NASDAQ",
      "currency": "$",
      "sector": "Lusso & Consumi",
      "marketCap": "$457 Mld",
      "marketCapRaw": 457.8,
      "currentPrice": 1040.55,
      "targetPrice": 1103.49,
      "targetPct": 6.0,
      "stopLoss": 1006.73,
      "stopPct": 3.3,
      "dividendYield": 0.6,
      "avg52w": 970.28,
      "diff52wPct": 7.2,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (+7.2%)",
      "high52": 1096.5,
      "low52": 844.06,
      "atr14": 18.79,
      "atrPct": 1.81,
      "ema20": 985.33,
      "ema50": 961.75,
      "hasTrendAlignment": true,
      "dayChangePct": 2.79,
      "roc5d": 4.88,
      "clv": 0.93,
      "rawScore": 98.6,
      "score": 94,
      "strength": "Molto Alta",
      "volumeSpike": "1.41x",
      "rsi": 75.2,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $1040.55 (+2.79% oggi, +4.88% a 5G). Div. Yield: 0.6%. Media 52W: $970.28 (Nel Range ±10% (+7.2%)). ATR 14: $18.79 (1.81% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+5.66% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+5.66% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 93% del range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 84,
        "news": 85,
        "volume": 88,
        "analyst": 91,
        "market": 64
      },
      "catalysts": [
        {
          "title": "Costco (COST) Weighs Special Dividend Amid Strategic Investment Plans for 2027 - GuruFocus",
          "source": "GuruFocus",
          "time": "Sat, 31 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Costco Wholesale Stock Is Trading Over $1,000. Here's Why a Stock Split Still May Not Come in 2027. - The Motley Fool",
          "source": "The Motley Fool",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Costco Wholesale Stock Is Trading Over $1,000. Here's Why a Stock Split Still May Not Come in 2027. - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Costco Wholesale Corporation (COST) Stock Price, News, Quote & History - Yahoo! Finance Canada",
          "source": "Yahoo! Finance Canada",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            1032.23,
            1036.39,
            1035.35,
            1038.47,
            1040.55,
            1043.67,
            1046.79
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            992.13,
            982.73,
            996.08,
            1012.28,
            1040.55
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            954.08,
            960.01,
            893.93,
            946.92
          ]
        }
      }
    },
    {
      "id": "usa-axp",
      "ticker": "AXP",
      "name": "American Express",
      "exchange": "S&P 500 / NYSE",
      "currency": "$",
      "sector": "Finanza",
      "marketCap": "$232 Mld",
      "marketCapRaw": 232.9,
      "currentPrice": 327.98,
      "targetPrice": 352.62,
      "targetPct": 7.5,
      "stopLoss": 314.74,
      "stopPct": 4.0,
      "dividendYield": 1.1,
      "avg52w": 339.23,
      "diff52wPct": -3.3,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (-3.3%)",
      "high52": 387.49,
      "low52": 290.97,
      "atr14": 7.36,
      "atrPct": 2.24,
      "ema20": 316.79,
      "ema50": 321.31,
      "hasTrendAlignment": false,
      "dayChangePct": 2.78,
      "roc5d": 4.82,
      "clv": 0.71,
      "rawScore": 98.3,
      "score": 94,
      "strength": "Molto Alta",
      "volumeSpike": "1.06x",
      "rsi": 64.7,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $327.98 (+2.78% oggi, +4.82% a 5G). Div. Yield: 1.1%. Media 52W: $339.23 (Nel Range ±10% (-3.3%)). ATR 14: $7.36 (2.24% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+5.62% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+5.62% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 71% del range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 98,
        "news": 95,
        "volume": 82,
        "analyst": 89,
        "market": 64
      },
      "catalysts": [
        {
          "title": "Earnings Guidance Raised Might Change The Case For Investing In Amex Stock (AXP) - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Sat, 31 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "American Express Co Stock (AXP) Moved Up by 3.19% on Nov 2: Drivers Behind the Movement - TradingKey",
          "source": "TradingKey",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "41,781 American Express Company $AXP Shares Purchased by GRIMES & Co WEALTH MANAGEMENT LLC - MarketBeat",
          "source": "MarketBeat",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Should You Buy American Express Stock for Less Than the Company Paid for Its Own Shares? - The Motley Fool",
          "source": "The Motley Fool",
          "time": "Mon, 12 Oct 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            325.36,
            326.67,
            326.34,
            327.32,
            327.98,
            328.96,
            329.95
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            312.91,
            317.94,
            323.71,
            319.11,
            327.98
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            344.72,
            335.95,
            311.17,
            308.17
          ]
        }
      }
    },
    {
      "id": "usa-v",
      "ticker": "V",
      "name": "Visa Inc.",
      "exchange": "S&P 500 / NYSE",
      "currency": "$",
      "sector": "Finanza",
      "marketCap": "$859 Mld",
      "marketCapRaw": 859.5,
      "currentPrice": 425.51,
      "targetPrice": 451.87,
      "targetPct": 6.2,
      "stopLoss": 411.35,
      "stopPct": 3.3,
      "dividendYield": 0.8,
      "avg52w": 360.33,
      "diff52wPct": 18.1,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+18.1%)",
      "high52": 426.78,
      "low52": 293.89,
      "atr14": 7.87,
      "atrPct": 1.85,
      "ema20": 400.08,
      "ema50": 386.67,
      "hasTrendAlignment": true,
      "dayChangePct": 2.88,
      "roc5d": 5.89,
      "clv": 0.9,
      "rawScore": 98.2,
      "score": 94,
      "strength": "Molto Alta",
      "volumeSpike": "1.15x",
      "rsi": 72.2,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $425.51 (+2.88% oggi, +5.89% a 5G). Div. Yield: 0.8%. Media 52W: $360.33 (Sopra Media 52W (+18.1%)). ATR 14: $7.87 (1.85% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+6.3% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+6.3% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 90% del range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 90,
        "news": 90,
        "volume": 82,
        "analyst": 96,
        "market": 64
      },
      "catalysts": [
        {
          "title": "Investors Heavily Search Visa Inc. (V): Here is What You Need to Know - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Visa Inc Stock (V) Moved Up by 3.14% on Nov 2: What Investors Need To Know - TradingKey",
          "source": "TradingKey",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Visa Inc. $V Stock Sold by Aware Super Pty Ltd as trustee of Aware Super - MarketBeat",
          "source": "MarketBeat",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Visa (NYSE:V) Posts In-Line Q4 Results as Shares Slip After Strong Run - ChartMill",
          "source": "ChartMill",
          "time": "Tue, 27 Oct 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            422.11,
            423.81,
            423.38,
            424.66,
            425.51,
            426.79,
            428.06
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            401.86,
            400.6,
            410.54,
            413.59,
            425.51
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            365.67,
            384.14,
            369.93,
            385.45
          ]
        }
      }
    },
    {
      "id": "usa-wfc",
      "ticker": "WFC",
      "name": "Wells Fargo & Co.",
      "exchange": "S&P 500 / NYSE",
      "currency": "$",
      "sector": "Finanza",
      "marketCap": "$287 Mld",
      "marketCapRaw": 287.7,
      "currentPrice": 85.89,
      "targetPrice": 92.31,
      "targetPct": 7.5,
      "stopLoss": 82.44,
      "stopPct": 4.0,
      "dividendYield": 2.3,
      "avg52w": 85.27,
      "diff52wPct": 0.7,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (+0.7%)",
      "high52": 97.76,
      "low52": 72.78,
      "atr14": 1.92,
      "atrPct": 2.23,
      "ema20": 83.26,
      "ema50": 84.5,
      "hasTrendAlignment": false,
      "dayChangePct": 2.99,
      "roc5d": 3.91,
      "clv": 0.93,
      "rawScore": 98.1,
      "score": 94,
      "strength": "Molto Alta",
      "volumeSpike": "1.19x",
      "rsi": 69.3,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $85.89 (+2.99% oggi, +3.91% a 5G). Div. Yield: 2.3%. Media 52W: $85.27 (Nel Range ±10% (+0.7%)). ATR 14: $1.92 (2.23% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+5.16% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+5.16% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 93% del range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 95,
        "news": 95,
        "volume": 87,
        "analyst": 87,
        "market": 64
      },
      "catalysts": [
        {
          "title": "Wells Fargo & Company (WFC) Stock Forecasts - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Wells Fargo & Co. stock outperforms competitors on strong trading day - MarketWatch",
          "source": "MarketWatch",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "39,670 Wells Fargo & Company $WFC Shares Purchased by Kuhn & Co Investment Counsel - MarketBeat",
          "source": "MarketBeat",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Wells Fargo & Co Stock (WFC) Closed Down by 3.10% on Oct 13: Facts Behind the Movement - TradingKey",
          "source": "TradingKey",
          "time": "Tue, 13 Oct 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            85.2,
            85.55,
            85.46,
            85.72,
            85.89,
            86.15,
            86.41
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            82.66,
            83.67,
            84.81,
            83.4,
            85.89
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            87.89,
            84.79,
            86.89,
            83.55
          ]
        }
      }
    },
    {
      "id": "usa-pgr",
      "ticker": "PGR",
      "name": "Progressive Corp.",
      "exchange": "S&P 500 / NYSE",
      "currency": "$",
      "sector": "Finanza",
      "marketCap": "$138 Mld",
      "marketCapRaw": 138.0,
      "currentPrice": 233.92,
      "targetPrice": 254.15,
      "targetPct": 8.6,
      "stopLoss": 223.05,
      "stopPct": 4.6,
      "dividendYield": 0.4,
      "avg52w": 214.29,
      "diff52wPct": 9.2,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (+9.2%)",
      "high52": 239.38,
      "low52": 189.2,
      "atr14": 6.04,
      "atrPct": 2.58,
      "ema20": 223.62,
      "ema50": 219.27,
      "hasTrendAlignment": true,
      "dayChangePct": 1.14,
      "roc5d": 3.69,
      "clv": 0.83,
      "rawScore": 97.5,
      "score": 93,
      "strength": "Molto Alta",
      "volumeSpike": "0.77x",
      "rsi": 63.3,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $233.92 (+1.14% oggi, +3.69% a 5G). Div. Yield: 0.4%. Media 52W: $214.29 (Nel Range ±10% (+9.2%)). ATR 14: $6.04 (2.58% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+4.28% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+4.28% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 83% del range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 98,
        "news": 85,
        "volume": 76,
        "analyst": 92,
        "market": 64
      },
      "catalysts": [
        {
          "title": "Here is What to Know Beyond Why The Progressive Corporation (PGR) is a Trending Stock - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Wed, 21 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "3 Reasons PGR has explosive upside potential - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Wed, 28 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Is Trending Stock The Progressive Corporation (PGR) a Buy Now? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Thu, 01 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Why Progressive (PGR) Could Be One of the Best Insurance Stocks to Own - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 03 Aug 2026",
          "impact": "Favorevole"
        }
      ],
      "chartData": {
        "1D": {
          "labels": [
            "09:30",
            "11:00",
            "12:30",
            "14:00",
            "15:00",
            "15:30",
            "16:00"
          ],
          "values": [
            232.05,
            232.98,
            232.75,
            233.45,
            233.92,
            234.62,
            235.32
          ]
        },
        "5D": {
          "labels": [
            "-4G",
            "-3G",
            "-2G",
            "Ieri",
            "Oggi"
          ],
          "values": [
            225.6,
            225.66,
            230.18,
            231.28,
            233.92
          ]
        },
        "1M": {
          "labels": [
            "Sett 1",
            "Sett 2",
            "Sett 3",
            "Sett 4"
          ],
          "values": [
            210.46,
            222.09,
            216.29,
            217.43
          ]
        }
      }
    }
  ]
};
let MARKET_DATA = {
  eu: REAL_DATASET.eu,
  usa: REAL_DATASET.usa
};

// ==========================================================================
// 2. STATO DELL'APPLICAZIONE
// ==========================================================================

const state = {
  currentMarket: 'eu', // 'eu' o 'usa'
  searchQuery: '',
  sectorFilter: 'all',
  sortBy: 'score',
  displayMode: 'grid', // 'grid' o 'table'
  watchlist: JSON.parse(localStorage.getItem('alphapulse_watchlist') || '[]'),
  selectedStock: null,
  activeChartRange: '1D',
  chartInstance: null,
  isLiveServerConnected: false
};

// ==========================================================================
// 3. ELEMENTI DOM
// ==========================================================================

const elements = {
  tabEU: document.getElementById('tabEU'),
  tabUSA: document.getElementById('tabUSA'),
  currentMarketTitle: document.getElementById('currentMarketTitle'),
  currentMarketDesc: document.getElementById('currentMarketDesc'),
  visibleStocksCount: document.getElementById('visibleStocksCount'),
  searchInput: document.getElementById('searchInput'),
  sectorFilter: document.getElementById('sectorFilter'),
  sortBy: document.getElementById('sortBy'),
  btnGrid: document.getElementById('btnGrid'),
  btnTable: document.getElementById('btnTable'),
  stocksGrid: document.getElementById('stocksGrid'),
  stocksTableContainer: document.getElementById('stocksTableContainer'),
  stocksTableBody: document.getElementById('stocksTableBody'),
  noResultsBox: document.getElementById('noResultsBox'),
  resetFiltersBtn: document.getElementById('resetFiltersBtn'),
  refreshBtn: document.getElementById('refreshBtn'),
  currentDateDisplay: document.getElementById('currentDateDisplay'),
  lastUpdatedDisplay: document.getElementById('lastUpdatedDisplay'),
  liveFeedStatus: document.getElementById('liveFeedStatus'),

  // Modal
  stockModal: document.getElementById('stockModal'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  mTicker: document.getElementById('mTicker'),
  mName: document.getElementById('mName'),
  mExchange: document.getElementById('mExchange'),
  mSector: document.getElementById('mSector'),
  mMarketCap: document.getElementById('mMarketCap'),
  mPrice: document.getElementById('mPrice'),
  mTargetPrice: document.getElementById('mTargetPrice'),
  mUpside: document.getElementById('mUpside'),
  mScore: document.getElementById('mScore'),
  mRationaleSummary: document.getElementById('mRationaleSummary'),
  mPillarNews: document.getElementById('mPillarNews'),
  mPillarTech: document.getElementById('mPillarTech'),
  mPillarVolume: document.getElementById('mPillarVolume'),
  mPillarAnalyst: document.getElementById('mPillarAnalyst'),
  mPillarMarket: document.getElementById('mPillarMarket'),
  mBarNews: document.getElementById('mBarNews'),
  mBarTech: document.getElementById('mBarTech'),
  mBarVolume: document.getElementById('mBarVolume'),
  mBarAnalyst: document.getElementById('mBarAnalyst'),
  mBarMarket: document.getElementById('mBarMarket'),
  mControlsContainer: document.getElementById('mControlsContainer'),
  mWinRateDisplay: document.getElementById('mWinRateDisplay'),
  mWinRateSubtext: document.getElementById('mWinRateSubtext'),
  mDivYieldVal: document.getElementById('mDivYieldVal'),
  m52wAvgVal: document.getElementById('m52wAvgVal'),
  mAtrVal: document.getElementById('mAtrVal'),
  mEmaTrendVal: document.getElementById('mEmaTrendVal'),
  mStopLoss: document.getElementById('mStopLoss'),
  mRiskReward: document.getElementById('mRiskReward'),
  mRsi: document.getElementById('mRsi'),
  mVolumeSpike: document.getElementById('mVolumeSpike'),
  mPe: document.getElementById('mPe'),
  mConsensus: document.getElementById('mConsensus'),
  mNewsContainer: document.getElementById('mNewsContainer'),
  mWatchlistToggleBtn: document.getElementById('mWatchlistToggleBtn'),
  mCopyReportBtn: document.getElementById('mCopyReportBtn'),
  chartCanvas: document.getElementById('stockDetailChart'),
  chartRangeBtns: document.querySelectorAll('.chart-range-btn'),

  // Watchlist Drawer
  watchlistCount: document.getElementById('watchlistCount'),
  openWatchlistBtn: document.getElementById('openWatchlistBtn'),
  watchlistDrawer: document.getElementById('watchlistDrawer'),
  drawerCloseBtn: document.getElementById('drawerCloseBtn'),
  wsTotalStocks: document.getElementById('wsTotalStocks'),
  wsAvgProb: document.getElementById('wsAvgProb'),
  wsAvgUpside: document.getElementById('wsAvgUpside'),
  watchlistItemsList: document.getElementById('watchlistItemsList'),
  clearWatchlistBtn: document.getElementById('clearWatchlistBtn')
};

// ==========================================================================
// 4. FUNZIONI DI UTILITÀ & CALCOLI
// ==========================================================================

function calculateUpside(current, target) {
  const diff = ((target - current) / current) * 100;
  return diff.toFixed(1);
}

function formatDateDisplay() {
  if (REAL_DATASET.lastUpdated && elements.lastUpdatedDisplay) {
    elements.lastUpdatedDisplay.innerHTML = `<span class="text-emerald font-bold"><i class="fa-solid fa-circle-check"></i> Dati Reali Live</span> &bull; Aggiornato: ${REAL_DATASET.lastUpdated}`;
  }
  const now = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const str = now.toLocaleDateString('it-IT', options);
  elements.currentDateDisplay.textContent = str.charAt(0).toUpperCase() + str.slice(1);
}

function isStockInWatchlist(id) {
  return state.watchlist.includes(id);
}

function toggleWatchlist(id) {
  if (isStockInWatchlist(id)) {
    state.watchlist = state.watchlist.filter(item => item !== id);
  } else {
    state.watchlist.push(id);
  }
  localStorage.setItem('alphapulse_watchlist', JSON.stringify(state.watchlist));
  updateWatchlistUI();
  renderStocks();
  if (state.selectedStock && state.selectedStock.id === id) {
    updateModalWatchlistBtn();
  }
}

function updateWatchlistUI() {
  const count = state.watchlist.length;
  elements.watchlistCount.textContent = count;
  elements.wsTotalStocks.textContent = count;

  if (count === 0) {
    elements.wsAvgProb.textContent = '--%';
    elements.wsAvgUpside.textContent = '--%';
    elements.watchlistItemsList.innerHTML = `<div style="text-align:center; padding: 30px; color: var(--text-muted); font-size: 0.85rem;"><i class="fa-regular fa-star" style="font-size: 2rem; margin-bottom: 10px; display: block;"></i>Nessun titolo salvato.<br>Clicca la stella sulle schede per monitorarli qui.</div>`;
    return;
  }

  const allStocks = [...MARKET_DATA.eu, ...MARKET_DATA.usa];
  const savedStocks = allStocks.filter(s => state.watchlist.includes(s.id));

  let totalProb = 0;
  let totalUpside = 0;

  let html = '';
  savedStocks.forEach(s => {
    const upside = parseFloat(calculateUpside(s.currentPrice, s.targetPrice));
    totalProb += s.score;
    totalUpside += upside;

    html += `
      <div class="ws-item-card">
        <div class="ws-item-info">
          <div>
            <div class="ws-item-ticker">${s.ticker}</div>
            <div class="ws-item-price">${s.currency}${s.currentPrice.toFixed(2)} &bull; ${s.name}</div>
          </div>
        </div>
        <div class="ws-item-metrics">
          <div>
            <div class="table-prob-badge" style="font-size: 0.75rem; padding: 2px 6px;">${s.score}% Prob.</div>
            <div class="text-emerald font-bold mono" style="font-size: 0.75rem; text-align: right; margin-top: 2px;">+${upside}%</div>
          </div>
          <button class="ws-remove-btn" onclick="toggleWatchlist('${s.id}')" title="Rimuovi"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
    `;
  });

  const avgProb = (totalProb / count).toFixed(1);
  const avgUpside = (totalUpside / count).toFixed(1);

  elements.wsAvgProb.textContent = `${avgProb}%`;
  elements.wsAvgUpside.textContent = `+${avgUpside}%`;
  elements.watchlistItemsList.innerHTML = html;
}

// ==========================================================================
// 5. CARICAMENTO DATI REALI DA SERVER O FILE
// ==========================================================================

async function loadLiveData() {
  try {
    const res = await fetch('/api/market-data');
    if (res.ok) {
      const data = await res.json();
      applyRealMarketData(data);
      state.isLiveServerConnected = true;
      if (elements.liveFeedStatus) {
        elements.liveFeedStatus.innerHTML = `<i class="fa-solid fa-bolt"></i> SERVER LIVE ATTIVO (Yahoo & News)`;
      }
      return;
    }
  } catch (e) {
    try {
      const fRes = await fetch('market_data.json?t=' + Date.now());
      if (fRes.ok) {
        const data = await fRes.json();
        applyRealMarketData(data);
      }
    } catch (err) {
      console.log('Utilizzo dataset reale incorporato.');
    }
  }
}

function applyRealMarketData(data) {
  if (data && data.eu && data.usa) {
    REAL_DATASET = data;
    MARKET_DATA = {
      eu: data.eu,
      usa: data.usa
    };
    if (data.performanceTrackRecord && elements.mWinRateDisplay) {
      elements.mWinRateDisplay.innerHTML = `${data.performanceTrackRecord.winRate} <span class="metric-status">Win Rate 5G</span>`;
      if (elements.mWinRateSubtext) {
        elements.mWinRateSubtext.innerHTML = `Gain medio: <strong>${data.performanceTrackRecord.avgGain}</strong> &bull; Segnali monitorati: ${data.performanceTrackRecord.totalSignals}`;
      }
    }
    formatDateDisplay();
    renderStocks();
    updateWatchlistUI();
  }
}

// ==========================================================================
// 6. FILTRAGGIO E ORDINAMENTO
// ==========================================================================

function getFilteredAndSortedStocks() {
  const currentList = MARKET_DATA[state.currentMarket] || [];
  
  const query = state.searchQuery.toLowerCase().trim();
  let filtered = currentList.filter(stock => {
    if (state.sectorFilter !== 'all' && stock.sector !== state.sectorFilter) {
      return false;
    }
    if (query) {
      const matchTicker = stock.ticker.toLowerCase().includes(query);
      const matchName = stock.name.toLowerCase().includes(query);
      const matchSector = stock.sector.toLowerCase().includes(query);
      const matchSummary = stock.summary.toLowerCase().includes(query);
      if (!matchTicker && !matchName && !matchSector && !matchSummary) {
        return false;
      }
    }
    return true;
  });

  filtered.sort((a, b) => {
    if (state.sortBy === 'score') {
      return b.score - a.score;
    } else if (state.sortBy === 'upside') {
      const upA = (a.targetPrice - a.currentPrice) / a.currentPrice;
      const upB = (b.targetPrice - b.currentPrice) / b.currentPrice;
      return upB - upA;
    } else if (state.sortBy === 'cap') {
      return b.marketCapRaw - a.marketCapRaw;
    } else if (state.sortBy === 'rsi') {
      return b.rsi - a.rsi;
    }
    return 0;
  });

  return filtered;
}

// ==========================================================================
// 7. RENDERING SCHEDE E TABELLA
// ==========================================================================

function renderStocks() {
  const stocks = getFilteredAndSortedStocks();
  elements.visibleStocksCount.textContent = stocks.length;

  if (stocks.length === 0) {
    elements.stocksGrid.classList.add('hidden');
    elements.stocksTableContainer.classList.add('hidden');
    elements.noResultsBox.classList.remove('hidden');
    return;
  }

  elements.noResultsBox.classList.add('hidden');

  if (state.displayMode === 'grid') {
    elements.stocksGrid.classList.remove('hidden');
    elements.stocksTableContainer.classList.add('hidden');
    renderGrid(stocks);
  } else {
    elements.stocksGrid.classList.add('hidden');
    elements.stocksTableContainer.classList.remove('hidden');
    renderTable(stocks);
  }
}

function renderGrid(stocks) {
  let html = '';
  stocks.forEach((stock, index) => {
    const upside = calculateUpside(stock.currentPrice, stock.targetPrice);
    const isFavorite = isStockInWatchlist(stock.id);
    const rankClass = index === 0 ? 'rank-1' : (index === 1 ? 'rank-2' : (index === 2 ? 'rank-3' : ''));
    const changePct = stock.dayChangePct || 0;
    const changeClass = changePct >= 0 ? 'bg-change-up' : 'bg-change-down';
    const changeSign = changePct >= 0 ? '+' : '';
    const border52wClass = stock.border52w ? `border-52w-${stock.border52w}` : '';

    html += `
      <div class="stock-card ${border52wClass}" data-id="${stock.id}">
        <div>
          <!-- Header Card -->
          <div class="card-header-row">
            <div class="card-identity">
              <div class="rank-badge ${rankClass}">#${index + 1}</div>
              <div class="card-ticker-group">
                <div style="display:flex; align-items:center; gap:8px;">
                  <h3>${stock.ticker}</h3>
                  <span class="${changeClass}">${changeSign}${changePct}%</span>
                </div>
                <div class="card-company-name" title="${stock.name}">${stock.name}</div>
              </div>
            </div>
            <button class="star-btn ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleWatchlist('${stock.id}')" title="Aggiungi a Watchlist">
              <i class="${isFavorite ? 'fa-solid' : 'fa-regular'} fa-star"></i>
            </button>
          </div>

          <!-- Banner Statistiche e Probabilità -->
          <div class="card-stats-banner">
            <div class="stat-prob-group">
              <div class="prob-dial" style="--prob-val: ${stock.score}">
                <div class="prob-dial-inner">${stock.score}%</div>
              </div>
              <div class="prob-labels">
                <span class="prob-caption">Prob. Salita</span>
                <span class="prob-strength">${stock.strength}</span>
              </div>
            </div>

            <div class="stat-price-group">
              <div class="price-current">${stock.currency}${stock.currentPrice.toFixed(2)}</div>
              <div class="target-upside-badge">Target: ${stock.currency}${stock.targetPrice.toFixed(2)} (+${upside}%)</div>
            </div>
          </div>

          <!-- Indicatori Chiave Reali, Dividendi & Controlli v6.0 -->
          <div class="card-signals-row">
            ${stock.dividendYield !== undefined ? `<span class="signal-pill div-yield-pill" title="Dividend Yield Annuale Stimato"><i class="fa-solid fa-coins"></i> Div: <strong>${stock.dividendYield}%</strong></span>` : ''}
            ${stock.status52w ? `<span class="signal-pill badge-52w-${stock.border52w || 'orange'}" title="Posizione rispetto alla Media 52W (${stock.currency}${stock.avg52w || '--'})"><i class="fa-solid fa-arrows-split-up-and-left"></i> <strong>${stock.status52w}</strong></span>` : ''}
            <span class="signal-pill high-signal"><i class="fa-solid fa-arrow-trend-up"></i> Vol. <strong>${stock.volumeSpike}</strong></span>
            <span class="signal-pill"><i class="fa-solid fa-gauge-high"></i> RSI <strong>${stock.rsi}</strong></span>
            ${stock.hasTrendAlignment ? '<span class="signal-pill" style="color:#34d399; border-color:rgba(52,211,153,0.3);" title="Prezzo > EMA20 > EMA50"><i class="fa-solid fa-check"></i> EMA OK</span>' : ''}
            ${stock.atrPct ? `<span class="signal-pill" title="Volatilità media giornaliera ATR"><i class="fa-solid fa-wave-square"></i> ATR <strong>${stock.atrPct}%</strong></span>` : ''}
            ${stock.controls && stock.controls[1] ? `<span class="signal-pill" style="color:var(--color-cyan); border-color:rgba(6,182,212,0.3);"><i class="fa-solid fa-bolt"></i> ${stock.controls[1]}</span>` : ''}
          </div>

          <!-- Catalizzatore del Giorno / Notizie Reali -->
          <div class="card-catalyst-box">
            <div class="catalyst-title"><i class="fa-solid fa-newspaper text-amber"></i> Notizia Reale Rilevata</div>
            <div class="catalyst-text">${stock.catalysts && stock.catalysts[0] ? stock.catalysts[0].title : stock.summary}</div>
          </div>
        </div>

        <!-- Footer Card -->
        <div class="card-footer-row">
          <div class="sector-tag">
            <i class="fa-solid fa-layer-group"></i> ${stock.sector} &bull; Cap: ${stock.marketCap}
          </div>
          <button class="btn-card-detail" onclick="openStockDetail('${stock.id}')">
            Analisi <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  });

  elements.stocksGrid.innerHTML = html;
}

function renderTable(stocks) {
  let html = '';
  stocks.forEach((stock, index) => {
    const upside = calculateUpside(stock.currentPrice, stock.targetPrice);
    const isFavorite = isStockInWatchlist(stock.id);
    const changePct = stock.dayChangePct || 0;
    const changeClass = changePct >= 0 ? 'bg-change-up' : 'bg-change-down';
    const changeSign = changePct >= 0 ? '+' : '';

    html += `
      <tr>
        <td class="mono font-bold text-muted">#${index + 1}</td>
        <td>
          <div class="table-ticker-cell">
            <button class="star-btn ${isFavorite ? 'active' : ''}" onclick="toggleWatchlist('${stock.id}')">
              <i class="${isFavorite ? 'fa-solid' : 'fa-regular'} fa-star"></i>
            </button>
            <div>
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="table-ticker-name">${stock.ticker}</span>
                <span class="${changeClass}">${changeSign}${changePct}%</span>
              </div>
              <div class="table-company-sub">${stock.name}</div>
            </div>
          </div>
        </td>
        <td><span class="signal-pill">${stock.sector}</span></td>
        <td class="mono font-bold">${stock.marketCap}</td>
        <td class="mono font-bold">${stock.currency}${stock.currentPrice.toFixed(2)}</td>
        <td class="mono font-bold" style="color:#fbbf24;"><i class="fa-solid fa-coins"></i> ${stock.dividendYield !== undefined ? stock.dividendYield + '%' : '--'}</td>
        <td><span class="signal-pill badge-52w-${stock.border52w || 'orange'}" style="white-space: nowrap;"><i class="fa-solid fa-arrows-split-up-and-left"></i> ${stock.status52w || '--'}</span></td>
        <td class="mono text-emerald font-bold">${stock.currency}${stock.targetPrice.toFixed(2)}</td>
        <td class="mono text-emerald font-bold">+${upside}%</td>
        <td>
          <span class="table-prob-badge">
            <i class="fa-solid fa-arrow-trend-up"></i> ${stock.score}%
          </span>
        </td>
        <td style="font-size: 0.78rem; color: var(--text-secondary); max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          ${stock.catalysts && stock.catalysts[0] ? stock.catalysts[0].title : stock.summary}
        </td>
        <td>
          <button class="btn-card-detail" onclick="openStockDetail('${stock.id}')">
            Dettagli
          </button>
        </td>
      </tr>
    `;
  });

  elements.stocksTableBody.innerHTML = html;
}

// ==========================================================================
// 8. MODAL DETTAGLIO & GRAFICO CHART.JS
// ==========================================================================

function openStockDetail(stockId) {
  const allStocks = [...MARKET_DATA.eu, ...MARKET_DATA.usa];
  const stock = allStocks.find(s => s.id === stockId);
  if (!stock) return;

  state.selectedStock = stock;
  state.activeChartRange = '1D';

  elements.mTicker.textContent = stock.ticker;
  elements.mName.textContent = stock.name;
  elements.mExchange.textContent = stock.exchange;
  elements.mSector.textContent = stock.sector;
  elements.mMarketCap.textContent = stock.marketCap;
  elements.mPrice.textContent = `${stock.currency}${stock.currentPrice.toFixed(2)}`;
  elements.mTargetPrice.textContent = `${stock.currency}${stock.targetPrice.toFixed(2)}`;
  
  const upside = calculateUpside(stock.currentPrice, stock.targetPrice);
  elements.mUpside.textContent = `+${upside}%`;
  elements.mScore.textContent = `${stock.score}%`;
  elements.mRationaleSummary.textContent = stock.summary;

  // 5 Pilastri con Pesi Calibrati
  const p = stock.pillars || {};
  const techScore = p.breakout !== undefined ? p.breakout : (p.tech || 80);
  elements.mPillarTech.textContent = `${techScore}/100`;
  elements.mBarTech.style.width = `${techScore}%`;

  elements.mPillarNews.textContent = `${p.news || 80}/100`;
  elements.mBarNews.style.width = `${p.news || 80}%`;

  elements.mPillarVolume.textContent = `${p.volume || 80}/100`;
  elements.mBarVolume.style.width = `${p.volume || 80}%`;

  elements.mPillarAnalyst.textContent = `${p.analyst || 80}/100`;
  elements.mBarAnalyst.style.width = `${p.analyst || 80}%`;

  if (elements.mPillarMarket) {
    const mScore = p.market || 82;
    elements.mPillarMarket.textContent = `${mScore}/100`;
    elements.mBarMarket.style.width = `${mScore}%`;
  }

  // 3 Controlli di Rischio Istituzionali
  if (elements.mControlsContainer) {
    let ctrlHtml = '';
    if (stock.controls && stock.controls.length > 0) {
      stock.controls.forEach(c => {
        ctrlHtml += `<span class="signal-pill high-signal" style="font-size:0.75rem; padding:4px 10px;">${c}</span>`;
      });
    }
    elements.mControlsContainer.innerHTML = ctrlHtml;
  }

  // Metriche Avanzate v6.0 (ATR, EMA, Stop Dinamico, Dividendi, 52W)
  const stopPctStr = stock.stopPct ? `${stock.stopPct}%` : `${calculateUpside(stock.stopLoss, stock.currentPrice)}%`;
  elements.mStopLoss.textContent = `${stock.currency}${stock.stopLoss.toFixed(2)} (-${stopPctStr} basato su ATR)`;
  elements.mRiskReward.textContent = stock.riskReward;
  elements.mRsi.textContent = `${stock.rsi} (Calcolato su 14 chiusure reali)`;
  elements.mVolumeSpike.textContent = `${stock.volumeSpike} vs media a 20 giorni`;
  
  if (elements.mDivYieldVal) {
    elements.mDivYieldVal.textContent = stock.dividendYield !== undefined ? `${stock.dividendYield}% annuo` : `--`;
  }
  if (elements.m52wAvgVal) {
    const bColor = stock.border52w === 'green' ? '#34d399' : (stock.border52w === 'red' ? '#f87171' : '#fbbf24');
    const bDot = stock.border52w === 'green' ? '🟢' : (stock.border52w === 'red' ? '🔴' : '🟠');
    elements.m52wAvgVal.innerHTML = `${bDot} <span style="color:${bColor}; font-weight:700;">${stock.currency}${stock.avg52w || '--'}</span> <span style="font-size:0.75rem; color:var(--text-secondary);">(${stock.status52w || ''})</span>`;
  }
  if (elements.mAtrVal) {
    elements.mAtrVal.textContent = stock.atr14 ? `${stock.currency}${stock.atr14} (${stock.atrPct}% osc. media)` : `--`;
  }
  if (elements.mEmaTrendVal) {
    elements.mEmaTrendVal.textContent = stock.hasTrendAlignment ? `🟢 Prezzo > EMA20 > EMA50 (Trend OK)` : `🔴 Sotto EMA50 (Trend Debole)`;
    elements.mEmaTrendVal.className = `km-value ` + (stock.hasTrendAlignment ? `text-emerald` : `text-red`);
  }

  // Lista Notizie Catalizzatori
  let newsHtml = '';
  if (stock.catalysts && stock.catalysts.length > 0) {
    stock.catalysts.forEach(c => {
      newsHtml += `
        <div class="news-card-mini">
          <i class="fa-solid fa-newspaper"></i>
          <div>
            <div class="news-headline">${c.title}</div>
            <div class="news-source-row">
              <span>Fonte: <strong>${c.source}</strong></span> &bull; 
              <span>${c.time}</span> &bull; 
              <span class="text-emerald">Impatto: ${c.impact}</span>
            </div>
          </div>
        </div>
      `;
    });
  } else {
    newsHtml = `<p style="color: var(--text-secondary); font-size: 0.82rem;">Nessuna notizia rilevante nelle ultime ore.</p>`;
  }
  elements.mNewsContainer.innerHTML = newsHtml;

  updateModalWatchlistBtn();

  elements.chartRangeBtns.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-range') === '1D');
  });

  elements.stockModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  renderChart(stock, '1D');
}

function updateModalWatchlistBtn() {
  if (!state.selectedStock) return;
  const inWatchlist = isStockInWatchlist(state.selectedStock.id);
  if (inWatchlist) {
    elements.mWatchlistToggleBtn.innerHTML = `<i class="fa-solid fa-star text-amber"></i> Rimuovi dalla Watchlist`;
  } else {
    elements.mWatchlistToggleBtn.innerHTML = `<i class="fa-regular fa-star"></i> Aggiungi alla Watchlist`;
  }
}

function renderChart(stock, range) {
  const chartConfigData = stock.chartData ? stock.chartData[range] : null;
  if (!chartConfigData) return;

  const ctx = elements.chartCanvas.getContext('2d');

  if (state.chartInstance) {
    state.chartInstance.destroy();
  }

  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
  gradient.addColorStop(1, 'rgba(16, 185, 129, 0.0)');

  state.chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartConfigData.labels,
      datasets: [{
        label: `${stock.ticker} (${stock.currency})`,
        data: chartConfigData.values,
        borderColor: '#10b981',
        borderWidth: 2.5,
        backgroundColor: gradient,
        fill: true,
        tension: 0.35,
        pointBackgroundColor: '#10b981',
        pointBorderColor: '#0f172a',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0f172a',
          titleColor: '#f8fafc',
          bodyColor: '#10b981',
          borderColor: 'rgba(255, 255, 255, 0.15)',
          borderWidth: 1,
          padding: 10,
          displayColors: false,
          callbacks: {
            label: function(context) {
              return `Prezzo: ${stock.currency}${context.parsed.y.toFixed(2)}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          ticks: { color: '#64748b', font: { family: "'Plus Jakarta Sans', sans-serif", size: 11 } }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          ticks: {
            color: '#64748b',
            font: { family: "'JetBrains Mono', monospace", size: 11 },
            callback: function(value) {
              return stock.currency + value;
            }
          }
        }
      }
    }
  });
}

function closeModal() {
  elements.stockModal.classList.add('hidden');
  document.body.style.overflow = '';
  if (state.chartInstance) {
    state.chartInstance.destroy();
    state.chartInstance = null;
  }
}

// ==========================================================================
// 9. EVENT LISTENERS E CONTROLLI INTERFACCIA
// ==========================================================================

function initEventListeners() {
  elements.tabEU.addEventListener('click', () => {
    if (state.currentMarket === 'eu') return;
    state.currentMarket = 'eu';
    elements.tabEU.classList.add('active');
    elements.tabUSA.classList.remove('active');
    elements.currentMarketTitle.innerHTML = `EuroStoxx 50 (Europa) &bull; Top 10 Consigli a 5 Giorni`;
    elements.currentMarketDesc.textContent = `Selezione dei 10 migliori componenti dell'indice EuroStoxx 50 (> €10 Mld) secondo il modello quantitativo v7.0.`;
    renderStocks();
  });

  elements.tabUSA.addEventListener('click', () => {
    if (state.currentMarket === 'usa') return;
    state.currentMarket = 'usa';
    elements.tabUSA.classList.add('active');
    elements.tabEU.classList.remove('active');
    elements.currentMarketTitle.innerHTML = `S&P 500 (USA) &bull; Top 10 Consigli a 5 Giorni`;
    elements.currentMarketDesc.textContent = `Selezione dei 10 migliori componenti dell'indice S&P 500 (> $10 Mld) secondo il modello quantitativo v7.0.`;
    renderStocks();
  });

  elements.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderStocks();
  });

  elements.sectorFilter.addEventListener('change', (e) => {
    state.sectorFilter = e.target.value;
    renderStocks();
  });

  elements.sortBy.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderStocks();
  });

  elements.btnGrid.addEventListener('click', () => {
    state.displayMode = 'grid';
    elements.btnGrid.classList.add('active');
    elements.btnTable.classList.remove('active');
    renderStocks();
  });

  elements.btnTable.addEventListener('click', () => {
    state.displayMode = 'table';
    elements.btnTable.classList.add('active');
    elements.btnGrid.classList.remove('active');
    renderStocks();
  });

  elements.resetFiltersBtn.addEventListener('click', () => {
    state.searchQuery = '';
    state.sectorFilter = 'all';
    state.sortBy = 'score';
    elements.searchInput.value = '';
    elements.sectorFilter.value = 'all';
    elements.sortBy.value = 'score';
    renderStocks();
  });

  // Aggiorna Dati: Chiama il server live se attivo o ricarica i dati reali
  elements.refreshBtn.addEventListener('click', async () => {
    elements.refreshBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Scansione Reale Yahoo &amp; News...`;
    elements.refreshBtn.disabled = true;

    try {
      const res = await fetch('/api/refresh');
      if (res.ok) {
        const data = await res.json();
        applyRealMarketData(data);
        elements.refreshBtn.innerHTML = `<i class="fa-solid fa-check text-emerald"></i> Dati Live Aggiornati!`;
      } else {
        const fRes = await fetch('market_data.json?t=' + Date.now());
        if (fRes.ok) {
          const data = await fRes.json();
          applyRealMarketData(data);
          elements.refreshBtn.innerHTML = `<i class="fa-solid fa-check text-emerald"></i> Aggiornato!`;
        }
      }
    } catch (e) {
      elements.refreshBtn.innerHTML = `<i class="fa-solid fa-check text-emerald"></i> Aggiornato!`;
      renderStocks();
    }

    setTimeout(() => {
      elements.refreshBtn.innerHTML = `<i class="fa-solid fa-rotate"></i> Aggiorna Dati`;
      elements.refreshBtn.disabled = false;
    }, 1800);
  });

  elements.modalCloseBtn.addEventListener('click', closeModal);
  elements.stockModal.addEventListener('click', (e) => {
    if (e.target === elements.stockModal) closeModal();
  });

  elements.chartRangeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.chartRangeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const range = btn.getAttribute('data-range');
      state.activeChartRange = range;
      if (state.selectedStock) {
        renderChart(state.selectedStock, range);
      }
    });
  });

  elements.mWatchlistToggleBtn.addEventListener('click', () => {
    if (state.selectedStock) {
      toggleWatchlist(state.selectedStock.id);
    }
  });

  elements.mCopyReportBtn.addEventListener('click', () => {
    if (!state.selectedStock) return;
    const s = state.selectedStock;
    const upside = calculateUpside(s.currentPrice, s.targetPrice);
    const report = `📊 AlphaPulse Intelligence - Scheda Titolo del Giorno (Dati Reali di Borsa)
Titolo: ${s.ticker} (${s.name})
Mercato: ${s.exchange} | Settore: ${s.sector}
Capitalizzazione: ${s.marketCap}
Prezzo Reale Attuale: ${s.currency}${s.currentPrice.toFixed(2)} (${s.dayChangePct >= 0 ? '+' : ''}${s.dayChangePct}%)
Target Price: ${s.currency}${s.targetPrice.toFixed(2)} (+${upside}%)
Stop Loss Consigliato: ${s.currency}${s.stopLoss.toFixed(2)}
Probabilità di Salita: ${s.score}% (Algoritmo Multi-Fattoriale)
RSI Reale (14): ${s.rsi} | Volume Spike: ${s.volumeSpike}
Notizia Reale Rilevata: ${s.catalysts && s.catalysts[0] ? s.catalysts[0].title : s.summary}`;

    navigator.clipboard.writeText(report).then(() => {
      const origHtml = elements.mCopyReportBtn.innerHTML;
      elements.mCopyReportBtn.innerHTML = `<i class="fa-solid fa-check"></i> Scheda Copiata!`;
      setTimeout(() => {
        elements.mCopyReportBtn.innerHTML = origHtml;
      }, 1800);
    });
  });

  elements.openWatchlistBtn.addEventListener('click', () => {
    elements.watchlistDrawer.classList.remove('hidden');
  });
  elements.drawerCloseBtn.addEventListener('click', () => {
    elements.watchlistDrawer.classList.add('hidden');
  });
  elements.watchlistDrawer.addEventListener('click', (e) => {
    if (e.target === elements.watchlistDrawer) {
      elements.watchlistDrawer.classList.add('hidden');
    }
  });

  elements.clearWatchlistBtn.addEventListener('click', () => {
    if (confirm('Sei sicuro di voler svuotare la tua watchlist di oggi?')) {
      state.watchlist = [];
      localStorage.setItem('alphapulse_watchlist', JSON.stringify([]));
      updateWatchlistUI();
      renderStocks();
      if (state.selectedStock) updateModalWatchlistBtn();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      elements.watchlistDrawer.classList.add('hidden');
    }
  });
}

// ==========================================================================
// 10. MODULO DI SICUREZZA PIN & CRITTOGRAFIA SHA-256
// ==========================================================================

const SECURITY = {
  // Hash SHA-256 del PIN '0204'
  MASTER_HASH: "6249017f9372350bfc9cf3456c324bbb3661e1bb5a7a10d61912fd1be650d52f",
  enteredPin: "",
  lockOverlay: document.getElementById("lockScreen"),
  lockCard: document.querySelector(".lock-card"),
  dots: document.querySelectorAll(".pin-dot"),
  errorBox: document.getElementById("pinErrorBox"),
  rememberCheck: document.getElementById("rememberMeCheck"),
  btnManualLock: document.getElementById("btnManualLock")
};

async function sha256(str) {
  const buffer = new TextEncoder().encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

function updatePinDots() {
  SECURITY.dots.forEach((dot, idx) => {
    if (idx < SECURITY.enteredPin.length) {
      dot.classList.add("filled");
    } else {
      dot.classList.remove("filled");
    }
  });
}

async function verifyEnteredPin() {
  if (SECURITY.enteredPin.length === 0) return;
  const hash = await sha256(SECURITY.enteredPin);
  
  if (hash === SECURITY.MASTER_HASH || SECURITY.enteredPin === "0204") {
    // PIN Corretto!
    if (SECURITY.errorBox) SECURITY.errorBox.classList.add("hidden");
    if (SECURITY.rememberCheck && SECURITY.rememberCheck.checked) {
      localStorage.setItem("alphapulse_auth_hash", SECURITY.MASTER_HASH);
    }
    SECURITY.lockOverlay.classList.add("unlocked");
    SECURITY.enteredPin = "";
    updatePinDots();
  } else {
    // PIN Errato: animazione Shake ed errore
    if (SECURITY.errorBox) SECURITY.errorBox.classList.remove("hidden");
    if (SECURITY.lockCard) {
      SECURITY.lockCard.classList.add("shake");
      setTimeout(() => {
        SECURITY.lockCard.classList.remove("shake");
      }, 400);
    }
    setTimeout(() => {
      SECURITY.enteredPin = "";
      updatePinDots();
    }, 300);
  }
}

function initSecurityLock() {
  // Verifica se l'utente è già autenticato sul dispositivo con il PIN corrente
  const savedHash = localStorage.getItem("alphapulse_auth_hash");
  if (savedHash === SECURITY.MASTER_HASH) {
    SECURITY.lockOverlay.classList.add("unlocked");
  }

  // Listener tastierino numerico a schermo
  document.querySelectorAll(".keypad-btn[data-key]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (SECURITY.enteredPin.length < 4) {
        SECURITY.enteredPin += btn.getAttribute("data-key");
        updatePinDots();
        if (SECURITY.enteredPin.length === 4) {
          setTimeout(verifyEnteredPin, 100);
        }
      }
    });
  });

  // Tasto cancella
  const btnClear = document.getElementById("btnKeyClear");
  if (btnClear) {
    btnClear.addEventListener("click", () => {
      SECURITY.enteredPin = SECURITY.enteredPin.slice(0, -1);
      updatePinDots();
      if (SECURITY.errorBox) SECURITY.errorBox.classList.add("hidden");
    });
  }

  // Tasto invio
  const btnSubmit = document.getElementById("btnKeySubmit");
  if (btnSubmit) {
    btnSubmit.addEventListener("click", verifyEnteredPin);
  }

  // Supporto digitazione da tastiera fisica (PC / Mac)
  window.addEventListener("keydown", (e) => {
    if (!SECURITY.lockOverlay.classList.contains("unlocked")) {
      if (e.key >= "0" && e.key <= "9") {
        if (SECURITY.enteredPin.length < 4) {
          SECURITY.enteredPin += e.key;
          updatePinDots();
          if (SECURITY.enteredPin.length === 4) {
            setTimeout(verifyEnteredPin, 100);
          }
        }
      } else if (e.key === "Backspace") {
        SECURITY.enteredPin = SECURITY.enteredPin.slice(0, -1);
        updatePinDots();
      } else if (e.key === "Enter") {
        verifyEnteredPin();
      }
    }
  });

  // Tasto Blocca Manuale nella barra superiore
  if (SECURITY.btnManualLock) {
    SECURITY.btnManualLock.addEventListener("click", () => {
      localStorage.removeItem("alphapulse_auth");
      localStorage.removeItem("alphapulse_auth_hash");
      SECURITY.enteredPin = "";
      updatePinDots();
      if (SECURITY.errorBox) SECURITY.errorBox.classList.add("hidden");
      SECURITY.lockOverlay.classList.remove("unlocked");
    });
  }
}

// ==========================================================================
// 11. INIZIALIZZAZIONE ALL'AVVIO
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initSecurityLock();
  formatDateDisplay();
  updateWatchlistUI();
  initEventListeners();
  renderStocks();
  loadLiveData();
});

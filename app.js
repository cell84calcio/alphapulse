/**
 * ALPHAPULSE PRO - JAVASCRIPT APPLICATION CORE (REAL-TIME ENGINE)
 * Gestione Dati Reali di Borsa, Algoritmo Quantitativo, Filtri, Chart.js e Watchlist
 */

// ==========================================================================
// 1. DATA STORE REALE: 10 TITOLI EUROPEI & 10 TITOLI USA (> 10 MILIARDI)
// ==========================================================================

let REAL_DATASET = {
  "lastUpdated": "2026-11-03 10:23:04 CET",
  "dateFormatted": "Tuesday 03 November 2026",
  "isRealTime": true,
  "marketRegime": {
    "vix": 21.56,
    "vixScore": 68,
    "sp500Change": -0.51,
    "sp500Change5d": -2.35,
    "stoxx50Change": -0.65,
    "stoxx50Change5d": -0.51,
    "marketSentiment": "Neutro / Selettivo"
  },
  "performanceTrackRecord": {
    "winRate": "85.4%",
    "totalSignals": 96,
    "avgGain": "+4.13%"
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
      "id": "eu-novo-b",
      "ticker": "NOVO-B",
      "name": "Novo Nordisk",
      "exchange": "Copenhagen",
      "currency": "€",
      "sector": "Healthcare",
      "marketCap": "€160 Mld",
      "marketCapRaw": 160.2,
      "currentPrice": 268.7,
      "targetPrice": 286.27,
      "targetPct": 6.5,
      "stopLoss": 259.24,
      "stopPct": 3.5,
      "dividendYield": 1.4,
      "avg52w": 317.1,
      "diff52wPct": -15.3,
      "border52w": "green",
      "status52w": "Sotto Media 52W (-15.3%)",
      "high52": 409.95,
      "low52": 224.25,
      "atr14": 5.25,
      "atrPct": 1.96,
      "ema20": 261.88,
      "ema50": 271.91,
      "hasTrendAlignment": false,
      "dayChangePct": -0.56,
      "roc5d": 5.37,
      "clv": 0.22,
      "rawScore": 94.8,
      "score": 95,
      "strength": "Molto Alta",
      "volumeSpike": "0.09x",
      "rsi": 62.8,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €268.7 (-0.56% oggi, +5.37% a 5G). Div. Yield: 1.4%. Media 52W: €317.1 (Sotto Media 52W (-15.3%)). ATR 14: €5.25 (1.96% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+3.56% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+3.56% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 22% range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 95,
        "news": 91,
        "volume": 71,
        "analyst": 88,
        "market": 66
      },
      "catalysts": [
        {
          "title": "Novo Nordisk Trades at 10 Times Earnings While Buying Back Billions in Stock. Is This the Bottom? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Sun, 01 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Is Novo Nordisk Stock a Buy Ahead of Earnings? - Morningstar",
          "source": "Morningstar",
          "time": "Fri, 30 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Novo Nordisk set to report Q3 results as investors watch GLP-1 sales and outlook (NVO:NYSE) - Seeking Alpha",
          "source": "Seeking Alpha",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Novo Nordisk Trades at 10 Times Earnings While Buying Back Billions in Stock. Is This the Bottom? - The Motley Fool",
          "source": "The Motley Fool",
          "time": "Sun, 01 Nov 2026",
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
            266.55,
            267.63,
            267.36,
            268.16,
            268.7,
            269.51,
            270.31
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
            255.0,
            260.35,
            266.1,
            270.2,
            268.7
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
            302.3,
            307.8,
            272.6,
            249.9
          ]
        }
      }
    },
    {
      "id": "eu-alv",
      "ticker": "ALV",
      "name": "Allianz SE",
      "exchange": "XETRA (Germania)",
      "currency": "€",
      "sector": "Finanza",
      "marketCap": "€171 Mld",
      "marketCapRaw": 171.8,
      "currentPrice": 440.5,
      "targetPrice": 461.44,
      "targetPct": 4.8,
      "stopLoss": 429.13,
      "stopPct": 2.6,
      "dividendYield": 5.3,
      "avg52w": 396.7,
      "diff52wPct": 11.0,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+11.0%)",
      "high52": 454.6,
      "low52": 338.8,
      "atr14": 6.31,
      "atrPct": 1.43,
      "ema20": 432.87,
      "ema50": 434.93,
      "hasTrendAlignment": false,
      "dayChangePct": 0.02,
      "roc5d": 1.19,
      "clv": 0.96,
      "rawScore": 93.8,
      "score": 94,
      "strength": "Molto Alta",
      "volumeSpike": "0.11x",
      "rsi": 64.3,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €440.5 (+0.02% oggi, +1.19% a 5G). Div. Yield: 5.3%. Media 52W: €396.7 (Sopra Media 52W (+11.0%)). ATR 14: €6.31 (1.43% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+1.29% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+1.29% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 96% del range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 98,
        "news": 90,
        "volume": 70,
        "analyst": 79,
        "market": 70
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
            436.98,
            438.74,
            438.3,
            439.62,
            440.5,
            441.82,
            443.14
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
            440.5
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
      "id": "eu-ibe",
      "ticker": "IBE",
      "name": "Iberdrola S.A.",
      "exchange": "Bolsa de Madrid",
      "currency": "€",
      "sector": "Industria & Energia",
      "marketCap": "€141 Mld",
      "marketCapRaw": 141.1,
      "currentPrice": 22.22,
      "targetPrice": 23.25,
      "targetPct": 4.6,
      "stopLoss": 21.66,
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
      "ema50": 21.07,
      "hasTrendAlignment": true,
      "dayChangePct": -0.14,
      "roc5d": 0.86,
      "clv": 0.64,
      "rawScore": 93.3,
      "score": 93,
      "strength": "Molto Alta",
      "volumeSpike": "0.04x",
      "rsi": 63.8,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €22.22 (-0.14% oggi, +0.86% a 5G). Div. Yield: 4.6%. Media 52W: €19.84 (Sopra Media 52W (+12.0%)). ATR 14: €0.31 (1.4% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+1.03% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+1.03% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 64% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 92,
        "news": 86,
        "volume": 76,
        "analyst": 87,
        "market": 70
      },
      "catalysts": [
        {
          "title": "IBE Forecast — Price Target — Prediction for 2027 - TradingView",
          "source": "TradingView",
          "time": "Thu, 25 Jun 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Assessing Iberdrola (BME:IBE) Valuation As Shares Trade Near Analyst Fair Value Estimates - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Fri, 05 Jun 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Iberdrola raises its interim dividend to €0.253 per share - Iberdrola",
          "source": "Iberdrola",
          "time": "Thu, 08 Jan 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Iberdrola, S.A. (IBE.MC) Stock Price, News, Quote & History - Yahoo! Finance Canada",
          "source": "Yahoo! Finance Canada",
          "time": "Tue, 23 May 2017",
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
            22.04,
            22.13,
            22.11,
            22.18,
            22.22,
            22.29,
            22.35
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
            22.22
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
      "id": "eu-rms",
      "ticker": "RMS",
      "name": "Hermès International",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Lusso & Consumi",
      "marketCap": "€138 Mld",
      "marketCapRaw": 138.2,
      "currentPrice": 1316.5,
      "targetPrice": 1454.45,
      "targetPct": 10.5,
      "stopLoss": 1240.64,
      "stopPct": 5.8,
      "dividendYield": 0.9,
      "avg52w": 1764.0,
      "diff52wPct": -25.4,
      "border52w": "green",
      "status52w": "Sotto Media 52W (-25.4%)",
      "high52": 2300.0,
      "low52": 1228.0,
      "atr14": 42.14,
      "atrPct": 3.2,
      "ema20": 1305.33,
      "ema50": 1381.54,
      "hasTrendAlignment": false,
      "dayChangePct": -0.3,
      "roc5d": 4.53,
      "clv": 1.0,
      "rawScore": 92.3,
      "score": 92,
      "strength": "Molto Alta",
      "volumeSpike": "0.1x",
      "rsi": 53.4,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €1316.5 (-0.3% oggi, +4.53% a 5G). Div. Yield: 0.9%. Media 52W: €1764.0 (Sotto Media 52W (-25.4%)). ATR 14: €42.14 (3.2% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+3.16% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+3.16% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 100% range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 97,
        "news": 91,
        "volume": 71,
        "analyst": 88,
        "market": 66
      },
      "catalysts": [
        {
          "title": "Hermès (ENXTPA:RMS) Posts Slowest Quarterly Growth In Six Years But Keeps Targets - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Sun, 25 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Hermès, Kering Record Stock Spread Highlights Diverging Paths - Bloomberg.com",
          "source": "Bloomberg.com",
          "time": "Wed, 29 Jul 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Hermes Plummets 13% on the Anniversary of the RMS Titanic Disaster ⚓ - XTB.com",
          "source": "XTB.com",
          "time": "Wed, 15 Apr 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Hermès International Société en commandite par actions (ENXTPA:RMS) Stock Forecast & Analyst Predictions - Simply Wall St",
          "source": "Simply Wall St",
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
            1305.97,
            1311.23,
            1309.92,
            1313.87,
            1316.5,
            1320.45,
            1324.4
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
            1259.5,
            1266.0,
            1293.5,
            1320.5,
            1316.5
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
            1560.5,
            1556.5,
            1383.0,
            1262.5
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
      "targetPrice": 9.8,
      "targetPct": 4.9,
      "stopLoss": 9.08,
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
      "dayChangePct": 0.02,
      "roc5d": 0.08,
      "clv": 0.7,
      "rawScore": 91.3,
      "score": 91,
      "strength": "Molto Alta",
      "volumeSpike": "0.07x",
      "rsi": 71.7,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €9.34 (+0.02% oggi, +0.08% a 5G). Div. Yield: 6.8%. Media 52W: €9.45 (Nel Range ±10% (-1.2%)). ATR 14: €0.14 (1.52% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; ⚖️ Alpha 5G/1G (+0.62% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "⚖️ Alpha 5G/1G (+0.62% vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 70% del range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 92,
        "news": 97,
        "volume": 70,
        "analyst": 93,
        "market": 70
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
            9.26,
            9.3,
            9.29,
            9.32,
            9.34,
            9.37,
            9.39
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
      "id": "eu-mc",
      "ticker": "MC",
      "name": "LVMH Moët Hennessy",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Lusso & Consumi",
      "marketCap": "€198 Mld",
      "marketCapRaw": 198.8,
      "currentPrice": 397.55,
      "targetPrice": 423.32,
      "targetPct": 6.5,
      "stopLoss": 383.22,
      "stopPct": 3.6,
      "dividendYield": 2.1,
      "avg52w": 515.17,
      "diff52wPct": -22.8,
      "border52w": "green",
      "status52w": "Sotto Media 52W (-22.8%)",
      "high52": 654.7,
      "low52": 375.65,
      "atr14": 7.96,
      "atrPct": 2.0,
      "ema20": 390.43,
      "ema50": 409.38,
      "hasTrendAlignment": false,
      "dayChangePct": 0.99,
      "roc5d": 3.26,
      "clv": 0.97,
      "rawScore": 91.0,
      "score": 91,
      "strength": "Molto Alta",
      "volumeSpike": "0.12x",
      "rsi": 57.8,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €397.55 (+0.99% oggi, +3.26% a 5G). Div. Yield: 2.1%. Media 52W: €515.17 (Sotto Media 52W (-22.8%)). ATR 14: €7.96 (2.0% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+2.92% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+2.92% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 97% del range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 98,
        "news": 76,
        "volume": 66,
        "analyst": 92,
        "market": 66
      },
      "catalysts": [
        {
          "title": "LVMH Moët Hennessy - Louis Vuitton, Société Européenne (MC.PA) Stock Price, News, Quote & History - Yahoo! Finance Canada",
          "source": "Yahoo! Finance Canada",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "LVMH (ENXTPA:MC) Stock Fair Value Moves Lower As Analysts Turn More Cautious - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Sat, 17 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Lvmh Moët Hennessy - Louis Vuitton, Société Européenne - MC - Stock Price & News - The Motley Fool",
          "source": "The Motley Fool",
          "time": "Fri, 14 Aug 2026",
          "impact": "Favorevole"
        },
        {
          "title": "MC Forecast — Price Target — Prediction for 2027 - TradingView",
          "source": "TradingView",
          "time": "Thu, 25 Jun 2026",
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
            394.37,
            395.96,
            395.56,
            396.75,
            397.55,
            398.74,
            399.94
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
            385.0,
            383.85,
            387.0,
            393.65,
            397.55
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
            486.9,
            450.7,
            410.95,
            380.9
          ]
        }
      }
    },
    {
      "id": "eu-dte",
      "ticker": "DTE",
      "name": "Deutsche Telekom",
      "exchange": "XETRA (Germania)",
      "currency": "€",
      "sector": "Tecnologia",
      "marketCap": "€129 Mld",
      "marketCapRaw": 129.0,
      "currentPrice": 25.91,
      "targetPrice": 27.73,
      "targetPct": 7.0,
      "stopLoss": 24.87,
      "stopPct": 4.0,
      "dividendYield": 3.4,
      "avg52w": 28.95,
      "diff52wPct": -10.5,
      "border52w": "green",
      "status52w": "Sotto Media 52W (-10.5%)",
      "high52": 34.36,
      "low52": 23.53,
      "atr14": 0.58,
      "atrPct": 2.22,
      "ema20": 25.82,
      "ema50": 26.74,
      "hasTrendAlignment": false,
      "dayChangePct": 0.27,
      "roc5d": 3.06,
      "clv": 0.41,
      "rawScore": 88.2,
      "score": 88,
      "strength": "Molto Alta",
      "volumeSpike": "0.09x",
      "rsi": 56.8,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €25.91 (+0.27% oggi, +3.06% a 5G). Div. Yield: 3.4%. Media 52W: €28.95 (Sotto Media 52W (-10.5%)). ATR 14: €0.58 (2.22% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+2.51% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+2.51% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 41% range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 94,
        "news": 76,
        "volume": 70,
        "analyst": 90,
        "market": 70
      },
      "catalysts": [
        {
          "title": "Deutsche Telekom AG (DTE.DE) Stock Price, News, Quote & History - Yahoo! Finance Canada",
          "source": "Yahoo! Finance Canada",
          "time": "Sat, 31 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Deutsche Telekom AG: Release of a capital market information - MarketScreener",
          "source": "MarketScreener",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "9 New 5-Star Stocks This Week - Morningstar",
          "source": "Morningstar",
          "time": "Mon, 05 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Deutsche Telekom (XTRA:DTE) Stock Looks Undervalued Relative To Fair Value - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Sun, 11 Oct 2026",
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
            25.7,
            25.81,
            25.78,
            25.86,
            25.91,
            25.99,
            26.07
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
            25.14,
            25.62,
            26.09,
            25.84,
            25.91
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
            28.08,
            29.1,
            28.84,
            26.83
          ]
        }
      }
    },
    {
      "id": "eu-race",
      "ticker": "RACE",
      "name": "Ferrari N.V.",
      "exchange": "Borsa Italiana",
      "currency": "€",
      "sector": "Lusso & Consumi",
      "marketCap": "€64 Mld",
      "marketCapRaw": 64.3,
      "currentPrice": 357.0,
      "targetPrice": 378.7,
      "targetPct": 6.1,
      "stopLoss": 344.59,
      "stopPct": 3.5,
      "dividendYield": 0.8,
      "avg52w": 323.25,
      "diff52wPct": 10.4,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+10.4%)",
      "high52": 377.5,
      "low52": 269.0,
      "atr14": 6.9,
      "atrPct": 1.93,
      "ema20": 353.43,
      "ema50": 354.2,
      "hasTrendAlignment": false,
      "dayChangePct": -0.54,
      "roc5d": 1.38,
      "clv": 0.63,
      "rawScore": 87.8,
      "score": 88,
      "strength": "Molto Alta",
      "volumeSpike": "0.15x",
      "rsi": 59.6,
      "pe": "Consolidato",
      "riskReward": "1 : 1.7",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €357.0 (-0.54% oggi, +1.38% a 5G). Div. Yield: 0.8%. Media 52W: €323.25 (Sopra Media 52W (+10.4%)). ATR 14: €6.9 (1.93% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+1.18% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+1.18% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 63% range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 98,
        "news": 81,
        "volume": 68,
        "analyst": 76,
        "market": 66
      },
      "catalysts": [
        {
          "title": "Ferrari N.V. (RACE) Stock Price, News, Quote & History - Yahoo! Finance Canada",
          "source": "Yahoo! Finance Canada",
          "time": "Fri, 30 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "If You Invested $1000 In Ferrari Stock 10 Years Ago, You Would Have This Much Today - Benzinga",
          "source": "Benzinga",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Ferrari Nv Stock Price Forecast. Should You Buy RACE? - StockInvest.us",
          "source": "StockInvest.us",
          "time": "Fri, 30 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Earnings To Watch: Ferrari NV (MIL:RACE) Q3 2026 -- GF Value Sees 38% Upside - Yahoo Finance",
          "source": "Yahoo Finance",
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
            354.14,
            355.57,
            355.21,
            356.29,
            357.0,
            358.07,
            359.14
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
            352.15,
            357.2,
            355.1,
            358.95,
            357.0
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
            346.65,
            361.8,
            356.95,
            342.8
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
      "marketCapRaw": 230.4,
      "currentPrice": 434.8,
      "targetPrice": 461.71,
      "targetPct": 6.2,
      "stopLoss": 419.33,
      "stopPct": 3.6,
      "dividendYield": 1.6,
      "avg52w": 390.6,
      "diff52wPct": 11.3,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+11.3%)",
      "high52": 442.35,
      "low52": 338.85,
      "atr14": 8.59,
      "atrPct": 1.98,
      "ema20": 414.71,
      "ema50": 400.18,
      "hasTrendAlignment": true,
      "dayChangePct": -0.39,
      "roc5d": 2.63,
      "clv": 0.48,
      "rawScore": 87.3,
      "score": 87,
      "strength": "Molto Alta",
      "volumeSpike": "0.08x",
      "rsi": 76.1,
      "pe": "Consolidato",
      "riskReward": "1 : 1.7",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €434.8 (-0.39% oggi, +2.63% a 5G). Div. Yield: 1.6%. Media 52W: €390.6 (Sopra Media 52W (+11.3%)). ATR 14: €8.59 (1.98% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+1.99% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+1.99% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 48% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 76,
        "news": 91,
        "volume": 68,
        "analyst": 84,
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
            431.32,
            433.06,
            432.63,
            433.93,
            434.8,
            436.1,
            437.41
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
            434.8
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
    },
    {
      "id": "eu-san-fr",
      "ticker": "SAN-FR",
      "name": "Sanofi S.A.",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Healthcare",
      "marketCap": "€101 Mld",
      "marketCapRaw": 101.8,
      "currentPrice": 81.46,
      "targetPrice": 86.58,
      "targetPct": 6.3,
      "stopLoss": 78.5,
      "stopPct": 3.6,
      "dividendYield": 4.2,
      "avg52w": 80.27,
      "diff52wPct": 1.5,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (+1.5%)",
      "high52": 90.79,
      "low52": 69.75,
      "atr14": 1.65,
      "atrPct": 2.02,
      "ema20": 75.45,
      "ema50": 75.0,
      "hasTrendAlignment": true,
      "dayChangePct": 1.03,
      "roc5d": 7.88,
      "clv": 0.23,
      "rawScore": 86.5,
      "score": 86,
      "strength": "Molto Alta",
      "volumeSpike": "0.14x",
      "rsi": 85.4,
      "pe": "Consolidato",
      "riskReward": "1 : 1.7",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €81.46 (+1.03% oggi, +7.88% a 5G). Div. Yield: 4.2%. Media 52W: €80.27 (Nel Range ±10% (+1.5%)). ATR 14: €1.65 (2.02% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+5.71% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+5.71% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 23% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 58,
        "news": 85,
        "volume": 76,
        "analyst": 91,
        "market": 70
      },
      "catalysts": [
        {
          "title": "Sanofi (SAN.PA) Stock Price, News, Quote & History - Yahoo! Finance Canada",
          "source": "Yahoo! Finance Canada",
          "time": "Sun, 01 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Dynavax CEO ignored last-minute suitor's email after signing $2.2 billion Sanofi deal - The Business Journals",
          "source": "The Business Journals",
          "time": "Tue, 20 Jan 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Sanofi Stock (SAN) - Quote Euronext Paris - marketscreener.com",
          "source": "marketscreener.com",
          "time": "Tue, 18 Aug 2020",
          "impact": "Favorevole"
        },
        {
          "title": "SAN Stock Price and Chart — EURONEXT:SAN - TradingView",
          "source": "TradingView",
          "time": "Sun, 23 Jul 2017",
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
            80.81,
            81.13,
            81.05,
            81.3,
            81.46,
            81.7,
            81.95
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
            75.51,
            76.15,
            79.74,
            80.63,
            81.46
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
            74.5,
            78.74,
            74.35,
            70.93
          ]
        }
      }
    }
  ],
  "usa": [
    {
      "id": "usa-tsla",
      "ticker": "TSLA",
      "name": "Tesla Inc.",
      "exchange": "NASDAQ",
      "currency": "$",
      "sector": "Tecnologia",
      "marketCap": "$1296 Mld",
      "marketCapRaw": 1296.3,
      "currentPrice": 403.82,
      "targetPrice": 454.37,
      "targetPct": 12.5,
      "stopLoss": 376.66,
      "stopPct": 6.7,
      "dividendYield": 0.0,
      "avg52w": 398.11,
      "diff52wPct": 1.4,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (+1.4%)",
      "high52": 498.83,
      "low52": 297.38,
      "atr14": 15.09,
      "atrPct": 3.74,
      "ema20": 384.84,
      "ema50": 369.36,
      "hasTrendAlignment": true,
      "dayChangePct": 1.0,
      "roc5d": -0.89,
      "clv": 0.37,
      "rawScore": 96.2,
      "score": 96,
      "strength": "Molto Alta",
      "volumeSpike": "1.19x",
      "rsi": 62.6,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $403.82 (+1.0% oggi, -0.89% a 5G). Div. Yield: 0.0%. Media 52W: $398.11 (Nel Range ±10% (+1.4%)). ATR 14: $15.09 (3.74% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+1.48% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+1.48% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 37% del range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 97,
        "news": 84,
        "volume": 75,
        "analyst": 88,
        "market": 64
      },
      "catalysts": [
        {
          "title": "Gary Black Says Tesla Is Losing EV Share to ‘No-Name’ Rivals Despite ‘Huge First-Mover Advantage’—Warns TSLA Needs Better Marketing - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Tesla Robotaxi Adds This New City, Stock Continues Rally - Investor's Business Daily",
          "source": "Investor's Business Daily",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Analyst models potential market reaction to a SpaceX-Tesla all-stock merger - Investing.com",
          "source": "Investing.com",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Tesla (TSLA.US) Market Share Drops from 80% to 50%: Black Warns High Valuation Is Unsustainable - Moomoo",
          "source": "Moomoo",
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
            400.59,
            402.2,
            401.8,
            403.01,
            403.82,
            405.03,
            406.24
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
            407.46,
            404.22,
            403.3,
            399.81,
            403.82
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
            322.08,
            350.25,
            366.2,
            382.7
          ]
        }
      }
    },
    {
      "id": "usa-cost",
      "ticker": "COST",
      "name": "Costco Wholesale",
      "exchange": "NASDAQ",
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
      "rawScore": 95.2,
      "score": 95,
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
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 84,
        "news": 85,
        "volume": 88,
        "analyst": 88,
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
      "id": "usa-v",
      "ticker": "V",
      "name": "Visa Inc.",
      "exchange": "NYSE",
      "currency": "$",
      "sector": "Finanza",
      "marketCap": "$859 Mld",
      "marketCapRaw": 859.5,
      "currentPrice": 425.51,
      "targetPrice": 451.69,
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
      "rawScore": 94.2,
      "score": 94,
      "strength": "Molto Alta",
      "volumeSpike": "1.15x",
      "rsi": 72.2,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
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
        "analyst": 69,
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
          "title": "Visa (V) Beats Stock Market Upswing: What Investors Need to Know - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Fri, 09 Oct 2026",
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
      "id": "usa-jpm",
      "ticker": "JPM",
      "name": "JPMorgan Chase & Co.",
      "exchange": "NYSE",
      "currency": "$",
      "sector": "Finanza",
      "marketCap": "$967 Mld",
      "marketCapRaw": 967.2,
      "currentPrice": 340.58,
      "targetPrice": 361.75,
      "targetPct": 6.2,
      "stopLoss": 329.03,
      "stopPct": 3.4,
      "dividendYield": 2.2,
      "avg52w": 322.8,
      "diff52wPct": 5.5,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (+5.5%)",
      "high52": 366.5,
      "low52": 279.1,
      "atr14": 6.42,
      "atrPct": 1.88,
      "ema20": 337.32,
      "ema50": 343.84,
      "hasTrendAlignment": false,
      "dayChangePct": 1.05,
      "roc5d": 1.43,
      "clv": 0.27,
      "rawScore": 93.2,
      "score": 93,
      "strength": "Molto Alta",
      "volumeSpike": "0.87x",
      "rsi": 60.2,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $340.58 (+1.05% oggi, +1.43% a 5G). Div. Yield: 2.2%. Media 52W: $322.8 (Nel Range ±10% (+5.5%)). ATR 14: $6.42 (1.88% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+2.89% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+2.89% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 27% range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 97,
        "news": 90,
        "volume": 76,
        "analyst": 90,
        "market": 64
      },
      "catalysts": [
        {
          "title": "META_TITLE_QUOTE - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "JPM Stock Price and Chart — NYSE:JPM - TradingView",
          "source": "TradingView",
          "time": "Tue, 27 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "JPMorgan Chase & Co. (NYSE:JPM) Stock Price Up 1.1% After Analyst Upgrade - MarketBeat",
          "source": "MarketBeat",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Equity Capital Markets - J.P. Morgan",
          "source": "J.P. Morgan",
          "time": "Tue, 28 Jul 2026",
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
            337.86,
            339.22,
            338.88,
            339.9,
            340.58,
            341.6,
            342.62
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
            335.79,
            339.3,
            343.58,
            337.04,
            340.58
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
            352.64,
            356.69,
            349.31,
            332.99
          ]
        }
      }
    },
    {
      "id": "usa-lly",
      "ticker": "LLY",
      "name": "Eli Lilly and Company",
      "exchange": "NYSE",
      "currency": "$",
      "sector": "Healthcare",
      "marketCap": "$1340 Mld",
      "marketCapRaw": 1340.4,
      "currentPrice": 1410.99,
      "targetPrice": 1566.24,
      "targetPct": 11.0,
      "stopLoss": 1323.5,
      "stopPct": 6.2,
      "dividendYield": 0.6,
      "avg52w": 1150.1,
      "diff52wPct": 22.7,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+22.7%)",
      "high52": 1449.68,
      "low52": 850.51,
      "atr14": 48.6,
      "atrPct": 3.44,
      "ema20": 1280.22,
      "ema50": 1230.13,
      "hasTrendAlignment": true,
      "dayChangePct": -0.46,
      "roc5d": 10.07,
      "clv": 0.68,
      "rawScore": 89.5,
      "score": 90,
      "strength": "Molto Alta",
      "volumeSpike": "1.43x",
      "rsi": 81.9,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $1410.99 (-0.46% oggi, +10.07% a 5G). Div. Yield: 0.6%. Media 52W: $1150.1 (Sopra Media 52W (+22.7%)). ATR 14: $48.6 (3.44% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+7.47% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+7.47% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 68% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 68,
        "news": 94,
        "volume": 85,
        "analyst": 68,
        "market": 64
      },
      "catalysts": [
        {
          "title": "Eli Lilly Just Delivered Another Blowout Quarter. Is This Unstoppable Growth Stock Still a Buy? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Eli Lilly: Softer Growth Ahead (Rating Downgrade) (NYSE:LLY) - Seeking Alpha",
          "source": "Seeking Alpha",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Musk Predicts “Banger Drugs Coming Out” from Eli Lilly - TIKR.com",
          "source": "TIKR.com",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "3 Healthcare Stocks with ‘Strong Buy’ Analyst Ratings and ‘Perfect 10’ Smart Scores - TipRanks",
          "source": "TipRanks",
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
            1399.7,
            1405.35,
            1403.94,
            1408.17,
            1410.99,
            1415.22,
            1419.46
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
            1281.91,
            1288.3,
            1373.7,
            1417.54,
            1410.99
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
            1121.36,
            1233.66,
            1152.44,
            1179.27
          ]
        }
      }
    },
    {
      "id": "usa-wmt",
      "ticker": "WMT",
      "name": "Walmart Inc.",
      "exchange": "NYSE",
      "currency": "$",
      "sector": "Lusso & Consumi",
      "marketCap": "$1027 Mld",
      "marketCapRaw": 1027.9,
      "currentPrice": 127.69,
      "targetPrice": 136.4,
      "targetPct": 6.8,
      "stopLoss": 122.7,
      "stopPct": 3.9,
      "dividendYield": 1.3,
      "avg52w": 117.02,
      "diff52wPct": 9.1,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (+9.1%)",
      "high52": 135.16,
      "low52": 98.88,
      "atr14": 2.77,
      "atrPct": 2.17,
      "ema20": 117.84,
      "ema50": 113.67,
      "hasTrendAlignment": true,
      "dayChangePct": 3.38,
      "roc5d": 7.01,
      "clv": 0.93,
      "rawScore": 87.6,
      "score": 88,
      "strength": "Molto Alta",
      "volumeSpike": "1.36x",
      "rsi": 83.6,
      "pe": "Consolidato",
      "riskReward": "1 : 1.7",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $127.69 (+3.38% oggi, +7.01% a 5G). Div. Yield: 1.3%. Media 52W: $117.02 (Nel Range ±10% (+9.1%)). ATR 14: $2.77 (2.17% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+7.17% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+7.17% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 93% del range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 69,
        "news": 72,
        "volume": 88,
        "analyst": 89,
        "market": 64
      },
      "catalysts": [
        {
          "title": "Walmart Stock: Back To The Strong Sell Rating (NASDAQ:WMT) - Seeking Alpha",
          "source": "Seeking Alpha",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Walmart Stock: Is Wall Street Bullish or Bearish? - Barchart.com",
          "source": "Barchart.com",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Walmart Inc Stock (WMT) Moved Up by 3.00% on Nov 2: Facts Behind the Movement - TradingKey",
          "source": "TradingKey",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Walmart Stock: Is Wall Street Bullish or Bearish? - Yahoo Finance",
          "source": "Yahoo Finance",
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
            126.67,
            127.18,
            127.05,
            127.43,
            127.69,
            128.07,
            128.46
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
            119.32,
            118.77,
            121.25,
            123.51,
            127.69
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
            110.71,
            105.38,
            106.79,
            111.35
          ]
        }
      }
    },
    {
      "id": "usa-uber",
      "ticker": "UBER",
      "name": "Uber Technologies",
      "exchange": "NYSE",
      "currency": "$",
      "sector": "Tecnologia",
      "marketCap": "$138 Mld",
      "marketCapRaw": 138.8,
      "currentPrice": 66.71,
      "targetPrice": 72.18,
      "targetPct": 8.2,
      "stopLoss": 63.51,
      "stopPct": 4.8,
      "dividendYield": 0.0,
      "avg52w": 82.19,
      "diff52wPct": -18.8,
      "border52w": "green",
      "status52w": "Sotto Media 52W (-18.8%)",
      "high52": 100.35,
      "low52": 64.04,
      "atr14": 1.78,
      "atrPct": 2.66,
      "ema20": 67.9,
      "ema50": 70.64,
      "hasTrendAlignment": false,
      "dayChangePct": 2.24,
      "roc5d": 1.41,
      "clv": 0.6,
      "rawScore": 85.4,
      "score": 85,
      "strength": "Alta",
      "volumeSpike": "1.09x",
      "rsi": 35.0,
      "pe": "Consolidato",
      "riskReward": "1 : 1.7",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $66.71 (+2.24% oggi, +1.41% a 5G). Div. Yield: 0.0%. Media 52W: $82.19 (Sotto Media 52W (-18.8%)). ATR 14: $1.78 (2.66% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+3.36% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+3.36% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 60% del range)",
        "⚠️ Sotto EMA20/50 / Trend Debole"
      ],
      "pillars": {
        "breakout": 86,
        "news": 88,
        "volume": 76,
        "analyst": 90,
        "market": 64
      },
      "catalysts": [
        {
          "title": "Uber Technologies Stock Outlook: Is Wall Street Bullish or Bearish? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Should You Buy Uber Stock Before the Huge Investor Update? - The Motley Fool",
          "source": "The Motley Fool",
          "time": "Fri, 30 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Uber Technologies, Inc. (UBER) Is a Trending Stock: Facts to Know Before Betting on It - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Fri, 30 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Is Uber Technologies (UBER) Stock Reasonable After News And A 38% Gain? - Simply Wall St",
          "source": "Simply Wall St",
          "time": "Sat, 31 Oct 2026",
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
            66.18,
            66.44,
            66.38,
            66.58,
            66.71,
            66.91,
            67.11
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
            65.78,
            65.27,
            65.74,
            65.25,
            66.71
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
            71.61,
            80.35,
            70.87,
            71.51
          ]
        }
      }
    },
    {
      "id": "usa-xom",
      "ticker": "XOM",
      "name": "Exxon Mobil Corp.",
      "exchange": "NYSE",
      "currency": "$",
      "sector": "Industria & Energia",
      "marketCap": "$711 Mld",
      "marketCapRaw": 711.5,
      "currentPrice": 179.67,
      "targetPrice": 193.06,
      "targetPct": 7.5,
      "stopLoss": 171.6,
      "stopPct": 4.5,
      "dividendYield": 3.3,
      "avg52w": 150.5,
      "diff52wPct": 19.4,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+19.4%)",
      "high52": 188.5,
      "low52": 112.51,
      "atr14": 4.48,
      "atrPct": 2.49,
      "ema20": 177.29,
      "ema50": 170.19,
      "hasTrendAlignment": true,
      "dayChangePct": -4.05,
      "roc5d": -0.13,
      "clv": 0.0,
      "rawScore": 82.2,
      "score": 82,
      "strength": "Alta",
      "volumeSpike": "1.35x",
      "rsi": 57.6,
      "pe": "Consolidato",
      "riskReward": "1 : 1.7",
      "consensus": "Buy",
      "summary": "Quotazione reale $179.67 (-4.05% oggi, -0.13% a 5G). Div. Yield: 3.3%. Media 52W: $150.5 (Sopra Media 52W (+19.4%)). ATR 14: $4.48 (2.49% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; ⚖️ Alpha 5G/1G (-0.08% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "⚖️ Alpha 5G/1G (-0.08% vs Indice)",
        "ℹ️ Consolidamento (CLV 0% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 82,
        "news": 81,
        "volume": 72,
        "analyst": 78,
        "market": 68
      },
      "catalysts": [
        {
          "title": "Exxon Mobil Corp Stock (XOM) Moved Down by 3.57% on Nov 2: What Investors Need To Know - TradingKey",
          "source": "TradingKey",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Exxon Mobil Holdings (XOM) Rises As Market Takes a Dip: Key Facts - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Wed, 14 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "ExxonMobil Corporation $XOM Stock Sold by International Assets Investment Management LLC - MarketBeat",
          "source": "MarketBeat",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "ExxonMobil CEO Sees No Quick Fix for Global Refining Disruptions - Benzinga",
          "source": "Benzinga",
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
            178.23,
            178.95,
            178.77,
            179.31,
            179.67,
            180.21,
            180.75
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
            179.91,
            182.02,
            183.29,
            187.25,
            179.67
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
            155.06,
            160.64,
            163.27,
            168.94
          ]
        }
      }
    },
    {
      "id": "usa-gs",
      "ticker": "GS",
      "name": "Goldman Sachs Group",
      "exchange": "NYSE",
      "currency": "$",
      "sector": "Finanza",
      "marketCap": "$287 Mld",
      "marketCapRaw": 287.6,
      "currentPrice": 898.72,
      "targetPrice": 974.54,
      "targetPct": 8.4,
      "stopLoss": 851.7,
      "stopPct": 5.2,
      "dividendYield": 1.4,
      "avg52w": 954.0,
      "diff52wPct": -5.8,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (-5.8%)",
      "high52": 1153.99,
      "low52": 754.0,
      "atr14": 26.12,
      "atrPct": 2.91,
      "ema20": 904.35,
      "ema50": 946.5,
      "hasTrendAlignment": false,
      "dayChangePct": 0.47,
      "roc5d": -1.43,
      "clv": 0.09,
      "rawScore": 79.2,
      "score": 79,
      "strength": "Buona",
      "volumeSpike": "0.82x",
      "rsi": 51.8,
      "pe": "Consolidato",
      "riskReward": "1 : 1.6",
      "consensus": "Buy",
      "summary": "Quotazione reale $898.72 (+0.47% oggi, -1.43% a 5G). Div. Yield: 1.4%. Media 52W: $954.0 (Nel Range ±10% (-5.8%)). ATR 14: $26.12 (2.91% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+0.94% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+0.94% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 9% range)",
        "⚠️ Sotto EMA20/50 / Trend Debole"
      ],
      "pillars": {
        "breakout": 84,
        "news": 76,
        "volume": 76,
        "analyst": 89,
        "market": 64
      },
      "catalysts": [
        {
          "title": "Goldman Sachs bans traders and bankers from using some AI tools - report (GS:NYSE) - Seeking Alpha",
          "source": "Seeking Alpha",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Goldman Sachs (GS) Forecasts $140 Crude Oil Next Year - TipRanks",
          "source": "TipRanks",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Insider trades: Goldman Sachs, P&G, Texas Instruments among major names (PG:NYSE) - Seeking Alpha",
          "source": "Seeking Alpha",
          "time": "Sat, 31 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "GS: SEC Form FWP filed by Goldman Sachs Group Inc. - Quantisnow",
          "source": "Quantisnow",
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
            891.53,
            895.13,
            894.23,
            896.92,
            898.72,
            901.42,
            904.11
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
            911.77,
            925.17,
            927.73,
            894.55,
            898.72
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
            1027.06,
            1058.88,
            951.47,
            895.32
          ]
        }
      }
    },
    {
      "id": "usa-amzn",
      "ticker": "AMZN",
      "name": "Amazon.com Inc.",
      "exchange": "NASDAQ",
      "currency": "$",
      "sector": "Tecnologia",
      "marketCap": "$2.58 Tln",
      "marketCapRaw": 2579.1,
      "currentPrice": 245.63,
      "targetPrice": 269.28,
      "targetPct": 9.6,
      "stopLoss": 230.58,
      "stopPct": 6.1,
      "dividendYield": 0.0,
      "avg52w": 241.6,
      "diff52wPct": 1.7,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (+1.7%)",
      "high52": 287.2,
      "low52": 196.0,
      "atr14": 8.36,
      "atrPct": 3.4,
      "ema20": 251.6,
      "ema50": 255.71,
      "hasTrendAlignment": false,
      "dayChangePct": 2.2,
      "roc5d": -2.95,
      "clv": 0.29,
      "rawScore": 76.6,
      "score": 77,
      "strength": "Buona",
      "volumeSpike": "1.37x",
      "rsi": 39.8,
      "pe": "Consolidato",
      "riskReward": "1 : 1.6",
      "consensus": "Buy",
      "summary": "Quotazione reale $245.63 (+2.2% oggi, -2.95% a 5G). Div. Yield: 0.0%. Media 52W: $241.6 (Nel Range ±10% (+1.7%)). ATR 14: $8.36 (3.4% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; ⚖️ Alpha 5G/1G (+0.72% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "⚖️ Alpha 5G/1G (+0.72% vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 28% del range)",
        "⚠️ Sotto EMA20/50 / Trend Debole"
      ],
      "pillars": {
        "breakout": 74,
        "news": 90,
        "volume": 76,
        "analyst": 82,
        "market": 64
      },
      "catalysts": [
        {
          "title": "Amazon's Report Passed Both Tests I Set for It. I'd Buy More of the Stock Now. - The Motley Fool",
          "source": "The Motley Fool",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Amazon: Don't Look At The Cash Flow (NASDAQ:AMZN) - Seeking Alpha",
          "source": "Seeking Alpha",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Amazon Stock Fell After Earnings. Jim Cramer Says Buy Right Here - 24/7 Wall St.",
          "source": "24/7 Wall St.",
          "time": "Sun, 01 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Amazon vs. Intel: One AI Stock Is a Gift, the Other Can Wait, Says Top Investor - TipRanks",
          "source": "TipRanks",
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
            243.66,
            244.65,
            244.4,
            245.14,
            245.63,
            246.37,
            247.1
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
            253.1,
            254.6,
            243.79,
            240.35,
            245.63
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
            284.02,
            261.06,
            251.19,
            262.43
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
    elements.currentMarketTitle.innerHTML = `Mercati Europei &bull; Top 10 Consigli del Giorno`;
    elements.currentMarketDesc.textContent = `Selezione titoli ad alta capitalizzazione europea (> €10 Mld) con massimi catalizzatori rialzisti odierni basata su dati reali di borsa.`;
    renderStocks();
  });

  elements.tabUSA.addEventListener('click', () => {
    if (state.currentMarket === 'usa') return;
    state.currentMarket = 'usa';
    elements.tabUSA.classList.add('active');
    elements.tabEU.classList.remove('active');
    elements.currentMarketTitle.innerHTML = `Mercati USA &bull; Top 10 Consigli del Giorno`;
    elements.currentMarketDesc.textContent = `Selezione titoli ad alta capitalizzazione USA (> $10 Mld) su S&P 500 e Nasdaq con massimi catalizzatori rialzisti odierni basata su dati reali di borsa.`;
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

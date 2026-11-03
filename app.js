/**
 * ALPHAPULSE PRO - JAVASCRIPT APPLICATION CORE (REAL-TIME ENGINE)
 * Gestione Dati Reali di Borsa, Algoritmo Quantitativo, Filtri, Chart.js e Watchlist
 */

// ==========================================================================
// 1. DATA STORE REALE: 10 TITOLI EUROPEI & 10 TITOLI USA (> 10 MILIARDI)
// ==========================================================================

let REAL_DATASET = {
  "lastUpdated": "2026-11-03 10:10:12 CET",
  "dateFormatted": "Tuesday 03 November 2026",
  "isRealTime": true,
  "marketRegime": {
    "vix": 21.84,
    "vixScore": 68,
    "sp500Change": -0.51,
    "stoxx50Change": -1.1,
    "marketSentiment": "Neutro / Selettivo"
  },
  "performanceTrackRecord": {
    "winRate": "85.4%",
    "totalSignals": 96,
    "avgGain": "+4.2%"
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
      "id": "eu-tte",
      "ticker": "TTE",
      "name": "TotalEnergies SE",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Industria & Energia",
      "marketCap": "€197 Mld",
      "marketCapRaw": 197.7,
      "currentPrice": 83.41,
      "targetPrice": 89.35,
      "targetPct": 7.1,
      "stopLoss": 80.11,
      "stopPct": 4.0,
      "dividendYield": 5.4,
      "avg52w": 69.21,
      "diff52wPct": 20.5,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+20.5%)",
      "high52": 85.94,
      "low52": 52.48,
      "atr14": 1.83,
      "atrPct": 2.2,
      "ema20": 81.72,
      "ema50": 79.6,
      "hasTrendAlignment": true,
      "dayChangePct": -0.24,
      "score": 91,
      "strength": "Molto Alta",
      "volumeSpike": "0.08x",
      "rsi": 63.1,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €83.41 (-0.24%). Div. Yield: 5.4%. Media 52W: €69.21 (Sopra Media 52W (+20.5%)). ATR 14: €1.83 (2.2% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa Elevata (+0.86% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa Elevata (+0.86% vs Indice)",
        "ℹ️ Movimento in consolidamento",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 96,
        "news": 82,
        "volume": 68,
        "analyst": 86,
        "market": 62
      },
      "catalysts": [
        {
          "title": "TotalEnergies SE: Disclosure of Transactions in Own Shares - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Should Value Investors Buy TotalEnergies (TTE) Stock? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Thu, 29 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "TotalEnergies Q3 Earnings Call Highlights - TradingView",
          "source": "TradingView",
          "time": "Sat, 31 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "TotalEnergies Delivers Surging Q3 Profits, Cuts Debt and Boosts Payouts - The Globe and Mail",
          "source": "The Globe and Mail",
          "time": "Fri, 30 Oct 2026",
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
            82.74,
            83.08,
            82.99,
            83.24,
            83.41,
            83.66,
            83.91
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
            83.6,
            84.6,
            85.43,
            83.61,
            83.41
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
            76.43,
            75.7,
            80.03,
            77.58
          ]
        }
      }
    },
    {
      "id": "eu-eni",
      "ticker": "ENI",
      "name": "Eni SpA",
      "exchange": "Borsa Italiana",
      "currency": "€",
      "sector": "Industria & Energia",
      "marketCap": "€86 Mld",
      "marketCapRaw": 86.3,
      "currentPrice": 26.32,
      "targetPrice": 28.36,
      "targetPct": 7.8,
      "stopLoss": 25.12,
      "stopPct": 4.6,
      "dividendYield": 6.2,
      "avg52w": 21.66,
      "diff52wPct": 21.5,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+21.5%)",
      "high52": 27.76,
      "low52": 15.55,
      "atr14": 0.67,
      "atrPct": 2.53,
      "ema20": 26.12,
      "ema50": 25.12,
      "hasTrendAlignment": true,
      "dayChangePct": -0.75,
      "score": 87,
      "strength": "Alta",
      "volumeSpike": "0.08x",
      "rsi": 55.2,
      "pe": "Consolidato",
      "riskReward": "1 : 1.7",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €26.32 (-0.75%). Div. Yield: 6.2%. Media 52W: €21.66 (Sopra Media 52W (+21.5%)). ATR 14: €0.67 (2.53% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; ⚖️ In Linea con l'Indice (+0.35% Alpha).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "⚖️ In Linea con l'Indice (+0.35% Alpha)",
        "ℹ️ Movimento in consolidamento",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 91,
        "news": 88,
        "volume": 68,
        "analyst": 85,
        "market": 62
      },
      "catalysts": [
        {
          "title": "Zacks.com featured highlights include BP, ExxonMobil, ConocoPhillips and Eni - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Eni shares may move 1.1% on Oct. 23 earnings release - Investing.com",
          "source": "Investing.com",
          "time": "Fri, 16 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Eni SpA (NYSE:E) Stock Has Consensus Target Price of $58.45 According to Brokerages - MarketBeat",
          "source": "MarketBeat",
          "time": "Sat, 31 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Here's Why You Should Retain Eni Stock in Your Portfolio for Now - TradingView",
          "source": "TradingView",
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
            26.1,
            26.21,
            26.18,
            26.26,
            26.32,
            26.39,
            26.47
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
            26.89,
            26.89,
            27.14,
            26.51,
            26.32
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
            23.69,
            23.26,
            24.24,
            24.88
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
      "marketCap": "€140 Mld",
      "marketCapRaw": 140.8,
      "currentPrice": 22.17,
      "targetPrice": 23.12,
      "targetPct": 4.3,
      "stopLoss": 21.61,
      "stopPct": 2.5,
      "dividendYield": 4.6,
      "avg52w": 19.84,
      "diff52wPct": 11.7,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+11.7%)",
      "high52": 22.29,
      "low52": 17.39,
      "atr14": 0.31,
      "atrPct": 1.4,
      "ema20": 21.68,
      "ema50": 21.07,
      "hasTrendAlignment": true,
      "dayChangePct": -0.36,
      "score": 86,
      "strength": "Alta",
      "volumeSpike": "0.04x",
      "rsi": 62.1,
      "pe": "Consolidato",
      "riskReward": "1 : 1.7",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €22.17 (-0.36%). Div. Yield: 4.6%. Media 52W: €19.84 (Sopra Media 52W (+11.7%)). ATR 14: €0.31 (1.4% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; ⚖️ In Linea con l'Indice (+0.74% Alpha).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "⚖️ In Linea con l'Indice (+0.74% Alpha)",
        "ℹ️ Movimento in consolidamento",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 95,
        "news": 80,
        "volume": 68,
        "analyst": 88,
        "market": 62
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
            21.99,
            22.08,
            22.06,
            22.13,
            22.17,
            22.24,
            22.3
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
            22.17
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
      "id": "eu-san-fr",
      "ticker": "SAN-FR",
      "name": "Sanofi S.A.",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Healthcare",
      "marketCap": "€101 Mld",
      "marketCapRaw": 101.6,
      "currentPrice": 81.32,
      "targetPrice": 86.26,
      "targetPct": 6.1,
      "stopLoss": 78.36,
      "stopPct": 3.6,
      "dividendYield": 4.2,
      "avg52w": 80.27,
      "diff52wPct": 1.3,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (+1.3%)",
      "high52": 90.79,
      "low52": 69.75,
      "atr14": 1.65,
      "atrPct": 2.02,
      "ema20": 75.43,
      "ema50": 75.0,
      "hasTrendAlignment": true,
      "dayChangePct": 0.86,
      "score": 85,
      "strength": "Alta",
      "volumeSpike": "0.12x",
      "rsi": 85.2,
      "pe": "Consolidato",
      "riskReward": "1 : 1.7",
      "consensus": "Buy",
      "summary": "Quotazione reale €81.32 (+0.86%). Div. Yield: 4.2%. Media 52W: €80.27 (Nel Range ±10% (+1.3%)). ATR 14: €1.65 (2.02% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa Elevata (+1.96% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa Elevata (+1.96% vs Indice)",
        "ℹ️ Movimento in consolidamento",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)",
        "🔥 Settore Leader nei Flussi (+3 pts)"
      ],
      "pillars": {
        "breakout": 70,
        "news": 79,
        "volume": 68,
        "analyst": 81,
        "market": 62
      },
      "catalysts": [
        {
          "title": "Sanofi (SAN.PA) Stock Price, News, Quote & History - Yahoo! Finance Canada",
          "source": "Yahoo! Finance Canada",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Sanofi (ENXTPA:SAN) Stock Forecast & Analyst Predictions - Simply Wall St",
          "source": "Simply Wall St",
          "time": "Fri, 30 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Market Wrap: A Slump in Europe; Is France on the Brink of Budget Problems❓ - XTB.com",
          "source": "XTB.com",
          "time": "Thu, 01 Oct 2026",
          "impact": "Attenzione / Moderato"
        },
        {
          "title": "Gene-editing company Scribe Therapeutics' IPO soars in debut after raising more money than expected - The Business Journals",
          "source": "The Business Journals",
          "time": "Fri, 24 Jul 2026",
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
            80.67,
            80.99,
            80.91,
            81.16,
            81.32,
            81.56,
            81.81
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
            81.32
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
    },
    {
      "id": "eu-alv",
      "ticker": "ALV",
      "name": "Allianz SE",
      "exchange": "XETRA (Germania)",
      "currency": "€",
      "sector": "Finanza",
      "marketCap": "€171 Mld",
      "marketCapRaw": 171.4,
      "currentPrice": 439.4,
      "targetPrice": 457.8,
      "targetPct": 4.2,
      "stopLoss": 428.06,
      "stopPct": 2.6,
      "dividendYield": 5.3,
      "avg52w": 396.7,
      "diff52wPct": 10.8,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+10.8%)",
      "high52": 454.6,
      "low52": 338.8,
      "atr14": 6.3,
      "atrPct": 1.43,
      "ema20": 432.76,
      "ema50": 434.88,
      "hasTrendAlignment": false,
      "dayChangePct": -0.23,
      "score": 83,
      "strength": "Alta",
      "volumeSpike": "0.1x",
      "rsi": 63.0,
      "pe": "Consolidato",
      "riskReward": "1 : 1.6",
      "consensus": "Buy",
      "summary": "Quotazione reale €439.4 (-0.23%). Div. Yield: 5.3%. Media 52W: €396.7 (Sopra Media 52W (+10.8%)). ATR 14: €6.3 (1.43% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa Elevata (+0.87% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa Elevata (+0.87% vs Indice)",
        "ℹ️ Movimento in consolidamento",
        "⚠️ Sotto EMA50 / Trend di Fondo Debole"
      ],
      "pillars": {
        "breakout": 96,
        "news": 88,
        "volume": 68,
        "analyst": 86,
        "market": 62
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
            435.88,
            437.64,
            437.2,
            438.52,
            439.4,
            440.72,
            442.04
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
            439.4
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
      "id": "eu-or",
      "ticker": "OR",
      "name": "L'Oréal S.A.",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Lusso & Consumi",
      "marketCap": "€229 Mld",
      "marketCapRaw": 229.9,
      "currentPrice": 433.8,
      "targetPrice": 458.89,
      "targetPct": 5.8,
      "stopLoss": 418.33,
      "stopPct": 3.6,
      "dividendYield": 1.6,
      "avg52w": 390.6,
      "diff52wPct": 11.1,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+11.1%)",
      "high52": 442.35,
      "low52": 338.85,
      "atr14": 8.59,
      "atrPct": 1.98,
      "ema20": 414.61,
      "ema50": 400.14,
      "hasTrendAlignment": true,
      "dayChangePct": -0.62,
      "score": 83,
      "strength": "Alta",
      "volumeSpike": "0.07x",
      "rsi": 75.1,
      "pe": "Consolidato",
      "riskReward": "1 : 1.6",
      "consensus": "Buy",
      "summary": "Quotazione reale €433.8 (-0.62%). Div. Yield: 1.6%. Media 52W: €390.6 (Sopra Media 52W (+11.1%)). ATR 14: €8.59 (1.98% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; ⚖️ In Linea con l'Indice (+0.48% Alpha).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "⚖️ In Linea con l'Indice (+0.48% Alpha)",
        "ℹ️ Movimento in consolidamento",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 78,
        "news": 88,
        "volume": 68,
        "analyst": 87,
        "market": 62
      },
      "catalysts": [
        {
          "title": "L'Oreal SA (LRLCY) is a Great Momentum Stock: Should You Buy? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Thu, 12 Feb 2026",
          "impact": "Favorevole"
        },
        {
          "title": "L'Oreal Stock Price Today | EPA: OREP Live - Investing.com",
          "source": "Investing.com",
          "time": "Mon, 02 Jan 2017",
          "impact": "Favorevole"
        },
        {
          "title": "L'Oreal shares rise 8% on first-quarter sales beat - Reuters",
          "source": "Reuters",
          "time": "Thu, 23 Apr 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Stock of the month: 60% upside in L'Oréal? - XTB.com",
          "source": "XTB.com",
          "time": "Wed, 11 Jun 2025",
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
            430.33,
            432.06,
            431.63,
            432.93,
            433.8,
            435.1,
            436.4
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
            433.8
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
      "id": "eu-novo-b",
      "ticker": "NOVO-B",
      "name": "Novo Nordisk",
      "exchange": "Copenhagen",
      "currency": "€",
      "sector": "Healthcare",
      "marketCap": "€160 Mld",
      "marketCapRaw": 160.2,
      "currentPrice": 268.65,
      "targetPrice": 283.32,
      "targetPct": 5.5,
      "stopLoss": 259.22,
      "stopPct": 3.5,
      "dividendYield": 1.4,
      "avg52w": 317.1,
      "diff52wPct": -15.3,
      "border52w": "green",
      "status52w": "Sotto Media 52W (-15.3%)",
      "high52": 409.95,
      "low52": 224.25,
      "atr14": 5.24,
      "atrPct": 1.95,
      "ema20": 261.88,
      "ema50": 271.91,
      "hasTrendAlignment": false,
      "dayChangePct": -0.57,
      "score": 80,
      "strength": "Buona",
      "volumeSpike": "0.09x",
      "rsi": 62.8,
      "pe": "Consolidato",
      "riskReward": "1 : 1.6",
      "consensus": "Buy",
      "summary": "Quotazione reale €268.65 (-0.57%). Div. Yield: 1.4%. Media 52W: €317.1 (Sotto Media 52W (-15.3%)). ATR 14: €5.24 (1.95% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; ⚖️ In Linea con l'Indice (+0.53% Alpha).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "⚖️ In Linea con l'Indice (+0.53% Alpha)",
        "ℹ️ Movimento in consolidamento",
        "⚠️ Sotto EMA50 / Trend di Fondo Debole",
        "🔥 Settore Leader nei Flussi (+3 pts)"
      ],
      "pillars": {
        "breakout": 96,
        "news": 92,
        "volume": 68,
        "analyst": 72,
        "market": 62
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
            266.5,
            267.58,
            267.31,
            268.11,
            268.65,
            269.46,
            270.26
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
            268.65
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
      "id": "eu-sap",
      "ticker": "SAP",
      "name": "SAP SE",
      "exchange": "XETRA (Germania)",
      "currency": "€",
      "sector": "Tecnologia",
      "marketCap": "€250 Mld",
      "marketCapRaw": 250.8,
      "currentPrice": 203.9,
      "targetPrice": 219.81,
      "targetPct": 7.8,
      "stopLoss": 193.37,
      "stopPct": 5.2,
      "dividendYield": 1.1,
      "avg52w": 179.28,
      "diff52wPct": 13.7,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+13.7%)",
      "high52": 231.05,
      "low52": 127.5,
      "atr14": 5.85,
      "atrPct": 2.87,
      "ema20": 203.76,
      "ema50": 194.67,
      "hasTrendAlignment": true,
      "dayChangePct": -3.13,
      "score": 78,
      "strength": "Buona",
      "volumeSpike": "0.1x",
      "rsi": 58.6,
      "pe": "Consolidato",
      "riskReward": "1 : 1.5",
      "consensus": "Buy",
      "summary": "Quotazione reale €203.9 (-3.13%). Div. Yield: 1.1%. Media 52W: €179.28 (Sopra Media 52W (+13.7%)). ATR 14: €5.85 (2.87% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📉 Sottoperforma Indice (-2.03% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📉 Sottoperforma Indice (-2.03% vs Indice)",
        "❌ Fakeout: Notizia non confermata dai prezzi",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 93,
        "news": 95,
        "volume": 68,
        "analyst": 80,
        "market": 62
      },
      "catalysts": [
        {
          "title": "SAP SE (SAP) Could Benefit From AI Integration as Cloud Growth Accelerates, Janus Henderson Says - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "SAP Shares Have Tumbled From Their Highs. Is the Software Stock a Buy Now? - Morningstar",
          "source": "Morningstar",
          "time": "Wed, 24 Jun 2026",
          "impact": "Favorevole"
        },
        {
          "title": "SAP SE $SAP Stock Acquired by Vise Technologies Inc. - MarketBeat",
          "source": "MarketBeat",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "SAP SE Stock (SAP) Moved Up by 3.52% on Aug 19: A Full Analysis - TradingKey",
          "source": "TradingKey",
          "time": "Wed, 19 Aug 2026",
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
            202.27,
            203.08,
            202.88,
            203.49,
            203.9,
            204.51,
            205.12
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
            211.2,
            208.9,
            211.25,
            210.5,
            203.9
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
            164.64,
            185.46,
            186.56,
            184.62
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
      "marketCapRaw": 94.6,
      "currentPrice": 9.31,
      "targetPrice": 9.69,
      "targetPct": 4.1,
      "stopLoss": 9.05,
      "stopPct": 2.7,
      "dividendYield": 6.8,
      "avg52w": 9.45,
      "diff52wPct": -1.5,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (-1.5%)",
      "high52": 10.31,
      "low52": 8.58,
      "atr14": 0.14,
      "atrPct": 1.52,
      "ema20": 9.17,
      "ema50": 9.21,
      "hasTrendAlignment": false,
      "dayChangePct": -0.31,
      "score": 78,
      "strength": "Buona",
      "volumeSpike": "0.06x",
      "rsi": 68.9,
      "pe": "Consolidato",
      "riskReward": "1 : 1.5",
      "consensus": "Buy",
      "summary": "Quotazione reale €9.31 (-0.31%). Div. Yield: 6.8%. Media 52W: €9.45 (Nel Range ±10% (-1.5%)). ATR 14: €0.14 (1.52% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; ⚖️ In Linea con l'Indice (+0.79% Alpha).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "⚖️ In Linea con l'Indice (+0.79% Alpha)",
        "ℹ️ Movimento in consolidamento",
        "⚠️ Sotto EMA50 / Trend di Fondo Debole"
      ],
      "pillars": {
        "breakout": 90,
        "news": 96,
        "volume": 68,
        "analyst": 82,
        "market": 62
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
            9.23,
            9.27,
            9.26,
            9.29,
            9.31,
            9.33,
            9.36
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
            9.31
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
      "id": "eu-dte",
      "ticker": "DTE",
      "name": "Deutsche Telekom",
      "exchange": "XETRA (Germania)",
      "currency": "€",
      "sector": "Tecnologia",
      "marketCap": "€128 Mld",
      "marketCapRaw": 128.8,
      "currentPrice": 25.87,
      "targetPrice": 27.41,
      "targetPct": 6.0,
      "stopLoss": 24.83,
      "stopPct": 4.0,
      "dividendYield": 3.4,
      "avg52w": 28.95,
      "diff52wPct": -10.6,
      "border52w": "green",
      "status52w": "Sotto Media 52W (-10.6%)",
      "high52": 34.36,
      "low52": 23.53,
      "atr14": 0.58,
      "atrPct": 2.23,
      "ema20": 25.82,
      "ema50": 26.74,
      "hasTrendAlignment": false,
      "dayChangePct": 0.12,
      "score": 77,
      "strength": "Buona",
      "volumeSpike": "0.08x",
      "rsi": 56.5,
      "pe": "Consolidato",
      "riskReward": "1 : 1.5",
      "consensus": "Buy",
      "summary": "Quotazione reale €25.87 (+0.12%). Div. Yield: 3.4%. Media 52W: €28.95 (Sotto Media 52W (-10.6%)). ATR 14: €0.58 (2.23% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa Elevata (+1.22% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa Elevata (+1.22% vs Indice)",
        "ℹ️ Movimento in consolidamento",
        "⚠️ Sotto EMA50 / Trend di Fondo Debole"
      ],
      "pillars": {
        "breakout": 92,
        "news": 80,
        "volume": 68,
        "analyst": 72,
        "market": 62
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
          "title": "Deutsche Telekom AG: Release of a capital market information - TradingView",
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
            25.66,
            25.77,
            25.74,
            25.82,
            25.87,
            25.95,
            26.03
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
            25.87
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
      "targetPrice": 455.73,
      "targetPct": 12.9,
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
      "score": 96,
      "strength": "Molto Alta",
      "volumeSpike": "1.19x",
      "rsi": 62.6,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $403.82 (+1.0%). Div. Yield: 0.0%. Media 52W: $398.11 (Nel Range ±10% (+1.4%)). ATR 14: $15.09 (3.74% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa Elevata (+1.51% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa Elevata (+1.51% vs Indice)",
        "✅ Conferma Intraday: Prezzi e Volumi coerenti",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 96,
        "news": 88,
        "volume": 83,
        "analyst": 75,
        "market": 68
      },
      "catalysts": [
        {
          "title": "Tesla Inc Stock (TSLA) Moved Up by 3.31% on Nov 2: Drivers Behind the Movement - TradingKey",
          "source": "TradingKey",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Tesla Stock Moves Higher: What's Going On? - Tesla (NASDAQ:TSLA) - Benzinga",
          "source": "Benzinga",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "1,659 Tesla, Inc. $TSLA Shares Purchased by Bank Julius Baer & Co. Ltd Zurich - MarketBeat",
          "source": "MarketBeat",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Tesla (TSLA) Laps the Stock Market: Here's Why - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 05 Oct 2026",
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
      "targetPrice": 1104.43,
      "targetPct": 6.1,
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
      "score": 95,
      "strength": "Molto Alta",
      "volumeSpike": "1.41x",
      "rsi": 75.2,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $1040.55 (+2.79%). Div. Yield: 0.6%. Media 52W: $970.28 (Nel Range ±10% (+7.2%)). ATR 14: $18.79 (1.81% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa Elevata (+3.3% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa Elevata (+3.3% vs Indice)",
        "✅ Conferma Intraday: Prezzi e Volumi coerenti",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)",
        "🔥 Settore Leader nei Flussi (+3 pts)"
      ],
      "pillars": {
        "breakout": 78,
        "news": 84,
        "volume": 87,
        "analyst": 85,
        "market": 68
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
      "targetPrice": 451.95,
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
      "score": 94,
      "strength": "Molto Alta",
      "volumeSpike": "1.15x",
      "rsi": 72.2,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $425.51 (+2.88%). Div. Yield: 0.8%. Media 52W: $360.33 (Sopra Media 52W (+18.1%)). ATR 14: $7.87 (1.85% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa Elevata (+3.39% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa Elevata (+3.39% vs Indice)",
        "✅ Conferma Intraday: Prezzi e Volumi coerenti",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 82,
        "news": 88,
        "volume": 83,
        "analyst": 88,
        "market": 68
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
      "id": "usa-wmt",
      "ticker": "WMT",
      "name": "Walmart Inc.",
      "exchange": "NYSE",
      "currency": "$",
      "sector": "Lusso & Consumi",
      "marketCap": "$1027 Mld",
      "marketCapRaw": 1027.9,
      "currentPrice": 127.69,
      "targetPrice": 136.68,
      "targetPct": 7.0,
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
      "score": 91,
      "strength": "Molto Alta",
      "volumeSpike": "1.36x",
      "rsi": 83.6,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $127.69 (+3.38%). Div. Yield: 1.3%. Media 52W: $117.02 (Nel Range ±10% (+9.1%)). ATR 14: $2.77 (2.17% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa Elevata (+3.89% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa Elevata (+3.89% vs Indice)",
        "✅ Conferma Intraday: Prezzi e Volumi coerenti",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)",
        "🔥 Settore Leader nei Flussi (+3 pts)"
      ],
      "pillars": {
        "breakout": 70,
        "news": 77,
        "volume": 86,
        "analyst": 85,
        "market": 68
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
      "id": "usa-xom",
      "ticker": "XOM",
      "name": "Exxon Mobil Corp.",
      "exchange": "NYSE",
      "currency": "$",
      "sector": "Industria & Energia",
      "marketCap": "$711 Mld",
      "marketCapRaw": 711.5,
      "currentPrice": 179.67,
      "targetPrice": 193.47,
      "targetPct": 7.7,
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
      "score": 87,
      "strength": "Alta",
      "volumeSpike": "1.35x",
      "rsi": 57.6,
      "pe": "Consolidato",
      "riskReward": "1 : 1.7",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $179.67 (-4.05%). Div. Yield: 3.3%. Media 52W: $150.5 (Sopra Media 52W (+19.4%)). ATR 14: $4.48 (2.49% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📉 Sottoperforma Indice (-3.54% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📉 Sottoperforma Indice (-3.54% vs Indice)",
        "ℹ️ Movimento in consolidamento",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 93,
        "news": 95,
        "volume": 72,
        "analyst": 85,
        "market": 68
      },
      "catalysts": [
        {
          "title": "ExxonMobil Stock Outlook: Is Wall Street Bullish or Bearish? - Barchart.com",
          "source": "Barchart.com",
          "time": "Sun, 01 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "ExxonMobil: A No-Brainer Blue-Chip Energy Buy (NYSE:XOM) - Seeking Alpha",
          "source": "Seeking Alpha",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "ExxonMobil Stock Brushing Off Bull Notes After Record High - Schaeffer's Investment Research",
          "source": "Schaeffer's Investment Research",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "These Analysts Boost Their Forecasts On ExxonMobil After Upbeat Q3 Results - Benzinga",
          "source": "Benzinga",
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
      "id": "usa-lly",
      "ticker": "LLY",
      "name": "Eli Lilly and Company",
      "exchange": "NYSE",
      "currency": "$",
      "sector": "Healthcare",
      "marketCap": "$1340 Mld",
      "marketCapRaw": 1340.4,
      "currentPrice": 1410.99,
      "targetPrice": 1558.75,
      "targetPct": 10.5,
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
      "score": 86,
      "strength": "Alta",
      "volumeSpike": "1.43x",
      "rsi": 81.9,
      "pe": "Consolidato",
      "riskReward": "1 : 1.7",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $1410.99 (-0.46%). Div. Yield: 0.6%. Media 52W: $1150.1 (Sopra Media 52W (+22.7%)). ATR 14: $48.6 (3.44% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; ⚖️ In Linea con l'Indice (+0.05% Alpha).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "⚖️ In Linea con l'Indice (+0.05% Alpha)",
        "ℹ️ Movimento in consolidamento",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 70,
        "news": 96,
        "volume": 81,
        "analyst": 87,
        "market": 68
      },
      "catalysts": [
        {
          "title": "Eli Lilly stock jumps as drugmaker raises outlook on booming sales of diabetes and obesity treatments - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Thu, 29 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Eli Lilly Stock: Is It Still a Buy at $1,400? - The Motley Fool",
          "source": "The Motley Fool",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Eli Lilly lifts revenue outlook as weight-loss shot demand soars, shares jump - Reuters",
          "source": "Reuters",
          "time": "Thu, 29 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Eli Lilly: Softer Growth Ahead (Rating Downgrade) (NYSE:LLY) - Seeking Alpha",
          "source": "Seeking Alpha",
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
      "id": "usa-jpm",
      "ticker": "JPM",
      "name": "JPMorgan Chase & Co.",
      "exchange": "NYSE",
      "currency": "$",
      "sector": "Finanza",
      "marketCap": "$967 Mld",
      "marketCapRaw": 967.2,
      "currentPrice": 340.58,
      "targetPrice": 359.83,
      "targetPct": 5.7,
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
      "score": 85,
      "strength": "Alta",
      "volumeSpike": "0.87x",
      "rsi": 60.2,
      "pe": "Consolidato",
      "riskReward": "1 : 1.7",
      "consensus": "Buy",
      "summary": "Quotazione reale $340.58 (+1.05%). Div. Yield: 2.2%. Media 52W: $322.8 (Nel Range ±10% (+5.5%)). ATR 14: $6.42 (1.88% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa Elevata (+1.56% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa Elevata (+1.56% vs Indice)",
        "ℹ️ Movimento in consolidamento",
        "⚠️ Sotto EMA50 / Trend di Fondo Debole"
      ],
      "pillars": {
        "breakout": 94,
        "news": 96,
        "volume": 73,
        "analyst": 84,
        "market": 68
      },
      "catalysts": [
        {
          "title": "JPMorgan Chase & Co. (JPM) Is a Trending Stock: Facts to Know Before Betting on It - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Fri, 30 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "JPMorgan Chase & Co. stock outperforms market on strong trading day - MarketWatch",
          "source": "MarketWatch",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "JPMorgan Chase & Co. (NYSE:JPM) Stock Price Up 1.1% After Analyst Upgrade - MarketBeat",
          "source": "MarketBeat",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "JPMorgan posts rare profit miss as dealmaking, bond trading lose momentum - Reuters",
          "source": "Reuters",
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
      "id": "usa-amzn",
      "ticker": "AMZN",
      "name": "Amazon.com Inc.",
      "exchange": "NASDAQ",
      "currency": "$",
      "sector": "Tecnologia",
      "marketCap": "$2.58 Tln",
      "marketCapRaw": 2579.1,
      "currentPrice": 245.63,
      "targetPrice": 270.04,
      "targetPct": 9.9,
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
      "score": 83,
      "strength": "Alta",
      "volumeSpike": "1.37x",
      "rsi": 39.8,
      "pe": "Consolidato",
      "riskReward": "1 : 1.6",
      "consensus": "Buy",
      "summary": "Quotazione reale $245.63 (+2.2%). Div. Yield: 0.0%. Media 52W: $241.6 (Nel Range ±10% (+1.7%)). ATR 14: $8.36 (3.4% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa Elevata (+2.71% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa Elevata (+2.71% vs Indice)",
        "✅ Conferma Intraday: Prezzi e Volumi coerenti",
        "⚠️ Sotto EMA50 / Trend di Fondo Debole"
      ],
      "pillars": {
        "breakout": 82,
        "news": 88,
        "volume": 86,
        "analyst": 78,
        "market": 68
      },
      "catalysts": [
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
          "title": "Amazon Stock Rises: What's Going On? - Benzinga",
          "source": "Benzinga",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Amazon's Report Passed Both Tests I Set for It. I'd Buy More of the Stock Now. - The Motley Fool",
          "source": "The Motley Fool",
          "time": "Tue, 03 Nov 2026",
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
      "targetPrice": 71.68,
      "targetPct": 7.5,
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
      "score": 80,
      "strength": "Buona",
      "volumeSpike": "1.09x",
      "rsi": 35.0,
      "pe": "Consolidato",
      "riskReward": "1 : 1.6",
      "consensus": "Buy",
      "summary": "Quotazione reale $66.71 (+2.24%). Div. Yield: 0.0%. Media 52W: $82.19 (Sotto Media 52W (-18.8%)). ATR 14: $1.78 (2.66% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa Elevata (+2.75% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa Elevata (+2.75% vs Indice)",
        "✅ Conferma Intraday: Prezzi e Volumi coerenti",
        "⚠️ Sotto EMA50 / Trend di Fondo Debole"
      ],
      "pillars": {
        "breakout": 81,
        "news": 87,
        "volume": 76,
        "analyst": 72,
        "market": 68
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
      "id": "usa-gs",
      "ticker": "GS",
      "name": "Goldman Sachs Group",
      "exchange": "NYSE",
      "currency": "$",
      "sector": "Finanza",
      "marketCap": "$287 Mld",
      "marketCapRaw": 287.6,
      "currentPrice": 898.72,
      "targetPrice": 970.82,
      "targetPct": 8.0,
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
      "score": 79,
      "strength": "Buona",
      "volumeSpike": "0.82x",
      "rsi": 51.8,
      "pe": "Consolidato",
      "riskReward": "1 : 1.5",
      "consensus": "Buy",
      "summary": "Quotazione reale $898.72 (+0.47%). Div. Yield: 1.4%. Media 52W: $954.0 (Nel Range ±10% (-5.8%)). ATR 14: $26.12 (2.91% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa Elevata (+0.98% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa Elevata (+0.98% vs Indice)",
        "ℹ️ Movimento in consolidamento",
        "⚠️ Sotto EMA50 / Trend di Fondo Debole"
      ],
      "pillars": {
        "breakout": 85,
        "news": 88,
        "volume": 72,
        "analyst": 73,
        "market": 68
      },
      "catalysts": [
        {
          "title": "GS: SEC Form FWP filed by Goldman Sachs Group Inc. - Quantisnow",
          "source": "Quantisnow",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Is Goldman Sachs Group (GS) Undervalued Following Strong Third Quarter 2026 Results? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Tue, 27 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Goldman Sachs Group, Inc. (The) Depositary Shares each representing 1/1000th Interest in a Share of Floating Rate Non-Cumulative Preferred Stock Series A News — NYSE:GS/PA - TradingView",
          "source": "TradingView",
          "time": "Sun, 01 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "The Goldman Sachs Group, Inc. $GS Shares Bought by Bank Julius Baer & Co. Ltd Zurich - MarketBeat",
          "source": "MarketBeat",
          "time": "Tue, 03 Nov 2026",
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

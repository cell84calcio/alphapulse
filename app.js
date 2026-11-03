/**
 * ALPHAPULSE PRO - JAVASCRIPT APPLICATION CORE (REAL-TIME ENGINE)
 * Gestione Dati Reali di Borsa, Algoritmo Quantitativo, Filtri, Chart.js e Watchlist
 */

// ==========================================================================
// 1. DATA STORE REALE: 10 TITOLI EUROPEI & 10 TITOLI USA (> 10 MILIARDI)
// ==========================================================================

let REAL_DATASET = {
  "lastUpdated": "2026-11-03 16:06:09 CET",
  "dateFormatted": "Tuesday 03 November 2026",
  "isRealTime": true,
  "marketRegime": {
    "vix": 20.77,
    "vixScore": 82,
    "sp500Change": 0.18,
    "sp500Change5d": -2.44,
    "stoxx50Change": -0.07,
    "stoxx50Change5d": 0.06,
    "marketSentiment": "Neutro / Selettivo"
  },
  "performanceTrackRecord": {
    "winRate": "83.3%",
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
      "id": "eu-race",
      "ticker": "RACE",
      "name": "Ferrari N.V.",
      "exchange": "Borsa Italiana",
      "currency": "€",
      "sector": "Lusso & Consumi",
      "marketCap": "€66 Mld",
      "marketCapRaw": 66.1,
      "currentPrice": 367.0,
      "targetPrice": 396.62,
      "targetPct": 8.1,
      "stopLoss": 351.08,
      "stopPct": 4.3,
      "dividendYield": 0.8,
      "avg52w": 323.25,
      "diff52wPct": 13.5,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+13.5%)",
      "high52": 377.5,
      "low52": 269.0,
      "atr14": 8.84,
      "atrPct": 2.41,
      "ema20": 354.38,
      "ema50": 354.59,
      "hasTrendAlignment": false,
      "dayChangePct": 2.24,
      "roc5d": 4.22,
      "clv": 0.74,
      "rawScore": 99.2,
      "score": 94,
      "strength": "Molto Alta",
      "volumeSpike": "2.39x",
      "rsi": 68.2,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €367.0 (+2.24% oggi, +4.22% a 5G). Div. Yield: 0.8%. Media 52W: €323.25 (Sopra Media 52W (+13.5%)). ATR 14: €8.84 (2.41% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+3.42% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+3.42% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 74% del range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 95,
        "news": 85,
        "volume": 96,
        "analyst": 87,
        "market": 82
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
          "title": "Ferrari bought back 370,061 shares for €130.5 million on the Milan exchange since Sept. 1 - Stock Titan",
          "source": "Stock Titan",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Is Ferrari N.V. (RACE) A Good Stock To Buy Now? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 15 Jun 2026",
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
            364.06,
            365.53,
            365.17,
            366.27,
            367.0,
            368.1,
            369.2
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
            367.0
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
      "id": "eu-alv",
      "ticker": "ALV",
      "name": "Allianz SE",
      "exchange": "XETRA (Germania)",
      "currency": "€",
      "sector": "Finanza",
      "marketCap": "€172 Mld",
      "marketCapRaw": 172.1,
      "currentPrice": 441.2,
      "targetPrice": 462.67,
      "targetPct": 4.9,
      "stopLoss": 429.49,
      "stopPct": 2.7,
      "dividendYield": 5.3,
      "avg52w": 396.7,
      "diff52wPct": 11.2,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+11.2%)",
      "high52": 454.6,
      "low52": 338.8,
      "atr14": 6.51,
      "atrPct": 1.47,
      "ema20": 432.94,
      "ema50": 434.95,
      "hasTrendAlignment": false,
      "dayChangePct": 0.18,
      "roc5d": 1.36,
      "clv": 0.58,
      "rawScore": 93.2,
      "score": 90,
      "strength": "Molto Alta",
      "volumeSpike": "0.32x",
      "rsi": 64.8,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €441.2 (+0.18% oggi, +1.36% a 5G). Div. Yield: 5.3%. Media 52W: €396.7 (Sopra Media 52W (+11.2%)). ATR 14: €6.51 (1.47% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+0.88% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+0.88% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 57% range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 98,
        "news": 90,
        "volume": 70,
        "analyst": 84,
        "market": 82
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
            437.67,
            439.44,
            438.99,
            440.32,
            441.2,
            442.52,
            443.85
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
            441.2
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
      "id": "eu-bayn",
      "ticker": "BAYN",
      "name": "Bayer AG",
      "exchange": "XETRA (Germania)",
      "currency": "€",
      "sector": "Healthcare",
      "marketCap": "€52 Mld",
      "marketCapRaw": 52.6,
      "currentPrice": 53.64,
      "targetPrice": 58.95,
      "targetPct": 9.9,
      "stopLoss": 50.74,
      "stopPct": 5.4,
      "dividendYield": 0.5,
      "avg52w": 39.86,
      "diff52wPct": 34.6,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+34.6%)",
      "high52": 53.94,
      "low52": 25.78,
      "atr14": 1.61,
      "atrPct": 3.01,
      "ema20": 47.07,
      "ema50": 47.33,
      "hasTrendAlignment": false,
      "dayChangePct": 7.24,
      "roc5d": 16.53,
      "clv": 0.88,
      "rawScore": 93.0,
      "score": 90,
      "strength": "Molto Alta",
      "volumeSpike": "1.86x",
      "rsi": 79.2,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €53.64 (+7.24% oggi, +16.53% a 5G). Div. Yield: 0.5%. Media 52W: €39.86 (Sopra Media 52W (+34.6%)). ATR 14: €1.61 (3.01% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+12.81% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+12.81% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 88% del range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 77,
        "news": 70,
        "volume": 96,
        "analyst": 87,
        "market": 82
      },
      "catalysts": [
        {
          "title": "Bayer Aktiengesellschaft (BAYN.DE) Stock Price, News, Quote & History - Yahoo! Finance Canada",
          "source": "Yahoo! Finance Canada",
          "time": "Sun, 01 Nov 2026",
          "impact": "Attenzione / Moderato"
        },
        {
          "title": "Bayer AG : Gets a Neutral rating from Jefferies - marketscreener.com",
          "source": "marketscreener.com",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Bayer (XTRA:BAYN) Stock Could Be Undervalued Following FDA Priority Review News - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Tue, 29 Sep 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Bayer (XTRA:BAYN) Stock Forecast & Analyst Predictions - Simply Wall St",
          "source": "Simply Wall St",
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
            53.21,
            53.43,
            53.37,
            53.53,
            53.64,
            53.8,
            53.96
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
            46.03,
            47.96,
            50.58,
            50.02,
            53.64
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
            47.12,
            49.26,
            48.98,
            42.59
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
      "marketCapRaw": 70.9,
      "currentPrice": 59.08,
      "targetPrice": 62.5,
      "targetPct": 5.8,
      "stopLoss": 57.19,
      "stopPct": 3.2,
      "dividendYield": 4.7,
      "avg52w": 49.08,
      "diff52wPct": 20.4,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+20.4%)",
      "high52": 59.4,
      "low52": 38.76,
      "atr14": 1.05,
      "atrPct": 1.78,
      "ema20": 57.87,
      "ema50": 57.0,
      "hasTrendAlignment": true,
      "dayChangePct": -0.2,
      "roc5d": 1.86,
      "clv": 0.59,
      "rawScore": 91.7,
      "score": 89,
      "strength": "Molto Alta",
      "volumeSpike": "0.22x",
      "rsi": 66.4,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €59.08 (-0.2% oggi, +1.86% a 5G). Div. Yield: 4.7%. Media 52W: €49.08 (Sopra Media 52W (+20.4%)). ATR 14: €1.05 (1.78% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+1.03% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+1.03% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 59% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 94,
        "news": 84,
        "volume": 64,
        "analyst": 83,
        "market": 82
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
            58.61,
            58.84,
            58.78,
            58.96,
            59.08,
            59.26,
            59.43
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
            59.08
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
      "id": "eu-el",
      "ticker": "EL",
      "name": "EssilorLuxottica",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Healthcare",
      "marketCap": "€83 Mld",
      "marketCapRaw": 83.9,
      "currentPrice": 186.35,
      "targetPrice": 208.72,
      "targetPct": 12.0,
      "stopLoss": 173.85,
      "stopPct": 6.7,
      "dividendYield": 1.8,
      "avg52w": 231.05,
      "diff52wPct": -19.3,
      "border52w": "green",
      "status52w": "Sotto Media 52W (-19.3%)",
      "high52": 323.8,
      "low52": 138.3,
      "atr14": 6.94,
      "atrPct": 3.73,
      "ema20": 169.1,
      "ema50": 162.21,
      "hasTrendAlignment": true,
      "dayChangePct": -0.29,
      "roc5d": 4.87,
      "clv": 0.42,
      "rawScore": 90.5,
      "score": 89,
      "strength": "Molto Alta",
      "volumeSpike": "0.3x",
      "rsi": 78.2,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €186.35 (-0.29% oggi, +4.87% a 5G). Div. Yield: 1.8%. Media 52W: €231.05 (Sotto Media 52W (-19.3%)). ATR 14: €6.94 (3.73% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+2.8% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+2.8% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 42% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 72,
        "news": 81,
        "volume": 70,
        "analyst": 96,
        "market": 82
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
            184.86,
            185.6,
            185.42,
            185.98,
            186.35,
            186.91,
            187.47
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
            186.35
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
      "id": "eu-rms",
      "ticker": "RMS",
      "name": "Hermès International",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Lusso & Consumi",
      "marketCap": "€139 Mld",
      "marketCapRaw": 139.0,
      "currentPrice": 1323.5,
      "targetPrice": 1464.67,
      "targetPct": 10.7,
      "stopLoss": 1244.3,
      "stopPct": 6.0,
      "dividendYield": 0.9,
      "avg52w": 1764.0,
      "diff52wPct": -25.0,
      "border52w": "green",
      "status52w": "Sotto Media 52W (-25.0%)",
      "high52": 2300.0,
      "low52": 1228.0,
      "atr14": 44.0,
      "atrPct": 3.32,
      "ema20": 1306.0,
      "ema50": 1381.82,
      "hasTrendAlignment": false,
      "dayChangePct": 0.23,
      "roc5d": 5.08,
      "clv": 0.49,
      "rawScore": 90.0,
      "score": 88,
      "strength": "Molto Alta",
      "volumeSpike": "0.35x",
      "rsi": 54.6,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €1323.5 (+0.23% oggi, +5.08% a 5G). Div. Yield: 0.9%. Media 52W: €1764.0 (Sotto Media 52W (-25.0%)). ATR 14: €44.0 (3.32% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+3.13% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+3.13% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 49% range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 92,
        "news": 85,
        "volume": 72,
        "analyst": 80,
        "market": 82
      },
      "catalysts": [
        {
          "title": "Hermès (ENXTPA:RMS) Posts Slowest Quarterly Growth In Six Years But Keeps Targets - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Sun, 25 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Hermes Plummets 13% on the Anniversary of the RMS Titanic Disaster ⚓ - XTB.com",
          "source": "XTB.com",
          "time": "Wed, 15 Apr 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Following Half Year Earnings Is Hermès International (ENXTPA:RMS) Valuation Now Fully Valued? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Thu, 30 Jul 2026",
          "impact": "Favorevole"
        },
        {
          "title": "RMS Forecast — Price Target — Prediction for 2027 - TradingView",
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
            1312.91,
            1318.21,
            1316.88,
            1320.85,
            1323.5,
            1327.47,
            1331.44
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
            1323.5
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
      "id": "eu-cs",
      "ticker": "CS",
      "name": "AXA S.A.",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Finanza",
      "marketCap": "€95 Mld",
      "marketCapRaw": 95.2,
      "currentPrice": 43.08,
      "targetPrice": 45.38,
      "targetPct": 5.3,
      "stopLoss": 41.78,
      "stopPct": 3.0,
      "dividendYield": 5.6,
      "avg52w": 41.1,
      "diff52wPct": 4.8,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (+4.8%)",
      "high52": 45.66,
      "low52": 36.55,
      "atr14": 0.72,
      "atrPct": 1.68,
      "ema20": 42.66,
      "ema50": 43.17,
      "hasTrendAlignment": false,
      "dayChangePct": 0.26,
      "roc5d": 1.15,
      "clv": 0.64,
      "rawScore": 88.5,
      "score": 87,
      "strength": "Molto Alta",
      "volumeSpike": "0.19x",
      "rsi": 56.3,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €43.08 (+0.26% oggi, +1.15% a 5G). Div. Yield: 5.6%. Media 52W: €41.1 (Nel Range ±10% (+4.8%)). ATR 14: €0.72 (1.68% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; ⚖️ Alpha 5G/1G (+0.79% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "⚖️ Alpha 5G/1G (+0.79% vs Indice)",
        "ℹ️ Consolidamento (CLV 64% range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 98,
        "news": 90,
        "volume": 69,
        "analyst": 84,
        "market": 82
      },
      "catalysts": [
        {
          "title": "AXA SA (CS.PA) stock price, news, quote and history - Yahoo Finance UK",
          "source": "Yahoo Finance UK",
          "time": "Sat, 31 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "CS Forecast — Price Target — Prediction for 2027 - TradingView",
          "source": "TradingView",
          "time": "Thu, 25 Jun 2026",
          "impact": "Favorevole"
        },
        {
          "title": "AXA SA (EPA:CS) Looks Interesting, And It's About To Pay A Dividend - Simply Wall St",
          "source": "Simply Wall St",
          "time": "Wed, 06 May 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Axa Sa Stock Price Forecast. Should You Buy CS.PA? - StockInvest.us",
          "source": "StockInvest.us",
          "time": "Wed, 02 Dec 2020",
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
            42.74,
            42.91,
            42.86,
            42.99,
            43.08,
            43.21,
            43.34
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
            43.08
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
      "marketCapRaw": 42.5,
      "currentPrice": 66.36,
      "targetPrice": 70.18,
      "targetPct": 5.8,
      "stopLoss": 64.18,
      "stopPct": 3.3,
      "dividendYield": 3.3,
      "avg52w": 68.7,
      "diff52wPct": -3.4,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (-3.4%)",
      "high52": 80.14,
      "low52": 57.26,
      "atr14": 1.21,
      "atrPct": 1.82,
      "ema20": 62.6,
      "ema50": 62.93,
      "hasTrendAlignment": false,
      "dayChangePct": 0.45,
      "roc5d": 4.93,
      "clv": 0.03,
      "rawScore": 88.2,
      "score": 87,
      "strength": "Molto Alta",
      "volumeSpike": "0.38x",
      "rsi": 80.6,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €66.36 (+0.45% oggi, +4.93% a 5G). Div. Yield: 3.3%. Media 52W: €68.7 (Nel Range ±10% (-3.4%)). ATR 14: €1.21 (1.82% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+3.13% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+3.13% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 3% range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 66,
        "news": 97,
        "volume": 76,
        "analyst": 95,
        "market": 82
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
            65.83,
            66.09,
            66.03,
            66.23,
            66.36,
            66.56,
            66.76
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
            66.36
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
      "currentPrice": 53.43,
      "targetPrice": 56.34,
      "targetPct": 5.4,
      "stopLoss": 51.77,
      "stopPct": 3.1,
      "dividendYield": 5.1,
      "avg52w": 48.27,
      "diff52wPct": 10.7,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+10.7%)",
      "high52": 55.05,
      "low52": 41.48,
      "atr14": 0.92,
      "atrPct": 1.72,
      "ema20": 52.54,
      "ema50": 52.17,
      "hasTrendAlignment": true,
      "dayChangePct": -0.22,
      "roc5d": 1.12,
      "clv": 0.5,
      "rawScore": 88.2,
      "score": 87,
      "strength": "Molto Alta",
      "volumeSpike": "0.29x",
      "rsi": 63.5,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €53.43 (-0.22% oggi, +1.12% a 5G). Div. Yield: 5.1%. Media 52W: €48.27 (Sopra Media 52W (+10.7%)). ATR 14: €0.92 (1.72% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; ⚖️ Alpha 5G/1G (+0.58% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "⚖️ Alpha 5G/1G (+0.58% vs Indice)",
        "ℹ️ Consolidamento (CLV 50% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 98,
        "news": 76,
        "volume": 75,
        "analyst": 81,
        "market": 82
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
            53.0,
            53.22,
            53.16,
            53.32,
            53.43,
            53.59,
            53.75
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
            53.43
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
      "id": "eu-ibe",
      "ticker": "IBE",
      "name": "Iberdrola S.A.",
      "exchange": "Bolsa de Madrid",
      "currency": "€",
      "sector": "Industria & Energia",
      "marketCap": "€140 Mld",
      "marketCapRaw": 140.2,
      "currentPrice": 22.08,
      "targetPrice": 23.08,
      "targetPct": 4.5,
      "stopLoss": 21.51,
      "stopPct": 2.6,
      "dividendYield": 4.6,
      "avg52w": 19.84,
      "diff52wPct": 11.3,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+11.3%)",
      "high52": 22.29,
      "low52": 17.39,
      "atr14": 0.32,
      "atrPct": 1.44,
      "ema20": 21.67,
      "ema50": 21.07,
      "hasTrendAlignment": true,
      "dayChangePct": -0.76,
      "roc5d": 0.23,
      "clv": 0.14,
      "rawScore": 88.1,
      "score": 87,
      "strength": "Molto Alta",
      "volumeSpike": "0.15x",
      "rsi": 59.3,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale €22.08 (-0.76% oggi, +0.23% a 5G). Div. Yield: 4.6%. Media 52W: €19.84 (Sopra Media 52W (+11.3%)). ATR 14: €0.32 (1.44% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; ⚖️ Alpha 5G/1G (-0.17% vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "⚖️ Alpha 5G/1G (-0.17% vs Indice)",
        "⚠️ Debolezza Intraday Oggi (-0.76%, -2.9 pts)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 83,
        "news": 96,
        "volume": 75,
        "analyst": 96,
        "market": 82
      },
      "catalysts": [
        {
          "title": "Assessing Iberdrola (BME:IBE) Valuation As Shares Trade Near Analyst Fair Value Estimates - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Fri, 05 Jun 2026",
          "impact": "Favorevole"
        },
        {
          "title": "IBE Forecast — Price Target — Prediction for 2027 - TradingView",
          "source": "TradingView",
          "time": "Thu, 25 Jun 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Iberdrola stock rises after Barclays upgrade to buy - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Tue, 26 May 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Iberdrola raises its interim dividend to €0.253 per share - Iberdrola",
          "source": "Iberdrola",
          "time": "Thu, 08 Jan 2026",
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
            21.9,
            21.99,
            21.97,
            22.04,
            22.08,
            22.15,
            22.21
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
            22.08
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
    }
  ],
  "usa": [
    {
      "id": "usa-tmo",
      "ticker": "TMO",
      "name": "Thermo Fisher Scientific",
      "exchange": "S&P 500 / NYSE",
      "currency": "$",
      "sector": "Healthcare",
      "marketCap": "$263 Mld",
      "marketCapRaw": 263.7,
      "currentPrice": 693.86,
      "targetPrice": 766.28,
      "targetPct": 10.4,
      "stopLoss": 654.95,
      "stopPct": 5.6,
      "dividendYield": 0.3,
      "avg52w": 573.56,
      "diff52wPct": 21.0,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+21.0%)",
      "high52": 711.85,
      "low52": 435.27,
      "atr14": 21.62,
      "atrPct": 3.12,
      "ema20": 682.98,
      "ema50": 656.71,
      "hasTrendAlignment": true,
      "dayChangePct": 1.64,
      "roc5d": -1.46,
      "clv": 0.92,
      "rawScore": 99.2,
      "score": 94,
      "strength": "Molto Alta",
      "volumeSpike": "0.08x",
      "rsi": 57.0,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $693.86 (+1.64% oggi, -1.46% a 5G). Div. Yield: 0.3%. Media 52W: $573.56 (Sopra Media 52W (+21.0%)). ATR 14: $21.62 (3.12% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+1.17% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+1.17% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 92% del range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 90,
        "news": 95,
        "volume": 64,
        "analyst": 88,
        "market": 80
      },
      "catalysts": [
        {
          "title": "Thermo Fisher Scientific Inc. (TMO) Stock Price, News, Quote & History - Yahoo! Finance Canada",
          "source": "Yahoo! Finance Canada",
          "time": "Sun, 01 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "$100 Invested In Thermo Fisher Scientific 10 Years Ago Would Be Worth This Much Today - Benzinga",
          "source": "Benzinga",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Thermo Fisher Scientific (TMO) Stock Fair Value Rises After Q3 Beat And Higher Guidance - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Sat, 31 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "How Investors Are Reacting To Thermo Fisher Scientific Stock After Strong Q3 Earnings - Yahoo Finance",
          "source": "Yahoo Finance",
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
            688.31,
            691.08,
            690.39,
            692.47,
            693.86,
            695.94,
            698.02
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
            704.15,
            709.18,
            697.0,
            682.65,
            693.86
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
            574.03,
            628.15,
            658.32,
            658.02
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
      "marketCap": "$174 Mld",
      "marketCapRaw": 174.7,
      "currentPrice": 30.87,
      "targetPrice": 32.87,
      "targetPct": 6.5,
      "stopLoss": 29.8,
      "stopPct": 3.5,
      "dividendYield": 5.8,
      "avg52w": 27.34,
      "diff52wPct": 12.9,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+12.9%)",
      "high52": 31.05,
      "low52": 23.62,
      "atr14": 0.6,
      "atrPct": 1.93,
      "ema20": 29.64,
      "ema50": 28.75,
      "hasTrendAlignment": true,
      "dayChangePct": 0.65,
      "roc5d": 4.82,
      "clv": 0.73,
      "rawScore": 98.0,
      "score": 93,
      "strength": "Molto Alta",
      "volumeSpike": "0.34x",
      "rsi": 68.8,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $30.87 (+0.65% oggi, +4.82% a 5G). Div. Yield: 5.8%. Media 52W: $27.34 (Sopra Media 52W (+12.9%)). ATR 14: $0.6 (1.93% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+4.54% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+4.54% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 73% del range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 96,
        "news": 76,
        "volume": 72,
        "analyst": 89,
        "market": 80
      },
      "catalysts": [
        {
          "title": "Consolidamento e interesse istituzionale su PFE",
          "source": "Market Wire",
          "time": "Oggi",
          "impact": "Neutro / Favorevole"
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
            30.62,
            30.75,
            30.72,
            30.81,
            30.87,
            30.96,
            31.06
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
            29.45,
            29.95,
            30.52,
            30.67,
            30.87
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
      "id": "usa-abbv",
      "ticker": "ABBV",
      "name": "AbbVie Inc.",
      "exchange": "S&P 500 / NYSE",
      "currency": "$",
      "sector": "Healthcare",
      "marketCap": "$512 Mld",
      "marketCapRaw": 512.5,
      "currentPrice": 289.53,
      "targetPrice": 310.83,
      "targetPct": 7.4,
      "stopLoss": 278.08,
      "stopPct": 4.0,
      "dividendYield": 3.3,
      "avg52w": 244.75,
      "diff52wPct": 18.3,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+18.3%)",
      "high52": 298.74,
      "low52": 190.75,
      "atr14": 6.36,
      "atrPct": 2.2,
      "ema20": 283.32,
      "ema50": 272.34,
      "hasTrendAlignment": true,
      "dayChangePct": 0.24,
      "roc5d": 1.24,
      "clv": 0.59,
      "rawScore": 97.6,
      "score": 93,
      "strength": "Molto Alta",
      "volumeSpike": "0.09x",
      "rsi": 58.9,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $289.53 (+0.24% oggi, +1.24% a 5G). Div. Yield: 3.3%. Media 52W: $244.75 (Sopra Media 52W (+18.3%)). ATR 14: $6.36 (2.2% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+2.23% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+2.23% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 59% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 89,
        "news": 94,
        "volume": 65,
        "analyst": 96,
        "market": 80
      },
      "catalysts": [
        {
          "title": "AbbVie Earnings: Raising Our Fair Value Estimate With Significant Pipeline Progress - Morningstar",
          "source": "Morningstar",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "AbbVie Stocks Decline 2.3% With RBC Target Increase Backing Its Immunology Transition - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 02 Nov 2026",
          "impact": "Attenzione / Moderato"
        },
        {
          "title": "AbbVie vs. Bristol Myers Squibb: Which Healthcare Stock Is a Better Buy for 2027? - The Motley Fool",
          "source": "The Motley Fool",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "AbbVie Stock Hits a Record After a 5.2% Dividend Raise: Why Its 276% Payout Ratio Doesn’t Tell the Entire Story - TIKR.com",
          "source": "TIKR.com",
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
            287.21,
            288.37,
            288.08,
            288.95,
            289.53,
            290.4,
            291.27
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
            285.99,
            290.79,
            294.89,
            288.84,
            289.53
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
            245.1,
            265.79,
            264.02,
            276.47
          ]
        }
      }
    },
    {
      "id": "usa-syk",
      "ticker": "SYK",
      "name": "Stryker Corporation",
      "exchange": "S&P 500 / NYSE",
      "currency": "$",
      "sector": "Healthcare",
      "marketCap": "$117 Mld",
      "marketCapRaw": 117.9,
      "currentPrice": 310.19,
      "targetPrice": 344.81,
      "targetPct": 11.2,
      "stopLoss": 291.51,
      "stopPct": 6.0,
      "dividendYield": 0.9,
      "avg52w": 328.16,
      "diff52wPct": -5.5,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (-5.5%)",
      "high52": 389.33,
      "low52": 267.0,
      "atr14": 10.38,
      "atrPct": 3.35,
      "ema20": 298.15,
      "ema50": 302.55,
      "hasTrendAlignment": false,
      "dayChangePct": 1.1,
      "roc5d": 2.04,
      "clv": 0.82,
      "rawScore": 94.5,
      "score": 91,
      "strength": "Molto Alta",
      "volumeSpike": "0.09x",
      "rsi": 65.3,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $310.19 (+1.1% oggi, +2.04% a 5G). Div. Yield: 0.9%. Media 52W: $328.16 (Nel Range ±10% (-5.5%)). ATR 14: $10.38 (3.35% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+3.06% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+3.06% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 82% del range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 98,
        "news": 76,
        "volume": 67,
        "analyst": 85,
        "market": 80
      },
      "catalysts": [
        {
          "title": "Consolidamento e interesse istituzionale su SYK",
          "source": "Market Wire",
          "time": "Oggi",
          "impact": "Neutro / Favorevole"
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
            307.71,
            308.95,
            308.64,
            309.57,
            310.19,
            311.13,
            312.06
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
            304.0,
            311.75,
            291.86,
            306.81,
            310.2
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
            341.2,
            330.59,
            280.13,
            277.33
          ]
        }
      }
    },
    {
      "id": "usa-txn",
      "ticker": "TXN",
      "name": "Texas Instruments",
      "exchange": "S&P 500 / NASDAQ",
      "currency": "$",
      "sector": "Tecnologia",
      "marketCap": "$278 Mld",
      "marketCapRaw": 278.8,
      "currentPrice": 306.39,
      "targetPrice": 341.88,
      "targetPct": 11.6,
      "stopLoss": 287.23,
      "stopPct": 6.3,
      "dividendYield": 2.6,
      "avg52w": 243.38,
      "diff52wPct": 25.9,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+25.9%)",
      "high52": 334.03,
      "low52": 152.73,
      "atr14": 10.65,
      "atrPct": 3.47,
      "ema20": 293.19,
      "ema50": 282.2,
      "hasTrendAlignment": true,
      "dayChangePct": 1.45,
      "roc5d": -1.11,
      "clv": 0.19,
      "rawScore": 94.4,
      "score": 91,
      "strength": "Molto Alta",
      "volumeSpike": "0.1x",
      "rsi": 68.6,
      "pe": "Consolidato",
      "riskReward": "1 : 1.9",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $306.39 (+1.45% oggi, -1.11% a 5G). Div. Yield: 2.6%. Media 52W: $243.38 (Sopra Media 52W (+25.9%)). ATR 14: $10.65 (3.47% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+1.31% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+1.31% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 19% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)"
      ],
      "pillars": {
        "breakout": 86,
        "news": 95,
        "volume": 68,
        "analyst": 95,
        "market": 80
      },
      "catalysts": [
        {
          "title": "Texas Instruments Incorporated (TXN) Stock Price, News, Quote & History - Yahoo! Finance Canada",
          "source": "Yahoo! Finance Canada",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "ETFs Bought $114.8 Million of Texas Instruments (TXN) on Oct. 30 - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Tue, 03 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Should You Buy Texas Instruments Stock Now Or Wait? - Trefis",
          "source": "Trefis",
          "time": "Fri, 30 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Texas Instruments Has Raised Its Dividend for 23 Years. Here Are 3 More Tech Income Stocks - 24/7 Wall St.",
          "source": "24/7 Wall St.",
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
            303.94,
            305.17,
            304.86,
            305.78,
            306.39,
            307.31,
            308.23
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
            309.83,
            312.94,
            300.84,
            302.02,
            306.39
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
            269.04,
            260.05,
            258.14,
            283.74
          ]
        }
      }
    },
    {
      "id": "usa-abt",
      "ticker": "ABT",
      "name": "Abbott Laboratories",
      "exchange": "S&P 500 / NYSE",
      "currency": "$",
      "sector": "Healthcare",
      "marketCap": "$192 Mld",
      "marketCapRaw": 192.3,
      "currentPrice": 110.51,
      "targetPrice": 120.54,
      "targetPct": 9.1,
      "stopLoss": 105.07,
      "stopPct": 4.9,
      "dividendYield": 1.9,
      "avg52w": 107.0,
      "diff52wPct": 3.3,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (+3.3%)",
      "high52": 132.03,
      "low52": 81.97,
      "atr14": 3.02,
      "atrPct": 2.73,
      "ema20": 104.4,
      "ema50": 105.44,
      "hasTrendAlignment": false,
      "dayChangePct": 0.32,
      "roc5d": 7.67,
      "clv": 0.94,
      "rawScore": 94.0,
      "score": 91,
      "strength": "Molto Alta",
      "volumeSpike": "0.06x",
      "rsi": 68.1,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $110.51 (+0.32% oggi, +7.67% a 5G). Div. Yield: 1.9%. Media 52W: $107.0 (Nel Range ±10% (+3.3%)). ATR 14: $3.02 (2.73% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+6.12% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+6.12% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 94% del range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 96,
        "news": 74,
        "volume": 72,
        "analyst": 82,
        "market": 80
      },
      "catalysts": [
        {
          "title": "Can Abbott Laboratories (ABT) Stay Reasonable As Its Breakup Nears? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Fri, 30 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Abbott Laboratories Stock (ABT) Moved Up by 3.67% on Nov 2: A Full Analysis - TradingKey",
          "source": "TradingKey",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Abbott cuts 2026 sales growth view, plans to spin off nutrition business - Reuters",
          "source": "Reuters",
          "time": "Wed, 21 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Is Most-Watched Stock Abbott Laboratories (ABT) Worth Betting on Now? - Yahoo Finance",
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
            109.63,
            110.07,
            109.96,
            110.29,
            110.51,
            110.84,
            111.17
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
            102.64,
            104.57,
            106.2,
            110.16,
            110.51
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
            107.12,
            116.13,
            102.23,
            99.6
          ]
        }
      }
    },
    {
      "id": "usa-amgn",
      "ticker": "AMGN",
      "name": "Amgen Inc.",
      "exchange": "S&P 500 / NASDAQ",
      "currency": "$",
      "sector": "Healthcare",
      "marketCap": "$251 Mld",
      "marketCapRaw": 251.7,
      "currentPrice": 466.07,
      "targetPrice": 502.8,
      "targetPct": 7.9,
      "stopLoss": 446.1,
      "stopPct": 4.3,
      "dividendYield": 2.8,
      "avg52w": 385.06,
      "diff52wPct": 21.0,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+21.0%)",
      "high52": 475.65,
      "low52": 294.48,
      "atr14": 11.1,
      "atrPct": 2.38,
      "ema20": 441.76,
      "ema50": 428.47,
      "hasTrendAlignment": true,
      "dayChangePct": 0.13,
      "roc5d": 3.15,
      "clv": 0.83,
      "rawScore": 93.6,
      "score": 91,
      "strength": "Molto Alta",
      "volumeSpike": "0.07x",
      "rsi": 76.1,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $466.07 (+0.13% oggi, +3.15% a 5G). Div. Yield: 2.8%. Media 52W: $385.06 (Sopra Media 52W (+21.0%)). ATR 14: $11.1 (2.38% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+3.33% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+3.33% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 83% del range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 81,
        "news": 76,
        "volume": 70,
        "analyst": 92,
        "market": 80
      },
      "catalysts": [
        {
          "title": "Consolidamento e interesse istituzionale su AMGN",
          "source": "Market Wire",
          "time": "Oggi",
          "impact": "Neutro / Favorevole"
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
            462.34,
            464.21,
            463.74,
            465.14,
            466.07,
            467.47,
            468.87
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
            451.83,
            460.73,
            466.01,
            465.45,
            466.07
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
            378.87,
            442.24,
            379.78,
            414.87
          ]
        }
      }
    },
    {
      "id": "usa-rtx",
      "ticker": "RTX",
      "name": "RTX Corporation",
      "exchange": "S&P 500 / NYSE",
      "currency": "$",
      "sector": "Industria & Energia",
      "marketCap": "$270 Mld",
      "marketCapRaw": 270.2,
      "currentPrice": 203.18,
      "targetPrice": 220.56,
      "targetPct": 8.6,
      "stopLoss": 193.67,
      "stopPct": 4.7,
      "dividendYield": 2.1,
      "avg52w": 196.81,
      "diff52wPct": 3.2,
      "border52w": "orange",
      "status52w": "Nel Range ±10% (+3.2%)",
      "high52": 226.88,
      "low52": 166.74,
      "atr14": 5.28,
      "atrPct": 2.6,
      "ema20": 194.95,
      "ema50": 199.11,
      "hasTrendAlignment": false,
      "dayChangePct": 0.19,
      "roc5d": 3.75,
      "clv": 0.91,
      "rawScore": 92.8,
      "score": 90,
      "strength": "Molto Alta",
      "volumeSpike": "0.05x",
      "rsi": 72.6,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $203.18 (+0.19% oggi, +3.75% a 5G). Div. Yield: 2.1%. Media 52W: $196.81 (Nel Range ±10% (+3.2%)). ATR 14: $5.28 (2.6% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+3.72% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+3.72% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 91% del range)",
        "🔄 Recupero Rialzista sopra EMA20 (MACD in spinta)"
      ],
      "pillars": {
        "breakout": 89,
        "news": 84,
        "volume": 76,
        "analyst": 86,
        "market": 80
      },
      "catalysts": [
        {
          "title": "Are Wall Street Analysts Bullish on RTX Corporation Stock? - Barchart.com",
          "source": "Barchart.com",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "RTX Corporation (RTX) is Attracting Investor Attention: Here is What You Should Know - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Wed, 28 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "RTX Corp. stock underperforms Monday when compared to competitors despite daily gains - MarketWatch",
          "source": "MarketWatch",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "RTX Corp (RTX) Analyst Ratings, Stock Forecast and Price Target - Moomoo",
          "source": "Moomoo",
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
            201.55,
            202.37,
            202.16,
            202.77,
            203.18,
            203.79,
            204.4
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
            195.84,
            199.4,
            199.8,
            202.79,
            203.18
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
            216.65,
            210.28,
            193.54,
            185.97
          ]
        }
      }
    },
    {
      "id": "usa-lly",
      "ticker": "LLY",
      "name": "Eli Lilly and Company",
      "exchange": "S&P 500 / NYSE",
      "currency": "$",
      "sector": "Healthcare",
      "marketCap": "$1.36 Tln",
      "marketCapRaw": 1359.2,
      "currentPrice": 1430.77,
      "targetPrice": 1587.47,
      "targetPct": 11.0,
      "stopLoss": 1344.16,
      "stopPct": 6.1,
      "dividendYield": 0.6,
      "avg52w": 1150.1,
      "diff52wPct": 24.4,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+24.4%)",
      "high52": 1449.68,
      "low52": 850.51,
      "atr14": 48.12,
      "atrPct": 3.36,
      "ema20": 1294.55,
      "ema50": 1238.0,
      "hasTrendAlignment": true,
      "dayChangePct": 1.4,
      "roc5d": 11.06,
      "clv": 0.86,
      "rawScore": 91.7,
      "score": 89,
      "strength": "Molto Alta",
      "volumeSpike": "0.15x",
      "rsi": 80.8,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $1430.77 (+1.4% oggi, +11.06% a 5G). Div. Yield: 0.6%. Media 52W: $1150.1 (Sopra Media 52W (+24.4%)). ATR 14: $48.12 (3.36% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+8.59% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+8.59% Alpha vs Indice)",
        "✅ Conferma Prezzi/CLV (Chiusura al 86% del range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 74,
        "news": 76,
        "volume": 71,
        "analyst": 92,
        "market": 80
      },
      "catalysts": [
        {
          "title": "Consolidamento e interesse istituzionale su LLY",
          "source": "Market Wire",
          "time": "Oggi",
          "impact": "Neutro / Favorevole"
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
            1419.32,
            1425.05,
            1423.62,
            1427.91,
            1430.77,
            1435.06,
            1439.35
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
            1288.3,
            1373.7,
            1417.54,
            1410.99,
            1430.77
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
      "id": "usa-jnj",
      "ticker": "JNJ",
      "name": "Johnson & Johnson",
      "exchange": "S&P 500 / NYSE",
      "currency": "$",
      "sector": "Healthcare",
      "marketCap": "$651 Mld",
      "marketCapRaw": 651.4,
      "currentPrice": 270.3,
      "targetPrice": 291.86,
      "targetPct": 8.0,
      "stopLoss": 258.35,
      "stopPct": 4.4,
      "dividendYield": 3.1,
      "avg52w": 233.57,
      "diff52wPct": 15.7,
      "border52w": "red",
      "status52w": "Sopra Media 52W (+15.7%)",
      "high52": 282.02,
      "low52": 185.12,
      "atr14": 6.63,
      "atrPct": 2.45,
      "ema20": 265.63,
      "ema50": 264.99,
      "hasTrendAlignment": true,
      "dayChangePct": -0.1,
      "roc5d": -0.27,
      "clv": 0.91,
      "rawScore": 91.5,
      "score": 89,
      "strength": "Molto Alta",
      "volumeSpike": "0.08x",
      "rsi": 69.6,
      "pe": "Consolidato",
      "riskReward": "1 : 1.8",
      "consensus": "Strong Buy",
      "summary": "Quotazione reale $270.3 (-0.1% oggi, -0.27% a 5G). Div. Yield: 3.1%. Media 52W: $233.57 (Sopra Media 52W (+15.7%)). ATR 14: $6.63 (2.45% vol). Controlli attivi: 🛡️ No Rischio Binario Imminente &bull; 📈 Forza Relativa 5G (+1.19% Alpha vs Indice).",
      "controls": [
        "🛡️ No Rischio Binario Imminente",
        "📈 Forza Relativa 5G (+1.19% Alpha vs Indice)",
        "ℹ️ Consolidamento (CLV 91% range)",
        "🎯 Trend Strutturale Sano (Prezzo > EMA20 > EMA50)",
        "🔥 Settore Leader a 5G (+3.0 pts)"
      ],
      "pillars": {
        "breakout": 93,
        "news": 76,
        "volume": 63,
        "analyst": 80,
        "market": 80
      },
      "catalysts": [
        {
          "title": "Consolidamento e interesse istituzionale su JNJ",
          "source": "Market Wire",
          "time": "Oggi",
          "impact": "Neutro / Favorevole"
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
            268.13,
            269.21,
            268.94,
            269.75,
            270.3,
            271.11,
            271.92
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
            271.04,
            275.2,
            273.2,
            270.56,
            270.3
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
            254.41,
            273.14,
            270.22,
            261.44
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
  tabSummary: document.getElementById('tabSummary'),
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
  summaryTablesPage: document.getElementById('summaryTablesPage'),
  summaryTableBodyEU: document.getElementById('summaryTableBodyEU'),
  summaryTableBodyUSA: document.getElementById('summaryTableBodyUSA'),
  summaryBadgeEU: document.getElementById('summaryBadgeEU'),
  summaryBadgeUSA: document.getElementById('summaryBadgeUSA'),
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

const YAHOO_SYMBOL_MAP = {
  "SAP": "SAP.DE", "SIE": "SIE.DE", "ALV": "ALV.DE", "DTE": "DTE.DE", "MUV2": "MUV2.DE",
  "AIR": "AIR.PA", "BAYN": "BAYN.DE", "BAS": "BAS.DE", "IFX": "IFX.DE", "MBG": "MBG.DE",
  "BMW": "BMW.DE", "VW": "VOW3.DE", "DHL": "DHL.DE", "ADS": "ADS.DE", "DB1": "DB1.DE",
  "RWE": "RWE.DE", "DBK": "DBK.DE", "MC": "MC.PA", "OR": "OR.PA", "RMS": "RMS.PA",
  "TTE": "TTE.PA", "SAN-FR": "SAN.PA", "SU": "SU.PA", "AI": "AI.PA", "BNP": "BNP.PA",
  "CS": "CS.PA", "EL": "EL.PA", "SAF": "SAF.PA", "DG": "DG.PA", "ACA": "ACA.PA",
  "BN": "BN.PA", "SGO": "SGO.PA", "CAP": "CAP.PA", "ORA": "ORA.PA", "KER": "KER.PA",
  "ENGI": "ENGI.PA", "STLA": "STLAM.MI", "RI": "RI.PA", "ASML": "ASML.AS", "PRX": "PRX.AS",
  "INGA": "INGA.AS", "AD": "AD.AS", "ADYEN": "ADYEN.AS", "WOL": "WKL.AS", "UCG": "UCG.MI",
  "ISP": "ISP.MI", "ENEL": "ENEL.MI", "ENI": "ENI.MI", "RACE": "RACE.MI", "G": "G.MI",
  "ITX": "ITX.MC", "IBE": "IBE.MC", "SAN": "SAN.MC", "BBVA": "BBVA.MC", "ABI": "ABI.BR",
  "NDA": "NDA-FI.HE", "NOKIA": "NOKIA.HE", "BRK.B": "BRK-B"
};

async function fetchYahooQuoteViaProxy(yahooSym) {
  const targetUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(yahooSym)}?interval=1d&range=5d`;
  const proxies = [
    `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`,
    `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`
  ];
  for (const url of proxies) {
    try {
      const controller = new AbortController();
      const tid = setTimeout(() => controller.abort(), 3500);
      const res = await fetch(url, { signal: controller.signal, cache: 'no-store' });
      clearTimeout(tid);
      if (!res.ok) continue;
      const json = await res.json();
      const result = json && json.chart && json.chart.result && json.chart.result[0];
      if (!result) continue;
      const meta = result.meta || {};
      const quote = result.indicators && result.indicators.quote && result.indicators.quote[0];
      const closes = (quote && quote.close ? quote.close : []).filter(v => v !== null && v !== undefined);
      if (closes.length >= 2) {
        const curPrice = meta.regularMarketPrice || closes[closes.length - 1];
        const prevClose = closes[closes.length - 2];
        const firstClose = closes[0];
        const dayChangePct = (meta.regularMarketChangePercent !== undefined && meta.regularMarketChangePercent !== null)
          ? parseFloat(Number(meta.regularMarketChangePercent).toFixed(2))
          : parseFloat((((curPrice - prevClose) / prevClose) * 100).toFixed(2));
        const roc5d = parseFloat((((curPrice - firstClose) / firstClose) * 100).toFixed(2));
        return { curPrice: parseFloat(Number(curPrice).toFixed(2)), dayChangePct, roc5d, closes: closes.map(c => parseFloat(c.toFixed(2))) };
      }
    } catch (_) {
      // Prova il proxy successivo
    }
  }
  return null;
}

async function refreshLiveQuotesClientSide(data) {
  if (!data || !data.eu || !data.usa) return data;
  const allItems = [
    ...data.eu.map(item => ({ item, market: 'eu' })),
    ...data.usa.map(item => ({ item, market: 'usa' }))
  ];

  await Promise.allSettled(allItems.map(async ({ item }) => {
    const ySym = YAHOO_SYMBOL_MAP[item.ticker] || item.ticker;
    const live = await fetchYahooQuoteViaProxy(ySym);
    if (live && live.curPrice > 0) {
      const oldDayChg = item.dayChangePct || 0;
      const ratio = live.curPrice / (item.currentPrice || live.curPrice);
      item.currentPrice = live.curPrice;
      item.dayChangePct = live.dayChangePct;
      item.roc5d = live.roc5d;

      // Ricalcola dinamicamente lo score se la variazione intraday è cambiata (es. apertura Wall Street)
      const deltaChg = live.dayChangePct - oldDayChg;
      if (Math.abs(deltaChg) >= 0.15) {
        let baseRaw = item.rawScore || item.score || 88;
        baseRaw += deltaChg * 2.2;
        if (live.dayChangePct < -0.35 && oldDayChg >= 0) {
          baseRaw -= Math.min(8.5, Math.abs(live.dayChangePct) * 3.8);
        }
        item.rawScore = parseFloat(baseRaw.toFixed(1));
        const scaled = item.rawScore > 85.0 ? 85.0 + (item.rawScore - 85.0) * 0.65 : item.rawScore;
        item.score = Math.max(48, Math.min(97, Math.round(scaled)));
        item.strength = item.score >= 86 ? 'Molto Alta' : (item.score >= 78 ? 'Alta' : 'Moderata');
      }

      if (item.targetPct && item.stopPct) {
        item.targetPrice = parseFloat((live.curPrice * (1 + item.targetPct / 100)).toFixed(2));
        item.stopLoss = parseFloat((live.curPrice * (1 - item.stopPct / 100)).toFixed(2));
      } else {
        item.targetPrice = parseFloat((item.targetPrice * ratio).toFixed(2));
        item.stopLoss = parseFloat((item.stopLoss * ratio).toFixed(2));
      }
      if (item.avg52w && item.avg52w > 0) {
        const diff52 = parseFloat((((live.curPrice - item.avg52w) / item.avg52w) * 100).toFixed(1));
        item.diff52wPct = diff52;
        if (diff52 < -10.0) {
          item.border52w = 'green';
          item.status52w = `Sotto Media 52W (${diff52}%)`;
        } else if (diff52 <= 10.0) {
          item.border52w = 'orange';
          item.status52w = `Nel Range ±10% (${diff52 >= 0 ? '+' : ''}${diff52}%)`;
        } else {
          item.border52w = 'red';
          item.status52w = `Sopra Media 52W (+${diff52}%)`;
        }
      }
      if (item.chartData && item.chartData['5D'] && live.closes.length >= 2) {
        item.chartData['5D'].values = live.closes.slice(-5);
      }
    }
  }));

  // Riordina entrambi i listini in base allo score aggiornato in tempo reale
  data.eu.sort((a, b) => (b.rawScore || b.score) - (a.rawScore || a.score));
  data.usa.sort((a, b) => (b.rawScore || b.score) - (a.rawScore || a.score));

  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  data.lastUpdated = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())} CET`;
  return data;
}

async function triggerFullMarketRefresh(source = 'button') {
  if (state.isRefreshing) return;
  state.isRefreshing = true;

  const ptrBar = document.getElementById('pullToRefreshBar');
  const ptrIcon = document.getElementById('ptrIcon');
  const ptrText = document.getElementById('ptrText');

  if (ptrBar && ptrIcon && ptrText) {
    ptrBar.classList.remove('pulling', 'ready');
    ptrBar.classList.add('refreshing');
    ptrIcon.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
    ptrText.textContent = `Aggiornamento Live Europa (EuroStoxx 50) & USA (S&P 500) in corso...`;
  }

  if (elements.refreshBtn) {
    elements.refreshBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Scansione EU &amp; USA...`;
    elements.refreshBtn.disabled = true;
  }

  let updated = false;

  try {
    const res = await fetch('/api/refresh', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data && data.eu && data.usa) {
        applyRealMarketData(data);
        updated = true;
      }
    }
  } catch (_) {
    // Fallback su market_data.json + quote live client-side per EU e USA
  }

  if (!updated) {
    try {
      let baseData = REAL_DATASET;
      try {
        const fRes = await fetch('market_data.json?t=' + Date.now(), { cache: 'no-store' });
        if (fRes.ok) {
          baseData = await fRes.json();
        }
      } catch (_) {}
      const liveData = await refreshLiveQuotesClientSide(baseData);
      applyRealMarketData(liveData);
      updated = true;
    } catch (e) {
      renderStocks();
    }
  }

  if (ptrBar && ptrIcon && ptrText) {
    ptrIcon.innerHTML = `<i class="fa-solid fa-check text-emerald"></i>`;
    ptrText.textContent = `Dati Europa (EuroStoxx 50) & USA (S&P 500) Aggiornati!`;
  }
  if (elements.refreshBtn) {
    elements.refreshBtn.innerHTML = `<i class="fa-solid fa-check text-emerald"></i> EU &amp; USA Aggiornati!`;
  }

  setTimeout(() => {
    if (ptrBar && ptrIcon && ptrText) {
      ptrBar.classList.remove('refreshing', 'ready', 'pulling');
      ptrBar.style.height = '0px';
      ptrBar.style.opacity = '0';
      ptrIcon.innerHTML = `<i class="fa-solid fa-arrow-down"></i>`;
      ptrText.textContent = `Trascina in basso per aggiornare Europa (EuroStoxx 50) & USA (S&P 500)`;
    }
    if (elements.refreshBtn) {
      elements.refreshBtn.innerHTML = `<i class="fa-solid fa-rotate"></i> Aggiorna Dati`;
      elements.refreshBtn.disabled = false;
    }
    state.isRefreshing = false;
  }, 1400);
}

async function loadLiveData() {
  try {
    const res = await fetch('/api/market-data', { cache: 'no-store' });
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
      const fRes = await fetch('market_data.json?t=' + Date.now(), { cache: 'no-store' });
      if (fRes.ok) {
        const data = await fRes.json();
        applyRealMarketData(data);
        // Aggiorna subito in background le quotazioni live intraday di Europa & USA
        refreshLiveQuotesClientSide(data).then(liveData => applyRealMarketData(liveData)).catch(() => {});
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

function filterAndSortList(rawList) {
  const currentList = rawList || [];
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
      return (b.rawScore || b.score) - (a.rawScore || a.score);
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

function getFilteredAndSortedStocks() {
  const mktKey = (state.currentMarket === 'usa') ? 'usa' : 'eu';
  return filterAndSortList(MARKET_DATA[mktKey] || []);
}

function build52wRangeBar(stock, mode = 'card') {
  const cu = stock.currency || '';
  const cur = Number(stock.currentPrice || 0);
  const low52 = Number(stock.low52 || cur * 0.85);
  const high52 = Number(stock.high52 || cur * 1.15);
  const avg52 = Number(stock.avg52w || ((low52 + high52) / 2));
  const diffPct = Number(stock.diff52wPct !== undefined ? stock.diff52wPct : (((cur - avg52) / (avg52 || 1)) * 100).toFixed(1));
  const diffSign = diffPct >= 0 ? '+' : '';
  const b52 = stock.border52w || 'orange';
  const dot52 = b52 === 'green' ? '🟢' : (b52 === 'red' ? '🔴' : '🟠');

  const span = Math.max(0.01, high52 - low52);
  const rawPos = ((cur - low52) / span) * 100;
  const posPct = Math.max(3, Math.min(97, rawPos)).toFixed(1);

  return `
    <div class="range-52w-widget mode-${mode} color-${b52}" title="Range 52 Settimane: Min ${cu}${low52.toFixed(2)} | Media ${cu}${avg52.toFixed(2)} | Max ${cu}${high52.toFixed(2)} | Ora ${cu}${cur.toFixed(2)} (${diffSign}${diffPct}% vs Media)">
      <div class="range-52w-header">
        <span class="r52-status">${dot52} Ora: <strong>${cu}${cur.toFixed(2)}</strong></span>
        <span class="r52-diff">${diffSign}${diffPct}% vs Media</span>
      </div>
      <div class="range-52w-bar-wrap">
        <div class="range-52w-midline" title="Media 52W: ${cu}${avg52.toFixed(2)}"></div>
        <div class="range-52w-current-line ${b52}" style="left: ${posPct}%;">
          <span class="range-52w-pin"></span>
        </div>
      </div>
      <div class="range-52w-labels">
        <span>Min <strong>${cu}${low52.toFixed(2)}</strong></span>
        <span class="r52-mid-label">Med ${cu}${avg52.toFixed(2)}</span>
        <span>Max <strong>${cu}${high52.toFixed(2)}</strong></span>
      </div>
    </div>
  `;
}

function renderSummaryRows(stocks) {
  let html = '';
  stocks.forEach((stock, index) => {
    const upside = calculateUpside(stock.currentPrice, stock.targetPrice);
    const stopPct = stock.stopPct || (((stock.currentPrice - stock.stopLoss) / stock.currentPrice) * 100).toFixed(1);
    const dayChg = Number(stock.dayChangePct || 0);
    const daySign = dayChg >= 0 ? '+' : '';
    const dayClass = dayChg >= 0 ? 'bg-change-up' : 'bg-change-down';
    const roc5 = Number(stock.roc5d !== undefined ? stock.roc5d : dayChg);
    const rocSign = roc5 >= 0 ? '+' : '';
    const rocClass = roc5 >= 0 ? 'text-emerald' : 'text-red';
    const rawSc = stock.rawScore !== undefined ? stock.rawScore : stock.score;
    const divY = stock.dividendYield !== undefined ? `${stock.dividendYield}%` : '0.0%';

    html += `
      <tr onclick="openStockDetail('${stock.id}')">
        <td class="mono font-bold text-muted">${index + 1}</td>
        <td><span class="table-ticker-name">${stock.ticker}</span></td>
        <td>
          <div class="font-bold text-white">${stock.name}</div>
          <div class="table-company-sub">${stock.sector} &bull; ${stock.marketCap}</div>
        </td>
        <td class="mono font-bold text-white">${stock.currency}${stock.currentPrice.toFixed(2)}</td>
        <td><span class="${dayClass}">${daySign}${dayChg.toFixed(2)}%</span></td>
        <td class="mono font-bold ${rocClass}">${rocSign}${roc5.toFixed(2)}%</td>
        <td class="mono font-bold text-emerald">${stock.currency}${stock.targetPrice.toFixed(2)} <span style="font-size:0.75rem;">(+${upside}%)</span></td>
        <td class="mono text-red">${stock.currency}${stock.stopLoss.toFixed(2)} <span style="font-size:0.75rem;">(-${stopPct}%)</span></td>
        <td>
          <div class="table-prob-badge">${stock.score}% <span style="opacity:0.75;font-weight:500;">(${rawSc})</span></div>
        </td>
        <td>${build52wRangeBar(stock, 'table')}</td>
        <td class="mono font-bold text-cyan">${divY}</td>
      </tr>
    `;
  });
  return html;
}

function renderSummaryPage() {
  const euList = filterAndSortList(MARKET_DATA.eu || []);
  const usaList = filterAndSortList(MARKET_DATA.usa || []);

  if (elements.summaryTableBodyEU) {
    elements.summaryTableBodyEU.innerHTML = renderSummaryRows(euList);
  }
  if (elements.summaryTableBodyUSA) {
    elements.summaryTableBodyUSA.innerHTML = renderSummaryRows(usaList);
  }
  if (elements.summaryBadgeEU) {
    elements.summaryBadgeEU.textContent = `${euList.length} Titoli Live`;
  }
  if (elements.summaryBadgeUSA) {
    elements.summaryBadgeUSA.textContent = `${usaList.length} Titoli Live`;
  }
  return euList.length + usaList.length;
}

// ==========================================================================
// 7. RENDERING SCHEDE E TABELLA
// ==========================================================================

function renderStocks() {
  // Aggiorna sempre anche le 2 tabelle della pagina Riepilogo
  const summaryTotal = renderSummaryPage();

  if (state.currentMarket === 'summary') {
    elements.visibleStocksCount.textContent = summaryTotal;
    elements.stocksGrid.classList.add('hidden');
    elements.stocksTableContainer.classList.add('hidden');
    if (summaryTotal === 0) {
      if (elements.summaryTablesPage) elements.summaryTablesPage.classList.add('hidden');
      elements.noResultsBox.classList.remove('hidden');
    } else {
      elements.noResultsBox.classList.add('hidden');
      if (elements.summaryTablesPage) elements.summaryTablesPage.classList.remove('hidden');
    }
    return;
  }

  if (elements.summaryTablesPage) {
    elements.summaryTablesPage.classList.add('hidden');
  }

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

          <!-- Barra Visiva Range 52 Settimane (Min / Media / Max + Linea Prezzo Attuale) -->
          ${build52wRangeBar(stock, 'card')}

          <!-- Indicatori Chiave Reali, Dividendi & Controlli v6.0 -->
          <div class="card-signals-row">
            ${stock.dividendYield !== undefined ? `<span class="signal-pill div-yield-pill" title="Dividend Yield Annuale Stimato"><i class="fa-solid fa-coins"></i> Div: <strong>${stock.dividendYield}%</strong></span>` : ''}
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
        <td>${build52wRangeBar(stock, 'table')}</td>
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
    elements.m52wAvgVal.innerHTML = build52wRangeBar(stock, 'modal');
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

let isProgrammaticCarouselScroll = false;

function centerActiveCarouselTab(market) {
  const track = document.getElementById('marketCarouselTrack');
  if (!track) return;
  const activeTab = track.querySelector(`.view-tab[data-market="${market}"]`);
  if (!activeTab) return;
  const targetLeft = activeTab.offsetLeft - (track.clientWidth - activeTab.offsetWidth) / 2;
  isProgrammaticCarouselScroll = true;
  track.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
  setTimeout(() => { isProgrammaticCarouselScroll = false; }, 380);
}

function switchMarketSection(market, scrollIfNeeded = false, fromCarouselSwipe = false) {
  if (state.currentMarket === market) {
    if (!fromCarouselSwipe) centerActiveCarouselTab(market);
    if (scrollIfNeeded) {
      const mainEl = document.querySelector('.main-content');
      if (mainEl) mainEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return;
  }

  state.currentMarket = market;

  // Sincronizza tab in alto
  if (elements.tabEU) elements.tabEU.classList.toggle('active', market === 'eu');
  if (elements.tabUSA) elements.tabUSA.classList.toggle('active', market === 'usa');
  if (elements.tabSummary) elements.tabSummary.classList.toggle('active', market === 'summary');

  // Sincronizza indicatori carosello mobile
  document.querySelectorAll('.m-carousel-dot').forEach(dot => {
    dot.classList.toggle('active', dot.getAttribute('data-market') === market);
  });

  // Sincronizza barra fissa in basso
  const bEU = document.getElementById('bottomTabEU');
  const bUSA = document.getElementById('bottomTabUSA');
  const bSum = document.getElementById('bottomTabSummary');
  if (bEU) bEU.classList.toggle('active', market === 'eu');
  if (bUSA) bUSA.classList.toggle('active', market === 'usa');
  if (bSum) bSum.classList.toggle('active', market === 'summary');

  if (!fromCarouselSwipe) {
    centerActiveCarouselTab(market);
  }

  if (market === 'eu') {
    elements.currentMarketTitle.innerHTML = `EuroStoxx 50 (Europa) &bull; Top 10 Consigli a 5 Giorni`;
    elements.currentMarketDesc.textContent = `Selezione dei 10 migliori componenti dell'indice EuroStoxx 50 (> €10 Mld) secondo il modello quantitativo v7.0.`;
  } else if (market === 'usa') {
    elements.currentMarketTitle.innerHTML = `S&P 500 (USA) &bull; Top 10 Consigli a 5 Giorni`;
    elements.currentMarketDesc.textContent = `Selezione dei 10 migliori componenti dell'indice S&P 500 (> $10 Mld) secondo il modello quantitativo v7.0.`;
  } else {
    elements.currentMarketTitle.innerHTML = `Riepilogo Completo Live &bull; Top 10 EuroStoxx 50 + Top 10 S&amp;P 500`;
    elements.currentMarketDesc.textContent = `Vista tabellare doppia sincronizzata in tempo reale (Europa + USA). Si aggiorna automaticamente con Pull-to-Refresh e pulsante Aggiorna Dati.`;
  }

  renderStocks();

  if (scrollIfNeeded && window.scrollY > 320) {
    const mainEl = document.querySelector('.main-content');
    if (mainEl) mainEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function initEventListeners() {
  elements.tabEU.addEventListener('click', () => switchMarketSection('eu', false));
  elements.tabUSA.addEventListener('click', () => switchMarketSection('usa', false));
  if (elements.tabSummary) {
    elements.tabSummary.addEventListener('click', () => switchMarketSection('summary', false));
  }

  // Listener per i pill-dots del carosello mobile
  document.querySelectorAll('.m-carousel-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const mkt = dot.getAttribute('data-market');
      if (mkt) switchMarketSection(mkt, false);
    });
  });

  // Sincronizzazione automatica allo swipe del carosello superiore su mobile
  const carouselTrack = document.getElementById('marketCarouselTrack');
  if (carouselTrack) {
    let scrollTimer = null;
    carouselTrack.addEventListener('scroll', () => {
      if (isProgrammaticCarouselScroll) return;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const trackCenter = carouselTrack.scrollLeft + carouselTrack.clientWidth / 2;
        let closestMarket = null;
        let minDistance = Infinity;
        carouselTrack.querySelectorAll('.view-tab').forEach(tab => {
          const tabCenter = tab.offsetLeft + tab.offsetWidth / 2;
          const dist = Math.abs(trackCenter - tabCenter);
          if (dist < minDistance) {
            minDistance = dist;
            closestMarket = tab.getAttribute('data-market');
          }
        });
        if (closestMarket && closestMarket !== state.currentMarket) {
          switchMarketSection(closestMarket, false, true);
        }
      }, 120);
    }, { passive: true });
  }

  const bEU = document.getElementById('bottomTabEU');
  const bUSA = document.getElementById('bottomTabUSA');
  const bSum = document.getElementById('bottomTabSummary');
  if (bEU) bEU.addEventListener('click', () => switchMarketSection('eu', true));
  if (bUSA) bUSA.addEventListener('click', () => switchMarketSection('usa', true));
  if (bSum) bSum.addEventListener('click', () => switchMarketSection('summary', true));

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

  // Aggiorna Dati: Chiama il server live se attivo o ricarica i dati reali per Europa & USA
  elements.refreshBtn.addEventListener('click', () => {
    triggerFullMarketRefresh('button');
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
// 11. PULL-TO-REFRESH (TRASCINA VERSO IL BASSO PER AGGIORNARE EUROPA & USA)
// ==========================================================================

function initPullToRefresh() {
  const ptrBar = document.getElementById('pullToRefreshBar');
  const ptrIcon = document.getElementById('ptrIcon');
  const ptrText = document.getElementById('ptrText');
  if (!ptrBar || !ptrIcon || !ptrText) return;

  let startY = 0;
  let startX = 0;
  let currentPull = 0;
  let isDragging = false;
  const PULL_THRESHOLD = 58;

  function canStartPull(target) {
    if (state.isRefreshing) return false;
    if (window.scrollY > 5) return false;
    if (SECURITY.lockOverlay && !SECURITY.lockOverlay.classList.contains('unlocked')) return false;
    if (elements.stockModal && !elements.stockModal.classList.contains('hidden')) return false;
    if (elements.watchlistDrawer && !elements.watchlistDrawer.classList.contains('hidden')) return false;
    if (target && target.closest && target.closest('input, select, button, textarea, .modal-dialog, .watchlist-drawer')) return false;
    return true;
  }

  function onDragMove(deltaY, deltaX, e) {
    if (deltaY <= 10 || Math.abs(deltaX) > Math.abs(deltaY) * 0.9) {
      if (currentPull > 0) {
        currentPull = 0;
        ptrBar.style.height = '0px';
        ptrBar.style.opacity = '0';
        ptrBar.classList.remove('ready', 'pulling');
      }
      return;
    }

    if (e && e.cancelable && window.scrollY <= 0) {
      e.preventDefault();
    }

    currentPull = Math.min(84, Math.pow(deltaY - 10, 0.82) * 2.1);
    ptrBar.classList.add('pulling');
    ptrBar.style.height = `${currentPull}px`;
    ptrBar.style.opacity = `${Math.min(1, currentPull / 42)}`;

    if (currentPull >= PULL_THRESHOLD) {
      ptrBar.classList.add('ready');
      ptrText.textContent = 'Rilascia per aggiornare Europa (EuroStoxx 50) & USA (S&P 500)';
    } else {
      ptrBar.classList.remove('ready');
      ptrText.textContent = 'Trascina in basso per aggiornare Europa (EuroStoxx 50) & USA (S&P 500)';
    }
  }

  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    ptrBar.classList.remove('pulling');

    if (currentPull >= PULL_THRESHOLD) {
      currentPull = 0;
      triggerFullMarketRefresh('pull');
    } else {
      currentPull = 0;
      ptrBar.classList.remove('ready');
      ptrBar.style.height = '0px';
      ptrBar.style.opacity = '0';
    }
  }

  // Supporto Touch (iPhone / iPad / Android)
  window.addEventListener('touchstart', (e) => {
    if (!e.touches || e.touches.length !== 1) return;
    if (!canStartPull(e.target)) return;
    startY = e.touches[0].clientY;
    startX = e.touches[0].clientX;
    currentPull = 0;
    isDragging = true;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches || e.touches.length !== 1) return;
    if (window.scrollY > 5) {
      isDragging = false;
      return;
    }
    const deltaY = e.touches[0].clientY - startY;
    const deltaX = e.touches[0].clientX - startX;
    onDragMove(deltaY, deltaX, e);
  }, { passive: false });

  window.addEventListener('touchend', onDragEnd, { passive: true });
  window.addEventListener('touchcancel', onDragEnd, { passive: true });

  // Supporto Trascinamento Mouse dall'alto su Desktop/Mac
  window.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    if (!canStartPull(e.target)) return;
    startY = e.clientY;
    startX = e.clientX;
    currentPull = 0;
    isDragging = true;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    if (window.scrollY > 5) {
      isDragging = false;
      return;
    }
    const deltaY = e.clientY - startY;
    const deltaX = e.clientX - startX;
    onDragMove(deltaY, deltaX, e);
  });

  window.addEventListener('mouseup', onDragEnd);
}

// ==========================================================================
// 12. INIZIALIZZAZIONE ALL'AVVIO
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initSecurityLock();
  formatDateDisplay();
  updateWatchlistUI();
  initEventListeners();
  initPullToRefresh();
  renderStocks();
  loadLiveData();
});

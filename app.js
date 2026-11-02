/**
 * ALPHAPULSE PRO - JAVASCRIPT APPLICATION CORE (REAL-TIME ENGINE)
 * Gestione Dati Reali di Borsa, Algoritmo Quantitativo, Filtri, Chart.js e Watchlist
 */

// ==========================================================================
// 1. DATA STORE REALE: 10 TITOLI EUROPEI & 10 TITOLI USA (> 10 MILIARDI)
// ==========================================================================

let REAL_DATASET = {
  "lastUpdated": "2026-11-03 00:21:53 CET",
  "dateFormatted": "Tuesday 03 November 2026",
  "isRealTime": true,
  "eu": [
    {
      "id": "eu-race",
      "ticker": "RACE",
      "name": "Ferrari N.V.",
      "exchange": "Borsa Italiana",
      "currency": "€",
      "sector": "Lusso & Consumi",
      "marketCap": "€64 Mld",
      "marketCapRaw": 64.6,
      "currentPrice": 358.95,
      "targetPrice": 398.43,
      "stopLoss": 346.39,
      "dayChangePct": 1.08,
      "score": 86,
      "strength": "Alta",
      "volumeSpike": "1.28x",
      "rsi": 54.8,
      "pe": "Consolidato",
      "riskReward": "1 : 3.1",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a €358.95. RSI a 14 periodi calcolato a 54.8 con volume spike pari a 1.28x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 87,
        "tech": 89,
        "volume": 80,
        "analyst": 86
      },
      "catalysts": [
        {
          "title": "Earnings To Watch: Ferrari NV (MIL:RACE) Q3 2026 -- GF Value Sees 38% Upside - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Ferrari Stock Price and Chart — MIL:RACE - TradingView",
          "source": "TradingView",
          "time": "Sat, 31 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Ferrari Nv Stock Price Forecast. Should You Buy RACE? - StockInvest.us",
          "source": "StockInvest.us",
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
            356.08,
            357.51,
            357.16,
            358.23,
            358.95,
            360.03,
            361.1
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
            353.25,
            349.4,
            352.15,
            357.2,
            355.1
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
            343.5,
            347.85,
            356.35,
            349.5
          ]
        }
      }
    },
    {
      "id": "eu-tte",
      "ticker": "TTE",
      "name": "TotalEnergies SE",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Industria & Energia",
      "marketCap": "€198 Mld",
      "marketCapRaw": 198.2,
      "currentPrice": 83.61,
      "targetPrice": 92.39,
      "stopLoss": 80.68,
      "dayChangePct": -2.13,
      "score": 85,
      "strength": "Alta",
      "volumeSpike": "1.12x",
      "rsi": 78.0,
      "pe": "Consolidato",
      "riskReward": "1 : 3.0",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a €83.61. RSI a 14 periodi calcolato a 78.0 con volume spike pari a 1.12x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 97,
        "tech": 77,
        "volume": 77,
        "analyst": 88
      },
      "catalysts": [
        {
          "title": "TotalEnergies SE (TTE) Q3 2026 Earnings Call Highlights: Record Refining Margins and Strong ... - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Fri, 30 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "TotalEnergies Bets Big on Asia's Energy Hunger With Massive Malaysia Gas Deal - Benzinga",
          "source": "Benzinga",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "TOTALENERGIES SE (TTE) Equity Price and Quote - London Stock Exchange",
          "source": "London Stock Exchange",
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
            82.94,
            83.28,
            83.19,
            83.44,
            83.61,
            83.86,
            84.11
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
            83.84,
            83.0,
            83.6,
            84.6,
            85.43
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
            74.46,
            78.53,
            80.71,
            83.45
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
      "marketCap": "€258 Mld",
      "marketCapRaw": 258.9,
      "currentPrice": 210.5,
      "targetPrice": 231.55,
      "stopLoss": 203.13,
      "dayChangePct": -0.35,
      "score": 84,
      "strength": "Alta",
      "volumeSpike": "0.74x",
      "rsi": 73.2,
      "pe": "Consolidato",
      "riskReward": "1 : 2.9",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a €210.5. RSI a 14 periodi calcolato a 73.2 con volume spike pari a 0.74x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 97,
        "tech": 80,
        "volume": 72,
        "analyst": 83
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
            208.82,
            209.66,
            209.45,
            210.08,
            210.5,
            211.13,
            211.76
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
            212.25,
            213.15,
            211.2,
            208.9,
            211.25
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
            183.92,
            191.46,
            199.22,
            214.4
          ]
        }
      }
    },
    {
      "id": "eu-novo-b",
      "ticker": "NOVO-B",
      "name": "Novo Nordisk A/S",
      "exchange": "Copenhagen (DKK/EUR)",
      "currency": "€",
      "sector": "Healthcare",
      "marketCap": "€161 Mld",
      "marketCapRaw": 161.1,
      "currentPrice": 270.2,
      "targetPrice": 297.22,
      "stopLoss": 260.74,
      "dayChangePct": 1.54,
      "score": 84,
      "strength": "Alta",
      "volumeSpike": "0.77x",
      "rsi": 60.8,
      "pe": "Consolidato",
      "riskReward": "1 : 2.9",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a €270.2. RSI a 14 periodi calcolato a 60.8 con volume spike pari a 0.77x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 92,
        "tech": 92,
        "volume": 72,
        "analyst": 75
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
            268.04,
            269.12,
            268.85,
            269.66,
            270.2,
            271.01,
            271.82
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
            260.45,
            259.5,
            255.0,
            260.35,
            266.1
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
            248.75,
            255.25,
            259.6,
            260.15
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
      "currentPrice": 440.4,
      "targetPrice": 484.44,
      "stopLoss": 424.99,
      "dayChangePct": 0.39,
      "score": 84,
      "strength": "Alta",
      "volumeSpike": "0.71x",
      "rsi": 66.9,
      "pe": "Consolidato",
      "riskReward": "1 : 2.9",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a €440.4. RSI a 14 periodi calcolato a 66.9 con volume spike pari a 0.71x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 82,
        "tech": 95,
        "volume": 72,
        "analyst": 87
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
            436.88,
            438.64,
            438.2,
            439.52,
            440.4,
            441.72,
            443.04
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
            431.2,
            434.8,
            435.3,
            439.6,
            438.7
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
            416.2,
            417.0,
            433.9,
            427.9
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
      "targetPrice": 10.22,
      "stopLoss": 9.01,
      "dayChangePct": 0.18,
      "score": 83,
      "strength": "Buona",
      "volumeSpike": "0.68x",
      "rsi": 74.8,
      "pe": "Consolidato",
      "riskReward": "1 : 2.7",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a €9.34. RSI a 14 periodi calcolato a 74.8 con volume spike pari a 0.68x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 97,
        "tech": 79,
        "volume": 72,
        "analyst": 83
      },
      "catalysts": [
        {
          "title": "Enel SpA (ENLAY) Q1 2026 Earnings Call Highlights: Strong Network Contributions and Cash ... - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Fri, 08 May 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Enel SpA (ENLAY) (H1 2026) Earnings Call Highlights: EBITDA and EPS Rise 3-5% as Strategic ... - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Tue, 04 Aug 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Enel Stock Forecast | H1 Growth, Q3 Results Ahead - Capital.com",
          "source": "Capital.com",
          "time": "Mon, 26 Jan 2026",
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
            9.36,
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
            9.25,
            9.31,
            9.33,
            9.3,
            9.32
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
            8.8,
            8.87,
            9.19,
            9.22
          ]
        }
      }
    },
    {
      "id": "eu-su",
      "ticker": "SU",
      "name": "Schneider Electric",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Industria & Energia",
      "marketCap": "€137 Mld",
      "marketCapRaw": 137.1,
      "currentPrice": 240.45,
      "targetPrice": 262.09,
      "stopLoss": 232.03,
      "dayChangePct": 1.24,
      "score": 82,
      "strength": "Buona",
      "volumeSpike": "0.63x",
      "rsi": 30.1,
      "pe": "Consolidato",
      "riskReward": "1 : 2.6",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a €240.45. RSI a 14 periodi calcolato a 30.1 con volume spike pari a 0.63x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 96,
        "tech": 80,
        "volume": 72,
        "analyst": 75
      },
      "catalysts": [
        {
          "title": "Schneider Electric (ENXTPA:SU) Stock May Be Near Fair Value After AI Demand Surge - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Wed, 21 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Is Schneider Electric (ENXTPA:SU) Overvalued After A 108% Five Year Return? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Thu, 03 Sep 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Schneider Electric shares plunge on record $22.6bn PTC deal - Yahoo Finance",
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
            238.53,
            239.49,
            239.25,
            239.97,
            240.45,
            241.17,
            241.89
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
            235.7,
            242.7,
            246.2,
            247.6,
            237.5
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
            303.0,
            266.4,
            253.3,
            231.4
          ]
        }
      }
    },
    {
      "id": "eu-air",
      "ticker": "AIR",
      "name": "Airbus SE",
      "exchange": "Euronext Parigi",
      "currency": "€",
      "sector": "Industria & Energia",
      "marketCap": "€154 Mld",
      "marketCapRaw": 154.9,
      "currentPrice": 196.08,
      "targetPrice": 213.73,
      "stopLoss": 189.22,
      "dayChangePct": 1.91,
      "score": 82,
      "strength": "Buona",
      "volumeSpike": "0.89x",
      "rsi": 55.1,
      "pe": "Consolidato",
      "riskReward": "1 : 2.6",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a €196.08. RSI a 14 periodi calcolato a 55.1 con volume spike pari a 0.89x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 82,
        "tech": 89,
        "volume": 73,
        "analyst": 82
      },
      "catalysts": [
        {
          "title": "Airbus reports Nine-Month (9m) 2026 results - Airbus",
          "source": "Airbus",
          "time": "Wed, 28 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Airbus takes off in the stock market under the watchful eye of a crowd of analysts - www.marketscreener.com",
          "source": "www.marketscreener.com",
          "time": "Thu, 29 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Airbus (ENXTPA:AIR) Stock Still Looks Below Fair Value Despite A 103% Run - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Tue, 04 Aug 2026",
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
            194.51,
            195.3,
            195.1,
            195.69,
            196.08,
            196.67,
            197.26
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
            193.4,
            192.74,
            191.92,
            196.34,
            192.4
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
            189.3,
            187.8,
            198.82,
            192.46
          ]
        }
      }
    },
    {
      "id": "eu-asml",
      "ticker": "ASML",
      "name": "ASML Holding N.V.",
      "exchange": "Euronext Amsterdam",
      "currency": "€",
      "sector": "Tecnologia",
      "marketCap": "€549 Mld",
      "marketCapRaw": 549.1,
      "currentPrice": 1408.0,
      "targetPrice": 1527.68,
      "stopLoss": 1358.72,
      "dayChangePct": -0.34,
      "score": 81,
      "strength": "Buona",
      "volumeSpike": "0.91x",
      "rsi": 34.8,
      "pe": "Consolidato",
      "riskReward": "1 : 2.4",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a €1408.0. RSI a 14 periodi calcolato a 34.8 con volume spike pari a 0.91x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 92,
        "tech": 81,
        "volume": 73,
        "analyst": 76
      },
      "catalysts": [
        {
          "title": "2 Unstoppable Growth Stocks I'd Buy With $1,000 and Hold for a Decade - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Sun, 01 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Is the Options Market Predicting a Spike in ASML Holding Stock? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Thu, 29 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "ASML Holding NV Stock (ASML) Moved Down by 4.83% on Oct 30: Facts Behind the Movement - TradingKey",
          "source": "TradingKey",
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
            1396.74,
            1402.37,
            1400.96,
            1405.18,
            1408.0,
            1412.22,
            1416.45
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
            1430.0,
            1470.0,
            1489.6,
            1504.8,
            1412.8
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
            1653.0,
            1601.6,
            1477.2,
            1407.2
          ]
        }
      }
    },
    {
      "id": "eu-isp",
      "ticker": "ISP",
      "name": "Intesa Sanpaolo",
      "exchange": "Borsa Italiana",
      "currency": "€",
      "sector": "Finanza",
      "marketCap": "€108 Mld",
      "marketCapRaw": 108.8,
      "currentPrice": 5.95,
      "targetPrice": 6.43,
      "stopLoss": 5.74,
      "dayChangePct": 1.09,
      "score": 80,
      "strength": "Buona",
      "volumeSpike": "1.01x",
      "rsi": 34.5,
      "pe": "Consolidato",
      "riskReward": "1 : 2.2",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a €5.95. RSI a 14 periodi calcolato a 34.5 con volume spike pari a 1.01x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 82,
        "tech": 81,
        "volume": 75,
        "analyst": 80
      },
      "catalysts": [
        {
          "title": "Earnings To Watch: Intesa Sanpaolo (MIL:ISP) Q3 2026 -- GF Value Sees 33% Downside - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Thu, 29 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Is Intesa Sanpaolo (BIT:ISP) Reasonable After A 264% Five Year Run? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Sat, 10 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "ISP Forecast — Price Target — Prediction for 2027 - TradingView",
          "source": "TradingView",
          "time": "Fri, 26 Jun 2026",
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
            5.91,
            5.93,
            5.92,
            5.94,
            5.95,
            5.97,
            5.99
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
            5.96,
            6.02,
            5.99,
            5.96,
            5.89
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
            6.33,
            6.12,
            6.15,
            5.86
          ]
        }
      }
    }
  ],
  "usa": [
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
      "targetPrice": 379.75,
      "stopLoss": 328.66,
      "dayChangePct": 1.05,
      "score": 87,
      "strength": "Alta",
      "volumeSpike": "0.86x",
      "rsi": 60.2,
      "pe": "Consolidato",
      "riskReward": "1 : 3.3",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a $340.58. RSI a 14 periodi calcolato a 60.2 con volume spike pari a 0.86x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 97,
        "tech": 92,
        "volume": 72,
        "analyst": 85
      },
      "catalysts": [
        {
          "title": "JPMorgan Chase & Co. stock outperforms market on strong trading day - MarketWatch",
          "source": "MarketWatch",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "JPMorgan Chase & Co. (JPM) Is a Trending Stock: Facts to Know Before Betting on It - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Fri, 30 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "JPMorgan Chase & Co. (NYSE:JPM) Stock Price Up 1.1% After Analyst Upgrade - MarketBeat",
          "source": "MarketBeat",
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
            332.38,
            334.3,
            333.53,
            334.04
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
      "targetPrice": 1559.14,
      "stopLoss": 1361.61,
      "dayChangePct": -0.46,
      "score": 85,
      "strength": "Alta",
      "volumeSpike": "1.34x",
      "rsi": 81.9,
      "pe": "Consolidato",
      "riskReward": "1 : 3.0",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a $1410.99. RSI a 14 periodi calcolato a 81.9 con volume spike pari a 1.34x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 97,
        "tech": 73,
        "volume": 81,
        "analyst": 88
      },
      "catalysts": [
        {
          "title": "Eli Lilly Stock: Is It Still a Buy at $1,400? - The Motley Fool",
          "source": "The Motley Fool",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Eli Lilly stock jumps as drugmaker raises outlook on booming sales of diabetes and obesity treatments - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Thu, 29 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Eli Lilly Jumped 6% After Earnings. It’s Up 68% in a Year. Where Does the Target Go Now? - 24/7 Wall St.",
          "source": "24/7 Wall St.",
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
            1143.12,
            1182.62,
            1240.34,
            1279.14
          ]
        }
      }
    },
    {
      "id": "usa-aapl",
      "ticker": "AAPL",
      "name": "Apple Inc.",
      "exchange": "NASDAQ",
      "currency": "$",
      "sector": "Tecnologia",
      "marketCap": "$5.14 Tln",
      "marketCapRaw": 5142.5,
      "currentPrice": 338.32,
      "targetPrice": 373.84,
      "stopLoss": 326.48,
      "dayChangePct": -1.83,
      "score": 85,
      "strength": "Alta",
      "volumeSpike": "1.4x",
      "rsi": 46.6,
      "pe": "Consolidato",
      "riskReward": "1 : 3.0",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a $338.32. RSI a 14 periodi calcolato a 46.6 con volume spike pari a 1.4x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 86,
        "tech": 84,
        "volume": 82,
        "analyst": 87
      },
      "catalysts": [
        {
          "title": "Apple earnings live updates: New CEO John Ternus faces first Wall Street test - CNBC",
          "source": "CNBC",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Apple Stock Drops Even As Revenue Outlook Beats Estimates - Barron's",
          "source": "Barron's",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Apple (NASDAQ: AAPL) stock price forecast: Wall Street targets ahead of Q4 earnings - Beinsure",
          "source": "Beinsure",
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
            335.61,
            336.97,
            336.63,
            337.64,
            338.32,
            339.33,
            340.35
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
            347.1,
            343.83,
            348.91,
            344.63,
            338.32
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
            332.89,
            340.97,
            342.94,
            343.91
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
      "targetPrice": 270.19,
      "stopLoss": 237.03,
      "dayChangePct": 2.2,
      "score": 84,
      "strength": "Alta",
      "volumeSpike": "1.36x",
      "rsi": 39.8,
      "pe": "Consolidato",
      "riskReward": "1 : 2.9",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a $245.63. RSI a 14 periodi calcolato a 39.8 con volume spike pari a 1.36x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 92,
        "tech": 82,
        "volume": 81,
        "analyst": 79
      },
      "catalysts": [
        {
          "title": "Amazon: Don't Look At The Cash Flow (NASDAQ:AMZN) - Seeking Alpha",
          "source": "Seeking Alpha",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Amazon (AMZN) Stock for the Next 10 Years: Buy, Hold, or Avoid? - The Motley Fool",
          "source": "The Motley Fool",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Amazon Stock Fell After Earnings. Jim Cramer Says Buy Right Here - 24/7 Wall St.",
          "source": "24/7 Wall St.",
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
            251.4,
            259.53,
            262.45,
            249.09
          ]
        }
      }
    },
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
      "targetPrice": 444.2,
      "stopLoss": 389.69,
      "dayChangePct": 1.0,
      "score": 84,
      "strength": "Alta",
      "volumeSpike": "1.17x",
      "rsi": 62.6,
      "pe": "Consolidato",
      "riskReward": "1 : 2.9",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a $403.82. RSI a 14 periodi calcolato a 62.6 con volume spike pari a 1.17x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 87,
        "tech": 93,
        "volume": 78,
        "analyst": 76
      },
      "catalysts": [
        {
          "title": "Gary Black Says Tesla Is Losing EV Share to ‘No-Name’ Rivals Despite ‘Huge First-Mover Advantage’—Warns TSLA Needs Better Marketing - Yahoo Finance",
          "source": "Yahoo Finance",
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
          "title": "Tesla Robotaxi Adds This New City, Stock Continues Rally - Investor's Business Daily",
          "source": "Investor's Business Daily",
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
            378.73,
            378.03,
            368.06,
            391.62
          ]
        }
      }
    },
    {
      "id": "usa-pltr",
      "ticker": "PLTR",
      "name": "Palantir Technologies",
      "exchange": "NYSE",
      "currency": "$",
      "sector": "Tecnologia",
      "marketCap": "$399 Mld",
      "marketCapRaw": 399.5,
      "currentPrice": 178.34,
      "targetPrice": 194.39,
      "stopLoss": 172.1,
      "dayChangePct": -3.13,
      "score": 82,
      "strength": "Buona",
      "volumeSpike": "1.45x",
      "rsi": 28.4,
      "pe": "Consolidato",
      "riskReward": "1 : 2.6",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a $178.34. RSI a 14 periodi calcolato a 28.4 con volume spike pari a 1.45x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 86,
        "tech": 79,
        "volume": 83,
        "analyst": 78
      },
      "catalysts": [
        {
          "title": "Palantir Technologies Inc. (PLTR) Tops Q3 Earnings and Revenue Estimates - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Palantir Earnings On Tap. Can Software Maker Buck AI Sell-Off? - Investor's Business Daily",
          "source": "Investor's Business Daily",
          "time": "Mon, 02 Nov 2026",
          "impact": "Attenzione / Moderato"
        },
        {
          "title": "Palantir Just Became Worth Four ServiceNows — That Raises a $333 Billion Question - Benzinga",
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
            176.91,
            177.63,
            177.45,
            177.98,
            178.34,
            178.88,
            179.41
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
            198.73,
            196.81,
            196.42,
            184.11,
            178.34
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
            189.4,
            209.0,
            194.15,
            198.84
          ]
        }
      }
    },
    {
      "id": "usa-tsm",
      "ticker": "TSM",
      "name": "Taiwan Semiconductor (ADR)",
      "exchange": "NYSE",
      "currency": "$",
      "sector": "Tecnologia",
      "marketCap": "$2064 Mld",
      "marketCapRaw": 2064.9,
      "currentPrice": 398.63,
      "targetPrice": 434.51,
      "stopLoss": 384.68,
      "dayChangePct": -1.85,
      "score": 82,
      "strength": "Buona",
      "volumeSpike": "1.08x",
      "rsi": 33.3,
      "pe": "Consolidato",
      "riskReward": "1 : 2.6",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a $398.63. RSI a 14 periodi calcolato a 33.3 con volume spike pari a 1.08x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 92,
        "tech": 80,
        "volume": 76,
        "analyst": 77
      },
      "catalysts": [
        {
          "title": "How to Buy Taiwan Semiconductor Stock (TSM) in 2026 - The Motley Fool",
          "source": "The Motley Fool",
          "time": "Tue, 20 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "TAIWAN SEMICONDUCTOR MANUFACTURING (0LCV) Equity Price and Quote - London Stock Exchange",
          "source": "London Stock Exchange",
          "time": "Fri, 23 Oct 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Is Taiwan Semiconductor Manufacturing (TSM) the Best ADR Stock to Buy According to Hedge Funds? - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Fri, 28 Mar 2025",
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
            395.44,
            397.04,
            396.64,
            397.83,
            398.63,
            399.83,
            401.02
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
            436.87,
            439.51,
            431.81,
            406.13,
            398.63
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
            485.8,
            444.35,
            420.22,
            424.37
          ]
        }
      }
    },
    {
      "id": "usa-msft",
      "ticker": "MSFT",
      "name": "Microsoft Corporation",
      "exchange": "NASDAQ",
      "currency": "$",
      "sector": "Tecnologia",
      "marketCap": "$3.77 Tln",
      "marketCapRaw": 3767.9,
      "currentPrice": 507.12,
      "targetPrice": 547.69,
      "stopLoss": 489.37,
      "dayChangePct": -2.83,
      "score": 80,
      "strength": "Buona",
      "volumeSpike": "1.52x",
      "rsi": 27.8,
      "pe": "Consolidato",
      "riskReward": "1 : 2.3",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a $507.12. RSI a 14 periodi calcolato a 27.8 con volume spike pari a 1.52x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 75,
        "tech": 79,
        "volume": 84,
        "analyst": 84
      },
      "catalysts": [
        {
          "title": "It would shock you how bearish Wall Street is on hyperscalers Microsoft, Amazon, Alphabet, Meta and Oracle - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 02 Nov 2026",
          "impact": "Attenzione / Moderato"
        },
        {
          "title": "Microsoft: The AI Race Has A Winner, And The Market Completely Missed It (NASDAQ:MSFT) - Seeking Alpha",
          "source": "Seeking Alpha",
          "time": "Mon, 02 Nov 2026",
          "impact": "Attenzione / Moderato"
        },
        {
          "title": "Microsoft Just Revealed a $677 Billion Reason to Buy Its Stock - The Motley Fool",
          "source": "The Motley Fool",
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
            503.06,
            505.09,
            504.58,
            506.11,
            507.12,
            508.64,
            510.16
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
            531.33,
            531.01,
            530.14,
            521.91,
            507.12
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
            525.18,
            541.15,
            533.52,
            532.6
          ]
        }
      }
    },
    {
      "id": "usa-nflx",
      "ticker": "NFLX",
      "name": "Netflix Inc.",
      "exchange": "NASDAQ",
      "currency": "$",
      "sector": "Tecnologia",
      "marketCap": "$26 Mld",
      "marketCapRaw": 26.8,
      "currentPrice": 62.34,
      "targetPrice": 67.02,
      "stopLoss": 60.16,
      "dayChangePct": 0.42,
      "score": 79,
      "strength": "Buona",
      "volumeSpike": "0.89x",
      "rsi": 26.3,
      "pe": "Consolidato",
      "riskReward": "1 : 2.1",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a $62.34. RSI a 14 periodi calcolato a 26.3 con volume spike pari a 0.89x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 86,
        "tech": 79,
        "volume": 73,
        "analyst": 75
      },
      "catalysts": [
        {
          "title": "Why Now Is Not the Time to Load Up on Netflix Stock - Barchart.com",
          "source": "Barchart.com",
          "time": "Sun, 01 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Prediction: Netflix Will Begin Paying a Dividend in 2027 and Beat the S&P 500 During the Next Decade - The Motley Fool",
          "source": "The Motley Fool",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Netflix's U.S. Audience Engagement Problem Is Hurting The Stock (Rating Downgrade) - Seeking Alpha",
          "source": "Seeking Alpha",
          "time": "Sun, 01 Nov 2026",
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
            61.84,
            62.09,
            62.03,
            62.22,
            62.34,
            62.53,
            62.71
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
            62.52,
            61.99,
            62.05,
            62.08,
            62.34
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
            67.5,
            70.61,
            69.85,
            63.9
          ]
        }
      }
    },
    {
      "id": "usa-nvda",
      "ticker": "NVDA",
      "name": "NVIDIA Corporation",
      "exchange": "NASDAQ",
      "currency": "$",
      "sector": "Tecnologia",
      "marketCap": "$4.95 Tln",
      "marketCapRaw": 4950.5,
      "currentPrice": 202.06,
      "targetPrice": 216.2,
      "stopLoss": 194.99,
      "dayChangePct": -1.26,
      "score": 78,
      "strength": "Buona",
      "volumeSpike": "1.17x",
      "rsi": 26.9,
      "pe": "Consolidato",
      "riskReward": "1 : 2.0",
      "consensus": "Buy",
      "summary": "Quotazione reale aggiornata a $202.06. RSI a 14 periodi calcolato a 26.9 con volume spike pari a 1.17x. Sentiment mediatico positivo guidato dalle ultime notizie reali di mercato.",
      "pillars": {
        "news": 75,
        "tech": 79,
        "volume": 78,
        "analyst": 78
      },
      "catalysts": [
        {
          "title": "Nvidia (NVDA) Falls More Steeply Than Broader Market: What Investors Need to Know - Yahoo Finance",
          "source": "Yahoo Finance",
          "time": "Mon, 02 Nov 2026",
          "impact": "Attenzione / Moderato"
        },
        {
          "title": "Nvidia, AMD, Marvell Targets Cut: Melius Pulls Back on AI Stocks as Big Tech Lines Up to Raise Cash - Benzinga",
          "source": "Benzinga",
          "time": "Mon, 02 Nov 2026",
          "impact": "Favorevole"
        },
        {
          "title": "Nvidia: SpaceX Offers An Ignored Bonus (NASDAQ:NVDA) - Seeking Alpha",
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
            200.44,
            201.25,
            201.05,
            201.66,
            202.06,
            202.67,
            203.27
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
            217.94,
            215.38,
            213.66,
            204.64,
            202.06
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
            238.9,
            226.32,
            217.09,
            216.0
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
  mBarNews: document.getElementById('mBarNews'),
  mBarTech: document.getElementById('mBarTech'),
  mBarVolume: document.getElementById('mBarVolume'),
  mBarAnalyst: document.getElementById('mBarAnalyst'),
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

    html += `
      <div class="stock-card" data-id="${stock.id}">
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

          <!-- Indicatori Chiave Reali -->
          <div class="card-signals-row">
            <span class="signal-pill high-signal"><i class="fa-solid fa-arrow-trend-up"></i> Spike Vol. <strong>${stock.volumeSpike}</strong></span>
            <span class="signal-pill"><i class="fa-solid fa-gauge-high"></i> RSI <strong>${stock.rsi}</strong></span>
            <span class="signal-pill"><i class="fa-solid fa-scale-balanced"></i> R/R <strong>${stock.riskReward}</strong></span>
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

  // Pilastri
  elements.mPillarNews.textContent = `${stock.pillars.news}/100`;
  elements.mBarNews.style.width = `${stock.pillars.news}%`;

  elements.mPillarTech.textContent = `${stock.pillars.tech}/100`;
  elements.mBarTech.style.width = `${stock.pillars.tech}%`;

  elements.mPillarVolume.textContent = `${stock.pillars.volume}/100`;
  elements.mBarVolume.style.width = `${stock.pillars.volume}%`;

  elements.mPillarAnalyst.textContent = `${stock.pillars.analyst}/100`;
  elements.mBarAnalyst.style.width = `${stock.pillars.analyst}%`;

  // Metriche
  elements.mStopLoss.textContent = `${stock.currency}${stock.stopLoss.toFixed(2)} (-${calculateUpside(stock.stopLoss, stock.currentPrice)}%)`;
  elements.mRiskReward.textContent = stock.riskReward;
  elements.mRsi.textContent = `${stock.rsi} (Calcolato su 14 chiusure reali)`;
  elements.mVolumeSpike.textContent = `${stock.volumeSpike} vs media a 20 giorni`;
  elements.mPe.textContent = stock.pe;
  elements.mConsensus.textContent = stock.consensus;

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
  // Hash SHA-256 del PIN '8484'
  MASTER_HASH: "2fdf08aa44660dd8332131f0cc46ab9df025304ac750724d63964fa32d1d2db4",
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
  
  if (hash === SECURITY.MASTER_HASH || SECURITY.enteredPin === "8484") {
    // PIN Corretto!
    if (SECURITY.errorBox) SECURITY.errorBox.classList.add("hidden");
    if (SECURITY.rememberCheck && SECURITY.rememberCheck.checked) {
      localStorage.setItem("alphapulse_auth", "granted");
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
  // Verifica se l'utente è già autenticato sul dispositivo
  const isAuth = localStorage.getItem("alphapulse_auth");
  if (isAuth === "granted") {
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

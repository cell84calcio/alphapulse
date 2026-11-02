# 🚀 AlphaPulse PRO - Real-Time Quantitative Intelligence Dashboard

Dashboard finanziaria professionale con **dati reali di borsa al 100%**, alimentata da un motore quantitativo Python che estrae quotazioni e serie storiche da **Yahoo Finance** e notizie in tempo reale da **Google News RSS**, calcolando gli indicatori matematici intraday per selezionare i migliori 10 titoli Europei e 10 titoli USA (tutti con capitalizzazione > 10 Miliardi).

---

## ⚡ Come Accedere e Utilizzare l'Applicazione

### Opzione 1: Browser Web con Server Live (Consigliata)
Il server locale è attivo e risponde all'indirizzo:
👉 **[http://localhost:8080](http://localhost:8080)**

In questa modalità, cliccando sul pulsante **"Aggiorna Dati"** nella barra superiore, il frontend invia una richiesta a `/api/refresh` che scansiona istantaneamente il mercato, rianalizza le notizie e ricalcola la Top 10 dal vivo.

### Opzione 2: Apertura Diretta Senza Server
Puoi anche fare doppio clic direttamente sul file `index.html` (o eseguire `open index.html`). L'applicazione include già il dataset reale aggiornato con fallback automatico.

---

## 🛠️ Come Funziona il Motore Quantitativo (`server.py`)

Lo script [`server.py`](file:///Users/albertonale/Desktop/AI/INV/server.py) non richiede librerie esterne complesse (funziona con il Python standard di macOS):

1. **Estrazione Prezzi & Volumi Reali (Yahoo Finance v8 API)**:
   - Prezzo di mercato live (`regularMarketPrice`) e variazione percentuale (`dayChangePct`).
   - Storico a 1 mese delle chiusure e dei volumi giornalieri.
   - Massimi e minimi a 52 settimane (`fiftyTwoWeekHigh`, `fiftyTwoWeekLow`).
2. **Calcolo Matematico RSI a 14 Periodi**:
   - Calcola la media dei guadagni e delle perdite relative sulle ultime 14 sessioni di borsa. Assegna il punteggio ottimale ai titoli in accelerazione non ipercomprati (RSI tra 52 e 68).
3. **Calcolo dello Spike di Volume**:
   - Confronta il volume dell'ultima sessione con la media mobile a 20 giorni (`current_volume / avg_20d_volume`). Uno spike superiore a 1.2x segnala accumulazione istituzionale.
4. **Analisi del Sentiment NLP delle Notizie Reali**:
   - Scarica le notizie delle ultime ore per ogni società e analizza i termini finanziari ad alto impatto positivo (*beat, upgrade, surge, record, rally, growth, approval*) vs negativo.
5. **Classifica Top 10 & Target Price**:
   - Assegna un punteggio ponderato complessivo (0-100), calcola Target Price operativo, Stop Loss e rapporto Rischio/Rendimento, salvando il risultato in [`market_data.json`](file:///Users/albertonale/Desktop/AI/INV/market_data.json).

---

## 🔄 Comandi Utili da Terminale

* **Avviare il server web e l'API locale**:
  ```bash
  python3 server.py
  ```

* **Aggiornare i dati reali da riga di comando senza avviare il server**:
  ```bash
  python3 server.py --update-only
  ```

* **Pianificare l'aggiornamento automatico ogni mattina alle 08:30 (Cron job macOS)**:
  ```bash
  # Modifica il crontab con 'crontab -e' e aggiungi:
  30 8 * * 1-5 cd /Users/albertonale/Desktop/AI/INV && /usr/bin/python3 server.py --update-only
  ```

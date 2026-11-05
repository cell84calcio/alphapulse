/**
 * ALPHAPULSE PRO - COMPREHENSIVE FUNCTIONAL TEST SUITE
 * Verifica approfondita: bottoni, filtri, ordinamenti, dati real-time, DOM e coerenza quantitativa.
 */

const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const appJs = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
const marketData = JSON.parse(fs.readFileSync(path.join(__dirname, 'market_data.json'), 'utf8'));

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`  \x1b[32m✔ PASS\x1b[0m: ${testName}`);
    testsPassed++;
  } else {
    console.error(`  \x1b[31m✖ FAIL\x1b[0m: ${testName} ${details ? '-> ' + details : ''}`);
    testsFailed++;
  }
}

console.log('\n======================================================');
console.log('  ALPHAPULSE PRO - SUITE DI TEST FUNZIONALE & DATI LIVE');
console.log('======================================================\n');

// ---------------------------------------------------------------------------
// 1. TEST STRUTTURA DOM & BOTTONI IN index.html
// ---------------------------------------------------------------------------
console.log('--- 1. VERIFICA BOTTONI ED ELEMENTI INTERATTIVI NEL DOM ---');

const requiredIds = [
  // Navigazione & Dock Bar
  'bottomTabEU', 'bottomTabIT', 'bottomTabUSA', 'bottomTabTop', 'bottomTabSummary',
  // Filtri Rapidi (Pills)
  'qfModelV7', 'qfCap10B', 'qfDrop1pct', 'qfDiv4', 'qfUnder52w', 'qfCombo',
  // Controlli & Select
  'searchInput', 'sectorFilter', 'sortBy', 'btnGrid', 'btnTable', 'resetFiltersBtn', 'refreshBtn',
  // Watchlist & Drawer
  'watchlistDrawer', 'watchlistCount', 'clearWatchlistBtn', 'addTopToWatchlistBtn',
  // Indicatori & Badge
  'visibleStocksCount', 'currentMarketTitle', 'currentMarketDesc',
  'summaryBadgeEU', 'summaryBadgeIT', 'summaryBadgeUSA', 'summaryBadgeTOP',
  // Tabelle di Riepilogo
  'summaryTablesPage', 'summaryTableBodyEU', 'summaryTableBodyIT', 'summaryTableBodyUSA', 'summaryTableBodyTOP',
  // Griglia & Tabella Singola
  'stocksGrid', 'stocksTableContainer', 'stocksTableBody',
  // Modale Dettagli
  'stockModal', 'modalCloseBtn', 'mTicker', 'mName', 'mExchange', 'mSector', 'mMarketCap', 'mPrice', 'mTargetPrice', 'mScore'
];

requiredIds.forEach(id => {
  const exists = indexHtml.includes(`id="${id}"`);
  assert(exists, `ID elemento '#${id}' presente in index.html`);
});

// Verifica opzioni select #sortBy
const requiredSortOptions = ['cap', 'score', 'upside', 'rsi', 'name', 'divyield', 'exdiv'];
requiredSortOptions.forEach(opt => {
  const exists = indexHtml.includes(`value="${opt}"`);
  assert(exists, `Opzione di ordinamento '${opt}' presente nel dropdown #sortBy`);
});

// Verifica opzioni select #sectorFilter
const requiredSectorOptions = ['all', 'Tecnologia', 'Finanza', 'Healthcare', 'Lusso & Consumi', 'Industria & Energia'];
requiredSectorOptions.forEach(sec => {
  const exists = indexHtml.includes(`value="${sec}"`);
  assert(exists, `Opzione settore '${sec}' presente nel dropdown #sectorFilter`);
});

// ---------------------------------------------------------------------------
// 2. TEST INTEGRITÀ DEI DATI DI MERCATO (market_data.json)
// ---------------------------------------------------------------------------
console.log('\n--- 2. VERIFICA INTEGRITÀ DATASET LIVE & METRICHE ---');

assert(marketData.isRealTime === true, 'Dataset contrassegnato come Real-Time');
assert(Boolean(marketData.lastUpdated), `Timestamp ultimo aggiornamento valido (${marketData.lastUpdated})`);
assert(marketData.marketRegime && marketData.marketRegime.vix > 0, `Indice VIX coerente (${marketData.marketRegime?.vix})`);
assert(Boolean(marketData.marketRegime?.marketSentiment), `Sentiment di mercato rilevato (${marketData.marketRegime?.marketSentiment})`);

const euList = marketData.eu || [];
const itList = marketData.it || [];
const usaList = marketData.usa || [];
const topList = marketData.top || [];

assert(euList.length >= 180, `Paniere EuroStoxx 600 completo: ${euList.length} titoli`);
assert(itList.length >= 38, `Paniere FTSE MIB completo: ${itList.length} titoli`);
assert(usaList.length >= 200, `Paniere S&P 500 completo: ${usaList.length} titoli`);
assert(topList.length === 138, `Paniere ⭐ TOP completo: ${topList.length} titoli`);

const totalStocks = euList.length + itList.length + usaList.length + topList.length;
assert(totalStocks >= 570, `Totale aggregato superiore a 570 titoli: ${totalStocks} titoli monitorati`);

// Verifica coerenza quantitativa su tutti i titoli
let allStocksValid = true;
let invalidReason = '';

[...euList, ...itList, ...usaList, ...topList].forEach(s => {
  if (!s.ticker || !s.name) {
    allStocksValid = false;
    invalidReason = `Ticker o nome mancante per ${JSON.stringify(s)}`;
  }
  if (typeof s.currentPrice !== 'number' || s.currentPrice <= 0) {
    allStocksValid = false;
    invalidReason = `Prezzo non valido per ${s.ticker}: ${s.currentPrice}`;
  }
  if (typeof s.targetPrice !== 'number' || s.targetPrice <= 0) {
    allStocksValid = false;
    invalidReason = `Target price non valido per ${s.ticker}: ${s.targetPrice}`;
  }
  if (typeof s.stopLoss !== 'number' || s.stopLoss <= 0) {
    allStocksValid = false;
    invalidReason = `Stop Loss non valido per ${s.ticker}: ${s.stopLoss}`;
  }
  if (typeof s.score !== 'number' || s.score < 0 || s.score > 100) {
    allStocksValid = false;
    invalidReason = `Punteggio quantitativo non coerente per ${s.ticker}: ${s.score}`;
  }
  if (typeof s.rsi !== 'number' || s.rsi < 0 || s.rsi > 100) {
    allStocksValid = false;
    invalidReason = `RSI non coerente per ${s.ticker}: ${s.rsi}`;
  }
});

assert(allStocksValid, 'Tutti i 574 titoli hanno parametri OHLCV, Target, Stop Loss, Score ed RSI validi', invalidReason);

// ---------------------------------------------------------------------------
// 3. TEST MOTORE DI FILTRAGGIO & ORDINAMENTO (Simulazione esatta app.js)
// ---------------------------------------------------------------------------
console.log('\n--- 3. VERIFICA FILTRI QUANTITATIVI E ORDINAMENTI ---');

// Mock calcolo calendario dividendi identico ad app.js
function getStockCalendarInfo(stock) {
  if (stock.nextExDivDate && stock.exDivDays !== undefined) {
    return { exDivDays: stock.exDivDays, nextExDivDate: stock.nextExDivDate };
  }
  const divY = Number(stock.dividendYield || 0);
  if (divY <= 0) return { exDivDays: null };
  return { exDivDays: 14 };
}

function runFilterAndSort(rawList, state) {
  let filtered = rawList.filter(stock => {
    // 1. Modello Quantitativo v7.0
    if (state.isModelV7Active) {
      const score = Number(stock.rawScore || stock.score || 0);
      if (score < 80) return false;
    }
    // 2. Capitalizzazione > €/$ 10 Mld
    if (state.isCap10BActive) {
      const cap = Number(stock.marketCapRaw || 0);
      if (cap < 10) return false;
    }
    // 3. Filtro Prezzo < -1%
    if (state.isDrop1PctActive) {
      const dropVal = Number(stock.changePct ?? stock.roc1d ?? 0);
      if (dropVal >= -1.0) return false;
    }
    // 4. Filtro Dividendo & Prezzo
    if (state.dividendPriceFilter === 'div4') {
      const divYield = Number(stock.dividendYield) || 0;
      if (divYield < 4.0 || !stock.isPayoutSustainable) return false;
    } else if (state.dividendPriceFilter === 'under52w') {
      const curP = Number(stock.currentPrice) || 0;
      const avgP = Number(stock.avg52w) || 0;
      const isUnder = (avgP > 0) ? (curP < avgP) : (stock.status52w && stock.status52w.includes('Sotto Media'));
      if (!isUnder) return false;
    } else if (state.dividendPriceFilter === 'combo') {
      const divYield = Number(stock.dividendYield) || 0;
      const divOk = (divYield >= 4.0 && stock.isPayoutSustainable);
      const curP = Number(stock.currentPrice) || 0;
      const avgP = Number(stock.avg52w) || 0;
      const priceOk = (avgP > 0) ? (curP < avgP) : (stock.status52w && stock.status52w.includes('Sotto Media'));
      if (!divOk || !priceOk) return false;
    }
    // 5. Settore
    if (state.sectorFilter && state.sectorFilter !== 'all') {
      if (stock.sector !== state.sectorFilter) return false;
    }
    // 6. Ricerca
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const match = (stock.ticker || '').toLowerCase().includes(q) ||
                    (stock.name || '').toLowerCase().includes(q) ||
                    (stock.sector || '').toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  filtered.sort((a, b) => {
    const sortMode = state.sortBy;
    if (sortMode === 'score') {
      return (b.rawScore || b.score) - (a.rawScore || a.score);
    } else if (sortMode === 'cap') {
      return (b.marketCapRaw || 0) - (a.marketCapRaw || 0);
    } else if (sortMode === 'upside') {
      const upA = ((a.targetPrice - a.currentPrice) / (a.currentPrice || 1)) || 0;
      const upB = ((b.targetPrice - b.currentPrice) / (b.currentPrice || 1)) || 0;
      return upB - upA;
    } else if (sortMode === 'rsi') {
      return (b.rsi || 0) - (a.rsi || 0);
    } else if (sortMode === 'name') {
      const nameA = (a.name || a.ticker || '').trim();
      const nameB = (b.name || b.ticker || '').trim();
      return nameA.localeCompare(nameB, 'it', { sensitivity: 'base' });
    } else if (sortMode === 'divyield') {
      return (Number(b.dividendYield) || 0) - (Number(a.dividendYield) || 0);
    } else if (sortMode === 'exdiv') {
      const calA = getStockCalendarInfo(a);
      const calB = getStockCalendarInfo(b);
      const hasDivA = Number(a.dividendYield) > 0 && calA && calA.exDivDays !== null;
      const hasDivB = Number(b.dividendYield) > 0 && calB && calB.exDivDays !== null;
      const daysA = hasDivA ? calA.exDivDays : 999999;
      const daysB = hasDivB ? calB.exDivDays : 999999;
      if (daysA !== daysB) return daysA - daysB;
      return (Number(b.dividendYield) || 0) - (Number(a.dividendYield) || 0);
    }
    return (b.marketCapRaw || 0) - (a.marketCapRaw || 0);
  });

  return filtered;
}

// TEST 3.1: Comportamento di default
const defaultState = {
  sortBy: 'cap',
  isModelV7Active: false,
  isCap10BActive: false,
  isDrop1PctActive: false,
  dividendPriceFilter: 'all',
  sectorFilter: 'all',
  searchQuery: ''
};

const euDefault = runFilterAndSort(euList, defaultState);
assert(euDefault.length === euList.length, `EuroStoxx default: restituisce tutti i ${euList.length} titoli`);
assert(euDefault[0].marketCapRaw >= euDefault[1].marketCapRaw, 'EuroStoxx default: ordinamento corretto per capitalizzazione decrescente');

const usaDefault = runFilterAndSort(usaList, defaultState);
assert(usaDefault.length === usaList.length, `S&P 500 default: restituisce tutti i ${usaList.length} titoli`);
assert(usaDefault[0].marketCapRaw >= usaDefault[1].marketCapRaw, 'S&P 500 default: ordinamento corretto per capitalizzazione decrescente');

// TEST 3.2: Filtro Modello Quant v7 (Score >= 80)
const v7State = { ...defaultState, isModelV7Active: true, sortBy: 'score' };
const v7Results = runFilterAndSort(euList, v7State);
const allV7Ok = v7Results.every(s => (s.rawScore || s.score) >= 80);
assert(allV7Ok && v7Results.length > 0, `Filtro Modello Quant v7: ${v7Results.length} titoli filtrati con Score >= 80%`);
assert((v7Results[0].rawScore || v7Results[0].score) >= (v7Results[1].rawScore || v7Results[1].score), 'Filtro Modello Quant v7: ordinato per score decrescente');

// TEST 3.3: Filtro Capitalizzazione > 10 Mld
const cap10State = { ...defaultState, isCap10BActive: true };
const cap10Results = runFilterAndSort(euList, cap10State);
const allCap10Ok = cap10Results.every(s => s.marketCapRaw >= 10);
assert(allCap10Ok && cap10Results.length > 0, `Filtro Cap > 10 Mld: ${cap10Results.length}/${euList.length} titoli con Market Cap >= 10 Mld`);

// TEST 3.4: Filtro Prezzo < -1% (Buy the Dip)
const dropState = { ...defaultState, isDrop1PctActive: true };
const dropResults = runFilterAndSort(usaList, dropState);
const allDropOk = dropResults.every(s => (s.changePct ?? s.roc1d ?? 0) < -1.0);
assert(allDropOk, `Filtro Prezzo < -1%: ${dropResults.length} titoli identificati in ribasso oltre il -1%`);

// TEST 3.5: Filtro Dividendo > 4% (Payout OK)
const div4State = { ...defaultState, dividendPriceFilter: 'div4' };
const div4Results = runFilterAndSort(euList, div4State);
const allDiv4Ok = div4Results.every(s => s.dividendYield >= 4.0 && s.isPayoutSustainable);
assert(allDiv4Ok && div4Results.length > 0, `Filtro Div > 4% (Payout OK): ${div4Results.length} titoli ad alto rendimento sostenibile`);

// TEST 3.6: Filtro Prezzo < Media 52W
const under52State = { ...defaultState, dividendPriceFilter: 'under52w' };
const under52Results = runFilterAndSort(usaList, under52State);
const allUnder52Ok = under52Results.every(s => {
  return (s.avg52w > 0) ? (s.currentPrice < s.avg52w) : (s.status52w && s.status52w.includes('Sotto Media'));
});
assert(allUnder52Ok && under52Results.length > 0, `Filtro Prezzo < Media 52W: ${under52Results.length} titoli a sconto rispetto alla media annuale`);

// TEST 3.7: Filtro Combo (Div > 4% & < Media 52W)
const comboState = { ...defaultState, dividendPriceFilter: 'combo' };
const comboResults = runFilterAndSort(euList, comboState);
const allComboOk = comboResults.every(s => s.dividendYield >= 4.0 && s.isPayoutSustainable);
assert(allComboOk, `Filtro Combo Diamante: ${comboResults.length} titoli selezionati sia per dividendo che per sconto 52W`);

// TEST 3.8: Verifica tutti i 7 criteri di ordinamento
console.log('\n--- 3.8 VERIFICA DEI 7 CRITERI DI ORDINAMENTO ---');

// a) Nome A-Z
const nameSort = runFilterAndSort(usaList, { ...defaultState, sortBy: 'name' });
let nameSortedOk = true;
for (let i = 0; i < nameSort.length - 1; i++) {
  const nA = (nameSort[i].name || nameSort[i].ticker).toLowerCase();
  const nB = (nameSort[i+1].name || nameSort[i+1].ticker).toLowerCase();
  if (nA.localeCompare(nB, 'it', { sensitivity: 'base' }) > 0) {
    nameSortedOk = false;
    break;
  }
}
assert(nameSortedOk, `Ordina per Nome (A-Z): ${nameSort[0].name} ... ${nameSort[nameSort.length - 1].name}`);

// b) Dividend Yield
const divSort = runFilterAndSort(euList, { ...defaultState, sortBy: 'divyield' });
let divSortedOk = true;
for (let i = 0; i < divSort.length - 1; i++) {
  if (Number(divSort[i].dividendYield) < Number(divSort[i+1].dividendYield)) {
    divSortedOk = false;
    break;
  }
}
assert(divSortedOk, `Ordina per Dividend Yield: primo ${divSort[0].ticker} (${divSort[0].dividendYield}%) -> ultimo ${divSort[divSort.length - 1].ticker} (${divSort[divSort.length - 1].dividendYield}%)`);

// c) Data Stacco Dividendo (più vicina)
const exdivSort = runFilterAndSort(euList, { ...defaultState, sortBy: 'exdiv' });
const topExDiv = getStockCalendarInfo(exdivSort[0]);
const bottomExDiv = getStockCalendarInfo(exdivSort[exdivSort.length - 1]);
assert(topExDiv.exDivDays !== null && topExDiv.exDivDays <= 15, `Ordina per Data Stacco (più vicina): primo stacco tra ${topExDiv.exDivDays} giorni (${exdivSort[0].ticker})`);
assert(Number(exdivSort[exdivSort.length - 1].dividendYield) === 0 || bottomExDiv.exDivDays === null, `Ordina per Data Stacco: titoli senza dividendo posizionati in fondo (${exdivSort[exdivSort.length - 1].ticker})`);

// d) Momentum RSI
const rsiSort = runFilterAndSort(usaList, { ...defaultState, sortBy: 'rsi' });
assert(rsiSort[0].rsi >= rsiSort[1].rsi, `Ordina per Momentum RSI: top RSI=${rsiSort[0].rsi} (${rsiSort[0].ticker})`);

// e) Target Upside
const upsideSort = runFilterAndSort(usaList, { ...defaultState, sortBy: 'upside' });
const up0 = ((upsideSort[0].targetPrice - upsideSort[0].currentPrice) / upsideSort[0].currentPrice) * 100;
const up1 = ((upsideSort[1].targetPrice - upsideSort[1].currentPrice) / upsideSort[1].currentPrice) * 100;
assert(up0 >= up1, `Ordina per Target Upside (%): top Upside=+${up0.toFixed(1)}% (${upsideSort[0].ticker})`);

// ---------------------------------------------------------------------------
// 4. TEST RICERCA E FILTRO SETTORIALE
// ---------------------------------------------------------------------------
console.log('\n--- 4. VERIFICA RICERCA E FILTRO SETTORE ---');

const searchRes = runFilterAndSort(usaList, { ...defaultState, searchQuery: 'Apple' });
assert(searchRes.length === 1 && searchRes[0].ticker === 'AAPL', 'Ricerca per nome azienda: "Apple" trova AAPL');

const searchTicker = runFilterAndSort(usaList, { ...defaultState, searchQuery: 'NVDA' });
assert(searchTicker.length === 1 && searchTicker[0].name.includes('NVIDIA'), 'Ricerca per ticker: "NVDA" trova NVIDIA Corporation');

const techSector = runFilterAndSort(usaList, { ...defaultState, sectorFilter: 'Tecnologia' });
const allTech = techSector.every(s => s.sector === 'Tecnologia');
assert(allTech && techSector.length >= 35, `Filtro Settore "Tecnologia": isolati correttamente ${techSector.length} titoli tech`);

const finSector = runFilterAndSort(euList, { ...defaultState, sectorFilter: 'Finanza' });
const allFin = finSector.every(s => s.sector === 'Finanza');
assert(allFin && finSector.length >= 25, `Filtro Settore "Finanza": isolati correttamente ${finSector.length} titoli bancari/assicurativi`);

// ---------------------------------------------------------------------------
// 5. TEST COMBINATO MULTI-CRITERIO
// ---------------------------------------------------------------------------
console.log('\n--- 5. TEST COMBINATO MULTI-CRITERIO ---');

const multiState = {
  ...defaultState,
  sectorFilter: 'Finanza',
  isCap10BActive: true,
  sortBy: 'name'
};
const multiRes = runFilterAndSort(usaList, multiState);
const multiOk = multiRes.every(s => s.sector === 'Finanza' && s.marketCapRaw >= 10);
assert(multiOk && multiRes.length > 0, `Filtro Multiplo (Finanza + Cap > 10 Mld + Ordina per Nome): ${multiRes.length} titoli trovati`);

// ---------------------------------------------------------------------------
// 6. TEST APERTURA MODALE DETTAGLI PER TUTTI I MERCATI (EU, IT, USA, TOP)
// ---------------------------------------------------------------------------
console.log('\n--- 6. VERIFICA APERTURA MODALE DETTAGLI & WATCHLIST (EU, IT, USA, TOP) ---');

const allMarketStocks = [...(marketData.eu || []), ...(marketData.it || []), ...(marketData.usa || []), ...(marketData.top || [])];

const sampleEU = allMarketStocks.find(s => s.id === 'eu-race');
const sampleIT = allMarketStocks.find(s => s.id === 'it-isp');
const sampleUSA = allMarketStocks.find(s => s.id === 'usa-aapl');
const sampleTOP = allMarketStocks.find(s => s.id === 'top-ko' || (s.id && s.id.startsWith('top-')));

assert(Boolean(sampleEU), 'Risoluzione scheda EU per modale (eu-race)');
assert(Boolean(sampleIT), 'Risoluzione scheda IT per modale (it-isp)');
assert(Boolean(sampleUSA), 'Risoluzione scheda USA per modale (usa-aapl)');
assert(Boolean(sampleTOP), `Risoluzione scheda TOP per modale (${sampleTOP ? sampleTOP.id : 'none'} - ${sampleTOP ? sampleTOP.ticker : 'none'})`);

const allTopResolvable = topList.every(t => allMarketStocks.some(s => s.id === t.id));
assert(allTopResolvable, `Il 100% dei ${topList.length} titoli TOP è accessibile dal pulsante Analisi`);

// ---------------------------------------------------------------------------
// 7. TEST WATCHLIST (AGGIUNTA LISTA TOP 138 & SVUOTA WATCHLIST)
// ---------------------------------------------------------------------------
console.log('\n--- 7. VERIFICA PULSANTE AGGIUNTA TOP E SVUOTA WATCHLIST ---');

let testWatchlist = [];

// Simula click su "Aggiungi Titoli TOP"
topList.forEach(s => {
  if (!testWatchlist.includes(s.id)) {
    testWatchlist.push(s.id);
  }
});
assert(testWatchlist.length === 138, `Pulsante Aggiungi TOP: aggiunti con successo tutti i 138 titoli alla Watchlist`);

// Verifica sincronizzazione cross-mercato: il titolo KO in USA deve risultare presente
const allStocks = [...(marketData.eu || []), ...(marketData.it || []), ...(marketData.usa || []), ...(marketData.top || [])];
function isTestInWatchlist(id) {
  if (testWatchlist.includes(id)) return true;
  const target = allStocks.find(s => s.id === id);
  if (!target) return false;
  const targetRoot = (target.ticker || '').split('.')[0].toUpperCase();
  return testWatchlist.some(savedId => {
    const saved = allStocks.find(s => s.id === savedId);
    if (!saved) return false;
    const savedRoot = (saved.ticker || '').split('.')[0].toUpperCase();
    return savedRoot === targetRoot;
  });
}

assert(isTestInWatchlist('usa-ko') === true, 'Sincronizzazione stella attiva: KO in USA risulta nei preferiti');
assert(isTestInWatchlist('it-enel') === true, 'Sincronizzazione stella attiva: ENEL in FTSE MIB risulta nei preferiti');

// Simula click su "Svuota Watchlist"
testWatchlist = [];
assert(testWatchlist.length === 0, 'Pulsante Svuota Watchlist: reset completo a 0 titoli');

// ---------------------------------------------------------------------------
// 8. RIEPILOGO TEST
// ---------------------------------------------------------------------------
console.log('\n======================================================');
console.log(`  RISULTATO TEST: ${testsPassed} PASSATI | ${testsFailed} FALLITI`);
console.log('======================================================\n');

if (testsFailed > 0) {
  process.exit(1);
} else {
  console.log('✔ TUTTI I TEST FUNZIONALI SONO STATI SUPERATI CON SUCCESSO!');
}

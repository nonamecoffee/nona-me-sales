const KEY = {
  sales: "nm_sales_v7",
  expenses: "nm_expenses_v7",
  deposits: "nm_deposits_v7",
  cash: "nm_cashcounts_v7",
  settings: "nm_settings_v7",
  rate: "nm_rate_v7",
  session: "nm_session_v7"
};

const I18N = {
  kh: {
    sales: "ការលក់", expenses: "ចំណាយ", cash: "លុយក្នុងតុ", deposit: "ដាក់ធនាគារ", report: "របាយការណ៍", history: "ប្រវត្តិ", admin: "គ្រប់គ្រង",
    todaySales: "ការលក់ថ្ងៃនេះ", menu: "មីនុយ", currentSale: "ការលក់បច្ចុប្បន្ន", selectDrink: "សូមជ្រើសភេសជ្ជៈ", item: "មុខទំនិញ", qty: "ចំនួន", total: "សរុប",
    expense: "ការចំណាយ", spentOn: "ចំណាយលើអ្វី?", amount: "ចំនួនទឹកប្រាក់", payment: "វិធីបង់", note: "កំណត់សម្គាល់", addExpense: "បញ្ចូលការចំណាយ",
    previous: "សល់ពីមុន", expected: "គួរសល់", actual: "រាប់បានជាក់ស្តែង", difference: "ខុសគ្នា", cashResult: "លទ្ធផលសាច់ប្រាក់",
    bankDeposit: "ដាក់ចូលធនាគារ", bank: "ធនាគារ", depositNote: "ដាក់ចូលធនាគារ", addDeposit: "បញ្ចូលការដាក់ធនាគារ",
    dailyReport: "របាយការណ៍ប្រចាំថ្ងៃ", staff: "បុគ្គលិក", cups: "ចំនួនកែវ", bestSeller: "មុខលក់ដាច់ជាងគេ", rate: "អត្រាប្តូរប្រាក់",
    salesSection: "ការលក់", expensesSection: "ចំណាយ", cashMovement: "ចលនាសាច់ប្រាក់", actualCash: "សាច់ប្រាក់រាប់បាន", cashCountMissing: "មិនទាន់រាប់លុយ",
    salesKHR: "ការលក់ KHR", salesUSD: "ការលក់ USD", expenseKHR: "ចំណាយ KHR", expenseUSD: "ចំណាយ USD", cashSales: "ការលក់សាច់ប្រាក់", cashExpenses: "ចំណាយសាច់ប្រាក់", bankDeposits: "ប្រាក់ដាក់ធនាគារ",
    expectedTable: "សាច់ប្រាក់រំពឹងទុកក្នុងតុ", actualKHR: "សាច់ប្រាក់ជាក់ស្តែង KHR", actualUSD: "សាច់ប្រាក់ជាក់ស្តែង USD", best: "មុខលក់ដាច់",
    noRecords: "មិនទាន់មានទិន្នន័យ", invalid: "ឈ្មោះអ្នកប្រើ ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ", chooseDrink: "សូមជ្រើសភេសជ្ជៈជាមុនសិន",
    saved: "រក្សាទុករួច", copied: "ចម្លងរួច", noCount: "មិនទាន់បញ្ចូលការរាប់លុយ", login: "ចូលប្រើ", logout: "ចេញ", remember: "ចងចាំការចូលប្រើ"
  },
  en: {
    sales: "Sales", expenses: "Expenses", cash: "Daily Cash", deposit: "Bank Deposit", report: "Daily Report", history: "History", admin: "Admin",
    todaySales: "Today's Sales", menu: "Menu", currentSale: "Current Sale", selectDrink: "Select drinks", item: "Item", qty: "Qty", total: "Total",
    expense: "Expenses", spentOn: "Spent on", amount: "Amount", payment: "Payment", note: "Note", addExpense: "Add Expense",
    previous: "Previous", expected: "Expected", actual: "Actual", difference: "Difference", cashResult: "Cash Result",
    bankDeposit: "Bank Deposit", bank: "Bank", depositNote: "Note", addDeposit: "Add Deposit",
    dailyReport: "Daily Report", staff: "Staff", cups: "Total Cups", bestSeller: "Best Seller", rate: "Exchange Rate",
    salesSection: "SALES", expensesSection: "EXPENSES", cashMovement: "CASH MOVEMENT", actualCash: "ACTUAL CASH", cashCountMissing: "Not counted yet",
    salesKHR: "Sales KHR", salesUSD: "Sales USD", expenseKHR: "Expenses KHR", expenseUSD: "Expenses USD", cashSales: "Cash Sales", cashExpenses: "Cash Expenses", bankDeposits: "Bank Deposit",
    expectedTable: "Expected Cash in Table", actualKHR: "Actual Cash KHR", actualUSD: "Actual Cash USD", best: "Best Seller",
    noRecords: "No records yet", invalid: "Invalid username or password", chooseDrink: "Please select a drink first",
    saved: "Saved", copied: "Copied", noCount: "Cash count not submitted", login: "Login", logout: "Logout", remember: "Remember login"
  }
};

const $ = id => document.getElementById(id);
const t = key => I18N[S.lang][key] || key;
const moneyKHR = n => Number(n || 0).toLocaleString("km-KH") + "៛";
const moneyUSD = n => "$" + Number(n || 0).toFixed(2);
const read = (k, fallback) => { try { return JSON.parse(localStorage.getItem(k) || JSON.stringify(fallback)); } catch { return fallback; } };
const write = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const now = () => new Date();
const today = () => now().toISOString().slice(0, 10);

const migrate = (freshKey, oldKeys) => {
  const existing = localStorage.getItem(freshKey);
  if (existing) return;
  for (const k of oldKeys) { const v = localStorage.getItem(k); if (v) { localStorage.setItem(freshKey, v); return; } }
};
migrate(KEY.sales, ["nm_sales_v6", "nm_sales_v5"]);
migrate(KEY.expenses, ["nm_expenses_v6", "nm_expenses_v5"]);
migrate(KEY.deposits, ["nm_deposits_v6", "nm_deposits_v5"]);
migrate(KEY.cash, ["nm_cashcounts_v6"]);
migrate(KEY.settings, ["nm_settings_v6", "nm_settings_v5"]);
if (!localStorage.getItem(KEY.rate) && localStorage.getItem("nm_rate")) localStorage.setItem(KEY.rate, localStorage.getItem("nm_rate"));

const S = {
  user: null, role: null, lang: localStorage.getItem("nm_lang_v7") || "kh", products: [], category: "All", cart: {}, currency: "KHR", payment: "Cash",
  rate: Number(localStorage.getItem(KEY.rate) || 4000),
  sales: read(KEY.sales, []), expenses: read(KEY.expenses, []), deposits: read(KEY.deposits, []), cashCounts: read(KEY.cash, []),
  settings: read(KEY.settings, { shopName: "nona-me coffee", phone: "", telegram: "", address: "" })
};

async function boot() {
  S.products = read("nm_products_v10", null) || await fetch("products.json").then(r => r.json()); write("nm_products_v10", S.products);
  bindEvents();
  restoreSession();
  if (!S.user) showLogin(); else showApp();
  applyLanguage();
  renderAll();
}

function bindEvents() {
  $("loginBtn").onclick = login;
  $("password").addEventListener("keydown", e => { if (e.key === "Enter") login(); });
  $("logoutBtn").onclick = logout;
  $("langBtn").onclick = () => { S.lang = S.lang === "kh" ? "en" : "kh"; localStorage.setItem("nm_lang_v7", S.lang); applyLanguage(); renderAll(); };
  $("menuSearch").oninput = renderProducts;
  $("rateInput").oninput = e => { S.rate = Math.max(1, Number(e.target.value || 4000)); localStorage.setItem(KEY.rate, S.rate); renderProducts(); renderCart(); renderReport(); renderCash(); };
  $("saveSaleBtn").onclick = saveSale;
  $("savePrintSaleBtn").onclick = saveSaleAndPrint;
  $("saveExpenseBtn").onclick = saveExpense;
  $("saveDepositBtn").onclick = saveDeposit;
  $("saveCashCountBtn").onclick = saveCashCount;
  $("exportPng").onclick = exportPng;
  $("copyText").onclick = copyText;
  $("downloadTxt").onclick = downloadTxt;
  $("shareTelegram").onclick = shareTelegram;
  document.querySelectorAll(".tab").forEach(b => b.onclick = () => showPage(b.dataset.page, b));
  document.querySelectorAll(".currency-btn").forEach(b => b.onclick = () => { S.currency = b.dataset.currency; document.querySelectorAll(".currency-btn").forEach(x => x.classList.toggle("active", x === b)); renderCart(); });
  document.querySelectorAll(".pay-btn").forEach(b => b.onclick = () => { S.payment = b.dataset.payment; document.querySelectorAll(".pay-btn").forEach(x => x.classList.toggle("active", x === b)); });
}

function showLogin() { $("loginScreen").classList.remove("hidden"); $("app").classList.add("hidden"); }
function showApp() { $("loginScreen").classList.add("hidden"); $("app").classList.remove("hidden"); }
function restoreSession() {
  const s = read(KEY.session, null);
  if (s && s.user && (Date.now() - Number(s.createdAt || 0) < 1000 * 60 * 60 * 24 * 30)) { S.user = s.user; S.role = s.role; }
}
function login() {
  const u = $("username").value.trim(), p = $("password").value;
  const valid = (u === "admin" && p === "admin") || (u.startsWith("staff") && p === "1234");
  if (!valid) return alert(t("invalid"));
  S.user = u; S.role = u === "admin" ? "admin" : "staff";
  if ($("rememberLogin")?.checked !== false) write(KEY.session, { user: S.user, role: S.role, createdAt: Date.now() });
  showApp(); updateUserLine(); if (S.role === "admin") $("adminTab").classList.remove("hidden"); else $("adminTab").classList.add("hidden"); renderAll();
}
function logout() { localStorage.removeItem(KEY.session); S.user = null; S.role = null; showLogin(); }
function updateUserLine() { $("userLine").textContent = `${S.user || "—"} · ${(S.role || "").toUpperCase()}`; }

function applyLanguage() {
  document.documentElement.lang = S.lang === "kh" ? "km" : "en";
  if ($("rememberLogin")) $("rememberLogin").nextElementSibling.textContent = t("remember");
  updateUserLine();
  const map = {
    "adminTab": t("admin"),
    "langBtn": "ខ្មែរ / EN", "logoutBtn": t("logout"), "loginBtn": `${t("login")} / ${S.lang === "kh" ? "ចូលប្រើ" : "Login"}`,
    "saveSaleBtn": `SAVE SALE / ${S.lang === "kh" ? "រក្សាទុក" : "Save Sale"}`,
    "saveExpenseBtn": `SAVE EXPENSE / ${S.lang === "kh" ? "រក្សាទុក" : "Save Expense"}`,
    "saveDepositBtn": `SAVE DEPOSIT / ${S.lang === "kh" ? "រក្សាទុក" : "Save Deposit"}`,
    "saveCashCountBtn": `SAVE CASH COUNT / ${S.lang === "kh" ? "រក្សាទុក" : "Save Cash Count"}`,
    "exportPng": `🖼 ${S.lang === "kh" ? "រក្សាទុកជារូបភាព / PNG" : "Export Image / PNG"}`,
    "copyText": `📋 ${S.lang === "kh" ? "ចម្លងអត្ថបទ" : "Copy Text"}`,
    "downloadTxt": `📄 ${S.lang === "kh" ? "ទាញយក TXT" : "Download TXT"}`,
    "shareTelegram": `✈️ ${S.lang === "kh" ? "Telegram" : "Telegram"}`
  };
  Object.entries(map).forEach(([id, text]) => { if ($(id)) $(id).textContent = text; });
  const placeholders = { menuSearch: S.lang === "kh" ? "ស្វែងរកមីនុយ..." : "Search menu...", expenseDesc: S.lang === "kh" ? "ឧ. ទិញទឹកកក" : "e.g. ice", expenseNote: S.lang === "kh" ? "មិនបាច់ក៏បាន" : "Optional", depositBank: "ABA / ACLEDA / Other", depositNote: "ដាក់ចូលធនាគារ" };
  Object.entries(placeholders).forEach(([id, text]) => { if ($(id)) $(id).placeholder = text; });
}

function showPage(name, btn) {
  document.querySelectorAll(".page").forEach(x => x.classList.add("hidden"));
  $(name + "Page").classList.remove("hidden");
  document.querySelectorAll(".tab").forEach(x => x.classList.remove("active")); btn.classList.add("active");
  if (name === "expenses") renderExpenses(); if (name === "cash") renderCash(); if (name === "deposit") renderDeposits(); if (name === "report") renderReport(); if (name === "history") renderHistory(); if (name === "admin") renderAdmin("overview");
}
function renderAll() { renderCategories(); renderProducts(); renderCart(); renderExpenses(); renderCash(); renderDeposits(); renderReport(); renderHistory(); if (S.role === "admin") renderAdmin("overview"); refreshAll(); updateUserLine(); }

function renderCategories() { ensureProductsLoaded(); const base = ["All", ...productCategories()]; const kh = { All: "ទាំងអស់", Coffee: "កាហ្វេ", Matcha: "Matcha", Cacao: "កាកាវ", Tea: "តែ", Soda: "សូដា" }; const cats = [...new Set(base)]; $("categoryBar").innerHTML = cats.map(c => `<button class="chip ${S.category === c ? "active" : ""}" onclick="setCategory(${JSON.stringify(c)})">${S.lang === "kh" ? (kh[c] || c) : c}</button>`).join(""); }
function setCategory(c) { S.category = c; renderCategories(); renderProducts(); }
function renderProducts() { const q = ($("menuSearch").value || "").toLowerCase(); const list = S.products.filter(p => (S.category === "All" || p[3] === S.category) && (`${p[0]} ${p[1]}`).toLowerCase().includes(q)); $("productGrid").innerHTML = list.map(p => { const i = S.products.indexOf(p); return `<button class="product" onclick="addToCart(${i})"><div>${p[0]}</div><span class="kh">${p[1]}</span><span class="price">${moneyKHR(p[2])} / ${moneyUSD(p[2] / S.rate)}</span></button>`; }).join("") || `<div class="cart-empty">${t("noRecords")}</div>`; }
function addToCart(i) { const p = S.products[i]; S.cart[i] = S.cart[i] || { name: p[0], kh: p[1], priceKHR: p[2], qty: 0 }; S.cart[i].qty++; renderCart(); }
function minus(i) { if (!S.cart[i]) return; S.cart[i].qty--; if (S.cart[i].qty <= 0) delete S.cart[i]; renderCart(); }
function cartKhr() { return Object.values(S.cart).reduce((s, v) => s + v.priceKHR * v.qty, 0); }
function renderCart() {
  const items = Object.entries(S.cart), total = cartKhr();
  if (!items.length) { $("cart").innerHTML = `<div class="cart-empty">☕ ${t("selectDrink")}</div>`; $("cartTotal").textContent = "0៛"; return; }
  let rows = "";
  items.forEach(([i, v]) => rows += `<tr><td>${S.lang === "kh" ? v.kh : v.name}</td><td><button class="qty-btn" onclick="minus(${i})">−</button> ${v.qty} <button class="qty-btn" onclick="addToCart(${i})">+</button></td><td>${S.currency === "KHR" ? moneyKHR(v.priceKHR * v.qty) : moneyUSD(v.priceKHR * v.qty / S.rate)}</td></tr>`);
  $("cart").innerHTML = `<table class="cart-table"><tr><th>${t("item")}</th><th>${t("qty")}</th><th>${t("total")}</th></tr>${rows}</table>`;
  $("cartTotal").textContent = S.currency === "KHR" ? moneyKHR(total) : moneyUSD(total / S.rate);
}
function createSaleRecord() {
  const items = Object.values(S.cart); if (!items.length) return null;
  const d = now(), totalKHR = cartKhr(), cups = items.reduce((s, v) => s + v.qty, 0), amount = S.currency === "KHR" ? totalKHR : totalKHR / S.rate;
  const sale = { id: String(Date.now()), date: today(), time: d.toLocaleTimeString(), user: S.user, payment: S.payment, currency: S.currency, amount, totalKHR, cups, rate: S.rate, createdAt: Date.now(), items: items.map(v => ({ name: v.name, kh: v.kh, priceKHR: v.priceKHR, qty: v.qty })) };
  S.sales.push(sale); write(KEY.sales, S.sales); S.cart = {}; return sale;
}
function saveSale() {
  const sale = createSaleRecord();
  if (!sale) return alert(t("chooseDrink"));
  renderCart(); refreshAll(); renderReport(); alert(t("saved"));
}
function saveSaleAndPrint() {
  const sale = createSaleRecord();
  if (!sale) return alert(t("chooseDrink"));
  renderCart(); refreshAll(); renderReport();
  printReceipt(sale);
}
function printReceipt(sale) {
  const c = S.cms || {};
  const shop = escAttr(c.shopName || S.settings.shopName || "nona-me coffee");
  const phone = escAttr(S.settings.phone || "");
  const address = escAttr(S.settings.address || "");
  const rows = (sale.items || []).map(i => `<tr><td>${S.lang==='kh' ? (i.kh || i.name) : i.name}</td><td>${i.qty}</td><td>${sale.currency==='KHR' ? moneyKHR(i.priceKHR*i.qty) : moneyUSD((i.priceKHR*i.qty)/sale.rate)}</td></tr>`).join("");
  const total = sale.currency==='KHR' ? moneyKHR(sale.amount) : moneyUSD(sale.amount);
  const html = `<!doctype html><html lang="km"><head><meta charset="utf-8"><title>Receipt ${sale.id}</title><style>@page{size:80mm auto;margin:4mm}*{box-sizing:border-box}body{font-family:Arial,'Noto Sans Khmer',sans-serif;width:72mm;margin:0 auto;color:#222;font-size:12px}.center{text-align:center}.brand{font-size:18px;font-weight:800}.muted{color:#666;font-size:10px}.line{border-top:1px dashed #777;margin:7px 0}table{width:100%;border-collapse:collapse}th,td{padding:4px 0;text-align:left;vertical-align:top}th:last-child,td:last-child{text-align:right}.total{font-size:16px;font-weight:800;display:flex;justify-content:space-between;margin-top:8px}.thanks{text-align:center;margin-top:12px;font-weight:700}</style></head><body><div class="center"><div class="brand">${shop}</div>${phone?`<div>${phone}</div>`:''}${address?`<div>${address}</div>`:''}<div class="line"></div><div><b>Receipt / វិក័យប័ត្រ</b></div><div class="muted">${sale.date} · ${sale.time}</div><div class="muted">${sale.user} · ${sale.payment}</div></div><div class="line"></div><table><thead><tr><th>Item / មុខទំនិញ</th><th>Qty</th><th>Amount</th></tr></thead><tbody>${rows}</tbody></table><div class="line"></div><div class="total"><span>Total / សរុប</span><span>${total}</span></div><div class="muted">Currency: ${sale.currency} · Rate: ${Number(sale.rate).toLocaleString()}៛/$1</div><div class="thanks">Thank you / សូមអរគុណ</div><script>window.onload=()=>{window.print();setTimeout(()=>window.close(),500)}<\/script></body></html>`;
  const w=window.open('', '_blank', 'width=420,height=700');
  if(!w){ alert(S.lang==='kh' ? 'Browser បានរារាំង Print Window។ សូមអនុញ្ញាត Pop-ups។' : 'Print window was blocked. Please allow pop-ups.'); return; }
  w.document.open(); w.document.write(html); w.document.close();
}

function saveExpense() { const desc = $("expenseDesc").value.trim(), amount = Number($("expenseAmount").value || 0); if (!desc || amount <= 0) return alert(`${t("spentOn")} + ${t("amount")}`); const d = now(); S.expenses.push({ id: String(Date.now()), date: today(), time: d.toLocaleTimeString(), user: S.user, desc, amount, currency: $("expenseCurrency").value, payment: $("expensePayment").value, note: $("expenseNote").value.trim(), rate: S.rate, createdAt: Date.now() }); write(KEY.expenses, S.expenses); $("expenseDesc").value = ""; $("expenseAmount").value = ""; $("expenseNote").value = ""; renderAll(); alert(t("saved")); }
function saveDeposit() { const amount = Number($("depositAmount").value || 0); if (amount <= 0) return alert(t("amount")); const d = now(); S.deposits.push({ id: String(Date.now()), date: today(), time: d.toLocaleTimeString(), user: S.user, amount, currency: $("depositCurrency").value, bank: $("depositBank").value.trim(), note: $("depositNote").value.trim(), rate: S.rate, createdAt: Date.now() }); write(KEY.deposits, S.deposits); $("depositAmount").value = ""; $("depositBank").value = ""; $("depositNote").value = ""; renderAll(); alert(t("saved")); }
function saveCashCount() { const d = now(), expected = expectedCurrentCash(); S.cashCounts.push({ id: String(Date.now()), date: today(), time: d.toLocaleTimeString(), user: S.user, actualKhr: Number($("actualKhr").value || 0), actualUsd: Number($("actualUsd").value || 0), expectedKhr: expected.khr, expectedUsd: expected.usd, currencySummary: true, createdAt: Date.now() }); write(KEY.cash, S.cashCounts); renderAll(); alert(t("saved")); }

function summary() {
  const o = { salesKHR: 0, salesUSD: 0, cashKHR: 0, cashUSD: 0, abaKHR: 0, abaUSD: 0, otherKHR: 0, otherUSD: 0, expenseKHR: 0, expenseUSD: 0, cashExpKHR: 0, cashExpUSD: 0, depositKHR: 0, depositUSD: 0, cups: 0, tx: 0, items: {} };
  S.sales.filter(s => s.date === today()).forEach(s => { o.tx++; o.cups += Number(s.cups || 0); if (s.currency === "KHR") { o.salesKHR += Number(s.amount); if (s.payment === "Cash") o.cashKHR += Number(s.amount); else if (s.payment === "ABA") o.abaKHR += Number(s.amount); else o.otherKHR += Number(s.amount); } else { o.salesUSD += Number(s.amount); if (s.payment === "Cash") o.cashUSD += Number(s.amount); else if (s.payment === "ABA") o.abaUSD += Number(s.amount); else o.otherUSD += Number(s.amount); } (s.items || []).forEach(i => o.items[i.kh || i.name] = (o.items[i.kh || i.name] || 0) + Number(i.qty || 0)); });
  S.expenses.filter(e => e.date === today()).forEach(e => { if (e.currency === "KHR") { o.expenseKHR += Number(e.amount); if (e.payment === "Cash") o.cashExpKHR += Number(e.amount); } else { o.expenseUSD += Number(e.amount); if (e.payment === "Cash") o.cashExpUSD += Number(e.amount); } });
  S.deposits.filter(d => d.date === today()).forEach(d => { if (d.currency === "KHR") o.depositKHR += Number(d.amount); else o.depositUSD += Number(d.amount); });
  return o;
}
function previousBalance() {
  // Running cash: all cash movements strictly before today. KHR and USD remain separate.
  let khr = 0, usd = 0;
  S.sales.filter(s => s.date < today() && s.payment === "Cash").forEach(s => s.currency === "KHR" ? khr += Number(s.amount) : usd += Number(s.amount));
  S.expenses.filter(e => e.date < today() && e.payment === "Cash").forEach(e => e.currency === "KHR" ? khr -= Number(e.amount) : usd -= Number(e.amount));
  S.deposits.filter(d => d.date < today()).forEach(d => d.currency === "KHR" ? khr -= Number(d.amount) : usd -= Number(d.amount));
  // Latest prior verified cash count is a better starting point than rebuilding history only when it exists.
  const priorCounts = S.cashCounts.filter(c => c.date < today()).sort((a, b) => Number(a.createdAt || 0) - Number(b.createdAt || 0));
  if (priorCounts.length) { const c = priorCounts[priorCounts.length - 1]; return { khr: Number(c.actualKhr || 0), usd: Number(c.actualUsd || 0) }; }
  return { khr, usd };
}
function expectedCurrentCash() { const p = previousBalance(), o = summary(); return { khr: p.khr + o.cashKHR - o.cashExpKHR - o.depositKHR, usd: p.usd + o.cashUSD - o.cashExpUSD - o.depositUSD }; }
function latestCash() { return S.cashCounts.filter(c => c.date === today()).sort((a, b) => Number(a.createdAt || 0) - Number(b.createdAt || 0)).slice(-1)[0]; }

function renderExpenses() { const rows = S.expenses.filter(x => x.date === today()).slice().reverse(); $("expenseList").innerHTML = rows.map(x => `<div class="list-row"><span><b>${x.desc}</b><br><small>${x.user} · ${x.time} · ${x.payment}${x.note ? " · " + x.note : ""}</small></span><b>${x.currency === "KHR" ? moneyKHR(x.amount) : moneyUSD(x.amount)}</b></div>`).join("") || `<div class="cart-empty">${t("noRecords")}</div>`; }
function renderDeposits() { const rows = S.deposits.filter(x => x.date === today()).slice().reverse(); $("depositList").innerHTML = rows.map(x => `<div class="list-row"><span><b>${x.bank || "Bank"}</b><br><small>${x.user} · ${x.time}${x.note ? " · " + x.note : ""}</small></span><b>${x.currency === "KHR" ? moneyKHR(x.amount) : moneyUSD(x.amount)}</b></div>`).join("") || `<div class="cart-empty">${t("noRecords")}</div>`; }
function renderCash() { const p = previousBalance(), e = expectedCurrentCash(), c = latestCash(); $("prevCashKhr").textContent = moneyKHR(p.khr); $("expectedCashKhr").textContent = moneyKHR(e.khr); $("prevCashUsd").textContent = moneyUSD(p.usd); $("expectedCashUsd").textContent = moneyUSD(e.usd); $("cashResult").innerHTML = `<div class="result-box"><div class="result-line"><span>${t("actualKHR")}</span><b>${c ? moneyKHR(c.actualKhr) : t("cashCountMissing")}</b></div><div class="result-line"><span>${t("actualUSD")}</span><b>${c ? moneyUSD(c.actualUsd) : t("cashCountMissing")}</b></div><div class="result-line"><span>${t("difference")} KHR</span><b class="${c && c.actualKhr - e.khr === 0 ? "matched" : "short"}">${c ? moneyKHR(c.actualKhr - e.khr) : "—"}</b></div><div class="result-line"><span>${t("difference")} USD</span><b class="${c && c.actualUsd - e.usd === 0 ? "matched" : "short"}">${c ? moneyUSD(c.actualUsd - e.usd) : "—"}</b></div></div>`; }
function refreshAll() { const o = summary(); $("kpiKhr").textContent = moneyKHR(o.salesKHR); $("kpiUsd").textContent = moneyUSD(o.salesUSD); $("kpiCashKhr").textContent = moneyKHR(o.cashKHR); $("kpiCups").textContent = o.cups; }

function reportData() { const o = summary(), p = previousBalance(), e = expectedCurrentCash(), c = latestCash(), best = Object.entries(o.items).sort((a, b) => b[1] - a[1])[0]; return { o, p, e, c, best }; }
function reportText() { const { o, p, e, c, best } = reportData(); return `${S.settings.shopName || "nona-me coffee"}\n${t("dailyReport")} / DAILY REPORT\n${S.lang === "kh" ? "កាលបរិច្ឆេទ" : "Date"}: ${new Date().toLocaleDateString("en-GB")}\n${t("staff")}: ${S.user || "—"}\n\n${t("salesSection")}\nKHR: ${moneyKHR(o.salesKHR)}\nUSD: ${moneyUSD(o.salesUSD)}\n${t("cups")}: ${o.cups}\n\n${t("expensesSection")}\nKHR: ${moneyKHR(o.expenseKHR)}\nUSD: ${moneyUSD(o.expenseUSD)}\n\n${t("cashMovement")}\n${t("previous")} KHR: ${moneyKHR(p.khr)}\n${t("cashSales")} KHR: ${moneyKHR(o.cashKHR)}\n${t("cashExpenses")} KHR: ${moneyKHR(o.cashExpKHR)}\n${t("bankDeposits")} KHR: ${moneyKHR(o.depositKHR)}\n${t("expectedTable")} KHR: ${moneyKHR(e.khr)}\n\n${t("previous")} USD: ${moneyUSD(p.usd)}\n${t("cashSales")} USD: ${moneyUSD(o.cashUSD)}\n${t("cashExpenses")} USD: ${moneyUSD(o.cashExpUSD)}\n${t("bankDeposits")} USD: ${moneyUSD(o.depositUSD)}\n${t("expectedTable")} USD: ${moneyUSD(e.usd)}\n\n${t("actualCash")}\nKHR: ${c ? moneyKHR(c.actualKhr) : t("noCount")}\nUSD: ${c ? moneyUSD(c.actualUsd) : t("noCount")}\n${t("difference")} KHR: ${c ? moneyKHR(c.actualKhr - e.khr) : "—"}\n${t("difference")} USD: ${c ? moneyUSD(c.actualUsd - e.usd) : "—"}\n\n${t("bestSeller")}: ${best ? `${best[0]} (${best[1]} ${t("cups")})` : "—"}\n${t("rate")}: ${Number(S.rate).toLocaleString()}៛ = $1`; }
function renderReport() { const { o, p, e, c, best } = reportData(); $("reportDate").textContent = `${new Date().toLocaleDateString("en-GB")} · ${S.user || "—"}`; $("reportPreview").innerHTML = `<div class="report-brand">${S.settings.shopName || "nona-me coffee"}</div><div class="report-title">${t("dailyReport")} / DAILY REPORT</div><p class="muted">${new Date().toLocaleDateString("en-GB")} · ${S.user || "—"}</p><div class="report-section-title">${t("salesSection")}</div>${line(t("salesKHR"), moneyKHR(o.salesKHR))}${line(t("salesUSD"), moneyUSD(o.salesUSD))}${line(t("cups"), o.cups)}<div class="report-section-title">${t("expensesSection")}</div>${line(t("expenseKHR"), moneyKHR(o.expenseKHR))}${line(t("expenseUSD"), moneyUSD(o.expenseUSD))}<div class="report-section-title">${t("cashMovement")}</div>${line(`${t("previous")} KHR`, moneyKHR(p.khr))}${line(`${t("cashSales")} KHR`, moneyKHR(o.cashKHR))}${line(`${t("cashExpenses")} KHR`, moneyKHR(o.cashExpKHR))}${line(`${t("bankDeposits")} KHR`, moneyKHR(o.depositKHR))}${line(`${t("expectedTable")} KHR`, moneyKHR(e.khr), true)}${line(`${t("previous")} USD`, moneyUSD(p.usd))}${line(`${t("cashSales")} USD`, moneyUSD(o.cashUSD))}${line(`${t("cashExpenses")} USD`, moneyUSD(o.cashExpUSD))}${line(`${t("bankDeposits")} USD`, moneyUSD(o.depositUSD))}${line(`${t("expectedTable")} USD`, moneyUSD(e.usd), true)}<div class="report-section-title">${t("actualCash")}</div>${line(t("actualKHR"), c ? moneyKHR(c.actualKhr) : `— ${t("noCount")}`)}${line(t("actualUSD"), c ? moneyUSD(c.actualUsd) : `— ${t("noCount")}`)}${line(`${t("difference")} KHR`, c ? moneyKHR(c.actualKhr - e.khr) : "—")}${line(`${t("difference")} USD`, c ? moneyUSD(c.actualUsd - e.usd) : "—")}${line(t("bestSeller"), best ? `${best[0]} (${best[1]} ${t("cups")})` : "—")}${line(t("rate"), `${Number(S.rate).toLocaleString()}៛ = $1`)}`; }
function line(a, b, total = false) { return `<div class="report-line ${total ? "report-total" : ""}"><span>${a}</span><b>${b}</b></div>`; }

async function exportPng() {
  // SVG -> PNG keeps Khmer text rendered by the browser instead of canvas's limited font assumptions.
  const text = reportText().split("\n"); const width = 1000, lineH = 34, height = Math.max(1450, 180 + text.length * lineH);
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const lines = text.map((s, i) => `<text x="80" y="${110 + i * lineH}" class="${i === 0 ? "brand" : i % 4 === 1 ? "title" : "body"}">${esc(s || " ")}</text>`).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="#F8F6F1"/><rect x="45" y="45" width="910" height="${height - 90}" rx="28" fill="#fff" stroke="#E9E0DB"/><style>.brand{font:700 40px 'Noto Sans Khmer',Arial,sans-serif;fill:#3A2A24}.title{font:700 24px 'Noto Sans Khmer',Arial,sans-serif;fill:#8B2E23}.body{font:20px 'Noto Sans Khmer',Arial,sans-serif;fill:#4B3A32}</style>${lines}</svg>`;
  const img = new Image(); img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg); await new Promise((res, rej) => { img.onload = res; img.onerror = rej; });
  const can = document.createElement("canvas"); can.width = width; can.height = height; const ctx = can.getContext("2d"); ctx.fillStyle = "#F8F6F1"; ctx.fillRect(0, 0, width, height); ctx.drawImage(img, 0, 0); can.toBlob(blob => { const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `nona-me-report-${today()}.png`; a.click(); URL.revokeObjectURL(a.href); });
}
function copyText() { navigator.clipboard?.writeText(reportText()).then(() => alert(t("copied"))).catch(() => alert(reportText())); }
function downloadTxt() { const b = new Blob([reportText()], { type: "text/plain;charset=utf-8" }), a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = `nona-me-report-${today()}.txt`; a.click(); URL.revokeObjectURL(a.href); }
function shareTelegram() { const text = encodeURIComponent(reportText()); window.open(`https://t.me/share/url?url=&text=${text}`, "_blank"); }

function renderHistory() { const a = [...S.sales].reverse().map(s => `<div class="history-item"><div>🧾 <b>${s.date}</b> · ${s.time}<br><small>${s.user} · ${s.payment} · ${s.currency} · ${s.cups} ${t("cups")}</small></div><div class="history-total">${s.currency === "KHR" ? moneyKHR(s.amount) : moneyUSD(s.amount)}</div></div>`); const b = [...S.expenses].reverse().map(e => `<div class="history-item"><div>💸 <b>${e.date}</b> · ${e.time}<br><small>${e.user} · ${e.desc} · ${e.payment}</small></div><div class="history-total">${e.currency === "KHR" ? moneyKHR(e.amount) : moneyUSD(e.amount)}</div></div>`); const d = [...S.deposits].reverse().map(x => `<div class="history-item"><div>🏦 <b>${x.date}</b> · ${x.time}<br><small>${x.user} · ${x.bank || "Bank"}${x.note ? " · " + x.note : ""}</small></div><div class="history-total">${x.currency === "KHR" ? moneyKHR(x.amount) : moneyUSD(x.amount)}</div></div>`); const c = [...S.cashCounts].reverse().map(x => `<div class="history-item"><div>💵 <b>${x.date}</b> · ${x.time}<br><small>${x.user} · ${t("actualCash")}</small></div><div class="history-total">${moneyKHR(x.actualKhr)} / ${moneyUSD(x.actualUsd)}</div></div>`); $("historyList").innerHTML = [...a, ...b, ...d, ...c].join("") || `<div class="cart-empty">${t("noRecords")}</div>`; }

function renderAdminLegacy(section) { if (S.role !== "admin") return; const o = summary(); let content = ""; if (section === "overview") content = `<div class="admin-grid"><section class="panel"><h2>📊 Overview / សង្ខេប</h2><div class="admin-kpi">${moneyKHR(o.salesKHR)}</div><p class="muted">${t("salesKHR")}</p><div class="bar"><i style="width:${Math.min(100, o.salesKHR ? (o.cashKHR / o.salesKHR) * 100 : 0)}%"></i></div><p class="muted small">${o.tx} transactions · ${o.cups} cups</p></section><section class="panel"><h2>💰 Cash / សាច់ប្រាក់</h2><div class="result-line"><span>KHR</span><b>${moneyKHR(expectedCurrentCash().khr)}</b></div><div class="result-line"><span>USD</span><b>${moneyUSD(expectedCurrentCash().usd)}</b></div></section></div>`; else if (section === "products") content = `<div class="panel"><h2>☕ Products / Menu</h2>${S.products.map(p => `<div class="list-row"><span>${p[0]}<br><small>${p[1]} · ${p[3]}</small></span><b>${moneyKHR(p[2])}</b></div>`).join("")}</div>`; else if (section === "staff") content = `<div class="panel"><h2>👥 Staff / Users</h2><div class="user-row"><span>Admin<br><small>Owner</small></span><b class="role admin-role">ADMIN</b></div><div class="user-row"><span>Staff 01</span><b class="role">STAFF</b></div><div class="user-row"><span>Staff 02</span><b class="role">STAFF</b></div></div>`; else if (section === "settings") content = `<div class="panel"><h2>⚙️ Shop Settings / ព័ត៌មានហាង</h2><div class="form-grid"><div><label>Shop Name / ឈ្មោះហាង</label><input id="setShop" value="${escAttr(S.settings.shopName)}"></div><div><label>Phone / ទូរស័ព្ទ</label><input id="setPhone" value="${escAttr(S.settings.phone)}"></div><div><label>Telegram</label><input id="setTelegram" value="${escAttr(S.settings.telegram)}"></div><div><label>Address / អាសយដ្ឋាន</label><input id="setAddress" value="${escAttr(S.settings.address)}"></div></div><label>Default Exchange Rate / អត្រាប្តូរប្រាក់</label><input id="setRate" type="number" value="${S.rate}"><button class="save-btn" onclick="saveSettings()">SAVE SETTINGS / រក្សាទុក</button></div>`; else if (section === "audit") { const logs = [...S.sales.map(x => ({ t: x.time, a: "SALE / ការលក់", u: x.user, d: x.currency === "KHR" ? moneyKHR(x.amount) : moneyUSD(x.amount) })), ...S.expenses.map(x => ({ t: x.time, a: "EXPENSE / ចំណាយ", u: x.user, d: x.desc })), ...S.deposits.map(x => ({ t: x.time, a: "DEPOSIT / ដាក់ធនាគារ", u: x.user, d: x.currency === "KHR" ? moneyKHR(x.amount) : moneyUSD(x.amount) }))].slice(-30).reverse(); content = `<div class="panel"><h2>🛡️ Audit Log / ប្រវត្តិសកម្មភាព</h2>${logs.map(l => `<div class="log-row"><span>${l.t} · ${l.a}<br><small>${l.u}</small></span><b>${l.d}</b></div>`).join("") || `<div class="cart-empty">${t("noRecords")}</div>`}</div>`; }
  $("adminContent").innerHTML = `<div class="admin-menu">${["overview", "products", "staff", "settings", "audit"].map(x => `<button class="admin-menu-btn ${x === section ? "active" : ""}" onclick="renderAdmin('${x}')">${x === "overview" ? "📊 " : x === "products" ? "☕ " : x === "staff" ? "👥 " : x === "settings" ? "⚙️ " : "🛡️ "}${x}</button>`).join("")}</div>${content}`;
}
function escAttr(v) { return String(v || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function saveSettings() { S.settings = { shopName: $("setShop").value.trim(), phone: $("setPhone").value.trim(), telegram: $("setTelegram").value.trim(), address: $("setAddress").value.trim() }; S.rate = Math.max(1, Number($("setRate").value || 4000)); write(KEY.settings, S.settings); localStorage.setItem(KEY.rate, S.rate); $("rateInput").value = S.rate; renderAll(); alert(t("saved")); }


/* boot moved to final line so V14 overrides load first */

/* ========================= V10 ADMIN CONTROLS ========================= */
const USER_KEY = "nm_users_v10";
const PRODUCT_KEY = "nm_products_v10";
const defaultUsers = [
  {id:"u-admin", username:"admin", password:"admin", name:"Admin", role:"admin", active:true},
  {id:"u-staff01", username:"staff01", password:"1234", name:"Staff 01", role:"staff", active:true},
  {id:"u-staff02", username:"staff02", password:"1234", name:"Staff 02", role:"staff", active:true}
];
S.users = read(USER_KEY, defaultUsers);

// Use the editable product list once it has been loaded from products.json.
function ensureProductsLoaded(){
  if(!Array.isArray(S.products) || !S.products.length){ S.products = read(PRODUCT_KEY, []); }
}
function saveProducts(){ write(PRODUCT_KEY, S.products); }
function saveUsers(){ write(USER_KEY, S.users); }
function esc(v){ return String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
function productCategories(){ ensureProductsLoaded(); return [...new Set(S.products.map(p=>p[3]).filter(Boolean))].sort(); }

// Replace login with the Admin-managed user list.
function login() {
  const u = $("username").value.trim(), p = $("password").value;
  const user = (S.users || defaultUsers).find(x => x.username === u && x.password === p && x.active !== false);
  if (!user) return alert(t("invalid"));
  S.user = user.username; S.role = user.role;
  if ($("rememberLogin")?.checked !== false) write(KEY.session, { user:S.user, role:S.role, createdAt:Date.now() });
  showApp(); updateUserLine(); $("adminTab").classList.toggle("hidden", S.role !== "admin"); renderAll();
}

// Make product rendering use admin-edited products.
const renderProductsOriginal = renderProducts;
renderProducts = function(){
  ensureProductsLoaded();
  const q = ($("menuSearch")?.value || "").toLowerCase();
  const list = S.products.filter(p => p[4] !== false && (S.category === "All" || p[3] === S.category) && (`${p[0]} ${p[1]}`).toLowerCase().includes(q));
  $("productGrid").innerHTML = list.map(p => { const i=S.products.indexOf(p); return `<button class="product" onclick="addToCart(${i})"><div>${esc(p[0])}</div><span class="kh">${esc(p[1])}</span><span class="price">${moneyKHR(p[2])} / ${moneyUSD(p[2]/S.rate)}</span></button>`; }).join("") || `<div class="cart-empty">${t("noRecords")}</div>`;
};

function overviewRange(type, date){ const d=date || today(); return type==='day' ? {start:d,end:d} : periodRange(type,d); }
function overviewAggregate(type, date){ const r=overviewRange(type,date); const g=aggregateRange(r); return {r,...g}; }
function dayLabel(d){ return new Date(d+'T00:00:00').toLocaleDateString('en-GB',{day:'2-digit',month:'short'}); }
function rangeDates(r){ const out=[]; let d=v8Date(r.start), e=v8Date(r.end); while(d<=e){out.push(isoDate(d)); d.setDate(d.getDate()+1);} return out; }
function renderOverview(){
  const type=$("overviewType")?.value || 'day', date=$("overviewDate")?.value || today();
  const {r,a,sales,expenses,deposits}=overviewAggregate(type,date);
  const netKHR=a.salesKHR-a.expenseKHR, netUSD=a.salesUSD-a.expenseUSD;
  const cash=expectedCurrentCash();
  const dailyRows=rangeDates(r).map(d=>{
    const ds=sales.filter(x=>x.date===d), de=expenses.filter(x=>x.date===d);
    const k=ds.filter(x=>x.currency==='KHR').reduce((n,x)=>n+Number(x.amount||0),0), u=ds.filter(x=>x.currency==='USD').reduce((n,x)=>n+Number(x.amount||0),0), cups=ds.reduce((n,x)=>n+Number(x.cups||0),0);
    return `<tr><td>${dayLabel(d)}</td><td>${moneyKHR(k)}</td><td>${moneyUSD(u)}</td><td>${moneyKHR(de.filter(x=>x.currency==='KHR').reduce((n,x)=>n+Number(x.amount||0),0))}</td><td>${cups}</td></tr>`;
  }).join('');
  $("adminContent").innerHTML=`
    <div class="admin-menu">${adminMenu('overview')}${adminMenu('products')}${adminMenu('inventory')}${adminMenu('staff')}${adminMenu('settings')}${adminMenu('audit')}</div>
    <div class="panel overview-controls">
      <div class="form-grid">
        <div><label>View / មើលជា</label><select id="overviewType"><option value="day" ${type==='day'?'selected':''}>Daily / ប្រចាំថ្ងៃ</option><option value="week" ${type==='week'?'selected':''}>Weekly / ប្រចាំសប្តាហ៍</option><option value="month" ${type==='month'?'selected':''}>Monthly / ប្រចាំខែ</option></select></div>
        <div><label>Date / កាលបរិច្ឆេទ</label><input id="overviewDate" type="date" value="${esc(date)}"></div>
      </div>
      <div class="export-grid" style="margin-top:12px"><button class="save-btn" onclick="renderOverview()">VIEW / មើលរបាយការណ៍</button><button class="export-btn" onclick="exportOverviewCSV()">📥 Export Data / ទាញទិន្នន័យ CSV</button></div>
    </div>
    <div class="stats admin-overview-stats">
      <div class="stat"><small>Sales KHR / ការលក់ KHR</small><strong>${moneyKHR(a.salesKHR)}</strong></div>
      <div class="stat"><small>Sales USD / ការលក់ USD</small><strong>${moneyUSD(a.salesUSD)}</strong></div>
      <div class="stat"><small>Expenses KHR / ចំណាយ KHR</small><strong>${moneyKHR(a.expenseKHR)}</strong></div>
      <div class="stat"><small>Expenses USD / ចំណាយ USD</small><strong>${moneyUSD(a.expenseUSD)}</strong></div>
      <div class="stat"><small>Net KHR / សល់ក្រោយចំណាយ</small><strong>${moneyKHR(netKHR)}</strong></div>
      <div class="stat"><small>Net USD / សល់ក្រោយចំណាយ</small><strong>${moneyUSD(netUSD)}</strong></div>
      <div class="stat"><small>Cups / ចំនួនកែវ</small><strong>${a.cups}</strong></div>
      <div class="stat"><small>Current Cash / សាច់ប្រាក់ក្នុងតុ</small><strong>${moneyKHR(cash.khr)}<br>${moneyUSD(cash.usd)}</strong></div>
    </div>
    <div class="admin-grid">
      <section class="panel"><h2>📈 Overview / សង្ខេប ${type==='day'?'ប្រចាំថ្ងៃ':type==='week'?'ប្រចាំសប្តាហ៍':'ប្រចាំខែ'}</h2>
        <p class="muted">${r.start} → ${r.end}</p>
        <div class="table-wrap"><table class="report-table"><thead><tr><th>Date / ថ្ងៃ</th><th>Sales KHR</th><th>Sales USD</th><th>Expenses KHR</th><th>Cups / កែវ</th></tr></thead><tbody>${dailyRows || `<tr><td colspan="5">${t('noRecords')}</td></tr>`}</tbody></table></div>
      </section>
      <section class="panel"><h2>🏆 Best Seller / មុខលក់ដាច់</h2>${Object.entries(a.items).sort((x,y)=>y[1]-x[1]).slice(0,8).map(([name,n],i)=>`<div class="list-row"><span>${i+1}. ${esc(name)}</span><b>${n} ${t('cups')}</b></div>`).join('') || `<div class="cart-empty">${t('noRecords')}</div>`}</section>
    </div>`;
  $("overviewType").onchange=renderOverview; $("overviewDate").onchange=renderOverview;
}
function exportOverviewCSV(){
  const type=$("overviewType")?.value||'day', date=$("overviewDate")?.value||today(), {r,sales,expenses,deposits}=overviewAggregate(type,date);
  const rows=[['Date','Type','Staff','Item / Description','Currency','Payment','Amount','Cups','Bank','Note']];
  sales.forEach(x=>rows.push([x.date,'SALE',x.user,x.name,x.currency,x.payment,x.amount,x.cups||0,'',x.note||'']));
  expenses.forEach(x=>rows.push([x.date,'EXPENSE',x.user,x.desc,x.currency,x.payment,x.amount,'','',x.note||'']));
  deposits.forEach(x=>rows.push([x.date,'DEPOSIT',x.user,'Bank Deposit',x.currency,'Cash',x.amount,'',x.bank||'',x.note||'']));
  const csv=rows.map(row=>row.map(v=>'"'+String(v??'').replaceAll('"','""')+'"').join(',')).join('\n');
  const b=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'}), a=document.createElement('a'); a.href=URL.createObjectURL(b); a.download=`nona-me-overview-${type}-${r.start}-to-${r.end}.csv`; a.click(); URL.revokeObjectURL(a.href); audit('EXPORT OVERVIEW / ទាញទិន្នន័យ',`${type} ${r.start} to ${r.end}`);
}
function adminMenu(section){
  const labels={overview:'📊 Overview / សង្ខេប',products:'☕ Products / Menu',inventory:'📦 Stock / ស្តុក',staff:'👥 Staff / Users',settings:'⚙️ Settings / កំណត់',audit:'🛡️ Audit Log / ប្រវត្តិសកម្មភាព'};
  return `<button class="admin-menu-btn ${section==='overview'?'active':''}" onclick="renderAdmin('${section}')">${labels[section]}</button>`;
}

function renderProductsAdmin(){
  ensureProductsLoaded(); const cats=productCategories();
  $("adminContent").innerHTML=`<div class="admin-menu">${adminMenu('overview')}${adminMenu('products')}${adminMenu('inventory')}${adminMenu('staff')}${adminMenu('settings')}${adminMenu('audit')}</div>
  <section class="panel"><h2>☕ Products / Menu · មីនុយ</h2><p class="muted">Add, edit, hide or delete menu items.</p>
    <div class="form-grid product-form"><div><label>English Name / ឈ្មោះអង់គ្លេស</label><input id="prodEn" placeholder="Iced Latte"></div><div><label>Khmer Name / ឈ្មោះខ្មែរ</label><input id="prodKh" placeholder="ឡាតេទឹកកក"></div><div><label>Price KHR / តម្លៃ</label><input id="prodPrice" type="number" min="0" placeholder="5000"></div><div><label>Category / ប្រភេទ</label><input id="prodCat" list="productCats" placeholder="Coffee / កាហ្វេ"><datalist id="productCats">${cats.map(c=>`<option value="${esc(c)}">`).join('')}</datalist></div></div>
    <button class="save-btn" onclick="addProductAdmin()">➕ ADD PRODUCT / បន្ថែមមុខទំនិញ</button>
    <div class="admin-table-list" style="margin-top:15px">${S.products.map((p,i)=>`<div class="admin-edit-row"><div><b>${esc(p[0])}</b><br><span class="muted">${esc(p[1])} · ${esc(p[3]||'Other')} · ${moneyKHR(p[2])}</span></div><div class="row-actions"><button class="mini-btn" onclick="editProductAdmin(${i})">✏️ Edit</button><button class="mini-btn" onclick="toggleProductAdmin(${i})">${p[4]===false?'▶️ Show':'⏸ Hide'}</button><button class="mini-btn danger" onclick="deleteProductAdmin(${i})">🗑 Delete</button></div></div>`).join('')}</div>
  </section>`;
}
function addProductAdmin(){ const en=$("prodEn").value.trim(), kh=$("prodKh").value.trim(), price=Number($("prodPrice").value||0), cat=$("prodCat").value.trim()||'Other'; if(!en||!kh||price<=0)return alert('Please enter English, Khmer, price / សូមបញ្ចូលឈ្មោះ តម្លៃ'); S.products.push([en,kh,price,cat,true]); saveProducts(); audit('ADD PRODUCT / បន្ថែមមុខទំនិញ',`${en} / ${kh}`); renderProductsAdmin(); renderAll(); }
function editProductAdmin(i){ const p=S.products[i]; const en=prompt('English Name / ឈ្មោះអង់គ្លេស',p[0]); if(en===null)return; const kh=prompt('Khmer Name / ឈ្មោះខ្មែរ',p[1]); if(kh===null)return; const pr=prompt('Price KHR / តម្លៃ',p[2]); if(pr===null)return; const cat=prompt('Category / ប្រភេទ',p[3]); if(cat===null)return; S.products[i]=[en.trim()||p[0],kh.trim()||p[1],Math.max(0,Number(pr)||p[2]),cat.trim()||p[3],p[4]!==false]; saveProducts(); audit('EDIT PRODUCT / កែសម្រួលមុខទំនិញ',S.products[i][0]); renderProductsAdmin(); renderAll(); }
function toggleProductAdmin(i){ S.products[i][4]=S.products[i][4]===false; saveProducts(); audit(S.products[i][4]?'SHOW PRODUCT':'HIDE PRODUCT',S.products[i][0]); renderProductsAdmin(); renderAll(); }
function deleteProductAdmin(i){ const p=S.products[i]; if(!confirm(`Delete ${p[0]} / លុបមុខទំនិញនេះ?`))return; S.products.splice(i,1); saveProducts(); audit('DELETE PRODUCT / លុបមុខទំនិញ',p[0]); renderProductsAdmin(); renderAll(); }

function renderStaffAdmin(){
  $("adminContent").innerHTML=`<div class="admin-menu">${adminMenu('overview')}${adminMenu('products')}${adminMenu('inventory')}${adminMenu('staff')}${adminMenu('settings')}${adminMenu('audit')}</div>
  <section class="panel"><h2>👥 Staff / Users · បុគ្គលិក</h2><p class="muted">Create staff accounts and enable/disable access. Prototype stores credentials locally; production should use Supabase Auth.</p>
    <div class="form-grid"><div><label>Username / ឈ្មោះអ្នកប្រើ</label><input id="newUser" placeholder="staff03"></div><div><label>Password / ពាក្យសម្ងាត់</label><input id="newPass" placeholder="1234"></div><div><label>Name / ឈ្មោះ</label><input id="newName" placeholder="Staff 03"></div><div><label>Role / តួនាទី</label><select id="newRole"><option value="staff">STAFF</option><option value="admin">ADMIN</option></select></div></div>
    <button class="save-btn" onclick="addUserAdmin()">➕ ADD USER / បន្ថែមអ្នកប្រើ</button>
    <div style="margin-top:15px">${S.users.map((u,i)=>`<div class="admin-edit-row"><div><b>${esc(u.name)} · ${esc(u.username)}</b><br><span class="muted">${u.role.toUpperCase()} · ${u.active===false?'Disabled / បិទ':'Active / ដំណើរការ'}</span></div><div class="row-actions"><button class="mini-btn" onclick="editUserAdmin(${i})">✏️ Edit</button>${u.username!=='admin'?`<button class="mini-btn" onclick="toggleUserAdmin(${i})">${u.active===false?'▶️ Enable':'⏸ Disable'}</button><button class="mini-btn danger" onclick="deleteUserAdmin(${i})">🗑 Delete</button>`:''}</div></div>`).join('')}</div>
  </section>`;
}
function addUserAdmin(){ const username=$("newUser").value.trim(),password=$("newPass").value,name=$("newName").value.trim()||username,role=$("newRole").value; if(!username||!password)return alert('Username + password required / ត្រូវការឈ្មោះអ្នកប្រើ និងពាក្យសម្ងាត់'); if(S.users.some(u=>u.username===username))return alert('Username already exists / ឈ្មោះនេះមានរួចហើយ'); S.users.push({id:'u-'+Date.now(),username,password,name,role,active:true}); saveUsers(); audit('ADD USER / បន្ថែមអ្នកប្រើ',username); renderStaffAdmin(); }
function editUserAdmin(i){ const u=S.users[i]; const name=prompt('Name / ឈ្មោះ',u.name); if(name===null)return; const pass=prompt('Password / ពាក្យសម្ងាត់',u.password); if(pass===null)return; u.name=name.trim()||u.name; u.password=pass||u.password; saveUsers(); audit('EDIT USER / កែសម្រួលអ្នកប្រើ',u.username); renderStaffAdmin(); }
function toggleUserAdmin(i){ S.users[i].active=S.users[i].active===false; saveUsers(); audit(S.users[i].active?'ENABLE USER / បើកអ្នកប្រើ':'DISABLE USER / បិទអ្នកប្រើ',S.users[i].username); renderStaffAdmin(); }
function deleteUserAdmin(i){ const u=S.users[i]; if(!confirm(`Delete ${u.username}?`))return; S.users.splice(i,1); saveUsers(); audit('DELETE USER / លុបអ្នកប្រើ',u.username); renderStaffAdmin(); }


function renderSettingsAdmin(){
  $("adminContent").innerHTML=`<div class="admin-menu">${adminMenu('overview')}${adminMenu('products')}${adminMenu('inventory')}${adminMenu('staff')}${adminMenu('settings')}${adminMenu('audit')}</div>
  <section class="panel"><h2>⚙️ Shop Settings / ព័ត៌មានហាង</h2>
    <div class="form-grid"><div><label>Shop Name / ឈ្មោះហាង</label><input id="setShop" value="${escAttr(S.settings.shopName)}"></div><div><label>Phone / ទូរស័ព្ទ</label><input id="setPhone" value="${escAttr(S.settings.phone)}"></div><div><label>Telegram</label><input id="setTelegram" value="${escAttr(S.settings.telegram)}"></div><div><label>Address / អាសយដ្ឋាន</label><input id="setAddress" value="${escAttr(S.settings.address)}"></div></div>
    <label>Default Exchange Rate / អត្រាប្តូរប្រាក់</label><input id="setRate" type="number" value="${S.rate}" min="1">
    <button class="save-btn" onclick="saveSettings()">SAVE SETTINGS / រក្សាទុក</button>
  </section>`;
}
function renderAuditAdmin(){
  const logs=[...S.sales.map(x=>({date:x.date,time:x.time,a:'SALE / ការលក់',u:x.user,d:x.currency==='KHR'?moneyKHR(x.amount):moneyUSD(x.amount)})),...S.expenses.map(x=>({date:x.date,time:x.time,a:'EXPENSE / ចំណាយ',u:x.user,d:x.desc})),...S.deposits.map(x=>({date:x.date,time:x.time,a:'DEPOSIT / ដាក់ធនាគារ',u:x.user,d:x.currency==='KHR'?moneyKHR(x.amount):moneyUSD(x.amount)}))].sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time)).slice(-100).reverse();
  $("adminContent").innerHTML=`<div class="admin-menu">${adminMenu('overview')}${adminMenu('products')}${adminMenu('inventory')}${adminMenu('staff')}${adminMenu('settings')}${adminMenu('audit')}</div>
  <section class="panel"><h2>🛡️ Audit Log / ប្រវត្តិសកម្មភាព</h2>${logs.map(l=>`<div class="log-row"><span>${esc(l.date)} · ${esc(l.time)}<br><small>${esc(l.u)} · ${esc(l.a)}</small></span><b>${esc(l.d)}</b></div>`).join('')||`<div class="cart-empty">${t('noRecords')}</div>`}</section>`;
}

// Unified Admin Control Center with working products/users/overview.
renderAdmin = function(section){

  if(S.role!=='admin') return;
  if(section==='overview') return renderOverview();
  if(section==='products') return renderProductsAdmin();
  if(section==='staff') return renderStaffAdmin();
  if(section==='inventory') { $("adminContent").innerHTML=`<div class="admin-menu">${adminMenu('overview')}${adminMenu('products')}${adminMenu('inventory')}${adminMenu('staff')}${adminMenu('settings')}${adminMenu('audit')}</div>${renderInventory()}`; return; }
  if(section==='settings') return renderSettingsAdmin();
  if(section==='audit') return renderAuditAdmin();
  renderOverview();
};

/* ========================= V8 ENHANCEMENTS ========================= */
const V8KEY = { stock: "nm_stock_v8", logs: "nm_audit_v8" };
const stockSeed = [
  {id:"coffee", name:"Coffee / កាហ្វេ", unit:"kg", qty:10, min:2},
  {id:"cups", name:"Cups / កែវ", unit:"pcs", qty:2000, min:200},
  {id:"lids", name:"Lids / គម្រប", unit:"pcs", qty:2000, min:200},
  {id:"milk", name:"Milk / ទឹកដោះគោ", unit:"L", qty:10, min:2},
  {id:"condensed", name:"Condensed Milk / ទឹកដោះគោខាប់", unit:"kg", qty:5, min:1}
];
S.stock = read(V8KEY.stock, stockSeed);
function audit(action, detail){ const logs=read(V8KEY.logs,[]); logs.push({id:String(Date.now()),date:today(),time:now().toLocaleTimeString(),user:S.user,action,detail}); write(V8KEY.logs,logs.slice(-500)); }
function v8Date(d){return new Date(d+"T00:00:00");}
function isoDate(d){return d.toISOString().slice(0,10);}
function periodRange(type,start){
  const s=v8Date(start||today()); let e=new Date(s);
  if(type==='month'){ e=new Date(s.getFullYear(),s.getMonth()+1,0); }
  else { const day=s.getDay(); const monday=new Date(s); monday.setDate(s.getDate()-(day===0?6:day-1)); const sunday=new Date(monday); sunday.setDate(monday.getDate()+6); return {start:isoDate(monday),end:isoDate(sunday)}; }
  return {start:isoDate(s),end:isoDate(e)};
}
function inRange(date,r){return date>=r.start&&date<=r.end;}
function aggregateRange(r){
  const sales=S.sales.filter(x=>inRange(x.date,r)); const expenses=S.expenses.filter(x=>inRange(x.date,r)); const deposits=S.deposits.filter(x=>inRange(x.date,r));
  const a={salesKHR:0,salesUSD:0,expenseKHR:0,expenseUSD:0,depositKHR:0,depositUSD:0,cups:0,cashKHR:0,cashUSD:0,items:{},staff:{}};
  sales.forEach(x=>{if(x.currency==='KHR')a.salesKHR+=Number(x.amount||0);else a.salesUSD+=Number(x.amount||0);if(x.payment==='Cash'){if(x.currency==='KHR')a.cashKHR+=Number(x.amount||0);else a.cashUSD+=Number(x.amount||0);}a.cups+=Number(x.cups||0);a.items[x.name]=(a.items[x.name]||0)+Number(x.cups||0);a.staff[x.user]=a.staff[x.user]||{salesKHR:0,salesUSD:0,cups:0};a.staff[x.user][x.currency==='KHR'?'salesKHR':'salesUSD']+=Number(x.amount||0);a.staff[x.user].cups+=Number(x.cups||0);});
  expenses.forEach(x=>{if(x.currency==='KHR')a.expenseKHR+=Number(x.amount||0);else a.expenseUSD+=Number(x.amount||0);});
  deposits.forEach(x=>{if(x.currency==='KHR')a.depositKHR+=Number(x.amount||0);else a.depositUSD+=Number(x.amount||0);});
  return {sales,expenses,deposits,a};
}
function renderPeriodReport(){ if(S.role!=='admin') return; const type=$("periodType")?.value||'week', start=$("periodStart")?.value||today(), r=periodRange(type,start), {a}=aggregateRange(r); const best=Object.entries(a.items).sort((x,y)=>y[1]-x[1])[0];
  $("periodPreview").innerHTML=`<div class="report-brand">${S.settings.shopName||'nona-me coffee'}</div><div class="report-title">${type==='week'?'របាយការណ៍ប្រចាំសប្តាហ៍ / WEEKLY REPORT':'របាយការណ៍ប្រចាំខែ / MONTHLY REPORT'}</div><p class="muted">${r.start} → ${r.end}</p><div class="period-summary">${mini('Sales KHR / ការលក់ KHR',moneyKHR(a.salesKHR))}${mini('Sales USD / ការលក់ USD',moneyUSD(a.salesUSD))}${mini('Expenses KHR / ចំណាយ KHR',moneyKHR(a.expenseKHR))}${mini('Expenses USD / ចំណាយ USD',moneyUSD(a.expenseUSD))}${mini('Bank KHR / ធនាគារ KHR',moneyKHR(a.depositKHR))}${mini('Bank USD / ធនាគារ USD',moneyUSD(a.depositUSD))}${mini('Cups / កែវ',a.cups)}${mini('Best Seller / លក់ដាច់',best?best[0]+' · '+best[1]:'—')}</div><div class="report-section-title">Staff Performance / លទ្ធផលបុគ្គលិក</div><div class="table-wrap"><table class="report-table"><thead><tr><th>Staff / បុគ្គលិក</th><th>KHR Sales</th><th>USD Sales</th><th>Cups / កែវ</th></tr></thead><tbody>${Object.entries(a.staff).map(([u,x])=>`<tr><td>${u}</td><td>${moneyKHR(x.salesKHR)}</td><td>${moneyUSD(x.salesUSD)}</td><td>${x.cups}</td></tr>`).join('')||'<tr><td colspan="4">'+t('noRecords')+'</td></tr>'}</tbody></table></div>`;
}
function mini(a,b){return `<div class="mini-kpi"><small>${a}</small><b>${b}</b></div>`;}
function exportPeriodCSV(){ if(S.role!=='admin')return; const type=$("periodType").value,start=$("periodStart").value||today(),r=periodRange(type,start); const {sales,expenses,deposits}=aggregateRange(r); const rows=[['Date','Type','Staff','Description / Item','Currency','Payment','Amount','Cups','Bank','Note']]; sales.forEach(x=>rows.push([x.date,'SALE',x.user,x.name,x.currency,x.payment,x.amount,x.cups||0,'',x.note||''])); expenses.forEach(x=>rows.push([x.date,'EXPENSE',x.user,x.desc,x.currency,x.payment,x.amount,'','',x.note||''])); deposits.forEach(x=>rows.push([x.date,'DEPOSIT',x.user,'Bank Deposit',x.currency,'Cash',x.amount,'',x.bank||'',x.note||''])); const csv=rows.map(row=>row.map(v=>'"'+String(v??'').replaceAll('"','""')+'"').join(',')).join('\n'); const b=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=`nona-me-${type}-${r.start}-to-${r.end}.csv`;a.click();URL.revokeObjectURL(a.href);audit('EXPORT REPORT / ទាញរបាយការណ៍',`${type} ${r.start} to ${r.end}`);}
function renderInventory(){ const stock=S.stock||[]; return `<div class="panel"><h2>📦 Stock / Inventory · ស្តុក</h2><p class="muted">Manual stock control for prototype. Recipes/automatic ingredient deduction will be connected with the database later.</p>${stock.map(x=>`<div class="list-row"><span><b>${x.name}</b><br><small>${x.unit} · Min ${x.min}</small></span><span><b class="${x.qty<=x.min?'stock-low':'stock-ok'}">${x.qty}</b> ${x.qty<=x.min?'⚠️ Low Stock / ជិតអស់':''}</span></div>`).join('')}<div class="form-grid" style="margin-top:12px"><div><label>Item / មុខស្តុក</label><input id="stockName" placeholder="Ice / ទឹកកក"></div><div><label>Quantity / ចំនួន</label><input id="stockQty" type="number" min="0" placeholder="10"></div><div><label>Unit / ឯកតា</label><input id="stockUnit" placeholder="kg / pcs / L"></div><div><label>Minimum / កម្រិតជូនដំណឹង</label><input id="stockMin" type="number" min="0" placeholder="2"></div></div><button class="save-btn" onclick="addStock()">ADD STOCK / បន្ថែមស្តុក</button></div>`;}
function addStock(){const name=$("stockName").value.trim();if(!name)return alert('Item / មុខស្តុក');S.stock.push({id:String(Date.now()),name,qty:Number($("stockQty").value||0),unit:$("stockUnit").value.trim()||'pcs',min:Number($("stockMin").value||0)});write(V8KEY.stock,S.stock);audit('ADD STOCK / បន្ថែមស្តុក',name);renderAdmin('inventory');}
function renderAdmin(section){ if(S.role!=='admin')return; const o=summary(); let content=''; if(section==='overview'){const todayExp=o.expenseKHR+o.expenseUSD;content=`<div class="admin-grid"><section class="panel"><h2>📊 Owner Dashboard / ផ្ទាំងគ្រប់គ្រង</h2><div class="period-summary">${mini('Sales KHR / លក់',moneyKHR(o.salesKHR))}${mini('Sales USD / លក់',moneyUSD(o.salesUSD))}${mini('Expenses KHR / ចំណាយ',moneyKHR(o.expenseKHR))}${mini('Cups / កែវ',o.cups)}</div><p class="muted">Transactions / ប្រតិបត្តិការ: ${o.tx}</p></section><section class="panel"><h2>💰 Cash Control / គ្រប់គ្រងសាច់ប្រាក់</h2>${line('KHR / រៀល',moneyKHR(expectedCurrentCash().khr),true)}${line('USD / ដុល្លារ',moneyUSD(expectedCurrentCash().usd),true)}<p class="muted small">Cash continues from previous days and is reduced by bank deposits.</p></section></div>`;} else if(section==='products'){content=`<div class="panel"><h2>☕ Products / Menu</h2>${S.products.map(p=>`<div class="list-row"><span>${p[0]}<br><small>${p[1]} · ${p[3]}</small></span><b>${moneyKHR(p[2])}</b></div>`).join('')}</div>`;} else if(section==='inventory'){content=renderInventory();} else if(section==='staff'){content=`<div class="panel"><h2>👥 Staff / Users</h2><div class="user-row"><span>Admin<br><small>Owner</small></span><b class="role admin-role">ADMIN</b></div><div class="user-row"><span>Staff 01<br><small>Sales / Expenses / Deposit / Cash Count</small></span><b class="role">STAFF</b></div><div class="user-row"><span>Staff 02<br><small>Sales / Expenses / Deposit / Cash Count</small></span><b class="role">STAFF</b></div><p class="muted small">Production version will connect these users to Supabase Auth and allow Admin to add/disable accounts.</p></div>`;} else if(section==='settings'){content=`<div class="panel"><h2>⚙️ Shop Settings / ព័ត៌មានហាង</h2><div class="form-grid"><div><label>Shop Name / ឈ្មោះហាង</label><input id="setShop" value="${escAttr(S.settings.shopName)}"></div><div><label>Phone / ទូរស័ព្ទ</label><input id="setPhone" value="${escAttr(S.settings.phone)}"></div><div><label>Telegram</label><input id="setTelegram" value="${escAttr(S.settings.telegram)}"></div><div><label>Address / អាសយដ្ឋាន</label><input id="setAddress" value="${escAttr(S.settings.address)}"></div></div><label>Default Exchange Rate / អត្រាប្តូរប្រាក់</label><input id="setRate" type="number" value="${S.rate}"><button class="save-btn" onclick="saveSettings()">SAVE SETTINGS / រក្សាទុក</button></div>`;} else if(section==='audit'){const logs=read(V8KEY.logs,[]).slice().reverse();content=`<div class="panel"><h2>🛡️ Audit Log / ប្រវត្តិសកម្មភាព</h2>${logs.map(l=>`<div class="log-row"><span>${l.date} · ${l.time}<br><small>${l.user} · ${l.action}</small></span><b>${l.detail}</b></div>`).join('')||`<div class="cart-empty">${t('noRecords')}</div>`}</div>`;} $("adminContent").innerHTML=`<div class="admin-menu">${[['overview','📊 Overview / សង្ខេប'],['products','☕ Products / Menu'],['inventory','📦 Stock / ស្តុក'],['staff','👥 Staff / Users'],['settings','⚙️ Settings / កំណត់'],['audit','🛡️ Audit Log / ប្រវត្តិ']].map(([x,label])=>`<button class="admin-menu-btn ${x===section?'active':''}" onclick="renderAdmin('${x}')">${label}</button>`).join('')}</div>${content}`;}

// Add admin-only period report access and inventory to the navigation after the base bindings are installed.
(function v8Bind(){
  const oldBootNote = true;
  document.addEventListener('click', e=>{ const b=e.target.closest('.tab'); if(!b)return; if(b.dataset.page==='periodReport'){ if(S.role!=='admin')return; $("periodReportTab").classList.remove('hidden'); setTimeout(()=>{if(!$("periodStart").value)$("periodStart").value=today();renderPeriodReport();},0);} });
  setTimeout(()=>{ if(S.role==='admin')$("periodReportTab")?.classList.remove('hidden'); $("generatePeriod")?.addEventListener('click',renderPeriodReport); $("exportCsv")?.addEventListener('click',exportPeriodCSV); $("periodType")?.addEventListener('change',renderPeriodReport); $("periodStart")?.addEventListener('change',renderPeriodReport); },200);
})();

/* Re-bind handlers that were attached before the V10 admin overrides loaded. */
if ($("loginBtn")) $("loginBtn").onclick = login;
if ($("menuSearch")) $("menuSearch").oninput = renderProducts;

/* ========================= V11 WEBSITE CONTROL CENTER ========================= */
const CMS_KEY_V11 = 'nm_cms_v11';
const defaultCMSV11 = {
  shopName: 'nona-me coffee',
  tagline: 'Daily Sales System · ប្រព័ន្ធកត់ត្រាការលក់ប្រចាំថ្ងៃ',
  announcement: 'Welcome to nona-me coffee',
  footer: 'nona-me coffee · Sales Management System',
  loginSubtitle: 'Daily Sales System · ប្រព័ន្ធកត់ត្រាការលក់ប្រចាំថ្ងៃ',
  primary: '#8B2E23', accent: '#C4563B', beige: '#E2C9A8', cream: '#F8F6F1', dark: '#3A2A24', green: '#5A7D5B',
  logoData: '',
  nav: {
    sales: 'Sales / ការលក់', expenses: 'Expenses / ចំណាយ', cash: 'Daily Cash / លុយក្នុងតុ', deposit: 'Deposit / ដាក់ធនាគារ',
    admin: 'Admin / គ្រប់គ្រង', report: 'Daily Report / របាយការណ៍', periodReport: 'Weekly / Monthly', history: 'History / ប្រវត្តិ'
  },
  visible: { sales:true, expenses:true, cash:true, deposit:true, admin:true, report:true, periodReport:true, history:true }
};
function readCMSV11(){ return Object.assign({}, defaultCMSV11, read(CMS_KEY_V11, {}), {nav:Object.assign({},defaultCMSV11.nav,read(CMS_KEY_V11,{}).nav||{}), visible:Object.assign({},defaultCMSV11.visible,read(CMS_KEY_V11,{}).visible||{})}); }
S.cms = readCMSV11();
function saveCMSV11(){ write(CMS_KEY_V11, S.cms); applyCMSV11(); audit('UPDATE WEBSITE / កែ Website', 'Website settings updated'); }
function cssSafe(v, fallback){ return /^#[0-9A-Fa-f]{6}$/.test(String(v||'')) ? v : fallback; }
function applyCMSV11(){
  S.cms = readCMSV11();
  const root=document.documentElement;
  root.style.setProperty('--primary',cssSafe(S.cms.primary,'#8B2E23'));
  root.style.setProperty('--accent',cssSafe(S.cms.accent,'#C4563B'));
  root.style.setProperty('--beige',cssSafe(S.cms.beige,'#E2C9A8'));
  root.style.setProperty('--cream',cssSafe(S.cms.cream,'#F8F6F1'));
  root.style.setProperty('--dark',cssSafe(S.cms.dark,'#3A2A24'));
  root.style.setProperty('--green',cssSafe(S.cms.green,'#5A7D5B'));
  document.title = S.cms.shopName + ' — Sales';
  const brandEls=document.querySelectorAll('.brand b'); brandEls.forEach(el=>el.textContent=S.cms.shopName);
  const loginSub=document.querySelector('.login-sub'); if(loginSub) loginSub.textContent=S.cms.loginSubtitle;
  const tagline=document.querySelector('.brand small'); if(tagline) tagline.textContent='SALES';
  const footer=document.getElementById('siteFooterV11'); if(footer) footer.textContent=S.cms.footer;
  document.querySelectorAll('.tab').forEach(b=>{ const k=b.dataset.page; if(S.cms.nav[k]) b.textContent=S.cms.nav[k]; if(S.cms.visible[k]===false) b.classList.add('hidden'); else if(k!=='admin' || S.role==='admin') b.classList.remove('hidden'); });
  const adminTab=$('adminTab'); if(adminTab) { adminTab.textContent=S.cms.nav.admin; adminTab.classList.toggle('hidden',S.role!=='admin' || S.cms.visible.admin===false); }
  const logo=document.querySelectorAll('.logo-img-v11'); logo.forEach(img=>{img.src=S.cms.logoData||'icons/icon-192.png';});
}
function cmsField(id,label,value,type='text'){ return `<div><label>${label}</label><input id="${id}" type="${type}" value="${escAttr(value??'')}"></div>`; }
function cmsToggle(id,label,on){ return `<label class="cms-toggle"><input id="${id}" type="checkbox" ${on?'checked':''}><span>${label}</span></label>`; }
function renderWebsiteControlV11(){
  const c=S.cms;
  $('adminContent').innerHTML=`
  <div class="admin-menu admin-menu-wrap">
    ${adminMenu('overview')}${adminMenu('site')}${adminMenu('products')}${adminMenu('inventory')}${adminMenu('staff')}${adminMenu('settings')}${adminMenu('audit')}
  </div>
  <section class="panel control-hero-v11"><h2>🛠️ Website Control Center / មជ្ឈមណ្ឌលគ្រប់គ្រង Website</h2><p>កែ Website តាម Dashboard ដោយមិនចាំបាច់សរសេរកូដ។ / Edit the visible website configuration without touching code.</p></section>
  <div class="cms-grid-v11">
    <section class="panel">
      <h2>🏪 Website & Home / ទំព័រហាង</h2>
      <div class="form-grid">
        ${cmsField('cmsShopName','Shop Name / ឈ្មោះហាង',c.shopName)}
        ${cmsField('cmsTagline','Tagline / ពាក្យពិពណ៌នា',c.tagline)}
        ${cmsField('cmsAnnouncement','Announcement / សារជូនដំណឹង',c.announcement)}
        ${cmsField('cmsFooter','Footer / អក្សរខាងក្រោម',c.footer)}
        ${cmsField('cmsLoginSubtitle','Login Subtitle / អក្សរទំព័រ Login',c.loginSubtitle)}
      </div>
      <div class="cms-logo-row"><div><label>Logo / ឡូហ្គោ</label><img id="cmsLogoPreview" class="cms-logo-preview" src="${c.logoData||'icons/icon-192.png'}" alt="Logo"></div><div><input id="cmsLogoFile" type="file" accept="image/png,image/jpeg,image/webp"><p class="muted small">Logo will be stored in browser for this test build.</p></div></div>
    </section>
    <section class="panel">
      <h2>🎨 Appearance / រូបរាង</h2>
      <div class="form-grid">
        ${cmsField('cmsPrimary','Primary Color / ពណ៌មេ',c.primary,'text')}
        ${cmsField('cmsAccent','Accent / ពណ៌បន្ថែម',c.accent,'text')}
        ${cmsField('cmsBeige','Beige / ពណ៌ត្នោតស្រាល',c.beige,'text')}
        ${cmsField('cmsCream','Cream / ផ្ទៃស',c.cream,'text')}
        ${cmsField('cmsDark','Dark / ពណ៌ងងឹត',c.dark,'text')}
        ${cmsField('cmsGreen','Green / បៃតង',c.green,'text')}
      </div>
      <div class="color-preview-v11" style="background:${cssSafe(c.primary,'#8B2E23')}"><span>Preview / មើលជាមុន</span></div>
    </section>
    <section class="panel">
      <h2>🧭 Navigation / Menu</h2>
      <div class="cms-nav-editor-v11">
        ${Object.entries(c.nav).map(([k,v])=>`<div class="cms-nav-row"><label>${k}</label><input id="cmsNav_${k}" value="${escAttr(v)}">${cmsToggle('cmsVis_'+k,'Show / បង្ហាញ',c.visible[k]!==false)}</div>`).join('')}
      </div>
    </section>
    <section class="panel">
      <h2>🔐 User Experience / ការប្រើប្រាស់</h2>
      ${cmsToggle('cmsRememberDefault','Remember Login Default / ចងចាំ Login ជាលំនាំដើម',true)}
      <h3>Printing / ការព្រីន</h3>
      ${cmsToggle('cmsShowPhone','Show Phone on Receipt / បង្ហាញទូរស័ព្ទលើ Receipt',c.receipt?.showPhone!==false)}
      ${cmsToggle('cmsShowAddress','Show Address on Receipt / បង្ហាញអាសយដ្ឋានលើ Receipt',c.receipt?.showAddress!==false)}
      <p class="muted">Staff can use “Save & Print” after each sale. The receipt is formatted for 80mm thermal paper and normal browser printing.</p>
      <p class="muted">Staff/Admin credentials, permissions and database secrets should be moved to Supabase Auth in production.</p>
      <div class="danger-box-v11"><b>Reset Website Settings / កំណត់ Website ឡើងវិញ</b><button class="mini-btn danger" onclick="resetCMSV11()">Reset</button></div>
    </section>
  </div>
  <div class="sticky-save-v11"><button class="save-btn" onclick="saveCMSFormV11()">💾 SAVE ALL WEBSITE CHANGES / រក្សាទុកការកែប្រែទាំងអស់</button></div>`;
  const f=$('cmsLogoFile'); if(f) f.onchange=()=>{ const file=f.files?.[0]; if(!file)return; const r=new FileReader(); r.onload=()=>{$('cmsLogoPreview').src=r.result;}; r.readAsDataURL(file); };
}
function saveCMSFormV11(){
  const c=S.cms;
  c.shopName=$('cmsShopName').value.trim()||defaultCMSV11.shopName;
  c.tagline=$('cmsTagline').value.trim(); c.announcement=$('cmsAnnouncement').value.trim(); c.footer=$('cmsFooter').value.trim(); c.loginSubtitle=$('cmsLoginSubtitle').value.trim();
  c.primary=cssSafe($('cmsPrimary').value,'#8B2E23'); c.accent=cssSafe($('cmsAccent').value,'#C4563B'); c.beige=cssSafe($('cmsBeige').value,'#E2C9A8'); c.cream=cssSafe($('cmsCream').value,'#F8F6F1'); c.dark=cssSafe($('cmsDark').value,'#3A2A24'); c.green=cssSafe($('cmsGreen').value,'#5A7D5B');
  Object.keys(c.nav).forEach(k=>{const n=$('cmsNav_'+k); if(n)c.nav[k]=n.value.trim()||defaultCMSV11.nav[k]; const tgl=$('cmsVis_'+k); if(tgl)c.visible[k]=tgl.checked;});
  const preview=$('cmsLogoPreview'); if(preview && preview.src && preview.src.startsWith('data:')) c.logoData=preview.src;
  saveCMSV11();
  renderWebsiteControlV11();
  renderAll();
  alert(S.lang==='kh'?'រក្សាទុកការកែ Website រួចរាល់':'Website settings saved');
}
function resetCMSV11(){ if(!confirm('Reset Website Settings / កំណត់ Website ត្រឡប់ទៅ Default?'))return; S.cms=JSON.parse(JSON.stringify(defaultCMSV11)); write(CMS_KEY_V11,S.cms); applyCMSV11(); renderWebsiteControlV11(); renderAll(); audit('RESET WEBSITE / កំណត់ Website ឡើងវិញ','CMS defaults'); }
const _adminMenuV11=adminMenu;
adminMenu=function(section){
  const labels={overview:'📊 Overview / សង្ខេប',site:'🛠️ Website / Website Control',products:'☕ Products / Menu',inventory:'📦 Stock / ស្តុក',staff:'👥 Staff / Users',settings:'⚙️ Settings / កំណត់',audit:'🛡️ Audit Log / ប្រវត្តិសកម្មភាព'};
  if(!labels[section]) return '';
  return `<button class="admin-menu-btn ${section==='site'?'cms-admin-btn':''} ${S.__adminSection===section?'active':''}" onclick="renderAdmin('${section}')">${labels[section]}</button>`;
}
const _renderAdminV10 = renderAdmin;
renderAdmin=function(section){
  S.__adminSection=section;
  if(section==='site') return renderWebsiteControlV11();
  return _renderAdminV10(section);
};
applyCMSV11();
setTimeout(()=>{ if(!$('siteFooterV11')){ const f=document.createElement('div'); f.id='siteFooterV11'; f.className='site-footer-v11'; f.textContent=S.cms.footer; document.querySelector('main.wrap')?.appendChild(f); } applyCMSV11(); },50);

/* ========================= V14: PROMOTIONS + FULL ADMIN CONTROL ========================= */
const PROMO_KEY_V14='nm_promotions_v14';
const defaultPromotionsV14=[
  {id:'promo-2for6000',nameEn:'2 Cups Special',nameKh:'ប្រូម៉ូសិន ២ កែវ',buyQty:2,promoPriceKHR:6000,active:true,products:'ALL'}
];
S.promotions=read(PROMO_KEY_V14,defaultPromotionsV14);
function savePromotions(){write(PROMO_KEY_V14,S.promotions);}
function activePromos(){return (S.promotions||[]).filter(p=>p.active!==false);}
function promoForCurrent(){const id=$("promoSelect")?.value||'';return activePromos().find(p=>p.id===id)||null;}
function promotionItemTotalKHR(item,promo){
  if(!promo || promo.buyQty<2) return item.priceKHR*item.qty;
  const applies=promo.products==='ALL' || String(promo.products||'').split(',').includes(String(item.productIndex));
  if(!applies) return item.priceKHR*item.qty;
  const groups=Math.floor(item.qty/promo.buyQty), rem=item.qty%promo.buyQty;
  return groups*Number(promo.promoPriceKHR)+rem*item.priceKHR;
}
function cartKhrV14(){const promo=promoForCurrent(); return Object.values(S.cart).reduce((sum,v)=>sum+promotionItemTotalKHR(v,promo),0);}
function renderPromoSelectV14(){
  const el=$("promoSelect"); if(!el)return;
  const current=el.value;
  el.innerHTML='<option value="">No Promotion / គ្មានប្រូម៉ូសិន</option>'+activePromos().map(p=>`<option value="${escAttr(p.id)}">${esc(p.nameEn)} / ${esc(p.nameKh)} — ${moneyKHR(p.promoPriceKHR)} / ${p.buyQty} cups</option>`).join('');
  el.value=activePromos().some(p=>p.id===current)?current:'';
  const promo=promoForCurrent(); const hint=$("promoHint");
  if(hint) hint.textContent=promo?`${promo.nameKh} · ${promo.buyQty} cups = ${moneyKHR(promo.promoPriceKHR)} / ${promo.nameEn}`:'Normal price / តម្លៃធម្មតា';
}
function renderProductsV14(){
  ensureProductsLoaded(); const q=( $("menuSearch")?.value||'').toLowerCase();
  const list=S.products.map((p,i)=>({p,i})).filter(({p})=>p[4]!==false && (S.category==='All'||p[3]===S.category) && (`${p[0]} ${p[1]}`).toLowerCase().includes(q));
  $("productGrid").innerHTML=list.map(({p,i})=>`<button class="product" onclick="addToCart(${i})"><div>${esc(p[0])}</div><span class="kh">${esc(p[1])}</span><span class="price">${moneyKHR(p[2])} / ${moneyUSD(p[2]/S.rate)}</span></button>`).join('') || `<div class="cart-empty">${t('noRecords')}</div>`;
}
function addToCartV14(i){const p=S.products[i]; if(!p || p[4]===false)return; S.cart[i]=S.cart[i]||{name:p[0],kh:p[1],priceKHR:p[2],qty:0,productIndex:i}; S.cart[i].qty++; renderCartV14();}
function minusV14(i){if(!S.cart[i])return;S.cart[i].qty--;if(S.cart[i].qty<=0)delete S.cart[i];renderCartV14();}
function renderCartV14(){
  const items=Object.entries(S.cart), promo=promoForCurrent(), total=cartKhrV14();
  renderPromoSelectV14();
  if(!items.length){$("cart").innerHTML=`<div class="cart-empty">☕ ${t('selectDrink')}</div>`;$("cartTotal").textContent='0៛';return;}
  let rows='<table class="cart-table"><thead><tr><th>Item / មុខទំនិញ</th><th>Qty</th><th>Amount / តម្លៃ</th></tr></thead><tbody>';
  items.forEach(([i,v])=>{const normal=v.priceKHR*v.qty, final=promotionItemTotalKHR(v,promo);const discount=Math.max(0,normal-final);rows+=`<tr><td>${S.lang==='kh'?esc(v.kh):esc(v.name)}${discount>0?`<div class="promo-line">${esc(promo.nameKh)} / ${esc(promo.nameEn)} − ${moneyKHR(discount)}</div>`:''}</td><td><button class="qty-btn" onclick="minusV14(${i})">−</button> ${v.qty} <button class="qty-btn" onclick="addToCartV14(${i})">+</button></td><td>${S.currency==='KHR'?moneyKHR(final):moneyUSD(final/S.rate)}</td></tr>`;});
  rows+='</tbody></table>';
  const normal=Object.values(S.cart).reduce((a,v)=>a+v.priceKHR*v.qty,0), discount=Math.max(0,normal-total);
  $("cart").innerHTML=rows+(discount?`<div class="discount-row"><span>Promotion Discount / បញ្ចុះតម្លៃ</span><b>− ${moneyKHR(discount)}</b></div>`:'');
  $("cartTotal").textContent=S.currency==='KHR'?moneyKHR(total):moneyUSD(total/S.rate);
}
function createSaleRecordV14(){
  const items=Object.values(S.cart); if(!items.length)return null; const d=now(),promo=promoForCurrent();
  const grossKHR=items.reduce((s,v)=>s+v.priceKHR*v.qty,0), totalKHR=cartKhrV14(), discountKHR=Math.max(0,grossKHR-totalKHR), cups=items.reduce((s,v)=>s+v.qty,0);
  const amount=S.currency==='KHR'?totalKHR:totalKHR/S.rate;
  const sale={id:String(Date.now()),date:today(),time:d.toLocaleTimeString(),user:S.user,payment:S.payment,currency:S.currency,amount,totalKHR,grossKHR,discountKHR,promotion:promo?{id:promo.id,nameEn:promo.nameEn,nameKh:promo.nameKh,buyQty:promo.buyQty,promoPriceKHR:promo.promoPriceKHR}:null,cups,rate:S.rate,createdAt:Date.now(),items:items.map(v=>({name:v.name,kh:v.kh,priceKHR:v.priceKHR,qty:v.qty,productIndex:v.productIndex}))};
  S.sales.push(sale);write(KEY.sales,S.sales);audit('SALE / ការលក់',promo?`${sale.id} · ${promo.nameEn}`:sale.id);S.cart={};return sale;
}
function saveSaleV14(){const sale=createSaleRecordV14();if(!sale)return alert(t('chooseDrink'));renderAll();alert(t('saved'));}
function saveSaleAndPrintV14(){const sale=createSaleRecordV14();if(!sale)return alert(t('chooseDrink'));renderAll();printReceiptV14(sale);}
function printReceiptV14(sale){
  const c=S.cms||{};const shop=escAttr(c.shopName||S.settings.shopName||'nona-me coffee');const phone=escAttr(S.settings.phone||'');const address=escAttr(S.settings.address||'');
  const rows=(sale.items||[]).map(i=>{const final=promotionItemTotalKHR(i,sale.promotion);return `<tr><td>${S.lang==='kh'?(i.kh||i.name):i.name}${sale.promotion?`<div style="font-size:9px">${esc(sale.promotion.nameKh)} / ${esc(sale.promotion.nameEn)}</div>`:''}</td><td>${i.qty}</td><td>${sale.currency==='KHR'?moneyKHR(final):moneyUSD(final/sale.rate)}</td></tr>`}).join('');
  const total=sale.currency==='KHR'?moneyKHR(sale.amount):moneyUSD(sale.amount);const discount=sale.discountKHR||0;
  const html=`<!doctype html><html lang="km"><head><meta charset="utf-8"><title>Receipt ${sale.id}</title><style>@page{size:80mm auto;margin:4mm}*{box-sizing:border-box}body{font-family:Arial,'Noto Sans Khmer',sans-serif;width:72mm;margin:0 auto;color:#222;font-size:12px}.center{text-align:center}.brand{font-size:18px;font-weight:800}.muted{color:#666;font-size:10px}.line{border-top:1px dashed #777;margin:7px 0}table{width:100%;border-collapse:collapse}th,td{padding:4px 0;text-align:left;vertical-align:top}th:last-child,td:last-child{text-align:right}.discount{display:flex;justify-content:space-between;margin-top:6px}.total{font-size:16px;font-weight:800;display:flex;justify-content:space-between;margin-top:8px}.thanks{text-align:center;margin-top:12px;font-weight:700}</style></head><body><div class="center"><div class="brand">${shop}</div>${phone?`<div>${phone}</div>`:''}${address?`<div>${address}</div>`:''}<div class="line"></div><div><b>Receipt / វិក័យប័ត្រ</b></div><div class="muted">${sale.date} · ${sale.time}</div><div class="muted">${sale.user} · ${sale.payment}</div></div><div class="line"></div><table><thead><tr><th>Item / មុខទំនិញ</th><th>Qty</th><th>Amount</th></tr></thead><tbody>${rows}</tbody></table>${discount?`<div class="line"></div><div class="discount"><span>Promotion / ប្រូម៉ូសិន</span><b>− ${moneyKHR(discount)}</b></div>`:''}<div class="line"></div><div class="total"><span>Total / សរុប</span><span>${total}</span></div><div class="muted">Currency: ${sale.currency} · Rate: ${Number(sale.rate).toLocaleString()}៛/$1</div><div class="thanks">Thank you / សូមអរគុណ</div><script>window.onload=()=>{window.print();setTimeout(()=>window.close(),500)}<\/script></body></html>`;
  const w=window.open('','_blank','width=420,height=700');if(!w){alert(S.lang==='kh'?'Browser បានរារាំង Print Window។ សូមអនុញ្ញាត Pop-ups។':'Print window was blocked. Please allow pop-ups.');return;}w.document.open();w.document.write(html);w.document.close();
}

// Full Admin Control Center labels + Website + Promotions.
function adminMenuV14(section){
  const L={overview:'📊 Overview / សង្ខេប',site:'🛠️ Website Control / គ្រប់គ្រង Website',products:'☕ Products & Menu / មុខទំនិញ និងមីនុយ',promotions:'🏷️ Promotions / ប្រូម៉ូសិន',inventory:'📦 Inventory / ស្តុក',staff:'👥 Staff & Users / បុគ្គលិក និងអ្នកប្រើ',settings:'⚙️ Shop Settings / កំណត់ហាង',audit:'🛡️ Audit Log / ប្រវត្តិសកម្មភាព'};
  return `<button class="admin-menu-btn ${section==='overview'?'active':''}" onclick="renderAdmin('${section}')">${L[section]||section}</button>`;
}
function adminNavV14(active){return `<div class="admin-menu admin-menu-wrap">${['overview','site','products','promotions','inventory','staff','settings','audit'].map(x=>adminMenuV14(x)).join('')}</div>`;}
function renderPromotionsAdminV14(){
  ensureProductsLoaded();
  $("adminContent").innerHTML=adminNavV14('promotions')+`<section class="panel"><h2>🏷️ Promotions / ប្រូម៉ូសិន</h2><p class="muted">Create a promotion and define the bundle price. Example: 2 cups for 6,000៛.</p>
  <div class="form-grid"><div><label>English Name / ឈ្មោះអង់គ្លេស</label><input id="promoEn" placeholder="2 Cups Special"></div><div><label>Khmer Name / ឈ្មោះខ្មែរ</label><input id="promoKh" placeholder="ប្រូម៉ូសិន ២ កែវ"></div><div><label>Buy Cups / ចំនួនកែវ</label><input id="promoQty" type="number" min="2" value="2"></div><div><label>Promo Total KHR / តម្លៃសរុបប្រូម៉ូសិន</label><input id="promoPrice" type="number" min="0" value="6000"></div></div>
  <label>Applies To / ប្រើសម្រាប់</label><select id="promoProducts"><option value="ALL">All Products / មុខទំនិញទាំងអស់</option>${S.products.map((p,i)=>`<option value="${i}">${esc(p[0])} / ${esc(p[1])}</option>`).join('')}</select>
  <br><br><button class="save-btn" onclick="addPromotionAdminV14()">➕ ADD PROMOTION / បន្ថែមប្រូម៉ូសិន</button>
  <div style="margin-top:18px">${(S.promotions||[]).map((p,i)=>`<div class="admin-edit-row"><div><b>${esc(p.nameEn)} / ${esc(p.nameKh)}</b><br><span class="muted">${p.buyQty} cups → ${moneyKHR(p.promoPriceKHR)} · ${p.active!==false?'Active / ដំណើរការ':'Disabled / បិទ'}</span></div><div class="row-actions"><button class="mini-btn" onclick="editPromotionAdminV14(${i})">✏️ Edit / កែ</button><button class="mini-btn" onclick="togglePromotionAdminV14(${i})">${p.active!==false?'⏸ Disable / បិទ':'▶️ Enable / បើក'}</button><button class="mini-btn danger" onclick="deletePromotionAdminV14(${i})">🗑 Delete / លុប</button></div></div>`).join('')}</div></section>`;
}
function addPromotionAdminV14(){const en=$("promoEn").value.trim(),kh=$("promoKh").value.trim(),qty=Math.max(2,Number($("promoQty").value||2)),price=Math.max(0,Number($("promoPrice").value||0)),products=$("promoProducts").value;if(!en||!kh||price<=0)return alert('Promotion name + price required / ត្រូវការឈ្មោះ និងតម្លៃ');S.promotions.push({id:'promo-'+Date.now(),nameEn:en,nameKh:kh,buyQty:qty,promoPriceKHR:price,active:true,products});savePromotions();audit('ADD PROMOTION / បន្ថែមប្រូម៉ូសិន',en);renderPromotionsAdminV14();}
function editPromotionAdminV14(i){const p=S.promotions[i];const en=prompt('English Name / ឈ្មោះអង់គ្លេស',p.nameEn);if(en===null)return;const kh=prompt('Khmer Name / ឈ្មោះខ្មែរ',p.nameKh);if(kh===null)return;const qty=prompt('Buy Cups / ចំនួនកែវ',p.buyQty);if(qty===null)return;const price=prompt('Promo Total KHR / តម្លៃសរុប',p.promoPriceKHR);if(price===null)return;p.nameEn=en.trim()||p.nameEn;p.nameKh=kh.trim()||p.nameKh;p.buyQty=Math.max(2,Number(qty)||p.buyQty);p.promoPriceKHR=Math.max(0,Number(price)||p.promoPriceKHR);savePromotions();audit('EDIT PROMOTION / កែប្រូម៉ូសិន',p.nameEn);renderPromotionsAdminV14();}
function togglePromotionAdminV14(i){S.promotions[i].active=S.promotions[i].active===false;savePromotions();audit(S.promotions[i].active?'ENABLE PROMOTION / បើក':'DISABLE PROMOTION / បិទ',S.promotions[i].nameEn);renderPromotionsAdminV14();renderPromoSelectV14();}
function deletePromotionAdminV14(i){const p=S.promotions[i];if(!confirm(`Delete ${p.nameEn} / លុបប្រូម៉ូសិននេះ?`))return;S.promotions.splice(i,1);savePromotions();audit('DELETE PROMOTION / លុបប្រូម៉ូសិន',p.nameEn);renderPromotionsAdminV14();}

function renderWebsiteControlV14(){
  const c=S.cms||{};
  $("adminContent").innerHTML=adminNavV14('site')+`<section class="panel control-hero-v11"><h2>🛠️ Website Control / គ្រប់គ្រង Website</h2><p>Edit the website without coding. / កែ Website ដោយមិនចាំបាច់សរសេរកូដ។</p></section><div class="cms-grid-v11">
  <section class="panel"><h2>🏪 Website Content / មាតិកា Website</h2><div class="form-grid"><div><label>Shop Name / ឈ្មោះហាង</label><input id="cmsShopName" value="${escAttr(c.shopName)}"></div><div><label>Tagline / ពាក្យពិពណ៌នា</label><input id="cmsTagline" value="${escAttr(c.tagline)}"></div><div><label>Announcement / សារជូនដំណឹង</label><input id="cmsAnnouncement" value="${escAttr(c.announcement)}"></div><div><label>Footer / អក្សរខាងក្រោម</label><input id="cmsFooter" value="${escAttr(c.footer)}"></div><div><label>Login Subtitle / អក្សរនៅ Login</label><input id="cmsLoginSubtitle" value="${escAttr(c.loginSubtitle)}"></div></div></section>
  <section class="panel"><h2>🎨 Appearance / រូបរាង</h2><div class="form-grid"><div><label>Primary / ពណ៌មេ</label><input id="cmsPrimary" value="${escAttr(c.primary)}"></div><div><label>Accent / ពណ៌បន្ថែម</label><input id="cmsAccent" value="${escAttr(c.accent)}"></div><div><label>Beige / ត្នោតស្រាល</label><input id="cmsBeige" value="${escAttr(c.beige)}"></div><div><label>Cream / ក្រែម</label><input id="cmsCream" value="${escAttr(c.cream)}"></div><div><label>Dark / ងងឹត</label><input id="cmsDark" value="${escAttr(c.dark)}"></div><div><label>Green / បៃតង</label><input id="cmsGreen" value="${escAttr(c.green)}"></div></div></section>
  <section class="panel"><h2>🧭 Navigation / Menu</h2>${Object.entries(c.nav||{}).map(([k,v])=>`<div class="cms-nav-row"><label>${k}</label><input id="cmsNav_${k}" value="${escAttr(v)}"><label class="cms-toggle"><input id="cmsVis_${k}" type="checkbox" ${c.visible?.[k]!==false?'checked':''}><span>Show / បង្ហាញ</span></label></div>`).join('')}</section>
  <section class="panel"><h2>🖨️ Printing / ការព្រីន</h2><p>Receipt printing / ការព្រីនវិក្កយបត្រ: <b>Save & Print</b></p><div class="form-grid"><div><label>Paper / ក្រដាស</label><select id="printPaper"><option>80mm</option><option>58mm</option><option>A4</option></select></div><div><label>Receipt Footer / Footer</label><input id="receiptFooter" value="${escAttr(c.receipt?.footer||'Thank you / សូមអរគុណ')}"></div></div><div class="danger-box-v11"><b>Reset Website Settings / កំណត់ Website ឡើងវិញ</b><button class="mini-btn danger" onclick="resetCMSV14()">Reset</button></div></section>
  </div><div class="sticky-save-v11"><button class="save-btn" onclick="saveCMSFormV14()">💾 SAVE WEBSITE CHANGES / រក្សាទុកការកែ Website</button></div>`;
}
function saveCMSFormV14(){const c=S.cms||{};c.shopName=$("cmsShopName").value.trim();c.tagline=$("cmsTagline").value.trim();c.announcement=$("cmsAnnouncement").value.trim();c.footer=$("cmsFooter").value.trim();c.loginSubtitle=$("cmsLoginSubtitle").value.trim();['Primary','Accent','Beige','Cream','Dark','Green'].forEach(x=>{const id='cms'+x;c[x.toLowerCase()]=cssSafe($(id).value,c[x.toLowerCase()]);});for(const k of Object.keys(c.nav||{})){const n=$("cmsNav_"+k);const v=$("cmsVis_"+k);if(n)c.nav[k]=n.value.trim();if(v)c.visible[k]=v.checked;}c.receipt=c.receipt||{};c.receipt.footer=$("receiptFooter").value.trim();S.cms=c;write(CMS_KEY_V11,c);applyCMSV11();audit('UPDATE WEBSITE / កែ Website','CMS updated');renderWebsiteControlV14();renderAll();alert(S.lang==='kh'?'បានរក្សាទុកការកែ Website':'Website changes saved');}
function resetCMSV14(){if(!confirm('Reset Website Settings / កំណត់ Website ត្រឡប់ Default?'))return;S.cms=JSON.parse(JSON.stringify(defaultCMSV11));write(CMS_KEY_V11,S.cms);applyCMSV11();renderWebsiteControlV14();}

const renderAdminBaseV14=renderAdmin;
renderAdmin=function(section){S.__adminSection=section;if(section==='site')return renderWebsiteControlV14();if(section==='promotions')return renderPromotionsAdminV14();return renderAdminBaseV14(section);};
const createSaleRecordBaseV14=createSaleRecord; // retained reference for compatibility
createSaleRecord=createSaleRecordV14;
saveSale=saveSaleV14;saveSaleAndPrint=saveSaleAndPrintV14;
cartKhr=cartKhrV14;renderCart=renderCartV14;addToCart=addToCartV14;minus=minusV14;renderProducts=renderProductsV14;
const renderAllBaseV14=renderAll;renderAll=function(){renderPromoSelectV14();renderAllBaseV14();setTimeout(renderPromoSelectV14,0);};

// Ensure admin navigation is bilingual everywhere.
const oldRenderOverviewV14=renderOverview;
renderOverview=function(){oldRenderOverviewV14();};

// Bind promo selector after DOM is available.
function bindV14(){
  const p=$("promoSelect"); if(p && !p.__bound){p.__bound=true;p.onchange=()=>{renderPromoSelectV14();renderCartV14();};}
}
const oldBootV14=boot;
boot=async function(){await oldBootV14();renderPromoSelectV14();bindV14();};

// Run language and bindings after each page rebuild.
const oldShowPageV14=showPage;showPage=function(name,btn){oldShowPageV14(name,btn);if(name==='admin'&&S.role==='admin')renderAdmin(S.__adminSection||'overview');bindV14();};

/* Final start */
boot();

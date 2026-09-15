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
  S.products = await fetch("products.json").then(r => r.json());
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

function renderCategories() { const cats = ["All", "Coffee", "Matcha", "Cacao", "Tea", "Soda"], kh = { All: "ទាំងអស់", Coffee: "កាហ្វេ", Matcha: "Matcha", Cacao: "កាកាវ", Tea: "តែ", Soda: "សូដា" }; $("categoryBar").innerHTML = cats.map(c => `<button class="chip ${S.category === c ? "active" : ""}" onclick="setCategory('${c}')">${S.lang === "kh" ? kh[c] : c}</button>`).join(""); }
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
function saveSale() {
  const items = Object.values(S.cart); if (!items.length) return alert(t("chooseDrink"));
  const d = now(), totalKHR = cartKhr(), cups = items.reduce((s, v) => s + v.qty, 0), amount = S.currency === "KHR" ? totalKHR : totalKHR / S.rate;
  S.sales.push({ id: String(Date.now()), date: today(), time: d.toLocaleTimeString(), user: S.user, payment: S.payment, currency: S.currency, amount, totalKHR, cups, rate: S.rate, createdAt: Date.now(), items: items.map(v => ({ name: v.name, kh: v.kh, priceKHR: v.priceKHR, qty: v.qty })) });
  write(KEY.sales, S.sales); S.cart = {}; renderCart(); refreshAll(); renderReport(); alert(t("saved"));
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

function renderAdmin(section) { if (S.role !== "admin") return; const o = summary(); let content = ""; if (section === "overview") content = `<div class="admin-grid"><section class="panel"><h2>📊 Overview / សង្ខេប</h2><div class="admin-kpi">${moneyKHR(o.salesKHR)}</div><p class="muted">${t("salesKHR")}</p><div class="bar"><i style="width:${Math.min(100, o.salesKHR ? (o.cashKHR / o.salesKHR) * 100 : 0)}%"></i></div><p class="muted small">${o.tx} transactions · ${o.cups} cups</p></section><section class="panel"><h2>💰 Cash / សាច់ប្រាក់</h2><div class="result-line"><span>KHR</span><b>${moneyKHR(expectedCurrentCash().khr)}</b></div><div class="result-line"><span>USD</span><b>${moneyUSD(expectedCurrentCash().usd)}</b></div></section></div>`; else if (section === "products") content = `<div class="panel"><h2>☕ Products / Menu</h2>${S.products.map(p => `<div class="list-row"><span>${p[0]}<br><small>${p[1]} · ${p[3]}</small></span><b>${moneyKHR(p[2])}</b></div>`).join("")}</div>`; else if (section === "staff") content = `<div class="panel"><h2>👥 Staff / Users</h2><div class="user-row"><span>Admin<br><small>Owner</small></span><b class="role admin-role">ADMIN</b></div><div class="user-row"><span>Staff 01</span><b class="role">STAFF</b></div><div class="user-row"><span>Staff 02</span><b class="role">STAFF</b></div></div>`; else if (section === "settings") content = `<div class="panel"><h2>⚙️ Shop Settings / ព័ត៌មានហាង</h2><div class="form-grid"><div><label>Shop Name / ឈ្មោះហាង</label><input id="setShop" value="${escAttr(S.settings.shopName)}"></div><div><label>Phone / ទូរស័ព្ទ</label><input id="setPhone" value="${escAttr(S.settings.phone)}"></div><div><label>Telegram</label><input id="setTelegram" value="${escAttr(S.settings.telegram)}"></div><div><label>Address / អាសយដ្ឋាន</label><input id="setAddress" value="${escAttr(S.settings.address)}"></div></div><label>Default Exchange Rate / អត្រាប្តូរប្រាក់</label><input id="setRate" type="number" value="${S.rate}"><button class="save-btn" onclick="saveSettings()">SAVE SETTINGS / រក្សាទុក</button></div>`; else if (section === "audit") { const logs = [...S.sales.map(x => ({ t: x.time, a: "SALE / ការលក់", u: x.user, d: x.currency === "KHR" ? moneyKHR(x.amount) : moneyUSD(x.amount) })), ...S.expenses.map(x => ({ t: x.time, a: "EXPENSE / ចំណាយ", u: x.user, d: x.desc })), ...S.deposits.map(x => ({ t: x.time, a: "DEPOSIT / ដាក់ធនាគារ", u: x.user, d: x.currency === "KHR" ? moneyKHR(x.amount) : moneyUSD(x.amount) }))].slice(-30).reverse(); content = `<div class="panel"><h2>🛡️ Audit Log / ប្រវត្តិសកម្មភាព</h2>${logs.map(l => `<div class="log-row"><span>${l.t} · ${l.a}<br><small>${l.u}</small></span><b>${l.d}</b></div>`).join("") || `<div class="cart-empty">${t("noRecords")}</div>`}</div>`; }
  $("adminContent").innerHTML = `<div class="admin-menu">${["overview", "products", "staff", "settings", "audit"].map(x => `<button class="admin-menu-btn ${x === section ? "active" : ""}" onclick="renderAdmin('${x}')">${x === "overview" ? "📊 " : x === "products" ? "☕ " : x === "staff" ? "👥 " : x === "settings" ? "⚙️ " : "🛡️ "}${x}</button>`).join("")}</div>${content}`;
}
function escAttr(v) { return String(v || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function saveSettings() { S.settings = { shopName: $("setShop").value.trim(), phone: $("setPhone").value.trim(), telegram: $("setTelegram").value.trim(), address: $("setAddress").value.trim() }; S.rate = Math.max(1, Number($("setRate").value || 4000)); write(KEY.settings, S.settings); localStorage.setItem(KEY.rate, S.rate); $("rateInput").value = S.rate; renderAll(); alert(t("saved")); }

boot();

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

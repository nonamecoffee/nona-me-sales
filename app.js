const S={user:null,role:null,lang:"kh",products:[],category:"All",cart:{},currency:"KHR",payment:"Cash",
rate:Number(localStorage.getItem("nm_rate")||4000),
sales:JSON.parse(localStorage.getItem("nm_sales_v6")||"[]"),
expenses:JSON.parse(localStorage.getItem("nm_expenses_v6")||"[]"),
deposits:JSON.parse(localStorage.getItem("nm_deposits_v6")||"[]"),
cashCounts:JSON.parse(localStorage.getItem("nm_cashcounts_v6")||"[]"),
settings:JSON.parse(localStorage.getItem("nm_settings_v6")||'{"shopName":"nona-me coffee","phone":"","telegram":"","address":""}')};
const $=id=>document.getElementById(id), moneyKHR=n=>Number(n||0).toLocaleString()+"៛", moneyUSD=n=>"$"+Number(n||0).toFixed(2);
async function boot(){
  S.products=await fetch("products.json").then(r=>r.json());
  $("loginBtn").onclick=login;
  $("password").addEventListener("keydown",e=>e.key==="Enter"&&login());
  $("logoutBtn").onclick=()=>location.reload();
  $("langBtn").onclick=()=>{S.lang=S.lang==="kh"?"en":"kh";renderAll()};
  $("menuSearch").oninput=renderProducts;
  $("rateInput").oninput=e=>{S.rate=Math.max(1,Number(e.target.value||4000));localStorage.setItem("nm_rate",S.rate);renderCart();refreshAll()};
  $("saveSaleBtn").onclick=saveSale;
  $("saveExpenseBtn").onclick=saveExpense;
  $("saveDepositBtn").onclick=saveDeposit;
  $("saveCashCountBtn").onclick=saveCashCount;
  $("exportPng").onclick=exportPng;
  $("copyText").onclick=copyText;
  $("downloadTxt").onclick=downloadTxt;
  $("shareTelegram").onclick=shareTelegram;
  document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>showPage(b.dataset.page,b));
  document.querySelectorAll(".currency-btn").forEach(b=>b.onclick=()=>{S.currency=b.dataset.currency;document.querySelectorAll(".currency-btn").forEach(x=>x.classList.toggle("active",x===b));renderCart()});
  document.querySelectorAll(".pay-btn").forEach(b=>b.onclick=()=>{S.payment=b.dataset.payment;document.querySelectorAll(".pay-btn").forEach(x=>x.classList.toggle("active",x===b))});
  $("rateInput").value=S.rate;
  renderAll();
}

function login(){const u=$("username").value.trim(),p=$("password").value;if((u==="admin"&&p==="admin")||(u.startsWith("staff")&&p==="1234")){S.user=u;S.role=u==="admin"?"admin":"staff";$("loginScreen").classList.add("hidden");$("app").classList.remove("hidden");$("userLine").textContent=`${u} · ${S.role.toUpperCase()}`;if(S.role==="admin")$("adminTab").classList.remove("hidden");refreshAll()}else alert("Invalid username or password / ឈ្មោះអ្នកប្រើ ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ")}
function showPage(name,btn){
  document.querySelectorAll(".page").forEach(x=>x.classList.add("hidden"));
  $(name+"Page").classList.remove("hidden");
  document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active");
  if(name==="expenses")renderExpenses();
  if(name==="cash")renderCash();
  if(name==="deposit")renderDeposits();
  if(name==="report")renderReport();
  if(name==="history")renderHistory();
  if(name==="admin")renderAdmin("overview");
}

function renderAll(){
  renderCategories();renderProducts();renderCart();renderExpenses();renderCash();renderDeposits();renderReport();renderHistory();
  if(S.role==="admin")renderAdmin("overview");
  refreshAll();
}

function renderCategories(){const cats=["All","Coffee","Matcha","Cacao","Tea","Soda"],kh={All:"ទាំងអស់",Coffee:"កាហ្វេ",Matcha:"Matcha",Cacao:"កាកាវ",Tea:"តែ",Soda:"សូដា"};$("categoryBar").innerHTML=cats.map(c=>`<button class="chip ${S.category===c?"active":""}" onclick="setCategory('${c}')">${S.lang==="kh"?kh[c]:c}</button>`).join("")}
function setCategory(c){S.category=c;renderCategories();renderProducts()}
function renderProducts(){const q=($("menuSearch").value||"").toLowerCase();const list=S.products.filter(p=>(S.category==="All"||p[3]===S.category)&&(`${p[0]} ${p[1]}`).toLowerCase().includes(q));$("productGrid").innerHTML=list.map(p=>{const i=S.products.indexOf(p);return `<button class="product" onclick="addToCart(${i})"><div>${p[0]}</div><span class="kh">${p[1]}</span><span class="price">${moneyKHR(p[2])} / ${moneyUSD(p[2]/S.rate)}</span></button>`}).join("")}
function addToCart(i){const p=S.products[i];S.cart[i]=S.cart[i]||{name:p[0],kh:p[1],priceKHR:p[2],qty:0};S.cart[i].qty++;renderCart()}
function minus(i){if(!S.cart[i])return;S.cart[i].qty--;if(S.cart[i].qty<=0)delete S.cart[i];renderCart()}
function cartKhr(){return Object.values(S.cart).reduce((s,v)=>s+v.priceKHR*v.qty,0)}
function renderCart(){const items=Object.entries(S.cart),total=cartKhr();if(!items.length){$("cart").innerHTML='<div class="cart-empty">Select drinks / ជ្រើសភេសជ្ជៈ</div>';$("cartTotal").textContent="0៛";return}let rows="";items.forEach(([i,v])=>rows+=`<tr><td>${S.lang==="kh"?v.kh:v.name}</td><td><button class="qty-btn" onclick="minus(${i})">−</button> ${v.qty} <button class="qty-btn" onclick="addToCart(${i})">+</button></td><td>${S.currency==="KHR"?moneyKHR(v.priceKHR*v.qty):moneyUSD((v.priceKHR*v.qty)/S.rate)}</td></tr>`);$("cart").innerHTML=`<table class="cart-table"><tr><th>Item</th><th>Qty</th><th>Total</th></tr>${rows}</table>`;$("cartTotal").textContent=S.currency==="KHR"?moneyKHR(total):moneyUSD(total/S.rate)}
function saveSale(){const items=Object.values(S.cart);if(!items.length)return alert("Select a drink first / សូមជ្រើសភេសជ្ជៈ");const totalKHR=cartKhr(),cups=items.reduce((s,v)=>s+v.qty,0),amount=S.currency==="KHR"?totalKHR:totalKHR/S.rate;S.sales.push({id:String(Date.now()),date:new Date().toISOString().slice(0,10),time:new Date().toLocaleTimeString(),user:S.user,payment:S.payment,currency:S.currency,amount,totalKHR,cups,rate:S.rate,items:items.map(v=>({name:v.name,kh:v.kh,priceKHR:v.priceKHR,qty:v.qty}))});localStorage.setItem("nm_sales_v5",JSON.stringify(S.sales));S.cart={};renderCart();refreshAll();renderReport()}
function saveExpense(){const desc=$("expenseDesc").value.trim(),amount=Number($("expenseAmount").value||0);if(!desc||amount<=0)return alert("Enter description and amount / សូមបញ្ចូលអ្វីដែលចំណាយ និងចំនួនទឹកប្រាក់");S.expenses.push({id:String(Date.now()),date:new Date().toISOString().slice(0,10),time:new Date().toLocaleTimeString(),user:S.user,desc,amount,currency:$("expenseCurrency").value,payment:$("expensePayment").value,note:$("expenseNote").value.trim(),rate:S.rate});localStorage.setItem("nm_expenses_v5",JSON.stringify(S.expenses));$("expenseDesc").value="";$("expenseAmount").value="";$("expenseNote").value="";renderExpenses();renderReport();refreshAll()}
function today(){return new Date().toISOString().slice(0,10)}
function tsales(){return S.sales.filter(s=>s.date===today())}
function texpenses(){return S.expenses.filter(s=>s.date===today())}
function tdeposits(){return S.deposits.filter(s=>s.date===today())}
function lastCashBalance(currency){
  // Latest saved cash count remaining after the last deposit.
  const rows=S.cashCounts.filter(x=>x.currencySummary);
  const latest=rows.slice().sort((a,b)=>a.createdAt-b.createdAt).pop();
  return latest?Number(currency==="KHR"?latest.actualKhr:latest.actualUsd):0;
}
function allPreviousCash(){
  // Prefer latest closing count; otherwise calculate from all historical cash movements.
  const latest=S.cashCounts.slice().sort((a,b)=>a.createdAt-b.createdAt).pop();
  if(latest)return {khr:Number(latest.actualKhr||0),usd:Number(latest.actualUsd||0)};
  const o={khr:0,usd:0};
  S.sales.forEach(s=>{if(s.payment==="Cash"){if(s.currency==="KHR")o.khr+=s.amount;else o.usd+=s.amount}});
  S.expenses.forEach(e=>{if(e.payment==="Cash"){if(e.currency==="KHR")o.khr-=e.amount;else o.usd-=e.amount}});
  S.deposits.forEach(d=>{if(d.currency==="KHR")o.khr-=d.amount;else o.usd-=d.amount});
  return o;
}
function summary(){
  const o={salesKHR:0,salesUSD:0,cashKHR:0,cashUSD:0,abaKHR:0,abaUSD:0,otherKHR:0,otherUSD:0,
    expenseKHR:0,expenseUSD:0,cashExpKHR:0,cashExpUSD:0,depositKHR:0,depositUSD:0,cups:0,tx:0,items:{}};
  tsales().forEach(s=>{
    o.tx++;o.cups+=s.cups;
    if(s.currency==="KHR"){o.salesKHR+=s.amount;if(s.payment==="Cash")o.cashKHR+=s.amount;else if(s.payment==="ABA")o.abaKHR+=s.amount;else o.otherKHR+=s.amount}
    else{o.salesUSD+=s.amount;if(s.payment==="Cash")o.cashUSD+=s.amount;else if(s.payment==="ABA")o.abaUSD+=s.amount;else o.otherUSD+=s.amount}
    s.items.forEach(i=>o.items[i.name]=(o.items[i.name]||0)+i.qty)
  });
  texpenses().forEach(e=>{
    if(e.currency==="KHR"){o.expenseKHR+=e.amount;if(e.payment==="Cash")o.cashExpKHR+=e.amount}
    else{o.expenseUSD+=e.amount;if(e.payment==="Cash")o.cashExpUSD+=e.amount}
  });
  tdeposits().forEach(d=>{if(d.currency==="KHR")o.depositKHR+=d.amount;else o.depositUSD+=d.amount});
  return o;
}
function previousBalance(){
  // Previous balance immediately before today, excluding today's cash movements.
  const beforeDate=S.sales.filter(s=>s.date<today()&&s.payment==="Cash").reduce((a,s)=>a+(s.currency==="KHR"?s.amount/S.rate:s.amount),0);
  const exp=S.expenses.filter(e=>e.date<today()&&e.payment==="Cash").reduce((a,e)=>a+(e.currency==="KHR"?-e.amount/S.rate:-e.amount),0);
  const dep=S.deposits.filter(d=>d.date<today()).reduce((a,d)=>a+(d.currency==="KHR"?-d.amount/S.rate:-d.amount),0);
  // Return separate currency figures from raw records.
  let k=0,u=0;
  S.sales.filter(s=>s.date<today()&&s.payment==="Cash").forEach(s=>s.currency==="KHR"?k+=s.amount:u+=s.amount);
  S.expenses.filter(e=>e.date<today()&&e.payment==="Cash").forEach(e=>e.currency==="KHR"?k-=e.amount:u-=e.amount);
  S.deposits.filter(d=>d.date<today()).forEach(d=>d.currency==="KHR"?k-=d.amount:u-=d.amount);
  return {khr:k,usd:u};
}
function expectedCurrentCash(){
  const prev=previousBalance(),o=summary();
  return {khr:prev.khr+o.cashKHR-o.cashExpKHR-o.depositKHR,usd:prev.usd+o.cashUSD-o.cashExpUSD-o.depositUSD};
}
function refreshAll(){const o=summary();$("kpiKhr").textContent=moneyKHR(o.salesKHR);$("kpiUsd").textContent=moneyUSD(o.salesUSD);$("kpiCashKhr").textContent=moneyKHR(o.cashKHR);$("kpiCups").textContent=o.cups;if(S.role==="admin")renderAdmin("overview")}
function saveDeposit(){
  const amount=Number($("depositAmount").value||0),currency=$("depositCurrency").value;
  if(amount<=0)return alert("Enter amount / សូមបញ្ចូលចំនួន");
  S.deposits.push({id:String(Date.now()),date:today(),time:new Date().toLocaleTimeString(),createdAt:Date.now(),user:S.user,amount,currency,bank:$("depositBank").value.trim(),note:$("depositNote").value.trim()});
  localStorage.setItem("nm_deposits_v6",JSON.stringify(S.deposits));
  $("depositAmount").value="";$("depositBank").value="";$("depositNote").value="";
  renderDeposits();renderCash();renderReport();renderHistory();refreshAll();
}
function renderDeposits(){
  const list=tdeposits().slice().reverse();
  $("depositList").innerHTML=list.length?list.map(d=>`<div class="list-row"><span><b>${d.currency==="KHR"?moneyKHR(d.amount):moneyUSD(d.amount)}</b> → ${d.bank||"Bank"}<br><small>${d.time} · ${d.user}${d.note?" · "+d.note:""}</small></span><b>🏦</b></div>`).join(""):'<div class="cart-empty">No deposits today / មិនទាន់មានការដាក់ធនាគារ</div>';
}
function saveCashCount(){
  const aK=Number($("actualKhr").value||0),aU=Number($("actualUsd").value||0),e=expectedCurrentCash();
  S.cashCounts.push({id:String(Date.now()),date:today(),time:new Date().toLocaleTimeString(),createdAt:Date.now(),user:S.user,actualKhr:aK,actualUsd:aU,expectedKhr:e.khr,expectedUsd:e.usd,currencySummary:true});
  localStorage.setItem("nm_cashcounts_v6",JSON.stringify(S.cashCounts));
  renderCash();renderReport();renderHistory();refreshAll();
}
function renderCash(){
  const prev=previousBalance(),e=expectedCurrentCash();
  $("prevCashKhr").textContent=moneyKHR(prev.khr);$("prevCashUsd").textContent=moneyUSD(prev.usd);
  $("expectedCashKhr").textContent=moneyKHR(e.khr);$("expectedCashUsd").textContent=moneyUSD(e.usd);
  const latest=S.cashCounts.filter(x=>x.date===today()).slice(-1)[0];
  const aK=latest?latest.actualKhr:0,aU=latest?latest.actualUsd:0,dk=aK-e.khr,du=aU-e.usd;
  const status=(d,curr)=>d===0?'<span class="matched">MATCHED</span>':d<0?`<span class="short">SHORT ${curr==="KHR"?moneyKHR(Math.abs(d)):moneyUSD(Math.abs(d))}</span>`:`<span class="over">OVER ${curr==="KHR"?moneyKHR(d):moneyUSD(d)}</span>`;
  $("cashResult").innerHTML=`<div class="result-box"><div class="result-line"><span>Expected KHR</span><b>${moneyKHR(e.khr)}</b></div><div class="result-line"><span>Actual KHR</span><b>${moneyKHR(aK)}</b></div><div class="result-line"><span>Difference KHR</span><b>${status(dk,"KHR")}</b></div><div class="result-line"><span>Expected USD</span><b>${moneyUSD(e.usd)}</b></div><div class="result-line"><span>Actual USD</span><b>${moneyUSD(aU)}</b></div><div class="result-line"><span>Difference USD</span><b>${status(du,"USD")}</b></div></div>`;
}

function renderAdmin(section){
  if(S.role!=="admin")return;
  const o=summary(),e=expectedCurrentCash(),best=Object.entries(o.items).sort((a,b)=>b[1]-a[1])[0];
  let content="";
  if(section==="overview"){
    content=`<div class="stats">
      <div class="stat"><small>Sales KHR</small><strong>${moneyKHR(o.salesKHR)}</strong></div>
      <div class="stat"><small>Sales USD</small><strong>${moneyUSD(o.salesUSD)}</strong></div>
      <div class="stat"><small>Expenses KHR</small><strong>${moneyKHR(o.expenseKHR)}</strong></div>
      <div class="stat"><small>Deposits KHR</small><strong>${moneyKHR(o.depositKHR)}</strong></div>
    </div>
    <div class="admin-grid"><section class="panel"><h2>📊 Running Cash / លុយក្នុងតុ</h2>
      <div class="setting-row"><span>Expected KHR</span><b>${moneyKHR(e.khr)}</b></div>
      <div class="setting-row"><span>Expected USD</span><b>${moneyUSD(e.usd)}</b></div>
      <div class="setting-row"><span>Today's Deposit KHR</span><b>${moneyKHR(o.depositKHR)}</b></div>
      <div class="setting-row"><span>Today's Deposit USD</span><b>${moneyUSD(o.depositUSD)}</b></div>
      <p>${best?`Best Seller: <b>${best[0]}</b> · ${best[1]} cups`:"No sales yet / មិនទាន់មានការលក់"}</p>
    </section><section class="panel"><h2>👥 Users / ក្រុមការងារ</h2>
      <div class="user-row"><span>Admin<br><small>Owner</small></span><b class="role admin-role">ADMIN</b></div>
      <div class="user-row"><span>Staff 01<br><small>Sales + Expenses + Deposit + Cash Count</small></span><b class="role">STAFF</b></div>
      <div class="user-row"><span>Staff 02<br><small>Sales + Expenses + Deposit + Cash Count</small></span><b class="role">STAFF</b></div>
    </section></div>`;
  } else if(section==="products"){
    content=`<div class="panel"><h2>☕ Products / Menu</h2>${S.products.map(p=>`<div class="list-row"><span>${p[0]}<br><small>${p[1]} · ${p[3]}</small></span><b>${moneyKHR(p[2])}</b></div>`).join("")}<p class="muted small">Production: Admin can Add / Edit / Disable products without editing code.</p></div>`;
  } else if(section==="staff"){
    content=`<div class="panel"><h2>👥 Staff / Users</h2><div class="user-row"><span>Admin<br><small>Owner</small></span><b class="role admin-role">ADMIN</b></div><div class="user-row"><span>Staff 01</span><b class="role">STAFF</b></div><div class="user-row"><span>Staff 02</span><b class="role">STAFF</b></div><p class="muted small">Production: Add user, disable, reset password, roles.</p></div>`;
  } else if(section==="settings"){
    content=`<div class="panel"><h2>⚙️ Shop Settings / ព័ត៌មានហាង</h2><div class="form-grid"><div><label>Shop Name</label><input id="setShop" value="${S.settings.shopName||""}"></div><div><label>Phone</label><input id="setPhone" value="${S.settings.phone||""}"></div><div><label>Telegram</label><input id="setTelegram" value="${S.settings.telegram||""}"></div><div><label>Address</label><input id="setAddress" value="${S.settings.address||""}"></div></div><label>Default Exchange Rate</label><input id="setRate" type="number" value="${S.rate}"><button class="save-btn" onclick="saveSettings()">SAVE SETTINGS</button></div>`;
  } else if(section==="audit"){
    const logs=[...S.sales.map(x=>({t:x.time,a:"SALE",u:x.user,d:x.currency==="KHR"?moneyKHR(x.amount):moneyUSD(x.amount)})),...S.expenses.map(x=>({t:x.time,a:"EXPENSE",u:x.user,d:x.desc})),...S.deposits.map(x=>({t:x.time,a:"DEPOSIT",u:x.user,d:x.currency==="KHR"?moneyKHR(x.amount):moneyUSD(x.amount)})),...S.cashCounts.map(x=>({t:x.time,a:"CASH COUNT",u:x.user,d:moneyKHR(x.actualKhr)+" / "+moneyUSD(x.actualUsd)}))].slice(-30).reverse();
    content=`<div class="panel"><h2>🛡️ Activity / Audit Log</h2>${logs.map(l=>`<div class="log-row"><span>${l.t} · ${l.a}<br><small>${l.u}</small></span><b>${l.d}</b></div>`).join("")||'<div class="cart-empty">No activity yet</div>'}</div>`;
  }
  $("adminContent").innerHTML=`<div class="admin-menu">${["overview","products","staff","settings","audit"].map(x=>`<button class="admin-menu-btn ${x===section?"active":""}" onclick="renderAdmin('${x}')">${x[0].toUpperCase()+x.slice(1)}</button>`).join("")}</div>${content}`;
}

function saveSettings(){S.settings={shopName:$("setShop").value.trim(),phone:$("setPhone").value.trim(),telegram:$("setTelegram").value.trim(),address:$("setAddress").value.trim()};S.rate=Math.max(1,Number($("setRate").value||4000));localStorage.setItem("nm_settings_v5",JSON.stringify(S.settings));localStorage.setItem("nm_rate",S.rate);$("rateInput").value=S.rate;renderAll();alert("Settings saved / រក្សាទុករួច")}
function reportText(){
  const o=summary(),prev=previousBalance(),e=expectedCurrentCash(),c=S.cashCounts.filter(x=>x.date===today()).slice(-1)[0];
  const best=Object.entries(o.items).sort((a,b)=>b[1]-a[1])[0];
  return `NONA-ME COFFEE
DAILY CASH REPORT / របាយការណ៍លុយប្រចាំថ្ងៃ
Date: ${new Date().toLocaleDateString("en-GB")}
Staff: ${S.user||"—"}

SALES
KHR: ${moneyKHR(o.salesKHR)}
USD: ${moneyUSD(o.salesUSD)}
Cups: ${o.cups}

EXPENSES
KHR: ${moneyKHR(o.expenseKHR)}
USD: ${moneyUSD(o.expenseUSD)}

CASH MOVEMENT
Previous KHR: ${moneyKHR(prev.khr)}
Cash Sales KHR: ${moneyKHR(o.cashKHR)}
Cash Expenses KHR: ${moneyKHR(o.cashExpKHR)}
Bank Deposits KHR: ${moneyKHR(o.depositKHR)}
Expected KHR: ${moneyKHR(e.khr)}

Previous USD: ${moneyUSD(prev.usd)}
Cash Sales USD: ${moneyUSD(o.cashUSD)}
Cash Expenses USD: ${moneyUSD(o.cashExpUSD)}
Bank Deposits USD: ${moneyUSD(o.depositUSD)}
Expected USD: ${moneyUSD(e.usd)}

ACTUAL CASH
KHR: ${c?moneyKHR(c.actualKhr):"Not counted"}
USD: ${c?moneyUSD(c.actualUsd):"Not counted"}

${c?`DIFFERENCE
KHR: ${moneyKHR(c.actualKhr-e.khr)}
USD: ${moneyUSD(c.actualUsd-e.usd)}`:"CASH COUNT: Not submitted yet"}

Best Seller: ${best?best[0]+" ("+best[1]+" cups)":"—"}
Rate: ${Number(S.rate).toLocaleString()}៛ = $1`;
}
function renderReport(){
  const o=summary(),prev=previousBalance(),e=expectedCurrentCash(),c=S.cashCounts.filter(x=>x.date===today()).slice(-1)[0];
  $("reportDate").textContent=new Date().toLocaleDateString("en-GB");
  $("reportPreview").innerHTML=`<div class="report-brand">${S.settings.shopName||"nona-me coffee"}</div><div class="report-title">DAILY CASH REPORT</div>
  <p class="muted">${new Date().toLocaleDateString("en-GB")} · ${S.user||"—"}</p>
  <div class="report-line"><span>Sales KHR</span><b>${moneyKHR(o.salesKHR)}</b></div>
  <div class="report-line"><span>Sales USD</span><b>${moneyUSD(o.salesUSD)}</b></div>
  <div class="report-line"><span>Expenses KHR</span><b>${moneyKHR(o.expenseKHR)}</b></div>
  <div class="report-line"><span>Expenses USD</span><b>${moneyUSD(o.expenseUSD)}</b></div>
  <div class="report-line"><span>Previous KHR Cash</span><b>${moneyKHR(prev.khr)}</b></div>
  <div class="report-line"><span>Cash Sales KHR</span><b>${moneyKHR(o.cashKHR)}</b></div>
  <div class="report-line"><span>Cash Expenses KHR</span><b>${moneyKHR(o.cashExpKHR)}</b></div>
  <div class="report-line"><span>Bank Deposit KHR</span><b>${moneyKHR(o.depositKHR)}</b></div>
  <div class="report-line report-total"><span>Expected KHR in Table</span><b>${moneyKHR(e.khr)}</b></div>
  <div class="report-line"><span>Previous USD Cash</span><b>${moneyUSD(prev.usd)}</b></div>
  <div class="report-line"><span>Cash Sales USD</span><b>${moneyUSD(o.cashUSD)}</b></div>
  <div class="report-line"><span>Cash Expenses USD</span><b>${moneyUSD(o.cashExpUSD)}</b></div>
  <div class="report-line"><span>Bank Deposit USD</span><b>${moneyUSD(o.depositUSD)}</b></div>
  <div class="report-line report-total"><span>Expected USD in Table</span><b>${moneyUSD(e.usd)}</b></div>
  <div class="report-line"><span>Actual KHR</span><b>${c?moneyKHR(c.actualKhr):"—"}</b></div>
  <div class="report-line"><span>Actual USD</span><b>${c?moneyUSD(c.actualUsd):"—"}</b></div>
  <div class="report-line"><span>Difference KHR</span><b>${c?moneyKHR(c.actualKhr-e.khr):"—"}</b></div>
  <div class="report-line"><span>Difference USD</span><b>${c?moneyUSD(c.actualUsd-e.usd):"—"}</b></div>
  <div class="report-line"><span>Total Cups</span><b>${o.cups}</b></div>`;
}
function exportPng(){
  const o=summary(),prev=previousBalance(),e=expectedCurrentCash(),c=S.cashCounts.filter(x=>x.date===today()).slice(-1)[0];
  const can=document.createElement("canvas"),ctx=can.getContext("2d");can.width=1000;can.height=1480;
  ctx.fillStyle="#F8F6F1";ctx.fillRect(0,0,1000,1480);ctx.fillStyle="#fff";ctx.roundRect(55,55,890,1370,28,28);ctx.fill();
  ctx.fillStyle="#3A2A24";ctx.font="700 42px Arial";ctx.fillText(S.settings.shopName||"nona-me coffee",90,125);
  ctx.fillStyle="#8B2E23";ctx.font="700 28px Arial";ctx.fillText("DAILY CASH REPORT",90,172);
  ctx.fillStyle="#4B3A32";ctx.font="20px Arial";ctx.fillText(new Date().toLocaleDateString("en-GB")+" · "+(S.user||"—"),90,212);
  const rows=[["Sales KHR",moneyKHR(o.salesKHR)],["Sales USD",moneyUSD(o.salesUSD)],["Expenses KHR",moneyKHR(o.expenseKHR)],["Expenses USD",moneyUSD(o.expenseUSD)],
    ["Previous KHR",moneyKHR(prev.khr)],["Cash Sales KHR",moneyKHR(o.cashKHR)],["Cash Expenses KHR",moneyKHR(o.cashExpKHR)],["Bank Deposit KHR",moneyKHR(o.depositKHR)],
    ["Expected KHR",moneyKHR(e.khr)],["Previous USD",moneyUSD(prev.usd)],["Cash Sales USD",moneyUSD(o.cashUSD)],["Cash Expenses USD",moneyUSD(o.cashExpUSD)],
    ["Bank Deposit USD",moneyUSD(o.depositUSD)],["Expected USD",moneyUSD(e.usd)],["Actual KHR",c?moneyKHR(c.actualKhr):"—"],["Actual USD",c?moneyUSD(c.actualUsd):"—"],
    ["Difference KHR",c?moneyKHR(c.actualKhr-e.khr):"—"],["Difference USD",c?moneyUSD(c.actualUsd-e.usd):"—"],["Total Cups",String(o.cups)]];
  let y=275;rows.forEach((r,i)=>{ctx.fillStyle=(i===8||i===13||i===16||i===17)?"#8B2E23":"#4B3A32";ctx.font=(i===8||i===13)?"700 21px Arial":"20px Arial";ctx.fillText(r[0],90,y);ctx.textAlign="right";ctx.fillText(r[1],905,y);ctx.textAlign="left";y+=59});
  ctx.fillStyle="#9CA3AF";ctx.font="17px Arial";ctx.fillText("Nona-me Coffee · Running Cash Report",90,1370);
  can.toBlob(blob=>{const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`nona-me-report-${today()}.png`;a.click();URL.revokeObjectURL(a.href)});
}

function renderHistory(){
  const a=[...S.sales].reverse().map(s=>`<div class="history-item"><div>🧾 <b>${s.date}</b> · ${s.time}<br><small>${s.user} · ${s.payment} · ${s.currency} · ${s.cups} cups</small></div><div class="history-total">${s.currency==="KHR"?moneyKHR(s.amount):moneyUSD(s.amount)}</div></div>`);
  const b=[...S.expenses].reverse().map(e=>`<div class="history-item"><div>💸 <b>${e.date}</b> · ${e.time}<br><small>${e.user} · ${e.desc} · ${e.payment}</small></div><div class="history-total">${e.currency==="KHR"?moneyKHR(e.amount):moneyUSD(e.amount)}</div></div>`);
  const d=[...S.deposits].reverse().map(x=>`<div class="history-item"><div>🏦 <b>${x.date}</b> · ${x.time}<br><small>${x.user} · ${x.bank||"Bank"}${x.note?" · "+x.note:""}</small></div><div class="history-total">${x.currency==="KHR"?moneyKHR(x.amount):moneyUSD(x.amount)}</div></div>`);
  const c=[...S.cashCounts].reverse().map(x=>`<div class="history-item"><div>💵 <b>${x.date}</b> · ${x.time}<br><small>${x.user} · Cash Count</small></div><div class="history-total">${moneyKHR(x.actualKhr)} / ${moneyUSD(x.actualUsd)}</div></div>`);
  $("historyList").innerHTML=[...a,...b,...d,...c].join("")||'<div class="cart-empty">No records yet / មិនទាន់មានទិន្នន័យ</div>';
}

boot();
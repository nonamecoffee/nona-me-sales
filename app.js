
const DB="nona_me_master_v20";
const defaultState={
  lang:"en", theme:"light", user:null, remember:false, page:"sales",
  products:[], promotions:[{id:"promo1",en:"2 Cups Special",kh:"ប្រូម៉ូសិន ២ កែវ",qty:2,price:6000,active:true,products:"ALL"}],
  users:[
    {id:"u-admin",name:"Admin",username:"admin",password:"admin",role:"admin",active:true},
    {id:"u-staff",name:"Staff 01",username:"staff01",password:"1234",role:"staff",active:true}
  ],
  sales:[], expenses:[], deposits:[], cashCounts:[], stock:[],
  settings:{shopName:"nona-me coffee",phone:"",address:"",telegram:"",rate:4000},
  cms:{shopName:"nona-me coffee",tagline:"Daily Sales System",announcement:"",footer:"Thank you",logo:"",primary:"#8B2E23",accent:"#C4563B",beige:"#E2C9A8",cream:"#F8F6F1",dark:"#3A2A24",green:"#5A7D5B"},
  ui:{category:"All",menuView:"grid",currency:"KHR",payment:"Cash",cart:[], reportSeparator:"━━━━━━━━━━━━━━━━━━"}
};
const T={
 en:{
  sales:"Sales",expenses:"Expenses",cash:"Cash Drawer",deposit:"Bank Deposit",stock:"Stock",admin:"Admin",report:"Daily Report",period:"Reports",history:"History",
  today:"Today's Sales",menu:"Menu",current:"Current Sale",search:"Search menu...",all:"All",save:"Save",cancel:"Cancel",add:"Add",edit:"Edit",delete:"Delete",enable:"Enable",disable:"Disable",
  category:"Category",currency:"Currency",rate:"Rate",payment:"Payment",cash:"Cash",aba:"ABA",other:"Other",total:"Total",cups:"Cups",
  promotion:"Promotion",none:"No Promotion",normalPrice:"Normal price",saveSale:"Save Sale",savePrint:"Save & Print",print:"Print",
  expense:"Expense",expenseOn:"What was it spent on?",amount:"Amount",note:"Note",method:"Payment method",
  prevCash:"Previous Cash",cashSales:"Cash Sales",cashExpenses:"Cash Expenses",bankDeposit:"Bank Deposit",expected:"Expected Cash",actual:"Actual Cash",difference:"Difference",
  reportTitle:"Daily Report",date:"Date",staff:"Staff",bestSeller:"Best Seller",exchange:"Exchange Rate",copy:"Copy Text",export:"Export CSV",clear:"Clear",
  overview:"Overview",website:"Website Control",products:"Products & Menu",promotions:"Promotions",inventory:"Inventory",staffUsers:"Staff & Users",settings:"Shop Settings",audit:"Audit Log",appearance:"Appearance",
  displayMode:"Display Mode",light:"Light",dark:"Dark",auto:"Auto",primary:"Primary",accent:"Accent",beige:"Beige",cream:"Cream",darkColor:"Dark",green:"Green",chooseColor:"Choose color",
  logo:"Official Logo",uploadLogo:"Upload Logo",navigation:"Navigation",show:"Show",hide:"Hide",view:"View",grid:"Grid",list:"List",separator:"Report Separator",
  addProduct:"Add Product",englishName:"English Name",khmerName:"Khmer Name",priceKHR:"Price KHR",image:"Image",
  addPromo:"Add Promotion",buyCups:"Buy Cups",promoPrice:"Promotion Price",applies:"Applies to",
  addUser:"Add User",name:"Name",username:"Username",password:"Password",role:"Role",active:"Active",disabled:"Disabled",
  addStock:"Add Stock",item:"Stock Item",quantity:"Quantity",unit:"Unit",minimum:"Low Stock Level",
  daily:"Daily",weekly:"Weekly",monthly:"Monthly",viewReport:"View Report",net:"Net",salesKHR:"Sales KHR",salesUSD:"Sales USD",expensesKHR:"Expenses KHR",expensesUSD:"Expenses USD",depositKHR:"Deposit KHR",depositUSD:"Deposit USD",
  logout:"Logout",login:"Login",remember:"Remember login",noRecords:"No records yet",saved:"Saved",copied:"Copied",loginError:"Invalid login",required:"Please complete required fields.",
  currentCash:"Current Cash",transactions:"Transactions",inventoryAlert:"Low Stock",exportData:"Export Data",siteTitle:"Website settings",receipt:"Receipt",paper:"Receipt paper",thankYou:"Receipt footer",
  today:"Today",previous:"Previous",actualCount:"Cash Count"
 },
 kh:{
  sales:"ការលក់",expenses:"ចំណាយ",cash:"លុយក្នុងតុ",deposit:"ដាក់ធនាគារ",stock:"ស្តុក",admin:"គ្រប់គ្រង",report:"របាយការណ៍ប្រចាំថ្ងៃ",period:"របាយការណ៍",history:"ប្រវត្តិ",
  today:"ការលក់ថ្ងៃនេះ",menu:"មីនុយ",current:"ការលក់បច្ចុប្បន្ន",search:"ស្វែងរកមីនុយ...",all:"ទាំងអស់",save:"រក្សាទុក",cancel:"បោះបង់",add:"បន្ថែម",edit:"កែ",delete:"លុប",enable:"បើក",disable:"បិទ",
  category:"ប្រភេទ",currency:"រូបិយប័ណ្ណ",rate:"អត្រា",payment:"ការទូទាត់",cash:"សាច់ប្រាក់",aba:"ABA",other:"ផ្សេងៗ",total:"សរុប",cups:"កែវ",
  promotion:"ប្រូម៉ូសិន",none:"គ្មានប្រូម៉ូសិន",normalPrice:"តម្លៃធម្មតា",saveSale:"រក្សាទុកការលក់",savePrint:"រក្សាទុក និងព្រីន",print:"ព្រីន",
  expense:"ចំណាយ",expenseOn:"ចំណាយលើអ្វី?",amount:"ចំនួនទឹកប្រាក់",note:"កំណត់សម្គាល់",method:"វិធីទូទាត់",
  prevCash:"សាច់ប្រាក់ដើម",cashSales:"លក់សាច់ប្រាក់",cashExpenses:"ចំណាយសាច់ប្រាក់",bankDeposit:"ដាក់ធនាគារ",expected:"សាច់ប្រាក់រំពឹងទុក",actual:"សាច់ប្រាក់រាប់បាន",difference:"ខុសគ្នា",
  reportTitle:"របាយការណ៍ប្រចាំថ្ងៃ",date:"កាលបរិច្ឆេទ",staff:"បុគ្គលិក",bestSeller:"លក់ដាច់ជាងគេ",exchange:"អត្រាប្តូរប្រាក់",copy:"ចម្លងអត្ថបទ",export:"ទាញ CSV",clear:"សម្អាត",
  overview:"សង្ខេប",website:"គ្រប់គ្រង Website",products:"មុខទំនិញ និងមីនុយ",promotions:"ប្រូម៉ូសិន",inventory:"ស្តុក",staffUsers:"បុគ្គលិក និងអ្នកប្រើ",settings:"កំណត់ហាង",audit:"ប្រវត្តិសកម្មភាព",appearance:"រូបរាង",
  displayMode:"របៀបបង្ហាញ",light:"ភ្លឺ",dark:"ងងឹត",auto:"ស្វ័យប្រវត្តិ",primary:"ពណ៌មេ",accent:"ពណ៌បន្ថែម",beige:"ត្នោតស្រាល",cream:"ពណ៌ក្រែម",darkColor:"ងងឹត",green:"បៃតង",chooseColor:"ជ្រើសពណ៌",
  logo:"Logo ផ្លូវការ",uploadLogo:"បញ្ចូល Logo",navigation:"មីនុយ",show:"បង្ហាញ",hide:"លាក់",view:"មើល",grid:"ក្រឡា",list:"បញ្ជី",separator:"បន្ទាត់ខណ្ឌរបាយការណ៍",
  addProduct:"បន្ថែមមុខទំនិញ",englishName:"ឈ្មោះអង់គ្លេស",khmerName:"ឈ្មោះខ្មែរ",priceKHR:"តម្លៃរៀល",image:"រូបភាព",
  addPromo:"បន្ថែមប្រូម៉ូសិន",buyCups:"ចំនួនកែវ",promoPrice:"តម្លៃប្រូម៉ូសិន",applies:"ប្រើសម្រាប់",
  addUser:"បន្ថែមអ្នកប្រើ",name:"ឈ្មោះ",username:"ឈ្មោះអ្នកប្រើ",password:"ពាក្យសម្ងាត់",role:"តួនាទី",active:"ដំណើរការ",disabled:"បិទ",
  addStock:"បញ្ចូលស្តុក",item:"មុខស្តុក",quantity:"ចំនួន",unit:"ឯកតា",minimum:"កម្រិតព្រមាន",
  daily:"ប្រចាំថ្ងៃ",weekly:"ប្រចាំសប្តាហ៍",monthly:"ប្រចាំខែ",viewReport:"មើលរបាយការណ៍",net:"សុទ្ធ",salesKHR:"ការលក់រៀល",salesUSD:"ការលក់ដុល្លារ",expensesKHR:"ចំណាយរៀល",expensesUSD:"ចំណាយដុល្លារ",depositKHR:"ដាក់ធនាគាររៀល",depositUSD:"ដាក់ធនាគារដុល្លារ",
  logout:"ចេញ",login:"ចូលប្រើ",remember:"ចងចាំការចូល",noRecords:"មិនទាន់មានទិន្នន័យ",saved:"បានរក្សាទុក",copied:"បានចម្លង",loginError:"ឈ្មោះអ្នកប្រើ ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ",required:"សូមបំពេញព័ត៌មានដែលត្រូវការ។",
  currentCash:"សាច់ប្រាក់បច្ចុប្បន្ន",transactions:"ប្រតិបត្តិការ",inventoryAlert:"ស្តុកជិតអស់",exportData:"ទាញទិន្នន័យ",siteTitle:"ការកំណត់ Website",receipt:"វិក្កយបត្រ",paper:"ក្រដាសវិក្កយបត្រ",thankYou:"អក្សរខាងក្រោមវិក្កយបត្រ",
  today:"ថ្ងៃនេះ",previous:"មុន",actualCount:"រាប់សាច់ប្រាក់"
 }
};
let S=loadState();
let DATA = {products:[]};
fetch("products.json").then(r=>r.json()).then(p=>{DATA.products=p; if(!S.products.length){S.products=p.map((x,i)=>({id:"p"+i,en:x[0],kh:x[1],price:Number(x[2]),category:x[3],active:true,image:""})); saveState(); render();}}).catch(()=>{});
function clone(x){return JSON.parse(JSON.stringify(x))}
function loadState(){
 const raw=localStorage.getItem(DB);
 if(raw){const x=JSON.parse(raw);return {...defaultState,...x,settings:{...defaultState.settings,...(x.settings||{})},cms:{...defaultState.cms,...(x.cms||{})},ui:{...defaultState.ui,...(x.ui||{})}}}
 return clone(defaultState);
}
function saveState(){localStorage.setItem(DB,JSON.stringify(S));}
function L(k){return (T[S.lang]&&T[S.lang][k])||k}
function moneyKHR(n){return `${Math.round(Number(n)||0).toLocaleString()}៛`}
function moneyUSD(n){return `$${Number(n||0).toFixed(2)}`}
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function today(){return new Date().toISOString().slice(0,10)}
function uid(p){return p+Date.now().toString(36)+Math.random().toString(36).slice(2,7)}
function dateTime(){const d=new Date();return {date:d.toISOString().slice(0,10),time:d.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}}
function activeProducts(){return S.products.filter(p=>p.active!==false)}
function applyTheme(){
 document.documentElement.classList.toggle("dark",S.theme==="dark"||(S.theme==="auto"&&matchMedia("(prefers-color-scheme: dark)").matches));
 document.documentElement.style.setProperty("--primary",S.cms.primary);document.documentElement.style.setProperty("--accent",S.cms.accent);
 document.documentElement.style.setProperty("--beige",S.cms.beige);document.documentElement.style.setProperty("--cream",S.cms.cream);
 document.documentElement.style.setProperty("--dark",S.cms.dark);document.documentElement.style.setProperty("--green",S.cms.green);
}
function logoSrc(){return S.cms.logo||"assets/nona-me-logo.png"}
function goto(page){S.page=page;saveState();render()}
function navItems(){
 return [
  ["sales","💰"],["expenses","🧾"],["cash","💵"],["deposit","🏦"],["stock","📦"],["report","📊"],
  ...(S.role==="admin"?[["period","📆"],["admin","⚙️"]]:[]),["history","🗂️"]
 ]
}
function render(){
 applyTheme();
 const root=document.getElementById("app");
 if(!S.user){root.innerHTML=renderLogin();bindLogin();return}
 root.innerHTML=renderApp();
 bindGlobal();renderPage();
}
function langButton(){return `<button id="langBtn" class="btn btn-ghost">${S.lang==="kh"?"English":"ខ្មែរ"}</button>`}
function renderLogin(){
 return `<div class="login-wrap"><div class="login-card panel" style="max-width:420px;margin:8vh auto">
 <div style="display:flex;align-items:center;gap:12px;margin-bottom:18px"><img src="${logoSrc()}" style="width:130px;height:62px;object-fit:contain;background:#fff;border-radius:14px"><div><h2 style="margin:0">${esc(S.cms.shopName)}</h2><div class="muted">${esc(S.cms.tagline)}</div></div></div>
 <div class="field"><label>${L("username")}</label><input id="loginUser" autocomplete="username"></div>
 <div class="field" style="margin-top:10px"><label>${L("password")}</label><input id="loginPass" type="password" autocomplete="current-password"></div>
 <label style="display:flex;align-items:center;gap:8px;margin:12px 0;font-weight:800"><input id="remember" type="checkbox" ${S.remember?"checked":""} style="width:auto"> ${L("remember")}</label>
 <button id="doLogin" class="btn btn-primary" style="width:100%;padding:13px">${L("login")}</button>
 <div class="small muted" style="margin-top:12px">Staff: staff01 / 1234 · Admin: admin / admin</div>
 <div style="margin-top:12px">${langButton()} <button id="loginTheme" class="btn">${S.theme==="dark"?"☀️":"🌙"}</button></div>
 </div></div>`
}
function bindLogin(){
 $("langBtn").onclick=()=>{S.lang=S.lang==="kh"?"en":"kh";saveState();render()}
 $("loginTheme").onclick=()=>{S.theme=S.theme==="dark"?"light":"dark";saveState();render()}
 $("doLogin").onclick=()=>{
  const u=$("loginUser").value.trim(),p=$("loginPass").value;
  const user=S.users.find(x=>x.username===u&&x.password===p&&x.active!==false);
  if(!user)return alert(L("loginError"));
  S.user={id:user.id,name:user.name,username:user.username,role:user.role};S.role=user.role;S.remember=$("remember").checked;
  localStorage.setItem(DB,JSON.stringify(S));render();
 }
}
function renderApp(){
 const brand=logoSrc();
 const nav=navItems().map(([k,ic])=>`<button class="tab ${S.page===k?"active":""}" data-page="${k}">${ic} ${L(k)}</button>`).join("");
 const bottom=navItems().slice(0,5).map(([k,ic])=>`<button class="${S.page===k?"active":""}" data-page="${k}">${ic}<br>${L(k)}</button>`).join("");
 return `<header class="topbar"><div class="brand"><img src="${brand}" alt=""><div><div class="brand-title">${esc(S.cms.shopName)}</div><div class="brand-sub">Nona-me Sales</div></div></div>
 <div class="top-actions">${langButton()}<button id="themeBtn" class="btn">${S.theme==="dark"?"☀️":"🌙"}</button><button id="logoutBtn" class="btn">${L("logout")}</button></div></header>
 <main class="wrap"><nav class="tabs">${nav}</nav><div id="page"></div></main><nav class="bottom-nav">${bottom}</nav>`
}
function bindGlobal(){
 document.querySelectorAll("[data-page]").forEach(b=>b.onclick=()=>goto(b.dataset.page));
 $("langBtn").onclick=()=>{S.lang=S.lang==="kh"?"en":"kh";saveState();render()};
 $("themeBtn").onclick=()=>{S.theme=S.theme==="dark"?"light":"dark";saveState();render()};
 $("logoutBtn").onclick=()=>{S.user=null;S.role=null;if(!S.remember)localStorage.removeItem(DB);saveState();render();}
}
function renderPage(){
 const p=$("page");
 if(S.page==="sales")p.innerHTML=renderSales(),bindSales();
 else if(S.page==="expenses")p.innerHTML=renderExpenses(),bindExpenses();
 else if(S.page==="cash")p.innerHTML=renderCash(),bindCash();
 else if(S.page==="deposit")p.innerHTML=renderDeposit(),bindDeposit();
 else if(S.page==="stock")p.innerHTML=renderStock(),bindStock();
 else if(S.page==="report")p.innerHTML=renderReport(),bindReport();
 else if(S.page==="period")p.innerHTML=renderPeriodReport(),bindPeriodReport();
 else if(S.page==="history")p.innerHTML=renderHistory();
 else if(S.page==="admin")p.innerHTML=renderAdmin(),bindAdmin();
}
function renderSales(){
 const cats=[L("all"),...new Set(activeProducts().map(p=>p.category))];
 const q=S.ui.search||"";
 const list=activeProducts().filter(p=>(S.ui.category===L("all")||S.ui.category===p.category)&&(p.en.toLowerCase().includes(q.toLowerCase())||p.kh.includes(q)));
 const cards=list.map(p=>`<button class="product-card" data-add="${p.id}"><img class="product-image" src="${esc(p.image||"assets/nona-me-logo.png")}"><div><div class="product-name">${esc(p[S.lang])}</div><div class="product-kh">${S.lang==="kh"?esc(p.en):esc(p.kh)}</div></div><div class="price">${moneyKHR(p.price)}</div></button>`).join("")||`<div class="empty">${L("noRecords")}</div>`;
 const cartTotal=cartTotalData();
 const promos=S.promotions.filter(x=>x.active!==false);
 return `<div class="page-head"><div><h1>${L("today")}</h1><div class="muted">${esc(S.user.name)}</div></div><div class="action-row"><select id="category" class="category-select">${cats.map(c=>`<option ${S.ui.category===c?"selected":""}>${esc(c)}</option>`).join("")}</select><button id="listGrid" class="btn">${S.ui.menuView==="grid"?"☷":"▦"} ${S.ui.menuView==="grid"?L("list"):L("grid")}</button></div></div>
 <div class="stats"><div class="stat"><small>${L("salesKHR")}</small><strong>${moneyKHR(todaySales("KHR"))}</strong></div><div class="stat"><small>${L("salesUSD")}</small><strong>${moneyUSD(todaySales("USD"))}</strong></div><div class="stat"><small>${L("transactions")}</small><strong>${S.sales.filter(x=>x.date===today()).length}</strong></div><div class="stat"><small>${L("cups")}</small><strong>${todayCups()}</strong></div></div>
 <div class="sales-grid"><section class="panel"><div class="panel-title"><h2>${L("menu")}</h2><input id="menuSearch" class="search" style="max-width:240px" placeholder="${L("search")}" value="${esc(q)}"></div><div id="productGrid" class="product-grid ${S.ui.menuView==="list"?"list-view":""}">${cards}</div></section>
 <section class="panel"><h2>${L("current")}</h2><div class="cart-list">${S.ui.cart.length?S.ui.cart.map(item=>`<div class="cart-item"><div><b>${esc((S.products.find(p=>p.id===item.id)||{} )[S.lang]||item.id)}</b><div class="small muted">${moneyKHR(item.price)} × ${item.qty}</div></div><div class="qty"><button data-dec="${item.id}">−</button><b>${item.qty}</b><button data-inc="${item.id}">+</button></div></div>`).join(""):`<div class="empty">${L("noRecords")}</div>`}</div>
 <div class="field"><label>${L("promotion")}</label><select id="promo"><option value="">${L("none")}</option>${promos.map(x=>`<option value="${x.id}">${esc(x[S.lang])} · ${x.qty} → ${moneyKHR(x.price)}</option>`).join("")}</select></div>
 <div class="form-grid" style="margin-top:10px"><div class="field"><label>${L("currency")}</label><select id="currency"><option value="KHR" ${S.ui.currency==="KHR"?"selected":""}>KHR</option><option value="USD" ${S.ui.currency==="USD"?"selected":""}>USD</option></select></div><div class="field"><label>${L("rate")}</label><input id="rate" type="number" min="1" value="${S.settings.rate}"></div></div>
 <div class="field" style="margin-top:10px"><label>${L("payment")}</label><select id="payment"><option>Cash</option><option>ABA</option><option>Other</option></select></div>
 <div class="total"><span>${L("total")}</span><strong>${cartTotal.display}</strong></div>
 <div class="action-row"><button id="saveSale" class="btn btn-primary">${L("saveSale")}</button><button id="savePrint" class="btn">${L("savePrint")}</button></div>
 </section></div>`
}
function bindSales(){
 $("category").onchange=()=>{S.ui.category=$("category").value;saveState();render()}
 $("menuSearch").oninput=e=>{S.ui.search=e.target.value;document.querySelectorAll("#productGrid .product-card").forEach(()=>{});renderPage()}
 $("listGrid").onclick=()=>{S.ui.menuView=S.ui.menuView==="grid"?"list":"grid";saveState();renderPage()}
 document.querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>{addCart(b.dataset.add);renderPage()})
 document.querySelectorAll("[data-inc]").forEach(b=>b.onclick=()=>{changeCart(b.dataset.inc,1);renderPage()})
 document.querySelectorAll("[data-dec]").forEach(b=>b.onclick=()=>{changeCart(b.dataset.dec,-1);renderPage()})
 $("currency").onchange=e=>{S.ui.currency=e.target.value;saveState()}
 $("payment").value=S.ui.payment;$("payment").onchange=e=>{S.ui.payment=e.target.value;saveState()}
 $("rate").onchange=e=>{S.settings.rate=Number(e.target.value)||4000;saveState();renderPage()}
 $("saveSale").onclick=()=>saveSale(false);$("savePrint").onclick=()=>saveSale(true)
}
function addCart(id){const p=S.products.find(x=>x.id===id);if(!p)return;const x=S.ui.cart.find(i=>i.id===id);if(x)x.qty++;else S.ui.cart.push({id,qty:1,price:p.price}) ;saveState()}
function changeCart(id,d){const x=S.ui.cart.find(i=>i.id===id);if(!x)return;x.qty+=d;if(x.qty<=0)S.ui.cart=S.ui.cart.filter(i=>i.id!==id);saveState()}
function cartTotalData(){let sum=S.ui.cart.reduce((a,i)=>a+i.qty*i.price,0);let promo=$("promo")?.value?S.promotions.find(x=>x.id===$("promo").value):null;if(promo){const totalQty=S.ui.cart.reduce((a,i)=>a+i.qty,0);if(totalQty>=promo.qty){const sets=Math.floor(totalQty/promo.qty);sum-=sets*(promo.qty*cartUnitAvg()-promo.price)}}const cur=S.ui.currency;return {raw:sum,display:cur==="KHR"?moneyKHR(sum):moneyUSD(sum/S.settings.rate)}}
function cartUnitAvg(){if(!S.ui.cart.length)return 0;const q=S.ui.cart.reduce((a,i)=>a+i.qty,0);const s=S.ui.cart.reduce((a,i)=>a+i.qty*i.price,0);return s/q}
function saveSale(print){
 if(!S.ui.cart.length)return alert(L("required"));
 const total=cartTotalData().raw, dt=dateTime(), promoId=$("promo")?.value||"";
 const sale={id:uid("sale"),date:dt.date,time:dt.time,user:S.user.name,currency:S.ui.currency,payment:S.ui.payment,rate:Number($("rate").value||S.settings.rate),amount:total,cups:S.ui.cart.reduce((a,i)=>a+i.qty,0),items:clone(S.ui.cart),promotionId:promoId};
 S.sales.push(sale);S.ui.cart=[];saveState();renderPage();if(print)printReceipt(sale);alert(L("saved"))
}
function todaySales(cur){return S.sales.filter(x=>x.date===today()&&x.currency===cur).reduce((a,x)=>a+x.amount,0)}
function todayCups(){return S.sales.filter(x=>x.date===today()).reduce((a,x)=>a+x.cups,0)}
function renderExpenses(){
 return `<div class="page-head"><div><h1>${L("expenses")}</h1></div></div><div class="two-col"><section class="panel"><div class="field"><label>${L("expenseOn")}</label><input id="expenseDesc"></div><div class="form-grid" style="margin-top:10px"><div class="field"><label>${L("amount")}</label><input id="expenseAmount" type="number" min="0"></div><div class="field"><label>${L("currency")}</label><select id="expenseCurrency"><option>KHR</option><option>USD</option></select></div></div><div class="field" style="margin-top:10px"><label>${L("method")}</label><select id="expenseMethod"><option>Cash</option><option>ABA</option><option>Other</option></select></div><div class="field" style="margin-top:10px"><label>${L("note")}</label><textarea id="expenseNote" rows="3"></textarea></div><button id="saveExpense" class="btn btn-primary" style="margin-top:10px">${L("save")}</button></section><section class="panel"><h2>${L("history")}</h2>${S.expenses.slice().reverse().slice(0,20).map(x=>`<div class="user-row"><div><b>${esc(x.desc)}</b><div class="small muted">${x.date} ${x.time} · ${esc(x.user)}</div></div><b>${x.currency==="KHR"?moneyKHR(x.amount):moneyUSD(x.amount)}</b></div>`).join("")||`<div class="empty">${L("noRecords")}</div>`}</section></div>`
}
function bindExpenses(){$("saveExpense").onclick=()=>{const d=$("expenseDesc").value.trim(),a=Number($("expenseAmount").value||0);if(!d||a<=0)return alert(L("required"));const t=dateTime();S.expenses.push({id:uid("exp"),date:t.date,time:t.time,user:S.user.name,desc:d,amount:a,currency:$("expenseCurrency").value,method:$("expenseMethod").value,note:$("expenseNote").value});saveState();renderPage()}}
function previousCash(cur){const prior=S.sales.filter(x=>x.currency===cur&&x.date<today()&&x.payment==="Cash").reduce((a,x)=>a+x.amount,0)-S.expenses.filter(x=>x.currency===cur&&x.date<today()&&x.method==="Cash").reduce((a,x)=>a+x.amount,0)-S.deposits.filter(x=>x.currency===cur&&x.date<today()).reduce((a,x)=>a+x.amount,0);return prior}
function currentExpected(cur){return previousCash(cur)+S.sales.filter(x=>x.date===today()&&x.currency===cur&&x.payment==="Cash").reduce((a,x)=>a+x.amount,0)-S.expenses.filter(x=>x.date===today()&&x.currency===cur&&x.method==="Cash").reduce((a,x)=>a+x.amount,0)-S.deposits.filter(x=>x.date===today()&&x.currency===cur).reduce((a,x)=>a+x.amount,0)}
function renderCash(){return `<div class="page-head"><div><h1>${L("cash")}</h1></div></div><div class="stats"><div class="stat"><small>KHR</small><strong>${moneyKHR(currentExpected("KHR"))}</strong></div><div class="stat"><small>USD</small><strong>${moneyUSD(currentExpected("USD"))}</strong></div></div><section class="panel"><h2>${L("actualCount")}</h2><div class="form-grid"><div class="field"><label>KHR</label><input id="countKHR" type="number"></div><div class="field"><label>USD</label><input id="countUSD" type="number" step="0.01"></div></div><button id="saveCount" class="btn btn-primary" style="margin-top:10px">${L("save")}</button><div style="margin-top:18px"><table class="table"><tr><th>${L("currency")}</th><th>${L("expected")}</th><th>${L("actual")}</th><th>${L("difference")}</th></tr><tr><td>KHR</td><td>${moneyKHR(currentExpected("KHR"))}</td><td id="aKHR">—</td><td id="dKHR">—</td></tr><tr><td>USD</td><td>${moneyUSD(currentExpected("USD"))}</td><td id="aUSD">—</td><td id="dUSD">—</td></tr></table></div></section>`}
function bindCash(){$("saveCount").onclick=()=>{const t=dateTime(),k=Number($("countKHR").value||0),u=Number($("countUSD").value||0);S.cashCounts.push({id:uid("cc"),date:t.date,time:t.time,user:S.user.name,khr:k,usd:u,expKhr:currentExpected("KHR"),expUsd:currentExpected("USD")});saveState();renderPage()}}
function renderDeposit(){return `<div class="page-head"><div><h1>${L("deposit")}</h1></div></div><section class="panel" style="max-width:720px"><div class="form-grid"><div class="field"><label>${L("amount")}</label><input id="depAmount" type="number" min="0"></div><div class="field"><label>${L("currency")}</label><select id="depCurrency"><option>KHR</option><option>USD</option></select></div><div class="field"><label>${L("method")}</label><input id="depBank" value="Bank"></div><div class="field"><label>${L("note")}</label><input id="depNote"></div></div><button id="saveDep" class="btn btn-primary" style="margin-top:10px">${L("save")}</button></section>`}
function bindDeposit(){$("saveDep").onclick=()=>{const a=Number($("depAmount").value||0);if(a<=0)return alert(L("required"));const t=dateTime();S.deposits.push({id:uid("dep"),date:t.date,time:t.time,user:S.user.name,amount:a,currency:$("depCurrency").value,bank:$("depBank").value,note:$("depNote").value});saveState();renderPage()}}
function renderStock(){const low=(S.stock||[]).filter(x=>Number(x.qty)<=Number(x.min||0));return `<div class="page-head"><div><h1>${L("stock")}</h1><div class="muted">${low.length?`⚠️ ${L("inventoryAlert")}: ${low.length}`:""}</div></div></div><div class="two-col"><section class="panel"><div class="form-grid"><div class="field"><label>${L("item")}</label><input id="stockName"></div><div class="field"><label>${L("quantity")}</label><input id="stockQty" type="number" min="0"></div><div class="field"><label>${L("unit")}</label><input id="stockUnit" placeholder="kg / pcs / L"></div><div class="field"><label>${L("minimum")}</label><input id="stockMin" type="number" min="0"></div><div class="field full"><label>${L("image")}</label><input id="stockImage" type="file" accept="image/*"></div><div class="field full"><label>${L("note")}</label><textarea id="stockNote"></textarea></div></div><button id="saveStock" class="btn btn-primary" style="margin-top:10px">${L("addStock")}</button></section><section class="panel">${(S.stock||[]).map((x,i)=>`<div class="list-row"><img class="stock-thumb" src="${esc(x.image||"assets/nona-me-logo.png")}"><div><b>${esc(x.name)}</b><div class="small muted">${x.qty} ${esc(x.unit||"")}${x.note?` · ${esc(x.note)}`:""}</div></div><div class="row-actions"><span class="badge ${x.qty<=x.min?"red":"green"}">${x.qty<=x.min?L("inventoryAlert"):L("active")}</span><button class="btn btn-danger" data-del-stock="${i}">🗑</button></div></div>`).join("")||`<div class="empty">${L("noRecords")}</div>`}</section></div>`}
function bindStock(){$("saveStock").onclick=()=>{const n=$("stockName").value.trim(),q=Number($("stockQty").value||0);if(!n||q<=0)return alert(L("required"));const f=$("stockImage").files[0],save=(img)=>{S.stock.push({id:uid("st"),name:n,qty:q,unit:$("stockUnit").value,min:Number($("stockMin").value||0),image:img,note:$("stockNote").value});saveState();renderPage()};if(f){const r=new FileReader();r.onload=()=>save(r.result);r.readAsDataURL(f)}else save("")};document.querySelectorAll("[data-del-stock]").forEach(b=>b.onclick=()=>{S.stock.splice(Number(b.dataset.delStock),1);saveState();renderPage()})}
function renderReport(){const d=today(),salesK=todaySales("KHR"),salesU=todaySales("USD"),expK=dayExp("KHR"),expU=dayExp("USD"),depK=dayDep("KHR"),depU=dayDep("USD"),sep=S.ui.reportSeparator;return `<div class="page-head"><div><h1>${L("reportTitle")}</h1><div class="muted">${d}</div></div><div class="action-row"><button id="copyReport" class="btn">${L("copy")}</button><button id="exportReport" class="btn">${L("export")}</button><button id="printReport" class="btn">${L("print")}</button></div></div><section class="panel"><div class="stats"><div class="stat"><small>${L("salesKHR")}</small><strong>${moneyKHR(salesK)}</strong></div><div class="stat"><small>${L("salesUSD")}</small><strong>${moneyUSD(salesU)}</strong></div><div class="stat"><small>${L("expensesKHR")}</small><strong>${moneyKHR(expK)}</strong></div><div class="stat"><small>${L("expensesUSD")}</small><strong>${moneyUSD(expU)}</strong></div></div><div class="report-separator"></div><div class="form-grid"><div><b>${L("depositKHR")}</b><div>${moneyKHR(depK)}</div></div><div><b>${L("depositUSD")}</b><div>${moneyUSD(depU)}</div></div><div><b>${L("expected")} KHR</b><div>${moneyKHR(currentExpected("KHR"))}</div></div><div><b>${L("expected")} USD</b><div>${moneyUSD(currentExpected("USD"))}</div></div><div><b>${L("cups")}</b><div>${todayCups()}</div></div><div><b>${L("bestSeller")}</b><div>${esc(bestSeller()||"—")}</div></div><div><b>${L("staff")}</b><div>${esc(S.user.name)}</div></div><div><b>${L("exchange")}</b><div>1 USD = ${Number(S.settings.rate).toLocaleString()} KHR</div></div></div><div class="report-separator"></div><pre id="telegramPreview" class="receipt-preview">${esc(buildTelegram())}</pre></section>`}
function dayExp(c){return S.expenses.filter(x=>x.date===today()&&x.currency===c).reduce((a,x)=>a+x.amount,0)}
function dayDep(c){return S.deposits.filter(x=>x.date===today()&&x.currency===c).reduce((a,x)=>a+x.amount,0)}
function bestSeller(){const m={};S.sales.filter(x=>x.date===today()).forEach(s=>s.items.forEach(i=>m[i.id]=(m[i.id]||0)+i.qty));const id=Object.entries(m).sort((a,b)=>b[1]-a[1])[0]?.[0];return S.products.find(p=>p.id===id)?.[S.lang]}
function buildTelegram(){const sep=S.ui.reportSeparator;const val=(label,v)=>`${label}: ${v}`;return [`☕ ${S.cms.shopName}`,`📊 ${L("reportTitle")}`,`📅 ${today()}`,sep,`💰 ${L("sales")}`,`${L("currency")} KHR: ${moneyKHR(todaySales("KHR"))}`,`${L("currency")} USD: ${moneyUSD(todaySales("USD"))}`,sep,`💸 ${L("expenses")}`,`${L("currency")} KHR: ${moneyKHR(dayExp("KHR"))}`,`${L("currency")} USD: ${moneyUSD(dayExp("USD"))}`,sep,`🏦 ${L("deposit")}`,`${L("currency")} KHR: ${moneyKHR(dayDep("KHR"))}`,`${L("currency")} USD: ${moneyUSD(dayDep("USD"))}`,sep,`💵 ${L("expected")}`,`${L("currency")} KHR: ${moneyKHR(currentExpected("KHR"))}`,`${L("currency")} USD: ${moneyUSD(currentExpected("USD"))}`,sep,`☕ ${L("cups")}: ${todayCups()}`,`🏆 ${L("bestSeller")}: ${bestSeller()||"—"}`,`👤 ${L("staff")}: ${S.user.name}`,`💱 ${L("exchange")}: 1 USD = ${Number(S.settings.rate).toLocaleString()} KHR`].join("\n")}
function bindReport(){$("copyReport").onclick=async()=>{await navigator.clipboard.writeText(buildTelegram());alert(L("copied"))};$("exportReport").onclick=()=>downloadText("nona-me-daily-report.csv",buildCSV());$("printReport").onclick=()=>printText(buildTelegram())}
function buildCSV(){const rows=[["date","staff","currency","payment","amount","cups"]];S.sales.filter(x=>x.date===today()).forEach(x=>rows.push([x.date,x.user,x.currency,x.payment,x.amount,x.cups]));const ex=[["expenses"],...S.expenses.filter(x=>x.date===today()).map(x=>[x.date,x.user,x.currency,x.method,x.amount,x.desc])];return [...rows,[],...ex].map(r=>r.join(",")).join("\n")}
function downloadText(name,text){const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([text],{type:"text/plain;charset=utf-8"}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function printText(text){const w=window.open("","_blank");w.document.write(`<pre style="font-family:monospace;white-space:pre-wrap">${esc(text)}</pre>`);w.document.close();w.print()}
function printReceipt(sale){const lines=[S.cms.shopName,`${sale.date} ${sale.time}`,`Order: ${sale.id}`,"------------------------------"];sale.items.forEach(i=>{const p=S.products.find(x=>x.id===i.id);lines.push(`${p?.[S.lang]||i.id} x${i.qty} ${moneyKHR(i.price*i.qty)}`)});lines.push("------------------------------",`${L("total")}: ${sale.currency==="KHR"?moneyKHR(sale.amount):moneyUSD(sale.amount)}`,`${L("payment")}: ${sale.payment}`);printText(lines.join("\n"))}
function renderPeriodReport(){const type="month";const now=new Date();const month=now.toISOString().slice(0,7);const rows=[...S.sales.filter(x=>x.date.startsWith(month))];return `<div class="page-head"><div><h1>${L("period")}</h1><div class="muted">${month}</div></div><button id="periodExport" class="btn">${L("exportData")}</button></div><section class="panel"><div class="stats"><div class="stat"><small>${L("salesKHR")}</small><strong>${moneyKHR(rows.filter(x=>x.currency==="KHR").reduce((a,x)=>a+x.amount,0))}</strong></div><div class="stat"><small>${L("salesUSD")}</small><strong>${moneyUSD(rows.filter(x=>x.currency==="USD").reduce((a,x)=>a+x.amount,0))}</strong></div><div class="stat"><small>${L("cups")}</small><strong>${rows.reduce((a,x)=>a+x.cups,0)}</strong></div><div class="stat"><small>${L("transactions")}</small><strong>${rows.length}</strong></div></div><div class="table-wrap"><table class="table"><tr><th>${L("date")}</th><th>${L("staff")}</th><th>${L("currency")}</th><th>${L("amount")}</th><th>${L("cups")}</th></tr>${rows.map(x=>`<tr><td>${x.date}</td><td>${esc(x.user)}</td><td>${x.currency}</td><td>${x.currency==="KHR"?moneyKHR(x.amount):moneyUSD(x.amount)}</td><td>${x.cups}</td></tr>`).join("")}</table></div></section>`}
function bindPeriodReport(){$("periodExport").onclick=()=>downloadText("nona-me-period.csv",buildCSV())}
function renderHistory(){const all=[...S.sales.map(x=>({...x,type:"sale"})),...S.expenses.map(x=>({...x,type:"expense"})),...S.deposits.map(x=>({...x,type:"deposit"}))].sort((a,b)=>(b.date+b.time).localeCompare(a.date+a.time));return `<div class="page-head"><div><h1>${L("history")}</h1></div></div><section class="panel">${all.slice(0,80).map(x=>`<div class="user-row"><div><b>${x.type==="sale"?L("sales"):x.type==="expense"?L("expenses"):L("deposit")}</b><div class="small muted">${x.date} ${x.time} · ${esc(x.user)}</div></div><b>${x.currency==="KHR"?moneyKHR(x.amount):moneyUSD(x.amount)}</b></div>`).join("")||`<div class="empty">${L("noRecords")}</div>`}</section>`}
function renderAdmin(){
 const section=S.ui.adminSection||"overview";
 const side=[["overview","📊"],["website","🛠️"],["products","☕"],["promotions","🏷️"],["inventory","📦"],["staffUsers","👥"],["settings","⚙️"],["audit","🛡️"]];
 return `<div class="page-head"><div><h1>${L("admin")}</h1><div class="muted">${L(section)}</div></div></div><div class="admin-layout"><aside class="admin-sidebar">${side.map(([k,ic])=>`<button class="nav-btn ${section===k?"active":""}" data-admin="${k}">${ic} ${L(k)}</button>`).join("")}</aside><section id="adminMain" class="admin-main">${renderAdminSection(section)}</section></div>`
}
function renderAdminSection(s){
 if(s==="overview")return adminOverview();
 if(s==="website")return adminWebsite();
 if(s==="products")return adminProducts();
 if(s==="promotions")return adminPromotions();
 if(s==="inventory")return adminInventory();
 if(s==="staffUsers")return adminUsers();
 if(s==="settings")return adminSettings();
 return adminAudit();
}
function bindAdmin(){
 document.querySelectorAll("[data-admin]").forEach(b=>b.onclick=()=>{S.ui.adminSection=b.dataset.admin;saveState();renderPage()});
 document.querySelectorAll("[data-action]").forEach(b=>b.onclick=()=>adminAction(b.dataset.action,b.dataset.id));
 bindAdminSection();
}
function bindAdminSection(){
 document.querySelectorAll("[data-subaction]").forEach(b=>b.onclick=()=>adminAction(b.dataset.subaction,b.dataset.id));
 const el=(id)=>document.getElementById(id);
 if(el("saveCMS"))el("saveCMS").onclick=saveCMS;
 if(el("saveAppearance"))el("saveAppearance").onclick=saveAppearance;
 if(el("addProduct"))el("addProduct").onclick=addProductAdmin;
 if(el("addPromo"))el("addPromo").onclick=addPromoAdmin;
 if(el("addUser"))el("addUser").onclick=addUserAdmin;
 if(el("addStockAdmin"))el("addStockAdmin").onclick=addStockAdmin;
 if(el("saveSettingsAdmin"))el("saveSettingsAdmin").onclick=saveSettingsAdmin;
}
function adminOverview(){
 const sK=S.sales.filter(x=>x.currency==="KHR").reduce((a,x)=>a+x.amount,0),sU=S.sales.filter(x=>x.currency==="USD").reduce((a,x)=>a+x.amount,0),eK=S.expenses.filter(x=>x.currency==="KHR").reduce((a,x)=>a+x.amount,0),eU=S.expenses.filter(x=>x.currency==="USD").reduce((a,x)=>a+x.amount,0);
 return `<section class="panel"><div class="row-between"><h2>${L("overview")}</h2><button class="btn" data-subaction="exportAll">${L("exportData")}</button></div><div class="admin-card-grid"><div class="stat"><small>${L("salesKHR")}</small><strong>${moneyKHR(sK)}</strong></div><div class="stat"><small>${L("salesUSD")}</small><strong>${moneyUSD(sU)}</strong></div><div class="stat"><small>${L("expensesKHR")}</small><strong>${moneyKHR(eK)}</strong></div><div class="stat"><small>${L("expensesUSD")}</small><strong>${moneyUSD(eU)}</strong></div></div></section>
 <section class="panel" style="margin-top:12px"><div class="filters"><button class="btn" data-subaction="overviewDay">${L("daily")}</button><button class="btn" data-subaction="overviewWeek">${L("weekly")}</button><button class="btn" data-subaction="overviewMonth">${L("monthly")}</button></div><p class="muted" style="margin-top:12px">${L("currentCash")}: ${moneyKHR(currentExpected("KHR"))} · ${moneyUSD(currentExpected("USD"))}</p></section>`
}
function adminWebsite(){const c=S.cms,u=S.ui;const nav=navItems();return `<section class="panel"><h2>${L("siteTitle")}</h2><div class="form-grid"><div class="field"><label>${L("name")}</label><input id="cmsShop" value="${esc(c.shopName)}"></div><div class="field"><label>${S.lang==="kh"?"ពាក្យពិពណ៌នា":"Tagline"}</label><input id="cmsTag" value="${esc(c.tagline)}"></div><div class="field full"><label>${S.lang==="kh"?"សារជូនដំណឹង":"Announcement"}</label><input id="cmsAnn" value="${esc(c.announcement)}"></div></div><div style="margin-top:12px"><label>${L("logo")}</label><div class="action-row" style="align-items:center;margin-top:8px"><img id="cmsLogoPreview" class="asset-preview" src="${esc(logoSrc())}"><input id="cmsLogo" type="file" accept="image/*"></div></div><h3 style="margin-top:18px">${L("appearance")}</h3><div class="color-grid">${[["primary","primary"],["accent","accent"],["beige","beige"],["cream","cream"],["dark","darkColor"],["green","green"]].map(([k,lk])=>`<div class="color-pick"><input type="color" id="color_${k}" value="${c[k]}"><b>${L(lk)}</b></div>`).join("")}</div><div style="margin-top:12px"><label>${L("displayMode")}</label><div class="segmented" style="margin-top:7px"><button class="btn ${S.theme==="light"?"btn-primary":""}" data-subaction="themeLight">☀️ ${L("light")}</button><button class="btn ${S.theme==="dark"?"btn-primary":""}" data-subaction="themeDark">🌙 ${L("dark")}</button><button class="btn ${S.theme==="auto"?"btn-primary":""}" data-subaction="themeAuto">🌓 ${L("auto")}</button></div></div><div style="margin-top:18px"><h3>${L("navigation")}</h3>${nav.map(([k])=>`<div class="user-row"><span>${L(k)}</span><label><input type="checkbox" id="nav_${k}" checked> ${L("show")}</label></div>`).join("")}</div><div style="margin-top:14px"><label>${L("separator")}</label><input id="separator" value="${esc(S.ui.reportSeparator)}"></div><button id="saveCMS" class="btn btn-primary" style="margin-top:14px">${L("save")}</button></section>`}
function saveCMS(){
 S.cms.shopName=$("cmsShop").value.trim()||S.cms.shopName;S.cms.tagline=$("cmsTag").value.trim();S.cms.announcement=$("cmsAnn").value.trim();
 ["primary","accent","beige","cream","dark","green"].forEach(k=>S.cms[k]=$(("color_"+k)).value);
 S.ui.reportSeparator=$("separator").value||"━━━━━━━━━━━━━━━━━━";const f=$("cmsLogo").files[0];
 const done=()=>{saveState();renderPage()};if(f){const r=new FileReader();r.onload=()=>{S.cms.logo=r.result;done()};r.readAsDataURL(f)}else done()
}
function saveAppearance(){saveCMS()}
function adminProducts(){return `<section class="panel"><div class="row-between"><h2>${L("products")}</h2><button class="btn btn-primary" id="addProduct">${L("addProduct")}</button></div><div class="form-grid" style="margin-top:10px"><div class="field"><label>${L("englishName")}</label><input id="newPEn"></div><div class="field"><label>${L("khmerName")}</label><input id="newPKh"></div><div class="field"><label>${L("priceKHR")}</label><input id="newPPrice" type="number"></div><div class="field"><label>${L("category")}</label><input id="newPCat"></div><div class="field full"><label>${L("image")}</label><input id="newPImage" type="file" accept="image/*"></div></div><div style="margin-top:16px">${S.products.map((p,i)=>`<div class="list-row"><img class="stock-thumb" src="${esc(p.image||"assets/nona-me-logo.png")}"><div><b>${esc(p[S.lang])}</b><div class="small muted">${esc(p[S.lang==="kh"?"en":"kh"])} · ${esc(p.category)} · ${moneyKHR(p.price)}</div></div><div class="row-actions"><button class="btn" data-subaction="toggleProduct" data-id="${i}">${p.active===false?L("enable"):L("disable")}</button><button class="btn btn-danger" data-subaction="deleteProduct" data-id="${i}">🗑</button></div></div>`).join("")}</div></section>`}
function readFile(id,cb){const f=$(id).files[0];if(!f)return cb("");const r=new FileReader();r.onload=()=>cb(r.result);r.readAsDataURL(f)}
function addProductAdmin(){const en=$("newPEn").value.trim(),kh=$("newPKh").value.trim(),price=Number($("newPPrice").value||0),cat=$("newPCat").value.trim()||"Other";if(!en||!kh||price<0)return alert(L("required"));readFile("newPImage",img=>{S.products.push({id:uid("p"),en,kh,price,category:cat,image:img,active:true});saveState();renderPage()})}
function adminPromotions(){return `<section class="panel"><div class="row-between"><h2>${L("promotions")}</h2></div><div class="form-grid"><div class="field"><label>${L("englishName")}</label><input id="promoEn"></div><div class="field"><label>${L("khmerName")}</label><input id="promoKh"></div><div class="field"><label>${L("buyCups")}</label><input id="promoQty" type="number" min="2"></div><div class="field"><label>${L("promoPrice")}</label><input id="promoPrice" type="number" min="0"></div></div><button id="addPromo" class="btn btn-primary" style="margin-top:10px">${L("addPromo")}</button><div style="margin-top:16px">${S.promotions.map((p,i)=>`<div class="promo-row"><div><b>${esc(p[S.lang])}</b><div class="small muted">${p.qty} ${L("cups")} → ${moneyKHR(p.price)}</div></div><div class="row-actions"><button class="btn" data-subaction="togglePromo" data-id="${i}">${p.active?L("disable"):L("enable")}</button><button class="btn btn-danger" data-subaction="deletePromo" data-id="${i}">🗑</button></div></div>`).join("")}</div></section>`}
function addPromoAdmin(){const en=$("promoEn").value.trim(),kh=$("promoKh").value.trim(),qty=Number($("promoQty").value||0),price=Number($("promoPrice").value||0);if(!en||!kh||qty<2||price<0)return alert(L("required"));S.promotions.push({id:uid("pr"),en,kh,qty,price,active:true,products:"ALL"});saveState();renderPage()}
function adminInventory(){return `<section class="panel"><h2>${L("inventory")}</h2><div>${(S.stock||[]).map(x=>`<div class="stock-row"><img class="stock-thumb" src="${esc(x.image||"assets/nona-me-logo.png")}"><div><b>${esc(x.name)}</b><div class="small muted">${x.qty} ${esc(x.unit||"")} · min ${x.min}</div></div><span class="badge ${x.qty<=x.min?"red":"green"}">${x.qty<=x.min?L("inventoryAlert"):L("active")}</span></div>`).join("")||`<div class="empty">${L("noRecords")}</div>`}</div></section>`}
function adminUsers(){return `<section class="panel"><div class="row-between"><h2>${L("staffUsers")}</h2></div><div class="form-grid"><div class="field"><label>${L("name")}</label><input id="userName"></div><div class="field"><label>${L("username")}</label><input id="userUsername"></div><div class="field"><label>${L("password")}</label><input id="userPassword"></div><div class="field"><label>${L("role")}</label><select id="userRole"><option>staff</option><option>admin</option></select></div></div><button id="addUser" class="btn btn-primary" style="margin-top:10px">${L("addUser")}</button><div style="margin-top:16px">${S.users.map((u,i)=>`<div class="user-row"><div><b>${esc(u.name)}</b><div class="small muted">${esc(u.username)} · ${u.role}</div></div><div class="row-actions"><span class="badge ${u.active===false?"red":"green"}">${u.active===false?L("disabled"):L("active")}</span><button class="btn" data-subaction="toggleUser" data-id="${i}">${u.active===false?L("enable"):L("disable")}</button>${u.username!=="admin"?`<button class="btn btn-danger" data-subaction="deleteUser" data-id="${i}">🗑</button>`:""}</div></div>`).join("")}</div></section>`}
function addUserAdmin(){const name=$("userName").value.trim(),username=$("userUsername").value.trim(),password=$("userPassword").value,role=$("userRole").value;if(!name||!username||!password)return alert(L("required"));if(S.users.some(u=>u.username===username))return alert("Username exists");S.users.push({id:uid("u"),name,username,password,role,active:true});saveState();renderPage()}
function adminSettings(){return `<section class="panel"><h2>${L("settings")}</h2><div class="form-grid"><div class="field"><label>${L("name")}</label><input id="setShop" value="${esc(S.settings.shopName)}"></div><div class="field"><label>Phone</label><input id="setPhone" value="${esc(S.settings.phone)}"></div><div class="field"><label>Telegram</label><input id="setTelegram" value="${esc(S.settings.telegram)}"></div><div class="field"><label>${L("exchange")}</label><input id="setRate" type="number" value="${S.settings.rate}"></div><div class="field full"><label>${S.lang==="kh"?"អាសយដ្ឋាន":"Address"}</label><input id="setAddress" value="${esc(S.settings.address)}"></div></div><div class="form-grid" style="margin-top:12px"><div class="field"><label>${L("paper")}</label><select id="paper"><option>58mm</option><option>80mm</option><option>A4</option></select></div><div class="field"><label>${L("thankYou")}</label><input id="footer" value="${esc(S.cms.footer)}"></div></div><button id="saveSettingsAdmin" class="btn btn-primary" style="margin-top:12px">${L("save")}</button></section>`}
function saveSettingsAdmin(){S.settings.shopName=$("setShop").value.trim();S.settings.phone=$("setPhone").value.trim();S.settings.telegram=$("setTelegram").value.trim();S.settings.address=$("setAddress").value.trim();S.settings.rate=Number($("setRate").value||4000);S.cms.footer=$("footer").value;saveState();renderPage()}
function adminAudit(){const logs=[...S.sales.map(x=>({t:x.date+" "+x.time,u:x.user,a:L("sales"),d:x.amount})),...S.expenses.map(x=>({t:x.date+" "+x.time,u:x.user,a:L("expenses"),d:x.desc})),...S.deposits.map(x=>({t:x.date+" "+x.time,u:x.user,a:L("deposit"),d:x.amount}))].sort((a,b)=>b.t.localeCompare(a.t));return `<section class="panel"><h2>${L("audit")}</h2>${logs.slice(0,100).map(x=>`<div class="user-row"><div><b>${esc(x.a)}</b><div class="small muted">${esc(x.t)} · ${esc(x.u)}</div></div><b>${esc(x.d)}</b></div>`).join("")||`<div class="empty">${L("noRecords")}</div>`}</section>`}
function adminAction(a,id){
 if(a==="themeLight"){S.theme="light";saveState();renderPage()} if(a==="themeDark"){S.theme="dark";saveState();renderPage()} if(a==="themeAuto"){S.theme="auto";saveState();renderPage()}
 if(a==="toggleProduct"){S.products[id].active=S.products[id].active===false;saveState();renderPage()} if(a==="deleteProduct"){S.products.splice(id,1);saveState();renderPage()}
 if(a==="togglePromo"){S.promotions[id].active=!S.promotions[id].active;saveState();renderPage()} if(a==="deletePromo"){S.promotions.splice(id,1);saveState();renderPage()}
 if(a==="toggleUser"){S.users[id].active=S.users[id].active===false;saveState();renderPage()} if(a==="deleteUser"){S.users.splice(id,1);saveState();renderPage()}
 if(a==="exportAll"){downloadText("nona-me-all-data.csv",buildCSV())}
 if(a==="overviewDay"||a==="overviewWeek"||a==="overviewMonth"){goto(a==="overviewDay"?"report":"period")}
}
function bindAdminSectionAfter(){
 // kept for future
}
function renderAdminSectionStandalone(){return ""}
function $(id){return document.getElementById(id)}

window.addEventListener("storage",()=>{S=loadState();render()});
window.addEventListener("DOMContentLoaded",()=>{window.addEventListener("online",()=>{});render()});

const SUPABASE_URL='https://aucwgnbhcbcovmshjmuo.supabase.co';
const SUPABASE_KEY='sb_publishable_XKT_TSLgOd75bhapXEUZ2Q_rs98dwcO';
const DBKEY='nona_me_saas_master_v2_5';
const seedProducts=[
['Coffee Milk','កាហ្វេទឹកដោះគោ',5000,'Coffee'],['Coffee Cream','កាហ្វេក្រែម',5000,'Coffee'],['Coffee Egg Cream','កាហ្វេក្រែមពងមាន់',5000,'Coffee'],['Coffee Taro','កាហ្វេតារ៉ូ',5000,'Coffee'],['Americano','អាមេរិកាណូ',5000,'Coffee'],['Latte','ឡាតេ',5000,'Coffee'],['Cappuccino','កាពូជីណូ',5000,'Coffee'],['Mocha','ម៉ូកា',5000,'Coffee'],['Matcha Milk','ម៉ាតឆាទឹកដោះគោ',5000,'Matcha'],['Matcha Cream','ម៉ាតឆាក្រែម',5000,'Matcha'],['Matcha Taro','ម៉ាតឆាតារ៉ូ',5000,'Matcha'],['Cacao Milk','កាកាវទឹកដោះគោ',5000,'Cacao'],['Cacao Cream','កាកាវក្រែម',5000,'Cacao'],['Thai Tea','តែថៃ',5000,'Tea'],['Green Tea Milk','តែបៃតងទឹកដោះគោ',5000,'Tea'],['Black Tea','តែខ្មៅ',4000,'Tea'],['Lemon Tea','តែក្រូចឆ្មារ',5000,'Tea'],['Peach Tea','តែផេស',5000,'Tea'],['Passion Tea','តែផាសិន',5000,'Tea'],['Soda Lemon','សូដាក្រូចឆ្មារ',5000,'Soda'],['Soda Passion','សូដាផាសិន',5000,'Soda'],['Soda Blue','សូដាប្លូ',5000,'Soda'],['Soda Strawberry','សូដាស្ត្របឺរី',5000,'Soda'],['Taro Milk','តារ៉ូទឹកដោះគោ',5000,'Other'],['Chocolate Milk','សូកូឡាទឹកដោះគោ',5000,'Cacao'],['Vanilla Milk','វ៉ានីឡាទឹកដោះគោ',5000,'Other'],['Caramel Milk','ការ៉ាមែលទឹកដោះគោ',5000,'Other'],['Milk Tea','តែទឹកដោះគោ',5000,'Tea'],['Lemon Soda','សូដាក្រូចឆ្មារ',5000,'Soda']
];
const T={en:{login:'Login',email:'Email',password:'Password',signIn:'Sign in',signUp:'Create account',name:'Name',business:'Business',businessName:'Business name',createBusiness:'Create business',chooseBusiness:'Choose business',sales:'Sales',menu:'Menu',expenses:'Expenses',cash:'Cash drawer',deposit:'Bank deposit',stock:'Stock',report:'Daily report',reports:'Reports',admin:'Admin',website:'Website control',products:'Products & menu',promotions:'Promotions',staff:'Staff & users',settings:'Business settings',records:'Records',overview:'Overview',logout:'Log out',switchBusiness:'Switch business',add:'Add',edit:'Edit',delete:'Delete',save:'Save',cancel:'Cancel',search:'Search menu...',category:'Category',all:'All',currentSale:'Current sale',total:'Total',promotion:'Promotion',none:'No promotion',currency:'Currency',payment:'Payment',revenueChannel:'Revenue source',rate:'Exchange rate',savePrint:'Save & print',copy:'Copy text',saveImage:'Save image',print:'Print',amount:'Amount',note:'Note',expenseOn:'What was it spent on?',item:'Stock item',quantity:'Quantity',unit:'Unit',minimum:'Low stock level',uploadPhoto:'Upload photo',takePhoto:'Take photo',retakePhoto:'Retake photo',removePhoto:'Remove photo',priceKHR:'Price KHR',englishName:'English name',khmerName:'Khmer name',active:'Active',inactive:'Inactive',role:'Role',owner:'Owner',adminRole:'Admin',staffRole:'Staff',daily:'Daily',weekly:'Weekly',monthly:'Monthly',previous:'Previous cash',cashSales:'Cash sales',cashExpenses:'Cash expenses',expected:'Expected cash',actual:'Actual cash',difference:'Difference',cups:'Cups',bestSeller:'Best seller',revenue:'Revenue',expense:'Expenses',netTotal:'Net total',bankDeposit:'Bank deposit',thankYou:'Thank you',close:'Close',sync:'Cloud synced',offline:'Offline / pending',create:'Create',slug:'Business slug',addRevenue:'Add revenue source',addExpenseCategory:'Add expense category',noData:'No records yet',camera:'Camera',preview:'Preview',dashboard:'Dashboard',language:'Language',khmer:'Khmer',english:'English',businesses:'Businesses',sendTelegram:'Send to Telegram',testTelegram:'Test Telegram',telegramChatId:'Telegram chat ID',staffAdd:'Add staff',staffEmail:'Staff email',staffName:'Staff name',staffRoleField:'Role',staffInviteNote:'The staff account must already exist in Supabase.',a5:'A5',date:'Date',sender:'Sent by',senderId:'Sender ID',reportBuilder:'Report Builder',reportText:'Telegram report text',reportLayout:'Report layout',reportSections:'Report sections',reportAppearance:'Appearance',reportPreview:'Preview',saveTemplate:'Save template',resolution:'Resolution',imageFormat:'Image format',quality:'Quality',resetTemplate:'Reset to default',sectionSummary:'Summary',sectionPayments:'Payment methods',sectionExpenses:'Expenses',sectionCash:'Cash control',sectionProducts:'Top selling items',sectionHighlights:'Highlights',showDate:'Show date',showStaff:'Show staff',showRate:'Show exchange rate',showSender:'Show sender',headerText:'Header text',footerText:'Footer text',layoutMode:'Layout',compact:'Compact',standard:'Standard',detailed:'Detailed'},kh:{login:'ចូលប្រើ',email:'អ៊ីមែល',password:'ពាក្យសម្ងាត់',signIn:'ចូលគណនី',signUp:'បង្កើតគណនី',name:'ឈ្មោះ',business:'អាជីវកម្ម',businessName:'ឈ្មោះអាជីវកម្ម',createBusiness:'បង្កើតអាជីវកម្ម',chooseBusiness:'ជ្រើសអាជីវកម្ម',sales:'ការលក់',menu:'មីនុយ',expenses:'ចំណាយ',cash:'លុយក្នុងតុ',deposit:'ដាក់ធនាគារ',stock:'ស្តុក',report:'របាយការណ៍ប្រចាំថ្ងៃ',reports:'របាយការណ៍',admin:'គ្រប់គ្រង',website:'គ្រប់គ្រង Website',products:'មុខទំនិញ និងមីនុយ',promotions:'ប្រូម៉ូសិន',staff:'បុគ្គលិក និងអ្នកប្រើ',settings:'កំណត់អាជីវកម្ម',records:'កំណត់ត្រា',overview:'សង្ខេប',logout:'ចេញ',switchBusiness:'ប្តូរអាជីវកម្ម',add:'បន្ថែម',edit:'កែ',delete:'លុប',save:'រក្សាទុក',cancel:'បោះបង់',search:'ស្វែងរកមីនុយ...',category:'ប្រភេទ',all:'ទាំងអស់',currentSale:'ការលក់បច្ចុប្បន្ន',total:'សរុប',promotion:'ប្រូម៉ូសិន',none:'គ្មានប្រូម៉ូសិន',currency:'រូបិយប័ណ្ណ',payment:'ការទូទាត់',revenueChannel:'ប្រភពចំណូល',rate:'អត្រាប្តូរប្រាក់',savePrint:'រក្សាទុក និងព្រីន',copy:'ចម្លងអត្ថបទ',saveImage:'រក្សាទុកជារូបភាព',print:'ព្រីន',amount:'ចំនួនទឹកប្រាក់',note:'កំណត់សម្គាល់',expenseOn:'ចំណាយលើអ្វី?',item:'មុខស្តុក',quantity:'ចំនួន',unit:'ឯកតា',minimum:'កម្រិតព្រមាន',uploadPhoto:'បញ្ចូលរូបភាព',takePhoto:'ថតរូប',retakePhoto:'ថតម្តងទៀត',removePhoto:'ដករូបចេញ',priceKHR:'តម្លៃរៀល',englishName:'ឈ្មោះអង់គ្លេស',khmerName:'ឈ្មោះខ្មែរ',active:'ដំណើរការ',inactive:'បិទ',role:'តួនាទី',owner:'ម្ចាស់',adminRole:'អ្នកគ្រប់គ្រង',staffRole:'បុគ្គលិក',daily:'ប្រចាំថ្ងៃ',weekly:'ប្រចាំសប្តាហ៍',monthly:'ប្រចាំខែ',previous:'សាច់ប្រាក់ដើម',cashSales:'លក់សាច់ប្រាក់',cashExpenses:'ចំណាយសាច់ប្រាក់',expected:'សាច់ប្រាក់រំពឹងទុក',actual:'សាច់ប្រាក់រាប់បាន',difference:'ខុសគ្នា',cups:'កែវ',bestSeller:'លក់ដាច់ជាងគេ',revenue:'ចំណូល',expense:'ចំណាយ',netTotal:'សរុបសុទ្ធ',bankDeposit:'ដាក់ធនាគារ',thankYou:'សូមអរគុណ',close:'បិទ',sync:'បាន Sync ទៅ Cloud',offline:'Offline / កំពុងរង់ចាំ Sync',create:'បង្កើត',slug:'អក្សរកាត់អាជីវកម្ម',addRevenue:'បន្ថែមប្រភពចំណូល',addExpenseCategory:'បន្ថែមប្រភេទចំណាយ',noData:'មិនទាន់មានទិន្នន័យ',camera:'កាមេរ៉ា',preview:'មើលជាមុន',dashboard:'ផ្ទាំងសង្ខេប',language:'ភាសា',khmer:'ខ្មែរ',english:'អង់គ្លេស',businesses:'អាជីវកម្ម',sendTelegram:'ផ្ញើទៅ Telegram',testTelegram:'សាក Telegram',telegramChatId:'Telegram Chat ID',staffAdd:'បន្ថែមបុគ្គលិក',staffEmail:'អ៊ីមែលបុគ្គលិក',staffName:'ឈ្មោះបុគ្គលិក',staffRoleField:'តួនាទី',staffInviteNote:'គណនីបុគ្គលិកត្រូវមានក្នុង Supabase ជាមុនសិន។',a5:'A5',date:'កាលបរិច្ឆេទ',sender:'ផ្ញើដោយ',senderId:'លេខសម្គាល់អ្នកផ្ញើ',reportBuilder:'អ្នកបង្កើតរបាយការណ៍',reportText:'អត្ថបទរបាយការណ៍ Telegram',reportLayout:'ទម្រង់របាយការណ៍',reportSections:'ផ្នែករបាយការណ៍',reportAppearance:'រូបរាង',reportPreview:'មើលជាមុន',saveTemplate:'រក្សាទុកទម្រង់',resolution:'កម្រិតរូបភាព',imageFormat:'ទម្រង់រូបភាព',quality:'គុណភាព',resetTemplate:'កំណត់ត្រឡប់ទៅដើម',sectionSummary:'សង្ខេប',sectionPayments:'វិធីទូទាត់',sectionExpenses:'ចំណាយ',sectionCash:'គ្រប់គ្រងសាច់ប្រាក់',sectionProducts:'មុខទំនិញលក់ដាច់',sectionHighlights:'សង្ខេបសំខាន់ៗ',showDate:'បង្ហាញកាលបរិច្ឆេទ',showStaff:'បង្ហាញបុគ្គលិក',showRate:'បង្ហាញអត្រាប្តូរប្រាក់',showSender:'បង្ហាញអ្នកផ្ញើ',headerText:'អត្ថបទខាងលើ',footerText:'អត្ថបទខាងក្រោម',layoutMode:'ទម្រង់',compact:'ខ្លី',standard:'ស្តង់ដារ',detailed:'លម្អិត'}};
const DEFAULTS={cms:{shopName:'My Business',tagline:'Sales Management',footer:'Thank you',logo:'',primary:'#8B2E23',accent:'#C4563B',beige:'#E2C9A8',cream:'#F8F6F1'},settings:{rate:4000,phone:'',address:'',telegram:'',telegramChatId:'',facebook:'',website:''},reportTemplate:{header:'📊 Nona-me Coffee',footer:'Thank you for your support.',layout:'standard',resolution:'ultra',imageFormat:'png',imageQuality:1,telegramDelivery:'document',logoWidth:180,logoAlign:'left',showDate:true,showStaff:true,showRate:true,showSender:true,sections:{summary:true,payments:true,expenses:true,cash:true,products:true,highlights:true}},products:[],categories:['Coffee','Matcha','Cacao','Tea','Soda','Other'],promotions:[{id:'pr1',en:'2 Cups Special',kh:'ប្រូម៉ូសិន ២ កែវ',qty:2,price:6000,products:'ALL',active:true}],revenueChannels:[{key:'cash_sales',en:'Cash Sales',kh:'ការលក់សាច់ប្រាក់',active:true},{key:'cash_other',en:'Cash Other',kh:'សាច់ប្រាក់ផ្សេងៗ',active:true},{key:'app_sales',en:'APP Sales',kh:'ការលក់តាម APP',active:true},{key:'app_other',en:'APP Other',kh:'APP ផ្សេងៗ',active:true},{key:'foodpanda',en:'Food Panda',kh:'Food Panda',active:true},{key:'grab',en:'Grab',kh:'Grab',active:true},{key:'wow_now',en:'Wow Now',kh:'Wow Now',active:true},{key:'e_get',en:'E-Get',kh:'E-Get',active:true},{key:'wing_mall',en:'Wing Mall',kh:'Wing Mall',active:true},{key:'other',en:'Other',kh:'ផ្សេងៗ',active:true}],expenseCategories:[{key:'cash',en:'Cash',kh:'សាច់ប្រាក់'},{key:'aba_khr',en:'ABA (KHR)',kh:'ABA (KHR)'},{key:'aba_usd',en:'ABA (USD)',kh:'ABA (USD)'},{key:'other',en:'Other',kh:'ផ្សេងៗ'}],sales:[],expenses:[],deposits:[],cashCounts:[],stock:[],users:[]};
let SB=null; try{SB=window.supabase?.createClient(SUPABASE_URL,SUPABASE_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}})}catch(e){}
let app={lang:localStorage.getItem(DBKEY+'.lang')||'kh',session:null,businesses:[],business:null,membership:null,data:null,page:'dashboard',cart:[],pending:false};
const $=id=>document.getElementById(id),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const t=k=>T[app.lang]?.[k]||k, today=()=>new Date().toISOString().slice(0,10), money=(n,c='KHR')=>c==='KHR'?Math.round(+n||0).toLocaleString()+'៛':'$'+Number(n||0).toFixed(2), uid=p=>p+Date.now().toString(36)+Math.random().toString(36).slice(2,7);
function senderInfo(){const raw=app.session?.user?.user_metadata?.display_name||app.session?.user?.email||'Unknown';const name=String(raw).includes('@')?String(raw).split('@')[0]:String(raw);const id=app.session?.user?.id||'—';const clean=String(id).replace(/-/g,'').toUpperCase();const shortId=clean==='—'?'—':clean.slice(-8);return {name:name.slice(0,40),id:String(id),shortId};}
function blankData(){const d=structuredClone(DEFAULTS);d.products=seedProducts.map((p,i)=>({id:'p'+i,en:p[0],kh:p[1],price:p[2],category:p[3],active:true,image:''}));return d}
function localKey(){return DBKEY+'.'+(app.business?.id||'none')}
function saveLocal(){if(app.business&&app.data)localStorage.setItem(localKey(),JSON.stringify(app.data))}
function normalizeData(raw){const base=blankData();const x=raw&&typeof raw==='object'?raw:{};return {
  ...base,...x,
  cms:{...base.cms,...(x.cms||{})},
  settings:{...base.settings,...(x.settings||{})},
  products:Array.isArray(x.products)&&x.products.length?x.products:base.products,
  categories:Array.isArray(x.categories)&&x.categories.length?x.categories:base.categories,
  promotions:Array.isArray(x.promotions)?x.promotions:base.promotions,
  revenueChannels:Array.isArray(x.revenueChannels)&&x.revenueChannels.length?x.revenueChannels:base.revenueChannels,
  expenseCategories:Array.isArray(x.expenseCategories)&&x.expenseCategories.length?x.expenseCategories:base.expenseCategories,
  sales:Array.isArray(x.sales)?x.sales:[],
  expenses:Array.isArray(x.expenses)?x.expenses:[],
  deposits:Array.isArray(x.deposits)?x.deposits:[],
  cashCounts:Array.isArray(x.cashCounts)?x.cashCounts:[],
  stock:Array.isArray(x.stock)?x.stock:[],
  users:Array.isArray(x.users)?x.users:[]
}}
function loadLocal(){try{const x=localStorage.getItem(localKey());if(x)return normalizeData(JSON.parse(x))}catch{}return blankData()}
function productImageFallback(){return './logo.png'}
function slugify(s){return s.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||('business-'+Date.now())}
async function init(){console.info('Nona-me Sales Master 4.2 loaded');render();if(!SB)return;try{const {data:{session}}=await SB.auth.getSession();if(session){app.session=session;await loadBusinesses();}}catch(e){toast(e.message)}}
async function loadBusinesses(){const {data,error}=await SB.from('nona_me_memberships').select('business_id,role,active,nona_me_businesses(id,name,slug,logo_url,settings)');if(error){toast(error.message);return}app.businesses=(data||[]).filter(x=>x.active!==false&&x.nona_me_businesses).map(x=>({id:x.business_id,role:x.role,business:x.nona_me_businesses}));if(app.businesses.length===1)await chooseBusiness(app.businesses[0]);else render()}
async function chooseBusiness(row){app.business=row.business;app.membership=row;app.data=loadLocal();app.page='dashboard';await cloudLoadBusiness();render()}
async function cloudLoadBusiness(){if(!SB||!app.business)return;try{const {data,error}=await SB.from('nona_me_business_data').select('data').eq('business_id',app.business.id).maybeSingle();if(error)throw error;if(data?.data){app.data=normalizeData(data.data);saveLocal()}else if(app.membership.role!=='staff'){await cloudSaveData()}app.pending=false}catch(e){app.pending=true;console.warn(e)}}
async function cloudSaveData(){if(!SB||!app.business||!app.data||!app.session)return;const {error}=await SB.from('nona_me_business_data').upsert({business_id:app.business.id,data:app.data,updated_by:app.session.user.id,updated_at:new Date().toISOString()},{onConflict:'business_id'});if(error)throw error;app.pending=false;saveLocal()}
async function saveData(){saveLocal();if(!SB||!app.session||!app.business){app.pending=true;return}try{await cloudSaveData()}catch(e){app.pending=true;toast((app.lang==='kh'?'រក្សាទុកក្នុង Cloud មិនបាន៖ ':'Cloud save failed: ')+e.message)}}
function toast(msg){const el=document.createElement('div');el.className='toast';el.innerHTML=`<span style="display:inline-flex;align-items:center;gap:8px"><span aria-hidden="true">●</span><span>${esc(String(msg||''))}</span></span>`;document.body.appendChild(el);setTimeout(()=>el.remove(),2200)}
function render(){document.body.classList.toggle('mobile',innerWidth<800);if(!app.session){document.getElementById('app').innerHTML=loginView();bindLogin();return}if(!app.business){document.getElementById('app').innerHTML=businessView();bindBusiness();return}document.getElementById('app').innerHTML=appView();renderPage();bindNav();}
function loginView(){return `<div class="login-wrap"><div class="login-card"><img class="login-logo" src="${productImageFallback()}"><h1>${t('login')}</h1><div class="muted">Multi-Business Sales Management</div><form id="loginForm"><label>${t('email')}</label><input id="email" type="email" required><label>${t('password')}</label><input id="password" type="password" required><button class="primary full">${t('signIn')}</button></form><div class="divider">${t('signUp')}</div><form id="signupForm"><label>${t('name')}</label><input id="suName" required><label>${t('email')}</label><input id="suEmail" type="email" required><label>${t('password')}</label><input id="suPassword" type="password" minlength="6" required><button class="full">${t('signUp')}</button></form><div class="lang-toggle"><button data-lang="kh">${t('khmer')}</button><button data-lang="en">${t('english')}</button></div></div></div>`}
function bindLogin(){$('loginForm').onsubmit=async e=>{e.preventDefault();if(!SB)return toast('Supabase unavailable');const {data,error}=await SB.auth.signInWithPassword({email:$('email').value.trim(),password:$('password').value});if(error)return toast(error.message);app.session=data.session;await loadBusinesses();render()};$('signupForm').onsubmit=async e=>{e.preventDefault();if(!SB)return toast('Supabase unavailable');const {data,error}=await SB.auth.signUp({email:$('suEmail').value.trim(),password:$('suPassword').value,options:{data:{display_name:$('suName').value.trim()}}});if(error)return toast(error.message);toast(app.lang==='kh'?'បង្កើតគណនីរួច។ សូមបញ្ជាក់ Email ប្រសិនបើត្រូវការ។':'Account created. Confirm your email if required.');if(data.session){app.session=data.session;await loadBusinesses()}};document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{app.lang=b.dataset.lang;localStorage.setItem(DBKEY+'.lang',app.lang);render()})}
function businessView(){return `<div class="business-wrap"><div class="business-card"><img class="login-logo" src="${productImageFallback()}"><h1>${t('chooseBusiness')}</h1><div class="business-list">${app.businesses.map((x,i)=>`<button class="business-item" data-biz="${i}"><b>${esc(x.business.name)}</b><span>${esc(x.role)}</span></button>`).join('')||`<div class="empty">${t('noData')}</div>`}</div><div class="section-card"><h2>${t('createBusiness')}</h2><input id="newBizName" placeholder="${t('businessName')}"><input id="newBizSlug" placeholder="${t('slug')}"><button class="primary full" id="createBizBtn">${t('createBusiness')}</button></div><button class="link-btn" id="logoutBtn">${t('logout')}</button><div class="lang-toggle"><button data-lang="kh">${t('khmer')}</button><button data-lang="en">${t('english')}</button></div></div></div>`}
function bindBusiness(){document.querySelectorAll('[data-biz]').forEach(b=>b.onclick=()=>chooseBusiness(app.businesses[+b.dataset.biz]));$('createBizBtn').onclick=async()=>{const name=$('newBizName').value.trim(),slug=slugify($('newBizSlug').value||name);if(!name)return toast(app.lang==='kh'?'សូមដាក់ឈ្មោះអាជីវកម្ម':'Business name is required');const {data,error}=await SB.rpc('nona_me_create_business',{p_name:name,p_slug:slug});if(error)return toast(error.message);await loadBusinesses();const found=app.businesses.find(x=>x.id===data.id);if(found)await chooseBusiness(found)};$('logoutBtn').onclick=logout;document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{app.lang=b.dataset.lang;localStorage.setItem(DBKEY+'.lang',app.lang);render()})}
async function logout(){try{await SB?.auth.signOut()}catch{}app.session=null;app.business=null;app.membership=null;app.data=null;render()}
function appView(){const d=app.data,cms=d.cms;return `<div class="app-shell"><header class="topbar"><div class="brand"><img src="${esc(cms.logo||'./logo.png')}"><div><b>${esc(cms.shopName||app.business.name)}</b><span>${esc(cms.tagline||'')}</span></div></div><div class="top-actions"><span class="status ${app.pending?'offline':'online'}">${app.pending?'● '+t('offline'):'● '+t('sync')}</span><button class="ghost" id="langTop">${app.lang==='kh'?'EN':'ខ្មែរ'}</button><button class="ghost" id="bizSwitch">${esc(app.business.name)}</button><button class="ghost" id="logoutTop">${t('logout')}</button></div></header><div class="body"><aside class="sidebar"><nav>${navItems().map(x=>`<button class="nav-btn ${app.page===x.key?'active':''}" data-page="${x.key}">${x.icon}<span>${t(x.label)}</span></button>`).join('')}</nav></aside><main class="main"><div id="page"></div></main></div><input id="globalPhoto" class="hidden" type="file" accept="image/*" capture="environment"></div>`}
function navItems(){const base=[['dashboard','overview','▣'],['sales','sales','🧾'],['menu','menu','☕'],['expenses','expenses','💸'],['cash','cash','💰'],['deposit','deposit','🏦'],['stock','stock','📦'],['report','report','📊'],['reports','reports','📈']];if(app.membership.role!=='staff')base.push(['admin','admin','⚙️']);return base.map(([key,label,icon])=>({key,label,icon}))}
function bindNav(){
  document.querySelectorAll('.nav-btn,[data-page]').forEach(btn=>{
    btn.onclick=(e)=>{
      const key=btn.dataset.page;
      if(!key)return;
      e.preventDefault(); e.stopPropagation();
      app.page=key;
      renderPage();
      document.querySelectorAll('.nav-btn').forEach(x=>x.classList.toggle('active',x.dataset.page===key));
      window.scrollTo({top:0,behavior:'smooth'});
    };
  });
  if($('bizSwitch'))$('bizSwitch').onclick=(e)=>{e.preventDefault();app.business=null;app.membership=null;app.data=null;app.page='dashboard';render()};
  if($('logoutTop'))$('logoutTop').onclick=async(e)=>{e.preventDefault();await logout()};
}
function renderPage(){
  const p=$('page'); if(!p)return;
  try{
    const views={dashboard:dashboardView,sales:salesView,menu:menuView,expenses:expenseView,cash:cashView,deposit:depositView,stock:stockView,report:reportView,reports:reportsView,admin:adminView};
    const f=views[app.page];
    if(typeof f!=='function') throw new Error('Page handler missing: '+app.page);
    p.innerHTML=f();
    bindPage();
    document.querySelectorAll('.nav-btn').forEach(x=>x.classList.toggle('active',x.dataset.page===app.page));
  }catch(e){
    console.error('Render page failed',e);
    p.innerHTML='<section class="panel error-panel"><h2>'+esc(app.lang==='kh'?'ទំព័រមិនអាចបើកបាន':'Page could not load')+'</h2><p class="muted">'+esc(e?.message||e)+'</p><div class="actions"><button class="primary" data-page="dashboard">'+esc(t('overview'))+'</button></div></section>';
  }
}

function pageHead(title,actions=''){return `<div class="page-head"><div><h1>${title}</h1><div class="muted">${esc(app.business.name)}</div></div><div class="actions">${actions}</div></div>`}
function dashboardView(){const d=app.data,day=today(),sales=d.sales.filter(x=>x.date===day),exp=d.expenses.filter(x=>x.date===day);const k=sales.filter(x=>x.currency==='KHR').reduce((a,x)=>a+x.amount,0),u=sales.filter(x=>x.currency==='USD').reduce((a,x)=>a+x.amount,0);return pageHead(t('overview'))+`<div class="stats"><div><small>KHR</small><b>${money(k)}</b></div><div><small>USD</small><b>${money(u,'USD')}</b></div><div><small>${t('cups')}</small><b>${sales.reduce((a,x)=>a+x.cups,0)}</b></div><div><small>${t('expense')}</small><b>${money(exp.filter(x=>x.currency==='KHR').reduce((a,x)=>a+x.amount,0))}</b></div></div><div class="panel-grid"><section class="panel"><h2>${t('report')}</h2><p class="muted">${day}</p><div class="quick"><button class="primary" data-page="sales">${t('sales')}</button><button data-page="report">${t('report')}</button><button data-page="stock">${t('stock')}</button></div></section><section class="panel"><h2>${t('business')}</h2><div class="meta-list"><div><span>${t('businessName')}</span><b>${esc(app.business.name)}</b></div><div><span>${t('role')}</span><b>${esc(app.membership.role)}</b></div></div></section></div>`}
function menuView(){return salesView(true)}
function revenueChannels(){return app.data.revenueChannels.filter(x=>x.active!==false)}
function categories(){return [...new Set(app.data.products.map(x=>x.category).filter(Boolean))]}
function salesView(menuOnly=false){const d=app.data,q=(app.ui?.search||'').toLowerCase(),cat=app.ui?.cat||'All';const list=d.products.filter(p=>p.active!==false&&(cat==='All'||p.category===cat)&&((p.en||'').toLowerCase().includes(q)||(p.kh||'').includes(q)));const cards=list.map(p=>`<button class="product-card" data-add="${p.id}"><img src="${esc(p.image||'./logo.png')}"><div class="pname">${esc(p[app.lang])}</div><div class="palt">${esc(app.lang==='kh'?p.en:p.kh)}</div><b>${money(p.price)}</b><span>$${(p.price/(d.settings.rate||4000)).toFixed(2)}</span></button>`).join('');if(menuOnly)return pageHead(t('menu'))+`<section class="panel"><div class="filter-row"><input id="menuSearch" placeholder="${t('search')}"><select id="catSelect">${['All',...categories()].map(c=>`<option ${c===cat?'selected':''}>${esc(c)}</option>`).join('')}</select></div><div class="menu-scroll"><div class="product-grid">${cards||`<div class="empty">${t('noData')}</div>`}</div></div></section>`;return pageHead(t('sales'))+`<div class="sales-grid"><section class="panel"><div class="filter-row"><input id="menuSearch" placeholder="${t('search')}" value="${esc(app.ui?.search||'')}"><select id="catSelect">${['All',...categories()].map(c=>`<option ${c===cat?'selected':''}>${esc(c)}</option>`).join('')}</select></div><div class="menu-scroll"><div class="product-grid">${cards||`<div class="empty">${t('noData')}</div>`}</div></div></section><section class="panel"><h2>${t('currentSale')}</h2><div class="cart-list">${(app.cart||[]).map(i=>{const p=d.products.find(x=>x.id===i.id);return `<div class="cart-row"><div><b>${esc(p?.[app.lang]||i.id)}</b><small>${money(i.price)} × ${i.qty}</small></div><div><button data-q="-1" data-id="${i.id}">−</button><b>${i.qty}</b><button data-q="1" data-id="${i.id}">+</button></div></div>`}).join('')||`<div class="empty">${t('noData')}</div>`}</div><div class="form-grid"><label>${t('revenueChannel')}<select id="saleChannel">${revenueChannels().map(x=>`<option value="${x.key}">${esc(x[app.lang])}</option>`).join('')}</select></label><label>${t('promotion')}<select id="salePromo"><option value="">${t('none')}</option>${d.promotions.filter(x=>x.active).map(x=>`<option value="${x.id}">${esc(x[app.lang])} · ${x.qty} → ${money(x.price)}</option>`).join('')}</select></label><label>${t('currency')}<select id="saleCurrency"><option>KHR</option><option>USD</option></select></label><label>${t('payment')}<select id="salePayment"><option>Cash</option><option>ABA</option><option>Other</option></select></label><label>${t('rate')}<input id="saleRate" type="number" value="${d.settings.rate}"></label></div><div class="grand-total"><span>${t('total')}</span><b id="saleTotal">${money(cartTotal())}</b></div><div class="actions"><button class="primary" id="saveSale">${t('save')}</button><button id="saveSalePrint">${t('savePrint')}</button></div></section></div>`}
function cartTotal(){let total=(app.cart||[]).reduce((a,i)=>a+i.price*i.qty,0);const promo=document.getElementById('salePromo')?.value;const p=app.data.promotions.find(x=>x.id===promo);if(p&&app.cart.reduce((a,x)=>a+x.qty,0)>=p.qty)total=p.price;return total}
function expenseView(){return pageHead(t('expenses'))+`<div class="two-col"><section class="panel"><h2>${t('add')}</h2><label>${t('expenseOn')}<input id="exDesc"></label><div class="form-grid"><label>${t('amount')}<input id="exAmt" type="number"></label><label>${t('currency')}<select id="exCur"><option>KHR</option><option>USD</option></select></label><label>${t('payment')}<select id="exMethod">${app.data.expenseCategories.map(x=>`<option value="${x.key}">${esc(x[app.lang])}</option>`).join('')}</select></label></div><label>${t('note')}<textarea id="exNote"></textarea></label><button class="primary" id="saveExpense">${t('save')}</button></section><section class="panel"><h2>${t('records')}</h2>${app.data.expenses.slice().reverse().map(x=>`<div class="record-row"><div><b>${esc(x.desc)}</b><small>${x.date} · ${esc(x.method)}</small></div><strong>${money(x.amount,x.currency)}</strong></div>`).join('')||`<div class="empty">${t('noData')}</div>`}</section></div>`}
function cashView(){const d=app.data;const last=d.cashCounts[d.cashCounts.length-1];const previousKhr=last?.actualKhr||0,previousUsd=last?.actualUsd||0;const salesKhr=d.sales.filter(x=>x.date===today()&&x.currency==='KHR'&&x.payment==='Cash').reduce((a,x)=>a+x.amount,0);const salesUsd=d.sales.filter(x=>x.date===today()&&x.currency==='USD'&&x.payment==='Cash').reduce((a,x)=>a+x.amount,0);const expKhr=d.expenses.filter(x=>x.date===today()&&x.currency==='KHR'&&x.method==='cash').reduce((a,x)=>a+x.amount,0);const expUsd=d.expenses.filter(x=>x.date===today()&&x.currency==='USD'&&x.method==='cash').reduce((a,x)=>a+x.amount,0);const depKhr=d.deposits.filter(x=>x.date===today()&&x.currency==='KHR').reduce((a,x)=>a+x.amount,0);const depUsd=d.deposits.filter(x=>x.date===today()&&x.currency==='USD').reduce((a,x)=>a+x.amount,0);return pageHead(t('cash'))+`<section class="panel"><div class="report-table"><div>${t('previous')}<b>${money(previousKhr)}</b><b>${money(previousUsd,'USD')}</b></div><div>${t('cashSales')}<b>${money(salesKhr)}</b><b>${money(salesUsd,'USD')}</b></div><div>${t('cashExpenses')}<b>${money(expKhr)}</b><b>${money(expUsd,'USD')}</b></div><div>${t('bankDeposit')}<b>${money(depKhr)}</b><b>${money(depUsd,'USD')}</b></div><div><strong>${t('expected')}</strong><strong>${money(previousKhr+salesKhr-expKhr-depKhr)}</strong><strong>${money(previousUsd+salesUsd-expUsd-depUsd,'USD')}</strong></div></div><div class="cash-form"><input id="countKhr" type="number" placeholder="KHR"><input id="countUsd" type="number" step="0.01" placeholder="USD"><button class="primary" id="saveCash">${t('save')}</button></div></section>`}
function depositView(){return pageHead(t('deposit'))+`<section class="panel"><div class="form-grid"><label>${t('amount')}<input id="depAmt" type="number"></label><label>${t('currency')}<select id="depCur"><option>KHR</option><option>USD</option></select></label><label>Bank<input id="depBank"></label><label>${t('note')}<input id="depNote"></label></div><button class="primary" id="saveDeposit">${t('save')}</button></section><section class="panel"><h2>${t('records')}</h2>${app.data.deposits.slice().reverse().map(x=>`<div class="record-row"><div><b>${esc(x.bank||'Bank')}</b><small>${x.date} · ${esc(x.note||'')}</small></div><strong>${money(x.amount,x.currency)}</strong></div>`).join('')||`<div class="empty">${t('noData')}</div>`}</section>`}
function photoField(prefix,initial=''){return `<div class="photo-box"><div class="square-preview"><img id="${prefix}Preview" src="${esc(initial||'./logo.png')}"></div><div class="photo-actions"><button type="button" id="${prefix}Upload">🖼️ ${t('uploadPhoto')}</button><button type="button" id="${prefix}Camera">📷 ${t('takePhoto')}</button><button type="button" id="${prefix}Retake" class="hidden">🔄 ${t('retakePhoto')}</button><button type="button" id="${prefix}Remove" class="hidden">✕ ${t('removePhoto')}</button></div><input id="${prefix}File" class="hidden" type="file" accept="image/*"><input id="${prefix}Cam" class="hidden" type="file" accept="image/*" capture="environment"></div>`}
function menuAdmin(){return `<section class="panel"><div class="actions between"><h2>${t('products')}</h2><button class="primary" id="addProduct">${t('add')}</button></div>${app.data.products.map((p,i)=>`<div class="record-row"><div class="thumb-row"><img src="${esc(p.image||'./logo.png')}"><div><b>${esc(p.en)}</b><small>${esc(p.kh)} · ${money(p.price)} · ${esc(p.category)}</small></div></div><div class="actions"><button data-edit-product="${i}">${t('edit')}</button><button data-delete-product="${i}">${t('delete')}</button></div></div>`).join('')}</section>`}
function stockView(){return stockAdmin()}

function stockAdmin(){return `<section class="panel"><div class="actions between"><h2>${t('stock')}</h2><button class="primary" id="addStock">${t('add')}</button></div>${app.data.stock.map((p,i)=>`<div class="record-row"><div class="thumb-row"><img src="${esc(p.image||'./logo.png')}"><div><b>${esc(p.name)}</b><small>${p.qty} ${esc(p.unit||'')} · min ${p.min||0}</small></div></div><div class="actions"><button data-edit-stock="${i}">${t('edit')}</button><button data-delete-stock="${i}">${t('delete')}</button></div></div>`).join('')||`<div class="empty">${t('noData')}</div>`}</section>`}
function promoAdmin(){return `<section class="panel"><div class="actions between"><h2>${t('promotions')}</h2><button class="primary" id="addPromo">${t('add')}</button></div>${app.data.promotions.map((p,i)=>`<div class="record-row"><div><b>${esc(p[app.lang])}</b><small>${p.qty} → ${money(p.price)} · ${p.active?'Active':'Inactive'}</small></div><div class="actions"><button data-edit-promo="${i}">${t('edit')}</button><button data-delete-promo="${i}">${t('delete')}</button></div></div>`).join('')}</section>`}
function adminView(){return pageHead(t('admin'))+`<div class="admin-grid"><section class="panel"><h2>${t('businesses')}</h2><div class="meta-list"><div><span>${t('businessName')}</span><b>${esc(app.business.name)}</b></div><div><span>${t('role')}</span><b>${esc(app.membership.role)}</b></div></div></section>${menuAdmin()}${promoAdmin()}${stockAdmin()}<section class="panel"><div class="actions between"><h2>${t('website')}</h2><button class="primary" id="saveWebsite">${t('save')}</button></div><div class="form-grid"><label>${t('businessName')}<input id="wsName" value="${esc(app.data.cms.shopName)}"></label><label>Tagline<input id="wsTagline" value="${esc(app.data.cms.tagline)}"></label><label>${t('phone')}<input id="wsPhone" value="${esc(app.data.settings.phone||'')}"></label><label>${t('address')}<input id="wsAddress" value="${esc(app.data.settings.address||'')}"></label><label>${t('rate')}<input id="wsRate" type="number" value="${app.data.settings.rate}"></label><label>${t('telegramChatId')}<input id="wsTelegramChatId" value="${esc(app.data.settings.telegramChatId||'')}"></label><label style="align-self:end"><button id="testTelegram" type="button">✈️ ${t('testTelegram')}</button></label><label>Primary<input id="wsPrimary" type="color" value="${app.data.cms.primary}"></label><label>Accent<input id="wsAccent" type="color" value="${app.data.cms.accent}"></label></div></section>${reportTemplateEditor()}<section class="panel"><div class="actions between"><h2>${t('staff')}</h2><button class="primary" id="addStaff">${t('staffAdd')}</button></div><div class="muted">${t('staffInviteNote')}</div>${(app.data.users||[]).map((u,i)=>`<div class="record-row"><div><b>${esc(u.name||u.email)}</b><small>${esc(u.email)} · ${esc(u.role||'staff')}</small></div><button data-delete-user="${i}">${t('delete')}</button></div>`).join('')||`<div class="empty">${t('noData')}</div>`}</section></div>`}
function reportData(){
  const d=app.data,day=today(),sales=d.sales.filter(x=>x.date===day),exp=d.expenses.filter(x=>x.date===day),deps=d.deposits.filter(x=>x.date===day);
  const byCh={};
  for(const x of revenueChannels())byCh[x.key]=[0,0,x];
  sales.forEach(x=>{if(byCh[x.channel])byCh[x.channel][x.currency==='KHR'?0:1]+=x.amount});
  const paymentRows={Cash:{k:0,u:0},ABA:{k:0,u:0},Other:{k:0,u:0}};
  sales.forEach(x=>{const key=paymentRows[x.payment]?x.payment:'Other';paymentRows[key][x.currency==='KHR'?'k':'u']+=x.amount});
  const totalK=sales.filter(x=>x.currency==='KHR').reduce((a,x)=>a+x.amount,0),totalU=sales.filter(x=>x.currency==='USD').reduce((a,x)=>a+x.amount,0);
  const expK=exp.filter(x=>x.currency==='KHR').reduce((a,x)=>a+x.amount,0),expU=exp.filter(x=>x.currency==='USD').reduce((a,x)=>a+x.amount,0);
  const depK=deps.filter(x=>x.currency==='KHR').reduce((a,x)=>a+x.amount,0),depU=deps.filter(x=>x.currency==='USD').reduce((a,x)=>a+x.amount,0);
  const cups=sales.reduce((a,x)=>a+x.cups,0);
  const itemMap={};
  sales.forEach(s=>s.items?.forEach(i=>{
    const key=i.en||i.kh||i.id||'—';
    if(!itemMap[key])itemMap[key]={en:i.en||key,kh:i.kh||i.en||key,qty:0,amountK:0,amountU:0};
    itemMap[key].qty+=Number(i.qty)||0;
    const itemAmount=(Number(i.price)||0)*(Number(i.qty)||0);
    if(s.currency==='USD')itemMap[key].amountU+=itemAmount;else itemMap[key].amountK+=itemAmount;
  }));
  const topItems=Object.values(itemMap).sort((a,b)=>b.qty-a.qty||((b.amountK+b.amountU)-(a.amountK+a.amountU))).slice(0,3);
  const best=topItems[0]?.[app.lang]||topItems[0]?.en||'—';
  const promoCounts={};
  sales.forEach(s=>{if(s.promotionId){const p=d.promotions.find(x=>x.id===s.promotionId);const name=p?.[app.lang]||p?.en||s.promotionId;promoCounts[name]=(promoCounts[name]||0)+1;}});
  const promotionSummary=Object.entries(promoCounts).sort((a,b)=>b[1]-a[1])[0]||null;
  const prev=d.cashCounts[d.cashCounts.length-1];
  const prevK=prev?.actualKhr||0,prevU=prev?.actualUsd||0;
  const csK=sales.filter(x=>x.payment==='Cash'&&x.currency==='KHR').reduce((a,x)=>a+x.amount,0),csU=sales.filter(x=>x.payment==='Cash'&&x.currency==='USD').reduce((a,x)=>a+x.amount,0);
  const ceK=exp.filter(x=>x.method==='cash'&&x.currency==='KHR').reduce((a,x)=>a+x.amount,0),ceU=exp.filter(x=>x.method==='cash'&&x.currency==='USD').reduce((a,x)=>a+x.amount,0);
  const actual=prev||{};
  return {byCh,totalK,totalU,expK,expU,depK,depU,cups,best,prevK,prevU,csK,csU,ceK,ceU,expectedK:prevK+csK-ceK-depK,expectedU:prevU+csU-ceU-depU,actualK:actual.actualKhr??null,actualU:actual.actualUsd??null,paymentRows,topItems,promotionSummary};
}
function getReportTemplate(){
  const base=structuredClone(DEFAULTS.reportTemplate);
  const x=app.data.reportTemplate||{};
  return {...base,...x,sections:{...base.sections,...(x.sections||{})}};
}
function reportTemplateEditor(){
  const rt=getReportTemplate(),sec=rt.sections;
  const ck=k=>sec[k]?'checked':'';
  return `<section class="panel report-builder"><div class="actions between"><div><h2>${t('reportBuilder')}</h2><p class="muted">${t('reportText')} · ${t('reportLayout')}</p></div><button class="primary" id="saveReportTemplate">${t('saveTemplate')}</button></div><div class="form-grid"><label>${t('headerText')}<input id="rtHeader" value="${esc(rt.header)}"></label><label>${t('footerText')}<input id="rtFooter" value="${esc(rt.footer)}"></label><label>${t('layoutMode')}<select id="rtLayout"><option value="compact" ${rt.layout==='compact'?'selected':''}>${t('compact')}</option><option value="standard" ${rt.layout==='standard'?'selected':''}>${t('standard')}</option><option value="detailed" ${rt.layout==='detailed'?'selected':''}>${t('detailed')}</option></select></label><label>Resolution<select id="rtResolution"><option value="standard" ${(rt.resolution||'standard')==='standard'?'selected':''}>Standard</option><option value="high" ${rt.resolution==='high'?'selected':''}>High · 200 DPI</option><option value="ultra" ${rt.resolution==='ultra'?'selected':''}>Ultra · 300 DPI</option></select></label><label>Image format<select id="rtImageFormat"><option value="png" ${(rt.imageFormat||'png')==='png'?'selected':''}>PNG</option><option value="jpeg" ${rt.imageFormat==='jpeg'?'selected':''}>JPEG</option></select></label><label>Quality<input id="rtImageQuality" type="number" min="0.7" max="1" step="0.05" value="${Number(rt.imageQuality||1)}"></label><label>Telegram delivery<select id="rtTelegramDelivery"><option value="document" ${rt.telegramDelivery==='document'?'selected':''}>Original PNG · sharp</option><option value="photo" ${rt.telegramDelivery==='photo'?'selected':''}>Photo</option></select></label><label>Logo width (px)<input id="rtLogoWidth" type="number" min="80" max="280" step="5" value="${Number(rt.logoWidth||180)}"></label><label>Logo align<select id="rtLogoAlign"><option value="left" ${rt.logoAlign==='left'?'selected':''}>Left</option><option value="center" ${rt.logoAlign==='center'?'selected':''}>Center</option></select></label></div><div class="report-builder-grid"><div><h3>${t('reportSections')}</h3><p class="muted">${app.lang==='kh'?'ដោះធីកផ្នែកដែលមិនចង់បង្ហាញ។':'Uncheck sections you do not want to show.'}</p><div class="check-grid"><label><input type="checkbox" id="rtSummary" ${ck('summary')}> ${t('sectionSummary')}</label><label><input type="checkbox" id="rtPayments" ${ck('payments')}> ${t('sectionPayments')}</label><label><input type="checkbox" id="rtExpenses" ${ck('expenses')}> ${t('sectionExpenses')}</label><label><input type="checkbox" id="rtCash" ${ck('cash')}> ${t('sectionCash')}</label><label><input type="checkbox" id="rtProducts" ${ck('products')}> ${t('sectionProducts')}</label><label><input type="checkbox" id="rtHighlights" ${ck('highlights')}> ${t('sectionHighlights')}</label></div></div><div><h3>${t('reportAppearance')}</h3><div class="check-grid"><label><input type="checkbox" id="rtDate" ${rt.showDate?'checked':''}> ${t('showDate')}</label><label><input type="checkbox" id="rtStaff" ${rt.showStaff?'checked':''}> ${t('showStaff')}</label><label><input type="checkbox" id="rtRate" ${rt.showRate?'checked':''}> ${t('showRate')}</label><label><input type="checkbox" id="rtSender" ${rt.showSender?'checked':''}> ${t('showSender')}</label></div></div></div><div class="actions end"><button id="resetReportTemplate">${t('resetTemplate')}</button><button id="previewReportTemplate" class="primary">${t('reportPreview')}</button></div><div class="report-template-preview" id="reportTemplatePreview">${buildReportTextPreview()}</div></section>`;
}
function buildReportTextPreview(){
  const rt=getReportTemplate(),r=reportData(),m=senderInfo(),rows=[];
  if(rt.header) rows.push(rt.header); rows.push(t('report')+' · '+today());
  if(rt.showDate) rows.push((app.lang==='kh'?'កាលបរិច្ឆេទ':'Date')+': '+today());
  if(rt.showStaff) rows.push(t('sender')+': '+m.name);
  if(rt.sections.summary) rows.push(`${t('cups')}: ${r.cups} · ${t('revenue')}: ${money(r.totalK)} · ${money(r.totalU,'USD')}`);
  if(rt.sections.payments) rows.push(`${t('payments')}: Cash ${money(r.paymentRows.Cash.k)} · ABA ${money(r.paymentRows.ABA.k)} · Other ${money(r.paymentRows.Other.k)}`);
  if(rt.sections.expenses) rows.push(`${t('expense')}: ${money(r.expK)} · ${money(r.expU,'USD')}`);
  if(rt.sections.cash) rows.push(`${t('expected')}: ${money(r.expectedK)} · ${money(r.expectedU,'USD')}`);
  if(rt.sections.products) rows.push(`${t('bestSeller')}: ${r.best||'—'}`);
  if(rt.showRate) rows.push(`${t('rate')}: 1 USD = ${Number(app.data.settings.rate||0).toLocaleString()} KHR`);
  if(rt.showSender) rows.push(`${t('sender')}: ${m.name} · #${m.shortId}`);
  if(rt.footer) rows.push(rt.footer);
  return `<pre>${esc(rows.join('\n'))}</pre>`;
}
function reportBuilderBind(){
  if(!$('saveReportTemplate'))return;
  const read=()=>({header:$('rtHeader').value,footer:$('rtFooter').value,layout:$('rtLayout').value,resolution:$('rtResolution').value,imageFormat:$('rtImageFormat').value,imageQuality:Math.min(1,Math.max(.7,Number($('rtImageQuality').value)||1)),telegramDelivery:$('rtTelegramDelivery').value,logoWidth:Math.min(280,Math.max(80,Number($('rtLogoWidth').value)||180)),logoAlign:$('rtLogoAlign').value,showDate:$('rtDate').checked,showStaff:$('rtStaff').checked,showRate:$('rtRate').checked,showSender:$('rtSender').checked,sections:{summary:$('rtSummary').checked,payments:$('rtPayments').checked,expenses:$('rtExpenses').checked,cash:$('rtCash').checked,products:$('rtProducts').checked,highlights:$('rtHighlights').checked}});
  $('saveReportTemplate').onclick=async()=>{app.data.reportTemplate=read();await saveData();toast(t('saveTemplate')+' ✓');renderPage()};
  $('resetReportTemplate').onclick=async()=>{app.data.reportTemplate=structuredClone(DEFAULTS.reportTemplate);await saveData();renderPage()};
  $('previewReportTemplate').onclick=()=>{app.data.reportTemplate=read();$('reportTemplatePreview').innerHTML=buildReportTextPreview()};
}
function reportView(){
  const r=reportData();
  const meta=senderInfo();
  const shop=app.data.cms.shopName||app.business.name||'—';
  const date=today();
  const kh=app.lang==='kh';
  const labels=kh?{
    title:'របាយការណ៍ប្រចាំថ្ងៃ',date:'កាលបរិច្ឆេទ',staff:'បុគ្គលិក',rate:'អត្រាប្តូរប្រាក់',cups:'ចំនួនកែវ',revenue:'ចំណូល',expenses:'ចំណាយ',net:'សុទ្ធ',payments:'ការទូទាត់',method:'វិធីទូទាត់',expense:'ចំណាយតាមប្រភេទ',cash:'គ្រប់គ្រងសាច់ប្រាក់',description:'បរិយាយ',previous:'សាច់ប្រាក់ដើម',cashSales:'លក់សាច់ប្រាក់',cashExpenses:'ចំណាយសាច់ប្រាក់',bankDeposit:'ដាក់ធនាគារ',expected:'រំពឹងទុក',actual:'រាប់បាន',difference:'ខុសគ្នា',highlights:'សង្ខេបសំខាន់ៗ',bestSeller:'លក់ដាច់ជាងគេ',promotion:'ប្រូម៉ូសិន',thank:'សូមអរគុណ',noData:'មិនទាន់មានទិន្នន័យ'}:
    {title:'Daily Sales Report',date:'Date',staff:'Staff',rate:'Exchange rate',cups:'Cups',revenue:'Revenue',expenses:'Expenses',net:'Net',payments:'Payment Methods',method:'Method',expense:'Expense Summary',cash:'Cash Control',description:'Description',previous:'Previous cash',cashSales:'Cash sales',cashExpenses:'Cash expenses',bankDeposit:'Bank deposit',expected:'Expected',actual:'Actual',difference:'Difference',highlights:'Highlights',bestSeller:'Best seller',promotion:'Promotion',thank:'Thank you',noData:'No data yet'};
  const logo=app.data.cms.logo||'./logo.png';
  const paymentNames=kh?{Cash:'សាច់ប្រាក់',ABA:'ABA',Other:'ផ្សេងៗ'}:{Cash:'Cash',ABA:'ABA',Other:'Other'};
  const paymentRows=['Cash','ABA','Other'].map(key=>({key,label:paymentNames[key],k:r.paymentRows[key].k,u:r.paymentRows[key].u}));
  const expenseRows=app.data.expenseCategories.map(c=>{
    const k=app.data.expenses.filter(x=>x.date===date&&x.method===c.key&&x.currency==='KHR').reduce((a,x)=>a+x.amount,0);
    const u=app.data.expenses.filter(x=>x.date===date&&x.method===c.key&&x.currency==='USD').reduce((a,x)=>a+x.amount,0);
    return {label:c[app.lang],k,u};
  }).filter(x=>x.k||x.u).slice(0,4);
  const cashRows=[
    [labels.previous,r.prevK,r.prevU],
    [labels.cashSales,r.csK,r.csU],
    [labels.cashExpenses,r.ceK,r.ceU],
    [labels.bankDeposit,r.depK,r.depU],
    [labels.expected,r.expectedK,r.expectedU,true],
    [labels.actual,r.actualK,r.actualU],
    [labels.difference,r.actualK===null?null:r.actualK-r.expectedK,r.actualU===null?null:r.actualU-r.expectedU]
  ];
  const topItems=r.topItems.map((x,i)=>`<div class="nr-product-row"><span class="nr-rank">${i+1}</span><span class="nr-product-name">${esc(x[app.lang]||x.en||'—')}</span><b>${x.qty}</b><strong>${x.amountK?money(x.amountK):money(x.amountU,'USD')}</strong></div>`).join('');
  return pageHead(labels.title,`<button id="copyReport">${t('copy')}</button><button id="saveReportImage">🖼️ ${t('saveImage')} · A5</button><button id="sendTelegram">✈️ ${t('sendTelegram')}</button><button id="printReport">${t('print')} · A5</button>`)+`<section class="panel report-host" id="reportCapture">${buildA5ReportMarkup({r,meta,shop,date,kh,labels,logo,paymentRows,expenseRows,cashRows,topItems})}</section>`;
}
function buildA5ReportMarkup({r,meta,shop,date,kh,labels,logo,paymentRows,expenseRows,cashRows,topItems}){
  const value=(x,cur)=>x===null?'—':money(x,cur);
  const paymentHtml=paymentRows.map(x=>`<div class="nr-row"><span>${esc(x.label)}</span><b>${money(x.k)}</b><b>${money(x.u,'USD')}</b></div>`).join('');
  const expenseHtml=expenseRows.map(x=>`<div class="nr-row"><span>${esc(x.label)}</span><b>${money(x.k)}</b><b>${money(x.u,'USD')}</b></div>`).join('')||`<div class="nr-empty">${esc(labels.noData)}</div>`;
  const cashHtml=cashRows.map((x,i)=>`<div class="nr-row ${x[3]?'nr-emphasis':''} ${i===6?'nr-diff':''}"><span>${esc(x[0])}</span><b>${value(x[1])}</b><b>${value(x[2],'USD')}</b></div>`).join('');
  const bestProduct=r.topItems[0];
  const topProductName=bestProduct?.[kh?'kh':'en']||bestProduct?.en||'—';
  const promotion=r.promotionSummary;
  const footer=app.data.cms.footer||labels.thank;
  const rt=getReportTemplate();
  const logoWidth=Math.min(280,Math.max(80,Number(rt.logoWidth)||180));
  const logoAlign=rt.logoAlign==='center'?'center':'left';
  return `<div class="nr-sheet rt-layout-${rt.layout}" data-a5-sheet>
    <header class="nr-header">
      <div class="nr-brand" style="align-items:${logoAlign};"><img src="${esc(logo)}" alt="${esc(shop)}" style="width:${logoWidth}px;height:auto;max-width:100%;display:block;object-fit:contain;object-position:left center;aspect-ratio:auto;"><div class="nr-brand-note">${esc(kh?'ប្រព័ន្ធកត់ត្រាការលក់':'Sales recording system')}</div></div>
      <div class="nr-heading"><div class="nr-overline">${esc(labels.title)}</div><h2>${esc(shop)}</h2><div class="nr-meta"><span>${esc(labels.date)}<b>${esc(date)}</b></span><span>${esc(labels.staff)}<b>${esc(meta.name)}</b></span><span>${esc(labels.rate)}<b>1 USD = ${Number(app.data.settings.rate||0).toLocaleString()} KHR</b></span></div></div>
    </header>
    <section class="nr-summary">
      <div class="nr-card nr-cups"><span>${esc(labels.cups)}</span><strong>${r.cups}</strong></div>
      <div class="nr-card nr-revenue"><span>${esc(labels.revenue)}</span><strong>${money(r.totalK)}</strong><small>${money(r.totalU,'USD')}</small></div>
      <div class="nr-card nr-expense"><span>${esc(labels.expenses)}</span><strong>${money(r.expK)}</strong><small>${money(r.expU,'USD')}</small></div>
      <div class="nr-card nr-net"><span>${esc(labels.net)}</span><strong>${money(r.totalK-r.expK)}</strong><small>${money(r.totalU-r.expU,'USD')}</small></div>
    </section>
    <section class="nr-box">
      <div class="nr-section-title"><span>${esc(labels.payments)}</span><small>KHR / USD</small></div>
      <div class="nr-table-head"><span>${esc(labels.method)}</span><b>KHR</b><b>USD</b></div>
      ${paymentHtml}
      <div class="nr-total"><span>${esc(labels.revenue)}</span><b>${money(r.totalK)}</b><b>${money(r.totalU,'USD')}</b></div>
    </section>
    <section class="nr-two-col">
      <div class="nr-box">
        <div class="nr-section-title"><span>${esc(labels.expense)}</span><small>KHR / USD</small></div>
        <div class="nr-table-head"><span>${esc(labels.method)}</span><b>KHR</b><b>USD</b></div>
        ${expenseHtml}
        <div class="nr-total"><span>${esc(labels.expenses)}</span><b>${money(r.expK)}</b><b>${money(r.expU,'USD')}</b></div>
      </div>
      <div class="nr-box">
        <div class="nr-section-title"><span>${esc(labels.highlights)}</span><small>${esc(labels.staff)}</small></div>
        <div class="nr-highlight-row"><span>${esc(labels.bestSeller)}</span><strong>${esc(topProductName)}</strong></div>
        <div class="nr-highlight-row"><span>${esc(labels.cups)}</span><strong>${r.cups}</strong></div>
        <div class="nr-highlight-row"><span>${esc(labels.bankDeposit)}</span><strong>${money(r.depK)} · ${money(r.depU,'USD')}</strong></div>
        ${promotion?`<div class="nr-highlight-row"><span>${esc(labels.promotion)}</span><strong>${esc(promotion[0])}${promotion[1]>1?` × ${promotion[1]}`:''}</strong></div>`:''}
      </div>
    </section>
    <section class="nr-box nr-cash-box">
      <div class="nr-section-title"><span>${esc(labels.cash)}</span><small>KHR / USD</small></div>
      <div class="nr-table-head"><span>${esc(labels.description)}</span><b>KHR</b><b>USD</b></div>
      ${cashHtml}
    </section>
    <section class="nr-box nr-products-box">
      <div class="nr-section-title"><span>${esc(kh?'មុខទំនិញលក់ដាច់':'Top Selling Items')}</span><small>${esc(kh?'ចំនួន / ចំណូល':'Qty / Revenue')}</small></div>
      <div class="nr-product-head"><span>#</span><span>${esc(kh?'មុខទំនិញ':'Product')}</span><b>${esc(kh?'កែវ':'Qty')}</b><b>${esc(kh?'ចំណូល':'Revenue')}</b></div>
      ${topItems||`<div class="nr-empty">${esc(labels.noData)}</div>`}
    </section>
    <footer class="nr-footer"><div>${esc(footer)}</div><div>${esc(shop)} · ${esc(date)} · ${esc(meta.name)}</div></footer>
  </div>`;
}

function reportsView(){return pageHead(t('reports'))+`<section class="panel"><div class="stats"><div><small>${t('daily')}</small><b>${money(reportData().totalK)}</b></div><div><small>${t('weekly')}</small><b>—</b></div><div><small>${t('monthly')}</small><b>—</b></div></div><p class="muted">${app.lang==='kh'?'Weekly និង Monthly នឹងប្រើទិន្នន័យ Cloud របស់អាជីវកម្មនេះ។':'Weekly and Monthly use this business cloud data.'}</p></section>`}
function bindPage(){
  reportBuilderBind();
  document.querySelectorAll('[data-page]').forEach(btn=>{btn.onclick=(e)=>{e.preventDefault();e.stopPropagation();app.page=btn.dataset.page;renderPage();bindNav();}});
  if($('menuSearch'))$('menuSearch').oninput=e=>{app.ui=app.ui||{};app.ui.search=e.target.value;renderPage()};
  if($('catSelect'))$('catSelect').onchange=e=>{app.ui=app.ui||{};app.ui.cat=e.target.value;renderPage()};
  if($('salePromo'))$('salePromo').onchange=()=>{if($('saleTotal'))$('saleTotal').textContent=money(cartTotal(),$('saleCurrency')?.value||'KHR')};
}
function saveSale(print=false){if(!app.cart.length)return toast(t('noData'));const cur=$('saleCurrency').value,rate=+$('saleRate').value||app.data.settings.rate,amount=cartTotal();const sale={id:uid('s'),date:today(),time:new Date().toLocaleTimeString(),user:app.session.user.user_metadata?.display_name||app.session.user.email,currency:cur,payment:$('salePayment').value,channel:$('saleChannel').value,rate,amount,cups:app.cart.reduce((a,x)=>a+x.qty,0),items:app.cart.map(x=>({...x})),promotionId:$('salePromo').value||''};app.data.sales.push(sale);app.cart=[];saveData().then(()=>{toast(t('save'));renderPage();bindNav();if(print)printReceipt(sale)}).catch(err=>toast(err?.message||String(err)))}
function saveExpense(){const x={id:uid('e'),date:today(),time:new Date().toLocaleTimeString(),user:app.session.user.email,desc:$('exDesc').value.trim(),amount:+$('exAmt').value||0,currency:$('exCur').value,method:$('exMethod').value,note:$('exNote').value.trim()};if(!x.desc||!x.amount)return toast(t('noData'));app.data.expenses.push(x);saveData().then(()=>{toast(t('save'));renderPage()})}
function saveDeposit(){const x={id:uid('d'),date:today(),time:new Date().toLocaleTimeString(),user:app.session.user.email,amount:+$('depAmt').value||0,currency:$('depCur').value,bank:$('depBank').value.trim(),note:$('depNote').value.trim()};if(!x.amount)return toast(t('noData'));app.data.deposits.push(x);saveData().then(()=>{toast(t('save'));renderPage()})}
function saveCash(){const r=reportData();const x={id:uid('c'),date:today(),time:new Date().toLocaleTimeString(),user:app.session.user.email,actualKhr:+$('countKhr').value||0,actualUsd:+$('countUsd').value||0,expectedKhr:r.expectedK,expectedUsd:r.expectedU};app.data.cashCounts.push(x);saveData().then(()=>{toast(t('save'));renderPage()})}
function modal(title,body){$('modalRoot').innerHTML=`<div class="modal-backdrop"><div class="modal"><div class="actions between"><h2>${title}</h2><button id="closeModal">✕</button></div><div>${body}</div></div></div>`;$('closeModal').onclick=()=>{$('modalRoot').innerHTML=''};}
function wirePhoto(prefix,onChange){let val='';const preview=$(`${prefix}Preview`),file=$(`${prefix}File`),cam=$(`${prefix}Cam`),up=$(`${prefix}Upload`),ca=$(`${prefix}Camera`),rt=$(`${prefix}Retake`),rm=$(`${prefix}Remove`);const apply=f=>squareImage(f,img=>{val=img;preview.src=img;rt.classList.remove('hidden');rm.classList.remove('hidden');up.classList.add('hidden');ca.classList.add('hidden');onChange(val)});up.onclick=()=>file.click();ca.onclick=()=>cam.click();rt.onclick=()=>cam.click();rm.onclick=()=>{val='';preview.src='./logo.png';rt.classList.add('hidden');rm.classList.add('hidden');up.classList.remove('hidden');ca.classList.remove('hidden');onChange(val)};file.onchange=()=>file.files[0]&&apply(file.files[0]);cam.onchange=()=>cam.files[0]&&apply(cam.files[0]);}
function openProductModal(idx=null){const p=idx==null?{en:'',kh:'',price:5000,category:'Coffee',active:true,image:''}:{...app.data.products[idx]};modal(idx==null?t('add'):t('edit'),`<div class="form-grid"><label>${t('englishName')}<input id="pmEn" value="${esc(p.en)}"></label><label>${t('khmerName')}<input id="pmKh" value="${esc(p.kh)}"></label><label>${t('priceKHR')}<input id="pmPrice" type="number" value="${p.price}"></label><label>${t('category')}<input id="pmCat" value="${esc(p.category)}"></label></div>${photoField('pm',p.image)}<div class="actions end"><button id="pmSave" class="primary">${t('save')}</button></div>`);let image=p.image||'';wirePhoto('pm',v=>image=v);$('pmSave').onclick=async()=>{const x={id:p.id||uid('p'),en:$('pmEn').value.trim(),kh:$('pmKh').value.trim(),price:+$('pmPrice').value||0,category:$('pmCat').value.trim()||'Other',active:true,image};if(!x.en&&!x.kh)return toast(t('noData'));if(idx==null)app.data.products.push(x);else app.data.products[idx]=x;await saveData();$('modalRoot').innerHTML='';renderPage()}}
function openStockModal(idx=null){const p=idx==null?{name:'',qty:0,unit:'pcs',min:0,image:'',note:'',en:'',kh:''}:{...app.data.stock[idx]};modal(idx==null?t('add'):t('edit'),`<div class="form-grid"><label>${t('item')}<input id="smName" value="${esc(p.name||'')}"></label><label>${t('quantity')}<input id="smQty" type="number" value="${p.qty||0}"></label><label>${t('unit')}<input id="smUnit" value="${esc(p.unit||'pcs')}"></label><label>${t('minimum')}<input id="smMin" type="number" value="${p.min||0}"></label></div>${photoField('sm',p.image)}<label>${t('note')}<textarea id="smNote">${esc(p.note||'')}</textarea><div class="actions end"><button id="smSave" class="primary">${t('save')}</button></div>`);let image=p.image||'';wirePhoto('sm',v=>image=v);$('smSave').onclick=async()=>{const x={id:p.id||uid('st'),name:$('smName').value.trim(),qty:+$('smQty').value||0,unit:$('smUnit').value.trim(),min:+$('smMin').value||0,image,note:$('smNote').value.trim()};if(!x.name)return toast(t('noData'));if(idx==null)app.data.stock.push(x);else app.data.stock[idx]=x;await saveData();$('modalRoot').innerHTML='';renderPage()}}
function openPromoModal(idx=null){const p=idx==null?{en:'',kh:'',qty:2,price:6000,active:true}:{...app.data.promotions[idx]};modal(idx==null?t('add'):t('edit'),`<div class="form-grid"><label>English<input id="prEn" value="${esc(p.en)}"></label><label>Khmer<input id="prKh" value="${esc(p.kh)}"></label><label>Buy cups<input id="prQty" type="number" value="${p.qty}"></label><label>Promotion price<input id="prPrice" type="number" value="${p.price}"></label></div><div class="actions end"><button id="prSave" class="primary">${t('save')}</button></div>`);$('prSave').onclick=async()=>{const x={id:p.id||uid('pr'),en:$('prEn').value.trim(),kh:$('prKh').value.trim(),qty:+$('prQty').value||1,price:+$('prPrice').value||0,active:true,products:'ALL'};if(idx==null)app.data.promotions.push(x);else app.data.promotions[idx]=x;await saveData();$('modalRoot').innerHTML='';renderPage()}}
function openStaffModal(){
  modal(t('staffAdd'),`<div class="form-grid"><label>${t('staffName')}<input id="sfName"></label><label>${t('staffEmail')}<input id="sfEmail" type="email"></label><label>${t('staffRoleField')}<select id="sfRole"><option value="staff">${t('staffRole')}</option><option value="admin">${t('adminRole')}</option></select></label></div><p class="muted">${t('staffInviteNote')}</p><div class="actions end"><button id="sfSave" class="primary">${t('save')}</button></div>`);
  $('sfSave').onclick=async()=>{
    const email=$('sfEmail').value.trim().toLowerCase(),name=$('sfName').value.trim(),role=$('sfRole').value;
    if(!email)return toast(t('noData'));
    if(!SB)return toast('Supabase unavailable');
    const {data,error}=await SB.rpc('nona_me_add_member_by_email',{p_business:app.business.id,p_email:email,p_role:role});
    if(error)return toast(error.message);
    app.data.users=Array.isArray(app.data.users)?app.data.users:[];
    app.data.users.push({id:data.user_id,email,name:name||email,role});
    await saveData();
    $('modalRoot').innerHTML='';
    renderPage();
  };
}
function buildReportText(){
  const rt=getReportTemplate(),r=reportData(),m=senderInfo(),rows=[];
  const clean=v=>String(v??'—').replace(/\s+/g,' ').trim()||'—';
  const pad=(v,n)=>clean(v).padEnd(n,' ');
  const right=(v,n)=>clean(v).padStart(n,' ');
  const moneyCell=(v,cur)=>v===null||v===undefined?'—':money(v,cur);
  const line='━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━';
  const row=(label,k,u)=>pad(label,28)+right(moneyCell(k),16)+right(moneyCell(u,'USD'),12);
  if(rt.header) rows.push(rt.header);
  rows.push(t('report')+' · '+today(),line);
  if(rt.showDate) rows.push(pad(t('date'),28)+today());
  if(rt.showStaff) rows.push(pad(t('sender'),28)+clean(m.name));
  if(rt.showRate) rows.push(pad(t('rate'),28)+'1 USD = '+Number(app.data.settings.rate||0).toLocaleString()+' KHR');
  if(rt.sections.summary){
    rows.push(pad(t('cups'),28)+right(r.cups,28));
    rows.push(row(t('revenue'),r.totalK,r.totalU));
    rows.push(row(t('expense'),r.expK,r.expU));
  }
  if(rt.sections.payments){
    rows.push(line,t('sectionPayments'));
    [['Cash',app.lang==='kh'?'សាច់ប្រាក់':'Cash'],['ABA','ABA'],['Other',app.lang==='kh'?'ផ្សេងៗ':'Other']].forEach(([k,label])=>rows.push(row(label,r.paymentRows[k].k,r.paymentRows[k].u)));
  }
  if(rt.sections.expenses){
    rows.push(line,t('sectionExpenses'),row(t('expense'),r.expK,r.expU));
  }
  if(rt.sections.cash){
    rows.push(line,app.lang==='kh'?'🧮 គ្រប់គ្រងសាច់ប្រាក់':'🧮 CASH CONTROL');
    [[t('previous'),r.prevK,r.prevU],[t('cashSales'),r.csK,r.csU],[t('cashExpenses'),r.ceK,r.ceU],[t('bankDeposit'),r.depK,r.depU],[t('expected'),r.expectedK,r.expectedU],[t('actual'),r.actualK,r.actualU],[t('difference'),r.actualK===null?null:r.actualK-r.expectedK,r.actualU===null?null:r.actualU-r.expectedU]].forEach(x=>rows.push(row(x[0],x[1],x[2])));
  }
  if(rt.sections.highlights){
    rows.push(line,t('sectionHighlights'));
    rows.push(pad(t('bestSeller'),28)+clean(r.best||'—'));
    if(r.promotionSummary) rows.push(pad(t('promotion'),28)+clean(r.promotionSummary[0]));
  }
  if(rt.sections.products){
    rows.push(line,t('sectionProducts'));
    rows.push(pad('#',4)+pad(app.lang==='kh'?'មុខទំនិញ':'Product',24)+right(app.lang==='kh'?'កែវ':'Qty',8)+right(app.lang==='kh'?'ចំណូល':'Amount',16));
    r.topItems.slice(0,5).forEach((x,i)=>rows.push(pad(i+1,4)+pad(x[app.lang]||x.en||'—',24)+right(x.qty,8)+right(x.amountK?money(x.amountK):money(x.amountU,'USD'),16)));
  }
  if(rt.showSender) rows.push(line,pad(t('sender'),28)+clean(m.name)+' · #'+clean(m.shortId));
  if(rt.footer) rows.push(rt.footer);
  return rows.join('\n');
}
async function readApiResult(res){const raw=await res.text();let out={};try{out=raw?JSON.parse(raw):{}}catch(_){out={error:raw||'No response from server.'}}return {out,raw};}
async function waitForImages(root){const imgs=[...root.querySelectorAll('img')];await Promise.all(imgs.map(img=>{if(img.complete&&img.naturalWidth)return Promise.resolve();return new Promise(resolve=>{img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});})}));}
function makeReportExportNode(){
  const host=$('reportCapture');
  const source=host?.querySelector('[data-a5-sheet]');
  if(!source)throw new Error(t('report'));
  const wrap=document.createElement('div');
  wrap.id='nonaReportExport';
  Object.assign(wrap.style,{position:'fixed',left:'-100000px',top:'0',width:'559px',height:'794px',padding:'0',margin:'0',background:'#fff',overflow:'hidden',zIndex:'-1'});
  const style=document.createElement('style');
  style.textContent=`#nonaReportExport *{box-sizing:border-box}
#nonaReportExport .nr-sheet{width:559px!important;height:auto!important;min-height:794px!important;max-height:none!important;margin:0!important;padding:20px!important;border-radius:0!important;overflow:visible!important;display:flex!important;flex-direction:column!important;gap:8px!important;background:#fff!important;color:#231f1c!important;font-family:Inter,Arial,"Noto Sans Khmer",sans-serif!important;line-height:1.2!important;transform-origin:top center!important}
#nonaReportExport .nr-header{display:grid!important;grid-template-columns:42% 58%!important;gap:14px!important;padding-bottom:10px!important;border-bottom:1px solid #e4dbd2!important}
#nonaReportExport .nr-brand{display:flex!important;flex-direction:column!important;align-items:flex-start!important;justify-content:flex-start!important;min-width:0!important}
#nonaReportExport .nr-brand img{height:auto!important;max-width:100%!important;object-fit:contain!important;object-position:left top!important;display:block!important;aspect-ratio:auto!important;width:auto!important;flex:none!important}
#nonaReportExport .nr-brand-note{margin-top:3px!important;font-size:8px!important;color:#806c5d!important}
#nonaReportExport .nr-overline{font-size:16px!important;font-weight:900!important;color:#7f2b21!important}
#nonaReportExport .nr-heading h2{font-size:19px!important;margin:3px 0 7px!important;font-weight:900!important}
#nonaReportExport .nr-meta{display:grid!important;grid-template-columns:1fr 1fr!important;gap:4px 10px!important;font-size:8px!important;color:#6f665f!important}
#nonaReportExport .nr-meta span{display:flex!important;justify-content:space-between!important;gap:6px!important;min-width:0!important}
#nonaReportExport .nr-meta b{font-size:8px!important;color:#26211e!important;text-align:right!important;min-width:0!important}
#nonaReportExport .nr-summary{display:grid!important;grid-template-columns:1fr 1fr!important;gap:7px!important}
#nonaReportExport .nr-card{padding:8px 10px!important;border:1px solid #e8dfd7!important;border-radius:10px!important;min-height:47px!important}
#nonaReportExport .nr-card span,#nonaReportExport .nr-card strong,#nonaReportExport .nr-card small{display:block!important}
#nonaReportExport .nr-card span{font-size:8px!important;font-weight:800!important;color:#655b54!important}
#nonaReportExport .nr-card strong{font-size:15px!important;margin-top:4px!important;font-weight:900!important}
#nonaReportExport .nr-card small{font-size:8px!important;color:#6d6762!important;margin-top:2px!important}
#nonaReportExport .nr-cups{background:#fcf3e6!important}.nr-revenue{background:#eef6ef!important}.nr-expense{background:#fbefef!important}.nr-net{background:#eef4fb!important}
#nonaReportExport .nr-two-col{display:grid!important;grid-template-columns:1fr 1fr!important;gap:8px!important}
#nonaReportExport .nr-box{border:1px solid #e3dbd3!important;border-radius:10px!important;padding:8px!important;background:#fff!important;overflow:visible!important;min-width:0!important}
#nonaReportExport .nr-section-title{display:flex!important;justify-content:space-between!important;align-items:center!important;margin-bottom:5px!important;gap:8px!important;min-width:0!important}
#nonaReportExport .nr-section-title span{font-size:10px!important;font-weight:900!important}
#nonaReportExport .nr-section-title small{font-size:7px!important;color:#8a817a!important}
#nonaReportExport .nr-table-head,#nonaReportExport .nr-row,#nonaReportExport .nr-total{display:grid!important;grid-template-columns:minmax(0,1fr) 68px 52px!important;gap:5px!important;align-items:center!important;min-width:0!important}
#nonaReportExport .nr-table-head{font-size:7.5px!important;font-weight:900!important;background:#faf6f1!important;padding:4px 5px!important;border-radius:6px!important}
#nonaReportExport .nr-row{font-size:7.5px!important;padding:4px 5px!important;border-bottom:1px solid #eee8e2!important;min-height:18px!important}
#nonaReportExport .nr-row b,#nonaReportExport .nr-row strong,#nonaReportExport .nr-total b{text-align:right!important;white-space:nowrap!important}
#nonaReportExport .nr-row span,#nonaReportExport .nr-table-head span,#nonaReportExport .nr-total span{min-width:0!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}
#nonaReportExport .nr-total{font-size:7.7px!important;font-weight:900!important;padding:5px!important;border-radius:6px!important;background:#f7f0e8!important;margin-top:2px!important}
#nonaReportExport .nr-total b{font-size:8px!important}
#nonaReportExport .nr-empty{font-size:7.5px!important;color:#8a817a!important;padding:6px 4px!important}
#nonaReportExport .nr-highlight-row{display:grid!important;grid-template-columns:44% 56%!important;gap:5px!important;padding:4px 1px!important;border-bottom:1px solid #eee8e2!important;font-size:7.7px!important;min-height:18px!important}
#nonaReportExport .nr-highlight-row span{color:#776e67!important;min-width:0!important}
#nonaReportExport .nr-highlight-row strong{text-align:right!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;min-width:0!important}
#nonaReportExport .nr-cash-box .nr-row{font-size:7.2px!important}
#nonaReportExport .nr-cash-box .nr-row b{font-size:7.2px!important}
#nonaReportExport .nr-emphasis{font-weight:900!important;background:#f3eee8!important;border-radius:5px!important}
#nonaReportExport .nr-diff{background:#fff7ea!important;border-radius:5px!important}
#nonaReportExport .nr-products-box{padding-bottom:6px!important}
#nonaReportExport .nr-product-head,#nonaReportExport .nr-product-row{display:grid!important;grid-template-columns:18px minmax(0,1fr) 42px 62px!important;gap:5px!important;align-items:center!important;min-width:0!important}
#nonaReportExport .nr-product-head{font-size:7px!important;font-weight:900!important;background:#faf6f1!important;padding:4px 5px!important;border-radius:6px!important}
#nonaReportExport .nr-product-row{font-size:7.5px!important;padding:4px 5px!important;border-bottom:1px solid #eee8e2!important;min-height:17px!important}
#nonaReportExport .nr-product-row b,#nonaReportExport .nr-product-row strong{text-align:right!important;white-space:nowrap!important}
#nonaReportExport .nr-rank{font-weight:900!important;color:#8a3b2c!important}
#nonaReportExport .nr-product-name{overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;min-width:0!important}
#nonaReportExport .nr-footer{margin-top:auto!important;padding-top:5px!important;border-top:1px solid #e4dbd2!important;text-align:center!important;color:#776e67!important;font-size:7px!important;line-height:1.3!important}`;
  wrap.appendChild(style);
  const clone=source.cloneNode(true);
  clone.classList.add('nr-export-copy');
  clone.style.height='auto';
  clone.style.minHeight='794px';
  clone.style.maxHeight='none';
  clone.style.overflow='visible';
  wrap.appendChild(clone);
  document.body.appendChild(wrap);
  return wrap;
}

async function renderReportCanvas(){
  await document.fonts?.ready;
  const wrap=makeReportExportNode();
  try{
    await waitForImages(wrap);
    const sheet=wrap.querySelector('.nr-sheet');
    if(!sheet)throw new Error(t('report'));
    // Measure the complete report before rasterizing. If the enabled sections are taller than A5,
    // proportionally scale the complete sheet so nothing is clipped or split.
    const naturalHeight=Math.max(794,Math.ceil(sheet.scrollHeight));
    const fit=Math.min(1,794/naturalHeight);
    sheet.style.transform=fit<1?`scale(${fit})`:'';
    sheet.style.transformOrigin='top center';
    sheet.style.marginLeft=`${(559-(559*fit))/2}px`;
    sheet.style.marginRight='0';
    sheet.style.height=`${naturalHeight}px`;
    sheet.style.minHeight=`${naturalHeight}px`;
    sheet.style.maxHeight='none';
    const rt=getReportTemplate();
    const scale=rt.resolution==='ultra'?4.5:(rt.resolution==='high'?3:2);
    return await html2canvas(wrap,{backgroundColor:'#fff',scale:scale,width:559,height:794,windowWidth:559,windowHeight:794,scrollX:0,scrollY:0,useCORS:true,logging:false,imageTimeout:15000,removeContainer:true});
  }finally{wrap.remove();}
}
async function saveReportImage(){
  try{
    const canvas=await renderReportCanvas();
    canvas.toBlob(async blob=>{if(!blob)return;const file=new File([blob],'daily-report-A5.png',{type:'image/png'});try{if(navigator.share&&navigator.canShare?.({files:[file]})){await navigator.share({files:[file],title:app.lang==='kh'?'របាយការណ៍ប្រចាំថ្ងៃ':'Daily Report'})}else{const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='nona-me-daily-report-A5.png';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}}catch(e){if(e?.name!=='AbortError')throw e}});
  }catch(e){toast(e.message||String(e))}
}
async function sendReportTelegram(){
  try{
    const chatId=(app.data.settings.telegramChatId||'').trim();
    if(!chatId)return toast(t('telegramChatId')+' required');
    const canvas=await renderReportCanvas();
    const rt=getReportTemplate();
    const format='png';
    const dataUrl=canvas.toDataURL('image/png');
    const r=reportData(),meta=senderInfo(),shop=app.data.cms.shopName||app.business.name||'Nona-me Coffee';
    const rawCaption=buildReportText();
    const fallback=`${shop}\n${t('report')} · ${today()}\n${t('sender')}: ${meta.name||'—'}`;
    const caption=(rawCaption||fallback).trim().slice(0,1024) || fallback.slice(0,1024);
    const controller=new AbortController(); const timer=setTimeout(()=>controller.abort(),30000);
    try{
      const res=await fetch('/api/telegram/send',{method:'POST',headers:{'Content-Type':'application/json'},signal:controller.signal,body:JSON.stringify({action:'report',chatId,caption,image:dataUrl,sender:meta.name,senderId:meta.shortId,delivery:rt.telegramDelivery==='photo'?'photo':'document',parseMode:'HTML',report:{cups:r.cups,totalK:r.totalK,totalU:r.totalU}})});
      const {out,raw}=await readApiResult(res);
      if(!res.ok||!out.ok)throw new Error(out.error||raw||'Telegram send failed');
    }finally{clearTimeout(timer)}
    toast((t('sendTelegram')||'Telegram')+' ✓');
  }catch(e){toast(e.name==='AbortError'?'Telegram request timed out. Please try again.':(e.message||String(e)))}
}
async function testTelegram(){
  try{
    const chatId=(app.data.settings.telegramChatId||$('wsTelegramChatId')?.value||'').trim();
    if(!chatId)return toast(t('telegramChatId')+' required');
    const controller=new AbortController(); const timer=setTimeout(()=>controller.abort(),15000);
    try{
      const health=await fetch('/api/telegram/health',{method:'GET',headers:{'Accept':'application/json'},signal:controller.signal});
      const healthResult=await readApiResult(health);
      if(!health.ok||!healthResult.out.ok)throw new Error(healthResult.out.error||healthResult.raw||'Telegram API route is not available.');
      const res=await fetch('/api/telegram/test',{method:'POST',headers:{'Content-Type':'application/json'},signal:controller.signal,body:JSON.stringify({chatId})});
      const {out,raw}=await readApiResult(res);
      if(!res.ok||!out.ok)throw new Error(out.error||raw||'Telegram test failed');
      toast((t('testTelegram')||'Test Telegram')+' ✓');
    }finally{clearTimeout(timer)}
  }catch(e){toast(e.name==='AbortError'?'Telegram request timed out. Please try again.':(e.message||String(e)))}
}
function printReport(){
  const html=buildA5ReportMarkup({r:reportData(),meta:senderInfo(),shop:app.data.cms.shopName||app.business.name||'—',date:today(),kh:app.lang==='kh',labels:(app.lang==='kh'?{title:'របាយការណ៍ប្រចាំថ្ងៃ',date:'កាលបរិច្ឆេទ',staff:'បុគ្គលិក',rate:'អត្រាប្តូរប្រាក់',cups:'ចំនួនកែវ',revenue:'ចំណូល',expenses:'ចំណាយ',net:'សុទ្ធ',payments:'ការទូទាត់',method:'វិធីទូទាត់',expense:'ចំណាយតាមប្រភេទ',cash:'គ្រប់គ្រងសាច់ប្រាក់',description:'បរិយាយ',previous:'សាច់ប្រាក់ដើម',cashSales:'លក់សាច់ប្រាក់',cashExpenses:'ចំណាយសាច់ប្រាក់',bankDeposit:'ដាក់ធនាគារ',expected:'រំពឹងទុក',actual:'រាប់បាន',difference:'ខុសគ្នា',highlights:'សង្ខេបសំខាន់ៗ',bestSeller:'លក់ដាច់ជាងគេ',promotion:'ប្រូម៉ូសិន',thank:'សូមអរគុណ',noData:'មិនទាន់មានទិន្នន័យ'}:{title:'Daily Sales Report',date:'Date',staff:'Staff',rate:'Exchange rate',cups:'Cups',revenue:'Revenue',expenses:'Expenses',net:'Net',payments:'Payment Methods',method:'Method',expense:'Expense Summary',cash:'Cash Control',description:'Description',previous:'Previous cash',cashSales:'Cash sales',cashExpenses:'Cash expenses',bankDeposit:'Bank deposit',expected:'Expected',actual:'Actual',difference:'Difference',highlights:'Highlights',bestSeller:'Best seller',promotion:'Promotion',thank:'Thank you',noData:'No data yet'}),logo:app.data.cms.logo||'./logo.png',paymentRows:['Cash','ABA','Other'].map(key=>({key,label:app.lang==='kh'?({Cash:'សាច់ប្រាក់',ABA:'ABA',Other:'ផ្សេងៗ'}[key]):({Cash:'Cash',ABA:'ABA',Other:'Other'}[key]),k:reportData().paymentRows[key].k,u:reportData().paymentRows[key].u})),expenseRows:app.data.expenseCategories.map(c=>{const r=reportData(),k=app.data.expenses.filter(x=>x.date===today()&&x.method===c.key&&x.currency==='KHR').reduce((a,x)=>a+x.amount,0),u=app.data.expenses.filter(x=>x.date===today()&&x.method===c.key&&x.currency==='USD').reduce((a,x)=>a+x.amount,0);return {label:c[app.lang],k,u};}).filter(x=>x.k||x.u).slice(0,4),cashRows:[[t('previous'),reportData().prevK,reportData().prevU],[t('cashSales'),reportData().csK,reportData().csU],[t('cashExpenses'),reportData().ceK,reportData().ceU],[t('bankDeposit'),reportData().depK,reportData().depU],[t('expected'),reportData().expectedK,reportData().expectedU,true],[t('actual'),reportData().actualK,reportData().actualU],[t('difference'),reportData().actualK===null?null:reportData().actualK-reportData().expectedK,reportData().actualU===null?null:reportData().actualU-reportData().expectedU]],topItems:reportData().topItems.map((x,i)=>`<div class="nr-product-row"><span class="nr-rank">${i+1}</span><span class="nr-product-name">${esc(x[app.lang]||x.en||'—')}</span><b>${x.qty}</b><strong>${x.amountK?money(x.amountK):money(x.amountU,'USD')}</strong></div>`).join('')});
  const w=window.open('','_blank','width=760,height=980');if(!w)return;
  w.document.write(`<html><head><title>${esc(t('report'))}</title><style>@page{size:A5 portrait;margin:0}html,body{margin:0;padding:0;width:148mm;height:210mm;background:#fff}body{font-family:Inter,Arial,"Noto Sans Khmer",sans-serif}.print-wrap{width:148mm;height:210mm;overflow:hidden}.nr-sheet{width:148mm!important;height:210mm!important;min-height:210mm!important;margin:0!important;padding:5mm!important;box-sizing:border-box!important;background:#fff!important;color:#231f1c!important;display:flex!important;flex-direction:column!important;gap:2.1mm!important}.nr-header{display:grid!important;grid-template-columns:42% 58%!important;gap:3.5mm!important;padding-bottom:2.5mm!important;border-bottom:.3mm solid #e4dbd2!important}.nr-brand img{width:40mm!important;height:15mm!important;object-fit:contain!important;object-position:left center!important}.nr-brand-note{font-size:2.2mm!important;color:#806c5d!important}.nr-overline{font-size:4.2mm!important;font-weight:900!important;color:#7f2b21!important}.nr-heading h2{font-size:4.8mm!important;margin:1mm 0 1.8mm!important}.nr-meta{display:grid!important;grid-template-columns:1fr 1fr!important;gap:1mm 2.5mm!important;font-size:2.1mm!important}.nr-meta span{display:flex!important;justify-content:space-between!important;gap:1mm!important}.nr-meta b{font-size:2.1mm!important}.nr-summary{display:grid!important;grid-template-columns:1fr 1fr!important;gap:1.7mm!important}.nr-card{padding:2.1mm 2.5mm!important;border:0.3mm solid #e8dfd7!important;border-radius:2.5mm!important;min-height:13.5mm!important}.nr-card span,.nr-card strong,.nr-card small{display:block!important}.nr-card span{font-size:2.1mm!important;font-weight:800!important}.nr-card strong{font-size:4mm!important;margin-top:1mm!important}.nr-card small{font-size:2mm!important;margin-top:.4mm!important;color:#6d6762!important}.nr-cups{background:#fcf3e6!important}.nr-revenue{background:#eef6ef!important}.nr-expense{background:#fbefef!important}.nr-net{background:#eef4fb!important}.nr-two-col{display:grid!important;grid-template-columns:1fr 1fr!important;gap:2.2mm!important}.nr-box{border:.3mm solid #e3dbd3!important;border-radius:2.5mm!important;padding:2mm!important;overflow:hidden!important}.nr-section-title{display:flex!important;justify-content:space-between!important;align-items:center!important;margin-bottom:1.2mm!important}.nr-section-title span{font-size:2.7mm!important;font-weight:900!important}.nr-section-title small{font-size:1.8mm!important;color:#8a817a!important}.nr-table-head,.nr-row,.nr-total{display:grid!important;grid-template-columns:minmax(0,1fr) 18mm 14mm!important;gap:1.2mm!important;align-items:center!important}.nr-table-head{font-size:1.9mm!important;font-weight:900!important;background:#faf6f1!important;padding:1mm 1.2mm!important;border-radius:1.5mm!important}.nr-row{font-size:1.9mm!important;padding:1mm 1.2mm!important;border-bottom:.25mm solid #eee8e2!important;min-height:4.7mm!important}.nr-row b,.nr-row strong,.nr-total b{text-align:right!important;white-space:nowrap!important}.nr-total{font-size:1.95mm!important;font-weight:900!important;padding:1.1mm 1.2mm!important;border-radius:1.5mm!important;background:#f7f0e8!important;margin-top:.5mm!important}.nr-total b{font-size:2mm!important}.nr-highlight-row{display:grid!important;grid-template-columns:44% 56%!important;gap:1mm!important;padding:1mm .3mm!important;border-bottom:.25mm solid #eee8e2!important;font-size:1.95mm!important;min-height:4.7mm!important}.nr-highlight-row span{color:#776e67!important}.nr-highlight-row strong{text-align:right!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}.nr-cash-box .nr-row{font-size:1.8mm!important}.nr-emphasis{font-weight:900!important;background:#f3eee8!important;border-radius:1.2mm!important}.nr-diff{background:#fff7ea!important;border-radius:1.2mm!important}.nr-product-head,.nr-product-row{display:grid!important;grid-template-columns:4.5mm minmax(0,1fr) 11mm 17mm!important;gap:1.2mm!important;align-items:center!important}.nr-product-head{font-size:1.8mm!important;font-weight:900!important;background:#faf6f1!important;padding:1mm 1.2mm!important;border-radius:1.5mm!important}.nr-product-row{font-size:1.9mm!important;padding:1mm 1.2mm!important;border-bottom:.25mm solid #eee8e2!important;min-height:4.6mm!important}.nr-product-row b,.nr-product-row strong{text-align:right!important;white-space:nowrap!important}.nr-product-name{overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}.nr-rank{font-weight:900!important;color:#8a3b2c!important}.nr-footer{margin-top:auto!important;padding-top:1.5mm!important;border-top:.3mm solid #e4dbd2!important;text-align:center!important;color:#776e67!important;font-size:1.9mm!important;line-height:1.3!important}</style></head><body><div class="print-wrap">${html}</div><script>window.addEventListener('load',()=>setTimeout(()=>{window.focus();window.print()},250))</script></body></html>`);w.document.close();
}
function printReceipt(s){const w=window.open('','_blank','width=480,height=720');if(!w)return;w.document.write(`<html><head><title>Receipt</title><style>body{font-family:Arial;margin:16px}.r{text-align:center}.line{display:flex;justify-content:space-between;border-bottom:1px dotted #aaa;padding:5px 0}img{max-width:140px}</style></head><body><div class="r"><img src="${esc(app.data.cms.logo||'./logo.png')}"><h2>${esc(app.data.cms.shopName)}</h2><div>${today()} ${esc(s.time)}</div></div>${s.items.map(i=>`<div class="line"><span>${esc(app.lang==='kh'?i.kh:i.en)} × ${i.qty}</span><b>${money(i.price*i.qty,s.currency)}</b></div>`).join('')}<div class="line"><strong>${t('total')}</strong><strong>${money(s.amount,s.currency)}</strong></div><p class="r">${esc(app.data.cms.footer||t('thankYou'))}</p></body></html>`);w.document.close();w.focus();setTimeout(()=>w.print(),300)}
document.addEventListener('click',async e=>{
  const el=e.target.closest('button,[data-page],[data-add],[data-q],[data-edit-product],[data-delete-product],[data-edit-stock],[data-delete-stock],[data-edit-promo],[data-delete-promo]');
  if(!el) return;
  try{
    if(el.dataset.page){e.preventDefault();app.page=el.dataset.page;renderPage();document.querySelectorAll('.nav-btn').forEach(x=>x.classList.toggle('active',x.dataset.page===app.page));return}
    if(el.dataset.add){e.preventDefault();const p=app.data.products.find(x=>x.id===el.dataset.add);if(!p)return;const ex=app.cart.find(x=>x.id===p.id);if(ex)ex.qty++;else app.cart.push({id:p.id,price:p.price,qty:1,en:p.en,kh:p.kh});renderPage();return}
    if(el.dataset.q){e.preventDefault();const x=app.cart.find(x=>x.id===el.dataset.id);if(x){x.qty+=Number(el.dataset.q);if(x.qty<=0)app.cart=app.cart.filter(y=>y!==x)}renderPage();return}
    if(el.dataset.editProduct!==undefined){e.preventDefault();openProductModal(Number(el.dataset.editProduct));return}
    if(el.dataset.deleteProduct!==undefined){e.preventDefault();app.data.products.splice(Number(el.dataset.deleteProduct),1);await saveData();renderPage();return}
    if(el.dataset.deleteUser!==undefined){e.preventDefault();app.data.users.splice(Number(el.dataset.deleteUser),1);await saveData();renderPage();return}
    if(el.dataset.editStock!==undefined){e.preventDefault();openStockModal(Number(el.dataset.editStock));return}
    if(el.dataset.deleteStock!==undefined){e.preventDefault();app.data.stock.splice(Number(el.dataset.deleteStock),1);await saveData();renderPage();return}
    if(el.dataset.editPromo!==undefined){e.preventDefault();openPromoModal(Number(el.dataset.editPromo));return}
    if(el.dataset.deletePromo!==undefined){e.preventDefault();app.data.promotions.splice(Number(el.dataset.deletePromo),1);await saveData();renderPage();return}
    const id=el.id;
    if(id==='logoutTop'||id==='logoutBtn'){e.preventDefault();await logout();return}
    if(id==='bizSwitch'){e.preventDefault();app.business=null;app.membership=null;app.data=null;render();return}
    if(id==='saveSale'){e.preventDefault();await saveSale(false);return}
    if(id==='saveSalePrint'){e.preventDefault();await saveSale(true);return}
    if(id==='saveExpense'){e.preventDefault();await saveExpense();return}
    if(id==='saveDeposit'){e.preventDefault();await saveDeposit();return}
    if(id==='saveCash'){e.preventDefault();await saveCash();return}
    if(id==='copyReport'){e.preventDefault();await copyReport();return}
    if(id==='saveReportImage'){e.preventDefault();await saveReportImage();return}
    if(id==='testTelegram'){e.preventDefault();await testTelegram();return}
    if(id==='sendTelegram'){e.preventDefault();await sendReportTelegram();return}
    if(id==='langTop'){e.preventDefault();app.lang=app.lang==='kh'?'en':'kh';localStorage.setItem(DBKEY+'.lang',app.lang);render();return}
    if(id==='addStaff'){e.preventDefault();openStaffModal();return}
    if(id==='printReport'){e.preventDefault();printReport();return}
    if(id==='addProduct'){e.preventDefault();openProductModal();return}
    if(id==='addStock'){e.preventDefault();openStockModal();return}
    if(id==='addPromo'){e.preventDefault();openPromoModal();return}
    if(id==='saveWebsite'){e.preventDefault();app.data.cms.shopName=$('wsName').value.trim();app.data.cms.tagline=$('wsTagline').value.trim();app.data.settings.phone=$('wsPhone').value.trim();app.data.settings.address=$('wsAddress').value.trim();app.data.settings.rate=+$('wsRate').value||4000;app.data.settings.telegramChatId=$('wsTelegramChatId')?.value.trim()||app.data.settings.telegramChatId||'';app.data.cms.primary=$('wsPrimary').value;app.data.cms.accent=$('wsAccent').value;await saveData();document.documentElement.style.setProperty('--primary',app.data.cms.primary);toast(t('save'));render();return}
    if(id==='closeModal'){e.preventDefault();$('modalRoot').innerHTML='';return}
  }catch(err){console.error(err);toast(err?.message||String(err))}
});

// Global navigation fallback: guarantees every page button works even after re-render.
document.addEventListener('click',e=>{
  const btn=e.target.closest?.('[data-page]');
  if(!btn) return;
  if(btn.closest('#page') || btn.closest('.sidebar') || btn.closest('.quick')){
    e.preventDefault();
    const key=btn.dataset.page;
    if(key && app.page!==key){app.page=key;renderPage();document.querySelectorAll('[data-page]').forEach(x=>x.classList.toggle('active',x.dataset.page===key));window.scrollTo(0,0);}
  }
},true);
window.addEventListener('online',async()=>{if(app.business&&app.data){await saveData();render()}});
window.addEventListener('resize',()=>document.body.classList.toggle('mobile',innerWidth<800));

// Master 4.2 interaction layer: touch feedback + ripple on actionable controls.
document.addEventListener('pointerdown',e=>{
  const btn=e.target.closest?.('button');
  if(!btn||btn.disabled)return;
  btn.classList.add('is-pressed');
  const rect=btn.getBoundingClientRect();
  const size=Math.max(rect.width,rect.height)*1.35;
  const ripple=document.createElement('span');
  ripple.className='ripple';
  ripple.style.width=ripple.style.height=size+'px';
  ripple.style.left=(e.clientX-rect.left-size/2)+'px';
  ripple.style.top=(e.clientY-rect.top-size/2)+'px';
  btn.appendChild(ripple);
  setTimeout(()=>ripple.remove(),600);
},{passive:true});
document.addEventListener('pointerup',e=>{const btn=e.target.closest?.('button');if(btn)btn.classList.remove('is-pressed')},{passive:true});
document.addEventListener('pointercancel',e=>{const btn=e.target.closest?.('button');if(btn)btn.classList.remove('is-pressed')},{passive:true});

// Give async action buttons a subtle busy state without changing their handlers.
const busyStyle=document.createElement('style');busyStyle.textContent='@keyframes spin{to{transform:rotate(360deg)}}';document.head.appendChild(busyStyle);
const busyIds=new Set(['saveSale','saveSalePrint','saveExpense','saveDeposit','saveCash','saveReportImage','sendTelegram','testTelegram','saveWebsite','saveReportTemplate','saveProduct','saveStock','savePromo']);
document.addEventListener('click',e=>{
  const btn=e.target.closest?.('button');
  if(!btn||!btn.id||!busyIds.has(btn.id))return;
  btn.classList.add('is-busy');
  btn.dataset.originalHtml=btn.innerHTML;
  btn.innerHTML=`<span style="display:inline-flex;align-items:center;gap:7px"><span aria-hidden="true" style="width:12px;height:12px;border:2px solid currentColor;border-right-color:transparent;border-radius:50%;display:inline-block;animation:spin .7s linear infinite"></span>${esc(btn.textContent.trim())}</span>`;
  setTimeout(()=>{if(document.body.contains(btn)){btn.classList.remove('is-busy');if(btn.dataset.originalHtml!==undefined)btn.innerHTML=btn.dataset.originalHtml}},1800);
});

init();

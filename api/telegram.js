const TELEGRAM_API = 'https://api.telegram.org/bot';

function cleanText(value) {
  return String(value ?? '').replace(/\r\n/g, '\n').trim();
}

function json(res, status, body) {
  return res.status(status)
    .setHeader('content-type', 'application/json; charset=utf-8')
    .setHeader('cache-control', 'no-store')
    .json(body);
}

function token() {
  return cleanText(process.env.TELEGRAM_BOT_TOKEN);
}

function telegramError(data, fallback) {
  const description = data?.description || fallback || 'Telegram API failed.';
  const code = data?.error_code ? ` [${data.error_code}]` : '';
  return `${description}${code}`;
}

async function telegramCall(botToken, method, body, multipart = false) {
  const response = await fetch(`${TELEGRAM_API}${botToken}/${method}`, multipart
    ? { method: 'POST', headers: body.headers, body: body.body }
    : {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: new URLSearchParams(body || {})
      });

  const raw = await response.text();
  let data = null;
  try { data = raw ? JSON.parse(raw) : null; } catch (_) {}
  return { response, raw, data };
}

function buildMultipart(fields, fileBuffer, fileType = 'image/png', uploadName = 'daily-report-A5.png', fieldName = 'document') {
  const boundary = `----NonaMeTelegram${Math.random().toString(16).slice(2)}`;
  const chunks = [];
  const push = (value) => chunks.push(Buffer.isBuffer(value) ? value : Buffer.from(value));
  const line = `--${boundary}\r\n`;
  for (const [name, value] of Object.entries(fields)) {
    if (value === undefined || value === null || value === '') continue;
    push(line);
    push(`Content-Disposition: form-data; name="${name}"\r\n\r\n`);
    push(`${String(value)}\r\n`);
  }
  push(line);
  push(`Content-Disposition: form-data; name="${fieldName}"; filename="${uploadName}"\r\n`);
  push(`Content-Type: ${fileType}\r\n\r\n`);
  push(fileBuffer);
  push('\r\n');
  push(`--${boundary}--\r\n`);
  const body = Buffer.concat(chunks);
  return {
    headers: {
      'content-type': `multipart/form-data; boundary=${boundary}`,
      'content-length': String(body.length)
    },
    body
  };
}

async function checkBot(botToken) {
  const me = await telegramCall(botToken, 'getMe', {});
  if (!me.response.ok || !me.data?.ok) {
    return { ok: false, response: me.response, error: telegramError(me.data, me.raw || 'Telegram bot token is invalid or unavailable.') };
  }
  return { ok: true, bot: me.data.result || {} };
}

export default async function handler(req, res) {
  const route = cleanText(req.query?.route).toLowerCase();

  if (route === 'health' || (!route && req.method === 'GET')) {
    if (req.method !== 'GET') return json(res, 405, { ok:false, code:'METHOD_NOT_ALLOWED', error:'Use GET.' });
    const botToken = token();
    if (!botToken) return json(res, 500, { ok:false, code:'MISSING_BOT_TOKEN', error:'TELEGRAM_BOT_TOKEN is not configured in Vercel Production.' });
    try {
      const checked = await checkBot(botToken);
      if (!checked.ok) return json(res, 502, { ok:false, code:'BOT_TOKEN_INVALID', error:checked.error });
      return json(res, 200, { ok:true, service:'nona-me-telegram', apiRoute:'/api/telegram/health', bot:checked.bot.username||null, botId:checked.bot.id||null, message:'Telegram API route is working.' });
    } catch (error) {
      return json(res, 500, { ok:false, code:'HEALTH_CHECK_FAILED', error:error?.message||String(error) });
    }
  }

  if (route === 'test') {
    if (req.method !== 'POST') return json(res, 405, { ok:false, code:'METHOD_NOT_ALLOWED', error:'Use POST.' });
    const botToken = token();
    if (!botToken) return json(res, 500, { ok:false, code:'MISSING_BOT_TOKEN', error:'TELEGRAM_BOT_TOKEN is not configured in Vercel Production.' });
    try {
      const body = typeof req.body === 'string' ? (()=>{ try{return JSON.parse(req.body)}catch(_){return null} })() : (req.body||{});
      if (!body) return json(res,400,{ok:false,code:'INVALID_JSON',error:'Invalid JSON request body.'});
      const chatId=cleanText(body.chatId);
      if(!chatId)return json(res,400,{ok:false,code:'MISSING_CHAT_ID',error:'Telegram Chat ID is required.'});
      const checked=await checkBot(botToken);
      if(!checked.ok)return json(res,502,{ok:false,code:'BOT_TOKEN_INVALID',error:checked.error});
      const tx=await telegramCall(botToken,'sendMessage',{chat_id:chatId,text:'Nona-me Telegram connection test\nBot: @'+(checked.bot.username||'bot')});
      if(!tx.response.ok||!tx.data?.ok)return json(res,502,{ok:false,code:'SEND_MESSAGE_FAILED',error:telegramError(tx.data,tx.raw||'Telegram could not send the test message.'),bot:checked.bot.username||null});
      return json(res,200,{ok:true,mode:'test',bot:checked.bot.username||null,message_id:tx.data.result?.message_id||null});
    } catch(error){ return json(res,500,{ok:false,code:'SERVER_ERROR',error:error?.message||String(error)}); }
  }

  if (route === 'send' || route === 'report') {
    if(req.method!=='POST')return json(res,405,{ok:false,code:'METHOD_NOT_ALLOWED',error:'Use POST.'});
    const botToken=token();
    if(!botToken)return json(res,500,{ok:false,code:'MISSING_BOT_TOKEN',error:'TELEGRAM_BOT_TOKEN is not configured in Vercel Production.'});
    try{
      const body=typeof req.body==='string'?(()=>{try{return JSON.parse(req.body)}catch(_){return null}})():(req.body||{});
      if(!body)return json(res,400,{ok:false,code:'INVALID_JSON',error:'Invalid JSON request body.'});
      const chatId=cleanText(body.chatId);
      if(!chatId)return json(res,400,{ok:false,code:'MISSING_CHAT_ID',error:'Telegram Chat ID is required.'});
      if(!body.image)return json(res,400,{ok:false,code:'MISSING_IMAGE',error:'Daily report image is required.'});
      const checked=await checkBot(botToken);
      if(!checked.ok)return json(res,502,{ok:false,code:'BOT_TOKEN_INVALID',error:checked.error});

      const match=/^data:image\/(jpeg|jpg|png);base64,(.+)$/i.exec(String(body.image));
      if(!match)return json(res,400,{ok:false,code:'INVALID_IMAGE',error:'Invalid report image data.'});
      const imageBuffer=Buffer.from(match[2],'base64');
      if(!imageBuffer.length)return json(res,400,{ok:false,code:'EMPTY_IMAGE',error:'The report image is empty.'});
      if(imageBuffer.length>9_500_000)return json(res,413,{ok:false,code:'IMAGE_TOO_LARGE',error:'The report image is too large. Please lower the report resolution or quality.'});

      const caption=cleanText(body.caption||body.text)||`Nona-me Coffee — Daily Sales Report\nDate: ${new Date().toISOString().slice(0,10)}`;
      const delivery=body.delivery==='photo'?'photo':'document';
      const fileType=/^data:image\/png/i.test(String(body.image))?'image/png':'image/jpeg';
      const uploadName=fileType==='image/png'?'nona-me-daily-report-A5.png':'nona-me-daily-report-A5.jpg';
      const fieldName=delivery==='photo'?'photo':'document';
      const method=delivery==='photo'?'sendPhoto':'sendDocument';
      const multipart=buildMultipart({chat_id:chatId,caption:caption.slice(0,1024)},imageBuffer,fileType,uploadName,fieldName);
      const result=await telegramCall(botToken,method,multipart,true);
      if(!result.response.ok||!result.data?.ok)return json(res,502,{ok:false,code:delivery==='photo'?'SEND_PHOTO_FAILED':'SEND_DOCUMENT_FAILED',error:telegramError(result.data,result.raw||'Telegram could not send the report.'),bot:checked.bot.username||null});

      return json(res,200,{ok:true,delivery,bot:checked.bot.username||null,message_id:result.data.result?.message_id||null});
    }catch(error){return json(res,500,{ok:false,code:'SERVER_ERROR',error:error?.message||String(error)||'Unexpected Telegram server error.'});}
  }

  return json(res,404,{ok:false,code:'UNKNOWN_ROUTE',error:'Unknown Telegram API route. Use /api/telegram/health, /api/telegram/test, or /api/telegram/send.'});
}

export const config = { api: { bodyParser: { sizeLimit: '10mb' } } };

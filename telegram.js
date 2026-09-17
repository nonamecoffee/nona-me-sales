function cleanText(s) {
  return String(s ?? '').replace(/\r\n/g, '\n').trim();
}

async function tgCall(token, method, body) {
  const isMultipart = body && typeof body === 'object' && body.body && body.headers;
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, isMultipart
    ? { method: 'POST', headers: body.headers, body: body.body }
    : { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' }, body: new URLSearchParams(body || {}) }
  );
  const raw = await response.text();
  let data = null;
  try { data = JSON.parse(raw); } catch (_) {}
  return { response, data, raw };
}

function json(res, status, body) {
  return res.status(status)
    .setHeader('content-type', 'application/json; charset=utf-8')
    .setHeader('cache-control', 'no-store')
    .json(body);
}

function friendlyTelegramError(data, fallback) {
  const d = data?.description || fallback || 'Telegram API failed.';
  const code = data?.error_code ? ` [${data.error_code}]` : '';
  return `${d}${code}`;
}

function buildMultipart(fields, file) {
  const boundary = `----NonaMeTelegram${Math.random().toString(16).slice(2)}`;
  const chunks = [];
  const push = (v) => chunks.push(Buffer.isBuffer(v) ? v : Buffer.from(v));
  const line = '--' + boundary + '\r\n';
  for (const [name, value] of Object.entries(fields)) {
    if (value === undefined || value === null) continue;
    push(line);
    push(`Content-Disposition: form-data; name="${name}"\r\n\r\n`);
    push(String(value) + '\r\n');
  }
  push(line);
  push('Content-Disposition: form-data; name="photo"; filename="daily-report-A5.jpg"\r\n');
  push('Content-Type: image/jpeg\r\n\r\n');
  push(file);
  push('\r\n');
  push('--' + boundary + '--\r\n');
  return {
    headers: {
      'content-type': `multipart/form-data; boundary=${boundary}`,
      'content-length': String(chunks.reduce((n, x) => n + x.length, 0))
    },
    body: Buffer.concat(chunks)
  };
}

function getToken() {
  return cleanText(process.env.TELEGRAM_BOT_TOKEN);
}

module.exports = { cleanText, tgCall, json, friendlyTelegramError, buildMultipart, getToken };

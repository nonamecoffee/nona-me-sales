export const config = {
  api: { bodyParser: { sizeLimit: '5mb' } }
};

function json(res, status, body) {
  return res.status(status).setHeader('content-type', 'application/json').json(body);
}

function cleanText(s) {
  return String(s || '').replace(/\r\n/g, '\n').trim();
}

function chunkText(text, max = 3900) {
  const out = [];
  let remaining = cleanText(text);
  while (remaining.length > max) {
    let cut = remaining.lastIndexOf('\n', max);
    if (cut < 500) cut = max;
    out.push(remaining.slice(0, cut));
    remaining = remaining.slice(cut).replace(/^\n+/, '');
  }
  if (remaining) out.push(remaining);
  return out.length ? out : [''];
}

async function tgCall(token, method, body, isForm = false) {
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: 'POST',
    ...(isForm
      ? { body }
      : { headers: { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' }, body: new URLSearchParams(body) })
  });
  const raw = await response.text();
  let data = null;
  try { data = JSON.parse(raw); } catch (_) {}
  return { response, data, raw };
}

function friendlyTelegramError(data, fallback) {
  const d = data?.description || fallback || 'Telegram API failed.';
  const code = data?.error_code ? ` [${data.error_code}]` : '';
  return `${d}${code}`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'Method not allowed' });

  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    if (!token) return json(res, 500, {
      ok: false,
      code: 'MISSING_BOT_TOKEN',
      error: 'TELEGRAM_BOT_TOKEN is not configured in Vercel.'
    });

    let body = req.body || {};
    if (typeof body === 'string') {
      try { body = JSON.parse(body); }
      catch (_) { return json(res, 400, { ok: false, error: 'Invalid JSON request body.' }); }
    }

    const { action = 'report', chatId, caption = '', text = '', image } = body;
    const target = cleanText(chatId);
    if (!target) return json(res, 400, { ok: false, code: 'MISSING_CHAT_ID', error: 'Telegram Chat ID is required.' });

    const me = await tgCall(token, 'getMe', {}, false);
    if (!me.response.ok || !me.data?.ok) {
      return json(res, 502, {
        ok: false,
        code: 'BOT_TOKEN_INVALID',
        error: friendlyTelegramError(me.data, 'Telegram bot token is invalid or unavailable.')
      });
    }

    if (action === 'test') {
      const testText = `✅ Nona-me Telegram connection test\nBot: @${me.data.result?.username || 'bot'}`;
      const tx = await tgCall(token, 'sendMessage', { chat_id: target, text: testText }, false);
      if (!tx.response.ok || !tx.data?.ok) {
        return json(res, 502, {
          ok: false,
          code: 'SEND_MESSAGE_FAILED',
          error: friendlyTelegramError(tx.data, 'Telegram could not send the test message.'),
          bot: me.data.result?.username || null
        });
      }
      return json(res, 200, { ok: true, mode: 'test', bot: me.data.result?.username || null, message_id: tx.data.result?.message_id || null });
    }

    if (!image) return json(res, 400, { ok: false, code: 'MISSING_IMAGE', error: 'Daily report image is required.' });

    const match = /^data:image\/(png|jpeg|jpg);base64,(.+)$/i.exec(String(image));
    if (!match) return json(res, 400, { ok: false, code: 'INVALID_IMAGE', error: 'Invalid report image data.' });

    const ext = match[1].toLowerCase() === 'jpg' ? 'jpeg' : match[1].toLowerCase();
    const mime = `image/${ext}`;
    const bytes = Buffer.from(match[2], 'base64');
    if (!bytes.length) return json(res, 400, { ok: false, code: 'EMPTY_IMAGE', error: 'The report image is empty.' });
    if (bytes.length > 9_500_000) return json(res, 413, { ok: false, code: 'IMAGE_TOO_LARGE', error: 'Report image is too large for Telegram. Please use the updated app.' });

    // Send the image first with a short plain-text caption. No parse_mode is used,
    // so Khmer punctuation and invoice text cannot break Telegram entity parsing.
    const photoForm = new FormData();
    photoForm.append('chat_id', target);
    photoForm.append('photo', new Blob([bytes], { type: mime }), `daily-report-A5.${ext === 'jpeg' ? 'jpg' : 'png'}`);
    const shortCaption = cleanText(caption).slice(0, 900);
    if (shortCaption) photoForm.append('caption', shortCaption);
    photoForm.append('disable_notification', 'false');

    const photo = await tgCall(token, 'sendPhoto', photoForm, true);
    if (!photo.response.ok || !photo.data?.ok) {
      return json(res, 502, {
        ok: false,
        code: 'SEND_PHOTO_FAILED',
        error: friendlyTelegramError(photo.data, 'Telegram could not send the report image.'),
        bot: me.data.result?.username || null
      });
    }

    // Send the full report as one or more plain-text messages, because Telegram
    // limits sendMessage text to 4096 characters and photo captions to 1024.
    const fullText = cleanText(text);
    const parts = chunkText(fullText, 3900);
    const messageIds = [];
    for (const part of parts) {
      const tx = await tgCall(token, 'sendMessage', { chat_id: target, text: part }, false);
      if (!tx.response.ok || !tx.data?.ok) {
        return json(res, 502, {
          ok: false,
          code: 'SEND_TEXT_FAILED',
          error: friendlyTelegramError(tx.data, 'Image was sent, but the full report text could not be sent.'),
          image_sent: true,
          bot: me.data.result?.username || null
        });
      }
      messageIds.push(tx.data.result?.message_id || null);
    }

    return json(res, 200, {
      ok: true,
      bot: me.data.result?.username || null,
      photo_message_id: photo.data.result?.message_id || null,
      text_message_ids: messageIds
    });
  } catch (error) {
    return json(res, 500, {
      ok: false,
      code: 'SERVER_ERROR',
      error: error?.message || 'Unexpected Telegram server error.'
    });
  }
}

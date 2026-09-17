const { tgCall, json, friendlyTelegramError, buildMultipart, getToken, cleanText } = require('../../lib/telegram');

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

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return json(res, 405, { ok: false, code: 'METHOD_NOT_ALLOWED', error: 'Method not allowed.' });
  try {
    const token = getToken();
    if (!token) return json(res, 500, { ok: false, code: 'MISSING_BOT_TOKEN', error: 'TELEGRAM_BOT_TOKEN is not configured in Vercel Production.' });

    let body = req.body || {};
    if (typeof body === 'string') {
      try { body = JSON.parse(body); }
      catch (_) { return json(res, 400, { ok: false, code: 'INVALID_JSON', error: 'Invalid JSON request body.' }); }
    }

    const { action = 'report', chatId, caption = '', text = '', image } = body;
    const target = cleanText(chatId);
    if (!target) return json(res, 400, { ok: false, code: 'MISSING_CHAT_ID', error: 'Telegram Chat ID is required.' });

    const me = await tgCall(token, 'getMe', {});
    if (!me.response.ok || !me.data?.ok) {
      return json(res, 502, { ok: false, code: 'BOT_TOKEN_INVALID', error: friendlyTelegramError(me.data, 'Telegram bot token is invalid or unavailable.') });
    }

    if (action === 'test') {
      const tx = await tgCall(token, 'sendMessage', { chat_id: target, text: `Nona-me Telegram connection test\nBot: @${me.data.result?.username || 'bot'}` });
      if (!tx.response.ok || !tx.data?.ok) return json(res, 502, { ok: false, code: 'SEND_MESSAGE_FAILED', error: friendlyTelegramError(tx.data, tx.raw || 'Telegram could not send the test message.'), bot: me.data.result?.username || null });
      return json(res, 200, { ok: true, mode: 'test', bot: me.data.result?.username || null, message_id: tx.data.result?.message_id || null });
    }

    if (!image) return json(res, 400, { ok: false, code: 'MISSING_IMAGE', error: 'Daily report image is required.' });
    const match = /^data:image\/(jpeg|jpg|png);base64,(.+)$/i.exec(String(image));
    if (!match) return json(res, 400, { ok: false, code: 'INVALID_IMAGE', error: 'Invalid report image data.' });
    const rawBytes = Buffer.from(match[2], 'base64');
    if (!rawBytes.length) return json(res, 400, { ok: false, code: 'EMPTY_IMAGE', error: 'The report image is empty.' });
    if (rawBytes.length > 9_500_000) return json(res, 413, { ok: false, code: 'IMAGE_TOO_LARGE', error: 'The report image is too large. Please use the A5 image export and try again.' });

    const multipart = buildMultipart({ chat_id: target, caption: cleanText(caption).slice(0, 900), disable_notification: 'false' }, rawBytes);
    const photo = await tgCall(token, 'sendPhoto', multipart);
    if (!photo.response.ok || !photo.data?.ok) return json(res, 502, { ok: false, code: 'SEND_PHOTO_FAILED', error: friendlyTelegramError(photo.data, photo.raw || 'Telegram could not send the report image.'), bot: me.data.result?.username || null });

    const parts = chunkText(text, 3900);
    const messageIds = [];
    for (const part of parts) {
      const tx = await tgCall(token, 'sendMessage', { chat_id: target, text: part });
      if (!tx.response.ok || !tx.data?.ok) return json(res, 502, { ok: false, code: 'SEND_TEXT_FAILED', error: friendlyTelegramError(tx.data, tx.raw || 'Image was sent, but the report text could not be sent.'), image_sent: true, bot: me.data.result?.username || null });
      messageIds.push(tx.data.result?.message_id || null);
    }
    return json(res, 200, { ok: true, bot: me.data.result?.username || null, photo_message_id: photo.data.result?.message_id || null, text_message_ids: messageIds });
  } catch (error) {
    return json(res, 500, { ok: false, code: 'SERVER_ERROR', error: error?.message || String(error) || 'Unexpected Telegram server error.' });
  }
};

module.exports.config = { api: { bodyParser: { sizeLimit: '10mb' } } };

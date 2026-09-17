const { tgCall, json, friendlyTelegramError, getToken, cleanText } = require('../../lib/telegram');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return json(res, 405, { ok: false, code: 'METHOD_NOT_ALLOWED', error: 'Use POST.' });
  const token = getToken();
  if (!token) return json(res, 500, { ok: false, code: 'MISSING_BOT_TOKEN', error: 'TELEGRAM_BOT_TOKEN is not configured in Vercel Production.' });
  try {
    let body = req.body || {};
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (_) { return json(res, 400, { ok: false, code: 'INVALID_JSON', error: 'Invalid JSON request body.' }); }
    }
    const chatId = cleanText(body.chatId);
    if (!chatId) return json(res, 400, { ok: false, code: 'MISSING_CHAT_ID', error: 'Telegram Chat ID is required.' });

    const me = await tgCall(token, 'getMe', {});
    if (!me.response.ok || !me.data?.ok) return json(res, 502, { ok: false, code: 'BOT_TOKEN_INVALID', error: friendlyTelegramError(me.data, 'Telegram bot token is invalid or unavailable.') });

    const tx = await tgCall(token, 'sendMessage', {
      chat_id: chatId,
      text: `Nona-me Telegram connection test\nBot: @${me.data.result?.username || 'bot'}`
    });
    if (!tx.response.ok || !tx.data?.ok) {
      return json(res, 502, { ok: false, code: 'SEND_MESSAGE_FAILED', error: friendlyTelegramError(tx.data, tx.raw || 'Telegram could not send the test message.'), bot: me.data.result?.username || null });
    }
    return json(res, 200, { ok: true, mode: 'test', bot: me.data.result?.username || null, message_id: tx.data.result?.message_id || null });
  } catch (error) {
    return json(res, 500, { ok: false, code: 'SERVER_ERROR', error: error?.message || String(error) });
  }
};

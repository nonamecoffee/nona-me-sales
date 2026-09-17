const { tgCall, json, friendlyTelegramError, getToken } = require('../../lib/telegram');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return json(res, 405, { ok: false, code: 'METHOD_NOT_ALLOWED', error: 'Use GET.' });
  const token = getToken();
  if (!token) return json(res, 500, { ok: false, code: 'MISSING_BOT_TOKEN', error: 'TELEGRAM_BOT_TOKEN is not configured in Vercel Production.' });
  try {
    const me = await tgCall(token, 'getMe', {});
    if (!me.response.ok || !me.data?.ok) {
      return json(res, 502, { ok: false, code: 'BOT_TOKEN_INVALID', error: friendlyTelegramError(me.data, 'Telegram bot token is invalid or unavailable.') });
    }
    return json(res, 200, {
      ok: true,
      service: 'nona-me-telegram',
      apiRoute: '/api/telegram/health',
      bot: me.data.result?.username || null,
      botId: me.data.result?.id || null,
      message: 'Telegram API route is working.'
    });
  } catch (error) {
    return json(res, 500, { ok: false, code: 'HEALTH_CHECK_FAILED', error: error?.message || String(error) });
  }
};

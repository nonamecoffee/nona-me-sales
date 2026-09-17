export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    if (!token) return res.status(500).json({ ok: false, error: 'TELEGRAM_BOT_TOKEN is not configured in Vercel.' });
    const { chatId, caption, image } = req.body || {};
    if (!chatId || !image) return res.status(400).json({ ok: false, error: 'chatId and image are required.' });
    const match = /^data:image\/(png|jpeg|jpg);base64,(.+)$/i.exec(image);
    if (!match) return res.status(400).json({ ok: false, error: 'Invalid image data.' });
    const ext = match[1].toLowerCase() === 'jpg' ? 'jpeg' : match[1].toLowerCase();
    const bytes = Buffer.from(match[2], 'base64');
    const form = new FormData();
    form.append('chat_id', String(chatId));
    form.append('photo', new Blob([bytes], { type: `image/${ext}` }), 'daily-report-A5.png');
    form.append('caption', String(caption || '').slice(0, 1024));
    form.append('parse_mode', 'HTML');
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, { method: 'POST', body: form });
    const data = await tg.json();
    if (!tg.ok || !data.ok) return res.status(502).json({ ok: false, error: data?.description || 'Telegram API failed.' });
    // Send the full plain-text report too when the caption was truncated.
    if (String(caption || '').length > 1024) {
      const textForm = new URLSearchParams({ chat_id: String(chatId), text: String(caption) });
      const tx = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: textForm });
      if (!tx.ok) return res.status(502).json({ ok: false, error: 'Image sent, but full text could not be sent.' });
    }
    return res.status(200).json({ ok: true, message_id: data.result?.message_id || null });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e?.message || 'Unexpected error' });
  }
}

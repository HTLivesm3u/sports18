export default function handler(req, res) {
  const accept = req.headers['accept'] || '';
  const secFetchMode = req.headers['sec-fetch-mode'] || '';

  // Browser detection (strict)
  const isBrowser =
    accept.includes('text/html') ||
    secFetchMode === 'navigate';

  // If browser → Telegram
  if (isBrowser) {
    res.writeHead(302, {
      Location: 'https://t.me/watch_clarity',
      'Cache-Control': 'no-store',
    });
    res.end();
    return;
  }

  // Playlist map
  const playlists = {
    jstar: 'https://raw.githubusercontent.com/alex8875/m3u/main/jtv.m3u',
    jstar2: 'https://tinyurl.com/Pocket-TV',
    ALLINONE:'https://raw.githubusercontent.com/ytyou4777/NEWALLINONE/refs/heads/main/stream.m3u',
    Hotstar:'https://grabify.link/J03DM7'
  };

  const id = req.query.id;

  if (!id || !playlists[id]) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('# Playlist not found');
    return;
  }

  // Player → redirect directly to M3U
  res.writeHead(302, {
    Location: playlists[id],
    'Cache-Control': 'no-store',
  });
  res.end();
}

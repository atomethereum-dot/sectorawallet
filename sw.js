/* Sectora Wallet: lets the wallet install as an app and open even with a bad connection.
   Same-origin files only, network first: an update is used as soon as it is online; the saved
   copy is used only when the network fails. Prices, balances and other services are never cached here. */
const CACHE = 'sectora-wallet-v1';
const CORE = ['/', '/ethers.umd.min.js', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png', '/icons/apple-touch-icon.png',
  '/tokens/eth.png', '/tokens/bnb.png', '/tokens/sol.png', '/tokens/usdt.png', '/tokens/usdc.png'];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).catch(() => {})); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== self.location.origin) return;
  e.respondWith(fetch(r).then(res => {
    if (res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(r.mode === 'navigate' ? '/' : r, copy)).catch(() => {}); }
    return res;
  }).catch(() => caches.match(r.mode === 'navigate' ? '/' : r, { ignoreSearch: true }).then(m => m || Response.error())));
});

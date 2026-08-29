const CACHE_NAME = 'euaiact-faq-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './404.html',
  './manifest.webmanifest',
  './assets/euaiactfaq192icon.png',
  './assets/euaiactfaq512icon.png',
  './01-scope/',
  './02-roles/',
  './03-risk-tier/',
  './04-obligations/',
  './05-penalties/',
  './06-governance-disclaimer/'
];

// 安裝時預先快取核心頁面
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// 啟動時清除舊快取
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 網路優先，離線時自動退回本地快取 (Network-First Strategy)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
  );
});

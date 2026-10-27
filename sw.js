// 초경량 서비스 워커
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // 네트워크 요청 그대로 통과
  e.respondWith(fetch(e.request).catch(() => new Response('오프라인 상태입니다.')));
});

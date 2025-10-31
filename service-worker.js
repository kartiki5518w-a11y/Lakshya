// Install service worker and cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('study-app-v1').then(cache => {
      return cache.addAll([
        'index.html',
        'manifest.json'
      ]);
    })
  );
  console.log('Service Worker installed');
});

// Fetch files from cache if offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

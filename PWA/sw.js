// Service Worker for Simple PWA

const CACHE_NAME = 'simple-pwa-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Install service worker and cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
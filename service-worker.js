const CACHE_NAME = "cronograma-cache-v1";
const urlsToCache = [
  "./",
  "./cronograma pwa.html",
  "./manifest.json",
  "./android-chrome-512x512-2.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

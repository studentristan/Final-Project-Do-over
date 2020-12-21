const CACHE_VERSION = 'v1.00.05';
const CACHE_FILES = [
    '/',
    '/public/views/index.html',
    '/public/css/foundation.min.css',
    '/public/css/overrides.css',
    '/public/javascripts/main.js',
    '/public/javascripts/EventHandler.js',
    '/public/images/favicon.ico',
    '/public/images/1.png',
    '/public/images/2.png',
    '/public/images/Mimic_Bag.png',
    '/public/images/C_gif.gif',
    '/public/images/PL_gif.gif',
    '/public/images/G_gif.gif',
    '/public/images/S_gif.gif',
];
const OFFLINE_URL = "offline.html";

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(function(cache) {
                    console.log('Opened cache');
                    cache.add(new Request(OFFLINE_URL, { cache: "reload" }));
                    return cache.addAll(CACHE_FILES);
                }
            )
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        if ("navigationPreload" in self.registration) {
            await self.registration.navigationPreload.enable();
        }
    })());
    self.clients.claim();
    console.log(`SW activated:  ${event}`);
});

self.addEventListener('fetch', (event) => {
    event.respondWith(async function() {
        try {
            const cachedResponse = await caches.match(event.request);
            if (cachedResponse) {
                return cachedResponse;
            }
            const response = await event.preloadResponse;
            if (response) {
                return await response;
            }
            return fetch(event.request);
        } catch(error) {
            console.log("Fetch failed; returning offline page instead.", error);
        }
    }());
});
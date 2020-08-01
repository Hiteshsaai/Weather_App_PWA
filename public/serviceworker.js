const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html'];

// Install SW
self.addEventListener('install' , (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {

            console.log("Opened Cache")
            return cache.addAll(urlsToCache);
        })
    )
})


//Listen for request 
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
                .catch(() => caches.match('offline.html'))
        })
    )
})


//Activate SW (Which to remove already all the previous verison of Caches)
self.addEventListener('activate', (event)=> {
    const cacheWhitelist = []
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cachesNames) => Promise.all(
            cachesNames.map((cachesName) => {
                if(!cachesWhitelist.includes(cachesName)){
                    return caches.delete(cacheName);
                }
            })
        ))
    )
})

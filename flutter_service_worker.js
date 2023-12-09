'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "5a88c4794913d432ea25654fe54168ae",
"/": "5a88c4794913d432ea25654fe54168ae",
"main.dart.js": "276121e6f5a820f81da4f788da748e54",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"version.json": "9496eb80ebfd67897c6a8e0189004b47",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"manifest.json": "a865c03eed8b4346c0343c01b102e4e6",
"assets/NOTICES": "82c6a3f061b4a16d1c6467da66029e5e",
"assets/AssetManifest.bin": "e80d109cf2f9832bf7ec723c86782fa4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.json": "fe2b08f83d447abf685c4164b296af10",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/assets/ico_transparent.png": "7021300eda4fa8c53f50dec0d46d5e11",
"assets/assets/back2.jpg": "27a16c2526d454e69c140ed80401eafc",
"assets/assets/ico.png": "9c9582d2b02ff67081c91b3cd8e36193",
"assets/assets/screenshot/4.png": "b8112aa2453feb46b4654fdd9d9f2f79",
"assets/assets/screenshot/11.png": "fb7585b88e19fcd9a6841c1e73409c86",
"assets/assets/screenshot/10.png": "3ac3aa325b9f97bebbe271d85a5db257",
"assets/assets/screenshot/8.png": "2114a0e3319239a9ebe32cec5f743d54",
"assets/assets/screenshot/5.png": "2289e1fa329ad14878140b420c26ddd4",
"assets/assets/screenshot/9.png": "65c9970a2754ef6cab0771db3cd69513",
"assets/assets/screenshot/1.png": "1cddb575528f67e5b988954a4e1beac0",
"assets/assets/screenshot/3.png": "2db70f889e12692429b6407b29b21599",
"assets/assets/screenshot/2.png": "4dc5588e886a24d5b5edfc82aab8062d",
"assets/assets/screenshot/7.png": "f70332eaaf9f960c7e64e45833ebc4d7",
"assets/assets/logo/insta.png": "93fa8be4442d4f628490f81b8501a6d7",
"assets/assets/logo/gglplaya.png": "7314fb9872c6008a0b935b1b7a596511",
"assets/assets/logo/applea.png": "e0d66711be70a6658a72e5960fd107e1",
"assets/assets/photosMedia/sudouest.png": "f767773fe20b167a507ff929e296aa3c",
"assets/assets/photosMedia/01netp.jpg": "1854881e2c1174a30a8446764c0edaaf",
"assets/assets/photosMedia/frbleup.jpg": "c45fe483419e03cd5f6a3975fc6d2707",
"assets/assets/photosMedia/repp.jpg": "e996afc4a4b19d051ca478f5bee8a320",
"assets/assets/photosMedia/sudouestp.jpg": "2c525820236ce172c32d164e620ea2cc",
"assets/assets/photosMedia/01net.png": "c01343e65fd98b8370649ae6bdb6100e",
"assets/assets/photosMedia/frbleu.png": "4ac33a9e03d44dfd0d4ce09334f0f49e",
"assets/assets/photosMedia/fr3.png": "1e26b6c62bb04e704da69165b402852c",
"assets/assets/photosMedia/rep.png": "a9c8702b1c2a9cafab67953ab08de9f2",
"assets/assets/photosMedia/fr3p.jpg": "fb78a5768514b1d32a42457edce59178",
"assets/AssetManifest.bin.json": "2c731251d3ab2918562bc2dc975df324",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

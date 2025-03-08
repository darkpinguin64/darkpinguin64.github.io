'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e80d109cf2f9832bf7ec723c86782fa4",
"assets/AssetManifest.bin.json": "2c731251d3ab2918562bc2dc975df324",
"assets/AssetManifest.json": "fe2b08f83d447abf685c4164b296af10",
"assets/assets/back2.jpg": "27a16c2526d454e69c140ed80401eafc",
"assets/assets/ico.png": "9c9582d2b02ff67081c91b3cd8e36193",
"assets/assets/ico_transparent.png": "7021300eda4fa8c53f50dec0d46d5e11",
"assets/assets/logo/applea.png": "e0d66711be70a6658a72e5960fd107e1",
"assets/assets/logo/gglplaya.png": "7314fb9872c6008a0b935b1b7a596511",
"assets/assets/logo/insta.png": "93fa8be4442d4f628490f81b8501a6d7",
"assets/assets/photosMedia/01net.png": "c01343e65fd98b8370649ae6bdb6100e",
"assets/assets/photosMedia/01netp.jpg": "1854881e2c1174a30a8446764c0edaaf",
"assets/assets/photosMedia/fr3.png": "1e26b6c62bb04e704da69165b402852c",
"assets/assets/photosMedia/fr3p.jpg": "fb78a5768514b1d32a42457edce59178",
"assets/assets/photosMedia/frbleu.png": "4ac33a9e03d44dfd0d4ce09334f0f49e",
"assets/assets/photosMedia/frbleup.jpg": "c45fe483419e03cd5f6a3975fc6d2707",
"assets/assets/photosMedia/rep.png": "a9c8702b1c2a9cafab67953ab08de9f2",
"assets/assets/photosMedia/repp.jpg": "e996afc4a4b19d051ca478f5bee8a320",
"assets/assets/photosMedia/sudouest.png": "f767773fe20b167a507ff929e296aa3c",
"assets/assets/photosMedia/sudouestp.jpg": "2c525820236ce172c32d164e620ea2cc",
"assets/assets/screenshot/1.png": "1cddb575528f67e5b988954a4e1beac0",
"assets/assets/screenshot/10.png": "3ac3aa325b9f97bebbe271d85a5db257",
"assets/assets/screenshot/11.png": "fb7585b88e19fcd9a6841c1e73409c86",
"assets/assets/screenshot/2.png": "4dc5588e886a24d5b5edfc82aab8062d",
"assets/assets/screenshot/3.png": "2db70f889e12692429b6407b29b21599",
"assets/assets/screenshot/4.png": "b8112aa2453feb46b4654fdd9d9f2f79",
"assets/assets/screenshot/5.png": "2289e1fa329ad14878140b420c26ddd4",
"assets/assets/screenshot/7.png": "f70332eaaf9f960c7e64e45833ebc4d7",
"assets/assets/screenshot/8.png": "2114a0e3319239a9ebe32cec5f743d54",
"assets/assets/screenshot/9.png": "65c9970a2754ef6cab0771db3cd69513",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "2ebaf0093a20438a0b7d8b72941169f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "51c7d374d6cf667a05a373826ebb346e",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "044d17a01bfe6683368cd2c80ad5a15c",
"icons/ico.png": "9c9582d2b02ff67081c91b3cd8e36193",
"index.html": "7da93779c729fb8ee7206e8bf9e2ac3f",
"/": "7da93779c729fb8ee7206e8bf9e2ac3f",
"main.dart.js": "125cb1fb49f6e678d24d2878dc94bec2",
"manifest.json": "5c839c1e2a00f51d88a65fe927ca1b31",
"version.json": "9496eb80ebfd67897c6a8e0189004b47"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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

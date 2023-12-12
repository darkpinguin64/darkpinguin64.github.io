'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "32511a523764e7e7306ce2783692a820",
"/": "32511a523764e7e7306ce2783692a820",
"main.dart.js": "cf629bebc51724508b67760207f20667",
".git/refs/remotes/origin/main": "df9fd61da30da6667f4479090ddada5e",
".git/refs/heads/main": "df9fd61da30da6667f4479090ddada5e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/62/84faf6b96cbc14f90335ca06e7fbfc974c3b8d": "c5a56233c75512044d16e6756f20eebe",
".git/objects/c9/398614151a57bdf78a42f4773ad44ec3c526ce": "7f412af9921785380085de92580a17c6",
".git/objects/3e/bdc5e99e868edb4a696bdeaa22b178ef6180f2": "aa9cacb136059a5c459b5c79047c75c8",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/6a/1f125f7199a6d8b016b3fb6b0cca91799edf8d": "dec61acdf6ac5020ec7e4e9f959d7a03",
".git/objects/89/cc02d14b28696fe86ce5753584e821eacf6868": "6f89f6e28f3349208f0a1f644aa768e0",
".git/objects/89/55f5c14bae090491c3e29a9eae99ba31e18141": "d7cda0f18169aa2b961cf33052451f43",
".git/objects/44/cfd603496b3bc603f3743108f4ad1e2b2b8587": "42a0f91c9b5e1fa6806096c3860a4059",
".git/objects/ce/0953b8e5743df6361c2d6a3d8229731815a3ed": "c0129ca912aac943c537dc07004b92e5",
".git/objects/34/d4a900bbac3f9bdc4cfe3fec3d3c56797f0270": "a7f94d918b1e340ecdf8540930031a0a",
".git/objects/1b/31528a1fd9d328038f28467d71bf07d19faac5": "60c6d33c13f6cf2885a67fdb0b703316",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/52/bf7c9e1876d5908cf0586ff4459f105459d9e1": "5e1fa47eb6740b11913cdabc3366f7bf",
".git/objects/65/1c243701391aa673eacacdaf7fc0525ba710ea": "8f3e3bbaa0e2c3609d88bc28e671640a",
".git/objects/b1/8d881fc316c249d37390519f4763871f8f517d": "a1a0f85690f9e75c48bfb50e61d781ad",
".git/objects/28/cd5df58c82a7e5376244af662552b16c7970b3": "a38dde7d2b1aa5de5fbbac07c0f41481",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/c6/5c3266cac1edd484f83367b1522de1b74a0641": "80dfac350e029c3e0d1a308809dce658",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/75/5b58d5e899638c24d229d435ceb001297dcba9": "a02cbdc8985548c58f7218705bda3144",
".git/objects/d0/f9491a5f7891380b1f73ef509190853460f2bc": "41e96f80625cc6c5ff29c1614c9873bf",
".git/objects/01/cb1bdd64336f32a08f16a688665926b9b4f136": "3f2fa81ca168b85b9682b4ba00c9637b",
".git/objects/ed/1a41fcbdc689c6181d05747e37c578b133c39b": "9c8d32165db7662759685e074bf57e35",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/e4/49ae1326733df2907a416de9f965dd58a00845": "80858c0d0a6ee740216288d3ce8f3624",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8a/b18529d0c7104ab122b0e29fefcd036a4881f7": "a3254a334f01d8c50c277806c5a2d8f6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/63/b9d31442162bb818f96ec6a4e42cccd944b628": "28142770b8c33b3dbad5c6428612d475",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/4c/c345f936c6d33e25064989e2247d2fde0d3d6f": "256a9af91b75d67b95f0af3804b0f98d",
".git/objects/e7/b1079837679c116c5537c09fe662e7623d1326": "7a18ff28c8277e3072d9f5766d1a7c9a",
".git/objects/d9/3f4d93e8d88af279472d32a55423a57b2eb4f5": "0e052397729eaa7bc45e056b1718069d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/25/574cb06e6e26004149b1b71462171d1d74dec3": "42fd87d52e8675f05a9aa31ccccae54d",
".git/objects/06/4bdd2efb3991511a3803eba30c3ba8fbc4cca2": "791a568a37515d3994941373ea749bde",
".git/objects/8b/2d1b074a19d43f66606fef53ce5e9ced74143a": "67952ef809194319cd14c804dd45ea8e",
".git/objects/8f/9462c57d454c1050021ca91101a026d5eaa372": "430f1bc2a04f09b13819c76496c01ae7",
".git/objects/3c/f7ceb65366c1d843264c453fbbeb50a310e422": "095e783c3af05501b9573402de2b3a46",
".git/objects/a0/7e291e8149be802db220578ab5b7a49e8bf186": "62cab82a36788113bf1e0de0f6644e23",
".git/objects/02/43d0b97bf4c65c2487df30467212a2a4474824": "3846554246745e06959f94ab2815fc64",
".git/objects/ec/82ff2e3b8051413c6b0c7c38ff2d02b1eab165": "a45608e4b39b70fa40bf7d4a8be86b87",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/9b/e683fefb4c30f117a5ab426626bc2c91f65709": "b076131d74f7750a166e34dcb35e2510",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/4f/a57bf3a04b03fd33552b433ab7fa6e8885bd22": "e395c7370f03167445df1f84b834cb0d",
".git/objects/c3/9ccc96bc70ef3f4f70664062772ab860eb9885": "44551389baf4e6188dbd77f504eafe79",
".git/objects/b8/fe4b2c00250725b24a3d3a43d5d3c3018780ca": "1208d0652e2647e09b941df5673ab6bd",
".git/objects/cc/6165fcfd7d4582754108a6481236fdc363c484": "017ca25451e68b5cbd4cc5b6ec5d1460",
".git/objects/d4/1dd73ab13fb3ccc3810dfc17f2b133d5417018": "fd0b1fb237e4b9aa5ce601d471585b7c",
".git/objects/58/05f60cf5979f3834eea61a2b84a21203a42ee4": "be98418fcfef3255ce171c2c3e9776e8",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/a2/a48d4504afad8140cde927a489ac614ef661cb": "4987a042d96edf71ac159dc336063c4c",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/14/3fdf92ba6f7dbfaded0b0e9a0b0a3359b1b1fc": "f2371ad3fe349fe9ce27278db6121a4f",
".git/objects/12/06bedb17c7e0940397e7f9d6f56a22ab04e12a": "625b74bffdcfba19c2a190a68fd98247",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/69/640b2eda18e9b0e1525c5605e1cca5e94e41c3": "f59767394fcd20870ed490ca13860527",
".git/objects/f4/ea1bd80c9e8f78f5462c4460ae2d633b2c5989": "2c1d06de893626dde8908d0a178f5fd2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/0e/ee82475624e873f2a708bc2aa05e00dc68b054": "0c57ce22597cc19d2f783dc81f5cc6d6",
".git/objects/35/9e59fd0ac9d6d278ba3c15f0161f89c22f5595": "751f92cc1dc26c879f6feef6d8bed610",
".git/objects/cb/f50929b1be3adcb483c9d51f63b323298b6850": "8b670c61f1f3d0fef1281f36126206c3",
".git/objects/f0/2dfaa9f61f0d170a063963323dda71f2b1bfda": "742f90bd4e1b442a40df2360d42e3d85",
".git/objects/b5/25e7504ac98525be393e440c468d61bcf46277": "56329dd9bdf8180e8f4617bd406dcc40",
".git/objects/24/a5ce70f79c843b1f66ad657c1a509771d5d277": "5538557af9070e30ebf06ce47fedfae5",
".git/objects/18/4b4d03980876f5d8352c1f49b916327385383e": "feaec0d5c99e2a19e5b18e772ad610cd",
".git/config": "5e40a6f67c920d4cdfc0033ec241316a",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "a186ef367fd1690391dd9c9537d554bd",
".git/ORIG_HEAD": "df9fd61da30da6667f4479090ddada5e",
".git/index": "a0dda7064e8ddd8fa9ae6a9798fcd467",
".git/FETCH_HEAD": "4efc5eb1b34e2428bdb0b75327d7c41c",
".git/logs/refs/remotes/origin/main": "5179757c30bde427ccfdcc0927806b85",
".git/logs/refs/heads/main": "bf834d1dac679e1e88866c85eb73c362",
".git/logs/HEAD": "0aa63964a63c246a7751045262813488",
"favicon.png": "51c7d374d6cf667a05a373826ebb346e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/ico.png": "9c9582d2b02ff67081c91b3cd8e36193",
"version.json": "9496eb80ebfd67897c6a8e0189004b47",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"manifest.json": "82f7ec554a7425c647491c2f215d1a76",
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ac333978ae115f10180b4c70ebdbf460",
"index.html": "01b245f6e8f7df1826d4b16e7aa82b53",
"/": "01b245f6e8f7df1826d4b16e7aa82b53",
"CNAME": "1c6d522e2c8c6be6ac6f24a9ba76abcd",
"main.dart.js": "c58fc91007ae6c361a1eb84c1536da4d",
".git/ORIG_HEAD": "fb47a44d3862792739a7334e4aec82a5",
".git/config": "df193722cb4a27be90b7ac03fd7ce474",
".git/objects/61/375888eea7aff3a0cc4bb714fe4f3d73786195": "38036862ab376ac3d984ecaae7be6f12",
".git/objects/95/822c8a7e7c55fcffe5b5e5c1f6ed4d3753dc12": "4ebf8fcae90c293025d164d3253be791",
".git/objects/0c/8a75dc26a72c5b96908dad08e598167776ea6a": "651a9212528942a5596167a81667bc6d",
".git/objects/3b/f775f96efb9590248d1cc614d9924eae0f324e": "5c62af316d79831846458d88a38615e4",
".git/objects/6f/67865e993df5a8c1613e3bef998419927af377": "fca5ac3babcb832608c0069e0bbce4ef",
".git/objects/6f/75a3f178f162b79774c86d5f0fd5cfe950ffc5": "1368b00a898bac4044d79a37ffa9931a",
".git/objects/35/1e7a87286cbfddf3e0da1e49f4e78d6aedd30f": "31737e463599915a545358a340e7a152",
".git/objects/56/f958838f0827df2aaa8af1c58f7c0a62ec210f": "029c81d503aa56ce0baee5caf7844ac0",
".git/objects/51/edfbfaf80f7f6439dde4c9324fac03447a9d2e": "02762d19d768f1334dd2f65b31ccd75c",
".git/objects/0b/c2fb90522d77ff692a3e810c00563f9633aae2": "db95a0312d3a3009c254600ae8c71790",
".git/objects/93/3a004c10224745868f5b9bed94c0b694677af2": "cebf1560c28af0e68f126ddb439def06",
".git/objects/34/6230bf87e6d363926ae92be87deff59b271bb3": "39e1d7bd3e6084fa1ff3b6dd8d21c6cb",
".git/objects/9d/519e2af026b28ae7392b356f1ac342370c934e": "11158d18518736788587ebddceb78aaf",
".git/objects/b5/abff7aab532b0291ee6f9d0cd9a7b7d6370885": "0b8e1fb188b3d2a6e755a9ce7a49dc99",
".git/objects/ac/19b329149abc2af5022ff4a0d870df6deb8800": "d5d17af325de4deccb03b8d79486c6bc",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/b3/3dbf57fa61cdbb4a9a4f8d6d2901257ba56a06": "29fe4a0230950438b759e1d6274a4677",
".git/objects/da/10eeb082d0430779c2ecded16a8cb018dc8c83": "9f88a9103ddca67bd3bce8490fd68321",
".git/objects/bd/7070bb2f67caae9327a6f84cd06c794ed4cb3d": "c49e67b354d4f2b486235e968476dd4d",
".git/objects/d6/2ba9cf8364b617eb0b655252802a85927b8217": "42eddb551cd21afba068738269e3b1c1",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/f3/64d7217ccfc3929e97196a482bfa526d3453d9": "505e2e9de328d084a1176e36a6a03548",
".git/objects/eb/e6fa1d5eecc4cad4de14d4d90a4c15c85d8b54": "e1413c03d3c71e59c52956b3157f501b",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/f2/14403e9ef68e3dcc879ad8ea71aca837caaf0a": "356a32e05101a3006e47add7664993b1",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/be5f93ab46a0e23d26b6e4d57581b6b7390b7c": "9bfcb5ab67a4e0035d0d354ff125656a",
".git/objects/e3/c20fac9cb6fbafe3c7e05b7888d07577e84f7f": "5934b8a32b640eeed9fa69a1c114f416",
".git/objects/cf/9d62b6dfd5aa4b515f72a5cd2984d85b05f34d": "e241e8ac7cff07524a346f7a378e7f3c",
".git/objects/c8/861f499af5754c21ed5c05ec0f23197e7bd2fd": "92977be51bdbfb8dca7e05f71e26bd84",
".git/objects/fb/eecc117244bb27f83f995650b80535624fed6f": "e3123b6a144f90c9937eeed28447820b",
".git/objects/16/e277993027c4bf282cf08b84d86fb5b7846f49": "2af7abd6747c5c0c2f6ab65a6229b3fb",
".git/objects/16/c403b99e9b8ea99c5a11812ff479a12d3f2b22": "2e5c5b5f4565505511259fbb58133a68",
".git/objects/80/0942be0e0d0fdb6ee3f56aa9069706959a4fff": "b696c201a1ad183bcf727903c27d41ab",
".git/objects/1a/a98304e59ade84a3ea585ce80918f4f2fcd1fc": "8e1a81deb89a0251cec7fc6cc3af5ce4",
".git/objects/26/c8d6554037e6f074b6dc2b6ade4e5489deba17": "7db99c48d1371b47af3aab98a2be938b",
".git/objects/44/f61a0a979b7c2c4c1671f07abc2c987770f82e": "8d7fae585f06d864ebffc66149667fff",
".git/objects/2a/7cf96f2eb2191b991e9a0108babe30605306a9": "cc89ab85fd6ae96b2ea2c9c195b0a40b",
".git/objects/2f/47c9dd0b4b93f32a1b18a70dbac08974739b9f": "a2456b5730c28e201076e517692c57e4",
".git/objects/36/7ece8e6eff9cf8907c39a83d0133d1afc28f76": "d68ea1aa7af9399b932ebb8c8ffa0e1e",
".git/objects/5c/99ba41471f3bea426c8a7b0e1ec0bf77b2b262": "3b05b1ca985399b262a8dd9acf0fd6fc",
".git/objects/65/734597efd133012e3d61b6b5c0976b35749ebc": "197b25a5b7df75e55080408ee40b8e04",
".git/objects/96/1c0300bec23ad7c529c44521aac3f34fe07741": "563cb829bbdc3bf41f78051fbc2fad43",
".git/objects/08/196d9ce75b2aa5bdeddd11aec3da44ebb33efe": "00984bb9fbac36755d50a4d155c4d822",
".git/objects/01/8801919ee4d385b2820762c0ac2f8a58f39505": "7804a34f8a4288dd1e1f7efe63857bed",
".git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
".git/objects/64/b3dc9de63c90f8132dd4a164c7289c2142a1d7": "769b910da608061bfc5a4a1ceae5a04a",
".git/objects/d3/8f8537d4a1ea1f9895ace4b780703f22d59480": "80f9727860d5d427c6e7d230499b7fdb",
".git/objects/b1/649f281d0bb0d5155371d25316e3dc1b315b87": "6ffffad5626b0b1b1f77d182d3a4ae23",
".git/objects/b1/af759a08d5a6549135eb16752fecc0bcf15678": "5fdc1a025e1fcccb967a2ae258ab2539",
".git/objects/b6/5e245a746661dc8ee13918ae95054aed23a2aa": "1afd0e174b309e32aeffe62940a4458a",
".git/objects/db/1d336615e4ff9bd56ad51947a9ba438131b58d": "2fdfed39c79eb8a845d5835c3d9f193c",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ef/32610de8c22e01e2a091b03fc9dc054b2ba667": "967e19ac06b23a61ed531f9bc5ab7c40",
".git/objects/ef/db915bd5108a6333e052a680414638398169a2": "f439bac1cf96c985e4e858319d8fda63",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/objects/c2/3faf9345a5426bb33e96137e7f592ae23b1764": "9c9ffb534ad0aa9e2cc4477acf8abd27",
".git/objects/e7/978b8c91096a464bfe733f5a429fb4b91a3f64": "10b39d3f6091b7a7fc3821791fa1f202",
".git/objects/f8/e2cb133ef77e0f14260ed0291be59ebac62597": "e96336a3f95a0d7f1c0d97b4a2f4fee4",
".git/objects/e0/6541e2985dfa1f7f3b1ef3ba2d783d03dcf42c": "16582fe6293d593963cf3fc6803f2b63",
".git/objects/e0/ae1668b22a8beb67b03f4bd2a6b44d5995853d": "3e542eb23b48746117d5f8d862e9e6fd",
".git/objects/2c/feb707879f349f40638127b9df82b1c09b0752": "f8a998e4510d03d709642533db86c82a",
".git/objects/79/3d21b2847b99f9d291619ccfa6dcc3dacf4fdf": "0201c7aeb356d999afc91325bc011cd9",
".git/objects/1b/d2f731b838e16a4fde1032e73492c71b257f84": "c07d7f09432ee0daf5baa78449cc5f8b",
".git/objects/77/9e1eab06824c11ce0af2e4e7a3efab3e80ce76": "39e394fcad7d299889f993f6f7d41d74",
".git/objects/70/1af779f5dcb04bd84253f6e6821d68e6f01b77": "ba6831ad616cd29875cb78a98b7fe7fc",
".git/objects/4a/aa5ac54b81c0a50594b5985c988e286411eda3": "820d0841f590011d6513e94db95ef6b0",
".git/objects/4f/afb01095685fa252cd8ee1fd2dc0b4023a6833": "cb09ff55ddb9ae8581c0658b8d5b347b",
".git/objects/4f/af1a01dea15dbfb2888fda189cbc412704e7af": "9bdd2c36c932a2ba137f8b95d66bdbd4",
".git/objects/2b/5d968a8d41a85b345e554333180ab7282495b0": "9d9fa0bb3849002937a12820cb3297a6",
".git/objects/7a/4a313c6270b1773a3e72af9218a6e3ad84732d": "b3aabd430e92e5c045b9df73475b17e9",
".git/objects/14/2b694152731110c7add8999cf718987fbeb6b4": "bfdb18fcb7cfd69b893cf73a018d1dfc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ec7f38135e770cd4ca3d81bf670c12c6",
".git/logs/refs/heads/develop": "3b943bbab0fa41bdadc69b553d0db3d7",
".git/logs/refs/heads/main": "4b149ad5afab85f9a0385536ecca1fd3",
".git/logs/refs/remotes/origin/develop": "e6592b9a53f227ee59a1e7a98be4595c",
".git/logs/refs/remotes/origin/main": "a3eedf2cbbaab1f1b9ddc753de1c7493",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/refs/heads/develop": "fb47a44d3862792739a7334e4aec82a5",
".git/refs/heads/main": "38dfe92fe483d0d47b34a5ceef492f94",
".git/refs/remotes/origin/develop": "fb47a44d3862792739a7334e4aec82a5",
".git/refs/remotes/origin/main": "38dfe92fe483d0d47b34a5ceef492f94",
".git/index": "2b2635dc200ca1ee19558688f75d3304",
".git/COMMIT_EDITMSG": "891f40ab40210d815fdbb6d8dca13f78",
".git/FETCH_HEAD": "cfe49279b5ce0e3d95498608bbd14331",
"assets/AssetManifest.json": "4d289b6e66965d2b3962a4554ed185f9",
"assets/NOTICES": "1f115c96529a99e02cb9b72c356c5266",
"assets/FontManifest.json": "ab310715c29abd30b1eb1b6c626d8ec7",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/avatar.png": "b0dafe38319b3a3611e3f390a973e450",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/works/ic_hotel_guaira_palace.jpg": "5f1dbfd897bb1b12e763e0e0f77dd38e",
"assets/assets/works/ic_garvey_park_hotel.jpg": "df27f889d91085230c860fb490b34c18",
"assets/assets/works/ic_hoteis_othon.webp": "f758a027b0aca7f187dce5fe8d79b86d",
"assets/assets/works/ic_lizon_curitiba_hotel.jpg": "0551cd23dabe37526eb0b746d4b810f9",
"assets/assets/works/ic_bradesco_seguros_dirija_bem.webp": "76fdfd4912467bd324968a37e284f5bc",
"assets/assets/works/ic_generic_hotel_app.jpg": "d48638e76d865bd6fd4ec7fa61a4e341",
"assets/assets/works/ic_hotel_rainha_do_brasil.jpg": "7d281a5426abf399b3e6b357a4710284",
"assets/assets/works/ic_mc_flats.webp": "62f4e79aadc2e4529403d3529e2c6bb5",
"assets/assets/works/ic_executive_inn_hotel.png": "adfc91af87b145bbcb3396bae5473d4f",
"assets/assets/works/ic_liberty_carro_conectado.webp": "5884b9bf95f8ae20f942b045c5d52c92",
"assets/assets/works/ic_hotel_continental_inn.jpg": "e2c9c41adf8d979317a51e8e585450e2",
"assets/assets/works/ic_ceabs_lora_busca.png": "0029134c768093cc7ba6dabd2b045a29",
"assets/assets/works/ic_ceabs_auto_closing.webp": "eda8ba0d110eaca346e8f3b8e7d81b17",
"assets/assets/works/ic_feller_paulista_hotel.jpg": "8f47b49e930f395b4ce181bd4c5b35fc",
"assets/assets/works/ic_rede_brisa_hoteis.jpg": "430c0227eba09b9940b6fb19aec978ee",
"assets/assets/works/ic_hotel_sol_belo_horizonte.jpg": "ed23e51baa1dd7ccff4f054845b16732",
"assets/assets/works/ic_hotel_hostel_villa_santana.jpg": "9ba64b4adca0077d96c93f689f16a915",
"assets/assets/works/ic_imperial_hotel.jpg": "d02420a84c2a1c9fd2d0ea46dbf42f4f",
"assets/assets/works/ic_bm_fbovespa.png": "9fb5ec2d3ce98dfc3d2029295d9a10fc",
"assets/assets/works/ic_caravelle_palace_hotel.jpg": "8b2f0879e7ed7a0efab28bfb81c2e623",
"assets/assets/works/ic_ae_broadcast.webp": "21734efe2e322fc559e5e18927632d33",
"assets/assets/works/ic_pousada_hibiscus_beach.jpg": "d706e8e9c4534c53340c590a63819c0f",
"assets/assets/works/ic_hotel_rondonia_palace.jpg": "3726b92b557275d0503d612fceff7b87",
"assets/assets/works/ic_hotel_pouso_real.jpg": "39b436fa3fc5d5b638455870d517ad83",
"assets/assets/works/ic_riema_hoteis.jpg": "a16dcec34104f80ef8fca908cd2e2c56",
"assets/assets/works/ic_brisa_barra_hotel.png": "86238eb160c92818f211942cd778e046",
"assets/assets/works/ic_metropole_rio_hotel.jpg": "8c8e78a566b609fd3861ffe61f8ebd03",
"assets/assets/works/ic_mabu_hoteis.webp": "bb665c6dacb6fc2ecf00bd640485aa01",
"assets/assets/works/ic_udfe_ycard_carteirinha_de_estudante.png": "a34c418763acbcb7047eea3b8f79d33e",
"assets/assets/works/ic_san_raphael_hotel.jpg": "3c0ad5ccaa17ef767359c71143237dab",
"assets/assets/works/ic_dorisol_recife_grand_hotel.jpg": "0466552f37d5088764ab318011257b9c",
"assets/assets/works/ic_costao_do_santinho.webp": "ba18784dab359471b1223ba19a1623f5",
"assets/assets/works/ic_viale_hotels.webp": "9d6c18abd3e8d781c87a9eceaa7f2a15",
"assets/assets/works/ic_carima_hotel_convention.png": "f05c9c5778cee81b7dab311eef374ce1",
"assets/assets/works/ic_malapronta_com.jpg": "3f78cae849f1b6876f6c12af48f3fced",
"assets/assets/works/ic_hotel_vilamar_copacabana.jpg": "2cc1fc41b8e3b2c5c2c09e49093d5342",
"assets/assets/works/ic_brasil_tropical_hotel.jpg": "c58425a8cb88d43559ae9e969ea36e3f",
"assets/assets/works/ic_hotel_villa_rica.jpg": "8f562bea069ca2f6d62f6fc614cf0ab2",
"assets/assets/works/ic_slaviero_hoteis.jpg": "01561e332a25b1bafcbbe3afeabcab62",
"assets/assets/FontManifest.json": "bf66a3e6b76384355a2c9db4868e085c",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

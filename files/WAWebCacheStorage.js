__d(
  "WAWebCacheStorage",
  [],
  function (t, n, r, o, a, i) {
    var e = "web-cache-storage-testing";
    function l() {
      return caches.open(e);
    }
    function s(e) {
      var t = e.cache,
        n = e.fileBuffer,
        r = e.key,
        o = new Response(n);
      return t.put(r, o);
    }
    async function u(e) {
      var t = e.cache,
        n = e.key,
        r = await t.match(n);
      return r.arrayBuffer();
    }
    function c() {
      return caches.delete(e).then(function () {});
    }
    function d(e) {
      var t = e.cache;
      return t.keys().then(function (e) {
        return e.length;
      });
    }
    ((i.prepareCache = l),
      (i.writeToCache = s),
      (i.readFromCache = u),
      (i.cleanupCache = c),
      (i.getCacheCount = d));
  },
  66,
);

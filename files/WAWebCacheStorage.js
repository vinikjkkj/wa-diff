__d(
  "WAWebCacheStorage",
  ["asyncToGeneratorRuntime"],
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
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.cache,
            n = e.key,
            r = yield t.match(n);
          return r.arrayBuffer();
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return caches.delete(e).then(function () {});
    }
    function m(e) {
      var t = e.cache;
      return t.keys().then(function (e) {
        return e.length;
      });
    }
    ((i.prepareCache = l),
      (i.writeToCache = s),
      (i.readFromCache = u),
      (i.cleanupCache = d),
      (i.getCacheCount = m));
  },
  66,
);

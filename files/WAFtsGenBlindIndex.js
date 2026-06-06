__d(
  "WAFtsGenBlindIndex",
  ["WACryptoDependencies", "WALruCache", "WATextEncoding"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o("WALruCache").LruCache)({
      sizeLimit: 5e4,
      getSize: function () {
        return 1;
      },
    });
    async function s(t, n) {
      var r = e.get(t);
      if (r != null) return r;
      var a = o("WATextEncoding").newTextEncoder().encode(t),
        i = await o("WACryptoDependencies")
          .getCrypto()
          .subtle.sign({ name: "HMAC", hash: "SHA-256" }, n, a);
      return (e.put(t, i), i);
    }
    l.genBlindIndexBuffer = s;
  },
  98,
);

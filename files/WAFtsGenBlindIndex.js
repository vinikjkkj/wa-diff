__d(
  "WAFtsGenBlindIndex",
  [
    "WACryptoDependencies",
    "WALruCache",
    "WATextEncoding",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o("WALruCache").LruCache)({
      sizeLimit: 5e4,
      getSize: function () {
        return 1;
      },
    });
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = e.get(t);
          if (r != null) return r;
          var a = o("WATextEncoding").newTextEncoder().encode(t),
            i = yield o("WACryptoDependencies")
              .getCrypto()
              .subtle.sign({ name: "HMAC", hash: "SHA-256" }, n, a);
          return (e.put(t, i), i);
        })),
        u.apply(this, arguments)
      );
    }
    l.genBlindIndexBuffer = s;
  },
  98,
);

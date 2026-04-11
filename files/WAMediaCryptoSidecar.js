__d(
  "WAMediaCryptoSidecar",
  ["WAConcurrentIterate", "WACryptoHmac", "WAMediaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "video";
    }
    var s = 16,
      u = 10,
      c = 64 * 1024;
    function d(e, t, n) {
      n === void 0 && (n = 1);
      var r = t.buffer.byteLength,
        a = Math.ceil((r - s) / c),
        i = new Uint8Array(u * a);
      return o("WAConcurrentIterate")
        .concurrentIterate(
          a,
          function (n) {
            var r = n * c,
              a = r + s + c,
              l = t.subarray(r, a);
            return o("WACryptoHmac")
              .sign(e, l)
              .then(function (e) {
                var t = new Uint8Array(e, 0, u);
                i.set(t, n * u);
              });
          },
          n,
        )
        .then(function () {
          return o("WAMediaUtils").castToStreamingSidecar(i.buffer);
        });
    }
    ((l.shouldHaveStreamingSidecar = e), (l.calculateStreamingSidecar = d));
  },
  98,
);

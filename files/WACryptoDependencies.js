__d(
  "WACryptoDependencies",
  ["tweetnacl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = self.crypto;
    function s(t) {
      e = t;
      var n = 65536;
      o("tweetnacl").setPRNG(function (e, r) {
        var o,
          a = new Uint8Array(r);
        for (o = 0; o < r; o += n)
          t.getRandomValues(a.subarray(o, o + Math.min(r - o, n)));
        for (o = 0; o < r; o++) e[o] = a[o];
        for (var i = 0; i < a.length; i++) a[i] = 0;
      });
    }
    function u() {
      return e;
    }
    ((l.setCrypto = s), (l.getCrypto = u));
  },
  98,
);

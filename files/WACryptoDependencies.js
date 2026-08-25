__d(
  "WACryptoDependencies",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = self.crypto;
    function l(t) {
      e = t;
    }
    function s() {
      return e;
    }
    ((i.setCryptoInstance = l), (i.getCrypto = s));
  },
  66,
);

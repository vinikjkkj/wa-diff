__d(
  "WAACSTokenUtils",
  [
    "WABinary",
    "WACryptoDependencies",
    "WACryptoPrimitives",
    "WAWamPrivateStatsToken",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = new Uint8Array(32);
      o("WACryptoDependencies").getCrypto().getRandomValues(e);
      var t = new Uint8Array(32);
      o("WACryptoDependencies").getCrypto().getRandomValues(t);
      var n = o("WAWamPrivateStatsToken").blindToken(e, t);
      return { blindedToken: n, blindingFactor: t, token: e };
    }
    function s(e) {
      var t = e.token,
        n = e.unblindedSignedToken,
        r = o("WABinary").Binary.build(t, n);
      return o("WACryptoPrimitives").hash(r.readByteArrayView());
    }
    ((l.getBlindedToken = e), (l.getSharedSecret = s));
  },
  98,
);

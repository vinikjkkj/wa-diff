__d(
  "WAMakeSignedPreKeyMixin",
  ["WAWap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = { idElementValue: o("WAWap").BIG_ENDIAN_CONTENT(e.id, 3) },
        n = { anyElementValue: e.keyPair.publicKey },
        r = e.signature;
      return {
        keyIDMixinArgs: t,
        keyDataMixinArgs: n,
        signatureElementValue: r,
      };
    }
    l.makeSignedPreKeyMixin = e;
  },
  98,
);

__d(
  "WACryptoCurve25519Dependencies",
  ["Promise", "WACryptoPrimitives", "WASignalKeys", "WASignalOther"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return (e || (e = n("Promise"))).resolve().then(function () {
        return o("WASignalKeys").makeKeyPair();
      });
    }
    function u(t, r) {
      return (e || (e = n("Promise"))).resolve().then(function () {
        return o("WACryptoPrimitives").scalarMult(
          o("WASignalOther").ensureSize(r, 32),
          o("WASignalOther").ensureSize(t, 32),
        ).buffer;
      });
    }
    var c = { generateIdentityKeyPair: s, calculateAgreement: u };
    ((l.calculateAgreement = u), (l.CURVE25519_SIGNAL_DEPENDENCIES = c));
  },
  98,
);

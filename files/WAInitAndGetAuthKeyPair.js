__d(
  "WAInitAndGetAuthKeyPair",
  [
    "Promise",
    "WACryptoCurve25519",
    "WACryptoCurve25519Dependencies",
    "WASetAuthKeyPair",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return t.authKeyPair != null
        ? (e || (e = n("Promise"))).resolve(t.authKeyPair)
        : new (o("WACryptoCurve25519").Curve25519)(
            o("WACryptoCurve25519Dependencies").CURVE25519_SIGNAL_DEPENDENCIES,
          ).keyPair.then(function (e) {
            return o("WASetAuthKeyPair")
              .setAuthKeyPair(e)
              .then(function () {
                return e;
              });
          });
    }
    l.initAndGetAuthKeyPair = s;
  },
  98,
);

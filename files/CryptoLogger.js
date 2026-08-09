__d(
  "CryptoLogger",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("FBLogger")("labyrinth_web", "crypto." + e);
    }
    function s(e, t) {
      return t instanceof Error ? e.catching(t) : e;
    }
    ((l.CryptoLogger = e), (l.captureError = s));
  },
  98,
);

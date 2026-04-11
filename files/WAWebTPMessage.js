__d(
  "WAWebTPMessage",
  ["WAWebPonyfillsCryptoRandomUUID"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return {
        type: e,
        payload: t,
        id: r("WAWebPonyfillsCryptoRandomUUID")(),
        timestamp: Date.now(),
      };
    }
    function s(e) {
      return e.payload;
    }
    ((l.encodeWAWebTPMessage = e), (l.decodeWAWebTPMessage = s));
  },
  98,
);

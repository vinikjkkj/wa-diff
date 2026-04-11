__d(
  "WAWebGetSharedSessionId",
  ["WAWebPonyfillsCryptoRandomUUID"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebPonyfillsCryptoRandomUUID")();
    function s() {
      return e;
    }
    l.getSharedSessionId = s;
  },
  98,
);

__d(
  "MAWPreKeysCleaner",
  ["WACryptoManagerUtils", "WAGlobals", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 60 * o("WATimeUtils").DAY_SECONDS;
    function s() {
      return o("WAGlobals")
        .getWaOneQueue()
        .enqueue(
          function (e) {
            var t = e.cryptoManager;
            return o("WACryptoManagerUtils")
              .getPreKeyGenerationsTimestamps(t)
              .then(function (e) {
                var n = u(e);
                if (n.length > 0)
                  return o("WACryptoManagerUtils").deletePreKeyGenerations(
                    n,
                    t,
                  );
              });
          },
          { afterInit: !0, flush: !0, operationType: "clear_expired_prekeys" },
        );
    }
    function u(t) {
      for (var n = [], r = 0; r + 2 < t.length; ++r)
        o("WATimeUtils").happenedWithin(t[r + 2].timestamp, e) ||
          n.push(t[r].id);
      return n;
    }
    ((l.EXPIRATION_SECONDS = e), (l.clearExpiredPreKeys = s));
  },
  98,
);

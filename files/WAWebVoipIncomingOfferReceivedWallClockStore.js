__d(
  "WAWebVoipIncomingOfferReceivedWallClockStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null;
    function l(t) {
      (e != null && e.callId === t) ||
        (e = { callId: t, offerAtMs: Date.now() });
    }
    function s() {
      var t,
        n,
        r = (t = (n = e) == null ? void 0 : n.offerAtMs) != null ? t : null;
      return ((e = null), r);
    }
    ((i.recordIncomingOfferReceivedWallClock = l),
      (i.consumeIncomingOfferReceivedWallMs = s));
  },
  66,
);

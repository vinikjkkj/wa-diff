__d(
  "WAWebVoipCalleeOfferToRingStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null;
    function l(t) {
      if (!(e != null && e.callId === t && e.ringAtMs == null)) {
        var n = m();
        e = n == null ? null : { callId: t, offerAtMs: n, ringAtMs: null };
      }
    }
    function s(t) {
      e == null ||
        e.callId !== t ||
        e.ringAtMs != null ||
        (e = babelHelpers.extends({}, e, { ringAtMs: m() }));
    }
    function u() {
      var t,
        n = (t = e) == null ? void 0 : t.ringAtMs;
      return e == null || n == null || n <= e.offerAtMs
        ? null
        : Math.round(n - e.offerAtMs);
    }
    function c(t) {
      var n;
      t != null &&
        t !== "" &&
        ((n = e) == null ? void 0 : n.callId) !== t &&
        (e = null);
    }
    function d() {
      e = null;
    }
    function m() {
      var e, t;
      return (e = (t = globalThis.performance) == null ? void 0 : t.now()) !=
        null
        ? e
        : null;
    }
    ((i.recordCalleeOfferReceived = l),
      (i.recordCalleeRing = s),
      (i.getCalleeOfferToRingT = u),
      (i.dropCalleeOfferToRingOfOtherCall = c),
      (i.resetCalleeOfferToRing = d));
  },
  66,
);

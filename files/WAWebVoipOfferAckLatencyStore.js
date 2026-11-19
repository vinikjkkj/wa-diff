__d(
  "WAWebVoipOfferAckLatencyStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null;
    function l(t, n, r, o) {
      var a, i, l;
      t !== "offer" ||
        r == null ||
        o == null ||
        o < r ||
        ((a = e) == null ? void 0 : a.callId) === n ||
        r < ((i = (l = e) == null ? void 0 : l.sentAtMs) != null ? i : r) ||
        (e = { callId: n, latencyMs: Math.round(o - r), sentAtMs: r });
    }
    function s() {
      var t, n;
      return (t = (n = e) == null ? void 0 : n.latencyMs) != null ? t : null;
    }
    function u(t) {
      var n;
      t != null &&
        t !== "" &&
        ((n = e) == null ? void 0 : n.callId) !== t &&
        (e = null);
    }
    function c() {
      e = null;
    }
    ((i.recordOfferAckLatency = l),
      (i.getOfferAckLatencyMs = s),
      (i.dropOfferAckLatencyOfOtherCall = u),
      (i.resetOfferAckLatency = c));
  },
  66,
);

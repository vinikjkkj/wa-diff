__d(
  "WAWebVoipClosedTabCallRingRecords",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "closed_tab_call_rings",
      l = 6048e5,
      s = 20;
    function u(e, t) {
      if (!Array.isArray(e)) return [];
      var n = [];
      for (var r of e) {
        var o = m(r);
        o != null && t - o.ringAtMs < l && n.push(o);
      }
      return n;
    }
    function c(e, t) {
      return []
        .concat(
          e.filter(function (e) {
            return e.callId !== t.callId;
          }),
          [t],
        )
        .slice(-s);
    }
    function d(e, t, n) {
      var r = function (n) {
        return n.callId === t && n.outcome === "shown";
      };
      return e.some(r)
        ? e.map(function (e) {
            return r(e) ? babelHelpers.extends({}, e, { outcome: n }) : e;
          })
        : null;
    }
    function m(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.callId,
        n = e.ringAtMs,
        r = p(e.outcome);
      return typeof t != "string" || typeof n != "number" || r == null
        ? null
        : { callId: t, outcome: r, ringAtMs: n };
    }
    function p(e) {
      return e === "shown"
        ? "shown"
        : e === "clicked"
          ? "clicked"
          : e === "dismissed"
            ? "dismissed"
            : e === "not_delivered"
              ? "not_delivered"
              : null;
    }
    ((i.CLOSED_TAB_CALL_RINGS_KEY = e),
      (i.CLOSED_TAB_CALL_RING_TTL_MS = l),
      (i.parseClosedTabCallRings = u),
      (i.addClosedTabCallRing = c),
      (i.settleClosedTabCallRing = d));
  },
  66,
);

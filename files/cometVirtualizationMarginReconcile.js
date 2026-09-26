__d(
  "cometVirtualizationMarginReconcile",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 10,
      l = 1800 * 1e3;
    function s(e, t, n) {
      return Math.round(e + n * (t - e));
    }
    function u(e, t, n) {
      if (e == null) return { bottomMargin: 0, sampleCount: 0, topMargin: 0 };
      var r = t - e.lastUpdated;
      return e.sessionBase != null && r >= 0 && r < n
        ? e.sessionBase
        : {
            bottomMargin: e.bottomMargin,
            sampleCount: e.sampleCount,
            topMargin: e.topMargin,
          };
    }
    function c(t, n, r, o, a) {
      (o === void 0 && (o = e), a === void 0 && (a = l));
      var i = u(t, r, a),
        c = Math.min(i.sampleCount, o),
        d = 1 / Math.min(c + 1, o);
      return {
        bottomMargin: s(i.bottomMargin, n.bottomMargin, d),
        lastUpdated: r,
        sampleCount: Math.min(c + 1, o),
        sessionBase: i,
        topMargin: s(i.topMargin, n.topMargin, d),
      };
    }
    ((i.EMA_WEIGHT_CAP = e),
      (i.SESSION_WINDOW_MS = l),
      (i.reconcileRecord = c));
  },
  66,
);

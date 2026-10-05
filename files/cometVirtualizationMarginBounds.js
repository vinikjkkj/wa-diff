__d(
  "cometVirtualizationMarginBounds",
  ["justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = ((e = r("justknobx")._("3655")) != null ? e : 0) / 10,
      c = (s = r("justknobx")._("3657")) != null ? s : 0;
    function d(e, t, n, r) {
      var o = n ? 1 : u,
        a = n ? u : 1,
        i = Math.min(e * a, t),
        l = Math.min(e * o, t);
      return {
        bottomMax: r != null && !n ? r : i,
        lowerBound: t / c,
        topMax: r != null && n ? r : l,
      };
    }
    function m(e, t, n) {
      return Math.min(t, Math.max(n, e));
    }
    ((l.computeMarginBounds = d), (l.clampRestoredMargin = m));
  },
  98,
);

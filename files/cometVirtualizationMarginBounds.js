__d(
  "cometVirtualizationMarginBounds",
  ["justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = ((e = r("justknobx")._("3655")) != null ? e : 0) / 10,
      c = (s = r("justknobx")._("3657")) != null ? s : 0;
    function d(e, t, n) {
      var r = n ? 1 : u,
        o = n ? u : 1;
      return {
        bottomMax: Math.min(e * o, t),
        lowerBound: t / c,
        topMax: Math.min(e * r, t),
      };
    }
    l.computeMarginBounds = d;
  },
  98,
);

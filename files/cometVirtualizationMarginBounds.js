__d(
  "cometVirtualizationMarginBounds",
  ["VirtualizationConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("VirtualizationConfig").getScrollDirectionDiscount(),
      s = o(
        "VirtualizationConfig",
      ).getTopBottomMarginLowerBoundScreenHeightRatio();
    function u(t, n, r, o) {
      var a = r ? 1 : e,
        i = r ? e : 1,
        l = Math.min(t * i, n),
        u = Math.min(t * a, n);
      return {
        bottomMax: o != null && !r ? o : l,
        lowerBound: n / s,
        topMax: o != null && r ? o : u,
      };
    }
    function c(e, t, n) {
      return Math.min(t, Math.max(n, e));
    }
    ((l.computeMarginBounds = u), (l.clampRestoredMargin = c));
  },
  98,
);

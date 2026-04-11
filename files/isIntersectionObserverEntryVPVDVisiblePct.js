__d(
  "isIntersectionObserverEntryVPVDVisiblePct",
  ["intersectionObserverEntryIsIntersecting"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.5,
      s = { height: 0 };
    function u(t, n) {
      n === void 0 && (n = e);
      var o = r("intersectionObserverEntryIsIntersecting")(t);
      if (o === !1) return !1;
      var a = t.intersectionRect,
        i = t.rootBounds,
        l = t.boundingClientRect;
      return l == null || l.height === 0
        ? !1
        : ((a = a || s),
          (i = i || s),
          a.height / l.height >= n ||
            a.height >= i.height / 2 ||
            t.intersectionRatio > 0.95);
    }
    l.default = u;
  },
  98,
);

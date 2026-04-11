__d(
  "isIntersectionObserverEntryVPVDVisible",
  ["intersectionObserverEntryIsIntersecting"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 200,
      s = { height: 0 };
    function u(t, n) {
      n === void 0 && (n = e);
      var o = r("intersectionObserverEntryIsIntersecting")(t);
      if (o === !1) return !1;
      var a = t.boundingClientRect,
        i = t.intersectionRect,
        l = t.rootBounds;
      return (
        (a = a || s),
        (i = i || s),
        (l = l || s),
        i.height >= n ||
          i.height >= l.height / 2 ||
          i.height === a.height ||
          t.intersectionRatio > 0.95
      );
    }
    l.default = u;
  },
  98,
);

__d(
  "createTransitionSelector",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { properties: { transitionProperty: "x6o7n8i", $$css: !0 } },
      s = {
        root: {
          "@media (prefers-reduced-motion: reduce)_transitionDuration":
            "x12w9bfk",
          $$css: !0,
        },
      };
    function u(t) {
      var n = t.styles,
        r = n.transition,
        o = r.transitionDurationStyles,
        a = r.transitionTimingStyles;
      return function (n) {
        var t = n.duration,
          r = n.timing,
          i = t === "extraShort" ? "fast" : t;
        return [o[i], e.properties, a[r], s.root];
      };
    }
    l.createTransitionSelector = u;
  },
  98,
);

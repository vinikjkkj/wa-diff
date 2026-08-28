__d(
  "createAnimationSelector",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      root: {
        "@media (prefers-reduced-motion: reduce)_animationDuration": "x1u6grsq",
        $$css: !0,
      },
    };
    function s(t) {
      var n = t.styles,
        r = n.animation,
        o = r.animationDurationStyles,
        a = r.animationTimingStyles;
      return function (n) {
        var t = n.duration,
          r = n.timing,
          i = t === "extraShort" ? "fast" : t;
        return [o[i], a[r], e.root];
      };
    }
    l.createAnimationSelector = s;
  },
  98,
);

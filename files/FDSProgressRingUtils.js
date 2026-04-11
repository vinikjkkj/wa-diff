__d(
  "FDSProgressRingUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      function o(e, t) {
        return 1 - 3 * t + 3 * e;
      }
      function a(e, t) {
        return 3 * t - 6 * e;
      }
      function i(e) {
        return 3 * e;
      }
      function l(e, t, n) {
        return ((o(t, n) * e + a(t, n)) * e + i(t)) * e;
      }
      function s(e, t, n) {
        return 3 * o(t, n) * e * e + 2 * a(t, n) * e + i(t);
      }
      function u(t) {
        for (var r = t, o = 0; o < 4; ++o) {
          var a = s(r, e, n);
          if (a === 0) return r;
          var i = l(r, e, n) - t;
          r -= i / a;
        }
        return r;
      }
      return function (o) {
        return e === t && n === r ? o : l(u(o), t, r);
      };
    }
    function l(e) {
      switch (e) {
        case "dark":
          return {
            backgroundColor: "var(--progress-ring-neutral-background)",
            foregroundColor: "var(--progress-ring-neutral-foreground)",
          };
        case "light":
          return {
            backgroundColor: "var(--progress-ring-on-media-background)",
            foregroundColor: "var(--progress-ring-on-media-foreground)",
          };
        case "blue":
          return {
            backgroundColor: "var(--progress-ring-blue-background)",
            foregroundColor: "var(--progress-ring-blue-foreground)",
          };
        case "disabled_DEPRECATED":
        case "disabled":
          return {
            backgroundColor: "var(--progress-ring-disabled-background)",
            foregroundColor: "var(--progress-ring-disabled-foreground)",
          };
      }
    }
    ((i.getCubicBezierPercentageFunc = e), (i.getRingColor = l));
  },
  66,
);

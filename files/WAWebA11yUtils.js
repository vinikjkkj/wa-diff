__d(
  "WAWebA11yUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      var e, t;
      return (e =
        (t = window) == null ||
        (t = t.matchMedia("(prefers-reduced-motion: reduce)")) == null
          ? void 0
          : t.matches) != null
        ? e
        : !1;
    }
    i.getPrefersReducedMotion = e;
  },
  66,
);

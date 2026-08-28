__d(
  "MerResponsiveBreakpoints",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "mobile":
          return "mobile";
        case "tablet":
          return "tablet";
        case "desktop":
          return "desktop";
        case "desktopLarge":
          return "desktopLarge";
      }
    }
    function s(e) {
      switch (e) {
        case "handheld":
          return "mobile";
        case "desktop":
          return "desktop";
      }
    }
    function u(e) {
      switch (e) {
        case "mobile":
          return 0;
        case "tablet":
          return 768;
        case "desktop":
          return 1025;
        case "desktopLarge":
          return 1921;
      }
    }
    function c(e, t) {
      var n = u(e),
        r = u(t);
      return n - r;
    }
    var d = ["desktopLarge", "desktop", "tablet", "mobile"],
      m = { desktopLarge: 1921, desktop: 1025, tablet: 768, mobile: 0 };
    ((l.breakpointName = e),
      (l.deviceClassToBreakpoint = s),
      (l.breakpointNameToValue = u),
      (l.compareBreakpoints = c),
      (l.BREAKPOINT_LOOKUP_SEQUENCE = d),
      (l.DEFAULT_MER_BREAKPOINTS = m));
  },
  98,
);

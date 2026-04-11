__d(
  "getPrefersReducedMotion",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null;
    function l(t) {
      e = t.matches;
    }
    function s() {
      if (e == null)
        if (typeof window.matchMedia == "function") {
          var t = matchMedia("(prefers-reduced-motion: reduce)");
          (t.addListener(l), (e = t.matches));
        } else e = !1;
      return e;
    }
    i.default = s;
  },
  66,
);

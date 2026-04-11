__d(
  "bootstrapWebSession",
  ["WebSession", "WebSessionDefaultTimeoutMs", "performanceNavigationStart"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("performanceNavigationStart")() || e;
      return Number.isInteger(t) ? t : null;
    }
    var s = !1;
    function u(t) {
      if (s !== !0) {
        s = !0;
        var n = e(t);
        n != null &&
          n > 0 &&
          o("WebSession").extend(n + r("WebSessionDefaultTimeoutMs"));
      }
    }
    l.default = u;
  },
  98,
);

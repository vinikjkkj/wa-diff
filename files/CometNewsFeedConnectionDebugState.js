__d(
  "CometNewsFeedConnectionDebugState",
  ["performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = null;
    function c(t) {
      s = { kind: t, time: (e || (e = r("performanceNow")))() };
    }
    function d(t) {
      u = { kind: t, time: (e || (e = r("performanceNow")))() };
    }
    function m() {
      return s;
    }
    function p() {
      return u;
    }
    ((l.recordConnectionUpdateForDebugging = c),
      (l.recordConnectionCleanupForDebugging = d),
      (l.getLastConnectionUpdateForDebugging = m),
      (l.getLastConnectionCleanupForDebugging = p));
  },
  98,
);

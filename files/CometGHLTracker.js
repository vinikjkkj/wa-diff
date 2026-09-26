__d(
  "CometGHLTracker",
  ["DebugOwl", "GHLBox"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set();
    function s(t) {
      (r("DebugOwl").swoop(t),
        e.add(t),
        e.size > o("GHLBox").MinimumHiddenAdsToUpdateLocalStorage &&
          o("GHLBox").s(Date.now()));
    }
    function u(t) {
      return e.has(t);
    }
    function c(t) {
      return e.delete(t);
    }
    function d() {
      return e.size > 0;
    }
    function m() {
      return e.size;
    }
    ((l.m = s), (l.c = u), (l.d = c), (l.b = d), (l.s = m));
  },
  98,
);

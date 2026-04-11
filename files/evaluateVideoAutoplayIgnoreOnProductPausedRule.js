__d(
  "evaluateVideoAutoplayIgnoreOnProductPausedRule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.lastPauseReason,
        n = e.paused;
      return n && t === "product_initiated" ? "IGNORE" : "SKIP";
    }
    ((e.displayName = "evaluateVideoAutoplayIgnoreOnProductPausedRule"),
      (i.default = e));
  },
  66,
);

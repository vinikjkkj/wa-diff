__d(
  "evaluateVideoAutoplayIgnoreOnUserPausedRule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.paused,
        n = e.lastPauseReason;
      return t && (n === "user_initiated" || n === "other_user_initiated")
        ? "IGNORE"
        : "SKIP";
    }
    ((e.displayName = "evaluateVideoAutoplayIgnoreOnUserPausedRule"),
      (i.default = e));
  },
  66,
);

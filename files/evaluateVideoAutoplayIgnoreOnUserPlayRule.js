__d(
  "evaluateVideoAutoplayIgnoreOnUserPlayRule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.paused,
        n = e.muted,
        r = e.lastPlayReason;
      return !n &&
        !t &&
        (r === "user_initiated" || r === "other_user_initiated")
        ? "IGNORE"
        : "SKIP";
    }
    ((e.displayName = "evaluateVideoAutoplayIgnoreOnUserPlayRule"),
      (i.default = e));
  },
  66,
);

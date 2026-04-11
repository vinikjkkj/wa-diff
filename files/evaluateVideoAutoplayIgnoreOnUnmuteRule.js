__d(
  "evaluateVideoAutoplayIgnoreOnUnmuteRule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.muted,
        n = e.paused;
      return !t && !n ? "IGNORE" : "SKIP";
    }
    ((e.displayName = "evaluateVideoAutoplayIgnoreOnUnmuteRule"),
      (i.default = e));
  },
  66,
);

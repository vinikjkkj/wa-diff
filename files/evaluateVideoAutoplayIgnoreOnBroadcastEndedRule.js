__d(
  "evaluateVideoAutoplayIgnoreOnBroadcastEndedRule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.ended,
        n = e.broadcastStatus != null;
      return n && t ? "IGNORE" : "SKIP";
    }
    ((e.displayName = "evaluateVideoAutoplayIgnoreOnBroadcastEndedRule"),
      (i.default = e));
  },
  66,
);

__d(
  "evaluateVideoAutoplayIgnoreOnFrozenRule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.isFrozenPassive,
        n = t.getCurrentState();
      return n ? "IGNORE" : "SKIP";
    }
    ((e.displayName = "evaluateVideoAutoplayIgnoreOnFrozenRule"),
      (i.default = e));
  },
  66,
);

__d(
  "evaluateVideoAutoplayPauseOnHiddenSubtreeRule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.hiddenSubtreePassive;
      return t.getCurrentState().hidden ? "PAUSE" : "SKIP";
    }
    ((e.displayName = "evaluateVideoAutoplayPauseOnHiddenSubtreeRule"),
      (i.default = e));
  },
  66,
);

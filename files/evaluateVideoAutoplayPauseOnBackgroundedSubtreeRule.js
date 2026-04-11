__d(
  "evaluateVideoAutoplayPauseOnBackgroundedSubtreeRule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.hiddenSubtreePassive;
      return t.getCurrentState().backgrounded ? "PAUSE" : "SKIP";
    }
    ((e.displayName = "evaluateVideoAutoplayPauseOnBackgroundedSubtreeRule"),
      (i.default = e));
  },
  66,
);

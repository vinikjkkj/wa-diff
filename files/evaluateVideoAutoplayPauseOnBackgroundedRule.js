__d(
  "evaluateVideoAutoplayPauseOnBackgroundedRule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.hiddenSubtreePassive,
        n = e.isDocumentHiddenOrBlurred || t.getCurrentState().backgrounded;
      return n ? "PAUSE" : "SKIP";
    }
    ((e.displayName = "evaluateVideoAutoplayPauseOnBackgroundedRule"),
      (i.default = e));
  },
  66,
);

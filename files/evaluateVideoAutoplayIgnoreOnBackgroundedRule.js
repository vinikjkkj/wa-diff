__d(
  "evaluateVideoAutoplayIgnoreOnBackgroundedRule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.hiddenSubtreePassive,
        n = e.isDocumentHiddenOrBlurred || t.getCurrentState().backgrounded;
      return n ? "IGNORE" : "SKIP";
    }
    ((e.displayName = "evaluateVideoAutoplayIgnoreOnBackgroundedRule"),
      (i.default = e));
  },
  66,
);

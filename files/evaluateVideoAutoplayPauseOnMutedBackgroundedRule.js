__d(
  "evaluateVideoAutoplayPauseOnMutedBackgroundedRule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = !1;
    function l(e) {
      var t = e.hiddenSubtreePassive,
        n = e.muted,
        r = e.isDocumentHiddenOrBlurred || t.getCurrentState().backgrounded;
      return r && n ? "PAUSE" : "SKIP";
    }
    ((l.displayName = "evaluateVideoAutoplayPauseOnMutedBackgroundedRule"),
      (i.default = l));
  },
  66,
);

__d(
  "evaluateVideoAutoplayPauseOnMutedBackgroundedRule",
  ["ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1;
    function u(e) {
      var t = e.hiddenSubtreePassive,
        n = e.muted,
        r = e.isDocumentHiddenOrBlurred || t.getCurrentState().backgrounded;
      return r && n ? "PAUSE" : "SKIP";
    }
    ((u.displayName = "evaluateVideoAutoplayPauseOnMutedBackgroundedRule"),
      (l.default = u));
  },
  98,
);

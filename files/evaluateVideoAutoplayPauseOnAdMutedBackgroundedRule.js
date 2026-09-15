__d(
  "evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule",
  ["ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1;
    function u(e) {
      var t = e.adClientToken,
        n = e.hiddenSubtreePassive,
        r = e.muted,
        o = e.isDocumentHiddenOrBlurred || n.getCurrentState().backgrounded,
        a = t != null;
      return !o || !r ? "SKIP" : a ? "PAUSE" : "SKIP";
    }
    ((u.displayName = "evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"),
      (l.default = u));
  },
  98,
);

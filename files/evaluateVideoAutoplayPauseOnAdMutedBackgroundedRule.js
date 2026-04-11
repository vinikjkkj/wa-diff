__d(
  "evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = !1;
    function l(e) {
      var t = e.adClientToken,
        n = e.hiddenSubtreePassive,
        r = e.muted,
        o = e.isDocumentHiddenOrBlurred || n.getCurrentState().backgrounded,
        a = t != null;
      return !o || !r ? "SKIP" : a ? "PAUSE" : "SKIP";
    }
    ((l.displayName = "evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"),
      (i.default = l));
  },
  66,
);

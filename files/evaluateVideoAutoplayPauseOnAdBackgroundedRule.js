__d(
  "evaluateVideoAutoplayPauseOnAdBackgroundedRule",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.adClientToken,
        n = e.hiddenSubtreePassive,
        o = e.isDocumentHiddenOrBlurred || n.getCurrentState().backgrounded,
        a = t != null,
        i = r("gkx")("4512");
      return i && o && a ? "PAUSE" : "SKIP";
    }
    ((e.displayName = "evaluateVideoAutoplayPauseOnAdBackgroundedRule"),
      (l.default = e));
  },
  98,
);

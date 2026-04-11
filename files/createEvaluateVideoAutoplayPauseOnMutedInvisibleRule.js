__d(
  "createEvaluateVideoAutoplayPauseOnMutedInvisibleRule",
  ["createEvaluateVideoAutoplayPauseOnInvisibleRule"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("createEvaluateVideoAutoplayPauseOnInvisibleRule")(e);
      function n(e) {
        return e.muted ? t(e) : "SKIP";
      }
      return (
        (n.displayName =
          "evaluateVideoAutoplayPauseOnMutedInvisibleRule:" + e + "%"),
        n
      );
    }
    l.default = e;
  },
  98,
);

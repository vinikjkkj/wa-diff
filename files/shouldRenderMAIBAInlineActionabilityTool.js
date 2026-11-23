__d(
  "shouldRenderMAIBAInlineActionabilityTool",
  [
    "MAIBAGKUtils",
    "MAIBAGovernedReviewUtils",
    "actionabilityFeatureGate",
    "actionabilityTools",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return o("MAIBAGovernedReviewUtils").isGovernedCardResult(t)
        ? !0
        : (o("MAIBAGKUtils").isMAIBARedesignToolActivityEnabled() &&
              (e === "preview_publish" ||
                o("actionabilityTools").isTaskCreationTool(e))) ||
            (o("actionabilityFeatureGate").isTaskCreationAfterTextEnabled(n) &&
              o("actionabilityTools").isTaskCreationTool(e))
          ? !1
          : o("actionabilityTools").isActionabilityTool(e);
    }
    l.default = e;
  },
  98,
);

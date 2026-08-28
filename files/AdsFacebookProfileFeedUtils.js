__d(
  "AdsFacebookProfileFeedUtils",
  ["AdsBuyingTypes", "AdsFacebookProfileFeedConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("AdsFacebookProfileFeedConfig").ELIGIBLE_OBJECTIVES;
      return !!(e != null && t.has(e));
    }
    function s(e) {
      var t = o("AdsFacebookProfileFeedConfig").UNSUPPORTED_OPTIMIZATION_GOALS;
      return !(e != null && t.has(e));
    }
    function u(e) {
      return (
        e === r("AdsBuyingTypes").AUCTION || e === r("AdsBuyingTypes").RESERVED
      );
    }
    ((l.isEligibleObjectiveForFacebookProfileFeedPlacement = e),
      (l.isEligibleOptimizationGoalForFacebookProfileFeedPlacement = s),
      (l.isEligibleBuyingTypeForFacebookProfileFeedPlacement = u));
  },
  98,
);

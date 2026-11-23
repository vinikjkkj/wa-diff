__d(
  "MAIBARecommendationTypeUtils",
  ["SYDGuidanceHubUGPUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e === "scale_good_campaign",
        r = e === "budget_limited",
        a = o(
          "SYDGuidanceHubUGPUtils",
        ).useUGPToGetBudgetRecommendationExtraData(
          n || r ? t : null,
          n ? "scale_good_campaign" : "budget_limited",
        );
      return (n || r) && a != null && a.length === 1;
    }
    l.useIsSingleAdObjectRecommendation = e;
  },
  98,
);

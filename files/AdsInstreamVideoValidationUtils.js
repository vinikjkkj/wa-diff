__d(
  "AdsInstreamVideoValidationUtils",
  [
    "AdsAPIObjectives",
    "AdsInstreamVideosSupportPluginResolver",
    "AdsODAXUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      r("AdsAPIObjectives").BRAND_AWARENESS,
      r("AdsAPIObjectives").REACH,
      r("AdsAPIObjectives").VIDEO_VIEWS,
    ];
    function s(e) {
      var t = o("AdsODAXUtils").maybeTranslateObjective(
          e.objective,
          e.promotedObjectType,
          e.optimizationGoal,
        ),
        n = r("AdsInstreamVideosSupportPluginResolver").resolve({
          objective: t,
          buyingType: e.buyingType,
        });
      return n.isEligibleForExclusiveBuying(e);
    }
    function u(t) {
      var n = o("AdsODAXUtils").maybeTranslateObjective(
        t.objective,
        t.promotedObjectType,
        t.optimizationGoal,
      );
      return e.includes(n);
    }
    ((l.getIsInstreamOnlyAllowed = s),
      (l.getIsInstreamOnlyContextualTargetingAllowed = u));
  },
  98,
);

__d(
  "AdsTargetingRelaxationFactory",
  [
    "AdsBuyingTypes",
    "AdsHECAdvantageAudienceUtils",
    "AdsTargetingRelaxationBAUHECBehaviour",
    "AdsTargetingRelaxationBAUNotRelaxedBehaviour",
    "AdsTargetingRelaxationBAURFBehaviour",
    "AdsTargetingRelaxationBAUService",
    "AdsTargetingRelaxationDTEService",
    "AdsTargetingRelaxationDTaaSService",
    "adsCFSelectedBuyingTypeSelector",
    "adsTargetingRelaxationRolloutSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e.optimizationGoal,
        a = (t = e.regulatedCategories) != null ? t : [],
        i = o(
          "AdsHECAdvantageAudienceUtils",
        ).isCampaignGroupRegulatedAndIneligibleForAdvantageAudience(a);
      if (i)
        return new (r("AdsTargetingRelaxationBAUService"))(
          e.objective,
          null,
          new (r("AdsTargetingRelaxationBAUHECBehaviour"))(),
        );
      var l = r("adsCFSelectedBuyingTypeSelector")();
      return l === r("AdsBuyingTypes").RESERVED
        ? new (r("AdsTargetingRelaxationBAUService"))(
            e.objective,
            null,
            new (r("AdsTargetingRelaxationBAURFBehaviour"))(),
          )
        : o(
              "adsTargetingRelaxationRolloutSelectors",
            ).containsAccountExclusionRuleSelector()
          ? new (r("AdsTargetingRelaxationBAUService"))(
              e.objective,
              null,
              new (r("AdsTargetingRelaxationBAUNotRelaxedBehaviour"))(),
            )
          : n == null ||
              r("AdsTargetingRelaxationDTEService").isEligibleForRelaxation(n)
            ? new (r("AdsTargetingRelaxationDTEService"))(e.objective, n)
            : new (r("AdsTargetingRelaxationDTaaSService"))(e.objective, n);
    }
    l.AdsTargetingRelaxationFactory = e;
  },
  98,
);

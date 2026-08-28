__d(
  "AdsPlacementsOculusPluginUtils",
  [
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAppUrlUtils",
    "AdsODAXUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a = o(
          "AdsReachFrequencyPlacementUtils",
        ).getReachFrequencyDisabledReason(t, e);
      if (a != null) return a;
      var i = [
          r("AdsAPIObjectives").BRAND_AWARENESS,
          r("AdsAPIObjectives").WEBSITE_CONVERSIONS,
          r("AdsAPIObjectives").LINK_CLICKS,
          r("AdsAPIObjectives").REACH,
          r("AdsAPIObjectives").VIDEO_VIEWS,
        ],
        l = o("AdsODAXUtils").maybeTranslateObjective(
          e.objective,
          e.promotedObjectType,
          e.optimizationGoal,
        );
      return i.includes(l)
        ? !(
            (n = e.spec.device_platforms) != null &&
            n.includes(r("AdsAPIDevicePlatform").MOBILE)
          ) ||
          (e.promotedObjectType === r("AdsPromotedObjectTypes").MOBILE_APP &&
            !r("AdsAppUrlUtils").isOculusURL(e.objectStoreURL))
          ? o("AdsPlacementIneligibilityReason").createOculusReason(
              t,
              e.objective,
              e.promotedObjectType,
              e.spec.device_platforms,
              e.objectStoreURL,
            )
          : null
        : o("AdsPlacementIneligibilityReason").createObjectiveReason(
            e.objective,
          );
    }
    l.getOculusVRAdIneligibilityReason = e;
  },
  98,
);

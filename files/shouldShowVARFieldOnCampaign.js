__d(
  "shouldShowVARFieldOnCampaign",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCTVUtils",
    "AdsPromotedObjectTypes",
    "AdsValueGkUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l) {
      return (
        l === void 0 && (l = null),
        o("AdsCTVUtils").isCTVDevicePlatformSelected(l) ||
        (a === r("AdsAPIOptimizationGoals").VALUE &&
          !o("AdsValueGkUtils").isVAREligibleForVOAutobid()) ||
        (e === r("AdsAPIObjectives").OUTCOME_SALES &&
          (n === "PRODUCT_SET_WEBSITE_APP_AND_INSTORE" ||
            t === r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE ||
            t === r("AdsPromotedObjectTypes").IN_STORE))
          ? !1
          : e === r("AdsAPIObjectives").OUTCOME_SALES &&
              (t === r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE ||
                n === "PRODUCT_SET_AND_IN_STORE")
            ? !!r("gkx")("11076")
            : !(
                (e === r("AdsAPIObjectives").OUTCOME_LEADS ||
                  e === r("AdsAPIObjectives").LINK_CLICKS) &&
                t === r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL
              )
      );
    }
    l.shouldShowVARFieldOnCampaign = e;
  },
  98,
);

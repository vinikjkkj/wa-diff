__d(
  "adsTargetingPGDIsEligibleForUnifiedAppSalesAudience",
  [
    "AdsAutomationUnificationUtils",
    "AdsProgressiveDisclosureUtils",
    "adsTargetingPGDIsEligibleForIndividualSetting",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a;
      n === void 0 && (n = null);
      var i = n || e.objective;
      return !o(
        "AdsAutomationUnificationUtils",
      ).isObjectiveEligibleForUnification(i) ||
        !r("adsTargetingPGDIsEligibleForIndividualSetting")(
          i,
          (a = e.special_ad_categories) == null ? void 0 : a.toArray(),
          t,
        )
        ? !1
        : o("AdsProgressiveDisclosureUtils").getIsAutomationUnifiedCampaignType(
            e,
          );
    }
    l.default = e;
  },
  98,
);

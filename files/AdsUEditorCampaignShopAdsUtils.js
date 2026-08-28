__d(
  "AdsUEditorCampaignShopAdsUtils",
  ["AdsAPIObjectives", "AdsODAXUtils", "AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return !1;
    }
    function s(e) {
      return !1;
    }
    function u(e) {
      var t = o("AdsODAXUtils").maybeTranslateObjective(
        e.objective,
        r("AdsPromotedObjectTypes").WEB_AND_SHOP,
      );
      switch (t) {
        case o("AdsAPIObjectives").CONVERSIONS:
        case o("AdsAPIObjectives").PRODUCT_CATALOG_SALES:
          return !0;
        default:
          return !1;
      }
    }
    ((l.isOmnichannelShopAutomaticCampaign = e),
      (l.isShopsAdsIncentiveProgram = s),
      (l.isShopsAdsIncentiveProgramEligible = u));
  },
  98,
);

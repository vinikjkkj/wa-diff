__d(
  "adsSplitTestIsSplitTestSupported",
  [
    "AdsAPIObjectives",
    "AdsApplicationUtils",
    "AdsBuyingTypes",
    "AdsExperimentsFunnelLogger",
    "ads-objectives",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case r("AdsAPIObjectives").APP_INSTALLS:
        case r("AdsAPIObjectives").BRAND_AWARENESS:
        case r("AdsAPIObjectives").CANVAS_APP_INSTALLS:
        case r("AdsAPIObjectives").CONVERSIONS:
        case r("AdsAPIObjectives").EVENT_RESPONSES:
        case r("AdsAPIObjectives").LEAD_GENERATION:
        case r("AdsAPIObjectives").LINK_CLICKS:
        case r("AdsAPIObjectives").MESSAGES:
        case r("AdsAPIObjectives").MOBILE_APP_INSTALLS:
        case r("AdsAPIObjectives").PAGE_LIKES:
        case r("AdsAPIObjectives").PRODUCT_CATALOG_SALES:
        case r("AdsAPIObjectives").POST_ENGAGEMENT:
        case o("ads-objectives").KPIObjectives.SOCIAL_INTERACTION:
        case r("AdsAPIObjectives").REACH:
        case r("AdsAPIObjectives").VIDEO_VIEWS:
        case r("AdsAPIObjectives").OUTCOME_AWARENESS:
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
        case r("AdsAPIObjectives").OUTCOME_LEADS:
        case r("AdsAPIObjectives").OUTCOME_SALES:
          return !0;
        case r("AdsAPIObjectives").STORE_VISITS:
        default:
          return !1;
      }
    }
    function s(t) {
      var n = t.buyingType,
        a = t.objective;
      return (
        o("AdsApplicationUtils").isPowerEditor() &&
          a != null &&
          !e(a) &&
          r("AdsExperimentsFunnelLogger")
            .withoutAccountID()
            .setAction("AB_TEST_UNSUPPORTED_CAMPAIGN_GROUP")
            .addActionPayload("objective", a)
            .addActionPayload("buyingType", n)
            .log(),
        a != null &&
          e(a) &&
          n === r("AdsBuyingTypes").AUCTION &&
          !o("AdsApplicationUtils").isCreativeStudio()
      );
    }
    l.default = s;
  },
  98,
);

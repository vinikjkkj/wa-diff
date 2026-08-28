__d(
  "AdsBwIUtils",
  [
    "AdsAPIObjectives",
    "AdsBwIConfig",
    "AdsCampaignGroupRecordAccessors",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      if (e == null) return !1;
      var n = (t = e.buy_with_integration_partner) != null ? t : "NONE";
      return (
        (e.objective === r("AdsAPIObjectives").OUTCOME_SALES ||
          e.objective === r("AdsAPIObjectives").LINK_CLICKS) &&
        n !== "NONE"
      );
    }
    function s(e, t) {
      var n = r("AdsCampaignGroupRecordAccessors").objective.get(e),
        a = o("AdsBwIConfig").getConfigValues(t);
      return a == null ? !1 : a.objectives.includes(n);
    }
    function u(e) {
      switch (e) {
        case "AMAZON":
          return "AMAZON";
        case "SHEIN":
          return "SHEIN";
        case "SHOPEE_MY":
          return "SHOPEE_MY";
        case "SHOPEE_SG":
          return "SHOPEE_SG";
        case "SHOPEE_TH":
          return "SHOPEE_TH";
        case "SHOPEE_TW":
          return "SHOPEE_TW";
        case "SHOPEE_VN":
          return "SHOPEE_VN";
        case "WALMART":
          return "WALMART";
        case "MELI":
          return "MELI";
        case "LOWES":
          return "LOWES";
        default:
          return "NONE";
      }
    }
    function c() {
      var e = r("gkx")("1577");
      return e;
    }
    ((l.isBwICampaignGroup = e),
      (l.isEligibleBwICampaignGroup = s),
      (l.getBuyWithIntegrationPartnerTypeFromString = u),
      (l.getIsBWIGeneralizationEnabled = c));
  },
  98,
);

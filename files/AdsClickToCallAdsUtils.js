__d(
  "AdsClickToCallAdsUtils",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCTCSmartDefaultUtils",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "tel:";
    function s(e) {
      var t;
      return (
        e.objective === r("AdsAPIObjectives").LINK_CLICKS &&
        ((t = e.isClickToCallAds) != null ? t : !1) &&
        e.optimizationGoal === r("AdsAPIOptimizationGoals").QUALITY_CALL
      );
    }
    function u(e) {
      var t;
      return (
        e.objective === r("AdsAPIObjectives").LEAD_GENERATION &&
        ((t = e.isClickToCallAds) != null ? t : !1)
      );
    }
    function c(e) {
      var t;
      return (
        (e.objective === r("AdsAPIObjectives").CONVERSIONS ||
          e.objective === r("AdsAPIObjectives").OUTCOME_SALES) &&
        ((t = e.isClickToCallAds) != null ? t : !1)
      );
    }
    function d(t) {
      return t == null || t === "" ? !1 : t.startsWith(e);
    }
    function m(e, t) {
      return (
        e === r("AdsAPIObjectives").LEAD_GENERATION &&
        t === r("AdsPromotedObjectTypes").PHONE_CALL
      );
    }
    function p(e) {
      var t = e.find(function (e) {
        var t = e.source;
        return t === "call_ads_source";
      });
      return t
        ? (o(
            "AdsCTCSmartDefaultUtils",
          ).logCTCSmartDefaultingSourceContainsCall(),
          t)
        : null;
    }
    function _(e) {
      return e === r("AdsPromotedObjectTypes").PHONE_CALL;
    }
    var f = "0";
    function g(e) {
      var t,
        n =
          e == null || (t = e.phoneNumber) == null
            ? void 0
            : t.getDisplayNumber();
      return n == null || n === "" ? null : n;
    }
    ((l.getIsCallAdsNewOptimizationUnderTrafficObjective = s),
      (l.getIsClickToCallAdsUnderLeadGenObjective = u),
      (l.getIsClickToCallAdsUnderConversionsOrSalesObjective = c),
      (l.getIsClickToCallAdsLinkValue = d),
      (l.getIsCallAdsLeadGenObjective = m),
      (l.getDefaultFromCallAdsSource = p),
      (l.isPhoneCallPromotedObjectType = _),
      (l.CALL_EXTENSION_PHONE_DATA_ID_PLACEHOLDER = f),
      (l.getValidatedPhoneDisplayNumber = g));
  },
  98,
);

__d(
  "AdsLeadGenConversionValueExpressionUtils",
  [
    "$InternalEnum",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsPromotedObjectTypes",
    "DateConsts",
    "DateTime",
    "LeadAdsValueExpressionStrings",
    "ValueAdjustmentRuleAdjustmentSignType",
    "isStringNullOrEmpty",
    "unixTimestampFromDate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100,
      s = 20,
      u = 90,
      c = 20,
      d = 1e3,
      m = [r("AdsAPIObjectives").OUTCOME_LEADS],
      p = [r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL],
      _ = [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS],
      f = ["LEAD"],
      g = n("$InternalEnum").Mirrored(["SAME_WEIGHT", "DIFFERENT_WEIGHT"]),
      h = n("$InternalEnum")({
        WEBSITE_CONVERSIONS: "Website conversions",
        CALL_CONVERSIONS: "Call conversions",
        UNDEFINED: "Undefined",
      }),
      y = n("$InternalEnum")({
        INCREASE_BY: "Increase by",
        DECREASE_BY: "Decrease by",
        UNDEFINED: "Undefined",
      });
    function C(e, t, n, r, o, a, i) {
      return !i ||
        !m.includes(t) ||
        !p.includes(n) ||
        !_.includes(r) ||
        !a ||
        !f.includes(o)
        ? !1
        : e
          ? v()
          : b();
    }
    function b() {
      return !0;
    }
    function v() {
      return !1;
    }
    function S(e, t) {
      var n = e == null || e < 1 ? c : Math.round(e);
      return (
        n < c && (n = c),
        t === r("ValueAdjustmentRuleAdjustmentSignType").INCREASE &&
          n > d &&
          (n = d),
        t === r("ValueAdjustmentRuleAdjustmentSignType").DECREASE &&
          n > u &&
          (n = u),
        n
      );
    }
    function R(e, t, n) {
      return t == null
        ? null
        : n === g.DIFFERENT_WEIGHT && t >= 0 && t < 20
          ? o("LeadAdsValueExpressionStrings")
              .MIN_ADJUSTMENT_WEIGHT_AUTO_CORRECTION_MSG
          : n === g.DIFFERENT_WEIGHT &&
              e === r("ValueAdjustmentRuleAdjustmentSignType").INCREASE &&
              t > 1e3
            ? o("LeadAdsValueExpressionStrings")
                .MAX_INCREASE_ADJUSTMENT_WEIGHT_AUTO_CORRECTION_MSG
            : n === g.DIFFERENT_WEIGHT &&
                e === r("ValueAdjustmentRuleAdjustmentSignType").DECREASE &&
                t > 90
              ? o("LeadAdsValueExpressionStrings")
                  .MAX_DECREASE_ADJUSTMENT_WEIGHT_AUTO_CORRECTION_MSG
              : null;
    }
    function L(e, t) {
      if (e == null) return !1;
      if (!r("isStringNullOrEmpty")(t)) {
        var n = r("unixTimestampFromDate")(t),
          a = r("DateTime").fromLegacyArgs(n * o("DateConsts").MS_PER_SEC, e),
          i = r("DateTime").now(e);
        return i.getUnixTimestamp() < a.getUnixTimestamp();
      }
      return !0;
    }
    function E(e) {
      switch (e) {
        case r("AdCampaignDestination").WEBSITE:
          return h.WEBSITE_CONVERSIONS;
        case r("AdCampaignDestination").PHONE_CALL:
          return h.CALL_CONVERSIONS;
      }
      return h.UNDEFINED;
    }
    function k(e) {
      switch (e) {
        case r("ValueAdjustmentRuleAdjustmentSignType").INCREASE:
          return y.INCREASE_BY;
        case r("ValueAdjustmentRuleAdjustmentSignType").DECREASE:
          return y.DECREASE_BY;
      }
      return y.UNDEFINED;
    }
    ((l.DEFAULT_WEBSITE_CONVERSION_ADJUSTMENT_WEIGHT = e),
      (l.DEFAULT_PHONE_CALL_CONVERSION_ADJUSTMENT_WEIGHT = s),
      (l.LeadAdsDestinationValue = g),
      (l.isCampaignEligibleForLeadAdsValueExpression = C),
      (l.isAccountEligibleForLeadGenConversionValueExpression = b),
      (l.isValueExpressionBulkEditingEnabled = v),
      (l.resetAdjustmentWeightIfInvalid = S),
      (l.getAdjustmentWeightAutoCorrectionInfoMessage = R),
      (l.isCampaignOngoing = L),
      (l.getConversionLocationFbtEnum = E),
      (l.getAdjustmentDirectionFbtEnum = k));
  },
  98,
);

__d(
  "AdsLeadGenImInterestedCtaUtils",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsPromotedObjectTypes",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return String(s._(/*BTDS*/ ""));
    }
    function u(e) {
      var t;
      return (
        (e === r("AdsAPIObjectives").LEAD_GENERATION ||
          e === r("AdsAPIObjectives").OUTCOME_LEADS) &&
        ((t = r("qex")._("417")) != null ? t : !1)
      );
    }
    function c(t, n) {
      return t !== "SIGN_UP" || !u(n) ? null : e();
    }
    function d(e, t, n) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_LEADS &&
        (t === r("AdsPromotedObjectTypes").PIXEL ||
          n === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS)
      );
    }
    function m(e, t, n) {
      var o;
      return d(e, t, n) && ((o = r("qex")._("5140")) != null ? o : !1);
    }
    function p(t, n, r, o) {
      return t !== "SIGN_UP" || !m(n, r, o) ? null : e();
    }
    ((l.isImInterestedCtaEnabledForObjective = u),
      (l.getImInterestedCtaLabelIfApplicable = c),
      (l.isOffsiteLeadGenAd = d),
      (l.isImInterestedCtaEnabledForOffsiteLeadGen = m),
      (l.getImInterestedCtaLabelForOffsiteIfApplicable = p));
  },
  226,
);

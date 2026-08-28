__d(
  "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsPreFlightHVSGuidanceUtils",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      if ((e === void 0 && (e = !0), e)) {
        var n;
        return (n = r("qex")._("3988")) != null ? n : !1;
      }
      return (t = r("qex")._("3965")) != null ? t : !1;
    }
    function s(e) {
      var t;
      if ((e === void 0 && (e = !1), e)) {
        var n;
        return (n = r("qex")._("4651")) != null ? n : !1;
      }
      return (t = r("qex")._("4659")) != null ? t : !1;
    }
    function u(e) {
      var t;
      if ((e === void 0 && (e = !1), e)) {
        var n;
        return (n = r("qex")._("4714")) != null ? n : !1;
      }
      return (t = r("qex")._("4717")) != null ? t : !1;
    }
    function c(e) {
      e === void 0 && (e = !1);
      var t = s(e),
        n = u(e);
      return t || n;
    }
    function d(e, t, n, a, i, l) {
      var s =
          e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
          e === r("AdsAPIObjectives").LINK_CLICKS ||
          e === r("AdsAPIObjectives").OUTCOME_SALES,
        u =
          l === r("AdsAPIOptimizationGoals").CONVERSATIONS ||
          l === r("AdsAPIOptimizationGoals").REPLIES,
        c =
          a != null &&
          o(
            "AdsPreFlightHVSGuidanceUtils",
          ).SUPPORTED_DESTINATION_TYPES.includes(a);
      return !(!c || !s || !u || t || n !== "lifetime" || i == null);
    }
    ((l.enableCTXAMBusinessHourDaypartingOrganicHours = e),
      (l.enableCTXAMBusinessHourDaypartingVerticalDefaulting = s),
      (l.enableCTXAMBusinessHourDaypartingPipelineEligibleDefaulting = u),
      (l.enableCTXAMBusinessHourDaypartingDefaulting = c),
      (l.eligibleForCTXAMBusinessHourDaypartingForL2 = d));
  },
  98,
);

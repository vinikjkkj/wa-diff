__d(
  "AdsTargetFrequencyInAuctionUtils",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBulkValueUtils",
    "AdsBuyingTypes",
    "AdsFrequencyControlCompatibilityUtils",
    "AdsFrequencyControlGKUtils",
    "AdsODAXUtils",
    "DateTime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      if (e !== r("AdsBuyingTypes").AUCTION) return !1;
      var i = o("AdsODAXUtils").maybeTranslateObjective(
        t != null ? t : r("AdsAPIObjectives").NONE,
        a,
        n,
      );
      switch (i) {
        case r("AdsAPIObjectives").REACH:
          return n === r("AdsAPIOptimizationGoals").REACH;
        case r("AdsAPIObjectives").VIDEO_VIEWS:
          return n === r("AdsAPIOptimizationGoals").THRUPLAY || _(n);
        case r("AdsAPIObjectives").BRAND_AWARENESS:
          return _(n);
      }
      return !1;
    }
    function s(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_AWARENESS ||
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
      );
    }
    function u(e) {
      return (
        e === r("AdsAPIOptimizationGoals").REACH &&
        o(
          "AdsFrequencyControlGKUtils",
        ).isAccountEligibleForTargetFrequencyAuctionDefaulting()
      );
    }
    function c(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_AWARENESS &&
        o(
          "AdsFrequencyControlGKUtils",
        ).isAccountEligibleForTargetFrequencyAuctionDefaulting()
      );
    }
    function d(e) {
      return e === r("AdsAPIObjectives").OUTCOME_AWARENESS
        ? r("AdsAPIOptimizationGoals").REACH
        : r("AdsAPIOptimizationGoals").THRUPLAY;
    }
    function m(t, n, a, i) {
      return t === "TARGET"
        ? e(r("AdsBuyingTypes").AUCTION, n, a, i)
        : o(
            "AdsFrequencyControlCompatibilityUtils",
          ).isCompatibleWithFrequencyControl(n, a, i);
    }
    function p(e, t) {
      var n = r("DateTime").now(t).getUnixTimestampSeconds();
      return e.some(function (e) {
        var o;
        if (
          e == null ||
          e.start_time == null ||
          ((o = e.publish_status) == null ? void 0 : o.isNew) === !0
        )
          return !1;
        var a = r("DateTime")
          .createFromISOString(e.start_time, t)
          .getUnixTimestampSeconds();
        return a > 0 && a < n;
      });
    }
    function _(e) {
      return e === r("AdsAPIOptimizationGoals").AD_RECALL_LIFT
        ? o(
            "AdsFrequencyControlGKUtils",
          ).isAccountEligibleForTargetFrequencyAuctionWithARL()
        : e === r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS
          ? o(
              "AdsFrequencyControlGKUtils",
            ).isAccountEligibleForTargetFrequencyAuctionWithAVT()
          : !1;
    }
    function f(e) {
      return e === r("AdsAPIOptimizationGoals").THRUPLAY
        ? !0
        : e === r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS
          ? o(
              "AdsFrequencyControlGKUtils",
            ).isAccountEligibleForTargetFrequencyAuctionWithAVT()
          : !1;
    }
    function g(e) {
      return (
        e === "TARGET" &&
        o(
          "AdsFrequencyControlGKUtils",
        ).isAccountEligibleForTargetFrequencyLookalikeFrictionMediumRock()
      );
    }
    function h(e) {
      return o("AdsBulkValueUtils").getUniformValueFrom(
        e != null ? e : [],
        function (e) {
          return e;
        },
        null,
      );
    }
    ((l.isCompatibleWithTargetFrequencyInAuction = e),
      (l.isTargetFrequencyInAuctionEligibleObjective = s),
      (l.shouldEnableTargetFrequencyByDefault = u),
      (l.isCampaignGroupEligibleForLifetimeBudgetDefaulting = c),
      (l.getDefaultOptimizationGoalForTargetFrequency = d),
      (l.isCompatibleWithFrequencyControlType = m),
      (l.isCampaignGroupMidFlightFromCombinedCampaigns = p),
      (l.isEligibleForTargetFrequencyAuctionExpansionGoal = _),
      (l.shouldRenderTargetFrequencyCheckbox = f),
      (l.isEligibleForTargetFrequencyLookalikeMediumRock = g),
      (l.getUniformFrequencyControlType = h));
  },
  98,
);

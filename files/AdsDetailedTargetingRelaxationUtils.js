__d(
  "AdsDetailedTargetingRelaxationUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsHECAdvantageAudienceUtils",
    "AdsODAXUtils",
    "AdsTargetingAsSignalUtils",
    "adsTargetingRelaxationRolloutSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map([
        [
          r("AdsAPIObjectives").CONVERSIONS,
          new Set([(e = r("AdsAPIOptimizationGoals")).CONVERSATIONS]),
        ],
        [
          r("AdsAPIObjectives").APP_INSTALLS,
          new Set([e.VALUE, e.OFFSITE_CONVERSIONS, e.APP_INSTALLS]),
        ],
        [r("AdsAPIObjectives").MESSAGES, new Set([e.CONVERSATIONS, e.REPLIES])],
      ]);
    function u(e, t) {
      var n = o("AdsTargetingAsSignalUtils").isTargetingAsSignalBitSetForType(
        e.targeting_as_signal,
        0,
      );
      if (o("AdsTargetingAsSignalUtils").isCampaignGroupRegulated(t)) {
        var r = o(
          "AdsHECAdvantageAudienceUtils",
        ).isCampaignGroupRegulatedAndIneligibleForAdvantageAudience(t);
        if (r) return !1;
      }
      return n;
    }
    function c(e, t) {
      var n = o("AdsAPICampaignRecordUtils").getPromotedObjectType(t, e);
      return o("AdsODAXUtils").maybeTranslateObjective(
        t,
        n,
        e.optimization_goal,
      );
    }
    function d(e, t) {
      return e && t
        ? e.some(function (e) {
            var n = c(e, t);
            return m(n, e.optimization_goal);
          })
        : !1;
    }
    function m(e, t) {
      var n;
      if (
        o(
          "adsTargetingRelaxationRolloutSelectors",
        ).containsAccountExclusionRuleSelector() ||
        e == null ||
        t == null
      )
        return !1;
      var r = (n = s.get(e)) == null ? void 0 : n.has(t);
      return s.has(e) && r != null && r === !0;
    }
    ((l.isCampaignDTaaS = u),
      (l.getEffectiveObjective = c),
      (l.isAppInstallsOrMessagesObjective = d));
  },
  98,
);

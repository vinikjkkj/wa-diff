__d(
  "adsTargetingPGDIsEligibleForIndividualSetting",
  [
    "AdsAPIObjectives",
    "AdsHECAdvantageAudienceUtils",
    "AdsScalingPGDBundle1AwarenessExperimentUtils",
    "AdsScalingPGDBundle1TrafficExperimentUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a) {
        var e = o(
          "AdsHECAdvantageAudienceUtils",
        ).isCampaignGroupRegulatedAndIneligibleForAutomationUnification(n);
        return (
          (t === r("AdsAPIObjectives").APP_INSTALLS ||
            t === r("AdsAPIObjectives").OUTCOME_SALES ||
            t === r("AdsAPIObjectives").OUTCOME_LEADS ||
            t === r("AdsAPIObjectives").LEAD_GENERATION ||
            t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
            o(
              "AdsScalingPGDBundle1AwarenessExperimentUtils",
            ).isAwarenessObjective(t) ||
            o("AdsScalingPGDBundle1TrafficExperimentUtils").isTrafficObjective(
              t,
            )) &&
          !e &&
          a !== !0
        );
      },
      s = e;
    l.default = s;
  },
  98,
);

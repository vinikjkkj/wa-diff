__d(
  "AdsEventsManagerSequencedConversionsCreationEligibilityUtils",
  [
    "AdCampaignLJORollout",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsPromotedObjectTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (
        e === r("AdsAPIObjectives").OUTCOME_SALES &&
        t === r("AdsPromotedObjectTypes").PIXEL &&
        n === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
      ) {
        if (r("gkx")("9170")) return r("AdCampaignLJORollout").GA;
        if (r("gkx")("17960")) return r("AdCampaignLJORollout").OPEN_BETA;
        if (r("gkx")("19718")) return r("AdCampaignLJORollout").PRE_BETA;
        if (r("gkx")("16532")) return r("AdCampaignLJORollout").ALPHA_TWO;
      }
      return r("AdCampaignLJORollout").NO_ACCESS;
    }
    function s() {
      return (
        r("gkx")("9170") ||
        r("gkx")("17960") ||
        r("gkx")("19718") ||
        r("gkx")("16532")
      );
    }
    ((l.isSetupEligibleForSequencedEventCreation = e),
      (l.isGKEnabledForSequencedEventCreation = s));
  },
  98,
);

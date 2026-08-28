__d(
  "AdsOutcomeEngagementPhoneCallCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsLinkClicksCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsLinkClicksCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "engagement/phone_call",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            promotedObjectType: r("AdsPromotedObjectTypes").PHONE_CALL,
          },
          getDefaultOptimizationGoal: function (t) {
            return r("AdsAPIOptimizationGoals").QUALITY_CALL;
          },
          getSupportedOptimizationGoals: function () {
            return [r("AdsAPIOptimizationGoals").QUALITY_CALL];
          },
          getCanUseAveragePricePacing: function (t, n) {
            return !1;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);

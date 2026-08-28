__d(
  "AdsConversionsFacebookDonationCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "conversions_facebook_donation",
          pivots: {
            objective: r("AdsAPIObjectives").CONVERSIONS,
            promotedObjectType: r("AdsPromotedObjectTypes").DONATION,
          },
          getDefaultOptimizationGoal: function (t) {
            var e = t.account;
            return r("gkx")("21757")
              ? r("AdsAPIOptimizationGoals").ONSITE_CONVERSIONS
              : r("AdsAPIOptimizationGoals").LINK_CLICKS;
          },
          getSupportedOptimizationGoals: function (t) {
            var e = t.account,
              n = [
                r("AdsAPIOptimizationGoals").LINK_CLICKS,
                r("AdsAPIOptimizationGoals").IMPRESSIONS,
                r("AdsAPIOptimizationGoals").REACH,
              ];
            return (
              r("gkx")("21757") &&
                n.unshift(r("AdsAPIOptimizationGoals").ONSITE_CONVERSIONS),
              n
            );
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);

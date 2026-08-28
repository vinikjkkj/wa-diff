__d(
  "AdsOutcomeSalesFacebookDonationCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsConversionsFacebookDonationCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsFacebookDonationCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_sales_facebook_donation",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").DONATION,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);

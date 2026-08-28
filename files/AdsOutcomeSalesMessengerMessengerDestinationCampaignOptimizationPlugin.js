__d(
  "AdsOutcomeSalesMessengerMessengerDestinationCampaignOptimizationPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsOutcomeSalesMessengerCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsOutcomeSalesMessengerCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_sales_messenger_messenger_destination",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
            destinationType: r("AdCampaignDestination").MESSENGER,
          },
          getCanUseConversionWindow: function (t) {
            return t ===
              r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION
              ? !0
              : t === r("AdsAPIOptimizationGoals").VALUE
                ? !1
                : r(
                    "AdsOutcomeSalesMessengerCampaignOptimizationPlugin",
                  ).getCanUseConversionWindow(t);
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);

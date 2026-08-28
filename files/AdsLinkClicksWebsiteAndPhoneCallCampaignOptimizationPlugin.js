__d(
  "AdsLinkClicksWebsiteAndPhoneCallCampaignOptimizationPlugin",
  [
    "AdCampaignDestination",
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
          key: "link_clicks/website_and_phone_call",
          pivots: {
            objective: r("AdsAPIObjectives").LINK_CLICKS,
            promotedObjectType: r("AdsPromotedObjectTypes")
              .WEBSITE_AND_PHONE_CALL,
            destinationType: r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL,
          },
          getDefaultOptimizationGoal: function (t) {
            return r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS;
          },
          getSupportedOptimizationGoals: function () {
            return [r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS];
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);

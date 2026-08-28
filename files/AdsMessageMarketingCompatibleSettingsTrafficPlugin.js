__d(
  "AdsMessageMarketingCompatibleSettingsTrafficPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsMessageMarketingCompatibleSettingsPluginCommon",
    "AdsMessageMarketingCompatibleSettingsPluginType",
    "AdsPromotedObjectTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessageMarketingCompatibleSettingsPluginCommon"),
        {
          type: "messageMarketingCompatibleSettings",
          key: "traffic",
          pivots: {
            channel: o("AdsMessageMarketingCompatibleSettingsPluginType")
              .AdsMessageMarketingCompatibleSettingsChannelType.WHATSAPP,
            objective: r("AdsAPIObjectives").LINK_CLICKS,
          },
          getCampaignGroupCompatibleSettingsForPrimaryFields: function () {
            return babelHelpers.extends(
              {},
              r(
                "AdsMessageMarketingCompatibleSettingsPluginCommon",
              ).getCampaignGroupCompatibleSettingsForPrimaryFields(),
              { objective: [r("AdsAPIObjectives").LINK_CLICKS] },
            );
          },
          getCampaignCompatibleSettingsForPrimaryFields: function () {
            return babelHelpers.extends(
              {},
              r(
                "AdsMessageMarketingCompatibleSettingsPluginCommon",
              ).getCampaignCompatibleSettingsForPrimaryFields(),
              {
                promotedObjectType: [
                  r("AdsPromotedObjectTypes").WEBSITE,
                  r("AdsPromotedObjectTypes").WEB_AND_APP,
                  r("AdsPromotedObjectTypes").MOBILE_APP,
                ],
              },
            );
          },
          getCampaignCompatibleSettingsForSecondaryFields: function () {
            return babelHelpers.extends(
              {},
              r(
                "AdsMessageMarketingCompatibleSettingsPluginCommon",
              ).getCampaignCompatibleSettingsForSecondaryFields(),
              {
                optimizationGoal: r("gkx")("3260")
                  ? [
                      r("AdsAPIOptimizationGoals").LINK_CLICKS,
                      r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS,
                    ]
                  : [r("AdsAPIOptimizationGoals").LINK_CLICKS],
              },
            );
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);

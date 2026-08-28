__d(
  "AdsMessageMarketingCompatibleSettingsLeadsPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsMessageMarketingCompatibleSettingsPluginCommon",
    "AdsMessageMarketingCompatibleSettingsPluginType",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessageMarketingCompatibleSettingsPluginCommon"),
        {
          type: "messageMarketingCompatibleSettings",
          key: "leads",
          pivots: {
            channel: o("AdsMessageMarketingCompatibleSettingsPluginType")
              .AdsMessageMarketingCompatibleSettingsChannelType.WHATSAPP,
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
          },
          getCampaignGroupCompatibleSettingsForPrimaryFields: function () {
            return babelHelpers.extends(
              {},
              r(
                "AdsMessageMarketingCompatibleSettingsPluginCommon",
              ).getCampaignGroupCompatibleSettingsForPrimaryFields(),
              { objective: [r("AdsAPIObjectives").OUTCOME_LEADS] },
            );
          },
          getCampaignCompatibleSettingsForPrimaryFields: function () {
            var e = babelHelpers.extends(
              {},
              r(
                "AdsMessageMarketingCompatibleSettingsPluginCommon",
              ).getCampaignCompatibleSettingsForPrimaryFields(),
              { promotedObjectType: [r("AdsPromotedObjectTypes").PIXEL] },
            );
            return e;
          },
          getCampaignCompatibleSettingsForSecondaryFields: function () {
            return babelHelpers.extends(
              {},
              r(
                "AdsMessageMarketingCompatibleSettingsPluginCommon",
              ).getCampaignCompatibleSettingsForSecondaryFields(),
              {
                optimizationGoal: [
                  r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
                ],
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

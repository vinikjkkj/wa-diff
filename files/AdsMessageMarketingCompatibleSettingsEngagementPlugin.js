__d(
  "AdsMessageMarketingCompatibleSettingsEngagementPlugin",
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
          key: "engagement",
          pivots: {
            channel: o("AdsMessageMarketingCompatibleSettingsPluginType")
              .AdsMessageMarketingCompatibleSettingsChannelType.WHATSAPP,
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
          },
          getCampaignGroupCompatibleSettingsForPrimaryFields: function () {
            var e = babelHelpers.extends(
              {},
              r(
                "AdsMessageMarketingCompatibleSettingsPluginCommon",
              ).getCampaignGroupCompatibleSettingsForPrimaryFields(),
              { objective: [] },
            );
            return (
              r("gkx")("11321") &&
                (e.objective = e.objective.concat([
                  r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
                ])),
              e
            );
          },
          getCampaignCompatibleSettingsForPrimaryFields: function () {
            var e = babelHelpers.extends(
              {},
              r(
                "AdsMessageMarketingCompatibleSettingsPluginCommon",
              ).getCampaignCompatibleSettingsForPrimaryFields(),
              { promotedObjectType: [r("AdsPromotedObjectTypes").WHATSAPP] },
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
                optimizationGoal: [r("AdsAPIOptimizationGoals").CONVERSATIONS],
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

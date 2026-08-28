__d(
  "AdsMessageMarketingCompatibleSettingsMessengerSalesPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsMessageMarketingCompatibleSettingsPluginCommon",
    "AdsMessageMarketingCompatibleSettingsPluginType",
    "AdsPromotedObjectTypes",
    "AdsSmartPromotion",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessageMarketingCompatibleSettingsPluginCommon"),
        {
          type: "messageMarketingCompatibleSettings",
          key: "messenger_sales",
          pivots: {
            channel: o("AdsMessageMarketingCompatibleSettingsPluginType")
              .AdsMessageMarketingCompatibleSettingsChannelType.MESSENGER,
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
          },
          getCampaignGroupCompatibleSettingsForPrimaryFields: function () {
            return babelHelpers.extends(
              {},
              r(
                "AdsMessageMarketingCompatibleSettingsPluginCommon",
              ).getCampaignGroupCompatibleSettingsForPrimaryFields(),
              {
                objective: [r("AdsAPIObjectives").OUTCOME_SALES],
                hasProductCatalog: [!1],
                smartPromotionType: [
                  void 0,
                  r("AdsSmartPromotion").GUIDED_CREATION,
                ],
              },
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
                  r("AdsPromotedObjectTypes").PIXEL,
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

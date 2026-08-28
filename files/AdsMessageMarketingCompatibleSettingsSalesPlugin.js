__d(
  "AdsMessageMarketingCompatibleSettingsSalesPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsMessageMarketingCompatibleSettingsPluginCommon",
    "AdsMessageMarketingCompatibleSettingsPluginType",
    "AdsPromotedObjectTypes",
    "AdsSmartPromotion",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessageMarketingCompatibleSettingsPluginCommon"),
        {
          type: "messageMarketingCompatibleSettings",
          key: "sales",
          pivots: {
            channel: o("AdsMessageMarketingCompatibleSettingsPluginType")
              .AdsMessageMarketingCompatibleSettingsChannelType.WHATSAPP,
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
          },
          getCampaignGroupCompatibleSettingsForPrimaryFields: function () {
            var e = babelHelpers.extends(
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
            if (r("gkx")("13496")) {
              var t;
              e.smartPromotionType =
                (t = e.smartPromotionType) == null
                  ? void 0
                  : t.concat([r("AdsSmartPromotion").AUTOMATED_SHOPPING_ADS]);
            }
            return e;
          },
          getCampaignCompatibleSettingsForPrimaryFields: function () {
            var e;
            return babelHelpers.extends(
              {},
              r(
                "AdsMessageMarketingCompatibleSettingsPluginCommon",
              ).getCampaignCompatibleSettingsForPrimaryFields(),
              {
                promotedObjectType: [
                  (e = r("AdsPromotedObjectTypes")).WEBSITE,
                  e.PIXEL,
                  e.WEB_AND_APP,
                  e.MOBILE_APP,
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
                  r("AdsAPIOptimizationGoals").LINK_CLICKS,
                  r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
                  r("AdsAPIOptimizationGoals").VALUE,
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

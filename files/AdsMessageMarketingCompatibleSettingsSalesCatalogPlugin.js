__d(
  "AdsMessageMarketingCompatibleSettingsSalesCatalogPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsMessageMarketingCompatibleSettingsPluginType",
    "AdsMessageMarketingCompatibleSettingsSalesPlugin",
    "AdsPromotedObjectTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessageMarketingCompatibleSettingsSalesPlugin"),
        {
          type: "messageMarketingCompatibleSettings",
          key: "sales/catalog",
          pivots: {
            channel: o("AdsMessageMarketingCompatibleSettingsPluginType")
              .AdsMessageMarketingCompatibleSettingsChannelType.WHATSAPP,
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            hasProductCatalog: !0,
          },
          getCampaignGroupCompatibleSettingsForPrimaryFields: function () {
            var e = babelHelpers.extends(
              {},
              r(
                "AdsMessageMarketingCompatibleSettingsSalesPlugin",
              ).getCampaignGroupCompatibleSettingsForPrimaryFields(),
              { hasProductCatalog: [!1], hasIncompatibleProductCatalog: [!1] },
            );
            return (
              r("gkx")("13496") &&
                ((e.hasProductCatalog = [!0, !1]),
                (e.hasIncompatibleProductCatalog = [!0, !1])),
              e
            );
          },
          getCampaignCompatibleSettingsForPrimaryFields: function () {
            var e = babelHelpers.extends(
              {},
              r(
                "AdsMessageMarketingCompatibleSettingsSalesPlugin",
              ).getCampaignCompatibleSettingsForPrimaryFields(),
              {
                promotedObjectType: [
                  r("AdsPromotedObjectTypes").PIXEL,
                  r("AdsPromotedObjectTypes").PRODUCT_SET,
                  "PRODUCT_SET_AND_WEBSITE",
                  "PRODUCT_SET_AND_APP",
                  "PRODUCT_SET_AND_OMNICHANNEL",
                ],
              },
            );
            return e;
          },
          getCampaignCompatibleSettingsForSecondaryFields: function () {
            var e = babelHelpers.extends(
              {},
              r(
                "AdsMessageMarketingCompatibleSettingsSalesPlugin",
              ).getCampaignCompatibleSettingsForSecondaryFields(),
              {
                optimizationGoal: [
                  r("AdsAPIOptimizationGoals").LINK_CLICKS,
                  r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
                ],
              },
            );
            return (
              r("gkx")("13496") &&
                (e.optimizationGoal = [].concat(e.optimizationGoal, [
                  r("AdsAPIOptimizationGoals").VALUE,
                ])),
              e
            );
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);

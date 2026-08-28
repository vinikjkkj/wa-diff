__d(
  "AdsMessageMarketingCompatibleSettingsMessengerSalesCatalogPlugin",
  [
    "AdsAPIObjectives",
    "AdsMessageMarketingCompatibleSettingsMessengerSalesPlugin",
    "AdsMessageMarketingCompatibleSettingsPluginType",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessageMarketingCompatibleSettingsMessengerSalesPlugin"),
        {
          type: "messageMarketingCompatibleSettings",
          key: "messenger_sales/catalog",
          pivots: {
            channel: o("AdsMessageMarketingCompatibleSettingsPluginType")
              .AdsMessageMarketingCompatibleSettingsChannelType.MESSENGER,
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            hasProductCatalog: !0,
          },
          getCampaignGroupCompatibleSettingsForPrimaryFields: function () {
            return babelHelpers.extends(
              {},
              r(
                "AdsMessageMarketingCompatibleSettingsMessengerSalesPlugin",
              ).getCampaignGroupCompatibleSettingsForPrimaryFields(),
              { hasProductCatalog: [!1], hasIncompatibleProductCatalog: [!1] },
            );
          },
          getCampaignCompatibleSettingsForPrimaryFields: function () {
            return babelHelpers.extends(
              {},
              r(
                "AdsMessageMarketingCompatibleSettingsMessengerSalesPlugin",
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
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);

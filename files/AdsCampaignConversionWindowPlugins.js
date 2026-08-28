__d(
  "AdsCampaignConversionWindowPlugins",
  [
    "AdsCampaignConversionsConversionsCostCapPixelConversionWindowPlugin",
    "AdsCampaignConversionsPixelConversionWindowPlugin",
    "AdsCampaignProductCatalogSalesConversionsCostCapProductSetConversionWindowPlugin",
    "AdsCampaignProductCatalogSalesConversionsProductSetConversionWindowPlugin",
    "AdsCampaignValueMinROASConversionWindowPlugin",
    "AdsDefaultConversionWindowPlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n(
          "AdsCampaignConversionsConversionsCostCapPixelConversionWindowPlugin",
        ),
        n("AdsCampaignConversionsPixelConversionWindowPlugin"),
        n("AdsDefaultConversionWindowPlugin"),
        n(
          "AdsCampaignProductCatalogSalesConversionsCostCapProductSetConversionWindowPlugin",
        ),
        n(
          "AdsCampaignProductCatalogSalesConversionsProductSetConversionWindowPlugin",
        ),
        n("AdsCampaignValueMinROASConversionWindowPlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);

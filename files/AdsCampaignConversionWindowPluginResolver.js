__d(
  "AdsCampaignConversionWindowPluginResolver",
  [
    "AdsCampaignConversionWindowPluginType",
    "AdsCampaignConversionWindowPlugins",
    "adsPluginResolverFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsPluginResolverFactory")(function () {
        return n("AdsCampaignConversionWindowPlugins").getArray();
      }, o("AdsCampaignConversionWindowPluginType").order),
      s = e;
    l.default = s;
  },
  98,
);

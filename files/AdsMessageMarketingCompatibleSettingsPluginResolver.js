__d(
  "AdsMessageMarketingCompatibleSettingsPluginResolver",
  [
    "AdsMessageMarketingCompatibleSettingsPluginType",
    "AdsMessageMarketingCompatibleSettingsPlugins",
    "adsPluginResolverFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsPluginResolverFactory")(function () {
        return n("AdsMessageMarketingCompatibleSettingsPlugins").getArray();
      }, o("AdsMessageMarketingCompatibleSettingsPluginType").order),
      s = e;
    l.default = s;
  },
  98,
);

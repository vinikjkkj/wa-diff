__d(
  "MessageMarketingUpstreamSettings",
  [
    "AdsMessageMarketingCompatibleSettingsPluginType",
    "getPluginForMessageMarketingCompatibleSettings",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        return babelHelpers.extends({}, u(t, n), c(t, n));
      },
      s = function (n, r) {
        var t = new Map();
        for (var o of r) t.set(o, e(n, o));
        return t;
      },
      u = function (t, n) {
        var e = r("getPluginForMessageMarketingCompatibleSettings")(t, n),
          o = e.getCampaignGroupCompatibleSettingsForPrimaryFields,
          a = e.getCampaignGroupCompatibleSettingsForSecondaryFields;
        return babelHelpers.extends({}, o(), a());
      },
      c = function (t, n) {
        var e = r("getPluginForMessageMarketingCompatibleSettings")(t, n),
          o = e.getCampaignCompatibleSettingsForPrimaryFields,
          a = e.getCampaignCompatibleSettingsForSecondaryFields;
        return babelHelpers.extends({}, o(), a());
      },
      d = function (t, n) {
        n === void 0 &&
          (n = o("AdsMessageMarketingCompatibleSettingsPluginType")
            .AdsMessageMarketingCompatibleSettingsChannelType.WHATSAPP);
        var e = r("getPluginForMessageMarketingCompatibleSettings")(t, n),
          a = e.getCampaignCompatibleSettingsForPrimaryFields,
          i = e.getCampaignGroupCompatibleSettingsForPrimaryFields;
        return babelHelpers.extends({}, i(), a());
      };
    ((l.getCompatibleSettings = e),
      (l.getCompatibleSettingsForChannels = s),
      (l.getCompatibleSettingsForPrimaryFields = d));
  },
  98,
);

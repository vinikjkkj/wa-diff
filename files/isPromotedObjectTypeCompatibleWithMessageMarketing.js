__d(
  "isPromotedObjectTypeCompatibleWithMessageMarketing",
  [
    "AdsMessageMarketingCompatibleSettingsPluginResolver",
    "AdsMessageMarketingCompatibleSettingsPluginType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("AdsMessageMarketingCompatibleSettingsPluginResolver").resolve({
          channel: o("AdsMessageMarketingCompatibleSettingsPluginType")
            .AdsMessageMarketingCompatibleSettingsChannelType.WHATSAPP,
          objective: e,
        }),
        n = t.getCampaignCompatibleSettingsForPrimaryFields();
      return n.promotedObjectType;
    }
    function s(t, n) {
      var r = e(n);
      return r.includes(t);
    }
    ((l.getMessageMarketingCompatiblePromotedObjectTypes = e),
      (l.isPromotedObjectTypeCompatibleWithMessageMarketing = s));
  },
  98,
);

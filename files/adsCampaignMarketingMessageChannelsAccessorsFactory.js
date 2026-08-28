__d(
  "adsCampaignMarketingMessageChannelsAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsCampaignMarketingMessageWhatsappChannelAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          whatsapp: r(
            "adsCampaignMarketingMessageWhatsappChannelAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.whatsapp;
            },
            [].concat(t, ["whatsapp"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);

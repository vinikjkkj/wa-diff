__d(
  "adsCampaignSubscriberUniverseAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsCampaignSubscriberUniverseSubscriberPoolAccessorsFactory",
    "adsCampaignSubscriberUniverseSubscriberSourceAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          messenger_subscriber_pool: r(
            "adsCampaignSubscriberUniverseSubscriberPoolAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.messenger_subscriber_pool;
            },
            [].concat(t, ["messenger_subscriber_pool"]),
          ),
          messenger_subscriber_source: r(
            "adsCampaignSubscriberUniverseSubscriberSourceAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null
                ? void 0
                : n.messenger_subscriber_source;
            },
            [].concat(t, ["messenger_subscriber_source"]),
          ),
          whatsapp_subscriber_pool: r(
            "adsCampaignSubscriberUniverseSubscriberPoolAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.whatsapp_subscriber_pool;
            },
            [].concat(t, ["whatsapp_subscriber_pool"]),
          ),
          whatsapp_subscriber_source: r(
            "adsCampaignSubscriberUniverseSubscriberSourceAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.whatsapp_subscriber_source;
            },
            [].concat(t, ["whatsapp_subscriber_source"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);

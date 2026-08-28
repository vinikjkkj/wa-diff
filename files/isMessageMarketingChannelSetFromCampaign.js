__d(
  "isMessageMarketingChannelSetFromCampaign",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t, n;
      return (
        (e == null ||
        (t = e.targeting) == null ||
        (t = t.subscriber_universe) == null ||
        (t = t.whatsapp_subscriber_pool) == null
          ? void 0
          : t.id) != null ||
        (e == null ||
        (n = e.targeting) == null ||
        (n = n.subscriber_universe) == null ||
        (n = n.whatsapp_subscriber_source) == null
          ? void 0
          : n.id) != null
      );
    }
    i.isMessageMarketingChannelSetFromCampaign = e;
  },
  66,
);

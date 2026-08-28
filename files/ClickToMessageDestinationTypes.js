__d(
  "ClickToMessageDestinationTypes",
  ["AdCampaignDestination"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        (e = r("AdCampaignDestination")).MESSENGER,
        e.INSTAGRAM_DIRECT,
        e.WHATSAPP,
        e.MESSAGING_MESSENGER_WHATSAPP,
        e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER,
        e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP,
        e.MESSAGING_INSTAGRAM_DIRECT_WHATSAPP,
        e.LEAD_FROM_IG_DIRECT,
      ]);
    l.MESSAGING_APP_DESTINATION_TYPES = s;
  },
  98,
);

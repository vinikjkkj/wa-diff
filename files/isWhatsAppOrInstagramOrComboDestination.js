__d(
  "isWhatsAppOrInstagramOrComboDestination",
  ["AdCampaignDestination"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === r("AdCampaignDestination").WHATSAPP ||
        e === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
        e === r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP
      );
    }
    l.default = e;
  },
  98,
);

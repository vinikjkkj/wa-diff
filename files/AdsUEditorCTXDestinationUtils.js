__d(
  "AdsUEditorCTXDestinationUtils",
  [
    "AdCampaignDestination",
    "AdsInstagramConstants",
    "AdsMessengerConstants",
    "AdsPromotedObjectTypes",
    "AdsUEditorMessagingDestinationUtils",
    "AdsWhatsAppConstants",
    "ClickToMessageCTDFeatureGating",
    "ClickToMessagingStrings",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === r("AdsPromotedObjectTypes").MESSENGER
        ? "MESSENGER"
        : e === r("AdsPromotedObjectTypes").INSTAGRAM
          ? "INSTAGRAM_DIRECT"
          : e === r("AdsPromotedObjectTypes").WHATSAPP
            ? "WHATSAPP"
            : "";
    }
    function s(e) {
      return o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e)
        ? o("ClickToMessagingStrings").DEFAULT_HEADLINE.toString()
        : e === r("AdCampaignDestination").WHATSAPP
          ? o("AdsWhatsAppConstants").DEFAULT_HEADLINE.toString()
          : e === r("AdCampaignDestination").MESSENGER
            ? o("AdsMessengerConstants").DEFAULT_HEADLINE.toString()
            : e === r("AdCampaignDestination").INSTAGRAM_DIRECT &&
                o(
                  "ClickToMessageCTDFeatureGating",
                ).shouldShowCTDCustomHeadline()
              ? o("AdsInstagramConstants").DEFAULT_HEADLINE.toString()
              : null;
    }
    ((l.adPromotedObjectTypeToString = e),
      (l.getDefaultHeadlineForMessagingDestinations = s));
  },
  98,
);

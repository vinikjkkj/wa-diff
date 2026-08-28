__d(
  "isMessageMarketingEnabledFromCampaign",
  [
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementRawSpecUtils",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "isMessageMarketingChannelSetFromCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return !1;
      var t = o(
        "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
      ).convertCampaignRecordToPlacementSpec(e);
      return o("AdsPlacementRawSpecUtils").isRawPlacementSpecAutomatic(t)
        ? o(
            "isMessageMarketingChannelSetFromCampaign",
          ).isMessageMarketingChannelSetFromCampaign(e)
        : o("AdsPlacementAPISpecReaderUtils").isActiveWhatsAppPosition(
            t,
            "marketing_messages",
          );
    }
    l.isMessageMarketingEnabledFromCampaign = e;
  },
  98,
);

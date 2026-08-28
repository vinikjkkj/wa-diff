__d(
  "getMessageMarketingCampaignType",
  [
    "$InternalEnum",
    "AdsPlacementAPISpecReaderUtils",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "isMessageMarketingEnabledFromCampaign",
    "isMessengerMarketingMessageEnabledFromCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "AD_AND_MESSAGE",
      "MESSAGE_ONLY",
      "NONE",
    ]);
    function s(t) {
      if (t == null) return e.NONE;
      var n = o(
        "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
      ).convertCampaignRecordToPlacementSpec(t);
      return o(
        "AdsPlacementAPISpecReaderUtils",
      ).isOnlyActiveMarketingMessagePlacement(n)
        ? e.MESSAGE_ONLY
        : o(
              "isMessageMarketingEnabledFromCampaign",
            ).isMessageMarketingEnabledFromCampaign(t) ||
            o(
              "isMessengerMarketingMessageEnabledFromCampaign",
            ).isMessengerMarketingMessageEnabledFromCampaign(t)
          ? e.AD_AND_MESSAGE
          : e.NONE;
    }
    ((l.MessageMarketingCampaignType = e),
      (l.getMessageMarketingCampaignType = s));
  },
  98,
);

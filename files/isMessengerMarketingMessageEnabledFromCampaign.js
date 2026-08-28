__d(
  "isMessengerMarketingMessageEnabledFromCampaign",
  [
    "AdsPlacementAPISpecReaderUtilsShared",
    "AdsPlacementRawSpecUtils",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "isAccountEligibleForMessengerMarketingMessages",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (
        e == null ||
        !o(
          "isAccountEligibleForMessengerMarketingMessages",
        ).isAccountEligibleForMessengerMarketingMessages()
      )
        return !1;
      var t = o(
        "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
      ).convertCampaignRecordToPlacementSpec(e);
      return (
        o("AdsPlacementRawSpecUtils").isRawPlacementSpecAutomatic(t) ||
        o("AdsPlacementAPISpecReaderUtilsShared").isActiveMessengerPosition(
          t,
          "marketing_messages",
        )
      );
    }
    l.isMessengerMarketingMessageEnabledFromCampaign = e;
  },
  98,
);

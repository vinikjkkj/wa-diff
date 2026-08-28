__d(
  "AdsCTVCompatibilityUtils",
  ["AdsAPIDevicePlatform", "AdsPlacementAPISpecReaderUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
        o(
          "AdsPlacementAPISpecReaderUtils",
        ).convertCampaignToPlacementSpec_LEGACY(e),
        r("AdsAPIDevicePlatform").CONNECTED_TV,
      );
    }
    l.isCTVPlacementSelected = e;
  },
  98,
);

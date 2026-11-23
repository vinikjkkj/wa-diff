__d(
  "AdsPlacementInstreamContextualTargetingUtils",
  [
    "AdsPlacementAPISpecReaderUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("gkx")("8946")
        ? r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
            e,
            "instream_video",
          )
        : o(
            "AdsPlacementAPISpecReaderUtils",
          ).isOnlyActiveFacebookInstreamVideosPlacement(e);
    }
    l.isInstreamContextualTargetingPlacementEligible = e;
  },
  98,
);

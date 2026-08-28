__d(
  "adsACOIsValidDeviceAndPlacement",
  [
    "AdsAPIDevicePlatform",
    "AdsPlacementAPISpecReaderUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
          e,
          r("AdsAPIDevicePlatform").MOBILE,
        ),
        n =
          o("AdsPlacementAPISpecReaderUtils").isActiveInstagramFeedPosition(
            e,
          ) ||
          o("AdsPlacementAPISpecReaderUtils").isActiveInstagramExplorePosition(
            e,
          ) ||
          o("AdsPlacementAPISpecReaderUtils").isActiveInstagramStoryPosition(e),
        a =
          r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(e, "feed") ||
          n;
      return t && a;
    }
    l.default = e;
  },
  98,
);

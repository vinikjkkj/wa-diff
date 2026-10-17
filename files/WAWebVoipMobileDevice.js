__d(
  "WAWebVoipMobileDevice",
  [
    "WAWebGuestCoreConsts",
    "WAWebGuestCoreGetMobilePlatform",
    "isWAWebFeatureDetectionAndroidTablet",
    "isWAWebFeatureDetectionAppleTouchscreen",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        o("WAWebGuestCoreGetMobilePlatform").getGuestMobilePlatform() !==
          o("WAWebGuestCoreConsts").GuestMobilePlatform.UNKNOWN ||
        o(
          "isWAWebFeatureDetectionAndroidTablet",
        ).isWAWebFeatureDetectionAndroidOS() ||
        r("isWAWebFeatureDetectionAppleTouchscreen")()
      );
    }
    l.isVoipMobileDevice = e;
  },
  98,
);

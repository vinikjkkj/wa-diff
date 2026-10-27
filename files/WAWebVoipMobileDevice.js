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
    function s() {
      return (
        o("WAWebGuestCoreGetMobilePlatform").getGuestMobilePlatform() ===
          o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_BROWSER ||
        r("isWAWebFeatureDetectionAppleTouchscreen")()
      );
    }
    ((l.isVoipMobileDevice = e), (l.isVoipIosBrowser = s));
  },
  98,
);

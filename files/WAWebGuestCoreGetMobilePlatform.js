__d(
  "WAWebGuestCoreGetMobilePlatform",
  ["WAWebGuestCoreConsts", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e;
      return typeof window != "undefined" &&
        (e = window.webkit) != null &&
        (e = e.messageHandlers) != null &&
        (e = e.WAAppClipHandler) != null &&
        e.postMessage
        ? o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_APPCLIP
        : window.navigator.userAgent.includes("iPhone")
          ? o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_BROWSER
          : window.navigator.userAgent.includes("Android")
            ? o("WAWebGuestCoreConsts").GuestMobilePlatform.ANDROID_BROWSER
            : o("WAWebGuestCoreConsts").GuestMobilePlatform.UNKNOWN;
    }
    function s(e) {
      return e === o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_BROWSER ||
        e === o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_APPCLIP
        ? o("WAWebMobilePlatforms").PLATFORMS.IPHONE
        : e === o("WAWebGuestCoreConsts").GuestMobilePlatform.ANDROID_BROWSER ||
            e === o("WAWebGuestCoreConsts").GuestMobilePlatform.UNKNOWN
          ? o("WAWebMobilePlatforms").PLATFORMS.ANDROID
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    ((l.getGuestMobilePlatform = e),
      (l.mapGuestPlatformToMobilePlatformType = s));
  },
  98,
);

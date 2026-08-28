__d(
  "polarisGetAppPlatform",
  ["InstagramUserAgent", "PolarisConfigConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("PolarisConfigConstants").appPlatformTypes.WEB;
      return (
        c()
          ? (e = o("PolarisConfigConstants").appPlatformTypes.WINDOWSNT10)
          : s()
            ? (e = o("PolarisConfigConstants").appPlatformTypes.ANDROID)
            : u() && (e = o("PolarisConfigConstants").appPlatformTypes.IOS),
        e
      );
    }
    function s() {
      return r("InstagramUserAgent").is_android;
    }
    function u() {
      return r("InstagramUserAgent").is_ios;
    }
    function c() {
      return r("InstagramUserAgent").is_windows_nt;
    }
    ((l.getAppPlatform = e),
      (l.isAndroid = s),
      (l.isIOS = u),
      (l.isWindowsNT = c));
  },
  98,
);

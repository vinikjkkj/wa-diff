__d(
  "WAWebInternalMobilePlatforms",
  [],
  function (t, n, r, o, a, i) {
    var e = { ANDROID: "worka", IOS: "worki" };
    function l(t) {
      if (t === e.ANDROID) return e.ANDROID;
      if (t === e.IOS) return e.IOS;
    }
    function s(e) {
      return l(e) != null;
    }
    function u(t) {
      return t === e.ANDROID;
    }
    function c(t) {
      return t === e.IOS;
    }
    ((i.WORK_MOBILE_PLATFORMS = e),
      (i.castPlatform = l),
      (i.isInternalPlatform = s),
      (i.isAndroidPlatform = u),
      (i.isIOSPlatform = c));
  },
  66,
);

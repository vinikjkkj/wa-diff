__d(
  "WAWebGuestCoreGetDeviceClass",
  [
    "WAWebAndroidTabletDetectionUtils",
    "WAWebUA",
    "isWAWebFeatureDetectionAppleTouchscreen",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      if (r("isWAWebFeatureDetectionAppleTouchscreen")()) return "tablet";
      var e = o("WAWebUA").UA.parser.getDevice().type;
      if (e === "tablet" || e === "mobile") return e;
      var t = o(
        "WAWebAndroidTabletDetectionUtils",
      ).getWAWebAndroidTabletRuntimeSignals();
      return o("WAWebAndroidTabletDetectionUtils").isAndroidDesktopSiteRuntime(
        o("WAWebUA").UA.parser.getUA(),
        t,
      )
        ? o("WAWebAndroidTabletDetectionUtils").isTabletScreenSize(t.screenSize)
          ? "tablet"
          : "mobile"
        : "desktop";
    }
    l.getGuestDeviceClass = e;
  },
  98,
);

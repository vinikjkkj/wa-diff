__d(
  "WAWebDeviceClass",
  [
    "WAWebAndroidTabletDetectionUtils",
    "WAWebProtobufsWa6.pb",
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
    function s() {
      return (function (e) {
        if (e === "mobile")
          return o("WAWebProtobufsWa6.pb").ClientPayload$UserAgent$DeviceType
            .PHONE;
        if (e === "tablet")
          return o("WAWebProtobufsWa6.pb").ClientPayload$UserAgent$DeviceType
            .TABLET;
        if (e === "desktop")
          return o("WAWebProtobufsWa6.pb").ClientPayload$UserAgent$DeviceType
            .DESKTOP;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e());
    }
    ((l.getWAWebDeviceClass = e), (l.getWAWebLoginDeviceType = s));
  },
  98,
);

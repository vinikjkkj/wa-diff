__d(
  "WAWebLinkDeviceScreenGatedUtils",
  [
    "$InternalEnum",
    "WAWebAutoLogoutGating",
    "WAWebRegistrationQrGating",
    "gkx",
    "isWAWebFeatureDetectionAndroidTablet",
    "isWAWebFeatureDetectionAppleTouchscreen",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({ M1_WINNER: 1 });
    function s() {
      if (o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()) {
        var t = window.parent,
          n = t.linkDeviceVariant,
          r = e.cast(n);
        return r != null ? r : u();
      }
      var a = u();
      return ((window.linkDeviceVariant = a), a);
    }
    function u() {
      return e.M1_WINNER;
    }
    function c() {
      return r("gkx")("16993")
        ? r("gkx")("18089")
          ? "test"
          : "control"
        : "none";
    }
    function d() {
      return (
        c() === "test" ||
        o("WAWebRegistrationQrGating").isRegistrationQrEnabled()
      );
    }
    function m() {
      return (
        !o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() &&
        r("gkx")("17622")
      );
    }
    function p(e) {
      return (
        e === void 0 &&
          (e = o(
            "isWAWebFeatureDetectionAndroidTablet",
          ).isWAWebFeatureDetectionAndroidTablet()),
        e && m() && r("gkx")("27147")
      );
    }
    function _() {
      if (
        o(
          "isWAWebFeatureDetectionAndroidTablet",
        ).isWAWebFeatureDetectionAndroidTabletClientHintResolutionRequired()
      )
        return "none";
      var e = o(
        "isWAWebFeatureDetectionAndroidTablet",
      ).getWAWebFeatureDetectionAndroidTabletInfo();
      return e == null || e.deviceClass === "googlebook" || !m()
        ? "none"
        : p(!0)
          ? "test"
          : "control";
    }
    function f() {
      return (
        r("isWAWebFeatureDetectionAppleTouchscreen")() && r("gkx")("20339")
      );
    }
    function g() {
      return (
        !o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() &&
        r("gkx")("28277")
      );
    }
    ((l.LinkDeviceScreenVariantType = e),
      (l.getLinkDeviceScreenVariant = s),
      (l.getOptimizedRegFromWebVariant = c),
      (l.isWebRegistrationEnabled = d),
      (l.isAndroidTabletOverlayPotentiallyEnabled = m),
      (l.isAndroidTabletOverlayEnabled = p),
      (l.getAndroidTabletOverlayExperiment = _),
      (l.isAppleTouchscreenOverlayEnabled = f),
      (l.isGooglebookOverlayEnabled = g));
  },
  98,
);

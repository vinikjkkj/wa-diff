__d(
  "WAWebLinkDeviceScreenGatedUtils",
  [
    "$InternalEnum",
    "WAWebAutoLogoutGating",
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
        !o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() &&
        r("gkx")("17622")
      );
    }
    function m(e) {
      return (
        e === void 0 &&
          (e = o(
            "isWAWebFeatureDetectionAndroidTablet",
          ).isWAWebFeatureDetectionAndroidTablet()),
        d() && e && r("gkx")("27147")
      );
    }
    function p() {
      return !d() ||
        o(
          "isWAWebFeatureDetectionAndroidTablet",
        ).isWAWebFeatureDetectionAndroidTabletClientHintResolutionRequired() ||
        !o(
          "isWAWebFeatureDetectionAndroidTablet",
        ).isWAWebFeatureDetectionAndroidTablet()
        ? "none"
        : m(!0)
          ? "test"
          : "control";
    }
    function _() {
      return (
        r("isWAWebFeatureDetectionAppleTouchscreen")() && r("gkx")("20339")
      );
    }
    ((l.LinkDeviceScreenVariantType = e),
      (l.getLinkDeviceScreenVariant = s),
      (l.getOptimizedRegFromWebVariant = c),
      (l.isAndroidTabletOverlayPotentiallyEnabled = d),
      (l.isAndroidTabletOverlayEnabled = m),
      (l.getAndroidTabletOverlayExperiment = p),
      (l.isAppleTouchscreenOverlayEnabled = _));
  },
  98,
);

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
        var t = window.parent.linkDeviceVariant,
          n = e.cast(t);
        return n != null ? n : u();
      }
      var r = u();
      return ((window.linkDeviceVariant = r), r);
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
        r("gkx")("15775")
      );
    }
    function m(e) {
      return (
        e === void 0 &&
          (e = o(
            "isWAWebFeatureDetectionAndroidTablet",
          ).isWAWebFeatureDetectionAndroidTablet()),
        !o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() &&
          e &&
          r("gkx")("15842")
      );
    }
    function p() {
      return (
        r("isWAWebFeatureDetectionAppleTouchscreen")() && r("gkx")("20339")
      );
    }
    ((l.LinkDeviceScreenVariantType = e),
      (l.getLinkDeviceScreenVariant = s),
      (l.getOptimizedRegFromWebVariant = c),
      (l.isAndroidTabletOverlayPotentiallyEnabled = d),
      (l.isAndroidTabletOverlayEnabled = m),
      (l.isAppleTouchscreenOverlayEnabled = p));
  },
  98,
);

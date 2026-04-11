__d(
  "WAWebLinkDeviceScreenGatedUtils",
  [
    "$InternalEnum",
    "WAWebAutoLogoutGating",
    "gkx",
    "isWAWebFeatureDetectionAppleTouchscreen",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({ M1_WINNER: 1 });
    function s() {
      if (!r("justknobx")._("5007")) return u();
      if (o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()) {
        var t = window.parent.linkDeviceVariant,
          n = e.cast(t);
        return n != null ? n : u();
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
        r("isWAWebFeatureDetectionAppleTouchscreen")() && r("gkx")("20339")
      );
    }
    ((l.LinkDeviceScreenVariantType = e),
      (l.getLinkDeviceScreenVariant = s),
      (l.getOptimizedRegFromWebVariant = c),
      (l.isAppleTouchscreenOverlayEnabled = d));
  },
  98,
);

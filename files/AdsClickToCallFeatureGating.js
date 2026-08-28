__d(
  "AdsClickToCallFeatureGating",
  ["gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === void 0 && (e = !0),
        e ? r("qex")._("2692") === !0 : r("qex")._("3325") === !0
      );
    }
    function s() {
      return !1;
    }
    function u() {
      return r("gkx")("329") === !0;
    }
    function c() {
      return r("gkx")("13775") === !0;
    }
    ((l.isCallAdsWithWhatsAppCallEnabled = e),
      (l.isCallOnMessengerInCAWCEnabled = s),
      (l.shouldDefaultToWhatsApp = u),
      (l.isCallTranscriptAccountSettingEnabled = c));
  },
  98,
);

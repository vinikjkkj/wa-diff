__d(
  "PromoAdsAdsManagerEmailCaptureGenericCodeGatingUtils",
  ["gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return !s() && u(!1);
    }
    function s() {
      return r("gkx")("5233");
    }
    function u(e) {
      if ((e === void 0 && (e = !1), e)) {
        var t;
        return (t = r("qex")._("596")) != null ? t : !1;
      } else {
        var n;
        return (n = r("qex")._("746")) != null ? n : !1;
      }
    }
    function c() {
      var e;
      return !s() && ((e = r("qex")._("746")) != null ? e : !1);
    }
    function d() {
      var e = {};
      if (!s()) {
        var t = r("qex")._("746");
        t != null && (e.email_capture_generic_code_h2 = t ? "test" : "control");
      }
      return Object.keys(e).length > 0 ? JSON.stringify(e) : null;
    }
    ((l.isEmailCaptureGenericCodeOfferModalEnabled = e),
      (l.isGenericCodeOpenBetaEnabled = s),
      (l.isEmailCaptureGenericCodeEligible = u),
      (l.isDemandIRevTestGroup = c),
      (l.getEmailCaptureGenericCodeExperimentGroup = d));
  },
  98,
);

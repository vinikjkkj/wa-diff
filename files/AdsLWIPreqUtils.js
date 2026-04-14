__d(
  "AdsLWIPreqUtils",
  ["gkx", "qex", "useAdsLWIExposeAdAccountBoolUniverseHook"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if ((e === void 0 && (e = !1), !r("gkx")("20935") && !r("gkx")("21034")))
        return !1;
      if (e) {
        var t = r("qex")._("3453") === !0;
        r("qex")._("5144");
        var n = r("qex")._("5145") === !0;
        return t || n;
      }
      var o = r("qex")._("4039") === !0,
        a = r("qex")._("5146") === !0;
      return o || a;
    }
    function s(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("2997") === !0 : r("qex")._("3291") === !0
      );
    }
    function u(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("2110") === !0 : r("qex")._("2203") === !0
      );
    }
    function c(e, t) {
      var n = t === void 0 ? !0 : t,
        r = o(
          "useAdsLWIExposeAdAccountBoolUniverseHook",
        ).useAdsLWIExposeAdAccountBoolUniverseHook(
          e,
          "lwi_web_edit_error_fix_universe",
          "enable_fix",
          !0,
          n,
          !1,
          !0,
        );
      return r === !0;
    }
    ((l.getShouldDisableEditForCompletedAdsAndBoostAgain = e),
      (l.getShouldHighlightBoostAgain = s),
      (l.getShouldEnableIGBoostAgain = u),
      (l.useShouldEnableEditErrorFix = c));
  },
  98,
);

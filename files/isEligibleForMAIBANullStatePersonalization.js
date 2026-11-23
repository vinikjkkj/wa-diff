__d(
  "isEligibleForMAIBANullStatePersonalization",
  ["MAIBASurfacesUtils", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("MAIBASurfacesUtils").getCurrentAutoLoggingTool();
      return (
        e != null &&
        o("MAIBASurfacesUtils").ADS_MANAGER_SURFACES.has(e) &&
        e !== "Billing & Payments"
      );
    }
    function s(t) {
      var n, a;
      if (
        !e() ||
        !o("MAIBASurfacesUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
          "isEligibleForMAIBANullStatePersonalization",
          !1,
        )
      )
        return !1;
      if (r("gkx")("1670") || r("gkx")("23501")) return !0;
      if (t) {
        var i, l;
        return (
          ((i = r("qex")._("2749")) != null ? i : !1) ||
          ((l = r("qex")._("2578")) != null ? l : !1)
        );
      }
      return (
        ((n = r("qex")._("2750")) != null ? n : !1) ||
        ((a = r("qex")._("2591")) != null ? a : !1)
      );
    }
    function u() {
      return s(!1);
    }
    function c() {
      return s(!0);
    }
    ((l.isOnAdsManagerForMAIBANullState = e),
      (l.isEligibleForMAIBANullStatePersonalizationWithExposure = u),
      (l.isEligibleForMAIBANullStatePersonalizationWithoutExposure = c));
  },
  98,
);

__d(
  "AdsProgressiveDisclosureQEUtils",
  ["AdsOSAUExperimentUtils", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t ? r("qex")._("1963") : r("qex")._("674");
      return u(t, n, !1, !1);
    }
    function s() {
      var e = r("qex")._("674");
      return u(!1, e, !1, !1);
    }
    function u(e, t, n, r) {
      var a = e
        ? o("AdsOSAUExperimentUtils").isAUTest({
            logExposure: !0,
            checkLGAEnabled: n,
            lgaHoldoutGroupLogExposure: r,
          })
        : o("AdsOSAUExperimentUtils").isAUTest({
            logExposure: !1,
            checkLGAEnabled: n,
            lgaHoldoutGroupLogExposure: r,
          });
      return a ? "static_extended" : t != null ? t : "none";
    }
    function c(e) {
      return e ? r("gkx")("4372") : r("gkx")("4577");
    }
    function d() {
      return c(!1);
    }
    function m() {
      return o("AdsOSAUExperimentUtils").isAUTest({ logExposure: !1 })
        ? !0
        : r("gkx")("4631");
    }
    ((l.getUnifiedAppSalesVariation = e),
      (l.getUnifiedAppSalesVariationWithoutLog = s),
      (l.getOSAUVariation = u),
      (l.isPGDScalingCTXEngagementEligible = c),
      (l.isPGDScalingCTXEngagementEligibleSilent = d),
      (l.isPGDPillar3ForAUEligible = m));
  },
  98,
);

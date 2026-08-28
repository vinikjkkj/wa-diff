__d(
  "AdsMgmt2025H2ExperimentUtils",
  ["adsPostInteractionUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("5786") || d();
    }
    function s() {
      return r("gkx")("5786");
    }
    function u() {
      return r("gkx")("5881") || m();
    }
    function c() {
      return r("gkx")("12663");
    }
    function d() {
      return r("gkx")("5940");
    }
    function m() {
      return r("gkx")("5946");
    }
    function p() {
      return !0;
    }
    function _(e) {
      return (
        e === void 0 && (e = !1),
        o("adsPostInteractionUtils").getIsEnabledForPostInteractionContent(e)
      );
    }
    function f() {
      return r("gkx")("13745");
    }
    function g() {
      return r("gkx")("296");
    }
    ((l.getIsAccountInPassbackOpenBetaReporting = e),
      (l.getIsPassbackResultsDelayMessageEnabled = s),
      (l.getIsAccountInPassbackOpenBetaReportingWithoutExposure = u),
      (l.getIsAccountInPassbackReportingGA = c),
      (l.getIsAccountInPassbackOpenBetaCreation = d),
      (l.getIsAccountInPassbackOpenBetaCreationWithoutExposure = m),
      (l.getIsAudienceControlModalUsingEntryPoint = p),
      (l.getIsEnabledForPostInteraction = _),
      (l.getIsAccountInAssetLevelBreakdown = f),
      (l.getIsAccountInAssetLevelBreakdownWithoutExposure = g));
  },
  98,
);

__d(
  "BizKitAdsGating.entrypointutils",
  [
    "IsBoostIGStoriesInItemPickerEnabled.relayprovider",
    "IsFBAdsExperience.relayprovider",
    "IsFBIGFeaturesIncludedInIGInfra.relayprovider",
    "IsIGInfraUnificationEnabled.relayprovider",
    "IsLWIConsistenceExperimentEnabled.relayprovider",
    "IsMBSAdsExperience.relayprovider",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === void 0 && (e = !0),
        r("IsMBSAdsExperience.relayprovider").get(e)
      );
    }
    function s(e) {
      return (
        e === void 0 && (e = !0),
        r("IsFBAdsExperience.relayprovider").get(e)
      );
    }
    function u() {
      return r("gkx")("21034");
    }
    function c() {
      return u()
        ? !0
        : r("IsLWIConsistenceExperimentEnabled.relayprovider").get() !== !0
          ? !1
          : r("qex")._("56") === !0;
    }
    function d() {
      return s() && e();
    }
    function m() {
      return r("IsIGInfraUnificationEnabled.relayprovider").get();
    }
    function p() {
      return r("IsBoostIGStoriesInItemPickerEnabled.relayprovider").get();
    }
    function _() {
      return r("IsFBIGFeaturesIncludedInIGInfra.relayprovider").get();
    }
    function f() {
      return r("gkx")("21034") || g();
    }
    function g() {
      return r("IsLWIConsistenceExperimentEnabled.relayprovider").get() !== !0
        ? !1
        : r("qex")._("108") === !0;
    }
    ((l.getIsBizWebAdsExperience = e),
      (l.getIsFBAdsExperience = s),
      (l.getIsBCPEnabledForBizWeb = u),
      (l.getIsBCPRedirectionEnabled = c),
      (l.getIsFBAndBizWebAdsExperience = d),
      (l.getIsIGInfraUnificationEnabled = m),
      (l.getIsBoostIGStoriesInLWIEnabled = p),
      (l.getIsFBIGFeaturesIncludedInIGInfra = _),
      (l.getShouldEnableScheduleAd = f));
  },
  98,
);

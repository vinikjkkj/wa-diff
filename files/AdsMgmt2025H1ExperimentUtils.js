__d(
  "AdsMgmt2025H1ExperimentUtils",
  ["URI", "gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = ["/adsmanager", "/billing_hub", "/events_manager2"];
    function u() {
      return r("justknobx")._("3976");
    }
    function c() {
      return p() && m(!0);
    }
    function d() {
      return p() && m(!1);
    }
    function m(e) {
      return e ? r("gkx")("2623") : r("gkx")("2771");
    }
    function p() {
      var t = (e || (e = r("URI"))).getRequestURI().getPath();
      return s.some(function (e) {
        return t.startsWith(e);
      });
    }
    function _() {
      return r("gkx")("11734");
    }
    function f() {
      var e = r("gkx")("22502");
      return r("gkx")("9778") || r("gkx")("13272") || r("gkx")("16847") || e;
    }
    function g() {
      return r("gkx")("16847");
    }
    function h() {
      return (
        r("gkx")("35") || r("gkx")("82") || r("gkx")("682") || r("gkx")("22523")
      );
    }
    function y() {
      return r("gkx")("9778") ? r("gkx")("25882") : !1;
    }
    function C() {
      return r("gkx")("22510") ? r("gkx")("22523") : !1;
    }
    function b() {
      return (
        (r("gkx")("12545") || r("gkx")("402")) &&
        r("gkx")("12546") &&
        r("justknobx")._("4152")
      );
    }
    function v() {
      return r("gkx")("13387");
    }
    function S() {
      return r("gkx")("14969");
    }
    function R() {
      return r("gkx")("560");
    }
    function L() {
      return r("gkx")("3010");
    }
    function E() {
      return r("gkx")("5287");
    }
    ((l.performanceSummaryGuidanceRolloutEnabled = u),
      (l.getUserShouldHideAAUButtonForAAUMigrationWithExposure = c),
      (l.getUserShouldMigrateAAUMessages = d),
      (l.getIsUserInOneClickSummaryRowReset = _),
      (l.getIsAccountEligibleForCTXColumnSuggestion = f),
      (l.getIsAccountEligibleForCTXRetestColumnSuggestion = g),
      (l.getIsAccountEligibleForCTXColumnSuggestionWithoutExposure = h),
      (l.getIsAccountInWTWAMessagingColumnOrdering = y),
      (l.getIsAccountInWTDMessagingColumnOrdering = C),
      (l.getIsAccountInAdsReportingDebouncing = b),
      (l.getIsAccountInScaleGoodCampaignsFilter = v),
      (l.getIsAccountInScaleGoodCampaignsQuickViewWithoutExposure = S),
      (l.getIsAccountInQuickViewsBEImprovements = R),
      (l.getIsAccountInQuickViewsBEImprovementsWithoutExposure = L),
      (l.getIsAccountInGenAIFormCreation = E));
  },
  98,
);

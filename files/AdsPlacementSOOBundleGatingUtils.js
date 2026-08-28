__d(
  "AdsPlacementSOOBundleGatingUtils",
  ["AdsAPIObjectives", "gkx", "justknobx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("2528");
    }
    function s() {
      return r("gkx")("74");
    }
    function u() {
      return r("justknobx")._("2643")
        ? r("qex")._("2808") === !0
        : r("qex")._("3649") === !0;
    }
    function c() {
      return r("justknobx")._("4356") || r("qex")._("956") === !0;
    }
    function d() {
      return r("qex")._("2507") === !0;
    }
    function m() {
      return r("qex")._("374") === !0;
    }
    function p(e) {
      return (
        e === void 0 && (e = !0),
        e ? r("qex")._("5362") === !0 : r("qex")._("4997") === !0
      );
    }
    function _() {
      return e();
    }
    function f(t) {
      return t == null || (!b(t) && !C(t) && !y(t))
        ? !1
        : !!(e() || (y(t) && u()) || ((b(t) || C(t)) && c()));
    }
    function g(e, t, n, r) {
      return e || !t || n !== !1 ? !1 : h(r);
    }
    function h(e) {
      return e == null || (!b(e) && !C(e) && !y(e))
        ? !1
        : !!(r("gkx")("18079") || (y(e) && d()) || ((b(e) || C(e)) && m()));
    }
    function y(e) {
      if (e == null) return !1;
      var t = [
        r("AdsAPIObjectives").OUTCOME_TRAFFIC,
        r("AdsAPIObjectives").LINK_CLICKS,
        r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        r("AdsAPIObjectives").POST_ENGAGEMENT,
        r("AdsAPIObjectives").PAGE_LIKES,
        r("AdsAPIObjectives").VIDEO_VIEWS,
        r("AdsAPIObjectives").EVENT_RESPONSES,
        r("AdsAPIObjectives").OUTCOME_ACQUISITION,
        r("AdsAPIObjectives").APP_INSTALLS,
        r("AdsAPIObjectives").MOBILE_APP_INSTALLS,
        r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT,
      ];
      return t.includes(e);
    }
    function C(e) {
      if (e == null) return !1;
      var t = [
        r("AdsAPIObjectives").LEAD_GENERATION,
        r("AdsAPIObjectives").OUTCOME_LEADS,
      ];
      return t.includes(e);
    }
    function b(e) {
      if (e == null) return !1;
      var t = [
        r("AdsAPIObjectives").OUTCOME_SALES,
        r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
        r("AdsAPIObjectives").WEBSITE_CONVERSIONS,
      ];
      return t.includes(e);
    }
    function v(e, t) {
      return (
        t === void 0 && (t = !0),
        e == null || (!b(e) && !C(e) && !y(e))
          ? !1
          : y(e) && (p(t) || s())
            ? !0
            : b(e) || C(e)
      );
    }
    ((l.isSOOObjectiveExpansionGKEnabled = s),
      (l.isGrowthObjectivesQEEnabled = p),
      (l.isSOOBundlePlacementEnabled = _),
      (l.isAccountEligibleForSOOExpansionBundle = f),
      (l.getShouldApplyStickyState = g),
      (l.isAccountEligibleForSOOExpansionStickyState = h),
      (l.isCampaignGroupObjectiveEligible = v));
  },
  98,
);

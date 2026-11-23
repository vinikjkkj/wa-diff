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
    function _(t) {
      return t == null || (!C(t) && !y(t) && !h(t))
        ? !1
        : !!(e() || (h(t) && u()) || ((C(t) || y(t)) && c()));
    }
    function f(e, t, n, r) {
      return e || !t || n !== !1 ? !1 : g(r);
    }
    function g(e) {
      return e == null || (!C(e) && !y(e) && !h(e))
        ? !1
        : !!(r("gkx")("18079") || (h(e) && d()) || ((C(e) || y(e)) && m()));
    }
    function h(e) {
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
    function y(e) {
      if (e == null) return !1;
      var t = [
        r("AdsAPIObjectives").LEAD_GENERATION,
        r("AdsAPIObjectives").OUTCOME_LEADS,
      ];
      return t.includes(e);
    }
    function C(e) {
      if (e == null) return !1;
      var t = [
        r("AdsAPIObjectives").OUTCOME_SALES,
        r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
        r("AdsAPIObjectives").WEBSITE_CONVERSIONS,
      ];
      return t.includes(e);
    }
    function b(e, t) {
      return (
        t === void 0 && (t = !0),
        e == null || (!C(e) && !y(e) && !h(e))
          ? !1
          : h(e) && (p(t) || s())
            ? !0
            : C(e) || y(e)
      );
    }
    ((l.isSOOObjectiveExpansionGKEnabled = s),
      (l.isGrowthObjectivesQEEnabled = p),
      (l.isAccountEligibleForSOOExpansionBundle = _),
      (l.getShouldApplyStickyState = f),
      (l.isCampaignGroupObjectiveEligible = b));
  },
  98,
);

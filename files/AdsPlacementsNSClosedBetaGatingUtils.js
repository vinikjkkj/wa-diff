__d(
  "AdsPlacementsNSClosedBetaGatingUtils",
  ["AdsAPIObjectives", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = r("AdsAPIObjectives")).OUTCOME_SALES,
        e.CONVERSIONS,
        e.WEBSITE_CONVERSIONS,
        e.PRODUCT_CATALOG_SALES,
        e.XPLATFORM_SALES,
        e.OUTCOME_LEADS,
        e.LEAD_GENERATION,
        e.APP_INSTALLS,
        e.MOBILE_APP_INSTALLS,
        e.CANVAS_APP_INSTALLS,
        e.OUTCOME_ENGAGEMENT,
        e.POST_ENGAGEMENT,
        e.PAGE_LIKES,
        e.EVENT_RESPONSES,
        e.VIDEO_VIEWS,
        e.MESSAGES,
      ],
      u = [
        e.OUTCOME_AWARENESS,
        e.OUTCOME_TRAFFIC,
        e.BRAND_AWARENESS,
        e.REACH,
        e.LINK_CLICKS,
      ],
      c = new Set(s);
    function d(e) {
      return c.has(e);
    }
    function m() {
      return r("gkx")("23358");
    }
    function p(e) {
      var t, n;
      if (!d(e)) return !1;
      var o = r("gkx")("5560");
      return o
        ? m()
          ? (t = r("qex")._("692")) != null
            ? t
            : !1
          : (n = r("qex")._("3585")) != null
            ? n
            : !1
        : !1;
    }
    function _(e) {
      var t = e.isCurrentlyAdvantagePlusPlacement,
        n = e.isNewCampaign,
        r = e.objective,
        o = e.wasPublishedWithAutomaticPlacement;
      return p(r) && (n ? t : o);
    }
    function f() {
      return m() ? !0 : r("gkx")("8108") ? r("qex")._("4485") === !1 : !1;
    }
    function g(e) {
      return _(e) && f();
    }
    function h(e) {
      return d(e) ? r("gkx")("5587") : !1;
    }
    function y(e) {
      return d(e) ? r("gkx")("10178") : !1;
    }
    function C(e) {
      var t, n;
      return y(e)
        ? m()
          ? (t = r("qex")._("922")) != null
            ? t
            : !1
          : (n = r("qex")._("3622")) != null
            ? n
            : !1
        : !1;
    }
    function b(e) {
      return C(e) !== !0
        ? !1
        : m()
          ? r("qex")._("1364") === !1
          : r("qex")._("3623") === !1;
    }
    function v() {
      return r("gkx")("8994");
    }
    var S = new Set(["ad", "ad_set", "campaign"]);
    ((l.ELIGIBLE_OBJECTIVES = s),
      (l.INELIGIBLE_OBJECTIVES = u),
      (l.isNSEligibleObjective = d),
      (l.isAdAccountInNSClosedBetaCohort = m),
      (l.isAdAccountEligibleForNSClosedBetaL2Changes = p),
      (l.shouldHideNSClosedBetaL2PlacementControls = _),
      (l.isNSDeviceControlsRelaxed = f),
      (l.shouldHideNSDeviceControls = g),
      (l.isAdAccountEligibleForNSClosedBetaL2ChangesBanner = h),
      (l.isAdAccountEligibleForNSClosedBetaL1Changes = y),
      (l.isAdAccountEligibleForNSClosedBetaL1ChangesWithQE = C),
      (l.isAdAccountEligibleForNSClosedBetaMMFullExclusion = b),
      (l.isAdAccountEligibleForNSPartnershipAdsOrganic = v),
      (l.NS_BANNER_ENABLED_DUPLICATION_LEVELS = S));
  },
  98,
);

__d(
  "AdsCampaignBidUtils",
  [
    "AdsAPIBidInfoFields",
    "AdsAPIBidType",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBidControlType",
    "AdsBidOptions",
    "AdsBidUtils",
    "AdsBrandAwarenessUtils",
    "AdsBuyingTypes",
    "AdsLocalUtils",
    "AdsMultiAbsoluteDefaults",
    "AdsODAXUtils",
    "AdsObjectiveBidTypesMap",
    "AdsToplineProductSettings",
    "FBLogger",
    "err",
    "firstx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = o("AdsODAXUtils").maybeTranslateObjective(e, t, a),
        l = u(n, i, t, null);
      if (!s(l)) return r("AdsBidControlType").MANUAL_BID_ONLY;
      switch (i) {
        case r("AdsAPIObjectives").BRAND_AWARENESS:
          switch (a) {
            case r("AdsAPIOptimizationGoals").BRAND_AWARENESS:
              return r("AdsBidControlType").AUTO_BID_ONLY;
            case r("AdsAPIOptimizationGoals").REACH:
              return r("AdsBidControlType").MANUAL_BID_ONLY;
          }
          break;
        case r("AdsAPIObjectives").REACH:
          if (a === r("AdsAPIOptimizationGoals").ENGAGED_REACH)
            return r("AdsBidControlType").AUTO_BID_ONLY;
          break;
        case r("AdsAPIObjectives").LINK_CLICKS:
        case r("AdsAPIObjectives").LEAD_GENERATION:
          if (a === r("AdsAPIOptimizationGoals").QUALITY_CALL)
            return r("AdsBidControlType").AUTO_BID_ONLY;
      }
      return r("AdsBidControlType").ANY;
    }
    function s(e) {
      switch (e) {
        case r("AdsAPIBidType").ABSOLUTE_OCPM:
        case r("AdsAPIBidType").CPC:
        case r("AdsAPIBidType").CPA:
        case r("AdsAPIBidType").MULTI_PREMIUM:
          return !0;
        default:
          return !1;
      }
    }
    function u(e, t, n, o) {
      switch (e) {
        case r("AdsBuyingTypes").AUCTION:
          return c(t, n);
        case r("AdsBuyingTypes").FIXED_PRICE:
          if (o) {
            var a = r("AdsToplineProductSettings").bidTypes[o];
            return a
              ? r("firstx")(Object.keys(a))
              : (r("FBLogger")("ads").mustfix("Invalid topline type %s", o),
                r("AdsAPIBidType").MULTI_PREMIUM);
          }
          return r("AdsAPIBidType").MULTI_PREMIUM;
        case r("AdsBuyingTypes").RESERVED:
          return r("AdsAPIBidType").MULTI_PREMIUM;
        default:
          throw r("err")("Unhandled case " + e);
      }
    }
    function c(e, t) {
      var n = o("AdsObjectiveBidTypesMap").getValidBidTypes(
        r("AdsBuyingTypes").AUCTION,
        e,
        t,
        null,
      );
      switch (
        ((!n || !n.length) &&
          r("FBLogger")("ads").mustfix(
            "Failed to find valid bid type for objective %s",
            e,
          ),
        e)
      ) {
        case r("AdsAPIObjectives").APP_INSTALLS:
        case r("AdsAPIObjectives").LINK_CLICKS:
        case r("AdsAPIObjectives").OFFER_CLAIMS:
        case r("AdsAPIObjectives").PAGE_LIKES:
        case r("AdsAPIObjectives").CANVAS_APP_INSTALLS:
        case r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT:
        case r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT:
        case r("AdsAPIObjectives").EVENT_RESPONSES:
        case r("AdsAPIObjectives").POST_ENGAGEMENT:
        case r("AdsAPIObjectives").PRODUCT_CATALOG_SALES:
        case o("AdsLocalUtils").isLocalObjectiveSwitch(e):
        case r("AdsAPIObjectives").CONVERSIONS:
        case r("AdsAPIObjectives").MOBILE_APP_INSTALLS:
        case r("AdsAPIObjectives").VIDEO_VIEWS:
        case r("AdsAPIObjectives").LEAD_GENERATION:
        case r("AdsAPIObjectives").BRAND_AWARENESS:
        case r("AdsAPIObjectives").MESSAGES:
          return r("AdsAPIBidType").ABSOLUTE_OCPM;
        default:
          return n[0];
      }
    }
    function d(e) {
      switch (e) {
        case r("AdsBidOptions").OCPM_ACTIONS:
          return r("AdsAPIBidInfoFields").ACTIONS;
        case r("AdsBidOptions").CLICKS:
          return r("AdsAPIBidInfoFields").CLICKS;
        case r("AdsBidOptions").IMPRESSIONS:
          return r("AdsAPIBidInfoFields").IMPRESSIONS;
        case r("AdsBidOptions").OCPM_REACH:
          return r("AdsAPIBidInfoFields").REACH;
        default:
          return (
            r("FBLogger")("ads").warn(
              "Failed to get value from bid info, bidOption: %s",
              e,
            ),
            r("AdsAPIBidInfoFields").IMPRESSIONS
          );
      }
    }
    function m(e) {
      var t = r("AdsMultiAbsoluteDefaults")[e];
      if (t) {
        for (var n in t) if (t[n] > 0) return n;
      }
      return (
        r("FBLogger")("ads").warn(
          "Failed to identify the OCPM bid field for objective %s",
          e,
        ),
        r("AdsAPIBidInfoFields").ACTIONS
      );
    }
    function p(e, t, n) {
      if (
        n === r("AdsAPIObjectives").BRAND_AWARENESS &&
        t != null &&
        o("AdsBrandAwarenessUtils").isOCPMReach(e, t)
      )
        return r("AdsAPIBidInfoFields").REACH;
      if (e === r("AdsAPIBidType").ABSOLUTE_OCPM) return m(n);
      if (e === r("AdsAPIBidType").FIXED_CPM)
        return r("AdsAPIBidInfoFields").IMPRESSIONS;
      var a = o("AdsBidUtils").getBidTypeInfo(e),
        i = a ? a.bidOption : r("AdsBidOptions").IMPRESSIONS;
      return d(i);
    }
    function _(e, t, n, o, a) {
      if (a === r("AdsBuyingTypes").RESERVED && n)
        return n[r("AdsAPIBidInfoFields").ACTIONS] > 0;
      if (e) {
        var i = p(t, n, o);
        return i === r("AdsAPIBidInfoFields").ACTIONS;
      }
      return n ? n[r("AdsAPIBidInfoFields").ACTIONS] > 0 : !1;
    }
    function f(e, t, n) {
      return _(
        t.is_autobid || !1,
        t.bid_type || "",
        t.bid_info,
        n,
        e.buying_type,
      );
    }
    ((l.getBidControl = e),
      (l.canUseAutoBid = s),
      (l.getBidInfoFieldForOption = d),
      (l.getAbsoluteOCPMField = m),
      (l.getSingleBidInfoField = p),
      (l.hasBidOnActions = _),
      (l.campaignHasBidOnActions = f));
  },
  98,
);

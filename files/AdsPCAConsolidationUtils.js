__d(
  "AdsPCAConsolidationUtils",
  ["AdsAPICampaignRecordUtils", "AdsAPIOptimizationGoals", "gkx", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return !0;
    }
    function s() {
      return !0;
    }
    function u(e, t) {
      var n = e.size === 1 && t.size === 1;
      if (n) return !0;
      var o = e.size >= 1 && t.size <= 1;
      return o && r("gkx")("9037");
    }
    function c(e, t) {
      var n =
        (e == null ? void 0 : e.size) > 1 && (t == null ? void 0 : t.size) <= 1;
      return n && r("gkx")("9037");
    }
    function d(e) {
      return e;
    }
    function m(e) {
      var t = [
        "PRODUCT_SET_AND_APP",
        "PRODUCT_SET_AND_WEBSITE",
        "PRODUCT_SET_AND_PHONE_CALL",
      ];
      return t.includes(e);
    }
    function p(e) {
      var t = o(
        "AdsAPICampaignRecordUtils",
      ).getDerivedPromotedObjectTypeWithVariation(e);
      return t === "PRODUCT_SET_AND_WEBSITE";
    }
    function _(e) {
      var t, n;
      return (
        r("isTruthy")(
          e == null || (t = e.promoted_object) == null
            ? void 0
            : t.product_set_id,
        ) &&
        r("isTruthy")(
          e == null || (n = e.promoted_object) == null ? void 0 : n.variation,
        )
      );
    }
    function f(e) {
      switch (e) {
        case "PRODUCT_SET_AND_PHONE_CALL":
          return "CALL_NOW";
        case "PRODUCT_SET_AND_OMNICHANNEL":
        case "PRODUCT_SET_AND_IN_STORE":
        case "PRODUCT_SET_AND_WEBSITE":
        case "PRODUCT_SET_AND_APP":
        default:
          return "SHOP_NOW";
      }
    }
    function g(e, t, n) {
      var o = e.size,
        a = t.size;
      if (o <= 1 && a <= 1) {
        var i, l;
        return {
          pixelID: (i = e.first()) == null ? void 0 : i.id,
          appID: (l = t.first()) == null ? void 0 : l.id,
        };
      }
      if (r("gkx")("9037")) {
        var s,
          u,
          c = {
            pixelID: n != null ? n : (s = e.first()) == null ? void 0 : s.id,
            appID: (u = t.first()) == null ? void 0 : u.id,
          };
        return c;
      }
      return { pixelID: null, appID: null };
    }
    function h() {
      var e = [
        r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
        r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND,
      ];
      return (
        r("gkx")("6471") && e.push(r("AdsAPIOptimizationGoals").VALUE),
        e
      );
    }
    ((l.isSalesPCAConsolidationConversionLocationShopsEligible = e),
      (l.isSalesPCAConsolidationConversionLocationInStoreEligible = s),
      (l.isOmniChannelEventSource = u),
      (l.isSalesPCAConsolidationMultiEventEligibleAndEnabled = c),
      (l.getPromotedObjectFromVariation = d),
      (l.isOtherConversionLocation = m),
      (l.isPCAWebsiteCampaign = p),
      (l.isPCAVariation = _),
      (l.getCallToActionTypeForPromotedObjectTypeVariation = f),
      (l.selectEventSourceIDForPromotedObjectVariation = g),
      (l.getEligibleOptimizationGoalsForOmnichannel = h));
  },
  98,
);

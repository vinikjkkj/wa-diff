__d(
  "CTXAdsSmartDefaultConversionLocationStoreUtils",
  ["AdsDefaultPageDataProvider", "AdsPageStore", "AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = m(e);
      return d(
        t == null
          ? void 0
          : t.ctx_traffic_conversion_location_intent_with_mtml_v4,
      );
    }
    function s(e) {
      var t = m(e);
      return d(
        t == null
          ? void 0
          : t.ctx_sales_conversion_location_intent_with_mtml_v4,
      );
    }
    function u(e) {
      var t = m(e);
      return d(
        t == null ? void 0 : t.ctx_conversion_location_intent_with_mtml_v4,
      );
    }
    function c(e) {
      var t,
        n = m(e);
      return (t =
        n == null
          ? void 0
          : n.ctx_engagement_high_intent_default_messsage_destination_with_mtml_v4) !=
        null
        ? t
        : null;
    }
    function d(e) {
      return e == null || e === r("AdsPromotedObjectTypes").NONE
        ? null
        : {
            conversion_location: e,
            source: "ctx_mtml_defaulting_conversion_universe",
          };
    }
    function m(e) {
      var t,
        n,
        o =
          (t = r("AdsDefaultPageDataProvider")()
            .get(e.account_id)
            .getValue()) == null
            ? void 0
            : t.pageID,
        a =
          o != null
            ? (n = r("AdsPageStore").getLoadObject(o)) == null
              ? void 0
              : n.getValue()
            : null;
      return a;
    }
    ((l.getCTXMTMLConversionLocationDefaultDataForTraffic = e),
      (l.getCTXMTMLConversionLocationDefaultDataForSales = s),
      (l.getCTXMTMLConversionLocationDefaultDataForEngagement = u),
      (l.getCTXMTMLDestinationDefaultDataForEngagement = c));
  },
  98,
);

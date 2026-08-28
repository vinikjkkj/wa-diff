__d(
  "AdsDynamicAdsUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsBulkValueUtils",
    "AdsCollectionsAdUtils",
    "AdsDynamicAdsFormatUtils",
    "AdsEmptyValue",
    "AdsInteractiveComponentConstants",
    "AdsPromotedObjectTypes",
    "DynamicAdsProductSalesChannel",
    "FBLogger",
    "adsInteractiveComponentsUtils",
    "enumUtils",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e === null)
        return (
          o("AdsBulkValueUtils").getUniformValueOrDefault(t) ===
          r("AdsPromotedObjectTypes").PRODUCT_SET
        );
      if (
        t === null ||
        o("AdsBulkValueUtils").getUniformValueOrDefault(t) !==
          r("AdsPromotedObjectTypes").PRODUCT_SET
      ) {
        if (!e)
          throw r("FBLogger")("dpa").mustfixThrow(
            "bulkProductSetID should not be null",
          );
        return (
          !(e instanceof r("AdsEmptyValue")) &&
          e.getValues().every(function (e) {
            return !!e;
          })
        );
      }
      var n = !1;
      return (
        t &&
          e &&
          (n = t.getValues().every(function (t, n) {
            var o = e ? e.getValueForIndex(n) : null;
            return t === r("AdsPromotedObjectTypes").PRODUCT_SET || o;
          })),
        n
      );
    }
    function s(e, t) {
      if (e.isDone() && e.hasValue()) {
        var n,
          r = e.getValueEnforcing();
        return (
          !!r.get(t) &&
          ((n = r.get(t)) == null ? void 0 : n.result) === "failed"
        );
      }
      return !0;
    }
    function u(e) {
      var t = o("AdsDynamicAdsFormatUtils").getAdgroupFormatOption(e);
      return c(t);
    }
    function c(e) {
      return (
        e === "carousel_images_multi_items" ||
        e === "single_image" ||
        e === "carousel_slideshows"
      );
    }
    function d(e) {
      var t,
        n =
          e == null ||
          (t = e.creative) == null ||
          (t = t.recommender_settings) == null
            ? void 0
            : t.product_sales_channel;
      return (
        n === "omni" ||
        n ===
          o("enumUtils").enumValueToKey(
            "omni",
            r("DynamicAdsProductSalesChannel"),
          ) ||
        n === "in_store" ||
        n ===
          o("enumUtils").enumValueToKey(
            "in_store",
            r("DynamicAdsProductSalesChannel"),
          )
      );
    }
    function m(e) {
      var t;
      return (
        !r("isStringNullOrEmpty")(
          (t = e.creative) == null ? void 0 : t.product_set_id,
        ) && !p(e)
      );
    }
    function p(e) {
      var t;
      return ((t = e.creative) == null ? void 0 : t.product_set_id) == null
        ? !1
        : _(e);
    }
    function _(e) {
      var t;
      return ((t = e.creative) == null ? void 0 : t.product_set_id) == null ||
        !o("adsInteractiveComponentsUtils").adgroupHasInteractiveComponents(
          e,
          o("AdsInteractiveComponentConstants").SHOPPING_PRODUCT_TAG,
        ) ||
        o("AdsCollectionsAdUtils").isCollectionsAd(e)
        ? !1
        : !o("AdsAPIAdgroupRecordUtils").isTemplateCreative(e);
    }
    function f(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.branded_content) == null
            ? void 0
            : t.product_set_partner_selection_status;
      return n != null ? n === "OPT_IN" : null;
    }
    ((l.areAllDynamicAds = e),
      (l.isDogCheckFailed = s),
      (l.adgroupSupportsOverlays = u),
      (l.formatOptionSupportsOverlays = c),
      (l.isDynamicAdForRetail = d),
      (l.isDynamicAd = m),
      (l.isStaticAdUsingProductSet = p),
      (l.isPartnershipAdsDynamicAdsOptedIn = f));
  },
  98,
);

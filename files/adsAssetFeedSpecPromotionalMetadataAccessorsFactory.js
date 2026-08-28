__d(
  "adsAssetFeedSpecPromotionalMetadataAccessorsFactory",
  [
    "AdsAPIAdAssetFeedPromotionalMetadataOfferDetailsFields",
    "AdsAdObjectsAccessorUtils",
    "adsAssetFeedSpecPromotionalMetadataCouponCodesAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          allowed_coupon_code_sources: n.basicListFieldAccessorFactory(
            e,
            t,
            "allowed_coupon_code_sources",
          ),
          allowed_promo_offer_ids: n.basicListFieldAccessorFactory(
            e,
            t,
            "allowed_promo_offer_ids",
          ),
          coupon_codes: r(
            "adsAssetFeedSpecPromotionalMetadataCouponCodesAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.coupon_codes;
            },
            [].concat(t, ["coupon_codes"]),
          ),
          manual_coupon_codes: n.basicListFieldAccessorFactory(
            e,
            t,
            "manual_coupon_codes",
          ),
          is_auto_update_allowed: n.basicFieldAccessorFactory(
            e,
            t,
            "is_auto_update_allowed",
          ),
          offer_details: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.offer_details;
            },
            [].concat(t, ["offer_details"]),
            Object.values(
              r("AdsAPIAdAssetFeedPromotionalMetadataOfferDetailsFields"),
            ),
          ),
          excluded_offers: n.basicListFieldAccessorFactory(
            e,
            t,
            "excluded_offers",
          ),
          pre_click_ad_containers: n.basicListFieldAccessorFactory(
            e,
            t,
            "pre_click_ad_containers",
          ),
          product_catalog_id: n.basicFieldAccessorFactory(
            e,
            t,
            "product_catalog_id",
          ),
          product_catalog_id_for_email_capture: n.basicFieldAccessorFactory(
            e,
            t,
            "product_catalog_id_for_email_capture",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);

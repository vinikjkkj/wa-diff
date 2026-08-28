__d(
  "adsAssetFeedSpecPromotionalMetadataCouponCodesAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          ad_creative_description: n.basicListFieldAccessorFactory(
            e,
            t,
            "ad_creative_description",
          ),
          ad_creative_headline: n.basicListFieldAccessorFactory(
            e,
            t,
            "ad_creative_headline",
          ),
          ad_creative_manual_coupon_codes: n.basicListFieldAccessorFactory(
            e,
            t,
            "ad_creative_manual_coupon_codes",
          ),
          ad_creative_primary_text: n.basicListFieldAccessorFactory(
            e,
            t,
            "ad_creative_primary_text",
          ),
          detected_from_merchant_ads: n.basicListFieldAccessorFactory(
            e,
            t,
            "detected_from_merchant_ads",
          ),
          detected_from_merchant_website: n.basicListFieldAccessorFactory(
            e,
            t,
            "detected_from_merchant_website",
          ),
          detected_from_merchant_website_url: n.basicListFieldAccessorFactory(
            e,
            t,
            "detected_from_merchant_website_url",
          ),
          provided_by_merchant: n.basicListFieldAccessorFactory(
            e,
            t,
            "provided_by_merchant",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);

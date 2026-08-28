__d(
  "adsCollaborativeAdsPartnerInfoAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          merchant_partner_business_id: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "merchant_partner_business_id"),
          producer_dedicated_ad_account_id: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "producer_dedicated_ad_account_id"),
        },
      );
    }
    l.default = e;
  },
  98,
);

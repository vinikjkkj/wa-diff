__d(
  "adsCampaignRetailAudienceConfigAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          is_opted_in: o("AdsAdObjectsAccessorUtils").basicFieldAccessorFactory(
            e,
            t,
            "is_opted_in",
          ),
          selected_retailer_business_id: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "selected_retailer_business_id"),
        },
      );
    }
    l.default = e;
  },
  98,
);

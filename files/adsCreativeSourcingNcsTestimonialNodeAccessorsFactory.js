__d(
  "adsCreativeSourcingNcsTestimonialNodeAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          auto_linked_with_campaign_group_id: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(
            e,
            t,
            "auto_linked_with_campaign_group_id",
          ),
          brief_id: o("AdsAdObjectsAccessorUtils").basicFieldAccessorFactory(
            e,
            t,
            "brief_id",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);

__d(
  "adsCampaignMultiAdsAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          source_type: o("AdsAdObjectsAccessorUtils").basicFieldAccessorFactory(
            e,
            t,
            "source_type",
          ),
          enroll_status: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "enroll_status"),
        },
      );
    }
    l.default = e;
  },
  98,
);

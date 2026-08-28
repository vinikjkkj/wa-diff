__d(
  "adsCampaignSubscriberUniverseSubscriberSourceAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          id: o("AdsAdObjectsAccessorUtils").basicFieldAccessorFactory(
            e,
            t,
            "id",
          ),
          name: o("AdsAdObjectsAccessorUtils").basicFieldAccessorFactory(
            e,
            t,
            "name",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);

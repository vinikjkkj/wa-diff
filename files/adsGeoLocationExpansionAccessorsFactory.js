__d(
  "adsGeoLocationExpansionAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          allowed: o("AdsAdObjectsAccessorUtils").basicFieldAccessorFactory(
            e,
            t,
            "allowed",
          ),
          intent: o("AdsAdObjectsAccessorUtils").basicFieldAccessorFactory(
            e,
            t,
            "intent",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);

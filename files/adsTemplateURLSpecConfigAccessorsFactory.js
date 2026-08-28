__d(
  "adsTemplateURLSpecConfigAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          app_id: o("AdsAdObjectsAccessorUtils").basicFieldAccessorFactory(
            e,
            t,
            "app_id",
          ),
          enable_third_party_deeplink: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "enable_third_party_deeplink"),
        },
      );
    }
    l.default = e;
  },
  98,
);

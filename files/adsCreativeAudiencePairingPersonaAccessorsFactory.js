__d(
  "adsCreativeAudiencePairingPersonaAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          age_min: n.basicFieldAccessorFactory(e, t, "age_min"),
          age_max: n.basicFieldAccessorFactory(e, t, "age_max"),
          genders: n.basicListFieldAccessorFactory(e, t, "genders"),
        },
      );
    }
    l.default = e;
  },
  98,
);

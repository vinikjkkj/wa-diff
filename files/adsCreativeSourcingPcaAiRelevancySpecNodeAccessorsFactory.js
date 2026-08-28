__d(
  "adsCreativeSourcingPcaAiRelevancySpecNodeAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          ai_relevancy_ent_id: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "ai_relevancy_ent_id"),
          extension_specs: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "extension_specs"),
        },
      );
    }
    l.default = e;
  },
  98,
);

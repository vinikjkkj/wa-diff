__d(
  "getTaggerFeatureDefinitionByName",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e.find(function (e) {
        return e.featureType === "TAGGER" && e.taggerType === t;
      });
    }
    i.default = e;
  },
  66,
);

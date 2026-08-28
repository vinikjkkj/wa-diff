__d(
  "AdsNoneObjectiveAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupCombinedFieldMappings",
    "AdsDefaultAdgroupSpecPathPlugin",
    "FBLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultAdgroupSpecPathPlugin"), {
        type: "adgroup/spec-path",
        key: "none",
        pivots: { objective: r("AdsAPIObjectives").NONE },
        getCombinedFieldMappings: function (t) {
          return (
            r("FBLogger")("ads").info("We do not support NONE objective"),
            r("AdsAdgroupCombinedFieldMappings").INVALID_MAPPING
          );
        },
        getDefaultCallToActionType: function (t) {
          return "NO_BUTTON";
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);

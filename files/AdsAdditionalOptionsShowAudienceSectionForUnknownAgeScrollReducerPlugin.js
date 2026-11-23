__d(
  "AdsAdditionalOptionsShowAudienceSectionForUnknownAgeScrollReducerPlugin",
  ["AdsAdditionalOptionsConsts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t
            .set(
              o("AdsAdditionalOptionsConsts").AdditionalOptionsSections
                .audienceSectionF2,
              "visible",
            )
            .set(
              o("AdsAdditionalOptionsConsts").AdditionalOptionsSections
                .targeting,
              "visible",
            );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);

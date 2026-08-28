__d(
  "AdsAdditionalOptionsSectionVisibilityDataProviderPlugin",
  [
    "AdsAdditionalOptionsConsts",
    "AdsAdditionalOptionsDefaultConsts",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: r("immutable")
          .Map(o("AdsAdditionalOptionsConsts").AdditionalOptionsSections)
          .map(function (e) {
            return o("AdsAdditionalOptionsDefaultConsts")
              .DEFAULT_AO_SECTION_CONFIG;
          }),
      },
      s = e;
    l.default = s;
  },
  98,
);

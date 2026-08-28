__d(
  "adsReachFrequencyCreativeFormatGetIneligibleFormatsForPlacementPosition",
  [
    "AdsReachFrequencyCreativeFormatPlugins",
    "adsReachFrequencyCreativeFormatIsSelectedFromFlags",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r("AdsReachFrequencyCreativeFormatPlugins")
        .getArray()
        .filter(function (e) {
          return (
            t.rfRestrictedFormatFlags &&
            r("adsReachFrequencyCreativeFormatIsSelectedFromFlags")(
              e,
              t.rfRestrictedFormatFlags,
            )
          );
        })
        .filter(function (n) {
          return n.getIncompatiblePlacementPositions(t).includes(e);
        });
    }
    l.default = e;
  },
  98,
);

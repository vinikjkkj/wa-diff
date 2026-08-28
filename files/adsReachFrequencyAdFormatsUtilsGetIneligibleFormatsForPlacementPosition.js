__d(
  "adsReachFrequencyAdFormatsUtilsGetIneligibleFormatsForPlacementPosition",
  ["AdsReachFrequencyAdFormatsPlugins"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r("AdsReachFrequencyAdFormatsPlugins")
        .getArray()
        .filter(function (e) {
          return (
            t.adFormats &&
            t.adFormats.some(function (t) {
              return t.formatType === e.adFormatType;
            })
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

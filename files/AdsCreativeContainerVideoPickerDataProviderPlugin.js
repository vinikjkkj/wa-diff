__d(
  "AdsCreativeContainerVideoPickerDataProviderPlugin",
  ["AdsVideoSelectionHeaderTabTypes", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: {
          lastUploadedVideoID: null,
          source: r("AdsVideoSelectionHeaderTabTypes").ACCOUNT,
          uploads: r("immutable").OrderedSet(),
        },
      },
      s = e;
    l.default = s;
  },
  98,
);

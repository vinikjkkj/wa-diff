__d(
  "AdsBusinessImageListLoadedReducerPlugin",
  ["LoadObjectMapMutationUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return o("LoadObjectMapMutationUtil").updateValueList(
            t,
            n.imageIDList,
            n.imageDataList,
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);

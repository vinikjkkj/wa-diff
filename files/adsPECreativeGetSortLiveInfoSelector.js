__d(
  "adsPECreativeGetSortLiveInfoSelector",
  ["AdsPECreativeSortLiveProvider", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("AdsPECreativeSortLiveProvider").toFluxStore()],
        function () {
          return r("AdsPECreativeSortLiveProvider")().sortInfo;
        },
        { name: i.id + ".adsPECreativeGetSortLiveInfoSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);

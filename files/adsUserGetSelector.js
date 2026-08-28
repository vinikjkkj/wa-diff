__d(
  "adsUserGetSelector",
  [
    "AdsLoadStateUtils_LEGACY",
    "AdsUserProvider",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
      r("AdsUserProvider").toFluxStore(),
      function (e) {
        return o("AdsLoadStateUtils_LEGACY").fromLoadObjectTreatEmptyAsLoading(
          r("AdsUserProvider")().get(e),
        );
      },
    );
    l.adsUserGetterSelector = e;
  },
  98,
);

__d(
  "AdsAIUtils",
  ["MAIBASurfacesUtils"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e =
        importNamespace("MAIBASurfacesUtils").getEffectiveAdsAIBetaM2Surface,
      l =
        importNamespace(
          "MAIBASurfacesUtils",
        ).getIsAdsAIBetaM2AvailableOnCurrentSurface,
      s = importNamespace("MAIBASurfacesUtils").getSurfaceFromToolType;
    ((i.getEffectiveAdsAIBetaM2Surface = e),
      (i.getIsAdsAIBetaM2AvailableOnCurrentSurface = l),
      (i.getSurfaceFromToolType = s));
  },
  66,
);

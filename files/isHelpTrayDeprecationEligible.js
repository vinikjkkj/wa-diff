__d(
  "isHelpTrayDeprecationEligible",
  ["MAIBASurfacesUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("MAIBASurfacesUtils").getCurrentAutoLoggingTool(),
        t = e === "Business Support",
        n = e != null && o("MAIBASurfacesUtils").ADS_MANAGER_SURFACES.has(e),
        r = e === "MBS";
      return !(
        (!t && !n && !r) ||
        !o("MAIBASurfacesUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
          "isHelpTrayDeprecationEnabled",
          !1,
        )
      );
    }
    l.default = e;
  },
  98,
);

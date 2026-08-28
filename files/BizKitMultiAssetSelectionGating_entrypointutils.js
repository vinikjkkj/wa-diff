__d(
  "BizKitMultiAssetSelectionGating.entrypointutils",
  ["BusinessScopingGating.entrypointutils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      return (
        o("BusinessScopingGating.entrypointutils").getCanSeeBusinessScoping() &&
        ((e = r("gkx")("22624")) != null ? e : !1)
      );
    }
    l.getCanSelectMultipleAssetsInSelector = e;
  },
  98,
);

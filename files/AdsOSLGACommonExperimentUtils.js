__d(
  "AdsOSLGACommonExperimentUtils",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e === t) return e;
      switch (t) {
        case "static_extended":
          return r("gkx")("8976")
            ? "optionx_high_friction"
            : "optionx_medium_friction_v2";
        case "none":
          return "bau";
        default:
          return null;
      }
    }
    l.getLGAOptionXVariation = e;
  },
  98,
);

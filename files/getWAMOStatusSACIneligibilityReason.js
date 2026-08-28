__d(
  "getWAMOStatusSACIneligibilityReason",
  ["AdsPlacementIneligibilityReason", "AdsRegulatedCategory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e != null &&
        e.length > 0 &&
        !e.includes(r("AdsRegulatedCategory").NONE)
        ? o("AdsPlacementIneligibilityReason").createWAMOStatusSACReason()
        : null;
    }
    l.default = e;
  },
  98,
);

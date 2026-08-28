__d(
  "AdAccountBusinessConstraintsPerObjectivePlacementControlsGatingUtils",
  ["AdsPlacementsNSClosedBetaGatingUtils", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t,
        n = r("gkx")("2936");
      return n
        ? o(
            "AdsPlacementsNSClosedBetaGatingUtils",
          ).isAdAccountInNSClosedBetaCohort()
          ? (e = r("qex")._("314")) != null
            ? e
            : !1
          : (t = r("qex")._("3530")) != null
            ? t
            : !1
        : !1;
    }
    function s() {
      var e,
        t,
        n = r("gkx")("14932");
      return n
        ? o(
            "AdsPlacementsNSClosedBetaGatingUtils",
          ).isAdAccountInNSClosedBetaCohort()
          ? (e = r("qex")._("413")) != null
            ? e
            : !1
          : (t = r("qex")._("3532")) != null
            ? t
            : !1
        : !1;
    }
    ((l.isAdAccountBusinessConstraintsPerObjectivePlacementControlsEnabled = e),
      (l.isNewL4PlacementExclusionsEnabled = s));
  },
  98,
);

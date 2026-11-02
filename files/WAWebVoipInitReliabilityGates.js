__d(
  "WAWebVoipInitReliabilityGates",
  ["WAWebVoipInitReliabilityLevel", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebVoipInitReliabilityLevel").isVoipInitReliabilityLevelAtLeast(
          3,
        ) && !r("justknobx")._("4015")
      );
    }
    function s() {
      return (
        o("WAWebVoipInitReliabilityLevel").isVoipInitReliabilityLevelAtLeast(
          2,
        ) && !r("justknobx")._("4530")
      );
    }
    function u() {
      return (
        o("WAWebVoipInitReliabilityLevel").isVoipInitReliabilityLevelAtLeast(
          2,
        ) && !r("justknobx")._("3910")
      );
    }
    function c() {
      return u() || s();
    }
    ((l.isVoipInitBxRecoveryEnabled = e),
      (l.isVoipInitChunkFixEnabled = s),
      (l.isVoipInitStuckFixEnabled = u),
      (l.isVoipInitUnlatchEnabled = c));
  },
  98,
);

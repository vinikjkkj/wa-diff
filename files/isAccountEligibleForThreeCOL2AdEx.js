__d(
  "isAccountEligibleForThreeCOL2AdEx",
  ["AdsAPIObjectives", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === r("AdsAPIObjectives").OUTCOME_SALES;
    }
    function s() {
      return r("gkx")("11905");
    }
    function u() {
      return r("gkx")("3434");
    }
    function c() {
      return r("gkx")("6030");
    }
    ((l.isAccountEligibleForThreeCOL2AdEx = e),
      (l.isAccountEligibleForWebAndAppDefault = s),
      (l.isAccountL3DaDefaultOffForTesting = u),
      (l.is3coXPacFix = c));
  },
  98,
);

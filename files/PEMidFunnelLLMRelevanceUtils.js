__d(
  "PEMidFunnelLLMRelevanceUtils",
  ["AdsAPIObjectives", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_LEADS ||
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
      );
    }
    function s() {
      return r("gkx")("8055");
    }
    function u(t, n) {
      return n === 1 && e(t) && s();
    }
    function c(e) {
      return (
        e === void 0 && (e = !0),
        e ? r("gkx")("8089") : r("gkx")("8111")
      );
    }
    ((l.isPEMidFunnelLLMRelevanceObjective = e),
      (l.isPEMidFunnelLLMRelevancePopulation = s),
      (l.isPEMidFunnelLLMRelevanceCandidate = u),
      (l.isPEMidFunnelLLMRelevanceEnabled = c));
  },
  98,
);

__d(
  "GuidanceOpportunityScoreUtil",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1;
    function l(t) {
      var n = Math.max(0, Math.min(100, t != null ? t : 0)),
        r = n % 1;
      return r === 0 ? n : parseFloat(n.toFixed(e));
    }
    function s(e) {
      return e === 101 || e === 2;
    }
    function u(e, t) {
      return e.reduce(function (e, n) {
        var r;
        return (
          e +
          c((r = n == null ? void 0 : n.recommendation_id) != null ? r : "", t)
        );
      }, 0);
    }
    function c(e, t) {
      var n = t.get(e);
      return n == null ? 0 : n;
    }
    ((i.validateAndRoundScore = l),
      (i.isAdAccountRestricted = s),
      (i.calculateTotalOSScoreFromMFRRecs = u),
      (i.getOSScoreForUGPRecommendation = c));
  },
  66,
);

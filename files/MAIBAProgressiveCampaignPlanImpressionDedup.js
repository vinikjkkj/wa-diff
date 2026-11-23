__d(
  "MAIBAProgressiveCampaignPlanImpressionDedup",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set();
    function l(t) {
      return t == null || e.has(t) ? !1 : (e.add(t), !0);
    }
    function s() {
      e.clear();
    }
    ((i.claimProgressiveCampaignPlanImpression = l),
      (i.resetProgressiveCampaignPlanImpressionsForTesting = s));
  },
  66,
);

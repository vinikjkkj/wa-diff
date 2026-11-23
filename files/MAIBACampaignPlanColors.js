__d(
  "MAIBACampaignPlanColors",
  ["MAIBACampaignFunnelStage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "blue",
      "onboarding",
      "success",
      "error",
      "warning",
      "selected",
      "valueProvenRecommendation",
    ];
    function s(t) {
      return e[t % e.length];
    }
    var u = new Map([
      ["awareness", "blue"],
      ["consideration", "onboarding"],
      ["conversion", "success"],
    ]);
    function c(e, t) {
      var n,
        r = o("MAIBACampaignFunnelStage").deriveFunnelStage(e);
      return (n = r != null ? u.get(r) : null) != null ? n : s(t);
    }
    function d(e, t) {
      var n = c(e, t);
      return n === "selected" ? "blue" : n;
    }
    ((l.getCampaignColorForObjective = c),
      (l.getCampaignTextColorForObjective = d));
  },
  98,
);

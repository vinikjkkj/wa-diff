__d(
  "getMAIBACampaignPlanProgressRows",
  ["MAIBACampaignPlanSummaryRows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e === "" ? "pending" : t ? "provisional" : "final";
    }
    function s(t) {
      return o("MAIBACampaignPlanSummaryRows")
        .deriveSummaryRows({
          campaigns: [t.campaign],
          goalContext: t.goalContext,
          goalDetail: t.goalDetail,
          totalBudget: t.totalBudget,
        })
        .map(function (n) {
          return {
            key: n.key,
            label: n.label,
            state: e(n.value, t.provisionalRowKeys.has(n.key)),
            value: n.value,
          };
        });
    }
    l.default = s;
  },
  98,
);

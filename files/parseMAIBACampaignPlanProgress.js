__d(
  "parseMAIBACampaignPlanProgress",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1;
    function l(e, t) {
      if (e == null || typeof e != "object") return "";
      var n = e[t];
      return typeof n == "string" ? n : "";
    }
    function s(e, t) {
      return e == null || typeof e != "object" ? null : e[t];
    }
    function u(e) {
      var t = s(e, "provisional");
      return Array.isArray(t)
        ? new Set(
            t.filter(function (e) {
              return typeof e == "string";
            }),
          )
        : new Set();
    }
    function c(t) {
      if (t == null || t === "") return null;
      var n;
      try {
        n = JSON.parse(t);
      } catch (e) {
        return null;
      }
      if (s(n, "version") !== e) return null;
      var r = s(n, "campaign"),
        o = u(n);
      return {
        campaign: {
          audience: l(r, "audience"),
          budget: "",
          budget_pct: l(r, "budget_pct"),
          budget_rationale: "",
          creative: l(r, "creative"),
          end_date: l(r, "end_date"),
          id: "",
          insight: "",
          name: "",
          objective: l(r, "objective"),
          placement: "",
          start_date: l(r, "start_date"),
          timeline_end: "",
          timeline_start: "",
        },
        goalContext: l(n, "goal_context"),
        goalDetail: l(n, "goal_detail"),
        isTitleProvisional: o.has("title"),
        provisionalRowKeys: o,
        title: l(n, "title"),
        totalBudget: l(n, "total_budget"),
      };
    }
    i.parseMAIBACampaignPlanProgress = c;
  },
  66,
);

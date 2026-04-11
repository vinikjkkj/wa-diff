__d(
  "WAWebBizAdLoggerUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return null;
      var t = parseInt(e);
      return isNaN(t) ? null : String(e);
    }
    function l(e) {
      if (e == null) return null;
      var t = {};
      for (var n in e) {
        var r = e[n];
        t[n] = r != null ? String(r) : "";
      }
      return t;
    }
    var s = { DAILY_BUDGET: "daily", LIFETIME_BUDGET: "lifetime" };
    function u(e) {
      return e == null ? null : s[e];
    }
    ((i.toInt64 = e),
      (i.convertExtraData = l),
      (i.budgetTypeToAdmanagerCampaignBudgetType = u));
  },
  66,
);

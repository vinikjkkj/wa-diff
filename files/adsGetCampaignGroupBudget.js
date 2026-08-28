__d(
  "adsGetCampaignGroupBudget",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t, n;
      return Number(
        (t = (n = e.daily_budget) != null ? n : e.lifetime_budget) != null
          ? t
          : 0,
      );
    }
    i.default = e;
  },
  66,
);

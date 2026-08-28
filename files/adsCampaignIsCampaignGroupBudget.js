__d(
  "adsCampaignIsCampaignGroupBudget",
  ["adsCampaignGetBudgetMode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        r("adsCampaignGetBudgetMode")(e, t) !== "daily" &&
        r("adsCampaignGetBudgetMode")(e, t) !== "lifetime"
      );
    }
    l.default = e;
  },
  98,
);

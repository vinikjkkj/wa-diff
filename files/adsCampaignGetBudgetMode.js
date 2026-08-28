__d(
  "adsCampaignGetBudgetMode",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = t != null ? Number(t) : null;
      return (e === 0 && n === 0) || e ? "daily" : n ? "lifetime" : null;
    }
    i.default = e;
  },
  66,
);

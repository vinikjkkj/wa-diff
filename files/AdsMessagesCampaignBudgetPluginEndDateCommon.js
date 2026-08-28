__d(
  "AdsMessagesCampaignBudgetPluginEndDateCommon",
  ["AdsDefaultCampaignBudgetPlugin", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2e3,
      s = 35e3;
    function u(e) {
      return null;
    }
    function c(e, t, n) {
      var o = d(e, t, n);
      return r("isTruthy")(o)
        ? o
        : r("AdsDefaultCampaignBudgetPlugin").getDefaultEndDate(e, null, t, n);
    }
    function d(e, t, n) {
      var o = u(e);
      return r("isTruthy")(o)
        ? o
        : r("AdsDefaultCampaignBudgetPlugin").getDefaultEndDate(e, null, t, n);
    }
    ((l.DEFAULT_DAILY_BUDGET = e),
      (l.DEFAULT_LIFETIME_BUDGET = s),
      (l.maybeGetClickToMessageDefaultEndDate = u),
      (l.getMessagesDefaultEndDate = c));
  },
  98,
);

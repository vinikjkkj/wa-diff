__d(
  "isMarketingMessagesBlockedByTrafficLpvTrust",
  [
    "AdsAPIOptimizationGoals",
    "gkx",
    "isMarketingMessagesIneligibleDueToNotHighTrust",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        r("gkx")("3260") &&
        e === r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS &&
        o(
          "isMarketingMessagesIneligibleDueToNotHighTrust",
        ).isMarketingMessagesIneligibleDueToNotHighTrust(t)
      );
    }
    l.isMarketingMessagesBlockedByTrafficLpvTrust = e;
  },
  98,
);

__d(
  "WAWebNewsletterReachSummaryUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return t && (e == null ? void 0 : e.accountsReachedAll) != null
        ? { accountsReached: e.accountsReachedAll, reachDelta: e.reachDeltaAll }
        : {
            accountsReached: e == null ? void 0 : e.accountsReachedChannels,
            reachDelta: e == null ? void 0 : e.reachDeltaChannels,
          };
    }
    i.getNewsletterReachSummary = e;
  },
  66,
);

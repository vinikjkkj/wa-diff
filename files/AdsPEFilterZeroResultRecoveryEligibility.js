__d(
  "AdsPEFilterZeroResultRecoveryEligibility",
  ["AdsPEFilterZeroResultRecoveryLevel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.currentLevel,
        n = e.isInAdsManager;
      return (
        n &&
        o(
          "AdsPEFilterZeroResultRecoveryLevel",
        ).getIsAdsPEFilterZeroResultRecoveryLevelSupported(t)
      );
    }
    function s(e) {
      var t = e.currentAccountID,
        n = e.currentDraftID,
        r = e.currentFilterSetKey,
        o = e.hasCompletedTableLoad,
        a = e.hasLoadError,
        i = e.isFilterAndSortLoading,
        l = e.isLoading,
        s = e.loadedRequestAccountID,
        u = e.loadedRequestDraftID,
        c = e.loadedRequestFilterSetKey;
      return a
        ? "invalid"
        : !o || i || l
          ? "pending"
          : t == null || n == null || t !== s || n !== u || r !== c
            ? "invalid"
            : "settled";
    }
    ((l.getIsAdsPEFilterZeroResultRecoveryOpportunityTrackingEnabled = e),
      (l.getAdsPEFilterResultSnapshotStatus = s));
  },
  98,
);

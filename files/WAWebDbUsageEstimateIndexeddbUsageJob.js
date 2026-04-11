__d(
  "WAWebDbUsageEstimateIndexeddbUsageJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebEstimateIndexeddbUsageApi",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t =
          e === void 0
            ? { printTables: !0, sampleRate: 0.05, forceWebCacheBreakdown: !1 }
            : e,
        n = t.forceWebCacheBreakdown,
        r = t.printTables,
        a = t.sampleRate;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getEstimatedIndexedDbUsage",
          function (e) {
            return o(
              "WAWebEstimateIndexeddbUsageApi",
            ).getEstimatedIndexedDbUsage(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW },
        )
        .waitUntilCompleted({
          printTables: r,
          sampleRate: a,
          forceWebCacheBreakdown: n,
        });
    }
    function s() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "shouldMonitorDbStorageUsage",
          function (e) {
            return o(
              "WAWebEstimateIndexeddbUsageApi",
            ).shouldMonitorDbStorageUsage();
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT },
        )
        .waitUntilCompleted();
    }
    var u = {
      getEstimatedIndexedDbUsageJob: e,
      shouldMonitorDbStorageUsageJob: s,
    };
    l.default = u;
  },
  98,
);

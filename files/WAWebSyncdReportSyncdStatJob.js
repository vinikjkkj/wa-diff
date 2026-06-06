__d(
  "WAWebSyncdReportSyncdStatJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebMdAppStateSyncMutationStatsWamEvent",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSyncdWamUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "reportSyncdStats",
          async function () {
            var e = await o("WAWebSyncdWamUtils").generateActionStatCounts();
            for (var t of e.values()) {
              var n;
              new (o(
                "WAWebMdAppStateSyncMutationStatsWamEvent",
              ).MdAppStateSyncMutationStatsWamEvent)({
                syncdAction: t.action,
                applied: (n = o("WAWebSyncdWamUtils")).convertToBucket(
                  t.applied,
                ),
                invalid: n.convertToBucket(t.invalid),
                orphan: n.convertToBucket(t.orphan),
                unsupported: n.convertToBucket(t.unsupported),
                failed: n.convertToBucket(t.failed),
              }).commit();
            }
          },
          {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT,
            maxTimeoutMs: 1e3 * 30,
          },
        )
        .waitUntilCompleted();
    }
    l.reportSyncdStatsJob = e;
  },
  98,
);

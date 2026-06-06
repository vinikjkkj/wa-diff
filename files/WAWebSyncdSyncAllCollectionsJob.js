__d(
  "WAWebSyncdSyncAllCollectionsJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSyncd",
    "WAWebUserPrefsAppStateSync",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "syncdSyncAllCollections",
          async function () {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: periodic sync for all collection",
                ])),
            ),
              await o("WAWebSyncd").markCollectionsForSync([
                o("WASyncdConst").CollectionName.CriticalBlock,
                o("WASyncdConst").CollectionName.CriticalUnblockLow,
                o("WASyncdConst").CollectionName.Regular,
                o("WASyncdConst").CollectionName.RegularLow,
                o("WASyncdConst").CollectionName.RegularHigh,
              ]),
              await o(
                "WAWebUserPrefsAppStateSync",
              ).setLastPeriodicAppStateSyncTs(o("WATimeUtils").unixTime()));
          },
          {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW,
            maxTimeoutMs: 1e3 * 30,
          },
        )
        .waitUntilCompleted();
    }
    l.syncdSyncAllCollectionsJob = s;
  },
  98,
);

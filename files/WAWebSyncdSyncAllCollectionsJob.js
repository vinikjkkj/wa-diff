__d(
  "WAWebSyncdSyncAllCollectionsJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSyncd",
    "WAWebSyncdConst",
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
                o("WAWebSyncdConst").CollectionName.CriticalBlock,
                o("WAWebSyncdConst").CollectionName.CriticalUnblockLow,
                o("WAWebSyncdConst").CollectionName.Regular,
                o("WAWebSyncdConst").CollectionName.RegularLow,
                o("WAWebSyncdConst").CollectionName.RegularHigh,
              ]),
              await o(
                "WAWebUserPrefsAppStateSync",
              ).setLastPeriodicAppStateSyncTs(o("WATimeUtils").unixTime()));
          },
          {
            priority: o("WAJobOrchestratorTypes").JobPriority.LOW,
            maxTimeoutMs: 1e3 * 30,
          },
        )
        .waitUntilCompleted();
    }
    l.syncdSyncAllCollectionsJob = s;
  },
  98,
);

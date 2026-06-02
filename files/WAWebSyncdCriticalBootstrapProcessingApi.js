__d(
  "WAWebSyncdCriticalBootstrapProcessingApi",
  [
    "WATimeUtils",
    "WAWebMdBootstrapAppStateCriticalDataProcessingWamEvent",
    "WAWebSyncBootstrap",
    "WAWebSyncdMdSyncFieldstatMeta",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      r("WAWebSyncBootstrap").isSyncDCriticalDataSyncInProcess() &&
        new (o(
          "WAWebMdBootstrapAppStateCriticalDataProcessingWamEvent",
        ).MdBootstrapAppStateCriticalDataProcessingWamEvent)({
          bootstrapAppStateDataStage: e,
          mdSessionId: await o(
            "WAWebSyncdMdSyncFieldstatMeta",
          ).MdSyncFieldStatsMeta.getMdSessionId(),
          mdTimestamp: o("WATimeUtils").unixTimeMs(),
        }).commit();
    }
    l.logCriticalBootstrapStageIfNecessary = e;
  },
  98,
);

__d(
  "WAWebSyncdCriticalBootstrapProcessingApi",
  [
    "WATimeUtils",
    "WAWebMdBootstrapAppStateCriticalDataProcessingWamEvent",
    "WAWebSyncBootstrap",
    "WAWebSyncdConst",
    "WAWebSyncdMdSyncFieldstatMeta",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      r("WAWebSyncBootstrap").isSyncDCriticalDataSyncInProcess() &&
        (e === o("WAWebSyncdConst").CollectionName.CriticalBlock
          ? r("WAWebSyncBootstrap").recordPushNameMutationTrace(t, 0, 0, 0, 0)
          : e === o("WAWebSyncdConst").CollectionName.CriticalUnblockLow &&
            r("WAWebSyncBootstrap").recordPushNameMutationTrace(0, t, 0, 0, 0));
    }
    async function s(e) {
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
    ((l.recordCriticalCollectionMutations = e),
      (l.logCriticalBootstrapStageIfNecessary = s));
  },
  98,
);

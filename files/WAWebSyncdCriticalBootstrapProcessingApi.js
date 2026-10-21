__d(
  "WAWebSyncdCriticalBootstrapProcessingApi",
  [
    "WATimeUtils",
    "WAWebMdBootstrapAppStateCriticalDataProcessingWamEvent",
    "WAWebSyncBootstrap",
    "WAWebSyncdConst",
    "WAWebSyncdMdSyncFieldstatMeta",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      r("WAWebSyncBootstrap").isSyncDCriticalDataSyncInProcess() &&
        (e === o("WAWebSyncdConst").CollectionName.CriticalBlock
          ? r("WAWebSyncBootstrap").recordPushNameMutationTrace(t, 0, 0, 0, 0)
          : e === o("WAWebSyncdConst").CollectionName.CriticalUnblockLow &&
            r("WAWebSyncBootstrap").recordPushNameMutationTrace(0, t, 0, 0, 0));
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("WAWebSyncBootstrap").isSyncDCriticalDataSyncInProcess() &&
            new (o(
              "WAWebMdBootstrapAppStateCriticalDataProcessingWamEvent",
            ).MdBootstrapAppStateCriticalDataProcessingWamEvent)({
              bootstrapAppStateDataStage: e,
              mdSessionId: yield o(
                "WAWebSyncdMdSyncFieldstatMeta",
              ).MdSyncFieldStatsMeta.getMdSessionId(),
              mdTimestamp: o("WATimeUtils").unixTimeMs(),
            }).commit();
        })),
        u.apply(this, arguments)
      );
    }
    ((l.recordCriticalCollectionMutations = e),
      (l.logCriticalBootstrapStageIfNecessary = s));
  },
  98,
);

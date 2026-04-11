__d(
  "WAWebSyncdCriticalBootstrapProcessingApi",
  [
    "WATimeUtils",
    "WAWebMdBootstrapAppStateCriticalDataProcessingWamEvent",
    "WAWebSyncBootstrap",
    "WAWebSyncdMdSyncFieldstatMeta",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        s.apply(this, arguments)
      );
    }
    l.logCriticalBootstrapStageIfNecessary = e;
  },
  98,
);

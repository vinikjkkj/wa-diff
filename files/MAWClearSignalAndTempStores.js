__d(
  "MAWClearSignalAndTempStores",
  [
    "MAWDeleteOldLogsFromDisk",
    "MAWInMemoryGroupInfoStore",
    "MAWInMemoryParticipantStore",
    "MAWLoggingSwitches",
    "Promise",
    "WAClearSignalStoresV2",
    "WmiMetadataRecurringTasksWriter",
    "emptyFunction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function () {
        return (
          o("MAWInMemoryGroupInfoStore").clearInMemoryGroupInfoStore(),
          o("MAWInMemoryParticipantStore").clearInMemoryParticipantStore(),
          (e || (e = n("Promise")))
            .all([
              o("MAWLoggingSwitches").removeLoggingFromBridge &&
                o("MAWDeleteOldLogsFromDisk").clearLogs(),
              o("WAClearSignalStoresV2").clearSignalStores(),
              o(
                "WmiMetadataRecurringTasksWriter",
              ).clearRecurringTasksInMetadataDb(),
            ])
            .then(r("emptyFunction"))
        );
      };
    l.clearSignalAndTempStores = s;
  },
  98,
);

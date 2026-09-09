__d(
  "WAWebSyncdMetricCriticalBootstrapStage",
  [
    "WAWebCollectionHandlerWamMutation",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      (o(
        "WAWebSyncdCriticalBootstrapProcessingApi",
      ).logCriticalBootstrapStageIfNecessary(
        o("WAWebWamEnumBootstrapAppStateDataStageCode")
          .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MUTATIONS_DECRYPTED,
      ),
        e.forEach(function (e) {
          var t = e.binarySyncData,
            n = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
              t,
            ),
            r = n.value;
          if (r != null) {
            var a;
            (r.archiveChatAction
              ? (a = r.archiveChatAction.messageRange)
              : r.markChatAsReadAction
                ? (a = r.markChatAsReadAction.messageRange)
                : r.clearChatAction
                  ? (a = r.clearChatAction.messageRange)
                  : r.deleteChatAction && (a = r.deleteChatAction.messageRange),
              a != null &&
                o(
                  "WAWebCollectionHandlerWamMutation",
                ).logMetricsForMutationLength(a.messages.length));
          }
        }));
    }
    l.reportSyncdDecryptedMutations = e;
  },
  98,
);

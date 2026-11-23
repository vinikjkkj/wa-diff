__d(
  "WAWebSendAiMediaCollectionEnvelope",
  [
    "WAJobOrchestratorTypes",
    "WAWebBackendRuntime",
    "WAWebDBProcessMessage",
    "WAWebMessageSendService",
    "WAWebMessageStoreService",
    "WAWebMsgModel",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSendMsgRecordAction",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = new (o("WAWebMsgModel").Msg)(t);
      await o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "sendMessage",
          async function () {
            return (
              await (
                o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebMessageStoreService").MessageStoreService,
                    ).storeMessages
                  : o("WAWebDBProcessMessage").storeMessages
              )([t], e.id),
              await (
                o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebMessageSendService").MessageSendService,
                    ).sendMsgRecord
                  : o("WAWebSendMsgRecordAction").sendMsgRecord
              )(n)
            );
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.sendAiMediaCollectionEnvelope = e;
  },
  98,
);

__d(
  "WAWebSendAddonMsgChatAction",
  [
    "WAJobOrchestratorTypes",
    "WAWebBackendRuntime",
    "WAWebMessageSendService",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSendMsgRecordAction",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "sendMessage",
          async function () {
            return (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageSendService").MessageSendService,
                  ).sendAddonRecord
                : o("WAWebSendMsgRecordAction").sendAddonRecord
            )(e);
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.addAndSendAddonToChat = e;
  },
  98,
);

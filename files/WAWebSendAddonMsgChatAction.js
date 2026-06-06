__d(
  "WAWebSendAddonMsgChatAction",
  [
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSendMsgRecordAction",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "sendMessage",
          async function () {
            return o("WAWebSendMsgRecordAction").sendAddonRecord(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.addAndSendAddonToChat = e;
  },
  98,
);

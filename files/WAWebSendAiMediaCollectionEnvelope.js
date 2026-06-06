__d(
  "WAWebSendAiMediaCollectionEnvelope",
  [
    "WAJobOrchestratorTypes",
    "WAWebDBProcessMessage",
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
              await o("WAWebDBProcessMessage").storeMessages([t], e.id),
              await o("WAWebSendMsgRecordAction").sendMsgRecord(n)
            );
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.sendAiMediaCollectionEnvelope = e;
  },
  98,
);

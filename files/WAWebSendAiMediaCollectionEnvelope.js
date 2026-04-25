__d(
  "WAWebSendAiMediaCollectionEnvelope",
  [
    "WAJobOrchestratorTypes",
    "WAWebDBProcessMessage",
    "WAWebMsgModel",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSendMsgRecordAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = new (o("WAWebMsgModel").Msg)(t);
          yield o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "sendMessage",
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                return (
                  yield o("WAWebDBProcessMessage").storeMessages([t], e.id),
                  yield o("WAWebSendMsgRecordAction").sendMsgRecord(r)
                );
              }),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted();
        })),
        s.apply(this, arguments)
      );
    }
    l.sendAiMediaCollectionEnvelope = e;
  },
  98,
);

__d(
  "WAWebProcessAddonsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "processEditProtocolMsgs",
              function (e) {
                return o(
                  "WAWebDBProcessEditProtocolMsgs",
                ).processEditProtocolMsgs(e.msgs);
              },
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted({ msgs: e });
          yield t;
        })),
        s.apply(this, arguments)
      );
    }
    l.processEditProtocolMsgsJob = e;
  },
  98,
);

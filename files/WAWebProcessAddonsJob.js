__d(
  "WAWebProcessAddonsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "processEditProtocolMsgs",
          function (e) {
            return o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgs(
              e.msgs,
            );
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted({ msgs: e });
      await t;
    }
    l.processEditProtocolMsgsJob = e;
  },
  98,
);

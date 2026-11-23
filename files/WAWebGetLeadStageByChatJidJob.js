__d(
  "WAWebGetLeadStageByChatJidJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebLeadStageSublistSelector",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.chatJid;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getLeadStageByChatJid",
          async function () {
            return o(
              "WAWebLeadStageSublistSelector",
            ).getLeadStageForChatFromSublist(t);
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getLeadStageByChatJidJob = e;
  },
  98,
);

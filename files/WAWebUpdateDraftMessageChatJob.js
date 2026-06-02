__d(
  "WAWebUpdateDraftMessageChatJob",
  [
    "WAAbortError",
    "WAJobOrchestratorTypes",
    "WAWebDBChatSerialization",
    "WAWebDBUpdateChatTable",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.abortSignal,
        n = e.chatId,
        r = e.draftMessage,
        a = o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "updateDraftMessageChat",
            function (e) {
              if (e.abortSignal.aborted)
                throw new (o("WAAbortError").AbortError)();
              return o("WAWebDBUpdateChatTable").updateChatTable(
                e.chatId,
                o("WAWebDBChatSerialization").serializeChat({
                  draftMessage: e.draftMessage,
                }),
              );
            },
            { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
          )
          .waitUntilCompleted({ chatId: n, draftMessage: r, abortSignal: t });
      await a;
    }
    l.updateDraftMessageChat = e;
  },
  98,
);

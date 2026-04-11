__d(
  "WAWebUpdateDraftMessageChatJob",
  [
    "WAAbortError",
    "WAJobOrchestratorTypes",
    "WAWebDBChatSerialization",
    "WAWebDBUpdateChatTable",
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
                {
                  priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION,
                },
              )
              .waitUntilCompleted({
                chatId: n,
                draftMessage: r,
                abortSignal: t,
              });
          yield a;
        })),
        s.apply(this, arguments)
      );
    }
    l.updateDraftMessageChat = e;
  },
  98,
);

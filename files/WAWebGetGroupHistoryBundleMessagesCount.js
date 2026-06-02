__d(
  "WAWebGetGroupHistoryBundleMessagesCount",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBackendApi",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebRetrieveMessagesForBundle",
    "WAWebSerializeError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = t.groupWid,
        a = t.targetStartMessageTime;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getGroupHistoryBundleMessageCount",
          async function () {
            try {
              var t = await o(
                "WAWebRetrieveMessagesForBundle",
              ).retrieveMessagesForBundle(n, null, a);
              return (
                o("WAWebBackendApi").frontendFireAndForget(
                  "logGroupHistorySelectableMessagesLoaded",
                  { groupHistoryMessagesCount: t.length },
                ),
                t.length
              );
            } catch (t) {
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] bundle msg count failed: ",
                        "",
                      ])),
                    r("WAWebSerializeError")(t),
                  )
                  .sendLogs("group-history-bundle-message-count-failed"),
                0
              );
            }
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getGroupHistoryBundleMessageCount = s;
  },
  98,
);

__d(
  "WAWebGetGroupHistoryBundleMessagesCount",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBackendApi",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebRetrieveMessagesForBundle",
    "WAWebSerializeError",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.groupWid,
            i = t.targetStartMessageTime;
          return o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "getGroupHistoryBundleMessageCount",
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  var t = yield o(
                    "WAWebRetrieveMessagesForBundle",
                  ).retrieveMessagesForBundle(a, null, i);
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
              }),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted();
        })),
        u.apply(this, arguments)
      );
    }
    l.getGroupHistoryBundleMessageCount = s;
  },
  98,
);

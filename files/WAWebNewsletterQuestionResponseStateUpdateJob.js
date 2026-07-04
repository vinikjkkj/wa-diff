__d(
  "WAWebNewsletterQuestionResponseStateUpdateJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexNewsletterQuestionResponseStateUpdateJob",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateNewsletterQuestionResponseState",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              return o(
                "WAWebMexNewsletterQuestionResponseStateUpdateJob",
              ).mexNewsletterQuestionResponseStateUpdate({
                newsletterId: t.newsletterId,
                serverId: t.serverId,
                responseServerId: t.responseServerId,
                state: t.state,
              });
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[MEX][NEWSLETTER] update question response state",
                      ])),
                  )
                  .tags("GQL", "MEX"),
                t
              );
            }
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.updateNewsletterQuestionResponseState = s;
  },
  98,
);

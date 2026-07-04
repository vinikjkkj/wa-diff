__d(
  "WAWebNewsletterBlockUserJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexNewsletterBlockUserJob",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "blockNewsletterUser",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              return o("WAWebMexNewsletterBlockUserJob").mexNewsletterBlockUser(
                {
                  newsletterId: t.newsletterId,
                  serverId: t.serverId,
                  responseServerId: t.responseServerId,
                },
              );
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[MEX][NEWSLETTER] block user from newsletter failed",
                      ])),
                  )
                  .tags("GQL", "MEX", "NEWSLETTER", "RESPONSE"),
                t
              );
            }
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.blockNewsletterUser = s;
  },
  98,
);

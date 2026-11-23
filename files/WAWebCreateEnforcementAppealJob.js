__d(
  "WAWebCreateEnforcementAppealJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexCreateEnforcementAppealJob",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "createEnforcementAppeal",
          async function () {
            try {
              return await o(
                "WAWebMexCreateEnforcementAppealJob",
              ).mexCreateEnforcementAppeal(t);
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[MEX][NEWSLETTER] create enforcement appeal",
                      ])),
                  )
                  .tags("GQL", "MEX"),
                t
              );
            }
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.createEnforcementAppeal = s;
  },
  98,
);

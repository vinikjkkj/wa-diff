__d(
  "WAWebCreateEnforcementAppealJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexCreateEnforcementAppealJob",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "createEnforcementAppeal",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              return yield o(
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
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.createEnforcementAppeal = s;
  },
  98,
);

__d(
  "WAWebGetDynamicAIModesJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebDynamicAIModesCache",
    "WAWebDynamicAIModesMapper",
    "WAWebFetchDynamicAIModes",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getDynamicAIModes",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield o(
              "WAWebDynamicAIModesCache",
            ).getCachedDynamicAIModes();
            if (t != null) return t;
            var n = yield o("WAWebFetchDynamicAIModes").fetchDynamicAIModes();
            if (n.type === "success") {
              var r = o(
                "WAWebDynamicAIModesMapper",
              ).mapFetchedModesToDynamicAIModeList(n.value);
              return (
                r.length > 0
                  ? o("WAWebDynamicAIModesCache").setCachedDynamicAIModes(r)
                  : o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[getDynamicAIModes] GQL returned empty mode list",
                        ])),
                    ),
                r
              );
            }
            var a = yield o(
              "WAWebDynamicAIModesCache",
            ).getStaleCachedDynamicAIModes();
            return a != null
              ? a
              : (o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[getDynamicAIModes] GQL failed, no cache available",
                    ])),
                ),
                []);
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getDynamicAIModes = u;
  },
  98,
);

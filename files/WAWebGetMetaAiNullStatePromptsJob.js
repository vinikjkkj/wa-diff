__d(
  "WAWebGetMetaAiNullStatePromptsJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebFetchMetaAiNullStatePromptsGQL",
    "WAWebMetaAiNullStatePromptsCache",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, r) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getMetaAiNullStatePrompts",
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t.expConfig,
                  r = t.locale,
                  a = { locale: r, expConfig: n },
                  i = yield o(
                    "WAWebMetaAiNullStatePromptsCache",
                  ).MetaAiNullStatePromptsCache.get(a);
                if (i != null && i.length > 0) return i;
                var l = yield o(
                  "WAWebFetchMetaAiNullStatePromptsGQL",
                ).fetchMetaAiNullStatePrompts(r, n);
                return l.type === "success"
                  ? (l.value.length > 0
                      ? o(
                          "WAWebMetaAiNullStatePromptsCache",
                        ).MetaAiNullStatePromptsCache.set(a, l.value)
                      : o("WALogger").WARN(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[getMetaAiNullStatePrompts] GQL returned empty prompt list",
                            ])),
                        ),
                    l.value)
                  : (o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[getMetaAiNullStatePrompts] GQL fetch failed",
                        ])),
                    ),
                    []);
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted({ locale: t, expConfig: r });
    }
    l.getMetaAiNullStatePrompts = u;
  },
  98,
);

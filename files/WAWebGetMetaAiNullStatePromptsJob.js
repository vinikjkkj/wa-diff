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
    function u(t, r, a) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getMetaAiNullStatePrompts",
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t.expConfig,
                  r = t.locale,
                  a = t.nullStateSource,
                  i = { locale: r, nullStateSource: a, expConfig: n },
                  l = yield o(
                    "WAWebMetaAiNullStatePromptsCache",
                  ).MetaAiNullStatePromptsCache.get(i);
                if (l != null && l.length > 0) return l;
                var u = yield o(
                  "WAWebFetchMetaAiNullStatePromptsGQL",
                ).fetchMetaAiNullStatePrompts(r, a, n);
                return u.type === "success"
                  ? (u.value.length > 0
                      ? o(
                          "WAWebMetaAiNullStatePromptsCache",
                        ).MetaAiNullStatePromptsCache.set(i, u.value)
                      : o("WALogger").WARN(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[getMetaAiNullStatePrompts] GQL returned empty prompt list",
                            ])),
                        ),
                    u.value)
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
        .waitUntilCompleted({ locale: t, nullStateSource: r, expConfig: a });
    }
    l.getMetaAiNullStatePrompts = u;
  },
  98,
);

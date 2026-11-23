__d(
  "WAWebGetMetaAiNullStatePromptsJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebFetchMetaAiNullStatePromptsGQL",
    "WAWebMetaAiNullStatePromptsCache",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getMetaAiNullStatePrompts",
          async function (t) {
            var n = t.expConfig,
              r = t.locale,
              a = o(
                "WAWebMetaAiNullStatePromptsCache",
              ).makeMetaAiNullStatePromptsCacheKey(r, n),
              i = await o(
                "WAWebMetaAiNullStatePromptsCache",
              ).MetaAiNullStatePromptsCache.get(a);
            if (i != null && i.length > 0) return i;
            var l = await o(
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
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted({ locale: t, expConfig: n });
    }
    l.getMetaAiNullStatePrompts = u;
  },
  98,
);

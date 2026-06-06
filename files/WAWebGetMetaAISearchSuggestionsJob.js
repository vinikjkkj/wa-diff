__d(
  "WAWebGetMetaAISearchSuggestionsJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebFetchMetaAISearchNullStateSuggestions",
    "WAWebFetchMetaAISearchTypeAheadSuggestions",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUserPrefsBot",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getMetaAISearchNullStateSuggestions",
          async function () {
            var n =
              await o("WAWebUserPrefsBot").MetaAINullStateSuggestionsCache.get(
                t,
              );
            if (n != null) return n;
            var r = await o(
              "WAWebFetchMetaAISearchNullStateSuggestions",
            ).fetchMetaAISearchNullStateSuggestions(t);
            return r.type === "success"
              ? (r.value.length > 0
                  ? (o("WAWebUserPrefsBot").setMetaAISearchNullStateIndex(0),
                    o("WAWebUserPrefsBot").MetaAINullStateSuggestionsCache.set(
                      t,
                      r.value,
                    ))
                  : o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[getMetaAISearchNullStateSuggestions] empty results",
                        ])),
                    ),
                r.value)
              : [];
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    async function c(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getMetaAISearchTypeAheadSuggestions",
          async function () {
            var t =
              await o("WAWebUserPrefsBot").MetaAITypeAheadSuggestionsCache.get(
                e,
              );
            if (t != null) return t;
            var n = await o(
              "WAWebFetchMetaAISearchTypeAheadSuggestions",
            ).fetchMetaAISearchTypeAheadSuggestions(e);
            return n.type === "success"
              ? (n.value.length > 0
                  ? o("WAWebUserPrefsBot").MetaAITypeAheadSuggestionsCache.set(
                      e,
                      n.value,
                    )
                  : o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[getMetaAISearchTypeAheadSuggestions] empty results",
                        ])),
                    ),
                n.value)
              : [];
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    ((l.getMetaAISearchNullStateSuggestions = u),
      (l.getMetaAISearchTypeAheadSuggestions = c));
  },
  98,
);

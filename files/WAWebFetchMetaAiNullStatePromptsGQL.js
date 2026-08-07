__d(
  "WAWebFetchMetaAiNullStatePromptsGQL",
  [
    "WALogger",
    "WAWebFetchMetaAiNullStatePromptsGQLQuery.graphql",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebFetchMetaAiNullStatePromptsGQLQuery.graphql"));
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          yield r("WAWebNetworkStatus").waitIfOffline();
          try {
            var a,
              i,
              l = yield o("WAWebRelayClient").fetchQuery(
                u,
                { locale: e, null_state_source: t, exp_config: n },
                { environmentType: "whatsapp_web" },
              ),
              c =
                (a =
                  l == null ||
                  (i = l.xwa_genai_meta_ai_search_null_state) == null
                    ? void 0
                    : i.suggestions) != null
                  ? a
                  : [],
              d = [];
            for (var m of c)
              (m == null ? void 0 : m.suggestion) != null &&
                (m == null ? void 0 : m.query) != null &&
                d.push({ suggestion: m.suggestion, query: m.query });
            return { type: "success", value: d };
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[fetchMetaAiNullStatePrompts] failed to fetch prompts",
                    ])),
                )
                .tags("GQL")
                .catching(r("getErrorSafe")(e))
                .sendLogs("meta-ai-null-state-prompts-fetch-failed"),
              { type: "error" }
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.fetchMetaAiNullStatePrompts = c;
  },
  98,
);

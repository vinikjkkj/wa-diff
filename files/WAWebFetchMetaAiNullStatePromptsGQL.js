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
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield r("WAWebNetworkStatus").waitIfOffline();
          try {
            var n,
              a,
              i = yield o("WAWebRelayClient").fetchQuery(
                u,
                { locale: e, exp_config: t },
                { environmentType: "whatsapp_web" },
              ),
              l =
                (n =
                  i == null ||
                  (a = i.xwa_genai_meta_ai_search_null_state) == null
                    ? void 0
                    : a.suggestions) != null
                  ? n
                  : [],
              c = [];
            for (var d of l)
              (d == null ? void 0 : d.display_string) != null &&
                (d == null ? void 0 : d.query) != null &&
                c.push({ display: d.display_string, query: d.query });
            return { type: "success", value: c };
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

__d(
  "WAWebFetchMetaAISearchNullStateSuggestions",
  [
    "WALogger",
    "WAWebFetchMetaAISearchNullStateSuggestionsQuery.graphql",
    "WAWebGraphQLConstants",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "compactMap",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebFetchMetaAISearchNullStateSuggestionsQuery.graphql"));
    async function c(e) {
      await r("WAWebNetworkStatus").waitIfOffline();
      var t = e.experimentConfig,
        n = e.locale,
        a = e.nullStateSource,
        i = { locale: n, null_state_source: a, exp_config: t };
      try {
        var l = await o("WAWebRelayClient").fetchQuery(u, i, {
            environmentType: "whatsapp_www",
            accessToken: o("WAWebGraphQLConstants")
              .WHATSAPP_GRAPHQL_WWW_ACCESS_TOKEN,
          }),
          c = d(l);
        return { type: "success", value: c };
      } catch (e) {
        return (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[GQL] fetchMetaAISearchNullStateSuggestions failed",
              ])),
          ),
          e instanceof o("WAWebGraphQLServerError").GraphQLServerError
            ? { type: "graphql-error", error: e }
            : { type: "error" }
        );
      }
    }
    function d(e) {
      var t,
        n,
        o =
          (t =
            e == null || (n = e.xwa_genai_meta_ai_search_null_state) == null
              ? void 0
              : n.suggestions) != null
            ? t
            : [];
      return r("compactMap")(o, function (e) {
        var t,
          n = (t = e.query) == null ? void 0 : t.trim();
        if (!r("isStringNullOrEmpty")(n))
          return {
            query: n,
            suggestion: e.suggestion,
            sessionId: e.session_id,
          };
      });
    }
    ((l.fetchMetaAISearchNullStateSuggestions = c),
      (l.parseMetaAISearchNullStateSuggestions = d));
  },
  98,
);

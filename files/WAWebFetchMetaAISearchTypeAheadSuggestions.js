__d(
  "WAWebFetchMetaAISearchTypeAheadSuggestions",
  [
    "WALogger",
    "WAWebFetchMetaAISearchTypeAheadSuggestionsQuery.graphql",
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
          : (e = n("WAWebFetchMetaAISearchTypeAheadSuggestionsQuery.graphql"));
    async function c(e) {
      await r("WAWebNetworkStatus").waitIfOffline();
      var t = e.capabilities,
        n = e.experimentConfig,
        a = e.locale,
        i = e.query,
        l = { param: { query: i, locale: a, exp_config: n, capabilities: t } };
      try {
        var c = await o("WAWebRelayClient").fetchQuery(u, l, {
            environmentType: "whatsapp_www",
            accessToken: o("WAWebGraphQLConstants")
              .WHATSAPP_GRAPHQL_WWW_ACCESS_TOKEN,
          }),
          m = d(c);
        return { type: "success", value: m };
      } catch (e) {
        return (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[GQL][getMetaAISearchTypeAheadSuggestions] failed",
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
            e == null || (n = e.xwa_genai_meta_ai_search_typeahead) == null
              ? void 0
              : n.suggestions) != null
            ? t
            : [];
      return r("compactMap")(o, function (e) {
        var t,
          n = (t = e.query) == null ? void 0 : t.trim();
        if (!r("isStringNullOrEmpty")(n))
          return { query: n, context: e.context, sessionId: e.session_id };
      });
    }
    ((l.fetchMetaAISearchTypeAheadSuggestions = c),
      (l.parseMetaAISearchTypeAheadSuggestions = d));
  },
  98,
);

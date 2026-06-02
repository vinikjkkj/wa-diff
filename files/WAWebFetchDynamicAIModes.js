__d(
  "WAWebFetchDynamicAIModes",
  [
    "WAWebFetchDynamicAIModesQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebFetchDynamicAIModesQuery.graphql"));
    async function u() {
      await r("WAWebNetworkStatus").waitIfOffline();
      try {
        var e,
          t,
          n = await o("WAWebRelayClient").fetchQuery(
            s,
            {},
            { environmentType: "whatsapp_web" },
          );
        return {
          type: "success",
          value:
            (e =
              n == null || (t = n.xfb_meta_ai_modes) == null
                ? void 0
                : t.map(function (e) {
                    return {
                      mode_id: e.mode_id,
                      type: e.type,
                      is_experimental: e.is_experimental,
                      title: e.title,
                      subtitle: e.subtitle,
                    };
                  })) != null
              ? e
              : [],
        };
      } catch (e) {
        return e instanceof o("WAWebGraphQLServerError").GraphQLServerError
          ? { type: "graphql-error", error: e }
          : { type: "error" };
      }
    }
    l.fetchDynamicAIModes = u;
  },
  98,
);

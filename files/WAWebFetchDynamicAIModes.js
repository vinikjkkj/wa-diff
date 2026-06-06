__d(
  "WAWebFetchDynamicAIModes",
  [
    "WAWebFetchDynamicAIModesQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebFetchDynamicAIModesQuery.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield r("WAWebNetworkStatus").waitIfOffline();
          try {
            var e,
              t,
              n = yield o("WAWebRelayClient").fetchQuery(
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
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchDynamicAIModes = u;
  },
  98,
);

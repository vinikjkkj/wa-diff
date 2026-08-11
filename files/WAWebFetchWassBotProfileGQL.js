__d(
  "WAWebFetchWassBotProfileGQL",
  [
    "WALogger",
    "WAWebFetchWassBotProfileGQLQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebWassBotProfileMapper",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c =
        e !== void 0 ? e : (e = n("WAWebFetchWassBotProfileGQLQuery.graphql"));
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield r("WAWebNetworkStatus").waitIfOffline();
          try {
            var t = yield o("WAWebRelayClient").fetchQuery(
                c,
                { botFbid: e },
                { environmentType: "whatsapp_web" },
              ),
              n = t == null ? void 0 : t.get_wass_account_profile;
            return o("WAWebWassBotProfileMapper").toWassBotProfileResult(
              n == null
                ? null
                : { is_deprecated: n.is_deprecated, product: n.product },
            );
          } catch (e) {
            return e instanceof o("WAWebGraphQLServerError").GraphQLServerError
              ? (o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[fetchWassBotProfileGQL] GraphQL error fetching WASS bot profile",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("sbp-fetch-wass-bot-profile-graphql-error"),
                { type: "graphql-error", error: e })
              : (o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[fetchWassBotProfileGQL] failed to fetch WASS bot profile",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("sbp-fetch-wass-bot-profile-error"),
                { type: "error" });
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.fetchWassBotProfileGQL = d;
  },
  98,
);

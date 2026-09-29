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
            var t,
              n = yield o("WAWebRelayClient").fetchQuery(
                c,
                { botFbid: e },
                { environmentType: "whatsapp_web" },
              ),
              a = n == null ? void 0 : n.get_wass_account_profile;
            return o("WAWebWassBotProfileMapper").toWassBotProfileResult(
              a == null
                ? null
                : {
                    creator_lid: a.creator_lid,
                    hca_entrypoint_id: a.hca_entrypoint_id,
                    is_deprecated: a.is_deprecated,
                    name: a.name,
                    product: a.product,
                    profile_pic_thumb_url: a.profile_pic_thumb_url,
                    profile_pic_full_url: a.profile_pic_full_url,
                    tos:
                      a.tos == null
                        ? null
                        : {
                            group: ((t = a.tos.group) != null ? t : []).map(
                              function (e) {
                                var t = e.blocking,
                                  n = e.id;
                                return { blocking: t, id: n };
                              },
                            ),
                          },
                  },
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

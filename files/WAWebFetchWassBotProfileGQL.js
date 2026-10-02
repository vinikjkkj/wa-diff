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
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (t === void 0 && (t = null),
            yield r("WAWebNetworkStatus").waitIfOffline());
          try {
            var n,
              a = yield o("WAWebRelayClient").fetchQuery(
                c,
                { botFbid: e, groupJid: t },
                { environmentType: "whatsapp_web" },
              ),
              i = a == null ? void 0 : a.get_wass_account_profile;
            return o("WAWebWassBotProfileMapper").toWassBotProfileResult(
              i == null
                ? null
                : {
                    creator_lid: i.creator_lid,
                    hca_entrypoint_id: i.hca_entrypoint_id,
                    is_deprecated: i.is_deprecated,
                    name: i.name,
                    product: i.product,
                    profile_pic_thumb_url: i.profile_pic_thumb_url,
                    profile_pic_full_url: i.profile_pic_full_url,
                    tos:
                      i.tos == null
                        ? null
                        : {
                            group: ((n = i.tos.group) != null ? n : []).map(
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

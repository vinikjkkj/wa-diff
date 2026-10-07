__d(
  "WAWebFetchWassBotProfileGQL",
  [
    "WALogger",
    "WAWebFetchWassBotProfileGQLQuery.graphql",
    "WAWebFetchWassBotProfileGQLWithoutGroupQuery.graphql",
    "WAWebFetchWassBotProfileGQL_profile.graphql",
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
      c,
      d,
      m,
      p =
        e !== void 0 ? e : (e = n("WAWebFetchWassBotProfileGQLQuery.graphql")),
      _ =
        s !== void 0
          ? s
          : (s = n("WAWebFetchWassBotProfileGQLWithoutGroupQuery.graphql")),
      f =
        u !== void 0
          ? u
          : (u = n("WAWebFetchWassBotProfileGQL_profile.graphql"));
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (t === void 0 && (t = null),
            yield r("WAWebNetworkStatus").waitIfOffline());
          try {
            var n,
              a,
              i = function (t) {
                a = t;
              },
              l =
                t == null
                  ? yield o("WAWebRelayClient").fetchQuery(
                      _,
                      { botFbid: e },
                      {
                        environmentType: "whatsapp_web",
                        getInlineDataReader: i,
                      },
                    )
                  : yield o("WAWebRelayClient").fetchQuery(
                      p,
                      { botFbid: e, groupJid: t },
                      {
                        environmentType: "whatsapp_web",
                        getInlineDataReader: i,
                      },
                    ),
              s = l == null ? void 0 : l.get_wass_account_profile,
              u = a;
            if (s != null && u == null)
              return (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[fetchWassBotProfileGQL] inline data reader unavailable",
                      ])),
                  )
                  .sendLogs("sbp-fetch-wass-bot-profile-no-reader"),
                { type: "error" }
              );
            var g = s == null || u == null ? null : u(f, s);
            return o("WAWebWassBotProfileMapper").toWassBotProfileResult(
              g == null
                ? null
                : {
                    creator_lid: g.creator_lid,
                    hca_entrypoint_id: g.hca_entrypoint_id,
                    is_deprecated: g.is_deprecated,
                    name: g.name,
                    product: g.product,
                    profile_pic_thumb_url: g.profile_pic_thumb_url,
                    profile_pic_full_url: g.profile_pic_full_url,
                    tos:
                      g.tos == null
                        ? null
                        : {
                            group: ((n = g.tos.group) != null ? n : []).map(
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[fetchWassBotProfileGQL] GraphQL error fetching WASS bot profile",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("sbp-fetch-wass-bot-profile-graphql-error"),
                { type: "graphql-error", error: e })
              : (o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[fetchWassBotProfileGQL] failed to fetch WASS bot profile",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("sbp-fetch-wass-bot-profile-error"),
                { type: "error" });
          }
        })),
        h.apply(this, arguments)
      );
    }
    l.fetchWassBotProfileGQL = g;
  },
  98,
);

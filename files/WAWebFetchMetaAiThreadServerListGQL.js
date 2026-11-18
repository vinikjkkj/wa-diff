__d(
  "WAWebFetchMetaAiThreadServerListGQL",
  [
    "WALogger",
    "WAWebFetchMetaAiThreadServerListGQLQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebWassBotProfileMapper",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d =
        e !== void 0
          ? e
          : (e = n("WAWebFetchMetaAiThreadServerListGQLQuery.graphql"));
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield r("WAWebNetworkStatus").waitIfOffline();
            var e = yield o("WAWebRelayClient").fetchQuery(
                d,
                {},
                { environmentType: "whatsapp_web" },
              ),
              t = e == null ? void 0 : e.wass_account_list_profiles;
            if (t == null)
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[fetchMetaAiThreadServerListGQL] missing-list",
                    ])),
                ),
                { type: "error", reason: "missing-list" }
              );
            var n = [];
            for (var a of t) {
              var i = a.bot_fbid;
              i == null ||
                i === "" ||
                n.push({
                  botFbid: i,
                  name: o("WAWebWassBotProfileMapper").emptyToNull(a.name),
                  isDeprecated: a.is_deprecated,
                  generatedEmoji: o("WAWebWassBotProfileMapper").emptyToNull(
                    a.generated_emoji,
                  ),
                  profilePicThumbUrl: o(
                    "WAWebWassBotProfileMapper",
                  ).emptyToNull(a.profile_pic_thumb_url),
                  profilePicFullUrl: o("WAWebWassBotProfileMapper").emptyToNull(
                    a.profile_pic_full_url,
                  ),
                });
            }
            return { type: "success", threads: n };
          } catch (e) {
            return o("WAWebGraphQLServerError").isWassAccountApiNotEnabledError(
              e,
            )
              ? (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[fetchMetaAiThreadServerListGQL] account-api-not-enabled",
                    ])),
                ),
                { type: "unavailable" })
              : (o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[fetchMetaAiThreadServerListGQL] request-failed",
                    ])),
                ),
                { type: "error", reason: "request-failed" });
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.fetchMetaAiThreadServerListGQL = m;
  },
  98,
);

__d(
  "WAWebFetchWassBotListProfilesGQL",
  [
    "WALogger",
    "WAWebFetchWassBotListProfilesGQLQuery.graphql",
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
      u =
        e !== void 0
          ? e
          : (e = n("WAWebFetchWassBotListProfilesGQLQuery.graphql"));
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield r("WAWebNetworkStatus").waitIfOffline();
          try {
            var e = yield o("WAWebRelayClient").fetchQuery(
                u,
                {},
                { environmentType: "whatsapp_web" },
              ),
              t = [];
            for (var n of (a =
              e == null ? void 0 : e.wass_account_list_profiles) != null
              ? a
              : []) {
              var a,
                i = n.bot_fbid;
              i == null ||
                i === "" ||
                t.push({
                  botFbid: i,
                  name: m(n.name),
                  profilePicThumbUrl: m(n.profile_pic_thumb_url),
                  profilePicFullUrl: m(n.profile_pic_full_url),
                  isDeprecated: n.is_deprecated,
                  product: o(
                    "WAWebWassBotProfileMapper",
                  ).mapWassProductToBotProduct(n.product),
                });
            }
            return { type: "success", profiles: t };
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[fetchWassBotListProfilesGQL] failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("sbp-list-fetch-error"),
              e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                ? { type: "graphql-error" }
                : { type: "error" }
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return e != null && e !== "" ? e : null;
    }
    l.fetchWassBotListProfilesGQL = c;
  },
  98,
);

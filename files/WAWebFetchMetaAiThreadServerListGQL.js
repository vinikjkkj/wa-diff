__d(
  "WAWebFetchMetaAiThreadServerListGQL",
  [
    "WALogger",
    "WAWebFetchMetaAiThreadServerListGQLQuery.graphql",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("WAWebFetchMetaAiThreadServerListGQLQuery.graphql"));
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield r("WAWebNetworkStatus").waitIfOffline();
            var e = yield o("WAWebRelayClient").fetchQuery(
                c,
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
                { type: "error" }
              );
            var n = [];
            for (var a of t) {
              var i = a.bot_fbid;
              i == null ||
                i === "" ||
                n.push({
                  botFbid: i,
                  name: a.name,
                  isDeprecated: a.is_deprecated,
                });
            }
            return { type: "success", threads: n };
          } catch (e) {
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[fetchMetaAiThreadServerListGQL] request-failed",
                  ])),
              ),
              { type: "error" }
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.fetchMetaAiThreadServerListGQL = d;
  },
  98,
);

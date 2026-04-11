__d(
  "WAWebBizGetPriceTiersQuery",
  [
    "WALogger",
    "WAWebBizGetPriceTiersQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = { type: "error" },
      d = null,
      m = { 1: "$", 2: "$$", 3: "$$$", 4: "$$$$" };
    function p(e) {
      var t,
        n,
        r =
          (t = d) == null
            ? void 0
            : t.find(function (t) {
                return t.id === e;
              });
      return r != null
        ? r
        : { id: e, symbol: (n = m[e]) != null ? n : "", description: "" };
    }
    var _ = e !== void 0 ? e : (e = n("WAWebBizGetPriceTiersQuery.graphql"));
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (
            yield r("WAWebNetworkStatus").waitIfOffline(),
            o("WAWebRelayClient")
              .fetchQuery(_, { request: { locale: e } })
              .then(function (e) {
                var t, n;
                if (e == null) return c;
                var r =
                  (t =
                    (n = e.xwa_whatsapp_get_pricing_tiers) == null
                      ? void 0
                      : n.price_tiers) != null
                    ? t
                    : [];
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "getPriceTiers: success, ",
                      " tiers",
                    ])),
                  String(r.length),
                );
                var a = r.map(function (e) {
                  var t, n, r;
                  return {
                    id: (t = e.id) != null ? t : "",
                    symbol: (n = e.symbol) != null ? n : "",
                    description: (r = e.description) != null ? r : "",
                  };
                });
                return ((d = a), { type: "success", priceTiers: a });
              })
              .catch(function (e) {
                return (
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "getPriceTiers: failed with error",
                      ])),
                  ),
                  e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                    ? { type: "graphql-error", error: e }
                    : c
                );
              })
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((l.getCachedPriceTierById = p), (l.getPriceTiers = f));
  },
  98,
);

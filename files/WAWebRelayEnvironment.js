__d(
  "WAWebRelayEnvironment",
  [
    "JSResourceForInteraction",
    "WAWebBackendApi",
    "WAWebGraphQLConstants",
    "WAWebGraphQLPersistedQueries",
    "WAWebGraphQLRemapLocale",
    "WAWebGraphQLServerError",
    "WAWebMiscGatingUtils",
    "WAWebXControllerFetchUtils",
    "WAXWhatsAppWebGraphQLControllerRouteBuilder",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("relay-runtime")
            .__setRef("WAWebRelayEnvironment")
            .load();
          return {
            Environment: e.Environment,
            RecordSource: e.RecordSource,
            Store: e.Store,
            Network: e.Network,
            fetchQuery: e.fetchQuery,
            readInlineData: e.readInlineData,
            commitMutation: e.commitMutation,
          };
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      switch (e) {
        case "facebook":
          return o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        case "whatsapp_www":
          return o("WAWebGraphQLConstants").whatsappGraphqlEndpointWWW();
        default:
          return o("WAWebGraphQLConstants").whatsappGraphqlEndpointCatalog();
      }
    }
    function c(e) {
      switch (e) {
        case "facebook":
          return "locale";
        case "whatsapp_web":
          return "locale";
        case "whatsapp_www":
          return "locale";
        default:
          return "lang";
      }
    }
    function d(e) {
      var t = e.status,
        n = e.statusText;
      throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
        errors: [{ code: t, message: n }],
      });
    }
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i,
              l = r("WAXWhatsAppWebGraphQLControllerRouteBuilder")
                .buildUri({})
                .toString(),
              s = { variables: JSON.stringify(t) };
            (e != null && (s.doc_id = e), (s[n] = a));
            var u = yield o("WAWebXControllerFetchUtils").fetchFromXController(
                l,
                { method: "POST", additionalParams: s },
              ),
              c = yield o("WAWebXControllerFetchUtils").extractJsonFromResponse(
                u,
              );
            if (c == null)
              throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
                errors: [
                  { code: 0, message: "Failed to parse GraphQL response" },
                ],
              });
            var m = (i = c.payload) != null ? i : c;
            if (!u.ok) {
              if ((m == null ? void 0 : m.error) != null)
                throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
                  errors: [m.error],
                });
              d(u);
            }
            if ((m == null ? void 0 : m.errors) != null)
              throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
                errors: m.errors,
              });
            return m;
          },
        )),
        p.apply(this, arguments)
      );
    }
    var _ = new Map();
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            a = (r = t.environmentType) != null ? r : "whatsapp_catalog",
            i = _.get(a);
          if (i != null) {
            var l = !1;
            if (
              (t.accessToken != null &&
                t.accessToken !== i.accessToken &&
                (l = !0),
              t.actorID != null && t.actorID !== i.actorID && (l = !0),
              !l)
            )
              return i.environment;
          }
          var s = yield e(),
            p = s.Environment,
            f = s.Network,
            g = s.RecordSource,
            h = s.Store,
            y = {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            C = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, n) {
                  var r,
                    a,
                    i,
                    l,
                    s =
                      (r = t.environmentType) != null ? r : "whatsapp_catalog",
                    p =
                      (a = o("WAWebGraphQLPersistedQueries").PersistedQueries[
                        e.name
                      ]) != null
                        ? a
                        : e.id,
                    _ = c(s),
                    f = yield o("WAWebBackendApi").frontendSendAndReceive(
                      "getFullLocale",
                      void 0,
                    ),
                    g = o("WAWebGraphQLRemapLocale").graphQLRemapLocale(
                      f.replace("-", "_"),
                      o("WAWebMiscGatingUtils").getGraphqlLocaleRemapping(),
                    );
                  if (s === "whatsapp_web") return m(p, n, _, g);
                  var h =
                      ((l = {
                        access_token:
                          (i = t == null ? void 0 : t.accessToken) != null
                            ? i
                            : o("WAWebGraphQLConstants")
                                .WHATSAPP_GRAPHQL_CATALOG_ACCESS_TOKEN,
                        doc_id: p,
                        variables: n,
                      }),
                      (l[_] = g),
                      l),
                    C = yield self.fetch(u(s), {
                      method: "POST",
                      headers: y,
                      body: JSON.stringify(h),
                    });
                  if (!C.ok) {
                    var b, v;
                    try {
                      v = yield C.json();
                    } catch (e) {
                      d(C);
                    }
                    if (((b = v) == null ? void 0 : b.error) != null)
                      throw new (o(
                        "WAWebGraphQLServerError",
                      ).GraphQLServerError)({ errors: [v.error] });
                    d(C);
                  }
                  var S = yield C.json();
                  if ((S == null ? void 0 : S.errors) != null)
                    throw new (o("WAWebGraphQLServerError").GraphQLServerError)(
                      { errors: S.errors },
                    );
                  return S;
                },
              );
              return function (n, r) {
                return e.apply(this, arguments);
              };
            })(),
            b = new p({
              network: f.create(C),
              store: new h(new g()),
              options: { actorID: t == null ? void 0 : t.actorID },
            });
          return (
            _.set(a, {
              environment: b,
              accessToken: t == null ? void 0 : t.accessToken,
              actorID: t == null ? void 0 : t.actorID,
            }),
            b
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((l.requireRelayRuntime = e), (l.getEnvironment = f));
  },
  98,
);

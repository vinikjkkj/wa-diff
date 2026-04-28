__d(
  "WAWebRelayEnvironment",
  [
    "CurrentUser",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBackendApi",
    "WAWebDeviceIdHeader",
    "WAWebGraphQLConstants",
    "WAWebGraphQLPersistedQueries",
    "WAWebGraphQLRemapLocale",
    "WAWebGraphQLServerError",
    "WAWebMiscGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebXControllerFetchUtils",
    "WAXWhatsAppWebGraphQLControllerRouteBuilder",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        u.apply(this, arguments)
      );
    }
    function c(e) {
      switch (e) {
        case "facebook":
          return o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        case "whatsapp_www":
          return o("WAWebGraphQLConstants").whatsappGraphqlEndpointWWW();
        default:
          return o("WAWebGraphQLConstants").whatsappGraphqlEndpointCatalog();
      }
    }
    function d(e) {
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
    function m(e) {
      var t = e.status,
        n = e.statusText;
      throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
        errors: [{ code: t, message: n }],
      });
    }
    function p(e, t, n, r) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i) {
            var l,
              s = r("WAXWhatsAppWebGraphQLControllerRouteBuilder")
                .buildUri({})
                .toString(),
              u = { variables: JSON.stringify(n) };
            (t != null && (u.doc_id = t), (u[a] = i));
            var c = yield o("WAWebXControllerFetchUtils").fetchFromXController(
                s,
                { method: "POST", additionalParams: u },
              ),
              d = yield o("WAWebXControllerFetchUtils").extractJsonFromResponse(
                c,
              );
            if (d == null)
              throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
                errors: [
                  { code: 0, message: "Failed to parse GraphQL response" },
                ],
              });
            var p = (l = d.payload) != null ? l : d;
            if (!c.ok) {
              if ((p == null ? void 0 : p.error) != null)
                throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
                  errors: [p.error],
                });
              m(c);
            }
            if ((p == null ? void 0 : p.errors) != null) {
              var _ = new (o("WAWebGraphQLServerError").GraphQLServerError)({
                  errors: p.errors,
                }),
                f = p.errors.some(function (e) {
                  return (
                    e.code ===
                    o("WAWebGraphQLConstants")
                      .WHATSAPP_GRAPHQL_UNAUTHORIZED_ERROR_CODE
                  );
                });
              throw (
                f &&
                  t !==
                    o("WAWebGraphQLPersistedQueries").PersistedQueries
                      .WAWebCanonicalUserValidQuery &&
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[canonical][gql] Unauthorized error on graphql request: ",
                          ". Canonical present: ",
                          "",
                        ])),
                      o("WAWebGraphQLServerError").formatGraphQLServerError(_),
                      r("CurrentUser").isLoggedIn(),
                    )
                    .sendLogs("canonical-gql-error", { sampling: 0.1 }),
                _
              );
            }
            return p;
          },
        )),
        _.apply(this, arguments)
      );
    }
    var f = new Map();
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r = (t = e.environmentType) != null ? t : "whatsapp_catalog",
            a = f.get(r);
          if (a != null) {
            var i = !1;
            if (
              (e.accessToken != null &&
                e.accessToken !== a.accessToken &&
                (i = !0),
              e.actorID != null && e.actorID !== a.actorID && (i = !0),
              !i)
            )
              return a.environment;
          }
          var l = yield s(),
            u = l.Environment,
            _ = l.Network,
            g = l.RecordSource,
            h = l.Store,
            y = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t, n) {
                  var r,
                    a,
                    i,
                    l,
                    s =
                      (r = e.environmentType) != null ? r : "whatsapp_catalog",
                    u = {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    };
                  if (
                    s === "facebook" &&
                    o("WAWebMobilePlatforms").isSMB() &&
                    o("WAWebDeviceIdHeader").isDeviceIdHeaderEnabled()
                  ) {
                    var _ = o("WAWebDeviceIdHeader").getDeviceIdHeaderValue();
                    _ != null && (u["X-WA-Device-ID"] = _);
                  }
                  var f =
                      (a = o("WAWebGraphQLPersistedQueries").PersistedQueries[
                        t.name
                      ]) != null
                        ? a
                        : t.id,
                    g = d(s),
                    h = yield o("WAWebBackendApi").frontendSendAndReceive(
                      "getFullLocale",
                      void 0,
                    ),
                    y = o("WAWebGraphQLRemapLocale").graphQLRemapLocale(
                      h.replace("-", "_"),
                      o("WAWebMiscGatingUtils").getGraphqlLocaleRemapping(),
                    );
                  if (s === "whatsapp_web") return p(f, n, g, y);
                  var C =
                      ((l = {
                        access_token:
                          (i = e == null ? void 0 : e.accessToken) != null
                            ? i
                            : o("WAWebGraphQLConstants")
                                .WHATSAPP_GRAPHQL_CATALOG_ACCESS_TOKEN,
                        doc_id: f,
                        variables: n,
                      }),
                      (l[g] = y),
                      l),
                    b = yield self.fetch(c(s), {
                      method: "POST",
                      headers: u,
                      body: JSON.stringify(C),
                    });
                  if (!b.ok) {
                    var v, S;
                    try {
                      S = yield b.json();
                    } catch (e) {
                      m(b);
                    }
                    if (((v = S) == null ? void 0 : v.error) != null)
                      throw new (o(
                        "WAWebGraphQLServerError",
                      ).GraphQLServerError)({ errors: [S.error] });
                    m(b);
                  }
                  var R = yield b.json();
                  if ((R == null ? void 0 : R.errors) != null)
                    throw new (o("WAWebGraphQLServerError").GraphQLServerError)(
                      { errors: R.errors },
                    );
                  return R;
                },
              );
              return function (n, r) {
                return t.apply(this, arguments);
              };
            })(),
            C = new u({
              network: _.create(y),
              store: new h(new g()),
              options: { actorID: e == null ? void 0 : e.actorID },
            });
          return (
            f.set(r, {
              environment: C,
              accessToken: e == null ? void 0 : e.accessToken,
              actorID: e == null ? void 0 : e.actorID,
            }),
            C
          );
        })),
        h.apply(this, arguments)
      );
    }
    ((l.requireRelayRuntime = s), (l.getEnvironment = g));
  },
  98,
);

__d(
  "WAWebRelayEnvironment",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBackendApi",
    "WAWebCanonicalUtils",
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
    "getErrorSafe",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        c.apply(this, arguments)
      );
    }
    function d(e) {
      switch (e) {
        case "facebook":
          return o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        case "whatsapp_www":
          return o("WAWebGraphQLConstants").whatsappGraphqlEndpointWWW();
        case "whatsapp_guest":
          return o("WAWebGraphQLConstants").whatsappGraphqlEndpointWWW();
        default:
          return o("WAWebGraphQLConstants").whatsappGraphqlEndpointCatalog();
      }
    }
    function m(e) {
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
    function p(e) {
      var t = e.status,
        n = e.statusText;
      throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
        errors: [{ code: t, message: n }],
        httpStatus: t,
      });
    }
    function _(t) {
      try {
        return JSON.parse(t);
      } catch (a) {
        var n = t.split("\r\n");
        if ((n[n.length - 1] === "" && n.pop(), n.length < 2)) throw a;
        try {
          return n.flatMap(function (e) {
            var t = JSON.parse(e);
            return Array.isArray(t) ? t : [t];
          });
        } catch (t) {
          throw (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[gql] Failed to parse a progressive response payload",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("graphql-progressive-response-parse-failed"),
            a
          );
        }
      }
    }
    function f(e) {
      if (!Array.isArray(e) && (e == null ? void 0 : e.errors) != null)
        throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
          errors: e.errors,
        });
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.docId,
            a = e.locale,
            i = e.localeParameterName,
            l = e.variables,
            u = r("WAXWhatsAppWebGraphQLControllerRouteBuilder")
              .buildUri({})
              .toString(),
            c = { variables: JSON.stringify(l) };
          (n != null && (c.doc_id = n), (c[i] = a));
          var d = yield o("WAWebXControllerFetchUtils").fetchFromXController(
              u,
              { method: "POST", additionalParams: c },
            ),
            m = yield o("WAWebXControllerFetchUtils").extractJsonFromResponse(
              d,
            );
          if (m == null)
            throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
              errors: [
                { code: 0, message: "Failed to parse GraphQL response" },
              ],
            });
          var _ = (t = m.payload) != null ? t : m;
          if (!d.ok) {
            if ((_ == null ? void 0 : _.error) != null)
              throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
                errors: [_.error],
                httpStatus: d.status,
              });
            p(d);
          }
          if ((_ == null ? void 0 : _.errors) != null) {
            var f = new (o("WAWebGraphQLServerError").GraphQLServerError)({
                errors: _.errors,
              }),
              g = _.errors.some(function (e) {
                return (
                  e.code ===
                  o("WAWebGraphQLConstants")
                    .WHATSAPP_GRAPHQL_UNAUTHORIZED_ERROR_CODE
                );
              });
            throw (
              g &&
                n !==
                  o("WAWebGraphQLPersistedQueries").PersistedQueries
                    .WAWebCanonicalUserValidQuery &&
                !r("gkx")("26256") &&
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical][gql] unauth err: ",
                        "; loggedIn=",
                        "; endpoint=",
                        "",
                      ])),
                    o("WAWebGraphQLServerError").formatGraphQLServerError(f),
                    o("WAWebCanonicalUtils").isCanonicalPresent(),
                    u,
                  )
                  .sendLogs("canonical-gql-error", { sampling: 0.1 }),
              f
            );
          }
          return _;
        })),
        h.apply(this, arguments)
      );
    }
    var y = new Map();
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a = (t = e.environmentType) != null ? t : "whatsapp_catalog",
            i = y.get(a);
          if (i != null) {
            var l = !1;
            if (
              (e.accessToken != null &&
                e.accessToken !== i.accessToken &&
                (l = !0),
              e.actorID != null && e.actorID !== i.actorID && (l = !0),
              !l)
            )
              return i.environment;
          }
          var s = yield u(),
            c = s.Environment,
            h = s.Network,
            C = s.RecordSource,
            b = s.Store,
            v = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t, n, a, i) {
                  var l,
                    s,
                    u,
                    c =
                      (l = e.environmentType) != null ? l : "whatsapp_catalog",
                    h = {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    };
                  if (c === "facebook" && o("WAWebMobilePlatforms").isSMB()) {
                    var y = o("WAWebDeviceIdHeader").getDeviceIdHeaderValue();
                    y != null && (h["X-WA-Device-ID"] = y);
                  }
                  var C =
                      (s = o("WAWebGraphQLPersistedQueries").PersistedQueries[
                        t.name
                      ]) != null
                        ? s
                        : t.id,
                    b = m(c),
                    v = yield o("WAWebBackendApi").frontendSendAndReceive(
                      "getFullLocale",
                      void 0,
                    ),
                    S = o("WAWebGraphQLRemapLocale").graphQLRemapLocale(
                      v.replace("-", "_"),
                      o("WAWebMiscGatingUtils").getGraphqlLocaleRemapping(),
                    );
                  if (c === "whatsapp_web")
                    return g({
                      docId: C,
                      locale: S,
                      localeParameterName: b,
                      variables: n,
                    });
                  if (
                    c === "whatsapp_guest" &&
                    (e == null ? void 0 : e.accessToken) == null
                  )
                    throw new (o("WAWebGraphQLServerError").GraphQLServerError)(
                      {
                        errors: [
                          {
                            code: 0,
                            message:
                              "Missing WhatsApp guest GraphQL access token",
                          },
                        ],
                      },
                    );
                  var R = babelHelpers.extends(
                      {
                        access_token:
                          (u = e == null ? void 0 : e.accessToken) != null
                            ? u
                            : o("WAWebGraphQLConstants")
                                .WHATSAPP_GRAPHQL_CATALOG_ACCESS_TOKEN,
                        doc_id: C,
                        variables: n,
                      },
                      b === "lang" ? { lang: S } : { locale: S },
                    ),
                    L;
                  if (i != null && Object.keys(i).length > 0) {
                    var E;
                    delete h["Content-Type"];
                    var k = new FormData();
                    (k.append("access_token", R.access_token),
                      R.doc_id != null && k.append("doc_id", R.doc_id),
                      k.append(
                        "variables",
                        JSON.stringify((E = R.variables) != null ? E : {}),
                      ),
                      R.lang != null && k.append("lang", R.lang),
                      R.locale != null && k.append("locale", R.locale),
                      Object.keys(i).forEach(function (e) {
                        k.append(e, i[e]);
                      }),
                      (L = k));
                  } else L = JSON.stringify(R);
                  var I = yield self.fetch(d(c), {
                    method: "POST",
                    headers: h,
                    body: L,
                  });
                  if (!I.ok) {
                    var T, D;
                    try {
                      D = yield I.json();
                    } catch (e) {
                      p(I);
                    }
                    if (((T = D) == null ? void 0 : T.error) != null)
                      throw new (o(
                        "WAWebGraphQLServerError",
                      ).GraphQLServerError)({
                        errors: [D.error],
                        httpStatus: I.status,
                      });
                    p(I);
                  }
                  if (c === "facebook" && !r("justknobx")._("1636")) {
                    var x = _(yield I.text());
                    return (f(x), x);
                  }
                  var $ = yield I.json();
                  if (($ == null ? void 0 : $.errors) != null)
                    throw new (o("WAWebGraphQLServerError").GraphQLServerError)(
                      { errors: $.errors },
                    );
                  return $;
                },
              );
              return function (n, r, o, a) {
                return t.apply(this, arguments);
              };
            })(),
            S = new c({
              network: h.create(v),
              store: new b(new C()),
              options: { actorID: e == null ? void 0 : e.actorID },
            });
          return (
            y.set(a, {
              environment: S,
              accessToken: e == null ? void 0 : e.accessToken,
              actorID: e == null ? void 0 : e.actorID,
            }),
            S
          );
        })),
        b.apply(this, arguments)
      );
    }
    ((l.requireRelayRuntime = u), (l.getEnvironment = C));
  },
  98,
);

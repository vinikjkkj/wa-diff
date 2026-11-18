__d(
  "WAWebRelayEnvironment",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCanonicalUtils",
    "WAWebDeviceIdHeader",
    "WAWebGraphQLConstants",
    "WAWebGraphQLEmployeeRouting",
    "WAWebGraphQLFetchFailure",
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
    var e,
      s,
      u = r("JSResourceForInteraction")("relay-runtime").__setRef(
        "WAWebRelayEnvironment",
      );
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_4")) {
            var e = m();
            if (e != null) return e;
          }
          return p(yield u.load());
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      var e = u.getModuleIfRequired();
      return e != null ? p(e) : null;
    }
    function p(e) {
      return {
        Environment: e.Environment,
        RecordSource: e.RecordSource,
        Store: e.Store,
        Network: e.Network,
        fetchQuery: e.fetchQuery,
        readInlineData: e.readInlineData,
        commitMutation: e.commitMutation,
      };
    }
    function _(e, t) {
      var n = e.Environment,
        r = e.Network,
        o = e.RecordSource,
        a = e.Store,
        i = t.actorID,
        l = t.environmentType,
        s = t.log,
        u = t.withAccessToken,
        c = t.xControllerAuth,
        d = function (t, n, r, o) {
          return u(function (e) {
            return T({
              accessToken: e,
              environmentType: l,
              operation: t,
              uploadables: o,
              variables: n,
              xControllerAuth: c,
            });
          });
        };
      return new n(
        babelHelpers.extends({}, s != null ? { log: s } : {}, {
          network: r.create(d),
          store: new a(new o()),
          options: { actorID: i },
        }),
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = r("WAXWhatsAppWebGraphQLControllerRouteBuilder")
              .buildUri({})
              .toString(),
            n = o("WAWebXControllerFetchUtils").captureXControllerRequestAuth(
              t,
              "POST",
            ),
            a = n.headers,
            i = n.params;
          return {
            endpoint: t,
            headers: babelHelpers.extends(
              {},
              a,
              o("WAWebGraphQLEmployeeRouting").getEmployeeRoutingHeaders(),
            ),
            params: babelHelpers.extends(
              {},
              i,
              ((e = {}), (e[S("whatsapp_web")] = yield C()), e),
            ),
          };
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return _(yield c(), {
            environmentType: "whatsapp_web",
            withAccessToken: function (t) {
              return t(null);
            },
            xControllerAuth: e,
          });
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebBackendApi").frontendSendAndReceive(
            "getFullLocale",
            void 0,
          );
          return o("WAWebGraphQLRemapLocale").graphQLRemapLocale(
            e.replace("-", "_"),
            o("WAWebMiscGatingUtils").getGraphqlLocaleRemapping(),
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      switch (e) {
        case "facebook":
          return o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        case "whatsapp_www":
          return o("WAWebGraphQLEmployeeRouting").addEmployeeRoutingParam(
            o("WAWebGraphQLConstants").whatsappGraphqlEndpointWWW(),
          );
        case "whatsapp_guest":
          return o("WAWebGraphQLEmployeeRouting").addEmployeeRoutingParam(
            o("WAWebGraphQLConstants").whatsappGraphqlEndpointWWW(),
          );
        default:
          return o("WAWebGraphQLEmployeeRouting").addEmployeeRoutingParam(
            o("WAWebGraphQLConstants").whatsappGraphqlEndpointCatalog(),
          );
      }
    }
    function S(e) {
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
    function R(e) {
      var t = e.status,
        n = e.statusText;
      throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
        errors: [{ code: t, message: n }],
        httpStatus: t,
      });
    }
    function L(t) {
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
    function E(e) {
      if (!Array.isArray(e) && (e == null ? void 0 : e.errors) != null)
        throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
          errors: e.errors,
        });
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.auth,
            a = e.docId,
            i = e.variables,
            l = n.endpoint,
            u = n.headers,
            c = n.params,
            d = { variables: JSON.stringify(i) };
          a != null && (d.doc_id = a);
          var m = yield o("WAWebXControllerFetchUtils").fetchFromXController(
              l,
              {
                additionalParams: d,
                auth: { headers: u, params: c },
                method: "POST",
              },
            ),
            p = yield o("WAWebXControllerFetchUtils").extractJsonFromResponse(
              m,
            );
          if (p == null)
            throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
              errors: [
                { code: 0, message: "Failed to parse GraphQL response" },
              ],
            });
          var _ = (t = p.payload) != null ? t : p;
          if (!m.ok) {
            if ((_ == null ? void 0 : _.error) != null)
              throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
                errors: [_.error],
                httpStatus: m.status,
              });
            R(m);
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
                a !==
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
                    l,
                  )
                  .sendLogs("canonical-gql-error", { sampling: 0.1 }),
              f
            );
          }
          return _;
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.accessToken,
            a = e.environmentType,
            i = e.operation,
            l = e.uploadables,
            s = e.variables,
            u = e.xControllerAuth,
            c =
              (t = o("WAWebGraphQLPersistedQueries").PersistedQueries[
                i.name
              ]) != null
                ? t
                : i.id;
          if (a === "whatsapp_web")
            return k({
              auth: u != null ? u : yield f(),
              docId: c,
              variables: s,
            });
          var d = {
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (a === "facebook" && o("WAWebMobilePlatforms").isSMB()) {
            var m = o("WAWebDeviceIdHeader").getDeviceIdHeaderValue();
            m != null && (d["X-WA-Device-ID"] = m);
          }
          var p = S(a),
            _ = yield C();
          if (a === "whatsapp_guest" && n == null)
            throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
              errors: [
                {
                  code: 0,
                  message: "Missing WhatsApp guest GraphQL access token",
                },
              ],
            });
          var g = babelHelpers.extends(
              {
                access_token:
                  n != null
                    ? n
                    : o("WAWebGraphQLConstants")
                        .WHATSAPP_GRAPHQL_CATALOG_ACCESS_TOKEN,
                doc_id: c,
                variables: s,
              },
              p === "lang" ? { lang: _ } : { locale: _ },
            ),
            h;
          if (l != null && Object.keys(l).length > 0) {
            var y;
            delete d["Content-Type"];
            var b = new FormData();
            (b.append("access_token", g.access_token),
              g.doc_id != null && b.append("doc_id", g.doc_id),
              b.append(
                "variables",
                JSON.stringify((y = g.variables) != null ? y : {}),
              ),
              g.lang != null && b.append("lang", g.lang),
              g.locale != null && b.append("locale", g.locale),
              Object.keys(l).forEach(function (e) {
                b.append(e, l[e]);
              }),
              (h = b));
          } else h = JSON.stringify(g);
          var I = v(a),
            T = yield o("WAWebGraphQLFetchFailure").trackGraphQLFetchFailure(
              "request",
              function () {
                return self.fetch(I, { method: "POST", headers: d, body: h });
              },
            );
          if (!T.ok) {
            var D, x;
            try {
              x = yield T.json();
            } catch (e) {
              R(T);
            }
            if (((D = x) == null ? void 0 : D.error) != null)
              throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
                errors: [x.error],
                httpStatus: T.status,
              });
            R(T);
          }
          if (a === "facebook" && !r("justknobx")._("1636")) {
            var $ = L(
              yield o("WAWebGraphQLFetchFailure").trackGraphQLFetchFailure(
                "response_body",
                function () {
                  return T.text();
                },
              ),
            );
            return (E($), $);
          }
          var P = yield o("WAWebGraphQLFetchFailure").trackGraphQLFetchFailure(
            "response_body",
            function () {
              return T.json();
            },
          );
          if ((P == null ? void 0 : P.errors) != null)
            throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
              errors: P.errors,
            });
          return P;
        })),
        D.apply(this, arguments)
      );
    }
    var x = new Map(),
      $ = new Map();
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = (t = e.environmentType) != null ? t : "whatsapp_catalog",
            r = e.log;
          if (r != null) return M(e, n, r);
          var o = x.get(n);
          if (o != null) {
            var a = !1;
            if (
              (e.accessToken != null &&
                e.accessToken !== o.accessToken &&
                (a = !0),
              e.actorID != null && e.actorID !== o.actorID && (a = !0),
              !a)
            )
              return o.environment;
          }
          var i = yield c(),
            l = A(e, i);
          return (
            x.set(n, {
              environment: l,
              accessToken: e == null ? void 0 : e.accessToken,
              actorID: e == null ? void 0 : e.actorID,
            }),
            l
          );
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            o,
            a = $.get(t);
          a == null && ((a = new WeakMap()), $.set(t, a));
          var i = babelHelpers.extends({}, e, {
              accessToken: (r = e.accessToken) != null ? r : null,
              actorID: (o = e.actorID) != null ? o : null,
              environmentType: t,
              log: n,
            }),
            l = a.get(n);
          if (
            l != null &&
            l.accessToken === i.accessToken &&
            l.actorID === i.actorID
          )
            return l.promise;
          var s = {
            accessToken: i.accessToken,
            actorID: i.actorID,
            promise: c().then(function (e) {
              return A(i, e);
            }),
          };
          a.set(n, s);
          try {
            return yield s.promise;
          } catch (e) {
            throw (a.get(n) === s && a.delete(n), e);
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      var n,
        r = e.accessToken;
      return _(t, {
        actorID: e.actorID,
        environmentType:
          (n = e.environmentType) != null ? n : "whatsapp_catalog",
        log: e.log,
        withAccessToken: function (t) {
          return t(r);
        },
      });
    }
    ((l.requireRelayRuntime = c),
      (l.getRelayRuntimeIfLoaded = m),
      (l.createRelayEnvironment = _),
      (l.captureXControllerGraphQLAuth = f),
      (l.createXControllerGraphQLEnvironment = h),
      (l.getEnvironment = P));
  },
  98,
);

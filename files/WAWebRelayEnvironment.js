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
        c = function (t, n, r, o) {
          return u(function (e) {
            return S({
              accessToken: e,
              environmentType: l,
              operation: t,
              uploadables: o,
              variables: n,
            });
          });
        };
      return new n(
        babelHelpers.extends({}, s != null ? { log: s } : {}, {
          network: r.create(c),
          store: new a(new o()),
          options: { actorID: i },
        }),
      );
    }
    function f(e) {
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
    function g(e) {
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
    function h(e) {
      var t = e.status,
        n = e.statusText;
      throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
        errors: [{ code: t, message: n }],
        httpStatus: t,
      });
    }
    function y(t) {
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
    function C(e) {
      if (!Array.isArray(e) && (e == null ? void 0 : e.errors) != null)
        throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
          errors: e.errors,
        });
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var p = (t = m.payload) != null ? t : m;
          if (!d.ok) {
            if ((p == null ? void 0 : p.error) != null)
              throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
                errors: [p.error],
                httpStatus: d.status,
              });
            h(d);
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
                    o("WAWebGraphQLServerError").formatGraphQLServerError(_),
                    o("WAWebCanonicalUtils").isCanonicalPresent(),
                    u,
                  )
                  .sendLogs("canonical-gql-error", { sampling: 0.1 }),
              _
            );
          }
          return p;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.accessToken,
            a = e.environmentType,
            i = e.operation,
            l = e.uploadables,
            s = e.variables,
            u = {
              Accept: "application/json",
              "Content-Type": "application/json",
            };
          if (a === "facebook" && o("WAWebMobilePlatforms").isSMB()) {
            var c = o("WAWebDeviceIdHeader").getDeviceIdHeaderValue();
            c != null && (u["X-WA-Device-ID"] = c);
          }
          var d =
              (t = o("WAWebGraphQLPersistedQueries").PersistedQueries[
                i.name
              ]) != null
                ? t
                : i.id,
            m = g(a),
            p = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getFullLocale",
              void 0,
            ),
            _ = o("WAWebGraphQLRemapLocale").graphQLRemapLocale(
              p.replace("-", "_"),
              o("WAWebMiscGatingUtils").getGraphqlLocaleRemapping(),
            );
          if (a === "whatsapp_web")
            return b({
              docId: d,
              locale: _,
              localeParameterName: m,
              variables: s,
            });
          if (a === "whatsapp_guest" && n == null)
            throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
              errors: [
                {
                  code: 0,
                  message: "Missing WhatsApp guest GraphQL access token",
                },
              ],
            });
          var v = babelHelpers.extends(
              {
                access_token:
                  n != null
                    ? n
                    : o("WAWebGraphQLConstants")
                        .WHATSAPP_GRAPHQL_CATALOG_ACCESS_TOKEN,
                doc_id: d,
                variables: s,
              },
              m === "lang" ? { lang: _ } : { locale: _ },
            ),
            S;
          if (l != null && Object.keys(l).length > 0) {
            var R;
            delete u["Content-Type"];
            var L = new FormData();
            (L.append("access_token", v.access_token),
              v.doc_id != null && L.append("doc_id", v.doc_id),
              L.append(
                "variables",
                JSON.stringify((R = v.variables) != null ? R : {}),
              ),
              v.lang != null && L.append("lang", v.lang),
              v.locale != null && L.append("locale", v.locale),
              Object.keys(l).forEach(function (e) {
                L.append(e, l[e]);
              }),
              (S = L));
          } else S = JSON.stringify(v);
          var E = yield self.fetch(f(a), {
            method: "POST",
            headers: u,
            body: S,
          });
          if (!E.ok) {
            var k, I;
            try {
              I = yield E.json();
            } catch (e) {
              h(E);
            }
            if (((k = I) == null ? void 0 : k.error) != null)
              throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
                errors: [I.error],
                httpStatus: E.status,
              });
            h(E);
          }
          if (a === "facebook" && !r("justknobx")._("1636")) {
            var T = y(yield E.text());
            return (C(T), T);
          }
          var D = yield E.json();
          if ((D == null ? void 0 : D.errors) != null)
            throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
              errors: D.errors,
            });
          return D;
        })),
        R.apply(this, arguments)
      );
    }
    var L = new Map(),
      E = new Map();
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = (t = e.environmentType) != null ? t : "whatsapp_catalog",
            r = e.log;
          if (r != null) return T(e, n, r);
          var o = L.get(n);
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
            l = x(e, i);
          return (
            L.set(n, {
              environment: l,
              accessToken: e == null ? void 0 : e.accessToken,
              actorID: e == null ? void 0 : e.actorID,
            }),
            l
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            o,
            a = E.get(t);
          a == null && ((a = new WeakMap()), E.set(t, a));
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
              return x(i, e);
            }),
          };
          a.set(n, s);
          try {
            return yield s.promise;
          } catch (e) {
            throw (a.get(n) === s && a.delete(n), e);
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
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
      (l.getEnvironment = k));
  },
  98,
);

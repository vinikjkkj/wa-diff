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
    async function c() {
      if (o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_4")) {
        var e = d();
        if (e != null) return e;
      }
      return m(await u.load());
    }
    function d() {
      var e = u.getModuleIfRequired();
      return e != null ? m(e) : null;
    }
    function m(e) {
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
    function p(e, t) {
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
            return R({
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
    async function _() {
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
          ((e = {}), (e[y("whatsapp_web")] = await g()), e),
        ),
      };
    }
    async function f(e) {
      return p(await c(), {
        environmentType: "whatsapp_web",
        withAccessToken: function (t) {
          return t(null);
        },
        xControllerAuth: e,
      });
    }
    async function g() {
      var e = await o("WAWebBackendApi").frontendSendAndReceive(
        "getFullLocale",
        void 0,
      );
      return o("WAWebGraphQLRemapLocale").graphQLRemapLocale(
        e.replace("-", "_"),
        o("WAWebMiscGatingUtils").getGraphqlLocaleRemapping(),
      );
    }
    function h(e) {
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
    function y(e) {
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
    function C(e) {
      var t = e.status,
        n = e.statusText;
      throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
        errors: [{ code: t, message: n }],
        httpStatus: t,
      });
    }
    function b(t) {
      try {
        return JSON.parse(t);
      } catch (a) {
        var n = t.split(`\r
`);
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
    function v(e) {
      if (!Array.isArray(e) && (e == null ? void 0 : e.errors) != null)
        throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
          errors: e.errors,
        });
    }
    async function S(e) {
      var t,
        n = e.auth,
        a = e.docId,
        i = e.variables,
        l = n.endpoint,
        u = n.headers,
        c = n.params,
        d = { variables: JSON.stringify(i) };
      a != null && (d.doc_id = a);
      var m = await o("WAWebXControllerFetchUtils").fetchFromXController(l, {
          additionalParams: d,
          auth: { headers: u, params: c },
          method: "POST",
        }),
        p = await o("WAWebXControllerFetchUtils").extractJsonFromResponse(m);
      if (p == null)
        throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
          errors: [{ code: 0, message: "Failed to parse GraphQL response" }],
        });
      var _ = (t = p.payload) != null ? t : p;
      if (!m.ok) {
        if ((_ == null ? void 0 : _.error) != null)
          throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
            errors: [_.error],
            httpStatus: m.status,
          });
        C(m);
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
    }
    async function R(e) {
      var t,
        n = e.accessToken,
        a = e.environmentType,
        i = e.operation,
        l = e.uploadables,
        s = e.variables,
        u = e.xControllerAuth,
        c =
          (t = o("WAWebGraphQLPersistedQueries").PersistedQueries[i.name]) !=
          null
            ? t
            : i.id;
      if (a === "whatsapp_web")
        return S({ auth: u != null ? u : await _(), docId: c, variables: s });
      var d = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      if (a === "facebook" && o("WAWebMobilePlatforms").isSMB()) {
        var m = o("WAWebDeviceIdHeader").getDeviceIdHeaderValue();
        m != null && (d["X-WA-Device-ID"] = m);
      }
      var p = y(a),
        f = await g();
      if (a === "whatsapp_guest" && n == null)
        throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
          errors: [
            { code: 0, message: "Missing WhatsApp guest GraphQL access token" },
          ],
        });
      var R = babelHelpers.extends(
          {
            access_token:
              n != null
                ? n
                : o("WAWebGraphQLConstants")
                    .WHATSAPP_GRAPHQL_CATALOG_ACCESS_TOKEN,
            doc_id: c,
            variables: s,
          },
          p === "lang" ? { lang: f } : { locale: f },
        ),
        L;
      if (l != null && Object.keys(l).length > 0) {
        var E;
        delete d["Content-Type"];
        var k = new FormData();
        (k.append("access_token", R.access_token),
          R.doc_id != null && k.append("doc_id", R.doc_id),
          k.append(
            "variables",
            JSON.stringify((E = R.variables) != null ? E : {}),
          ),
          R.lang != null && k.append("lang", R.lang),
          R.locale != null && k.append("locale", R.locale),
          Object.keys(l).forEach(function (e) {
            k.append(e, l[e]);
          }),
          (L = k));
      } else L = JSON.stringify(R);
      var I = h(a),
        T = await o("WAWebGraphQLFetchFailure").trackGraphQLFetchFailure(
          "request",
          function () {
            return self.fetch(I, { method: "POST", headers: d, body: L });
          },
        );
      if (!T.ok) {
        var D, x;
        try {
          x = await T.json();
        } catch (e) {
          C(T);
        }
        if (((D = x) == null ? void 0 : D.error) != null)
          throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
            errors: [x.error],
            httpStatus: T.status,
          });
        C(T);
      }
      if (a === "facebook" && !r("justknobx")._("1636")) {
        var $ = b(
          await o("WAWebGraphQLFetchFailure").trackGraphQLFetchFailure(
            "response_body",
            function () {
              return T.text();
            },
          ),
        );
        return (v($), $);
      }
      var P = await o("WAWebGraphQLFetchFailure").trackGraphQLFetchFailure(
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
    }
    var L = new Map(),
      E = new Map();
    async function k(e) {
      var t,
        n = (t = e.environmentType) != null ? t : "whatsapp_catalog",
        r = e.log;
      if (r != null) return I(e, n, r);
      var o = L.get(n);
      if (o != null) {
        var a = !1;
        if (
          (e.accessToken != null && e.accessToken !== o.accessToken && (a = !0),
          e.actorID != null && e.actorID !== o.actorID && (a = !0),
          !a)
        )
          return o.environment;
      }
      var i = await c(),
        l = T(e, i);
      return (
        L.set(n, {
          environment: l,
          accessToken: e == null ? void 0 : e.accessToken,
          actorID: e == null ? void 0 : e.actorID,
        }),
        l
      );
    }
    async function I(e, t, n) {
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
          return T(i, e);
        }),
      };
      a.set(n, s);
      try {
        return await s.promise;
      } catch (e) {
        throw (a.get(n) === s && a.delete(n), e);
      }
    }
    function T(e, t) {
      var n,
        r = e.accessToken;
      return p(t, {
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
      (l.getRelayRuntimeIfLoaded = d),
      (l.createRelayEnvironment = p),
      (l.captureXControllerGraphQLAuth = _),
      (l.createXControllerGraphQLEnvironment = f),
      (l.getEnvironment = k));
  },
  98,
);

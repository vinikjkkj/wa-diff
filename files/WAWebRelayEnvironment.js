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
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      var e = await r("JSResourceForInteraction")("relay-runtime")
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
    async function m(t) {
      var n,
        a = t.docId,
        i = t.locale,
        l = t.localeParameterName,
        s = t.variables,
        u = r("WAXWhatsAppWebGraphQLControllerRouteBuilder")
          .buildUri({})
          .toString(),
        c = { variables: JSON.stringify(s) };
      (a != null && (c.doc_id = a), (c[l] = i));
      var m = await o("WAWebXControllerFetchUtils").fetchFromXController(u, {
          method: "POST",
          additionalParams: c,
        }),
        p = await o("WAWebXControllerFetchUtils").extractJsonFromResponse(m);
      if (p == null)
        throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
          errors: [{ code: 0, message: "Failed to parse GraphQL response" }],
        });
      var _ = (n = p.payload) != null ? n : p;
      if (!m.ok) {
        if ((_ == null ? void 0 : _.error) != null)
          throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
            errors: [_.error],
          });
        d(m);
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
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical][gql] unauth err: ",
                    " loggedIn=",
                    "",
                  ])),
                o("WAWebGraphQLServerError").formatGraphQLServerError(f),
                r("CurrentUser").isLoggedIn(),
              )
              .sendLogs("canonical-gql-error", { sampling: 0.1 }),
          f
        );
      }
      return _;
    }
    var p = new Map();
    async function _(e) {
      var t,
        n = (t = e.environmentType) != null ? t : "whatsapp_catalog",
        r = p.get(n);
      if (r != null) {
        var a = !1;
        if (
          (e.accessToken != null && e.accessToken !== r.accessToken && (a = !0),
          e.actorID != null && e.actorID !== r.actorID && (a = !0),
          !a)
        )
          return r.environment;
      }
      var i = await s(),
        l = i.Environment,
        _ = i.Network,
        f = i.RecordSource,
        g = i.Store,
        h = async function (n, r) {
          var t,
            a,
            i,
            l,
            s = (t = e.environmentType) != null ? t : "whatsapp_catalog",
            p = {
              Accept: "application/json",
              "Content-Type": "application/json",
            };
          if (
            s === "facebook" &&
            o("WAWebMobilePlatforms").isSMB() &&
            o("WAWebDeviceIdHeader").isDeviceIdHeaderEnabled()
          ) {
            var _ = o("WAWebDeviceIdHeader").getDeviceIdHeaderValue();
            _ != null && (p["X-WA-Device-ID"] = _);
          }
          var f =
              (a = o("WAWebGraphQLPersistedQueries").PersistedQueries[
                n.name
              ]) != null
                ? a
                : n.id,
            g = c(s),
            h = await o("WAWebBackendApi").frontendSendAndReceive(
              "getFullLocale",
              void 0,
            ),
            y = o("WAWebGraphQLRemapLocale").graphQLRemapLocale(
              h.replace("-", "_"),
              o("WAWebMiscGatingUtils").getGraphqlLocaleRemapping(),
            );
          if (s === "whatsapp_web")
            return m({
              docId: f,
              locale: y,
              localeParameterName: g,
              variables: r,
            });
          var C =
              ((l = {
                access_token:
                  (i = e == null ? void 0 : e.accessToken) != null
                    ? i
                    : o("WAWebGraphQLConstants")
                        .WHATSAPP_GRAPHQL_CATALOG_ACCESS_TOKEN,
                doc_id: f,
                variables: r,
              }),
              (l[g] = y),
              l),
            b = await self.fetch(u(s), {
              method: "POST",
              headers: p,
              body: JSON.stringify(C),
            });
          if (!b.ok) {
            var v, S;
            try {
              S = await b.json();
            } catch (e) {
              d(b);
            }
            if (((v = S) == null ? void 0 : v.error) != null)
              throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
                errors: [S.error],
              });
            d(b);
          }
          var R = await b.json();
          if ((R == null ? void 0 : R.errors) != null)
            throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
              errors: R.errors,
            });
          return R;
        },
        y = new l({
          network: _.create(h),
          store: new g(new f()),
          options: { actorID: e == null ? void 0 : e.actorID },
        });
      return (
        p.set(n, {
          environment: y,
          accessToken: e == null ? void 0 : e.accessToken,
          actorID: e == null ? void 0 : e.actorID,
        }),
        y
      );
    }
    ((l.requireRelayRuntime = s), (l.getEnvironment = _));
  },
  98,
);

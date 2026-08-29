__d(
  "WAWebAdsRelayEnvironment",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebBackendApi",
    "WAWebDeviceIdHeader",
    "WAWebGraphQLConstants",
    "WAWebGraphQLRemapLocale",
    "WAWebMiscGatingUtils",
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
            .__setRef("WAWebAdsRelayEnvironment")
            .load();
          return {
            Environment: e.Environment,
            RecordSource: e.RecordSource,
            Store: e.Store,
          };
        })),
        u.apply(this, arguments)
      );
    }
    var c = null;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (c != null) {
            var a = !1;
            if (
              (t.accessToken != null &&
                t.accessToken !== c.accessToken &&
                (a = !0),
              t.actorID != null && t.actorID !== c.actorID && (a = !0),
              !a)
            )
              return c.environment;
          }
          var i = yield (e || (e = n("Promise"))).all([
              s(),
              r("JSResourceForInteraction")("URI")
                .__setRef("WAWebAdsRelayEnvironment")
                .load(),
              r("JSResourceForInteraction")("createRelayFBNetwork")
                .__setRef("WAWebAdsRelayEnvironment")
                .load(),
              r("JSResourceForInteraction")("createRelayFBNetworkFetch")
                .__setRef("WAWebAdsRelayEnvironment")
                .load(),
              r("JSResourceForInteraction")("createRelayFBSubscribeFunction")
                .__setRef("WAWebAdsRelayEnvironment")
                .load(),
            ]),
            l = i[0],
            u = l.Environment,
            d = l.RecordSource,
            m = l.Store,
            p = i[1],
            _ = i[2],
            f = i[3],
            g = i[4],
            h = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint(),
            y = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getFullLocale",
              void 0,
            ),
            C = o("WAWebGraphQLRemapLocale").graphQLRemapLocale(
              y.replace("-", "_"),
              o("WAWebMiscGatingUtils").getGraphqlLocaleRemapping(),
            ),
            b = new p(h + "?locale=" + C),
            v = _(
              f({
                graphURI: b,
                accessToken: t.accessToken,
                actorID: t.actorID,
                getAdditionalHeaders: function () {
                  var e = o("WAWebDeviceIdHeader").getDeviceIdHeaderValue();
                  return e != null ? { "X-WA-Device-ID": e } : {};
                },
              }),
              g({ actorID: t.actorID, accessToken: t.accessToken }),
            ),
            S = new u({
              network: v,
              store: new m(new d()),
              options: { actorID: t == null ? void 0 : t.actorID },
            });
          return (
            (c = {
              environment: S,
              accessToken: t == null ? void 0 : t.accessToken,
              actorID: t == null ? void 0 : t.actorID,
            }),
            S
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.getEnvironment = d;
  },
  98,
);

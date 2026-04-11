__d(
  "WAWebAdsRelayEnvironment",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebGraphQLConstants",
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
          var i = yield s(),
            l = i.Environment,
            u = i.RecordSource,
            d = i.Store,
            m = yield (e || (e = n("Promise"))).all([
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
            p = m[0],
            _ = m[1],
            f = m[2],
            g = m[3],
            h = new p(
              o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint(),
            ),
            y = _(
              f({
                graphURI: h,
                accessToken: t.accessToken,
                actorID: t.actorID,
              }),
              g({ actorID: t.actorID, accessToken: t.accessToken }),
            ),
            C = new l({
              network: y,
              store: new d(new u()),
              options: { actorID: t == null ? void 0 : t.actorID },
            });
          return (
            (c = {
              environment: C,
              accessToken: t == null ? void 0 : t.accessToken,
              actorID: t == null ? void 0 : t.actorID,
            }),
            C
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.getEnvironment = d;
  },
  98,
);

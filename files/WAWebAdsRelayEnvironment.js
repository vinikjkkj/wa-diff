__d(
  "WAWebAdsRelayEnvironment",
  [
    "JSResourceForInteraction",
    "WAWebBackendApi",
    "WAWebDeviceIdHeader",
    "WAWebGraphQLConstants",
    "WAWebGraphQLRemapLocale",
    "WAWebMiscGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = await r("JSResourceForInteraction")("relay-runtime")
        .__setRef("WAWebAdsRelayEnvironment")
        .load();
      return {
        Environment: e.Environment,
        RecordSource: e.RecordSource,
        Store: e.Store,
      };
    }
    var s = null;
    async function u(t) {
      if (s != null) {
        var n = !1;
        if (
          (t.accessToken != null && t.accessToken !== s.accessToken && (n = !0),
          t.actorID != null && t.actorID !== s.actorID && (n = !0),
          !n)
        )
          return s.environment;
      }
      var a = await Promise.all([
          e(),
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
        i = a[0],
        l = i.Environment,
        u = i.RecordSource,
        c = i.Store,
        d = a[1],
        m = a[2],
        p = a[3],
        _ = a[4],
        f = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint(),
        g = await o("WAWebBackendApi").frontendSendAndReceive(
          "getFullLocale",
          void 0,
        ),
        h = o("WAWebGraphQLRemapLocale").graphQLRemapLocale(
          g.replace("-", "_"),
          o("WAWebMiscGatingUtils").getGraphqlLocaleRemapping(),
        ),
        y = new d(f + "?locale=" + h),
        C = m(
          p({
            graphURI: y,
            accessToken: t.accessToken,
            actorID: t.actorID,
            getAdditionalHeaders: function () {
              if (!o("WAWebDeviceIdHeader").isDeviceIdHeaderEnabled())
                return {};
              var e = o("WAWebDeviceIdHeader").getDeviceIdHeaderValue();
              return e != null ? { "X-WA-Device-ID": e } : {};
            },
          }),
          _({ actorID: t.actorID, accessToken: t.accessToken }),
        ),
        b = new l({
          network: C,
          store: new c(new u()),
          options: { actorID: t == null ? void 0 : t.actorID },
        });
      return (
        (s = {
          environment: b,
          accessToken: t == null ? void 0 : t.accessToken,
          actorID: t == null ? void 0 : t.actorID,
        }),
        b
      );
    }
    l.getEnvironment = u;
  },
  98,
);

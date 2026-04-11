__d(
  "WAWebFetchSubscriptionEntryPoints",
  [
    "WALogger",
    "WAWebFetchAdAccountToken",
    "WAWebFetchSubscriptionEntryPointsQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebUserPrefsSubscription",
    "WAWebXWASubscriptionEntryPointTypeUtils",
    "asyncToGeneratorRuntime",
    "compactMap",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = { type: "error" },
      d = 1440 * 60 * 1e3,
      m =
        e !== void 0
          ? e
          : (e = n("WAWebFetchSubscriptionEntryPointsQuery.graphql"));
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o(
            "WAWebUserPrefsSubscription",
          ).getShouldShowMetaVerifiedEntryPoint();
          if (e != null) {
            var t = o(
                "WAWebUserPrefsSubscription",
              ).getNextFetchSubscriptionEntryPointsTime(),
              n = t - Date.now();
            if (n > 0)
              return {
                type: "success",
                subscriptionEntrypoints: [
                  {
                    subscriptionType: o(
                      "WAWebXWASubscriptionEntryPointTypeUtils",
                    ).SubscriptionEntryPointType.META_VERIFIED,
                    webEntryPointEligibility: e,
                    webEntryPointRedirectionUri: o(
                      "WAWebUserPrefsSubscription",
                    ).getMetaVerifiedEntryPointRedirectionUri(),
                  },
                ],
              };
          }
          var a = yield f();
          if (a.type === "success") {
            var i,
              l = (i = r("justknobx")._("4003")) != null ? i : d;
            (o(
              "WAWebUserPrefsSubscription",
            ).setNextFetchSubscriptionEntryPointsTime(Date.now() + l),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchSubscriptionEntryPoints: success",
                  ])),
              ));
          } else
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  'fetchSubscriptionEntryPoints: failed as "',
                  '"',
                ])),
              a.type,
            );
          return a;
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebFetchAdAccountToken")
            .fetchToken()
            .then(function (e) {
              return e.type === "success"
                ? h(e.token).then(function (e) {
                    return (
                      e.type !== "success" && e.type === "auth-failure"
                        ? o("WAWebFetchAdAccountToken").markTokenAsInvalid()
                        : e.type,
                      e
                    );
                  })
                : (e.type, e);
            });
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
          return r("WAWebNetworkStatus")
            .waitIfOffline()
            .then(function () {
              return o("WAWebRelayClient")
                .fetchQuery(
                  m,
                  {},
                  { environmentType: "facebook", accessToken: e },
                )
                .then(function (e) {
                  var t,
                    n =
                      e == null || (t = e.waSubscriptionEntryPoints) == null
                        ? void 0
                        : t.subscriptionEntryPoints;
                  if (n == null) return c;
                  var a = r("compactMap")(n, function (e) {
                    var t = e.subscriptionType,
                      n = e.webEntryPointEligibility,
                      r = e.webEntryPointRedirectionUri;
                    return t != null
                      ? {
                          subscriptionType: o(
                            "WAWebXWASubscriptionEntryPointTypeUtils",
                          ).mapXWASubscriptionEntryPointTypeToString(t),
                          webEntryPointEligibility: n != null ? n : !1,
                          webEntryPointRedirectionUri: r,
                        }
                      : null;
                  });
                  return { type: "success", subscriptionEntrypoints: a };
                })
                .catch(function (e) {
                  return o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
                    ? { type: "auth-failure" }
                    : e instanceof
                        o("WAWebGraphQLServerError").GraphQLServerError
                      ? { type: "graphql-error", error: e }
                      : c;
                });
            });
        })),
        y.apply(this, arguments)
      );
    }
    l.fetchSubscriptionEntryPoints = p;
  },
  98,
);

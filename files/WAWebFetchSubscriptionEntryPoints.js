__d(
  "WAWebFetchSubscriptionEntryPoints",
  [
    "Promise",
    "WALogger",
    "WAWebFetchAdAccountToken",
    "WAWebFetchSubscriptionEntryPointsQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebMetaOneGating",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebSubscriptionsGatingUtils",
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
      c,
      d = { type: "error" },
      m = 1440 * 60 * 1e3,
      p = null,
      _ =
        e !== void 0
          ? e
          : (e = n("WAWebFetchSubscriptionEntryPointsQuery.graphql"));
    function f() {
      return o(
        "WAWebUserPrefsSubscription",
      ).getNextFetchSubscriptionEntryPointsTime() > Date.now()
        ? (c || (c = n("Promise"))).resolve({
            type: "success",
            subscriptionEntrypoints: g(),
          })
        : (p == null &&
            (p = h().finally(function () {
              p = null;
            })),
          p);
    }
    function g() {
      var e = o(
          "WAWebUserPrefsSubscription",
        ).getSubscriptionsEntryPointEligibility(),
        t = [
          {
            subscriptionType: o("WAWebXWASubscriptionEntryPointTypeUtils")
              .SubscriptionEntryPointType.META_VERIFIED,
            webEntryPointEligibility: e.metaVerified,
            webEntryPointRedirectionUri: o(
              "WAWebUserPrefsSubscription",
            ).getMetaVerifiedEntryPointRedirectionUri(),
          },
        ];
      return (
        e.metaOne != null &&
          t.push({
            subscriptionType: o("WAWebXWASubscriptionEntryPointTypeUtils")
              .SubscriptionEntryPointType.META_ONE,
            webEntryPointEligibility: e.metaOne,
            webEntryPointRedirectionUri: null,
          }),
        t
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield S(C());
          if (e.type === "success") {
            var t;
            (v((t = e.subscriptionEntrypoints) != null ? t : []),
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
              e.type,
            );
          return e;
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b() ? ["META_VERIFIED", "META_ONE"] : ["META_VERIFIED"];
    }
    function b() {
      return (
        o("WAWebMetaOneGating").isAnyMetaOneEntryPointEnabled() ||
        o("WAWebSubscriptionsGatingUtils").customerManagerMetaOneUpsellEnabled()
      );
    }
    function v(e) {
      var t,
        n,
        a = e.find(function (e) {
          return (
            e.subscriptionType ===
            o("WAWebXWASubscriptionEntryPointTypeUtils")
              .SubscriptionEntryPointType.META_VERIFIED
          );
        }),
        i = e.find(function (e) {
          return (
            e.subscriptionType ===
            o("WAWebXWASubscriptionEntryPointTypeUtils")
              .SubscriptionEntryPointType.META_ONE
          );
        });
      (o("WAWebUserPrefsSubscription").setSubscriptionsEntryPointEligibility({
        metaVerified: (a == null ? void 0 : a.webEntryPointEligibility) === !0,
        metaOne: i == null ? void 0 : i.webEntryPointEligibility,
      }),
        o("WAWebUserPrefsSubscription").setMetaVerifiedEntryPointRedirectionUri(
          (t = a == null ? void 0 : a.webEntryPointRedirectionUri) != null
            ? t
            : "",
        ));
      var l = (n = r("justknobx")._("4003")) != null ? n : m;
      o("WAWebUserPrefsSubscription").setNextFetchSubscriptionEntryPointsTime(
        Date.now() + l,
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (t.type !== "success") return (t.type, t);
          var n = yield L(t.token, e);
          return (
            n.type === "success"
              ? n.type
              : n.type === "auth-failure"
                ? o("WAWebFetchAdAccountToken").markTokenAsInvalid()
                : n.type,
            n
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield r("WAWebNetworkStatus").waitIfOffline();
          try {
            var n,
              a = yield o("WAWebRelayClient").fetchQuery(
                _,
                { subscriptionTypes: t },
                { environmentType: "facebook", accessToken: e },
              ),
              i =
                a == null || (n = a.waSubscriptionEntryPoints) == null
                  ? void 0
                  : n.subscriptionEntryPoints;
            return i == null
              ? d
              : {
                  type: "success",
                  subscriptionEntrypoints: r("compactMap")(i, function (e) {
                    var t;
                    return e.subscriptionType == null
                      ? null
                      : {
                          subscriptionType: o(
                            "WAWebXWASubscriptionEntryPointTypeUtils",
                          ).mapXWASubscriptionEntryPointTypeToString(
                            e.subscriptionType,
                          ),
                          webEntryPointEligibility:
                            (t = e.webEntryPointEligibility) != null ? t : !1,
                          webEntryPointRedirectionUri:
                            e.webEntryPointRedirectionUri,
                        };
                  }),
                };
          } catch (e) {
            return e instanceof Error
              ? o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
                ? { type: "auth-failure" }
                : e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                  ? { type: "graphql-error", error: e }
                  : d
              : d;
          }
        })),
        E.apply(this, arguments)
      );
    }
    l.fetchSubscriptionEntryPoints = f;
  },
  98,
);

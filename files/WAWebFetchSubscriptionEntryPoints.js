__d(
  "WAWebFetchSubscriptionEntryPoints",
  [
    "Promise",
    "WALogger",
    "WAWebFetchAdAccountToken",
    "WAWebFetchSubscriptionEntryPointsQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebMetaOneGating",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebUserPrefsSubscription",
    "WAWebXWASubscriptionEntryPointTypeUtils",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = { type: "error" },
      p = { type: "not-enabled" },
      _ = 1440 * 60 * 1e3,
      f = null,
      g =
        e !== void 0
          ? e
          : (e = n("WAWebFetchSubscriptionEntryPointsQuery.graphql"));
    function h() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o(
            "WAWebUserPrefsSubscription",
          ).getNextFetchSubscriptionEntryPointsTime() <= Date.now()
          ? y()
          : C()
            ? y().then(function (e) {
                return e.type === "success" ? e : b();
              })
            : (d || (d = n("Promise"))).resolve(b())
        : (d || (d = n("Promise"))).resolve(p);
    }
    function y() {
      return (
        f == null &&
          (f = S().finally(function () {
            f = null;
          })),
        f
      );
    }
    function C() {
      return (
        o("WAWebUserPrefsSubscription").getSubscriptionsEntryPointEligibility()
          .metaOne == null && o("WAWebMetaOneGating").isMetaOneRolloutEnabled()
      );
    }
    function b() {
      return { type: "success", subscriptionEntrypoints: v() };
    }
    function v() {
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
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          try {
            e = yield k(L());
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "fetchSubscriptionEntryPoints: threw",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("subscription-entry-points-fetch-failed"),
              m
            );
          }
          if (e.type === "success") {
            var t;
            (E((t = e.subscriptionEntrypoints) != null ? t : []),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchSubscriptionEntryPoints: success",
                  ])),
              ));
          } else
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  'fetchSubscriptionEntryPoints: failed as "',
                  '"',
                ])),
              e.type,
            );
          return e;
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return o("WAWebMetaOneGating").isMetaOneRolloutEnabled()
        ? ["META_VERIFIED", "META_ONE"]
        : ["META_VERIFIED"];
    }
    function E(e) {
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
        metaOnePurchaseEligibility: i == null ? void 0 : i.purchaseEligibility,
      }),
        o("WAWebUserPrefsSubscription").setMetaVerifiedEntryPointRedirectionUri(
          (t = a == null ? void 0 : a.webEntryPointRedirectionUri) != null
            ? t
            : "",
        ));
      var l = (n = r("justknobx")._("4003")) != null ? n : _;
      o("WAWebUserPrefsSubscription").setNextFetchSubscriptionEntryPointsTime(
        Date.now() + l,
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (t.type !== "success") return (t.type, t);
          var n = yield T(t.token, e);
          return (
            n.type === "success"
              ? n.type
              : n.type === "auth-failure"
                ? o("WAWebFetchAdAccountToken").markTokenAsInvalid()
                : n.type,
            n
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield r("WAWebNetworkStatus").waitIfOffline();
          try {
            var n,
              a = yield o("WAWebRelayClient").fetchQuery(
                g,
                { subscriptionTypes: t },
                { environmentType: "facebook", accessToken: e },
              ),
              i =
                a == null || (n = a.waSubscriptionEntryPoints) == null
                  ? void 0
                  : n.subscriptionEntryPoints;
            return i == null
              ? m
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
                          purchaseEligibility: x(e.purchaseEligibility),
                        };
                  }),
                };
          } catch (e) {
            return e instanceof Error
              ? o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
                ? { type: "auth-failure" }
                : e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                  ? { type: "graphql-error", error: e }
                  : m
              : m;
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      if (e != null)
        return (function (e) {
          if (e === "WEB_PURCHASE") return "web_purchase";
          if (e === "MOBILE_PURCHASE") return "mobile_purchase";
          if (e === "NOT_ELIGIBLE") return "not_eligible";
        })(e);
    }
    l.fetchSubscriptionEntryPoints = h;
  },
  98,
);

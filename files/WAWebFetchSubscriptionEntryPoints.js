__d(
  "WAWebFetchSubscriptionEntryPoints",
  [
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
    "compactMap",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = { type: "error" },
      m = { type: "not-enabled" },
      p = 1440 * 60 * 1e3,
      _ = null,
      f =
        e !== void 0
          ? e
          : (e = n("WAWebFetchSubscriptionEntryPointsQuery.graphql"));
    function g() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o(
            "WAWebUserPrefsSubscription",
          ).getNextFetchSubscriptionEntryPointsTime() <= Date.now()
          ? h()
          : y()
            ? h().then(function (e) {
                return e.type === "success" ? e : C();
              })
            : Promise.resolve(C())
        : Promise.resolve(m);
    }
    function h() {
      return (
        _ == null &&
          (_ = v().finally(function () {
            _ = null;
          })),
        _
      );
    }
    function y() {
      return (
        o("WAWebUserPrefsSubscription").getSubscriptionsEntryPointEligibility()
          .metaOne == null && o("WAWebMetaOneGating").isMetaOneRolloutEnabled()
      );
    }
    function C() {
      return { type: "success", subscriptionEntrypoints: b() };
    }
    function b() {
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
    async function v() {
      var e;
      try {
        e = await L(S());
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
          d
        );
      }
      if (e.type === "success") {
        var t;
        (R((t = e.subscriptionEntrypoints) != null ? t : []),
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
    }
    function S() {
      return o("WAWebMetaOneGating").isMetaOneRolloutEnabled()
        ? ["META_VERIFIED", "META_ONE"]
        : ["META_VERIFIED"];
    }
    function R(e) {
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
      var l = (n = r("justknobx")._("4003")) != null ? n : p;
      o("WAWebUserPrefsSubscription").setNextFetchSubscriptionEntryPointsTime(
        Date.now() + l,
      );
    }
    async function L(e) {
      var t = await o("WAWebFetchAdAccountToken").fetchToken();
      if (t.type !== "success") return (t.type, t);
      var n = await E(t.token, e);
      return (
        n.type === "success"
          ? n.type
          : n.type === "auth-failure"
            ? o("WAWebFetchAdAccountToken").markTokenAsInvalid()
            : n.type,
        n
      );
    }
    async function E(e, t) {
      await r("WAWebNetworkStatus").waitIfOffline();
      try {
        var n,
          a = await o("WAWebRelayClient").fetchQuery(
            f,
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
                      purchaseEligibility: k(e.purchaseEligibility),
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
    }
    function k(e) {
      if (e != null)
        return (function (e) {
          if (e === "WEB_PURCHASE") return "web_purchase";
          if (e === "MOBILE_PURCHASE") return "mobile_purchase";
          if (e === "NOT_ELIGIBLE") return "not_eligible";
        })(e);
    }
    l.fetchSubscriptionEntryPoints = g;
  },
  98,
);

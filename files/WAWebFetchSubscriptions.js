__d(
  "WAWebFetchSubscriptions",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebFeatureFlagName",
    "WAWebFetchAdAccountToken",
    "WAWebFetchSubscriptionsQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebSubscriptionSource",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = { type: "error" },
      d = e !== void 0 ? e : (e = n("WAWebFetchSubscriptionsQuery.graphql"));
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield _();
          return e.type === "success"
            ? (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchSubscriptions: success",
                  ])),
              ),
              e)
            : (e.type,
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    'fetchSubscriptions: failed as "',
                    '"',
                  ])),
                e.type,
              ),
              e);
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield r("WAWebNetworkStatus").waitIfOffline();
            var e = yield o("WAPromiseTimeout").promiseTimeout(
              o("WAWebFetchAdAccountToken").fetchToken(),
              o(
                "WAWebFetchAdAccountToken",
              ).getMaximumAdAccountFetchTimeoutSeconds() * 1e3,
            );
            if (e.type === "success") {
              var t = yield g(e.token);
              return (
                t.type !== "success" && t.type === "auth-failure"
                  ? o("WAWebFetchAdAccountToken").markTokenAsInvalid()
                  : t.type,
                t
              );
            }
            return (e.type, e);
          } catch (e) {
            return e instanceof o("WACustomError").TimeoutError
              ? { type: "timeout" }
              : { type: "error" };
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          yield r("WAWebNetworkStatus").waitIfOffline();
          var a = yield o("WAWebRelayClient")
              .fetchQuery(
                d,
                { data: { platform: "UNKNOWN" } },
                { environmentType: "facebook", accessToken: e },
              )
              .catch(function (e) {
                if (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e))
                  return { type: "auth-failure" };
                if (
                  e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                )
                  return { type: "graphql-error", error: e };
              }),
            i =
              a == null || (t = a.xwa_get_subscriptions) == null
                ? void 0
                : t.subscriptions,
            l =
              a == null || (n = a.xwa_get_subscriptions) == null
                ? void 0
                : n.feature_flags;
          return i == null || l == null
            ? c
            : {
                type: "success",
                subscriptions: i.map(function (e) {
                  var t, n, r, a, i, s, u, c;
                  return {
                    expirationDate: (t = e.end_time) != null ? t : null,
                    id: (n = e.id) != null ? n : "",
                    status: y(e.status),
                    creationTime: (r = e.creation_time) != null ? r : null,
                    newMessageCappingEnabled:
                      (a =
                        (i = l.find(function (e) {
                          return (
                            o("WAWebFeatureFlagName").FeatureFlagName.cast(
                              e.name,
                            ) ===
                            o("WAWebFeatureFlagName").FeatureFlagName
                              .NEW_CHATS_LIMIT
                          );
                        })) == null
                          ? void 0
                          : i.enabled) != null
                        ? a
                        : !1,
                    tier: (s = e.tier) != null ? s : null,
                    source: C(e.source),
                    isPlatformChanged:
                      (u = e.is_platform_changed) != null ? u : null,
                    startTime: (c = e.start_time) != null ? c : null,
                  };
                }),
                featureFlags: l.map(function (e) {
                  var t, n, r, o;
                  return {
                    name: (t = e.name) != null ? t : "",
                    enabled: (n = e.enabled) != null ? n : !1,
                    expirationTime: (r = e.expiration_time) != null ? r : null,
                    limit: (o = e.limit) != null ? o : null,
                  };
                }),
              };
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return e == null
        ? null
        : (function (e) {
            return e === "STATUS_ACTIVE"
              ? "ACTIVE"
              : e === "STATUS_CANCELED"
                ? "CANCELED"
                : e === "STATUS_DISCOUNT_TRIAL"
                  ? "DISCOUNT_TRIAL"
                  : e === "STATUS_EXPIRED"
                    ? "EXPIRED"
                    : e === "STATUS_FREE_TRIAL"
                      ? "FREE_TRIAL"
                      : e === "STATUS_IN_GRACE_PERIOD"
                        ? "IN_GRACE_PERIOD"
                        : e === "STATUS_ON_HOLD"
                          ? "ON_HOLD"
                          : null;
          })(e);
    }
    function C(e) {
      return e == null
        ? null
        : (function (e) {
            return e === "AURA"
              ? o("WAWebSubscriptionSource").SubscriptionSource.AURA
              : e === "META_NOVA"
                ? o("WAWebSubscriptionSource").SubscriptionSource.META_NOVA
                : e === "SOURCE_BLUE"
                  ? o("WAWebSubscriptionSource").SubscriptionSource.BLUE
                  : e === "SOURCE_PREMIUM"
                    ? o("WAWebSubscriptionSource").SubscriptionSource.PREMIUM
                    : e === "MP4B"
                      ? o("WAWebSubscriptionSource").SubscriptionSource.MP4B
                      : null;
          })(e);
    }
    l.fetchSubscriptions = m;
  },
  98,
);

__d(
  "WAWebFetchSubscriptions",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
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
                  var t, n, r, o, a, i, s, u;
                  return {
                    expirationDate: (t = e.end_time) != null ? t : null,
                    id: (n = e.id) != null ? n : "",
                    status: y(e.status),
                    creationTime: (r = e.creation_time) != null ? r : null,
                    newMessageCappingEnabled:
                      (o =
                        (a = l.find(function (e) {
                          return e.name === "NEW_CHATS_LIMIT";
                        })) == null
                          ? void 0
                          : a.enabled) != null
                        ? o
                        : !1,
                    tier: (i = e.tier) != null ? i : null,
                    source: C(e.source),
                    isPlatformChanged:
                      (s = e.is_platform_changed) != null ? s : null,
                    startTime: (u = e.start_time) != null ? u : null,
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
      if (e != null) {
        var t = e;
        switch (t) {
          case "STATUS_ACTIVE":
            return "ACTIVE";
          case "STATUS_CANCELED":
            return "CANCELED";
          case "STATUS_DISCOUNT_TRIAL":
            return "DISCOUNT_TRIAL";
          case "STATUS_EXPIRED":
            return "EXPIRED";
          case "STATUS_FREE_TRIAL":
            return "FREE_TRIAL";
          case "STATUS_IN_GRACE_PERIOD":
            return "IN_GRACE_PERIOD";
          case "STATUS_ON_HOLD":
            return "ON_HOLD";
        }
      }
    }
    function C(e) {
      if (e == null) return null;
      var t = e;
      switch (t) {
        case "ASTERIA":
          return o("WAWebSubscriptionSource").SubscriptionSource.ASTERIA;
        case "AURA":
          return o("WAWebSubscriptionSource").SubscriptionSource.AURA;
        case "META_NOVA":
          return o("WAWebSubscriptionSource").SubscriptionSource.META_NOVA;
        case "SOURCE_BLUE":
          return o("WAWebSubscriptionSource").SubscriptionSource.BLUE;
        case "SOURCE_PREMIUM":
          return o("WAWebSubscriptionSource").SubscriptionSource.PREMIUM;
        default:
          return null;
      }
    }
    l.fetchSubscriptions = m;
  },
  98,
);

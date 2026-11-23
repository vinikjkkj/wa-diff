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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = { type: "error" },
      d = e !== void 0 ? e : (e = n("WAWebFetchSubscriptionsQuery.graphql"));
    async function m() {
      var e = await p();
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
    }
    async function p() {
      try {
        await r("WAWebNetworkStatus").waitIfOffline();
        var e = await o("WAPromiseTimeout").promiseTimeout(
          o("WAWebFetchAdAccountToken").fetchToken(),
          o(
            "WAWebFetchAdAccountToken",
          ).getMaximumAdAccountFetchTimeoutSeconds() * 1e3,
        );
        if (e.type !== "success") return (e.type, e);
        var t = await _(e.token);
        return (
          t.type === "success"
            ? t.type
            : t.type === "auth-failure"
              ? o("WAWebFetchAdAccountToken").markTokenAsInvalid()
              : t.type,
          t
        );
      } catch (e) {
        return e instanceof o("WACustomError").TimeoutError
          ? { type: "timeout" }
          : { type: "error" };
      }
    }
    async function _(e) {
      var t, n, a, i;
      await r("WAWebNetworkStatus").waitIfOffline();
      var l = await o("WAWebRelayClient")
          .fetchQuery(
            d,
            { data: { platform: "UNKNOWN" } },
            { environmentType: "facebook", accessToken: e },
          )
          .catch(function (e) {
            if (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e))
              return { type: "auth-failure" };
            if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError)
              return { type: "graphql-error", error: e };
          }),
        s =
          l == null || (t = l.xwa_get_subscriptions) == null
            ? void 0
            : t.subscriptions,
        u =
          l == null || (n = l.xwa_get_subscriptions) == null
            ? void 0
            : n.feature_flags;
      if (s == null || u == null) return c;
      var m =
        (a =
          (i = u.find(function (e) {
            return (
              o("WAWebFeatureFlagName").FeatureFlagName.cast(e.name) ===
              o("WAWebFeatureFlagName").FeatureFlagName.NEW_CHATS_LIMIT
            );
          })) == null
            ? void 0
            : i.enabled) != null
          ? a
          : !1;
      return {
        type: "success",
        subscriptions: s.map(function (e) {
          var t, n, r, o, a;
          return {
            expirationDate: (t = e.end_time) != null ? t : null,
            id: (n = e.id) != null ? n : "",
            status: f(e.status),
            creationTime: (r = e.creation_time) != null ? r : null,
            newMessageCappingEnabled: m,
            tier: (o = e.tier) != null ? o : null,
            source: g(e.source),
            startTime: (a = e.start_time) != null ? a : null,
          };
        }),
        featureFlags: u.map(function (e) {
          var t, n, r;
          return {
            name: (t = e.name) != null ? t : "",
            enabled: (n = e.enabled) != null ? n : !1,
            limit: (r = e.limit) != null ? r : null,
          };
        }),
      };
    }
    function f(e) {
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
    function g(e) {
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

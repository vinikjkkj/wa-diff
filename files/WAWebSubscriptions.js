__d(
  "WAWebSubscriptions",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAPromiseDelays",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebFetchSubscriptions",
    "WAWebSchemaFeatureFlag",
    "WAWebSchemaSubscription",
    "WAWebSubscriptionsGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsSubscription",
    "WAWebWorkerSafeBackendApi",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = { minTimeout: 5e3, maxTimeout: 3e4, retries: 10 },
      m = 86400 * 1e3,
      p = ["ACTIVE", "FREE_TRIAL", "IN_GRACE_PERIOD"];
    function _(e) {
      return (
        e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
        e.statusCode === 500
      );
    }
    async function f() {
      if (o("WAWebSubscriptionsGatingUtils").subscriptionFetchEnabled()) {
        var t =
          o("WAWebUserPrefsSubscription").getNextSubscriptionQuery() -
          Date.now();
        t > 0 && (await o("WAPromiseDelays").delayMs(t));
        try {
          await o("WAExponentialBackoff").exponentialBackoff(
            d,
            function (t, n) {
              return v().catch(function (r) {
                if (_(r))
                  return (
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[sub-mgr] query failed, retriable: ",
                          " fail=",
                          "",
                        ])),
                      r.message,
                      n,
                    ),
                    t(r)
                  );
                throw r;
              });
            },
          );
        } catch (e) {
          if (
            (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Subscriptions manager pull failed, error: ",
                    "",
                  ])),
                e,
              )
              .verbose()
              .sendLogs("Subscriptions manager run failed"),
            !_(e))
          )
            return;
        }
        (o("WAWebUserPrefsSubscription").setNextSubscriptionQuery(
          Date.now() + m,
        ),
          await o("WAPromiseDelays").delayMs(m),
          o("WAWebUserPrefsMeUser").getMaybeMePnUser() && f());
      }
    }
    async function g(e, t, n) {
      (n === void 0 && (n = "update"),
        await C(e, n),
        await b(t, n),
        o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
          "loadQuickPromotions",
          { trigger: "prefetch" },
        ));
    }
    function h(e) {
      return e.map(function (e) {
        var t,
          n,
          r,
          o = {
            id: e.id,
            isAutoRenewing: e.status === "ACTIVE",
            isDeactivated: !p.includes(e.status),
            expirationDate:
              e.expirationDate !== void 0
                ? parseInt(String(e.expirationDate), 10)
                : void 0,
            creationTime:
              e.creationTime !== void 0
                ? parseInt(String(e.creationTime), 10)
                : void 0,
            newMessageCappingEnabled: e.newMessageCappingEnabled,
            tier: (t = e.tier) != null ? t : null,
            status: (n = e.status) != null ? n : null,
            source: (r = e.source) != null ? r : null,
            isPlatformChanged: null,
            startTime:
              e.startTime != null ? parseInt(String(e.startTime), 10) : null,
          };
        return (
          e.status === "CANCELED" &&
            (o.expirationDate || 0) > Date.now() / 1e3 &&
            (o.isDeactivated = !1),
          o
        );
      });
    }
    function y(e) {
      return e.map(function (e) {
        var t;
        return {
          id: e.name,
          enabled: e.enabled,
          expirationTime: null,
          limit: (t = e.limit) != null ? t : null,
        };
      });
    }
    async function C(e, t) {
      var n = h(e);
      e: {
        if (t === "update") {
          (await o("WAWebSchemaSubscription")
            .getSubscriptionTable()
            .bulkCreateOrMerge(n),
            o("WAWebBackendApi").frontendFireAndForget("updateSubscriptions", {
              command: "update",
              subscriptions: n,
            }));
          break e;
        }
        if (t === "rewrite") {
          (await o("WAWebSchemaSubscription").getSubscriptionTable().clear(),
            n.length &&
              (await o("WAWebSchemaSubscription")
                .getSubscriptionTable()
                .bulkCreate(n)),
            o("WAWebBackendApi").frontendFireAndForget("updateSubscriptions", {
              command: "rewrite",
              subscriptions: n,
            }));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    async function b(e, t) {
      if (!o("WAWebSchemaFeatureFlag").isFeatureFlagTableAvailable()) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "subscription sync, feature flags table not available",
            ])),
        );
        return;
      }
      var n = y(e);
      e: {
        if (t === "update") {
          (await o("WAWebSchemaFeatureFlag")
            .getFeatureFlagTable()
            .bulkCreateOrMerge(n),
            o("WAWebBackendApi").frontendFireAndForget("updateFeatureFlags", {
              command: "update",
              featureFlags: n,
            }));
          break e;
        }
        if (t === "rewrite") {
          (await o("WAWebSchemaFeatureFlag").getFeatureFlagTable().clear(),
            n.length &&
              (await o("WAWebSchemaFeatureFlag")
                .getFeatureFlagTable()
                .bulkCreate(n)),
            o("WAWebBackendApi").frontendFireAndForget("updateFeatureFlags", {
              command: "rewrite",
              featureFlags: n,
            }));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    async function v() {
      if (o("WAWebUserPrefsMeUser").getMaybeMePnUser()) {
        var e = await o("WAWebFetchSubscriptions").fetchSubscriptions();
        if (e.type === "success" && e.subscriptions != null) {
          var t;
          g(e.subscriptions, (t = e.featureFlags) != null ? t : [], "rewrite");
          return;
        }
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "subscription sync: GraphQL fetch failed with type: ",
                  "",
                ])),
              e.type,
            )
            .verbose()
            .sendLogs("premium-subscriptions-fetch-error", { sampling: 0.01 }),
          e.type === "error" || e.type === "graphql-error"
            ? new (o("WAWebBackendErrors").ServerStatusCodeError)(500)
            : r("err")("Failed to fetch subscriptions via GraphQL: " + e.type)
        );
      }
    }
    ((l.runSubscriptionsManager = f),
      (l.applySubscriptionsAndFeatureFlags = g),
      (l.query = v));
  },
  98,
);

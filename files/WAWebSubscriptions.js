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
    "asyncToGeneratorRuntime",
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
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebSubscriptionsGatingUtils").subscriptionFetchEnabled()) {
            var t =
              o("WAWebUserPrefsSubscription").getNextSubscriptionQuery() -
              Date.now();
            t > 0 && (yield o("WAPromiseDelays").delayMs(t));
            try {
              yield o("WAExponentialBackoff").exponentialBackoff(
                d,
                function (t, n) {
                  return E().catch(function (r) {
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
              yield o("WAPromiseDelays").delayMs(m),
              o("WAWebUserPrefsMeUser").getMaybeMePnUser() && f());
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (n === void 0 && (n = "update"), yield v(e, n), yield R(t, n));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return e.map(function (e) {
        var t,
          n,
          r,
          o,
          a = {
            id: e.id,
            isAutoRenewing: e.status === "ACTIVE",
            isDeactivated: !p.includes(e.status),
            expirationDate:
              e.expirationDate !== void 0
                ? parseInt(e.expirationDate, 10)
                : void 0,
            creationTime:
              e.creationTime !== void 0 ? parseInt(e.creationTime, 10) : void 0,
            newMessageCappingEnabled: e.newMessageCappingEnabled,
            tier: (t = e.tier) != null ? t : null,
            status: (n = e.status) != null ? n : null,
            source: (r = e.source) != null ? r : null,
            isPlatformChanged: (o = e.isPlatformChanged) != null ? o : null,
            startTime: e.startTime != null ? parseInt(e.startTime, 10) : null,
          };
        return (
          e.status === "CANCELED" &&
            (a.expirationDate || 0) > Date.now() / 1e3 &&
            (a.isDeactivated = !1),
          a
        );
      });
    }
    function b(e) {
      return e.map(function (e) {
        var t, n;
        return {
          id: e.name,
          enabled: e.enabled,
          expirationTime: (t = e.expirationTime) != null ? t : null,
          limit: (n = e.limit) != null ? n : null,
        };
      });
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = C(e);
          e: {
            if (t === "update") {
              (yield o("WAWebSchemaSubscription")
                .getSubscriptionTable()
                .bulkCreateOrMerge(n),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateSubscriptions",
                  { command: "update", subscriptions: n },
                ));
              break e;
            }
            if (t === "rewrite") {
              (yield o("WAWebSchemaSubscription")
                .getSubscriptionTable()
                .clear(),
                n.length &&
                  (yield o("WAWebSchemaSubscription")
                    .getSubscriptionTable()
                    .bulkCreate(n)),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateSubscriptions",
                  { command: "rewrite", subscriptions: n },
                ));
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                t,
            );
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!o("WAWebSchemaFeatureFlag").isFeatureFlagTableAvailable()) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "subscription sync, feature flags table not available",
                ])),
            );
            return;
          }
          var n = b(e);
          e: {
            if (t === "update") {
              (yield o("WAWebSchemaFeatureFlag")
                .getFeatureFlagTable()
                .bulkCreateOrMerge(n),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateFeatureFlags",
                  { command: "update", featureFlags: n },
                ));
              break e;
            }
            if (t === "rewrite") {
              (yield o("WAWebSchemaFeatureFlag").getFeatureFlagTable().clear(),
                n.length &&
                  (yield o("WAWebSchemaFeatureFlag")
                    .getFeatureFlagTable()
                    .bulkCreate(n)),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateFeatureFlags",
                  { command: "rewrite", featureFlags: n },
                ));
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                t,
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebUserPrefsMeUser").getMaybeMePnUser()) {
            var e = yield o("WAWebFetchSubscriptions").fetchSubscriptions();
            if (e.type === "success" && e.subscriptions != null) {
              var t;
              h(
                e.subscriptions,
                (t = e.featureFlags) != null ? t : [],
                "rewrite",
              );
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
                .sendLogs("premium-subscriptions-fetch-error", {
                  sampling: 0.01,
                }),
              e.type === "error" || e.type === "graphql-error"
                ? new (o("WAWebBackendErrors").ServerStatusCodeError)(500)
                : r("err")(
                    "Failed to fetch subscriptions via GraphQL: " + e.type,
                  )
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    ((l.runSubscriptionsManager = f),
      (l.applySubscriptionsAndFeatureFlags = h),
      (l.query = E));
  },
  98,
);

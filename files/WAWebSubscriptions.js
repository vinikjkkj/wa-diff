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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = {
        minTimeout: 5e3,
        maxTimeout: 3e4,
        retries: 10,
        signal: new AbortController().signal,
      },
      m = 86400 * 1e3,
      p = ["ACTIVE", "FREE_TRIAL", "IN_GRACE_PERIOD"];
    async function _() {
      if (o("WAWebSubscriptionsGatingUtils").subscriptionFetchEnabled()) {
        var t = o("WAWebUserPrefsSubscription").getNextSubscriptionQuery();
        if (t) {
          var n = t - Date.now();
          n > 0 && (await o("WAPromiseDelays").delayMs(n));
        }
        try {
          await o("WAExponentialBackoff").exponentialBackoff(
            d,
            function (t, n) {
              return b().catch(function (r) {
                if (r instanceof o("WAWebBackendErrors").ServerStatusCodeError)
                  e: {
                    if (r.statusCode === 500) {
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
                      break e;
                    }
                    break e;
                  }
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
            !(
              e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              e.statusCode === 500
            ))
          )
            return;
        }
        (o("WAWebUserPrefsSubscription").setNextSubscriptionQuery(
          Date.now() + m,
        ),
          await o("WAPromiseDelays").delayMs(m),
          o("WAWebUserPrefsMeUser").getMaybeMePnUser() && _());
      }
    }
    async function f(e, t, n) {
      (n === void 0 && (n = "update"), await y(e, n), await C(t, n));
    }
    function g(e) {
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
    function h(e) {
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
    async function y(e, t) {
      var n = g(e);
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
    async function C(e, t) {
      if (!o("WAWebSchemaFeatureFlag").isFeatureFlagTableAvailable()) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "subscription sync, feature flags table not available",
            ])),
        );
        return;
      }
      var n = h(e);
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
    async function b() {
      if (o("WAWebUserPrefsMeUser").getMaybeMePnUser()) {
        var e = await o("WAWebFetchSubscriptions").fetchSubscriptions();
        if (e.type === "success" && e.subscriptions != null) {
          var t;
          f(e.subscriptions, (t = e.featureFlags) != null ? t : [], "rewrite");
        } else
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
              : r("err")("Failed to fetch subscriptions via GraphQL: " + e.type)
          );
      }
    }
    ((l.runSubscriptionsManager = _),
      (l.applySubscriptionsAndFeatureFlags = f),
      (l.query = b));
  },
  98,
);

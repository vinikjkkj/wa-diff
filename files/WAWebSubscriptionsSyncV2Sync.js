__d(
  "WAWebSubscriptionsSyncV2Sync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WAWebODS",
    "WAWebSubscriptionSource",
    "WAWebSubscriptions",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 1;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.SubscriptionsSyncV2;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = 0,
                  l = yield (s || (s = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              e: {
                                var t = e;
                                if (
                                  ((typeof t == "object" && t !== null) ||
                                    typeof t == "function") &&
                                  t.operation === "set" &&
                                  "value" in t
                                ) {
                                  var n = t.value,
                                    l = n.subscriptionsSyncV2Action;
                                  if (!l)
                                    return (
                                      r("WAWebODS").incr(
                                        "web.app.subscription_sync.syncd.malformed",
                                      ),
                                      o(
                                        "WAWebSyncdIndexUtils",
                                      ).malformedActionValue(a.collectionName)
                                    );
                                  var s = l.paidFeature,
                                    u = l.subscriptions,
                                    c = (u != null ? u : []).map(function (e) {
                                      var t;
                                      return {
                                        id: (t = e.id) != null ? t : "",
                                        tier: e.tier,
                                        status: e.status,
                                        expirationDate:
                                          e.endTime != null
                                            ? Number(e.endTime)
                                            : null,
                                        startTime:
                                          e.startTime != null
                                            ? Number(e.startTime)
                                            : null,
                                        isPlatformChanged: e.isPlatformChanged,
                                        source:
                                          e.source != null
                                            ? o(
                                                "WAWebSubscriptionSource",
                                              ).SubscriptionSource.cast(
                                                e.source,
                                              )
                                            : null,
                                        creationTime:
                                          e.creationTime != null
                                            ? Number(e.creationTime)
                                            : null,
                                      };
                                    }),
                                    d = (s != null ? s : []).map(function (e) {
                                      var t, n, r;
                                      return {
                                        name: (t = e.name) != null ? t : "",
                                        enabled:
                                          (n = e.enabled) != null ? n : !1,
                                        expirationTime:
                                          e.expirationTime != null
                                            ? Number(e.expirationTime)
                                            : null,
                                        limit: (r = e.limit) != null ? r : null,
                                      };
                                    });
                                  return (
                                    yield o(
                                      "WAWebSubscriptions",
                                    ).applySubscriptionsAndFeatureFlags(
                                      c,
                                      d,
                                      "rewrite",
                                    ),
                                    r("WAWebODS").incr(
                                      "web.app.subscription_sync.syncd.success",
                                    ),
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Success,
                                    }
                                  );
                                  break e;
                                }
                                if (
                                  ((typeof t == "object" && t !== null) ||
                                    typeof t == "function") &&
                                  t.operation === "remove"
                                ) {
                                  return (
                                    i++,
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Success,
                                    }
                                  );
                                  break e;
                                }
                                throw Error(
                                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                    t,
                                );
                              }
                            } catch (e) {
                              return (
                                r("WAWebODS").incr(
                                  "web.app.subscription_sync.syncd.error",
                                ),
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Failed,
                                }
                              );
                            }
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                return (
                  i > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[SubscriptionsSyncV2Sync] ",
                          " REMOVE ops (singleton)",
                        ])),
                      i,
                    ),
                  l
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      c = new u();
    l.default = c;
  },
  98,
);

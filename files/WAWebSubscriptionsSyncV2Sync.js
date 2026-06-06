__d(
  "WAWebSubscriptionsSyncV2Sync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebODS",
    "WAWebSubscriptionSource",
    "WAWebSubscriptions",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.SubscriptionsSyncV2;
          }),
          (a.applyMutations = async function (n) {
            var t = this,
              a = 0,
              i = await Promise.all(
                n.map(async function (e) {
                  try {
                    e: {
                      var n = e;
                      if (
                        ((typeof n == "object" && n !== null) ||
                          typeof n == "function") &&
                        n.operation === "set" &&
                        "value" in n
                      ) {
                        var i = n.value,
                          l = i.subscriptionsSyncV2Action;
                        if (!l)
                          return (
                            r("WAWebODS").incr(
                              "web.app.subscription_sync.syncd.malformed",
                            ),
                            o("WAWebSyncdIndexUtils").malformedActionValue(
                              t.collectionName,
                            )
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
                                e.endTime != null ? Number(e.endTime) : null,
                              startTime:
                                e.startTime != null
                                  ? Number(e.startTime)
                                  : null,
                              isPlatformChanged: e.isPlatformChanged,
                              source:
                                e.source != null
                                  ? o(
                                      "WAWebSubscriptionSource",
                                    ).SubscriptionSource.cast(e.source)
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
                              enabled: (n = e.enabled) != null ? n : !1,
                              expirationTime:
                                e.expirationTime != null
                                  ? Number(e.expirationTime)
                                  : null,
                              limit: (r = e.limit) != null ? r : null,
                            };
                          });
                        return (
                          await o(
                            "WAWebSubscriptions",
                          ).applySubscriptionsAndFeatureFlags(c, d, "rewrite"),
                          r("WAWebODS").incr(
                            "web.app.subscription_sync.syncd.success",
                          ),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          }
                        );
                        break e;
                      }
                      if (
                        ((typeof n == "object" && n !== null) ||
                          typeof n == "function") &&
                        n.operation === "remove"
                      ) {
                        return (
                          a++,
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          }
                        );
                        break e;
                      }
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          n,
                      );
                    }
                  } catch (e) {
                    return (
                      r("WAWebODS").incr(
                        "web.app.subscription_sync.syncd.error",
                      ),
                      { actionState: o("WASyncdConst").SyncActionState.Failed }
                    );
                  }
                }),
              );
            return (
              a > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[SubscriptionsSyncV2Sync] ",
                      " REMOVE ops (singleton)",
                    ])),
                  a,
                ),
              i
            );
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      u = new s();
    l.default = u;
  },
  98,
);

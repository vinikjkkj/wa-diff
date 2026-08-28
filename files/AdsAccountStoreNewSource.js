__d(
  "AdsAccountStoreNewSource",
  [
    "AdAccountIDConverter",
    "AdsAccountDataLoader",
    "AdsAccountStoreNewSourceFragment.graphql",
    "AdsAccountStoreNewSourceLoadedQuery.graphql",
    "AdsAccountStoreNewSourceServerQuery.graphql",
    "AdsAccountStoreNewSourceServerQueryPreloadingConfig",
    "AdsManagerAccountIDToNodeIDUtils",
    "FBLogger",
    "Promise",
    "RelayModern",
    "ReverseInteropStoreSourceBase",
    "amFetchPreloadedQuery",
    "asyncToGeneratorRuntime",
    "err",
    "promiseDone",
    "readClientFragment",
    "updateLoadedAdAccountsClientSchema",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d =
        e !== void 0
          ? e
          : (e = n("AdsAccountStoreNewSourceServerQuery.graphql")),
      m =
        s !== void 0
          ? s
          : (s = n("AdsAccountStoreNewSourceLoadedQuery.graphql")),
      p =
        u !== void 0 ? u : (u = n("AdsAccountStoreNewSourceFragment.graphql")),
      _ = "loaded_ad_accounts",
      f = "AdAccount",
      g = (function (e) {
        function t() {
          var t;
          return (
            (t = e.call(this) || this),
            (t.$AdsAccountStoreNewSource$p_1 = new Map()),
            t
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.getValueFromAccountIDToGraphQLIDMap = function (t) {
            var e = this.addPrefixToKey(t);
            return o("AdsManagerAccountIDToNodeIDUtils").getAccountNodeID(e);
          }),
          (a.addValueToAccountIDToGraphQLIDMap__TEST_ONLY = function (t, n) {
            var e = this.addPrefixToKey(t);
            o("AdsManagerAccountIDToNodeIDUtils").addAccountIDToNodeIDMap(e, n);
          }),
          (a.getValueFromGkData__TEST_ONLY = function (t) {
            return this.$AdsAccountStoreNewSource$p_1.get(t);
          }),
          (a.addValueToGkData__TEST_ONLY = function (t, n) {
            this.$AdsAccountStoreNewSource$p_1.set(t, n);
          }),
          (a.removeValueFromGkData = function (t) {
            this.$AdsAccountStoreNewSource$p_1.delete(t);
          }),
          (a.addPrefixToKey = function (t) {
            return o("AdAccountIDConverter").toActID(t);
          }),
          (a.removePrefixFromKey = function (t) {
            return o("AdAccountIDConverter").toID(t);
          }),
          (a.addTOSEntriesToAccount = function (t, n) {
            var e = this.addPrefixToKey(t),
              r = o("AdsManagerAccountIDToNodeIDUtils").getAccountNodeID(e),
              a = "tos_accepted",
              i = "AdAccountTOSNameAndVersion";
            r != null &&
              o("RelayModern").commitLocalUpdate(
                this.__environment,
                function (e) {
                  var t,
                    o,
                    l,
                    s =
                      (t =
                        (o = e.get(r)) == null
                          ? void 0
                          : o.getLinkedRecords(a)) != null
                        ? t
                        : [],
                    u;
                  (Object.entries(n).map(function (t) {
                    var n,
                      o,
                      l,
                      c = t[0],
                      d = t[1];
                    ((u =
                      e == null || (n = e.get(r)) == null
                        ? void 0
                        : n.getOrCreateLinkedRecord(a + ":" + s.length, i)),
                      (o = u) == null || o.setValue(c, "name"),
                      (l = u) == null || l.setValue(d, "version"),
                      s.push(u));
                  }),
                    (l = e.get(r)) == null || l.setLinkedRecords(s, a));
                },
              );
          }),
          (a.addLinkedRecordToAccount = function (t, n, r, a) {
            var e = this.addPrefixToKey(t),
              i = o("AdsManagerAccountIDToNodeIDUtils").getAccountNodeID(e);
            i != null &&
              o("RelayModern").commitLocalUpdate(
                this.__environment,
                function (e) {
                  var t,
                    o =
                      (t = e.get(i)) == null
                        ? void 0
                        : t.getOrCreateLinkedRecord(n, r);
                  Object.keys(a).forEach(function (e) {
                    o == null || o.setValue(a[e], e);
                  });
                },
              );
          }),
          (a.__getQuery = function () {
            return m;
          }),
          (a.__getVariables = function () {
            return {};
          }),
          (a.__serializeKey = function (t) {
            return o("AdAccountIDConverter").toActID(t);
          }),
          (a.$AdsAccountStoreNewSource$p_2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  a = this.addPrefixToKey(e),
                  i = r("amFetchPreloadedQuery")(
                    this.__environment,
                    d,
                    { adAccountID: a },
                    {
                      fetchPolicy: "store-or-network",
                      networkCacheConfig: {
                        metadata: {
                          preloadingConfig: o(
                            "AdsAccountStoreNewSourceServerQueryPreloadingConfig",
                          ).idPreloadingConfig,
                        },
                      },
                    },
                  ).toPromise(),
                  l = yield (c || (c = n("Promise"))).all([
                    o("AdsAccountDataLoader").fetchGKs(
                      this.removePrefixFromKey(a),
                    ),
                    i,
                  ]),
                  s = l[0],
                  u = l[1],
                  m = u == null || (t = u.ad_account) == null ? void 0 : t.id;
                s != null && m != null
                  ? (this.$AdsAccountStoreNewSource$p_1.set(
                      this.removePrefixFromKey(a),
                      s,
                    ),
                    o(
                      "AdsManagerAccountIDToNodeIDUtils",
                    ).addAccountIDToNodeIDMap(a, m))
                  : r("err")("Failed to retrieve account ID or GK data");
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$AdsAccountStoreNewSource$p_3 = function (t, n) {
            var e = this,
              a = this.addPrefixToKey(t);
            r("amFetchPreloadedQuery")(
              this.__environment,
              d,
              { adAccountID: a },
              {
                fetchPolicy: "store-or-network",
                networkCacheConfig: {
                  metadata: {
                    preloadingConfig: o(
                      "AdsAccountStoreNewSourceServerQueryPreloadingConfig",
                    ).accountPreloadingConfig,
                  },
                },
              },
            ).subscribe({
              next: function () {
                (r("updateLoadedAdAccountsClientSchema")(e.__environment, a),
                  e.$AdsAccountStoreNewSource$p_4(a));
              },
              error: function (r) {
                return e.handleFetchQueryError([a], n, r);
              },
            });
          }),
          (a.__fetchQuery = function (t, n) {
            var e = this;
            if (t.length !== 0) {
              var o = t.map(function (t) {
                  return e.addPrefixToKey(t);
                }),
                a = o[0];
              (this.updateRecords(o, _, f),
                r("promiseDone")(
                  this.$AdsAccountStoreNewSource$p_2(a),
                  function () {
                    e.$AdsAccountStoreNewSource$p_3(a, n);
                  },
                  function (t) {
                    e.handleFetchQueryError([a], n, t);
                  },
                ));
            }
          }),
          (a.$AdsAccountStoreNewSource$p_4 = function (t) {
            var e = this.addPrefixToKey(t);
            o("RelayModern").commitLocalUpdate(
              this.__environment,
              function (t) {
                var n = t.get(e);
                (n == null ? void 0 : n.getType()) === f && t.delete(e);
              },
            );
          }),
          (a.__getCached = function (t, n) {
            var e = this,
              a = t.map(function (t) {
                var n = e.addPrefixToKey(t),
                  a = o("AdsManagerAccountIDToNodeIDUtils").getAccountNodeID(n);
                return (
                  a == null &&
                    (r("FBLogger")(
                      "l4_reverse_interop",
                      "missing_data_id",
                    ).warn(
                      "dataID is missing for account id: %s. Likely accessing unloaded account.",
                      n,
                    ),
                    (a = n)),
                  {
                    key: n,
                    value: r("readClientFragment")(
                      e.__environment,
                      d,
                      p,
                      { adAccountID: n },
                      {},
                      a,
                      function (t) {
                        return babelHelpers.extends(
                          {},
                          t == null ? void 0 : t.adaccount_spec,
                          {
                            __gk_DO_NOT_USE:
                              e.$AdsAccountStoreNewSource$p_1.get(
                                e.removePrefixFromKey(n),
                              ),
                          },
                        );
                      },
                    ),
                  }
                );
              });
            return a;
          }),
          (a.__deleteRelayCacheRecords = function (t) {
            var e = this;
            o("RelayModern").commitLocalUpdate(
              this.__environment,
              function (n) {
                var r,
                  a = (r = n.getRoot().getLinkedRecords(_)) != null ? r : [];
                for (var i of t) {
                  var l = e.addPrefixToKey(i),
                    s = o("AdsManagerAccountIDToNodeIDUtils").getAccountNodeID(
                      l,
                    );
                  if (s != null) {
                    var u = n.get(s);
                    (u == null ? void 0 : u.getType()) === f &&
                      (u == null || u.setValue(void 0, "name"));
                  }
                }
                n.getRoot().setLinkedRecords(a, _);
              },
            );
          }),
          t
        );
      })(r("ReverseInteropStoreSourceBase"));
    l.default = g;
  },
  98,
);

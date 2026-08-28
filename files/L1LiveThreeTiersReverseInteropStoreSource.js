__d(
  "L1LiveThreeTiersReverseInteropStoreSource",
  [
    "cssVar",
    "AdsAdgroupFieldSetMap",
    "AdsManagerLiveDataAdgroupQueryPreloadingConfig",
    "FBLogger",
    "L1LiveThreeTiersReverseInteropStoreSourceLoadedQuery.graphql",
    "L1LiveThreeTiersReverseInteropStoreSourceNodeFragment.graphql",
    "L1LiveThreeTiersReverseInteropStoreSourceTier1V2ServerFragment.graphql",
    "L1LiveThreeTiersReverseInteropStoreSourceTier1V2ServerQuery.graphql",
    "L1LiveThreeTiersReverseInteropStoreSourceTier3ServerFragment.graphql",
    "L1LiveThreeTiersReverseInteropStoreSourceTier3ServerQuery.graphql",
    "L1LiveTrueTieredReverseInteropStoreSourceTier2ServerFragment.graphql",
    "L1LiveTrueTieredReverseInteropStoreSourceTier2ServerQuery.graphql",
    "LoadObject",
    "RelayHooks",
    "ReverseInteropStoreSourceBase",
    "amFetchPreloadedQuery",
    "err",
    "gkx",
    "isEmptyObject",
    "isFalsey",
    "isTruthy",
    "memoizeWithArgsByKey",
    "readClientFragment",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = parseInt("46px", 10),
      f = r("gkx")("4960"),
      g = [
        "account_id",
        "creative",
        "creative_automation_spec",
        "effective_status",
        "status",
        "creative_asset_groups_spec",
      ],
      h = Object.keys(r("AdsAdgroupFieldSetMap").cheap_tier2),
      y = ["adset_id", "campaign_id", "id", "name"],
      C =
        e !== void 0
          ? e
          : (e = n(
              "L1LiveThreeTiersReverseInteropStoreSourceLoadedQuery.graphql",
            )),
      b =
        u !== void 0
          ? u
          : (u = n(
              "L1LiveThreeTiersReverseInteropStoreSourceNodeFragment.graphql",
            )),
      v =
        c !== void 0
          ? c
          : (c = n(
              "L1LiveThreeTiersReverseInteropStoreSourceTier1V2ServerQuery.graphql",
            )),
      S =
        d !== void 0
          ? d
          : (d = n(
              "L1LiveThreeTiersReverseInteropStoreSourceTier1V2ServerFragment.graphql",
            )),
      R =
        m !== void 0
          ? m
          : (m = n(
              "L1LiveThreeTiersReverseInteropStoreSourceTier3ServerQuery.graphql",
            )),
      L =
        p !== void 0
          ? p
          : (p = n(
              "L1LiveThreeTiersReverseInteropStoreSourceTier3ServerFragment.graphql",
            )),
      E = 5,
      k = 20;
    function I(e) {
      return {
        chunkSize: e,
        combineResponses: function (t) {
          var e = {
            data: {
              nodes: t
                .map(function (e) {
                  return e.data.nodes;
                })
                .filter(Boolean)
                .reduce(function (e, t) {
                  return [].concat(e, t);
                }, []),
            },
          };
          return e;
        },
      };
    }
    var T = (function (e) {
      function t() {
        for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
          o[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(o)) || this),
          (t.$L1LiveThreeTiersReverseInteropStoreSource$p_4 = r(
            "memoizeWithArgsByKey",
          )(function (e, t, n) {
            if (r("isFalsey")(e) && r("isFalsey")(t) && r("isFalsey")(n))
              return null;
            if (
              (e != null && e.isLoading()) ||
              (t != null && t.isLoading()) ||
              (n != null && n.isLoading())
            )
              return r("LoadObject").loading({ creatorModuleID: i.id });
            var o = e == null ? void 0 : e.getValue(),
              a = t == null ? void 0 : t.getValue(),
              l = n == null ? void 0 : n.getValue();
            return r("LoadObject").withValue(
              babelHelpers.extends({}, o, a, l),
              { creatorModuleID: i.id },
            );
          })),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.isTiered = function () {
          return !0;
        }),
        (n.getTierFields = function (t) {
          var e = this.$L1LiveThreeTiersReverseInteropStoreSource$p_1(t),
            n = this.$L1LiveThreeTiersReverseInteropStoreSource$p_2(t),
            r = this.$L1LiveThreeTiersReverseInteropStoreSource$p_3(t),
            o = e ? g : [],
            a = n ? h : [],
            i = r ? y : [];
          return o.concat(a, i);
        }),
        (n.__getCached = function (t, n) {
          var e = this,
            o = this.$L1LiveThreeTiersReverseInteropStoreSource$p_1(n),
            a = this.$L1LiveThreeTiersReverseInteropStoreSource$p_2(n),
            l = this.$L1LiveThreeTiersReverseInteropStoreSource$p_3(n),
            s = o
              ? t.map(function (t) {
                  return {
                    id: t,
                    value: r("readClientFragment")(
                      e.__environment,
                      v,
                      S,
                      { ids: [t], thumbnail_size: _ },
                      { thumbnail_size: _ },
                      t,
                      function (e) {
                        return e == null ? void 0 : e.adgroup_spec_tier1_v2;
                      },
                    ),
                  };
                })
              : [],
            u = a
              ? t.map(function (t) {
                  return {
                    id: t,
                    value: r("readClientFragment")(
                      e.__environment,
                      r(
                        "L1LiveTrueTieredReverseInteropStoreSourceTier2ServerQuery.graphql",
                      ),
                      r(
                        "L1LiveTrueTieredReverseInteropStoreSourceTier2ServerFragment.graphql",
                      ),
                      { ids: [t], fetch_instagram_field: !0 },
                      { fetch_instagram_field: !0 },
                      t,
                      function (e) {
                        return e == null ? void 0 : e.adgroup_spec_tier2;
                      },
                    ),
                  };
                })
              : [],
            c = l
              ? t.map(function (t) {
                  return {
                    id: t,
                    value: r("readClientFragment")(
                      e.__environment,
                      R,
                      L,
                      { ids: [t] },
                      {},
                      t,
                      function (e) {
                        return e == null ? void 0 : e.adgroup_spec_tier3;
                      },
                    ),
                  };
                })
              : [],
            d = new Map();
          (s.forEach(function (e) {
            var t = e.id,
              n = e.value;
            d.set(t, { tier1Value: n });
          }),
            u.forEach(function (e) {
              var t = e.id,
                n = e.value,
                r = d.get(t);
              d.set(t, babelHelpers.extends({}, r, { tier2Value: n }));
            }),
            c.forEach(function (e) {
              var t = e.id,
                n = e.value,
                r = d.get(t);
              d.set(t, babelHelpers.extends({}, r, { tier3Value: n }));
            }));
          var m = Array.from(d.entries()).map(function (t) {
              var n = t[0],
                r = t[1],
                o = r.tier1Value,
                a = r.tier2Value,
                i = r.tier3Value,
                l = e.$L1LiveThreeTiersReverseInteropStoreSource$p_4(
                  n,
                  o,
                  a,
                  i,
                );
              return { key: n, value: l };
            }),
            p = [],
            g = [],
            h = m
              .map(function (e) {
                var t,
                  n = e.value;
                return n != null && n.isEmpty()
                  ? (p.push(e.key), null)
                  : n != null &&
                      n.isDone() &&
                      r("isEmptyObject")(
                        (t = n == null ? void 0 : n.getValue()) != null
                          ? t
                          : {},
                      )
                    ? (g.push(e.key), null)
                    : e;
              })
              .filter(Boolean);
          return (
            !f &&
              p.length > 0 &&
              r("FBLogger")("relay_ads_manager", i.id).warn(
                "empty result in loader for ids %s",
                p.slice(0, 20).join(","),
              ),
            !f &&
              g.length > 0 &&
              r("FBLogger")("relay_ads_manager", i.id).warn(
                "empty result value in loader for ids %s",
                g.slice(0, 20).join(","),
              ),
            h
          );
        }),
        (n.__getQuery = function () {
          return C;
        }),
        (n.__getVariables = function () {
          return { thumbnail_size: _, fetch_instagram_field: !0 };
        }),
        (n.__fetchQuery = function (t, n, a) {
          var e = this;
          a === void 0 && (a = !1);
          var i = t.filter(function (e) {
            return r("isTruthy")(e) && e !== "null";
          });
          if (i.length !== 0) {
            var l = "network-only";
            this.__createLoadingRecordsInRelayStore(i);
            var s = this.$L1LiveThreeTiersReverseInteropStoreSource$p_1(n),
              u = this.$L1LiveThreeTiersReverseInteropStoreSource$p_2(n),
              c = this.$L1LiveThreeTiersReverseInteropStoreSource$p_3(n);
            (s &&
              r("amFetchPreloadedQuery")(
                this.__environment,
                v,
                { ids: i, thumbnail_size: _ },
                {
                  fetchPolicy: l,
                  networkCacheConfig: {
                    metadata: {
                      preloadingConfig: o(
                        "AdsManagerLiveDataAdgroupQueryPreloadingConfig",
                      ).Tier1FieldsConfig,
                      fetchConfig: I(E),
                    },
                  },
                },
              ).subscribe({
                next: function (r) {
                  return e.$L1LiveThreeTiersReverseInteropStoreSource$p_5(
                    i,
                    n,
                    r,
                  );
                },
                error: function (r) {
                  return e.$L1LiveThreeTiersReverseInteropStoreSource$p_6(
                    i,
                    r,
                    n,
                  );
                },
              }),
              u &&
                r("amFetchPreloadedQuery")(
                  this.__environment,
                  r(
                    "L1LiveTrueTieredReverseInteropStoreSourceTier2ServerQuery.graphql",
                  ),
                  { ids: i, fetch_instagram_field: !0 },
                  {
                    fetchPolicy: l,
                    networkCacheConfig: {
                      metadata: {
                        preloadingConfig: o(
                          "AdsManagerLiveDataAdgroupQueryPreloadingConfig",
                        ).DefaultConfig,
                        fetchConfig: I(E),
                      },
                    },
                  },
                ).subscribe({
                  next: function (r) {
                    return e.$L1LiveThreeTiersReverseInteropStoreSource$p_5(
                      i,
                      n,
                      r,
                    );
                  },
                  error: function (r) {
                    return e.$L1LiveThreeTiersReverseInteropStoreSource$p_6(
                      i,
                      r,
                      n,
                    );
                  },
                }),
              c &&
                r("amFetchPreloadedQuery")(
                  this.__environment,
                  R,
                  { ids: i },
                  {
                    fetchPolicy: l,
                    networkCacheConfig: {
                      metadata: {
                        preloadingConfig: o(
                          "AdsManagerLiveDataAdgroupQueryPreloadingConfig",
                        ).Tier3FieldsConfig,
                        fetchConfig: I(k),
                      },
                    },
                  },
                ).subscribe({
                  next: function (r) {
                    return e.$L1LiveThreeTiersReverseInteropStoreSource$p_5(
                      i,
                      n,
                      r,
                    );
                  },
                  error: function (r) {
                    return e.$L1LiveThreeTiersReverseInteropStoreSource$p_6(
                      i,
                      r,
                      n,
                    );
                  },
                }));
          }
        }),
        (n.__createLoadingRecordsInRelayStore = function (t) {
          var e = t.filter(function (e) {
            return r("isTruthy")(e) && e !== "null";
          });
          if (e.length !== 0) {
            var n = "loaded_adgroups",
              o = "Adgroup";
            this.updateRecords(e, n, o);
          }
        }),
        (n.__deleteRelayCacheRecords = function (t) {
          var e = "loaded_adgroups",
            n = "Adgroup";
          o("relay-runtime").commitLocalUpdate(
            this.__environment,
            function (r) {
              var o,
                a = (o = r.getRoot().getLinkedRecords(e)) != null ? o : [];
              for (var i of t) {
                var l = r.get(i);
                (l == null ? void 0 : l.getType()) === n &&
                  (l == null || l.setValue(void 0, "name"));
              }
              r.getRoot().setLinkedRecords(a, e);
            },
          );
        }),
        (n.$L1LiveThreeTiersReverseInteropStoreSource$p_1 = function (t) {
          return t.some(function (e) {
            return g.includes(e);
          });
        }),
        (n.$L1LiveThreeTiersReverseInteropStoreSource$p_2 = function (t) {
          return t.some(function (e) {
            return h.includes(e);
          });
        }),
        (n.$L1LiveThreeTiersReverseInteropStoreSource$p_3 = function (t) {
          return t.some(function (e) {
            return y.includes(e);
          });
        }),
        (n.$L1LiveThreeTiersReverseInteropStoreSource$p_6 = function (t, n, o) {
          (r("FBLogger")("relay_ads_manager").warn(
            "Received error %s",
            n.message,
          ),
            this.handleFetchQueryError(t, o, n));
        }),
        (n.$L1LiveThreeTiersReverseInteropStoreSource$p_5 = function (t, n, o) {
          var e = o.nodes.filter(Boolean).map(function (e) {
              return e == null ? void 0 : e.id;
            }),
            a = t.filter(function (t) {
              return !e.includes(t);
            });
          if (
            a.length > 0 &&
            (this.$L1LiveThreeTiersReverseInteropStoreSource$p_7(t, o),
            r("gkx")("8695"))
          ) {
            var i = this.$L1LiveThreeTiersReverseInteropStoreSource$p_8(o, a);
            i != null &&
              this.$L1LiveThreeTiersReverseInteropStoreSource$p_6(a, i, n);
          }
        }),
        (n.$L1LiveThreeTiersReverseInteropStoreSource$p_8 = function (t, n) {
          var e = t.nodes
            .map(function (e) {
              var t = o("RelayHooks").readInlineData(b, e);
              return t;
            })
            .filter(function (e) {
              var t;
              return n.includes((t = e.node_id) != null ? t : "");
            })
            .map(function (e) {
              var t, n;
              return (
                ((t = e.node_id) != null ? t : "") +
                ":" +
                ((n = e.__typename) != null ? n : "")
              );
            })
            .join(",");
          return e.length === 0
            ? null
            : r("err")(
                "Correct Id/Type(s) missing from request, got Id/Type(s) %s",
                e,
              );
        }),
        (n.$L1LiveThreeTiersReverseInteropStoreSource$p_7 = function (t, n) {
          var e = "loaded_adgroups";
          o("relay-runtime").commitLocalUpdate(
            this.__environment,
            function (r) {
              var o,
                a = (o = r.getRoot().getLinkedRecords(e)) != null ? o : [],
                i = n.nodes.filter(Boolean).map(function (e) {
                  var t, n, r, o, a;
                  return (t =
                    (n = (r = e.adgroup_spec_tier3) == null ? void 0 : r.id) !=
                    null
                      ? n
                      : (o = e.adgroup_spec_tier2) == null
                        ? void 0
                        : o.id) != null
                    ? t
                    : (a = e.adgroup_spec_tier1_v2) == null
                      ? void 0
                      : a.id;
                });
              i.filter(Boolean).forEach(function (e) {
                var t = r.get(e);
                t != null &&
                  t.getValue("__placeholder") === !0 &&
                  t.setValue(!1, "__placeholder");
              });
              var l = t.filter(function (e) {
                  return !i.includes(e);
                }),
                s = function (t) {
                  a = a.filter(function (e) {
                    return (e == null ? void 0 : e.getDataID()) !== t;
                  });
                };
              for (var u of l) s(u);
              r.getRoot().setLinkedRecords(a, e);
            },
          );
        }),
        t
      );
    })(r("ReverseInteropStoreSourceBase"));
    l.default = T;
  },
  98,
);

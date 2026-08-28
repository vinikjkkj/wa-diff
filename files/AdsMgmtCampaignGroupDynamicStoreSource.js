__d(
  "AdsMgmtCampaignGroupDynamicStoreSource",
  [
    "AdsManagerDynamicCampaignGroupQueryPreloadingConfig",
    "AdsMgmtCampaignGroupDynamicStoreSourceFieldErrorTier1V2Fragment.graphql",
    "AdsMgmtCampaignGroupDynamicStoreSourceFieldErrorTier1V2ServerQuery.graphql",
    "AdsMgmtCampaignGroupDynamicStoreSourceServerLoadedQuery.graphql",
    "AdsMgmtCampaignGroupDynamicStoreSourceTier1V2Fragment.graphql",
    "AdsMgmtCampaignGroupDynamicStoreSourceTier1V2ServerQuery.graphql",
    "AdsMgmtCampaignGroupDynamicStoreSourceTier2Fragment.graphql",
    "AdsMgmtCampaignGroupDynamicStoreSourceTier2ServerQuery.graphql",
    "AdsMgmtCampaignGroupDynamicStoreSourceTypeCheckFragment.graphql",
    "FBLogger",
    "LoadObject",
    "RelayHooks",
    "RelayModern",
    "ReverseInteropStoreSourceBase",
    "amFetchPreloadedQuery",
    "err",
    "gkx",
    "isEmptyObject",
    "isFalsey",
    "isTruthy",
    "memoizeWithArgsByKey",
    "readClientFragment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = "loaded_campaign_groups",
      g = "AdCampaignGroup",
      h = r("gkx")("13203"),
      y = r("gkx")("4830"),
      C = ["delivery_status"],
      b = [
        "adset_count",
        "campaign_structure_tree",
        "creative_diversity_data",
        "creative_diversity_label",
        "delivery_info",
        "effective_status",
        "incremental_conversion_optimization_config",
        "issues_info",
        "optimal_delivery_growth_opportunities",
      ],
      v =
        e !== void 0
          ? e
          : (e = n(
              "AdsMgmtCampaignGroupDynamicStoreSourceServerLoadedQuery.graphql",
            )),
      S =
        s !== void 0
          ? s
          : (s = n(
              "AdsMgmtCampaignGroupDynamicStoreSourceTypeCheckFragment.graphql",
            )),
      R =
        u !== void 0
          ? u
          : (u = n(
              "AdsMgmtCampaignGroupDynamicStoreSourceTier1V2ServerQuery.graphql",
            )),
      L =
        c !== void 0
          ? c
          : (c = n(
              "AdsMgmtCampaignGroupDynamicStoreSourceFieldErrorTier1V2ServerQuery.graphql",
            )),
      E = y ? L : R,
      k =
        d !== void 0
          ? d
          : (d = n(
              "AdsMgmtCampaignGroupDynamicStoreSourceTier2ServerQuery.graphql",
            )),
      I =
        m !== void 0
          ? m
          : (m = n(
              "AdsMgmtCampaignGroupDynamicStoreSourceTier1V2Fragment.graphql",
            )),
      T =
        p !== void 0
          ? p
          : (p = n(
              "AdsMgmtCampaignGroupDynamicStoreSourceFieldErrorTier1V2Fragment.graphql",
            )),
      D =
        _ !== void 0
          ? _
          : (_ = n(
              "AdsMgmtCampaignGroupDynamicStoreSourceTier2Fragment.graphql",
            )),
      x = r("gkx")("19051"),
      $ = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.$AdsMgmtCampaignGroupDynamicStoreSource$p_5 = r(
              "memoizeWithArgsByKey",
            )(function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              if (t.every(r("isFalsey"))) return null;
              if (
                t.some(function (e) {
                  return e == null ? void 0 : e.isLoading();
                })
              )
                return r("LoadObject").loading({ creatorModuleID: i.id });
              var o =
                  t == null
                    ? void 0
                    : t.map(function (e) {
                        return e == null ? void 0 : e.getValue();
                      }),
                a = o.reduce(function (e, t) {
                  return babelHelpers.extends({}, e, t);
                }, {});
              return r("LoadObject").withValue(a, { creatorModuleID: i.id });
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
            var e = this.$AdsMgmtCampaignGroupDynamicStoreSource$p_1(t, C),
              n = this.$AdsMgmtCampaignGroupDynamicStoreSource$p_2(t),
              r = e ? C : [],
              o = n ? b : [];
            return r.concat(o);
          }),
          (n.__getQuery = function () {
            return v;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__fetchQuery = function (t, n, a) {
            var e = this;
            a === void 0 && (a = !1);
            var i = t.filter(function (e) {
              return r("isTruthy")(e) && e !== "null" && e !== "undefined";
            });
            if (i.length !== 0) {
              var l;
              if (x) {
                var s = t.every(function (t) {
                  return e.hasRefetchingKey(t);
                });
                l = s ? "network-only" : "store-or-network";
              } else l = "network-only";
              this.__createLoadingRecordsInRelayStore(i);
              var u = this.$AdsMgmtCampaignGroupDynamicStoreSource$p_1(n, C),
                c = this.$AdsMgmtCampaignGroupDynamicStoreSource$p_2(n);
              (u &&
                r("amFetchPreloadedQuery")(
                  this.__environment,
                  E,
                  { ids: i },
                  {
                    fetchPolicy: l,
                    networkCacheConfig: {
                      metadata: {
                        preloadingConfig: o(
                          "AdsManagerDynamicCampaignGroupQueryPreloadingConfig",
                        ).Tier1FieldsConfig,
                      },
                    },
                  },
                ).subscribe({
                  next: function (r) {
                    return e.$AdsMgmtCampaignGroupDynamicStoreSource$p_3(
                      i,
                      n,
                      r,
                    );
                  },
                  error: function (r) {
                    return e.$AdsMgmtCampaignGroupDynamicStoreSource$p_4(
                      i,
                      r,
                      n,
                    );
                  },
                }),
                c &&
                  r("amFetchPreloadedQuery")(
                    this.__environment,
                    k,
                    { ids: i },
                    {
                      fetchPolicy: l,
                      networkCacheConfig: {
                        metadata: {
                          preloadingConfig: o(
                            "AdsManagerDynamicCampaignGroupQueryPreloadingConfig",
                          ).Tier2FieldsConfig,
                        },
                      },
                    },
                  ).subscribe({
                    next: function (r) {
                      return e.$AdsMgmtCampaignGroupDynamicStoreSource$p_3(
                        i,
                        n,
                        r,
                      );
                    },
                    error: function (r) {
                      return e.$AdsMgmtCampaignGroupDynamicStoreSource$p_4(
                        i,
                        r,
                        n,
                      );
                    },
                  }));
            }
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = this.$AdsMgmtCampaignGroupDynamicStoreSource$p_1(n, C),
              a = this.$AdsMgmtCampaignGroupDynamicStoreSource$p_2(n),
              l = o
                ? y
                  ? t.map(function (t) {
                      return {
                        id: t,
                        value: r("readClientFragment")(
                          e.__environment,
                          L,
                          T,
                          { ids: [t] },
                          {},
                          t,
                          function (e) {
                            return e == null
                              ? void 0
                              : e.dynamic_ad_object_spec_tier1_v2;
                          },
                        ),
                      };
                    })
                  : t.map(function (t) {
                      return {
                        id: t,
                        value: r("readClientFragment")(
                          e.__environment,
                          R,
                          I,
                          { ids: [t] },
                          {},
                          t,
                          function (e) {
                            return e == null
                              ? void 0
                              : e.dynamic_ad_object_spec_tier1_v2;
                          },
                        ),
                      };
                    })
                : [],
              s = a
                ? t.map(function (t) {
                    return {
                      id: t,
                      value: r("readClientFragment")(
                        e.__environment,
                        k,
                        D,
                        { ids: [t] },
                        {},
                        t,
                        function (e) {
                          return e == null
                            ? void 0
                            : e.dynamic_ad_object_spec_tier2;
                        },
                      ),
                    };
                  })
                : [],
              u = new Map();
            (l.forEach(function (e) {
              var t = e.id,
                n = e.value,
                r = u.get(t);
              u.set(t, babelHelpers.extends({}, r, { tier1V2Value: n }));
            }),
              s.forEach(function (e) {
                var t = e.id,
                  n = e.value,
                  r = u.get(t);
                u.set(t, babelHelpers.extends({}, r, { tier2Value: n }));
              }));
            var c = Array.from(u.entries()).map(function (t) {
                var n = t[0],
                  r = t[1],
                  o = r.tier1V2Value,
                  a = r.tier2Value,
                  i = e.$AdsMgmtCampaignGroupDynamicStoreSource$p_5(n, o, a);
                return { key: n, value: i };
              }),
              d = [],
              m = [],
              p = c
                .map(function (e) {
                  var t,
                    n = e.value;
                  return n != null && n.isEmpty()
                    ? (d.push(e.key), null)
                    : n != null &&
                        n.isDone() &&
                        r("isEmptyObject")(
                          (t = n == null ? void 0 : n.getValue()) != null
                            ? t
                            : {},
                        )
                      ? (m.push(e.key), null)
                      : e;
                })
                .filter(Boolean);
            return (
              d.length > 0 &&
                P(1, function () {
                  r("FBLogger")("relay_ads_manager", i.id).warn(
                    "empty result in loader for ids %s",
                    d.slice(0, 20).join(","),
                  );
                }),
              m.length > 0 &&
                P(1, function () {
                  r("FBLogger")("relay_ads_manager", i.id).warn(
                    "empty result value in loader for ids %s",
                    m.slice(0, 20).join(","),
                  );
                }),
              p
            );
          }),
          (n.__createLoadingRecordsInRelayStore = function (t) {
            var e = t.filter(function (e) {
              return r("isTruthy")(e) && e !== "null" && e !== "undefined";
            });
            e.length !== 0 && this.updateRecords(e, f, g);
          }),
          (n.__deleteRelayCacheRecords = function (t) {
            var e = "delivery_status",
              n = "incremental_conversion_optimization_config";
            o("RelayModern").commitLocalUpdate(
              this.__environment,
              function (r) {
                var o,
                  a = (o = r.getRoot().getLinkedRecords(f)) != null ? o : [];
                for (var i of t) {
                  var l = r.get(i);
                  if ((l == null ? void 0 : l.getType()) === g) {
                    var s = l == null ? void 0 : l.getLinkedRecord(e);
                    s != null && (l == null || l.setValue(void 0, e));
                    var u = l == null ? void 0 : l.getLinkedRecord(n);
                    u != null && (l == null || l.setValue(void 0, n));
                  }
                }
                r.getRoot().setLinkedRecords(a, f);
              },
            );
          }),
          (n.__shouldThrowOnFieldError = function () {
            return y;
          }),
          (n.$AdsMgmtCampaignGroupDynamicStoreSource$p_2 = function (t) {
            return this.$AdsMgmtCampaignGroupDynamicStoreSource$p_1(t, b);
          }),
          (n.$AdsMgmtCampaignGroupDynamicStoreSource$p_1 = function (t, n) {
            return t.some(function (e) {
              return n.includes(e);
            });
          }),
          (n.$AdsMgmtCampaignGroupDynamicStoreSource$p_4 = function (t, n, o) {
            (r("FBLogger")("relay_ads_manager").warn(
              "Received error %s",
              n.message,
            ),
              this.handleFetchQueryError(t, o, n));
          }),
          (n.$AdsMgmtCampaignGroupDynamicStoreSource$p_3 = function (t, n, o) {
            x && this.removeRefetchingKeys(t);
            var e = o.nodes.filter(Boolean).map(function (e) {
                return e == null ? void 0 : e.id;
              }),
              a = t.filter(function (t) {
                return !e.includes(t);
              });
            if (
              a.length > 0 &&
              (this.$AdsMgmtCampaignGroupDynamicStoreSource$p_6(a),
              r("gkx")("8695"))
            ) {
              var i = this.$AdsMgmtCampaignGroupDynamicStoreSource$p_7(o, a);
              i != null &&
                this.$AdsMgmtCampaignGroupDynamicStoreSource$p_4(a, i, n);
            }
          }),
          (n.$AdsMgmtCampaignGroupDynamicStoreSource$p_7 = function (t, n) {
            var e = t.nodes
              .map(function (e) {
                var t = o("RelayHooks").readInlineData(S, e);
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
          (n.$AdsMgmtCampaignGroupDynamicStoreSource$p_6 = function (t) {
            o("RelayModern").commitLocalUpdate(
              this.__environment,
              function (e) {
                var n,
                  r = (n = e.getRoot().getLinkedRecords(f)) != null ? n : [],
                  o = function (t) {
                    r = r.filter(function (e) {
                      return (e == null ? void 0 : e.getDataID()) !== t;
                    });
                  };
                for (var a of t) o(a);
                e.getRoot().setLinkedRecords(r, f);
              },
            );
          }),
          t
        );
      })(r("ReverseInteropStoreSourceBase"));
    function P(e, t) {
      h ? Math.random() < e / 100 && t() : t();
    }
    l.default = $;
  },
  98,
);

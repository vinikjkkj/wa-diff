__d(
  "AdsMgmtCampaignDynamicStoreSource",
  [
    "AdsManagerDynamicCampaignQueryPreloadingConfig",
    "AdsMgmtCampaignDynamicStoreSourceFieldErrorTier1Fragment.graphql",
    "AdsMgmtCampaignDynamicStoreSourceFieldErrorTier1ServerQuery.graphql",
    "AdsMgmtCampaignDynamicStoreSourceServerLoadedQuery.graphql",
    "AdsMgmtCampaignDynamicStoreSourceTier1ServerQuery.graphql",
    "AdsMgmtCampaignDynamicStoreSourceTier2Fragment.graphql",
    "AdsMgmtCampaignDynamicStoreSourceTier2ServerQuery.graphql",
    "AdsMgmtCampaignDynamicStoreSourceTier3Fragment.graphql",
    "AdsMgmtCampaignDynamicStoreSourceTier3ServerQuery.graphql",
    "AdsMgmtCampaignDynamicStoreSourceTypeCheckFragment.graphql",
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
      f,
      g = "loaded_campaigns",
      h = "AdCampaign",
      y = [
        "delivery_status",
        "optimal_delivery_growth_opportunities",
        "guidance_lift_estimate",
        "repeat_reach_state",
      ],
      C = ["issues_info"],
      b = [
        "anomaly_insights",
        "cpr_benchmark",
        "creative_diversity_score",
        "creative_diversity_label",
        "creative_fatigue_prediction_ple",
        "pps_peer_benchmarks",
        "delivery_info",
        "effective_status",
        "is_bid_constraiend",
        "is_cost_constrained",
        "is_suboptimal_cbo_calibration",
        "learning_stage_info",
        "low_creative_reach",
        "paced_bid_info",
      ],
      v =
        e !== void 0
          ? e
          : (e = n(
              "AdsMgmtCampaignDynamicStoreSourceServerLoadedQuery.graphql",
            )),
      S =
        s !== void 0
          ? s
          : (s = n(
              "AdsMgmtCampaignDynamicStoreSourceTypeCheckFragment.graphql",
            )),
      R =
        u !== void 0
          ? u
          : (u = n(
              "AdsMgmtCampaignDynamicStoreSourceTier1ServerQuery.graphql",
            )),
      L =
        c !== void 0
          ? c
          : (c = n(
              "AdsMgmtCampaignDynamicStoreSourceFieldErrorTier1ServerQuery.graphql",
            )),
      E = L,
      k =
        d !== void 0
          ? d
          : (d = n(
              "AdsMgmtCampaignDynamicStoreSourceTier2ServerQuery.graphql",
            )),
      I =
        m !== void 0
          ? m
          : (m = n(
              "AdsMgmtCampaignDynamicStoreSourceTier3ServerQuery.graphql",
            )),
      T =
        p !== void 0
          ? p
          : (p = n(
              "AdsMgmtCampaignDynamicStoreSourceFieldErrorTier1Fragment.graphql",
            )),
      D =
        _ !== void 0
          ? _
          : (_ = n("AdsMgmtCampaignDynamicStoreSourceTier2Fragment.graphql")),
      x =
        f !== void 0
          ? f
          : (f = n("AdsMgmtCampaignDynamicStoreSourceTier3Fragment.graphql")),
      $ = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.$AdsMgmtCampaignDynamicStoreSource$p_6 = r(
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
            var e = this.$AdsMgmtCampaignDynamicStoreSource$p_1(t),
              n = this.$AdsMgmtCampaignDynamicStoreSource$p_2(t),
              r = this.$AdsMgmtCampaignDynamicStoreSource$p_3(t),
              o = e ? y : [],
              a = n ? C : [],
              i = r ? b : [];
            return o.concat(a, i);
          }),
          (n.__getQuery = function () {
            return v;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__fetchQuery = function (t, n, o) {
            var e = this;
            o === void 0 && (o = !1);
            var a = t.filter(function (e) {
              return r("isTruthy")(e) && e !== "null" && e !== "undefined";
            });
            if (a.length !== 0) {
              var i = t.every(function (t) {
                  return e.hasRefetchingKey(t);
                }),
                l = i ? "network-only" : "store-or-network";
              this.__createLoadingRecordsInRelayStore(a);
              var s = this.$AdsMgmtCampaignDynamicStoreSource$p_1(n),
                u = this.$AdsMgmtCampaignDynamicStoreSource$p_2(n),
                c = this.$AdsMgmtCampaignDynamicStoreSource$p_3(n);
              (s &&
                r("amFetchPreloadedQuery")(
                  this.__environment,
                  E,
                  { ids: a },
                  {
                    fetchPolicy: l,
                    networkCacheConfig: {
                      metadata: {
                        preloadingConfig: r(
                          "AdsManagerDynamicCampaignQueryPreloadingConfig",
                        ),
                      },
                    },
                  },
                ).subscribe({
                  next: function (r) {
                    return e.$AdsMgmtCampaignDynamicStoreSource$p_4(a, n, r);
                  },
                  error: function (r) {
                    return e.$AdsMgmtCampaignDynamicStoreSource$p_5(a, r, n);
                  },
                }),
                u &&
                  r("amFetchPreloadedQuery")(
                    this.__environment,
                    k,
                    { ids: a },
                    {
                      fetchPolicy: l,
                      networkCacheConfig: {
                        metadata: {
                          preloadingConfig: r(
                            "AdsManagerDynamicCampaignQueryPreloadingConfig",
                          ),
                        },
                      },
                    },
                  ).subscribe({
                    next: function (r) {
                      return e.$AdsMgmtCampaignDynamicStoreSource$p_4(a, n, r);
                    },
                    error: function (r) {
                      return e.$AdsMgmtCampaignDynamicStoreSource$p_5(a, r, n);
                    },
                  }),
                c &&
                  r("amFetchPreloadedQuery")(
                    this.__environment,
                    I,
                    { ids: a },
                    {
                      fetchPolicy: l,
                      networkCacheConfig: {
                        metadata: {
                          preloadingConfig: r(
                            "AdsManagerDynamicCampaignQueryPreloadingConfig",
                          ),
                        },
                      },
                    },
                  ).subscribe({
                    next: function (r) {
                      return e.$AdsMgmtCampaignDynamicStoreSource$p_4(a, n, r);
                    },
                    error: function (r) {
                      return e.$AdsMgmtCampaignDynamicStoreSource$p_5(a, r, n);
                    },
                  }));
            }
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = this.$AdsMgmtCampaignDynamicStoreSource$p_1(n),
              a = this.$AdsMgmtCampaignDynamicStoreSource$p_2(n),
              l = this.$AdsMgmtCampaignDynamicStoreSource$p_3(n),
              s = o
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
                            : e.dynamic_campaign_field_error_spec_tier1;
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
                        k,
                        D,
                        { ids: [t] },
                        {},
                        t,
                        function (e) {
                          return e == null
                            ? void 0
                            : e.dynamic_campaign_spec_tier2;
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
                        I,
                        x,
                        { ids: [t] },
                        {},
                        t,
                        function (e) {
                          return e == null
                            ? void 0
                            : e.dynamic_campaign_spec_tier3;
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
                  l = e.$AdsMgmtCampaignDynamicStoreSource$p_6(n, o, a, i);
                return { key: n, value: l };
              }),
              p = [],
              _ = [],
              f = m
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
                      ? (_.push(e.key), null)
                      : e;
                })
                .filter(Boolean);
            return (
              p.length > 0 &&
                P(1, function () {
                  r("FBLogger")("relay_ads_manager", i.id).warn(
                    "empty result in loader for ids %s",
                    p.slice(0, 20).join(","),
                  );
                }),
              _.length > 0 &&
                P(1, function () {
                  r("FBLogger")("relay_ads_manager", i.id).warn(
                    "empty result value in loader for ids %s",
                    _.slice(0, 20).join(","),
                  );
                }),
              f
            );
          }),
          (n.__createLoadingRecordsInRelayStore = function (t) {
            var e = t.filter(function (e) {
              return r("isTruthy")(e) && e !== "null" && e !== "undefined";
            });
            e.length !== 0 && this.updateRecords(e, g, h);
          }),
          (n.__deleteRelayCacheRecords = function (t) {
            var e = "delivery_status",
              n = "issues_info",
              r = "effective_status";
            o("RelayModern").commitLocalUpdate(
              this.__environment,
              function (o) {
                var a,
                  i = (a = o.getRoot().getLinkedRecords(g)) != null ? a : [];
                for (var l of t) {
                  var s = o.get(l);
                  if ((s == null ? void 0 : s.getType()) === h) {
                    var u = s == null ? void 0 : s.getLinkedRecord(e);
                    u != null && (s == null || s.setValue(void 0, e));
                    var c = s == null ? void 0 : s.getLinkedRecords(n);
                    c != null && (s == null || s.setValue(void 0, n));
                    var d = s == null ? void 0 : s.getValue(r);
                    d != null && (s == null || s.setValue(void 0, r));
                  }
                }
                o.getRoot().setLinkedRecords(i, g);
              },
            );
          }),
          (n.__shouldThrowOnFieldError = function () {
            return !0;
          }),
          (n.$AdsMgmtCampaignDynamicStoreSource$p_1 = function (t) {
            return t.some(function (e) {
              return y.includes(e);
            });
          }),
          (n.$AdsMgmtCampaignDynamicStoreSource$p_2 = function (t) {
            return t.some(function (e) {
              return C.includes(e);
            });
          }),
          (n.$AdsMgmtCampaignDynamicStoreSource$p_3 = function (t) {
            return t.some(function (e) {
              return b.includes(e);
            });
          }),
          (n.$AdsMgmtCampaignDynamicStoreSource$p_5 = function (t, n, o) {
            (r("FBLogger")("relay_ads_manager").warn(
              "Received error %s",
              n.message,
            ),
              this.handleFetchQueryError(t, o, n));
          }),
          (n.$AdsMgmtCampaignDynamicStoreSource$p_4 = function (t, n, o) {
            this.removeRefetchingKeys(t);
            var e = o.nodes.filter(Boolean).map(function (e) {
                return e == null ? void 0 : e.id;
              }),
              a = t.filter(function (t) {
                return !e.includes(t);
              });
            if (
              a.length > 0 &&
              (this.$AdsMgmtCampaignDynamicStoreSource$p_7(a), r("gkx")("8695"))
            ) {
              var i = this.$AdsMgmtCampaignDynamicStoreSource$p_8(o, a);
              i != null && this.$AdsMgmtCampaignDynamicStoreSource$p_5(a, i, n);
            }
          }),
          (n.$AdsMgmtCampaignDynamicStoreSource$p_8 = function (t, n) {
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
          (n.$AdsMgmtCampaignDynamicStoreSource$p_7 = function (t) {
            o("RelayModern").commitLocalUpdate(
              this.__environment,
              function (e) {
                var n,
                  r = (n = e.getRoot().getLinkedRecords(g)) != null ? n : [],
                  o = function (t) {
                    r = r.filter(function (e) {
                      return (e == null ? void 0 : e.getDataID()) !== t;
                    });
                  };
                for (var a of t) o(a);
                e.getRoot().setLinkedRecords(r, g);
              },
            );
          }),
          t
        );
      })(r("ReverseInteropStoreSourceBase"));
    function P(e, t) {
      r("gkx")("10244") ? Math.random() < e / 100 && t() : t();
    }
    l.default = $;
  },
  98,
);

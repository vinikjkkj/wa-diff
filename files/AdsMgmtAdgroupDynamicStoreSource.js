__d(
  "AdsMgmtAdgroupDynamicStoreSource",
  [
    "AdsManagerDynamicAdgroupQueryPreloadingConfig",
    "AdsMgmtAdgroupDynamicStoreSourceFieldErrorTier1Fragment.graphql",
    "AdsMgmtAdgroupDynamicStoreSourceFieldErrorTier1ServerQuery.graphql",
    "AdsMgmtAdgroupDynamicStoreSourceServerLoadedQuery.graphql",
    "AdsMgmtAdgroupDynamicStoreSourceTier1ServerQuery.graphql",
    "AdsMgmtAdgroupDynamicStoreSourceTier2Fragment.graphql",
    "AdsMgmtAdgroupDynamicStoreSourceTier2ServerQuery.graphql",
    "AdsMgmtAdgroupDynamicStoreSourceTier3V2Fragment.graphql",
    "AdsMgmtAdgroupDynamicStoreSourceTier3V2ServerQuery.graphql",
    "AdsMgmtAdgroupDynamicStoreSourceTier4Fragment.graphql",
    "AdsMgmtAdgroupDynamicStoreSourceTier4ServerQuery.graphql",
    "AdsMgmtAdgroupDynamicStoreSourceTypeCheckFragment.graphql",
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
      g,
      h,
      y = "loaded_adgroups",
      C = "Adgroup",
      b = r("gkx")("13150"),
      v = r("gkx")("3393"),
      S = ["delivery_status"],
      R = ["issues_info"],
      L = [
        "branded_content_post_publish_errors",
        "campaign_id",
        "delivery_info",
        "effective_status",
        "name",
        "optimal_delivery_growth_opportunities",
        "preview_link",
        "recommendations",
      ],
      E = ["preview_link"],
      k = [
        "branded_content_post_publish_errors",
        "campaign_id",
        "delivery_info",
        "effective_status",
        "name",
        "optimal_delivery_growth_opportunities",
        "recommendations",
      ],
      I = new Set(S),
      T = new Set(R),
      D = new Set(E),
      x = new Set(k),
      $ = {
        metadata: {
          preloadingConfig: r("AdsManagerDynamicAdgroupQueryPreloadingConfig"),
        },
      },
      P =
        e !== void 0
          ? e
          : (e = n(
              "AdsMgmtAdgroupDynamicStoreSourceServerLoadedQuery.graphql",
            )),
      N =
        s !== void 0
          ? s
          : (s = n(
              "AdsMgmtAdgroupDynamicStoreSourceTypeCheckFragment.graphql",
            )),
      M =
        u !== void 0
          ? u
          : (u = n("AdsMgmtAdgroupDynamicStoreSourceTier1ServerQuery.graphql")),
      w =
        c !== void 0
          ? c
          : (c = n(
              "AdsMgmtAdgroupDynamicStoreSourceFieldErrorTier1ServerQuery.graphql",
            )),
      A = w,
      F =
        d !== void 0
          ? d
          : (d = n("AdsMgmtAdgroupDynamicStoreSourceTier2ServerQuery.graphql")),
      O =
        m !== void 0
          ? m
          : (m = n(
              "AdsMgmtAdgroupDynamicStoreSourceTier3V2ServerQuery.graphql",
            )),
      B =
        p !== void 0
          ? p
          : (p = n("AdsMgmtAdgroupDynamicStoreSourceTier4ServerQuery.graphql")),
      W =
        _ !== void 0
          ? _
          : (_ = n(
              "AdsMgmtAdgroupDynamicStoreSourceFieldErrorTier1Fragment.graphql",
            )),
      q =
        f !== void 0
          ? f
          : (f = n("AdsMgmtAdgroupDynamicStoreSourceTier2Fragment.graphql")),
      U =
        g !== void 0
          ? g
          : (g = n("AdsMgmtAdgroupDynamicStoreSourceTier3V2Fragment.graphql")),
      V =
        h !== void 0
          ? h
          : (h = n("AdsMgmtAdgroupDynamicStoreSourceTier4Fragment.graphql")),
      H = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.$AdsMgmtAdgroupDynamicStoreSource$p_7 = r(
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
            var e = this.$AdsMgmtAdgroupDynamicStoreSource$p_1(t),
              n = this.$AdsMgmtAdgroupDynamicStoreSource$p_2(t),
              r = this.$AdsMgmtAdgroupDynamicStoreSource$p_3(t),
              o = this.$AdsMgmtAdgroupDynamicStoreSource$p_4(t),
              a = e ? S : [],
              i = n ? R : [],
              l = r ? L : [],
              s = o ? k : [];
            return a.concat(i, l, s);
          }),
          (n.__getQuery = function () {
            return P;
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
              var s = this.$AdsMgmtAdgroupDynamicStoreSource$p_1(n),
                u = this.$AdsMgmtAdgroupDynamicStoreSource$p_2(n),
                c = this.$AdsMgmtAdgroupDynamicStoreSource$p_3(n),
                d = this.$AdsMgmtAdgroupDynamicStoreSource$p_4(n);
              (s &&
                r("amFetchPreloadedQuery")(
                  this.__environment,
                  A,
                  { ids: a },
                  {
                    fetchPolicy: l,
                    networkCacheConfig: v
                      ? $
                      : {
                          metadata: {
                            preloadingConfig: r(
                              "AdsManagerDynamicAdgroupQueryPreloadingConfig",
                            ),
                          },
                        },
                  },
                ).subscribe({
                  next: function (r) {
                    return e.$AdsMgmtAdgroupDynamicStoreSource$p_5(a, n, r);
                  },
                  error: function (r) {
                    return e.$AdsMgmtAdgroupDynamicStoreSource$p_6(a, r, n);
                  },
                }),
                u &&
                  r("amFetchPreloadedQuery")(
                    this.__environment,
                    F,
                    { ids: a },
                    {
                      fetchPolicy: l,
                      networkCacheConfig: v
                        ? $
                        : {
                            metadata: {
                              preloadingConfig: r(
                                "AdsManagerDynamicAdgroupQueryPreloadingConfig",
                              ),
                            },
                          },
                    },
                  ).subscribe({
                    next: function (r) {
                      return e.$AdsMgmtAdgroupDynamicStoreSource$p_5(a, n, r);
                    },
                    error: function (r) {
                      return e.$AdsMgmtAdgroupDynamicStoreSource$p_6(a, r, n);
                    },
                  }),
                c &&
                  r("amFetchPreloadedQuery")(
                    this.__environment,
                    O,
                    { ids: a },
                    {
                      fetchPolicy: l,
                      networkCacheConfig: v
                        ? $
                        : {
                            metadata: {
                              preloadingConfig: r(
                                "AdsManagerDynamicAdgroupQueryPreloadingConfig",
                              ),
                            },
                          },
                    },
                  ).subscribe({
                    next: function (r) {
                      return e.$AdsMgmtAdgroupDynamicStoreSource$p_5(a, n, r);
                    },
                    error: function (r) {
                      return e.$AdsMgmtAdgroupDynamicStoreSource$p_6(a, r, n);
                    },
                  }),
                d &&
                  r("amFetchPreloadedQuery")(
                    this.__environment,
                    B,
                    { ids: a },
                    {
                      fetchPolicy: l,
                      networkCacheConfig: v
                        ? $
                        : {
                            metadata: {
                              preloadingConfig: r(
                                "AdsManagerDynamicAdgroupQueryPreloadingConfig",
                              ),
                            },
                          },
                    },
                  ).subscribe({
                    next: function (r) {
                      return e.$AdsMgmtAdgroupDynamicStoreSource$p_5(a, n, r);
                    },
                    error: function (r) {
                      return e.$AdsMgmtAdgroupDynamicStoreSource$p_6(a, r, n);
                    },
                  }));
            }
          }),
          (n.__shouldThrowOnFieldError = function () {
            return !0;
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = this.$AdsMgmtAdgroupDynamicStoreSource$p_1(n),
              a = this.$AdsMgmtAdgroupDynamicStoreSource$p_2(n),
              l = this.$AdsMgmtAdgroupDynamicStoreSource$p_3(n),
              s = this.$AdsMgmtAdgroupDynamicStoreSource$p_4(n),
              u = o
                ? t.map(function (t) {
                    return {
                      id: t,
                      value: r("readClientFragment")(
                        e.__environment,
                        w,
                        W,
                        { ids: [t] },
                        {},
                        t,
                        function (e) {
                          return e == null
                            ? void 0
                            : e.dynamic_ad_object_field_error_spec_tier1;
                        },
                      ),
                    };
                  })
                : [],
              c = a
                ? t.map(function (t) {
                    return {
                      id: t,
                      value: r("readClientFragment")(
                        e.__environment,
                        F,
                        q,
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
              d = l
                ? t.map(function (t) {
                    return {
                      id: t,
                      value: r("readClientFragment")(
                        e.__environment,
                        O,
                        U,
                        { ids: [t] },
                        {},
                        t,
                        function (e) {
                          return e == null
                            ? void 0
                            : e.dynamic_ad_object_spec_tier3_v2;
                        },
                      ),
                    };
                  })
                : [],
              m = s
                ? t.map(function (t) {
                    return {
                      id: t,
                      value: r("readClientFragment")(
                        e.__environment,
                        B,
                        V,
                        { ids: [t] },
                        {},
                        t,
                        function (e) {
                          return e == null
                            ? void 0
                            : e.dynamic_ad_object_spec_tier4;
                        },
                      ),
                    };
                  })
                : [],
              p = new Map();
            (u.forEach(function (e) {
              var t = e.id,
                n = e.value;
              p.set(t, { tier1Value: n });
            }),
              c.forEach(function (e) {
                var t = e.id,
                  n = e.value,
                  r = p.get(t);
                p.set(t, babelHelpers.extends({}, r, { tier2Value: n }));
              }),
              d.forEach(function (e) {
                var t = e.id,
                  n = e.value,
                  r = p.get(t);
                p.set(t, babelHelpers.extends({}, r, { tier3Value: n }));
              }),
              m.forEach(function (e) {
                var t = e.id,
                  n = e.value,
                  r = p.get(t);
                p.set(t, babelHelpers.extends({}, r, { tier4Value: n }));
              }));
            var _ = Array.from(p.entries()).map(function (t) {
                var n = t[0],
                  r = t[1],
                  o = r.tier1Value,
                  a = r.tier2Value,
                  i = r.tier3Value,
                  l = r.tier4Value,
                  s = e.$AdsMgmtAdgroupDynamicStoreSource$p_7(n, o, a, i, l);
                return { key: n, value: s };
              }),
              f = [],
              g = [],
              h = _.map(function (e) {
                var t,
                  n = e.value;
                return n != null && n.isEmpty()
                  ? (f.push(e.key), null)
                  : n != null &&
                      n.isDone() &&
                      r("isEmptyObject")(
                        (t = n == null ? void 0 : n.getValue()) != null
                          ? t
                          : {},
                      )
                    ? (g.push(e.key), null)
                    : e;
              }).filter(Boolean);
            return (
              f.length > 0 &&
                G(1, function () {
                  r("FBLogger")("relay_ads_manager", i.id).warn(
                    "empty result in loader for ids %s",
                    f.slice(0, 20).join(","),
                  );
                }),
              g.length > 0 &&
                G(1, function () {
                  r("FBLogger")("relay_ads_manager", i.id).warn(
                    "empty result value in loader for ids %s",
                    g.slice(0, 20).join(","),
                  );
                }),
              h
            );
          }),
          (n.__createLoadingRecordsInRelayStore = function (t) {
            var e = t.filter(function (e) {
              return r("isTruthy")(e) && e !== "null" && e !== "undefined";
            });
            e.length !== 0 && this.updateRecords(e, y, C);
          }),
          (n.__deleteRelayCacheRecords = function (t) {
            var e = "delivery_status",
              n = "issues_info",
              r = "preview_link",
              a = "effective_status";
            o("RelayModern").commitLocalUpdate(
              this.__environment,
              function (o) {
                var i,
                  l = (i = o.getRoot().getLinkedRecords(y)) != null ? i : [];
                for (var s of t) {
                  var u = o.get(s);
                  if ((u == null ? void 0 : u.getType()) === C) {
                    var c = u == null ? void 0 : u.getLinkedRecord(e);
                    c != null && (u == null || u.setValue(void 0, e));
                    var d = u == null ? void 0 : u.getLinkedRecords(n);
                    d != null && (u == null || u.setValue(void 0, n));
                    var m = u == null ? void 0 : u.getValue(r);
                    m != null && (u == null || u.setValue(void 0, r));
                    var p = u == null ? void 0 : u.getValue(a);
                    p != null && (u == null || u.setValue(void 0, a));
                  }
                }
                o.getRoot().setLinkedRecords(l, y);
              },
            );
          }),
          (n.$AdsMgmtAdgroupDynamicStoreSource$p_1 = function (t) {
            return v
              ? t.some(function (e) {
                  return I.has(e);
                })
              : t.some(function (e) {
                  return S.includes(e);
                });
          }),
          (n.$AdsMgmtAdgroupDynamicStoreSource$p_2 = function (t) {
            return v
              ? t.some(function (e) {
                  return T.has(e);
                })
              : t.some(function (e) {
                  return R.includes(e);
                });
          }),
          (n.$AdsMgmtAdgroupDynamicStoreSource$p_3 = function (t) {
            return v
              ? t.some(function (e) {
                  return D.has(e);
                })
              : t.some(function (e) {
                  return E.includes(e);
                });
          }),
          (n.$AdsMgmtAdgroupDynamicStoreSource$p_4 = function (t) {
            return v
              ? t.some(function (e) {
                  return x.has(e);
                })
              : t.some(function (e) {
                  return k.includes(e);
                });
          }),
          (n.$AdsMgmtAdgroupDynamicStoreSource$p_6 = function (t, n, o) {
            (r("FBLogger")("relay_ads_manager").warn(
              "Received error %s",
              n.message,
            ),
              this.handleFetchQueryError(t, o, n));
          }),
          (n.$AdsMgmtAdgroupDynamicStoreSource$p_5 = function (t, n, o) {
            this.removeRefetchingKeys(t);
            var e = o.nodes.filter(Boolean).map(function (e) {
                return e == null ? void 0 : e.id;
              }),
              a = t.filter(function (t) {
                return !e.includes(t);
              });
            if (
              a.length > 0 &&
              (this.$AdsMgmtAdgroupDynamicStoreSource$p_8(a), r("gkx")("8695"))
            ) {
              var i = this.$AdsMgmtAdgroupDynamicStoreSource$p_9(o, a);
              i != null && this.$AdsMgmtAdgroupDynamicStoreSource$p_6(a, i, n);
            }
          }),
          (n.$AdsMgmtAdgroupDynamicStoreSource$p_9 = function (t, n) {
            var e = t.nodes
              .map(function (e) {
                var t = o("RelayHooks").readInlineData(N, e);
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
          (n.$AdsMgmtAdgroupDynamicStoreSource$p_8 = function (t) {
            o("RelayModern").commitLocalUpdate(
              this.__environment,
              function (e) {
                var n,
                  r = (n = e.getRoot().getLinkedRecords(y)) != null ? n : [],
                  o = function (t) {
                    r = r.filter(function (e) {
                      return (e == null ? void 0 : e.getDataID()) !== t;
                    });
                  };
                for (var a of t) o(a);
                e.getRoot().setLinkedRecords(r, y);
              },
            );
          }),
          t
        );
      })(r("ReverseInteropStoreSourceBase"));
    function G(e, t) {
      b ? Math.random() < e / 100 && t() : t();
    }
    l.default = H;
  },
  98,
);

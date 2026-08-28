__d(
  "AdsPEFilterLiveDataManager",
  [
    "invariant",
    "ActionFilterUtils",
    "AdFLEXPreloaderFilterConfig",
    "AdsAccountStore",
    "AdsGraphAPI",
    "AdsInsightsSourceStackUtil",
    "AdsInsightsTimeRange",
    "AdsInsightsTimeRangeUtil",
    "AdsMgmt2026H1LBRExperimentUtils",
    "AdsMgmtBudgetCellStoreWarmer",
    "AdsMgmtQPLLogger",
    "AdsObjectTypeGraphEdgeNameUtils",
    "AdsObjectTypeUtils",
    "AdsPEFilterActions",
    "AdsPEFilterAppliedAction",
    "AdsPEFilterDraftIdVerificationErrorAction",
    "AdsPEFilterIdsVerifiedAction",
    "AdsPEFilterLiveDataManagerPreloader",
    "AdsPEFilterSetToAPIUtil",
    "AdsPEFilterSetUtil",
    "AdsPEPrefetchedIDsAction",
    "AdsPEPreloadingRouteGuard",
    "AdsPESortLiveUtils",
    "GraphAPIPaging",
    "LocalDateInterval",
    "Promise",
    "QPLSharing",
    "adsMgmtLoadIDRequestViewSpecParamsSelector",
    "areEqual",
    "asyncToGeneratorRuntime",
    "cachedGraphAPI",
    "clearTimeout",
    "debounceCore",
    "forEachObject",
    "getByPath",
    "gkx",
    "hasLabelFilter",
    "isIDFilter",
    "isUnpublishedOnlyFilter",
    "performanceNow",
    "promiseAllByKey",
    "promiseDone",
    "qex",
    "qpl",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = {
        CAMPAIGN_GROUP: "campaignGroup",
        CAMPAIGN: "campaign",
        ADGROUP: "adgroup",
      },
      m = ["campaignGroup", "campaign", "adgroup"],
      p = new Map([
        ["campaignGroup", "campaignGroupIDs"],
        ["campaign", "campaignIDs"],
        ["adgroup", "adgroupIDs"],
        ["uniqueAdCreative", "uniqueAdCreativeVisualHashes"],
      ]),
      _ = 5e3,
      f = 150,
      g = 2e3,
      h = 500,
      y = (c || (c = n("Promise"))).resolve([]),
      C = new Set();
    function b(e) {
      var t = {};
      return (
        e.forEach(function (e, n) {
          (typeof n == "string" || n instanceof String || s(0, 1844),
            (t[n] = e));
        }),
        t
      );
    }
    function v(e, t, n) {
      var a = e[n] || C,
        i = t.getFilterSetFor(n);
      if (
        (o("ActionFilterUtils").isHighPerformingFilter(i) &&
          (i = i.filter(function (e) {
            return e.field !== "SCALE_GOOD_CAMPAIGN";
          })),
        r("isUnpublishedOnlyFilter")(i))
      )
        return i;
      i = o("AdsPEFilterSetToAPIUtil").transformToAPISpec(i);
      var l = i.some(r("isIDFilter"));
      return (
        l || i.push({ field: "id", operator: "IN", value: Array.from(a) }),
        i
      );
    }
    function S(e, t, n) {
      var o = t != null ? t : 100,
        a = 0,
        i = function (t) {
          var e = Date.now(),
            n = window.setTimeout(t, o);
          return (e - a > o && (t(), window.clearTimeout(n)), (a = e), n);
        };
      return r("debounceCore")(e, o, n, i);
    }
    var R = (function () {
        function t() {
          var e = this;
          ((this.$12 = function (t, n, o, a, l, s, u, c, d, m, p, _) {
            var f = e.$14(n, s, o),
              g = [i.id + "._preloadIDsForFilterSet"],
              h = n == null ? e.$13(s, o) : null;
            r("promiseDone")(
              e.$15(t, f, a, l, s, u, c, d, m, p, "prefetch", [g], _, h),
              function (t) {
                return e.$16(t);
              },
            );
          }),
            (this.$11 = function (t, n, a, i, l, s, u, c, d, m, p, _, f, g) {
              (f === void 0 && (f = !1), g === void 0 && (g = !1));
              var h = e.$17();
              if (s !== "topline") {
                var y = [s];
                r("promiseDone")(
                  e.$18(t, n, a, i, l, y, u, c, d, m, p, f, g),
                  function (t) {
                    return e.$19(t, h, g);
                  },
                  function (e) {
                    return o("AdsPEFilterActions").loadFilteredIDsError(e, _);
                  },
                );
              }
            }),
            (this.$20 = function (e, t) {
              var n = r("adsMgmtLoadIDRequestViewSpecParamsSelector")(),
                a = n.comparisonDateTimeRange,
                l = n.datePreset,
                s = n.dateTimeRange,
                u = new Map([
                  ["limit", 0],
                  ["summary", "true"],
                  ["filtering", e],
                  [
                    "am_call_tags",
                    { data_manager: i.id, fetch_type: "summary" },
                  ],
                ]);
              if ((u.set("date_preset", l), s && s.start && s.end)) {
                var c = r("LocalDateInterval").fromStrings(s.start, s.end),
                  d = o("AdsInsightsTimeRangeUtil").intervalToAPIParams(c),
                  m;
                if (a && a.start && a.end) {
                  var p = r("LocalDateInterval").fromStrings(a.start, a.end);
                  m = o(
                    "AdsInsightsTimeRangeUtil",
                  ).toBenchmarkTimeRangesAPIParams(
                    r("AdsInsightsTimeRange").interval(c),
                    r("AdsInsightsTimeRange").interval(p),
                    t,
                  );
                }
                (m
                  ? u.set("comparison_time_ranges", m.comparison_time_ranges)
                  : u.set("time_range", d),
                  l != null && u.set("time_range", void 0));
              }
              return u;
            }),
            (this.$1 = 0),
            (this.$2 = 0),
            (this.$10 = new Map()),
            (this.$3 = S(this.$11, f, this)),
            (this.$4 = S(this.$12, g, this)),
            (this.$5 = new Map()),
            m.forEach(function (t) {
              return e.$5.set(t, S(e.$12, g, e));
            }),
            (this.$6 = S(this.$12, h, this)),
            (this.$7 = new Map()),
            m.forEach(function (t) {
              return e.$7.set(t, S(e.$12, h, e));
            }));
        }
        var a = t.prototype;
        return (
          (a.loadIDsForFilterSet = function (
            t,
            n,
            r,
            o,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m,
            p,
            _,
          ) {
            (p === void 0 && (p = !1), _ === void 0 && (_ = !1));
            var e = this.$3;
            e(t, n, r, o, a, i, l, s, u, c, d, m, p, _);
          }),
          (a.preloadIDsForFilterSet = function (
            t,
            n,
            o,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m,
            p,
          ) {
            p === void 0 && (p = !1);
            var e = null;
            if (p) {
              var _;
              e = (_ = this.$7.get(l)) != null ? _ : this.$6;
            } else if (r("qex")._("432") === !0) {
              var f;
              e = (f = this.$5.get(l)) != null ? f : this.$4;
            } else e = this.$4;
            e(t, n, o, a, i, l, s, u, c, d, m, p);
          }),
          (a.$13 = function (t, n) {
            var e, r, o;
            if (n.size === 0) return null;
            if (
              t === d.CAMPAIGN &&
              (e = n.get(d.CAMPAIGN_GROUP)) != null &&
              e.length
            )
              return new Map([["filtering", "SELECTED_CAMPAIGN_GROUP_IDS"]]);
            if (t === d.ADGROUP && (r = n.get(d.CAMPAIGN)) != null && r.length)
              return new Map([["filtering", "SELECTED_CAMPAIGN_IDS"]]);
            if (
              t === d.ADGROUP &&
              (o = n.get(d.CAMPAIGN_GROUP)) != null &&
              o.length
            )
              return new Map([["filtering", "SELECTED_CAMPAIGN_GROUP_IDS"]]);
          }),
          (a.getTotalResultsCountWithFilters = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var a,
                  l,
                  s =
                    (a =
                      (l = r("AdsAccountStore")
                        .getSelectedAccount()
                        .getValue()) == null
                        ? void 0
                        : l.account_id) != null
                      ? a
                      : "";
                if (s === "") return 0;
                var u = o("AdsPEFilterSetUtil").toMultiLevelAPISpec(e),
                  c = o(
                    "AdsObjectTypeGraphEdgeNameUtils",
                  ).getAdObjectLevelToLightEdgeName(t),
                  d = b(this.$20(u, n));
                (o("AdsMgmtQPLLogger").markerStart(
                  r("qpl")._(956835099, "2814"),
                ),
                  o("AdsMgmtQPLLogger").markerAnnotate(
                    r("qpl")._(956835099, "2814"),
                    { string: { filterSet: e.toString() } },
                  ));
                var m = yield o("AdsGraphAPI")
                  .get(i.id)
                  .adaccount(s)
                  .edge(c)
                  .get(d)
                  .then(function (e) {
                    return (
                      o("AdsMgmtQPLLogger").markerEnd(
                        r("qpl")._(956835099, "2814"),
                        2,
                      ),
                      e.summary.total_count
                    );
                  })
                  .catch(function (e) {
                    return (
                      o("AdsMgmtQPLLogger").markerEnd(
                        r("qpl")._(956835099, "2814"),
                        3,
                      ),
                      0
                    );
                  });
                return m;
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.checkFilteredIDs = function (t, n, a, l, s, u) {
            var e = this,
              c,
              d = this.$21(),
              m = function (o, a) {
                return e.$22(t, n, o, a);
              },
              p = function (t) {
                return v(s, a, t);
              };
            (r("isUnpublishedOnlyFilter")(l)
              ? (c = l.toAPI())
              : (c = o("AdsPEFilterSetUtil").toMultiLevelAPISpec(l)),
              r("promiseDone")(
                r("promiseAllByKey")({
                  campaignGroup: m("campaigns", p("campaignGroup")),
                  campaign: m("adsets", p("campaign")),
                  campaignGroupMultiLevel: m("campaigns", c),
                  campaignMultiLevel: m("adsets", c),
                }),
                function (t) {
                  d === e.$2 &&
                    r("AdsPEFilterIdsVerifiedAction").dispatch(
                      { idsByLevel: t, partiallyFilteredObjects: u },
                      {
                        line: "716",
                        module: "AdsPEFilterLiveDataManager.js",
                        moduleID: i.id,
                      },
                    );
                },
                function (e) {
                  r("gkx")("11868") ||
                    r("AdsPEFilterDraftIdVerificationErrorAction").dispatch(
                      { error: e },
                      {
                        line: "727",
                        module: "AdsPEFilterLiveDataManager.js",
                        moduleID: i.id,
                      },
                    );
                },
              ));
          }),
          (a.$17 = function () {
            return ++this.$1;
          }),
          (a.$21 = function () {
            return ++this.$2;
          }),
          (a.getIDsForFilterSetWithPromise = function (t) {
            var e = t.currentLevel,
              n = t.filterSet,
              o = t.selectedIDsMap,
              a = this.$14(n, e, o),
              l = n == null ? this.$13(e, o) : null,
              s = !!t.filterSet && r("hasLabelFilter")(t.filterSet),
              u = [i.id + "._getDataForLevel"];
            return this.$15(
              t.accountID,
              a,
              t.sortInfoMap,
              t.draftID,
              t.currentLevel,
              t.pagingData,
              t.dateTimeRange,
              t.timezoneID,
              t.comparisonDateTimeRange,
              t.datePreset,
              "dd",
              [u],
              s,
              l,
            );
          }),
          (a.$18 = function (t, n, a, l, s, u, c, d, m, p, _, f, g) {
            var e = this;
            (f === void 0 && (f = !1), g === void 0 && (g = !1));
            var h = {},
              y = n;
            return (
              o("ActionFilterUtils").isHighPerformingFilter(y) &&
                (y = o("ActionFilterUtils").excludeFilter(y, [
                  "SCALE_GOOD_CAMPAIGN",
                ])),
              u.forEach(function (n) {
                var r = e.$14(y, n, a),
                  o = y == null ? e.$13(n, a) : null,
                  u = [i.id + "._getDataForLevels"];
                h[n] = e.$15(t, r, l, s, n, c, d, m, p, _, "dd", [u], f, o, g);
              }),
              r("promiseAllByKey")(h)
            );
          }),
          (a.$14 = function (t, n, a) {
            var e,
              i = o("AdsPEFilterSetToAPIUtil")
                .computeChildFilterSetWithSelectedParentIDs(t, n, a)
                .get(n),
              l =
                r("AdFLEXPreloaderFilterConfig") == null ||
                (e = r("AdFLEXPreloaderFilterConfig").get()) == null
                  ? void 0
                  : e.toolBasedFilter;
            return (
              l != null &&
                r("gkx")("21201") &&
                (i = o("AdsPEFilterSetToAPIUtil").addFilterToFilterSet(l, i)),
              i
            );
          }),
          (a.$15 = function (t, a, i, l, s, u, d, m, p, _, f, g, h, y, C) {
            if (
              (h === void 0 && (h = !1),
              C === void 0 && (C = !1),
              r("isUnpublishedOnlyFilter")(a) || s === "uniqueAdCreative")
            )
              return (c || (c = n("Promise"))).resolve({
                ids: [],
                totalCount: 0,
                level: s,
              });
            var e = o("AdsPEFilterSetUtil").toMultiLevelAPISpec(a),
              b = o(
                "AdsObjectTypeGraphEdgeNameUtils",
              ).getGraphEdgeNameForAdLevel(s, !0);
            return this.$23(
              t,
              l,
              s,
              e,
              u,
              b,
              i[s],
              d,
              m,
              p,
              _,
              h,
              void 0,
              f,
              g,
              y,
              C,
            );
          }),
          (a.$22 = function (t, n, a, l) {
            if (
              r("isUnpublishedOnlyFilter")(l) ||
              o("AdsPEFilterSetUtil").hasEmptyIDFilter(l)
            )
              return y;
            var e = new Map([
              ["filtering", l],
              ["fields", "id"],
              ["limit", 5e3],
            ]);
            !n.isLoading() &&
              n.hasValue() &&
              e.set("ad_draft_id", n.getValue());
            var s = b(e);
            return o("AdsGraphAPI")
              .get(i.id)
              .adaccount(t)
              .edge(a)
              .batched()
              .get(s)
              .then(o("GraphAPIPaging").allPages())
              .then(function (e) {
                return e.data;
              });
          }),
          (a.$24 = function (t, n) {
            return (
              o("AdsObjectTypeGraphEdgeNameUtils").getAdLevelForGraphEdgeName(
                t,
              ) === n
            );
          }),
          (a.$23 = function (
            n,
            a,
            l,
            c,
            d,
            m,
            p,
            _,
            f,
            g,
            h,
            y,
            C,
            v,
            S,
            R,
            L,
          ) {
            (y === void 0 && (y = !1),
              C === void 0 && (C = !1),
              L === void 0 && (L = !1));
            var t = 0,
              E = this.calculatePagingLimits(d);
            this.$24(m, l) && (t = E.pagingLimit);
            var k = o("AdsObjectTypeUtils").getIdentifierFieldForAdLevel(l);
            k || s(0, 1846, l);
            var I = o("AdsPESortLiveUtils").getSortParams(p),
              T = this.buildAPIParams(a, l, c, m, _, f, g, h, E, C, L);
            T.set("sort", I);
            var D = { data_manager: i.id, fetch_type: v };
            (T.set("am_call_tags", D), T.set("fields", k));
            var x = b(T),
              $ = o("AdsGraphAPI")
                .get(o("AdsInsightsSourceStackUtil").repr(S))
                .adaccount(n)
                .edge(m)
                .preloadedBy(
                  r("AdsPEFilterLiveDataManagerPreloader").preloader,
                  o(
                    "AdsPEPreloadingRouteGuard",
                  ).getPreloadingConfigForActiveRoute(
                    o("AdsPEPreloadingRouteGuard").getAdsManagerRouteForAdLevel(
                      l,
                    ),
                  ),
                  {
                    fieldComparators: {
                      ad_draft_id: function (n, o) {
                        return n != null && o == null
                          ? !0
                          : (e || (e = r("areEqual")))(n, o);
                      },
                    },
                  },
                );
            R != null && ($ = $.withClientMetadata("dataLineage", R));
            var P = r("cachedGraphAPI")($, ["am_call_tags"]).cacheFor(2);
            (P.setReturnIsCached(), y && (P = P.clearCache()));
            var N = r("qex")._("631") === !0 ? "per_level" : "shared";
            r("QPLSharing").emitPoint("LOAD_TABLE", "FETCH_LIGHT_EDGE_START", {
              data: {
                string: {
                  adObjectType: l,
                  fetchType: v,
                  preloadDebounceArm: N,
                },
              },
            });
            var M = (u || (u = r("performanceNow")))();
            return P.get(x)
              .then(o("GraphAPIPaging").allPages(t))
              .then(function (e) {
                var t,
                  n = e.data.map(function (e) {
                    return e[k];
                  });
                return (
                  r("QPLSharing").emitPoint(
                    "LOAD_TABLE",
                    "FETCH_LIGHT_EDGE_DONE",
                    {
                      data: {
                        int: {
                          requestTimeMs: Math.round(
                            (u || (u = r("performanceNow")))() - M,
                          ),
                          objectCount: n.length,
                        },
                        string: {
                          adObjectType: l,
                          fetchType: v,
                          preloadDebounceArm: N,
                        },
                        bool: { isCached: (t = e.__isCached) != null ? t : !1 },
                      },
                    },
                  ),
                  {
                    ids: n,
                    totalCount: r("getByPath")(
                      e,
                      ["summary", "total_count"],
                      0,
                    ),
                    level: l,
                    isCached: e.__isCached,
                  }
                );
              })
              .catch(function (e) {
                throw (
                  r("QPLSharing").emitPoint(
                    "LOAD_TABLE",
                    "FETCH_LIGHT_EDGE_ERROR",
                    {
                      data: {
                        int: {
                          requestTimeMs: Math.round(
                            (u || (u = r("performanceNow")))() - M,
                          ),
                        },
                        string: {
                          adObjectType: l,
                          fetchType: v,
                          preloadDebounceArm: N,
                          errorMessage: String(
                            e instanceof Error ? e.message : "",
                          ).slice(0, 200),
                        },
                      },
                    },
                  ),
                  e
                );
              });
          }),
          (a.buildAPIParams = function (t, n, a, i, l, s, u, c, d, m, p) {
            (m === void 0 && (m = !1), p === void 0 && (p = !1));
            var e = new Map([["limit", 0]]);
            if (
              (p || e.set("summary", !0),
              !t.isLoading() &&
                t.hasValue() &&
                e.set("ad_draft_id", t.getValue()),
              this.$24(i, n) && !m)
            ) {
              if (
                (d != null && e.set("limit", d.apiLimit),
                e.set("date_preset", c),
                l && l.start && l.end)
              ) {
                var _ = r("LocalDateInterval").fromStrings(l.start, l.end),
                  f = o("AdsInsightsTimeRangeUtil").intervalToAPIParams(_),
                  g;
                if (u && u.start && u.end) {
                  var h = r("LocalDateInterval").fromStrings(u.start, u.end);
                  g = o(
                    "AdsInsightsTimeRangeUtil",
                  ).toBenchmarkTimeRangesAPIParams(
                    r("AdsInsightsTimeRange").interval(_),
                    r("AdsInsightsTimeRange").interval(h),
                    s,
                  );
                }
                g
                  ? e.set("comparison_time_ranges", g.comparison_time_ranges)
                  : e.set("time_range", f);
              }
              c != null && e.set("time_range", void 0);
            }
            return (e.set("filtering", a), e);
          }),
          (a.calculatePagingLimits = function (t) {
            var e = { apiLimit: 0, pagingLimit: 0 },
              n = (t.currentPage + 1) * t.pageSize;
            return ((e.pagingLimit = n), (e.apiLimit = Math.min(n, _)), e);
          }),
          (a.$19 = function (t, n, a) {
            var e = this;
            if ((a === void 0 && (a = !1), n === this.$1)) {
              (r("clearTimeout")(this.$9), r("clearTimeout")(this.$8));
              var l = {
                  campaignGroupIDs: [],
                  campaignIDs: [],
                  adgroupIDs: [],
                  uniqueAdCreativeVisualHashes: [],
                },
                s = o(
                  "AdsMgmt2026H1LBRExperimentUtils",
                ).getIsAccountInLightEdgeSummaryOptimizationTestGroupWithoutExposure()
                  ? {
                      adAccount: void 0,
                      campaignGroup: void 0,
                      campaign: void 0,
                      adgroup: void 0,
                      uniqueAdCreative: void 0,
                      topline: void 0,
                      opportunities: void 0,
                      privacyInfoCenter: void 0,
                      product: void 0,
                    }
                  : {
                      adAccount: 0,
                      campaignGroup: 0,
                      campaign: 0,
                      adgroup: 0,
                      uniqueAdCreative: 0,
                      topline: 0,
                      opportunities: 0,
                      privacyInfoCenter: 0,
                      product: 0,
                    },
                u = !1;
              if (
                (r("forEachObject")(t, function (e, t) {
                  if (t !== "topline") {
                    e.isCached === !0 && (u = !0);
                    var n = p.get(t);
                    (n &&
                      (l[n] = e.ids.map(function (e) {
                        return String(e);
                      })),
                      a || (s[t] = e.totalCount));
                  }
                }),
                o("AdsMgmtBudgetCellStoreWarmer").warmBudgetCellStores(l),
                u)
              ) {
                var c = r("qex")._("4626") === !0;
                this.$9 = r("setTimeout")(function () {
                  if (c) {
                    r("AdsPEFilterAppliedAction").dispatch(
                      { filteredIDs: l, totalCounts: s },
                      {
                        line: "1339",
                        module: "AdsPEFilterLiveDataManager.js",
                        moduleID: i.id,
                      },
                    );
                    return;
                  }
                  e.$8 = r("setTimeout")(function () {
                    r("AdsPEFilterAppliedAction").dispatch(
                      { filteredIDs: l, totalCounts: s },
                      {
                        line: "1346",
                        module: "AdsPEFilterLiveDataManager.js",
                        moduleID: i.id,
                      },
                    );
                  }, 0);
                }, 0);
              } else
                r("AdsPEFilterAppliedAction").dispatch(
                  { filteredIDs: l, totalCounts: s },
                  {
                    line: "1353",
                    module: "AdsPEFilterLiveDataManager.js",
                    moduleID: i.id,
                  },
                );
            }
          }),
          (a.$16 = function (n) {
            var t = n.level;
            if (t === "campaignGroup" || t === "campaign" || t === "adgroup") {
              var o = this.$10.get(t);
              if (
                o != null &&
                o.totalCount === n.totalCount &&
                (e || (e = r("areEqual")))(o.ids, n.ids)
              )
                return;
              (this.$10.set(t, n),
                r("AdsPEPrefetchedIDsAction").dispatch(n, {
                  line: "1376",
                  module: "AdsPEFilterLiveDataManager.js",
                  moduleID: i.id,
                }));
            }
          }),
          t
        );
      })(),
      L = new R();
    l.default = L;
  },
  98,
);

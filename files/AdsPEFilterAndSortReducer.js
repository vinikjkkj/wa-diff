__d(
  "AdsPEFilterAndSortReducer",
  [
    "ActionFilterUtils",
    "AdsAccountBatchLoadedDataActionFlux",
    "AdsAccountStore",
    "AdsAdgroupSelectionClearDataActionFlux",
    "AdsCampaignGroupSelectionClearDataActionFlux",
    "AdsCampaignSelectionClearDataActionFlux",
    "AdsDataAtom",
    "AdsDraftDraftPublishCompletedDataActionFlux",
    "AdsDraftSelectionStore",
    "AdsGenericFilter",
    "AdsGenericFilterSet",
    "AdsGenericFilterSetUtil",
    "AdsInsightsGroupDimensionConfigTypes",
    "AdsInsightsTableToggleSortActionFlux",
    "AdsInterfacesRouteUpdateParamsDataActionFlux",
    "AdsInterfacesRouter",
    "AdsManager2026H2ExperimentUtils",
    "AdsMgmt2026H1LBRExperimentUtils",
    "AdsMgmtCurrentLevelSortInfoSelector",
    "AdsMgmtSelectedAncestorIDsSelectors",
    "AdsNavigationChangeNavigationStateDataActionFlux",
    "AdsPEAdgroupAvailableIDStore",
    "AdsPEAnomalyDetectionFilterUtil",
    "AdsPECampaignAvailableIDStore",
    "AdsPECampaignGroupAvailableIDStore",
    "AdsPEFilterAppliedAction",
    "AdsPEFilterAppliedActionFlux",
    "AdsPEFilterChangedActionFlux",
    "AdsPEFilterFields",
    "AdsPEFilterLiveDataManager",
    "AdsPEFilterLoadErrorActionFlux",
    "AdsPEFilterUIStateSelectors",
    "AdsPEFluxAdTableSetSortKeyActionFlux",
    "AdsPEFluxCampaignGroupTableSetSortKeyActionFlux",
    "AdsPEFluxCampaignTableSetSortKeyActionFlux",
    "AdsPEGroupConstants",
    "AdsPERefreshTableViewActionFlux",
    "AdsPESortLiveUtils",
    "AdsPerfInteractionUtil",
    "AdsPerfInteractionsController",
    "AdsRevertAdObjectsDataActionFlux",
    "AdsRevertSelectedAdObjectsDataActionFlux",
    "Bootloader",
    "adsMgmtCurrentLevelSelector",
    "adsMgmtFilterAdjustedForParentSelectionForCurrentLevelSelector",
    "adsMgmtIsStartYourDaySelectors",
    "adsMgmtLoadIDRequestViewSpecParamsSelector",
    "adsMgmtNeedToLoadAllFilteredIDsSelector",
    "adsMgmtPagingDataSelector",
    "adsMgmtViewportSelector",
    "adsPEManageAdsSectionSelector",
    "gkx",
    "hasDateChangeRelatedFilter",
    "hasLabelFilter",
    "isFalsey",
    "objectKeys",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [].concat(o("AdsPEFilterUIStateSelectors").getFilterSet.getStores()),
      u = Array.from(new Set(r("adsMgmtPagingDataSelector").getStores())),
      c = [].concat(
        o(
          "AdsMgmtSelectedAncestorIDsSelectors",
        ).adsMgmtRelevantSelectionsMapSelector.getStores(),
        o(
          "AdsMgmtSelectedAncestorIDsSelectors",
        ).adsMgmtSelectedAncestorIDsSelector.getStores(),
      ),
      d = [r("AdsAccountStore"), r("AdsDraftSelectionStore")].concat(
        o("AdsPEFilterUIStateSelectors").getFilterSet.getStores(),
        u,
        c,
        o(
          "AdsMgmtCurrentLevelSortInfoSelector",
        ).adsMgmtCurrentLevelSortInfoSelector.getStores(),
        r("adsPEManageAdsSectionSelector").getStores(),
        r("adsMgmtLoadIDRequestViewSpecParamsSelector").getStores(),
        r("adsMgmtNeedToLoadAllFilteredIDsSelector").getStores(),
        r("adsMgmtCurrentLevelSelector").getStores(),
      ),
      m = d.map(function (e) {
        return e && e.getDispatchToken();
      }),
      p = function (t) {
        return !!t && r("hasLabelFilter")(t);
      },
      _ = function () {
        return c.some(function (e) {
          return e.hasChanged();
        });
      },
      f = function (t, n) {
        n === void 0 && (n = !1);
        var e = o(
          "AdsInsightsGroupDimensionConfigTypes",
        ).coerceGroupingDimension(t);
        if (e != null) {
          var a = r("AdsAccountStore").getSelectedAccountID(),
            i = r("adsMgmtCurrentLevelSelector")(),
            l =
              i === "campaignGroup"
                ? "campaign"
                : i === "campaign"
                  ? "ad_set"
                  : null;
          if (a != null && l != null) {
            var s,
              u =
                (s = r(
                  "adsMgmtFilterAdjustedForParentSelectionForCurrentLevelSelector",
                )()) != null
                  ? s
                  : o("AdsPEFilterUIStateSelectors").getFilterSet(),
              c = r("adsMgmtLoadIDRequestViewSpecParamsSelector")(),
              d = c.datePreset,
              m = c.dateTimeRange,
              p = r("adsMgmtViewportSelector")(),
              _ =
                p != null
                  ? p.rowInterval[1] +
                    o("AdsPEGroupConstants").GROUP_VIEWPORT_BUFFER
                  : void 0;
            r("Bootloader").loadModules(
              ["AdsInsightsGroupCountDataManager"],
              function (t) {
                t.loadGroupCounts(e, a, l, u, n, m, d, _);
              },
              "AdsPEFilterAndSortReducer",
            );
          }
        }
      },
      g = function () {
        var e = r("adsMgmtCurrentLevelSelector")();
        if (!e) return !1;
        var t = r("adsMgmtLoadIDRequestViewSpecParamsSelector")(),
          n = t.sortInfoMap;
        return !(
          o("AdsPESortLiveUtils").isSortByError(n[e]) ||
          o("AdsPESortLiveUtils").isSortByChanged(n[e])
        );
      },
      h = function (t) {
        if (!t.data.changedParamKeys.date) return !1;
        var e = o(
          "AdsMgmtCurrentLevelSortInfoSelector",
        ).adsMgmtCurrentLevelSortInfoSelector();
        return e && o("AdsPESortLiveUtils").isDateChangeRelatedSort(e)
          ? !0
          : r("hasDateChangeRelatedFilter")(
              o("AdsPEFilterUIStateSelectors").getFilterSet(),
            );
      },
      y = function (t) {
        var e = function (t) {
          return t == null ? void 0 : t.hasChanged();
        };
        return !!(
          (s.some(e) &&
            !o("AdsGenericFilterSetUtil").completeMatchesExactly(
              t.filterSet,
              o("AdsPEFilterUIStateSelectors").getFilterSet(),
            )) ||
          r("adsPEManageAdsSectionSelector").getStores().some(e) ||
          _() ||
          o("AdsMgmtCurrentLevelSortInfoSelector").SORT_STORES.some(e) ||
          (r("AdsDraftSelectionStore").hasChanged() && C(t)) ||
          (r("AdsAccountStore").hasChanged() &&
            t.accountID !== r("AdsAccountStore").getSelectedAccountID()) ||
          (u.some(e) && b(t))
        );
      },
      C = function (t) {
        var e = r("AdsAccountStore").getSelectedAccountID();
        if (e == null) return !1;
        var n = r("AdsDraftSelectionStore").getCached(e);
        if (!n.hasValue()) return !1;
        var o = t.draftID;
        return o == null ? !0 : n.getValue() !== o.getValue();
      },
      b = function (t) {
        var e = r("adsMgmtCurrentLevelSelector")();
        if (!e) return !1;
        var n = r("adsMgmtPagingDataSelector")(e);
        return t.currentPageByLevel[e] !== n.currentPage;
      };
    function v(e) {
      var t = r("adsMgmtCurrentLevelSelector")();
      if (t) {
        var n = r("adsMgmtLoadIDRequestViewSpecParamsSelector")(),
          o = n.sortInfoMap,
          a = o[t];
        if (a != null) return e.set("previousSortInfo", a);
      }
      return e;
    }
    function S(e) {
      var t = r("adsMgmtCurrentLevelSelector")(),
        n = r("adsMgmtLoadIDRequestViewSpecParamsSelector")(),
        a = n.sortInfoMap,
        i = t ? a[t] : null,
        l =
          t === "campaignGroup"
            ? r("AdsPECampaignGroupAvailableIDStore")
            : t === "campaign"
              ? r("AdsPECampaignAvailableIDStore")
              : t === "adgroup"
                ? r("AdsPEAdgroupAvailableIDStore")
                : null;
      return {
        canReverse: o("AdsPESortLiveUtils").canReverseSort(i, e, l),
        currentLevel: t,
        levelStore: l,
        newSortInfo: i,
      };
    }
    function R(e, t) {
      var n,
        o = e,
        a = t.data.changedParamKeys,
        i =
          a != null &&
          typeof a == "object" &&
          r("objectKeys")(a).length === 1 &&
          a.sort === !0;
      if (i && r("gkx")("12616") && S(o.previousSortInfo).canReverse) return o;
      if (
        ((h(t) || y(o) || r("adsMgmtNeedToLoadAllFilteredIDsSelector")()) &&
          (o = L(o, t.type, a, p(t.data.params.filter_set))),
        ((n = t.data) == null || (n = n.params) == null
          ? void 0
          : n.group_by) != null)
      ) {
        var l,
          s = (l = t.data) == null ? void 0 : l.changedParamKeys;
        ((s == null ? void 0 : s.group_by) != null ||
          (s == null ? void 0 : s.section) != null ||
          (s == null ? void 0 : s.filter_set) != null ||
          (s == null ? void 0 : s.date) != null) &&
          f(t.data.params.group_by);
      }
      return o;
    }
    var L = function (t, n, a, i) {
        var e;
        i === void 0 && (i = !1);
        var l = t;
        if (
          o(
            "adsMgmtIsStartYourDaySelectors",
          ).adsMgmtIsStartYourDaySectionSelector() &&
          o("AdsManager2026H2ExperimentUtils").getShouldSkipPeFilterOnSyd()
        )
          return l;
        var s = r("adsMgmtCurrentLevelSelector")(),
          u = r("AdsAccountStore").getSelectedAccountID();
        if (r("isFalsey")(u) || !s || s === "topline") return l;
        var c = r("adsMgmtLoadIDRequestViewSpecParamsSelector")(),
          d = c.comparisonDateTimeRange,
          m = c.datePreset,
          p = c.dateTimeRange,
          _ = c.sortInfoMap,
          f = c.timezoneID;
        l = l.set("accountID", u);
        var g = o("AdsPEFilterUIStateSelectors").getFilterSet();
        l = l.set("filterSet", g);
        var h = o(
            "AdsMgmtSelectedAncestorIDsSelectors",
          ).adsMgmtRelevantSelectionsMapSelector(s),
          y = r("AdsDraftSelectionStore").getCached(u);
        l = l.set("draftID", y);
        var C = r("adsMgmtPagingDataSelector")(s);
        ((l = l.set(
          "currentPageByLevel",
          babelHelpers.extends(
            {},
            l.currentPageByLevel,
            ((e = {}), (e[s] = C.currentPage), e),
          ),
        )),
          (l = l.set("areIDsLoading", !0)),
          n !==
            o("AdsNavigationChangeNavigationStateDataActionFlux").actionType &&
            (l = l.set("areCountsLoading", !0)));
        var b = g,
          v = r("AdsAccountStore").getSelectedAccount().getValue(),
          S =
            a != null &&
            typeof a == "object" &&
            r("objectKeys")(a).length === 1 &&
            a.sort === !0,
          R =
            S &&
            o("AdsPEFilterUIStateSelectors").hasFilters() &&
            o(
              "AdsMgmt2026H1LBRExperimentUtils",
            ).getIsAccountInLightEdgeSummaryOptimizationTestGroup(),
          L = function (t) {
            r("AdsPEFilterLiveDataManager").loadIDsForFilterSet(
              u,
              t,
              h,
              _,
              y,
              s,
              C,
              p,
              f,
              d,
              m,
              a,
              i,
              R,
            );
          };
        if (b != null && o("ActionFilterUtils").isRecommendationFilter(b))
          r("Bootloader").loadModules(
            ["adsMgmtRecommendationsFilterSelector"],
            function (e) {
              var t = e({ adAccount: v, filterSet: g });
              t.match({
                error: function () {
                  ((b = o("ActionFilterUtils").generateAdditionalActionFilter(
                    b,
                    [],
                  )),
                    L(b));
                },
                loading: function () {
                  ((b = o("ActionFilterUtils").generateAdditionalActionFilter(
                    b,
                    [],
                  )),
                    L(b));
                },
                loaded: function (t) {
                  ((b = o("ActionFilterUtils").generateAdditionalActionFilter(
                    b,
                    t,
                  )),
                    L(b));
                },
              });
            },
            "AdsPEFilterAndSortReducer",
          );
        else if (b != null && o("ActionFilterUtils").isHighPerformingFilter(b))
          (r("Bootloader").loadModules(
            ["adsMgmtScaleGoodCampaignsFilterSelector"],
            function (e) {
              var t = e();
              t.match({
                error: function () {
                  ((b = o(
                    "ActionFilterUtils",
                  ).generateAdditionalHighPerformingFilter(b, [])),
                    L(b));
                },
                loading: function () {
                  ((b = o(
                    "ActionFilterUtils",
                  ).generateAdditionalHighPerformingFilter(b, [])),
                    L(b));
                },
                loaded: function (t) {
                  ((b = o(
                    "ActionFilterUtils",
                  ).generateAdditionalHighPerformingFilter(b, t)),
                    L(b));
                },
              });
            },
            "AdsPEFilterAndSortReducer",
          ),
            L(b));
        else if (b != null && o("ActionFilterUtils").isAnomalyFilter(b)) {
          var E = o(
            "AdsPEAnomalyDetectionFilterUtil",
          ).extractAnomalyFilterFromAdsGenericFilterSet(b);
          E == null || E.value == null
            ? L(b)
            : r("Bootloader").loadModules(
                ["AdsAnomalyDetectionFilterCampaignsGraphQLDataLoader"],
                function (e) {
                  var t = {
                    since: p.start.substring(0, 10),
                    until: p.end.substring(0, 10),
                  };
                  if (v == null || v.account_id == null) {
                    ((b = o(
                      "ActionFilterUtils",
                    ).generateAdditionalAnomalyFilter(b, [])),
                      L(b));
                    return;
                  }
                  var n = Array.isArray(E.value) ? E.value : [String(E.value)];
                  e.load(v.account_id, n, t)
                    .then(function (e) {
                      E && e != null
                        ? ((b = o(
                            "ActionFilterUtils",
                          ).generateAdditionalAnomalyFilter(b, [
                            new (r("AdsGenericFilterSet"))([
                              new (r("AdsGenericFilter"))(
                                r("AdsPEFilterFields")
                                  .SEARCH_BY_CAMPAIGN_GROUP_IDS,
                                E.operator,
                                e,
                              ),
                            ]),
                          ])),
                          L(b))
                        : ((b = o(
                            "ActionFilterUtils",
                          ).generateAdditionalAnomalyFilter(b, [])),
                          L(b));
                    })
                    .catch(function (e) {
                      ((b = o(
                        "ActionFilterUtils",
                      ).generateAdditionalAnomalyFilter(b, [])),
                        L(b));
                    });
                },
                "AdsPEFilterAndSortReducer",
              );
        } else L(b);
        return l;
      },
      E = function (n, a) {
        var t,
          l,
          s = n;
        switch (((e || (e = r("AdsDataAtom"))).waitFor(m), a.type)) {
          case o("AdsPEFilterAppliedActionFlux").actionType:
            s = s
              .set("areCountsLoading", !1)
              .set("areIDsLoading", !1)
              .set("error", null);
            break;
          case o("AdsPEFilterLoadErrorActionFlux").actionType:
            s = s
              .set("areCountsLoading", !1)
              .set("areIDsLoading", !1)
              .set("error", a.error);
            break;
          case o("AdsDraftDraftPublishCompletedDataActionFlux").actionType:
            (((t =
              (l = o("AdsPerfInteractionUtil").getTracePolicy()) == null
                ? void 0
                : l.indexOf("edit")) != null
              ? t
              : -1) !== -1 &&
              r("AdsPerfInteractionsController").startInteraction(
                "am.editor.reload_in_same_level",
                i.id,
              ),
              (s = L(s, a.type, void 0, !0)));
            {
              var u,
                c =
                  (u = r("AdsInterfacesRouter").getOrNull()) == null
                    ? void 0
                    : u.getParams().group_by;
              c != null && f(c, !0);
            }
            s = s.set("previousSortInfo", null);
            break;
          case o("AdsAccountBatchLoadedDataActionFlux").actionType:
          case o("AdsRevertAdObjectsDataActionFlux").actionType:
          case o("AdsRevertSelectedAdObjectsDataActionFlux").actionType:
          case o("AdsAdgroupSelectionClearDataActionFlux").actionType:
          case o("AdsCampaignSelectionClearDataActionFlux").actionType:
          case o("AdsCampaignGroupSelectionClearDataActionFlux").actionType:
            s = L(s, a.type);
            {
              var d,
                p =
                  (d = r("AdsInterfacesRouter").getOrNull()) == null
                    ? void 0
                    : d.getParams().group_by;
              p != null && f(p);
            }
            s = s.set("previousSortInfo", null);
            break;
          case o("AdsPEFilterChangedActionFlux").actionType:
            break;
          case o("AdsInsightsTableToggleSortActionFlux").actionType: {
            var _ = y(s),
              h = S(s.previousSortInfo),
              C = h.canReverse,
              b = h.currentLevel,
              E = h.levelStore,
              k = h.newSortInfo,
              I = _ && C && r("gkx")("12616");
            if (((s = v(s)), I && b != null && E != null)) {
              var T = o("AdsPESortLiveUtils").reverseFilteredIDs(b, E, k),
                D = T.filteredIDs,
                x = T.totalCounts;
              r("setTimeout")(function () {
                r("AdsPEFilterAppliedAction").dispatch(
                  { filteredIDs: D, totalCounts: x },
                  {
                    line: "727",
                    module: "AdsPEFilterAndSortReducer.js",
                    moduleID: i.id,
                  },
                );
              }, 0);
            } else _ && (s = L(s, a.type, { sort: !0 }));
            break;
          }
          case o("AdsPEFluxAdTableSetSortKeyActionFlux").actionType:
          case o("AdsPEFluxCampaignTableSetSortKeyActionFlux").actionType:
          case o("AdsPEFluxCampaignGroupTableSetSortKeyActionFlux")
            .actionType: {
            (g() && y(s) && (s = L(s, a.type, { sort: !0 })), (s = v(s)));
            break;
          }
          case o("AdsPERefreshTableViewActionFlux").actionType:
            (a.allLevels || a.adLevel === r("adsMgmtCurrentLevelSelector")()) &&
              (s = L(s, a.type));
            {
              var $,
                P =
                  ($ = r("AdsInterfacesRouter").getOrNull()) == null
                    ? void 0
                    : $.getParams().group_by;
              P != null && f(P, !0);
            }
            break;
          case o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType: {
            s = R(s, a);
            break;
          }
          default:
            y(s) && (s = L(s, a.type));
        }
        return s;
      };
    l.reduce = E;
  },
  98,
);

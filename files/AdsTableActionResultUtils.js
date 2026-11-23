__d(
  "AdsTableActionResultUtils",
  [
    "fbt",
    "AdsAISearchAttributionReceipt",
    "AdsDataAtom",
    "AdsInsightsBreakdownEntries",
    "AdsInsightsColumnChangeSource",
    "AdsInsightsDmaDeprecationUtils",
    "AdsInsightsTableColumnAction",
    "AdsInsightsTimeRange",
    "AdsInsightsTimeRangeUtil",
    "AdsInsightsViewAction",
    "AdsInterfacesLogger",
    "AdsNavigationActions",
    "AdsPEAISearchPriorityViewBridge",
    "AdsPEBreakdownsClearAction",
    "AdsPEBreakdownsSelectAction",
    "AdsPEFilterSearchUtils.react",
    "AdsPENavigationUtils",
    "AdsPEPriorityViewSetEnabledAction",
    "AdsPERecentlyUsedMAIBAUtils",
    "AdsPERouterHelper",
    "AdsPEStatRangeUIStore",
    "AdsPEStatsUtils",
    "AdsPETypeaheadAIFilterUtils",
    "AdsPEUpdateRecentlyUsedFiltersAction",
    "AdsReportDatePresetTypeValidator",
    "AdsUniversalComposerAppliedViewSpec",
    "AdsUniversalComposerViewSpecPayload",
    "LocalDate",
    "LocalDateInterval",
    "QuickPerformanceLogger",
    "adsMgmtColumnIsValid",
    "justknobx",
    "qpl",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = 0,
      d = r("qpl")._(919603786, "3627");
    function m(e, t, n) {
      var r;
      return (
        (r = {}),
        (r.search_string = e),
        (r.message = "engine_run_id: " + t + ", " + n),
        r
      );
    }
    function p(e) {
      return e === "CAMPAIGN_GROUP"
        ? "campaign"
        : e === "CAMPAIGN"
          ? "ad_set"
          : e === "ADGROUP"
            ? "ad"
            : null;
    }
    function _(e, t) {
      var n = p(e);
      if (n == null)
        return (
          e != null && r("vulture")("N3i4eh0uo1qPu3LfjubjEb0SYKo="),
          null
        );
      if (n !== t) {
        var a = r("AdsPENavigationUtils").getNavSectionFromAdObjectLevel(n);
        (r("AdsPERouterHelper")
          .getRouteBuilder()
          .clearAllSelectedIDs()
          .navigate(),
          o("AdsNavigationActions").changeLevel(a, "maiba_genai"));
      }
      return n;
    }
    function f(e, t, n) {
      var a = e != null ? e : [];
      if (t.length === 0)
        return (
          a.length > 0 && r("vulture")("giTLFnzGT3J7cx6RPWgjMBWoumU="),
          { addedColumnIDs: [], mergedColumnIDs: [] }
        );
      var i = new Set(t),
        l = [];
      for (var s of a) {
        if (!r("adsMgmtColumnIsValid")(s)) {
          r("vulture")("giTLFnzGT3J7cx6RPWgjMBWoumU=");
          continue;
        }
        i.has(s) || (i.add(s), l.push(s));
      }
      if (l.length === 0)
        return { addedColumnIDs: [], mergedColumnIDs: [].concat(t) };
      var u = [].concat(t, l);
      return (
        o("AdsInsightsTableColumnAction").changeColumns(
          u,
          n,
          o("AdsInsightsColumnChangeSource").MAIBA_GENAI,
          !1,
        ),
        { addedColumnIDs: l, mergedColumnIDs: u }
      );
    }
    function g(e) {
      var t = (e != null ? e : []).flatMap(function (e) {
          var t,
            n,
            a = e.column,
            i =
              a != null
                ? (t = o("AdsPEFilterSearchUtils.react").FIELD_KEY_MAP[a]) !=
                  null
                  ? t
                  : a
                : null,
            l = o("AdsPETypeaheadAIFilterUtils").getValidSortingDirection(
              (n = e.direction) != null ? n : "",
            );
          return i == null || !r("adsMgmtColumnIsValid")(i) || l == null
            ? (r("vulture")("7V0xLusZk4i8a3mqVO7cVwkucRY="), [])
            : [{ direction: l, field: i }];
        }),
        n = new Set();
      return t.filter(function (e) {
        return n.has(e.field) ? !1 : (n.add(e.field), !0);
      });
    }
    function h(t, n, a) {
      if (t == null || t === "") return null;
      if (!o("AdsInsightsBreakdownEntries").hasConfig(t))
        return (
          r("AdsInterfacesLogger").log({
            eventName: "aisf_v2_invalid_breakdown",
            eventCategory: "errors",
            data: m(n, a, "breakdown=" + t + ", reason=no_entry_config"),
          }),
          null
        );
      var l = o("AdsInsightsDmaDeprecationUtils").filterDmaBreakdowns([t]);
      return l.length === 0
        ? (r("AdsInterfacesLogger").log({
            eventName: "aisf_v2_invalid_breakdown",
            eventCategory: "errors",
            data: m(n, a, "breakdown=" + t + ", reason=dma_deprecated"),
          }),
          null)
        : (r("AdsPEBreakdownsClearAction").dispatch(
            {},
            {
              line: "368",
              module: "AdsTableActionResultUtils.js",
              moduleID: i.id,
            },
          ),
          l.forEach(function (t) {
            (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
              r("AdsPEBreakdownsSelectAction").dispatch(
                { breakdownEntry: t },
                {
                  line: "371",
                  module: "AdsTableActionResultUtils.js",
                  moduleID: i.id,
                },
              );
            });
          }),
          t);
    }
    var y = new Set(["PREVIOUS_MONTH", "PREVIOUS_PERIOD", "PREVIOUS_YEAR"]);
    function C(e, t, n, a, i, l) {
      var s,
        u,
        c = b(e, n, a),
        d = v(c),
        m = S(t, d, n, a, i, l);
      if (c == null && m == null)
        return { dateComparison: null, dateRange: null };
      var p =
          c != null ? c.rangeType : r("AdsPEStatRangeUIStore").getRangeType(),
        _ =
          c != null
            ? c.statRange
            : r("AdsPEStatRangeUIStore").getStatRangeString(n);
      return (
        o("AdsInsightsViewAction").setTableStatRange(
          p,
          _,
          m == null ? void 0 : m.statRange,
          m == null ? void 0 : m.preset,
        ),
        {
          dateComparison:
            (s = m == null ? void 0 : m.preset) != null ? s : null,
          dateRange: (u = c == null ? void 0 : c.range) != null ? u : null,
        }
      );
    }
    function b(e, t, n) {
      if (e == null) return null;
      var a = e.end_date,
        i = e.preset,
        l = e.start_date,
        s = i != null && i !== "";
      if (!s && l == null && a == null) return null;
      if (n === "") return (r("vulture")("6o3m2oQjnp6wRvpAWaj9o4sBTqw="), null);
      var u, c, d;
      if (s) {
        var m = r("AdsReportDatePresetTypeValidator")(i);
        if (m == null || m === "")
          return (r("vulture")("6o3m2oQjnp6wRvpAWaj9o4sBTqw="), null);
        ((u = { end: void 0, start: void 0, value: m }),
          (c = { end: null, preset: m, start: null }),
          (d = r("AdsInsightsTimeRange").preset(m)));
      } else if (l != null && a != null) {
        var p = r("LocalDate").fromISOStringNullable(l),
          _ = r("LocalDate").fromISOStringNullable(a);
        if (p == null || _ == null || p.compare(_) > 0)
          return (r("vulture")("6o3m2oQjnp6wRvpAWaj9o4sBTqw="), null);
        var f = r("LocalDateInterval").create(p, _.addDays(1));
        ((u = { end: f.end, start: f.start, value: null }),
          (c = { end: a, preset: null, start: l }),
          (d = r("AdsInsightsTimeRange").interval(f)));
      } else return (r("vulture")("6o3m2oQjnp6wRvpAWaj9o4sBTqw="), null);
      var g = o("AdsPEStatsUtils").updateStatRangeSoft(u, t, n);
      return g == null
        ? (r("vulture")("6o3m2oQjnp6wRvpAWaj9o4sBTqw="), null)
        : { range: c, rangeType: u.value, statRange: g, timeRange: d };
    }
    function v(e) {
      if (e != null) return e.timeRange;
      var t = r("AdsPEStatRangeUIStore").getRangeType();
      return t != null && t !== "" ? r("AdsInsightsTimeRange").preset(t) : null;
    }
    function S(e, t, n, a, i, l) {
      if (e == null || e === "") return null;
      var s = function (n) {
        r("AdsInterfacesLogger").log({
          eventName: "aisf_v2_invalid_date_comparison",
          eventCategory: "errors",
          data: m(i, l, "comparison=" + e + ", " + n),
        });
      };
      if (!y.has(e)) return (s("reason=unknown_preset"), null);
      if (t == null)
        return (s("reason=no_reporting_range_to_compare_against"), null);
      if (t.isLifetime() || t.isMaximum())
        return (s("reason=lifetime_has_no_earlier_window"), null);
      var u = t.getValidDatePresetOrNull();
      if (u != null && !r("AdsInsightsTimeRange").getPresets().has(u))
        return (
          s(
            "primary_preset=" +
              u +
              ", reason=preset_has_no_comparable_interval",
          ),
          null
        );
      var c = o("AdsInsightsTimeRangeUtil").toCompareTimeRange(t, n, e);
      if (c == null) return (s("reason=unresolvable_compare_interval"), null);
      var d = o("AdsInsightsTimeRangeUtil").toDateInterval(
          c,
          r("LocalDate").today(n),
        ),
        p = o("AdsPEStatsUtils").updateStatRangeSoft(
          { end: d.end, start: d.start, value: null },
          n,
          a,
        );
      return p == null
        ? (s("reason=unresolvable_stat_range"), null)
        : { preset: e, statRange: p };
    }
    function R(e, t, n, o, a, i, l) {
      try {
        return L(e, t, n, o, a, i, l);
      } catch (t) {
        var s,
          u = (s = e == null ? void 0 : e.engine_run_id) != null ? s : "";
        return (
          r("AdsInterfacesLogger").log({
            eventName: "aisf_v2_ai_search_error",
            eventCategory: "errors",
            data: m(
              a,
              u,
              "reason=apply_threw, error=" +
                (t instanceof Error ? t.message : "unknown"),
            ),
          }),
          {
            appliedFilterInputs: [],
            appliedHandlerIDs: [],
            breakdown: null,
            columns: [],
            dateComparison: null,
            dateRange: null,
            didApplyAction: !1,
            engineRunId: u,
            filters: null,
            sortCriteria: [],
            summary: null,
            tab: null,
          }
        );
      }
    }
    function L(e, t, n, a, i, l, s) {
      var u,
        c = (u = e == null ? void 0 : e.engine_run_id) != null ? u : "",
        d = _(e == null ? void 0 : e.tab, t),
        p = f(e == null ? void 0 : e.columns, n, a),
        y = p.addedColumnIDs,
        b = p.mergedColumnIDs,
        v = o("AdsPETypeaheadAIFilterUtils").applyFilters(
          e == null ? void 0 : e.filters,
          i,
          c,
          function (e) {
            r("AdsInterfacesLogger").log({
              eventName: "aisf_v2_invalid_filter",
              eventCategory: "errors",
              data: m(i, c, e),
            });
          },
        ),
        S = v.appliedFilters,
        R = v.filterSet,
        L = g(e == null ? void 0 : e.sorting);
      o("AdsPETypeaheadAIFilterUtils").applyMAIBASorting(
        L,
        d != null ? d : t,
        b,
        a,
      );
      var E = h(e == null ? void 0 : e.breakdown, i, c),
        k = C(
          e == null ? void 0 : e.date_range,
          e == null ? void 0 : e.date_comparison,
          l,
          s,
          i,
          c,
        ),
        I = k.dateComparison,
        T = k.dateRange,
        D = [].concat(
          d != null && d !== t ? ["tab"] : [],
          y.length > 0 ? ["columns"] : [],
          R != null ? ["filters"] : [],
          L.length > 0 ? ["sort"] : [],
          E != null ? ["breakdown"] : [],
          T != null ? ["date"] : [],
          I != null ? ["date_comparison"] : [],
        );
      return {
        appliedFilterInputs: S,
        appliedHandlerIDs: D,
        breakdown: E,
        columns: y,
        dateComparison: I,
        dateRange: T,
        engineRunId: c,
        didApplyAction: D.length > 0,
        filters: R,
        sortCriteria: L,
        summary: null,
        tab: d,
      };
    }
    function E(e) {
      var t,
        n,
        r,
        o,
        a = e.breakdown,
        i = e.columns,
        l = e.dateComparison,
        s = e.dateRange,
        u = e.filters,
        c = e.sortCriteria,
        d = e.tab,
        m = c
          .map(function (e) {
            return e.field + ":" + e.direction;
          })
          .join(", "),
        p = ((t = u == null ? void 0 : u.getValues()) != null ? t : [])
          .map(function (e) {
            return e.key;
          })
          .join(", "),
        _ =
          s == null
            ? "NULL"
            : (n = s.preset) != null
              ? n
              : ((r = s.start) != null ? r : "NULL") +
                ".." +
                ((o = s.end) != null ? o : "NULL");
      return (
        "tab=" +
        (d != null ? d : "NULL") +
        ", columns=[" +
        i.join(", ") +
        "], " +
        ("sorting=[" + m + "], filters=[" + p + "], ") +
        ("breakdown=" + (a != null ? a : "NULL") + ", date_range=" + _ + ", ") +
        ("date_comparison=" + (l != null ? l : "NULL"))
      );
    }
    function k(e) {
      var t,
        n,
        r = e.exposureID,
        o = e.isFreeform,
        a = e.isViewSpecFastPath,
        i = e.prompt,
        l = e.selectionInstanceID,
        s = e.wasPromoted;
      return {
        eventType: a ? "view_spec_fast_path" : o ? "freeform" : "preset",
        logData: babelHelpers.extends(
          ((t = {}),
          (t.search_string = i),
          (t.source = s ? "promoted" : "default"),
          (t.sub_session_id = l),
          t),
          r != null ? ((n = {}), (n.session_id = r), n) : {},
        ),
      };
    }
    function I(e, t, n, a, l, m, p, _, f, g, h, y, C, b, v, S) {
      var L, I;
      if (
        (y === void 0 && (y = null),
        b === void 0 && (b = !1),
        v === void 0 && (v = !1),
        S === void 0 && (S = null),
        !(r("justknobx")._("3263") || t == null))
      ) {
        c++;
        var T = c;
        (u || (u = r("QuickPerformanceLogger"))).markerStart(d, 0, void 0, {
          cancelExisting: !0,
          cancelOnUnload: !0,
          timeoutMS: 6e4,
        });
        var D = e.isFreeform(),
          x = D ? e.getTitle() : String(e.getPresetFilters().prompt),
          $ = s._(/*BTDS*/ ""),
          P = o("AdsUniversalComposerViewSpecPayload").parseViewSpecAction(
            e.getAction(),
          ),
          N = o("AdsPETypeaheadAIFilterUtils").getIsViewSpecFastPath(e, b),
          M = e.getPresetFilters().id;
        u.markerAnnotate(d, {
          bool: { is_fast_path: N },
          string: {
            entry: D ? "query_submit" : "suggestion_click",
            preset_id: M,
          },
        });
        var w = S != null ? S : e.getImpressionSessionId(),
          A = o("AdsAISearchAttributionReceipt").mintAISearchReceipt(M, w),
          F = k({
            exposureID: w,
            isFreeform: D,
            isViewSpecFastPath: N,
            prompt: x,
            selectionInstanceID: A,
            wasPromoted: v,
          }),
          O = F.eventType,
          B = F.logData;
        (r("AdsInterfacesLogger").log({
          eventName: "aisf_v2_select_ai_search_option",
          eventCategory: "user_action",
          data: babelHelpers.extends(
            {},
            B,
            ((L = {}), (L.custom_event_type = O), L),
          ),
        }),
          r("AdsInterfacesLogger").log({
            eventName: "gen_ai_filter_recommendation_selected",
            eventCategory: "user_action",
            data: babelHelpers.extends(
              {},
              B,
              ((I = {}), (I.custom_event_type = M), I),
            ),
          }));
        var W = function (s) {
          var t,
            b = R(s, m, p, _, x, f, g);
          (u || (u = r("QuickPerformanceLogger"))).markerPoint(
            d,
            "table_applied",
          );
          var v = b.didApplyAction,
            S = b.engineRunId,
            L = b.filters,
            k = b.sortCriteria,
            I = b.summary,
            P = !v;
          if (
            (r("AdsInterfacesLogger").log({
              eventName: "aisf_v2_ai_search_completed",
              eventCategory: "user_action",
              data:
                ((t = {}),
                (t.search_string = x),
                (t.sub_session_id = A),
                (t.custom_event_type = P ? "empty" : "applied"),
                (t.message = "engine_run_id: " + S + ", " + E(b)),
                t),
            }),
            P)
          ) {
            if (
              ((u || (u = r("QuickPerformanceLogger"))).markerEnd(d, 33),
              (C == null ? void 0 : C(x)) === !0)
            ) {
              h == null || h(null);
              return;
            }
            h == null ||
              h({
                errorMessage: String($),
                filters: null,
                hasMAIBASort: !1,
                phase: o("AdsPETypeaheadAIFilterUtils").AITokenPhase.ERROR,
                prompt: x,
              });
            return;
          }
          var M =
              n != null
                ? o(
                    "AdsUniversalComposerAppliedViewSpec",
                  ).buildAppliedViewSpecInput(b, s, !N)
                : null,
            w = o(
              "AdsUniversalComposerViewSpecPayload",
            ).isEnumFilterSuggestionAction(e.getAction()),
            F =
              M != null &&
              !o("AdsUniversalComposerAppliedViewSpec").isEmptyAppliedViewSpec(
                M,
              ) &&
              !w;
          (h == null ||
            h({
              engineRunId: S === "" ? null : S,
              filters: L,
              hasMAIBASort: k.length > 0,
              isFilterSuggestion: N && w,
              isSummaryPending: F,
              isViewSpecFastPath: N,
              label: String(e.getTitle()),
              phase: o("AdsPETypeaheadAIFilterUtils").AITokenPhase.LOADING,
              prompt: x,
              summary: I,
            }),
            F || (u || (u = r("QuickPerformanceLogger"))).markerEnd(d, 2));
          var O = function (n) {
            if (y != null) {
              var t = D ? e.getTitle() : e.getPresetFilters().label;
              r("AdsPEUpdateRecentlyUsedFiltersAction").dispatch(
                {
                  adsSettingsID: y,
                  entriesToAdd: [
                    o(
                      "AdsPERecentlyUsedMAIBAUtils",
                    ).createRecentlyUsedTableActionEntry(String(t), s, n),
                  ],
                },
                {
                  line: "1090",
                  module: "AdsTableActionResultUtils.js",
                  moduleID: i.id,
                },
              );
            }
          };
          (F &&
            M != null &&
            n != null &&
            ((u || (u = r("QuickPerformanceLogger"))).markerPoint(
              d,
              "summary_start",
            ),
            n(
              { adAccountID: l, applied: M, prompt: x },
              {
                onCompleted: function (t) {
                  (O(t == null ? void 0 : t.summary),
                    T === c &&
                      (a == null || a(t == null ? void 0 : t.summary),
                      (u || (u = r("QuickPerformanceLogger"))).markerPoint(
                        d,
                        "summary_success",
                      ),
                      u.markerEnd(d, 2)));
                },
                onError: function (t) {
                  var e;
                  (O(null),
                    T === c &&
                      (a == null || a(null),
                      (u || (u = r("QuickPerformanceLogger"))).markerPoint(
                        d,
                        "summary_fail",
                      ),
                      u.markerEnd(d, 2),
                      r("AdsInterfacesLogger").log({
                        eventName: "aisf_v2_ai_search_error",
                        eventCategory: "errors",
                        data:
                          ((e = {}),
                          (e.search_string = x),
                          (e.error_name = t.name),
                          (e.message = "summary error: " + t.toString()),
                          e),
                      })));
                },
              },
            )),
            v &&
              (r("AdsPEPriorityViewSetEnabledAction").dispatch(
                { enabled: !1 },
                {
                  line: "1192",
                  module: "AdsTableActionResultUtils.js",
                  moduleID: i.id,
                },
              ),
              o(
                "AdsPEAISearchPriorityViewBridge",
              ).markPriorityViewDisabledByAISearch()),
            F || O(I));
        };
        if (P != null && N) {
          W(babelHelpers.extends({}, P, { engine_run_id: A }));
          return;
        }
        t(
          { adAccountID: l, prompt: x },
          {
            onCompleted: W,
            onError: function (t) {
              var e;
              (r("AdsInterfacesLogger").log({
                eventName: "aisf_v2_ai_search_error",
                eventCategory: "errors",
                data:
                  ((e = {}),
                  (e.search_string = x),
                  (e.error_name = t.name),
                  (e.message = "error: " + t.toString()),
                  e),
              }),
                h == null ||
                  h({
                    errorMessage: String($),
                    filters: null,
                    hasMAIBASort: !1,
                    phase: o("AdsPETypeaheadAIFilterUtils").AITokenPhase.ERROR,
                    prompt: x,
                  }),
                (u || (u = r("QuickPerformanceLogger"))).markerEnd(d, 3));
            },
          },
        );
      }
    }
    ((l.applyAdsTableActionResult = R), (l.handleAITableActionSelection = I));
  },
  226,
);

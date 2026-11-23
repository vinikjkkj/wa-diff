__d(
  "AdsPETypeaheadFilterTypeaheadUtils",
  [
    "AdFLEXConfig",
    "AdsGenericFilter",
    "AdsGenericFilterSet",
    "AdsPEFilterFields",
    "AdsPEFilterSearchUtils.react",
    "AdsPEQuickViewsUnsupportedFilterMetricsBlocklist",
    "AdsPESelectionFilterUtils",
    "AdsPETypeaheadCustomLabelValueSearchableEntry",
    "AdsPETypeaheadDeliveryStatusFilterSearchableEntry",
    "AdsPETypeaheadDeliveryStatusV2FilterSearchableEntry",
    "AdsPETypeaheadFilterFieldSearchableEntry",
    "AdsPETypeaheadFilterSearchSourcesUtil",
    "AdsPETypeaheadFuzzySearchSource",
    "AdsPETypeaheadIDFilterSearchableEntry",
    "AdsPETypeaheadNameFilterSearchableEntry",
    "AdsPETypeaheadPartialSearchSource",
    "AdsPETypeaheadSavedFilterSearchableEntry",
    "AdsPETypeaheadSavedFilterSectionsUtil",
    "AdsPETypeaheadSearchableEntryTypes",
    "CompositeSearchSource",
    "StaticSearchSource",
    "cr:39830",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["fields"];
    function s() {
      n("cr:39830") == null ||
        n("cr:39830").preloadPersonalizationFilterDataSource();
    }
    var u = 2,
      c = 3,
      d = 2,
      m = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.searchImpl = function (n, r) {
            e.prototype.searchImpl.call(
              this,
              n,
              function (e, t, n) {
                return r(
                  e.slice(
                    0,
                    o("AdsPETypeaheadSavedFilterSectionsUtil")
                      .MAX_ENTRIES_PER_TRIMMED_GROUP,
                  ),
                  t,
                  n,
                );
              },
              null,
            );
          }),
          t
        );
      })(r("StaticSearchSource")),
      p = ["HAS_PRODUCT_CATALOG_ID", "CAMPAIGN_GROUP_TYPE"];
    function _(e) {
      var t;
      return (t =
        n("cr:39830") == null
          ? void 0
          : n("cr:39830").buildPersonalizationFilterDataSource(e)) != null
        ? t
        : null;
    }
    function f(e) {
      var t = [],
        n = [];
      return (
        e.forEach(function (e) {
          e.getType() === o("AdsPETypeaheadSearchableEntryTypes").FIELD
            ? t.push(e)
            : n.push(e);
        }),
        t.sort(function (e, t) {
          if (e.getOrder() !== t.getOrder()) return e.getOrder() - t.getOrder();
          var n = e.getTitle().length,
            r = t.getTitle().length;
          return n !== r
            ? n - r
            : e.getUniqueID().localeCompare(t.getUniqueID());
        }),
        [].concat(n, t)
      );
    }
    function g(t, n, o) {
      return t.reduce(function (t, a) {
        if (a.isGroupType) {
          var i,
            l,
            s = a.config,
            u = s.fields,
            c = babelHelpers.objectWithoutPropertiesLoose(s, e),
            d = u
              .filter(function (e) {
                return !o.has(e.field.name);
              })
              .filter(Boolean)
              .map(function (e) {
                return r("AdsPETypeaheadFilterFieldSearchableEntry").create({
                  fieldConfig: e,
                  timezoneID: n,
                });
              });
          if (
            (i =
              r("AdFLEXConfig") == null ||
              (l = r("AdFLEXConfig").get()) == null ||
              l.searchFilterShouldSkipEmptyGroups == null
                ? void 0
                : l.searchFilterShouldSkipEmptyGroups(d)) != null &&
            i
          )
            return t;
          t.push({
            group: babelHelpers.extends({ entries: d }, c),
            isGroupItem: !0,
            tooltipText: a.tooltipText,
          });
        } else if (!o.has(a.config.field.name)) {
          var m = r("AdsPETypeaheadFilterFieldSearchableEntry").create({
            fieldConfig: a.config,
            timezoneID: n,
          });
          t.push({ entry: m, isGroupItem: !1 });
        }
        return t;
      }, []);
    }
    function h(e, t, n, a, i, l, s, u) {
      return e != null
        ? e
        : o(
            "AdsPETypeaheadFilterSearchSourcesUtil",
          ).getAllSearchableFilterSearchSources(
            r("AdsPETypeaheadNameFilterSearchableEntry"),
            r("AdsPETypeaheadDeliveryStatusFilterSearchableEntry"),
            r("AdsPETypeaheadDeliveryStatusV2FilterSearchableEntry"),
            r("AdsPETypeaheadIDFilterSearchableEntry"),
            {
              isPE: !0,
              isAdsManager: s != null ? s : !1,
              isInAiSearchV2: u != null ? u : !1,
              showLowestLevelDeliveryFilter: !1,
              enableSearchableDeliveryFilter: !0,
              suggestPageID: !1,
              suggestPageName: !1,
              adAccountID: t,
              currentLevel: l,
              enableAutoSuggestedFullName: n,
            },
            [],
            a,
            i,
          );
    }
    function y(e) {
      if (
        o("AdsPEFilterSearchUtils.react").isUnrenderableUnscopedFilterField(
          e.field.name,
        ) ||
        e.field.name.startsWith("ad.") ||
        e.field.name.startsWith("adset.")
      )
        return !1;
      var t = e.field.name.indexOf("."),
        n = t !== -1 ? e.field.name.substring(t + 1) : e.field.name;
      return !o(
        "AdsPEQuickViewsUnsupportedFilterMetricsBlocklist",
      ).blocklistUnsupportedFilterMetrics.has(n);
    }
    function C(e, t, n) {
      if (n) {
        var r,
          o =
            e == null || (r = e.split(",")) == null
              ? void 0
              : r
                  .map(function (e) {
                    return e.trim();
                  })
                  .filter(function (e) {
                    return e !== "";
                  });
        if ((o == null ? void 0 : o.length) === 1)
          return [t.containsAllNameFilterSearchSource];
        if ((o == null ? void 0 : o.length) > 1)
          return [t.allWithAnyOfNameFiltersSearchSource];
      }
      return [t.nameFilter];
    }
    function b(e, t) {
      return e.trim().length > u ? [t.autoSuggestedLabelSearchSource] : [];
    }
    function v(e, t, n) {
      var r = [];
      return (
        e.trim().length > d && r.push(t),
        e.trim().length > c && r.push(n),
        r
      );
    }
    function S(e, t, n, r, o, a, i, l, s) {
      if (i && !l)
        return []
          .concat(C(e, t, r), [s, t.autoSuggestedNameFilter, t.maibaFilter, n])
          .filter(Boolean);
      var u = [].concat(C(e, t, r), b(e, t), [
        s,
        t.deliveryFilter,
        t.autoSuggestedNameFilter,
      ]);
      return (
        u.push(t.oneClickFilter),
        u.push.apply(
          u,
          [t.maibaFilter, t.actionCategoryFilters, t.otherFilters, n].concat(
            v(e, a, o),
          ),
        ),
        u.filter(Boolean)
      );
    }
    var R = "fuzzy_",
      L = "partial_";
    function E(e) {
      return e.startsWith(R)
        ? e.slice(R.length)
        : e.startsWith(L)
          ? e.slice(L.length)
          : e;
    }
    function k(e) {
      var t = new Set(),
        n = [];
      for (var r of e) {
        var o = E(r.getUniqueID());
        t.has(o) || (t.add(o), n.push(r));
      }
      return n;
    }
    var I = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.searchImpl = function (n, r, o) {
          e.prototype.searchImpl.call(
            this,
            n,
            function (e, t, n) {
              r(k(e), t, n);
            },
            o,
          );
        }),
        (n.getBootstrappedEntries = function (n) {
          return e.prototype.getBootstrappedEntries.call(this, function (e) {
            n(k(e));
          });
        }),
        t
      );
    })(r("CompositeSearchSource"));
    function T(e, t, n, a, i, l, s, _, f, g, h) {
      (l === void 0 && (l = ""),
        s === void 0 && (s = !0),
        _ === void 0 && (_ = null),
        f === void 0 && (f = null),
        g === void 0 && (g = !1),
        h === void 0 && (h = !1));
      var C = e,
        b = Object.values(t)
          .filter(function (e) {
            return e.applyOnly !== !0 && !n.has(e.field.name);
          })
          .filter(y),
        v = o("AdsPETypeaheadFilterSearchSourcesUtil").buildFuzzySearchEntries(
          b,
          a,
          _,
          "fuzzy_",
        ),
        R = o("AdsPETypeaheadFilterSearchSourcesUtil").buildFuzzySearchEntries(
          b,
          a,
          _,
          "partial_",
        ),
        L =
          s && v.length > 0 && l.trim().length > c
            ? new (r("AdsPETypeaheadFuzzySearchSource"))(v)
            : null,
        E =
          s && R.length > 0 && l.trim().length > d
            ? new (r("AdsPETypeaheadPartialSearchSource"))(R)
            : null,
        k = r("AdsPETypeaheadSavedFilterSearchableEntry").create({
          savedFilterSet: i,
        }),
        T =
          f != null
            ? new (r("CompositeSearchSource"))([
                new (r("StaticSearchSource"))([k], null, !0, !1),
                f,
              ])
            : new (r("StaticSearchSource"))(
                [k].concat(
                  Object.values(t)
                    .filter(function (e) {
                      return (
                        (e.applyOnly !== !0 || p.includes(e.field.name)) &&
                        !n.has(e.field.name)
                      );
                    })
                    .filter(y)
                    .map(function (e) {
                      return r(
                        "AdsPETypeaheadFilterFieldSearchableEntry",
                      ).create({ fieldConfig: e, timezoneID: a });
                    }),
                ),
                null,
                !0,
                !1,
              ),
        D =
          l.trim().length > u
            ? new m(
                r("AdsPETypeaheadCustomLabelValueSearchableEntry").createAll(t),
                null,
                !0,
                !1,
              )
            : null,
        x = S(l, C, T, s, L, E, g, h, D);
      return f != null ? new I(x) : new (r("CompositeSearchSource"))(x);
    }
    function D(e, t) {
      var n = o("AdsPESelectionFilterUtils").mergeSelectionFilter(e, t),
        a = n.mergedFilterSet,
        i = n.shouldDisable;
      return {
        text: o("AdsPESelectionFilterUtils").label,
        disabled: i,
        filterSet:
          a != null
            ? a
            : new (r("AdsGenericFilterSet"))([
                new (r("AdsGenericFilter"))(
                  r("AdsPEFilterFields").CAMPAIGN_GROUP_SELECTED,
                  "IN",
                  [],
                ),
              ]),
      };
    }
    ((l.preloadPersonalizationFilterDataSource = s),
      (l.FUZZY_SEARCH_CHARACTER_THRESHOLD = c),
      (l.PARTIAL_SEARCH_CHARACTER_THRESHOLD = d),
      (l.buildPersonalizationFilterDataSource = _),
      (l.sortFuzzySearchEntries = f),
      (l.getAvailableFilterFields = g),
      (l.getBaseSearchSources = h),
      (l.shouldIncludeFieldConfig = y),
      (l.getComputedSearchSources = T),
      (l.getSelectionFilter = D));
  },
  98,
);

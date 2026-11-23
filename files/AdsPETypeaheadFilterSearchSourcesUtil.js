__d(
  "AdsPETypeaheadFilterSearchSourcesUtil",
  [
    "AdsAutoSuggestedAdgroupNameSearchSource",
    "AdsAutoSuggestedCampaignGroupNameSearchSource",
    "AdsAutoSuggestedCampaignNameSearchSource",
    "AdsMgmt2026H1ExperimentUtils",
    "AdsMgmtFlow53MR2025H2GatingUtils",
    "AdsObjectTypes",
    "AdsOpportunityGuidanceActionCategories",
    "AdsPEAISearchFilter2026H1GatingUtils",
    "AdsPEAISearchFilter2026H2GatingUtils",
    "AdsPETypeAheadAutoSuggestedLabelFilterSearchSource",
    "AdsPETypeaheadActionCategoryFilterSearchableEntry",
    "AdsPETypeaheadContainsAllNameFilterSearchableEntry",
    "AdsPETypeaheadDeliveryStatusV2FilterSearchableEntry",
    "AdsPETypeaheadFuzzyFilterSearchableEntry",
    "AdsPETypeaheadMAIBAFilterSearchableEntry",
    "AdsPETypeaheadMAIBAPresetFilters",
    "AdsPETypeaheadOneClickFilterSearchableEntry",
    "AdsPETypeaheadSuggestedFilterFieldSearchableEntry",
    "AdsReportBuilderFilter",
    "AdsUniversalComposerAIMode2026H1GatingUtils",
    "AdsUniversalComposerCarrierSearchSource",
    "AdsUniversalComposerSemanticSearchSource",
    "AdsUniversalComposerSuggestSearchSource",
    "CompositeSearchSource",
    "MAIBAFreeformSearchSource",
    "MatchAllSearchSource",
    "StaticSearchSource",
    "isEmpty",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        r("AdsObjectTypes").CAMPAIGN_GROUP,
        r("AdsObjectTypes").CAMPAIGN,
        r("AdsObjectTypes").ADGROUP,
      ],
      u = [
        "active",
        "inactive",
        "scheduled",
        "not_delivering",
        "completed",
        "rejected",
        "pending_review",
        "not_published",
        "archived",
      ],
      c = [
        "active",
        "deleted",
        "inactive",
        "off",
        "pending",
        "draft",
        "completed",
      ],
      d = [
        o("AdsPETypeaheadActionCategoryFilterSearchableEntry")
          .ActionFilterFieldObjectLevel.CAMPAIGN_GROUP,
        o("AdsPETypeaheadActionCategoryFilterSearchableEntry")
          .ActionFilterFieldObjectLevel.CAMPAIGN,
        o("AdsPETypeaheadActionCategoryFilterSearchableEntry")
          .ActionFilterFieldObjectLevel.ADGROUP,
      ];
    function m() {
      var e = Object.keys(r("AdsOpportunityGuidanceActionCategories")).filter(
        function (e) {
          return e !== "OTHER_RECOMMENDATIONS";
        },
      );
      return e.flatMap(function (e) {
        return d.map(function (t) {
          return o(
            "AdsPETypeaheadActionCategoryFilterSearchableEntry",
          ).AdsPETypeaheadActionCategoryFilterSearchableEntry.create({
            actionCategory: e,
            adObjectLevel: t,
          });
        });
      });
    }
    function p(e) {
      return (
        e === void 0 && (e = ""),
        c.flatMap(function (t) {
          return s.map(function (n) {
            return r(
              "AdsPETypeaheadDeliveryStatusV2FilterSearchableEntry",
            ).create({ objectType: n, deliveryStatus: t }, e);
          });
        })
      );
    }
    function _(e, t, n, o) {
      o === void 0 && (o = "");
      var a = e
          .filter(function (e) {
            return e.text != null && e.text.toString().length > 0;
          })
          .map(function (e) {
            return r("AdsPETypeaheadFuzzyFilterSearchableEntry").create(
              { fieldConfig: e, timezoneID: t },
              o,
            );
          }),
        i = (n != null ? n : [])
          .filter(function (e) {
            return e.text != null && e.text.toString().length > 0;
          })
          .map(function (e) {
            return r("AdsPETypeaheadOneClickFilterSearchableEntry").create(
              { fieldConfig: e, timezoneID: t },
              o,
            );
          }),
        l = p(o);
      return [].concat(l, i, a);
    }
    function f(e, t) {
      return t.create({ objectType: e });
    }
    function g(e, t, n) {
      var a = s,
        i = a.concat(t ? [o("AdsReportBuilderFilter").PAGE] : []);
      if (n) {
        var l = [];
        for (var u of i) (l.push(f(u, e)), l.push(f(u, n)));
        return new (r("MatchAllSearchSource"))(l);
      }
      return new (r("MatchAllSearchSource"))(
        i.map(function (t) {
          return f(t, e);
        }),
      );
    }
    function h(e) {
      return e == null
        ? null
        : new (r("AdsPETypeAheadAutoSuggestedLabelFilterSearchSource"))(e);
    }
    function y(e, t, n) {
      if (e == null) return null;
      if (t) {
        if (n === "campaign") return C(e);
        if (
          n === "ad_set" &&
          o("AdsMgmt2026H1ExperimentUtils").getIsAccountInFullNameTypeahead()
        )
          return b(e);
        if (
          n === "ad" &&
          o("AdsMgmt2026H1ExperimentUtils").getIsAccountInFullNameTypeahead()
        )
          return v(e);
      }
      return null;
    }
    function C(e) {
      return new (r("AdsAutoSuggestedCampaignGroupNameSearchSource"))({
        accountID: e,
      });
    }
    function b(e) {
      return new (r("AdsAutoSuggestedCampaignNameSearchSource"))({
        accountID: e,
      });
    }
    function v(e) {
      return new (r("AdsAutoSuggestedAdgroupNameSearchSource"))({
        accountID: e,
      });
    }
    function S() {
      return new (r("StaticSearchSource"))(m(), null, !0, !1);
    }
    function R(e, t) {
      return new (r("StaticSearchSource"))(
        u.reduce(function (n, r) {
          return n.concat.apply(
            n,
            (t
              ? [e.create({ objectType: "LOWEST_LEVEL", deliveryStatus: r })]
              : []
            ).concat([
              s.map(function (t) {
                return e.create({ objectType: t, deliveryStatus: r });
              }),
            ]),
          );
        }, []),
        null,
        !0,
        !1,
      );
    }
    function L(e) {
      return new (r("StaticSearchSource"))(
        c.reduce(function (t, n) {
          return t.concat(
            s.map(function (t) {
              return e.create({ objectType: t, deliveryStatus: n });
            }),
          );
        }, []),
        null,
        !0,
        !1,
      );
    }
    function E(e, t) {
      var n = s;
      return new (r("MatchAllSearchSource"))(
        n.concat(t ? [o("AdsReportBuilderFilter").PAGE] : []).map(function (t) {
          return e.create({ objectType: t });
        }),
      );
    }
    function k(e) {
      return new (r("MatchAllSearchSource"))(
        e.map(function (e) {
          return r("AdsPETypeaheadSuggestedFilterFieldSearchableEntry").create({
            fieldConfig: e,
          });
        }),
      );
    }
    function I(e, t, n, a) {
      var i = o(
          "AdsPEAISearchFilter2026H2GatingUtils",
        ).getShouldShowExpandedPresets(a),
        l = [
          o("AdsPETypeaheadMAIBAPresetFilters").getTopPerformingFilters(e, a),
          o("AdsPETypeaheadMAIBAPresetFilters").getBottomPerformingFilters(
            e,
            a,
          ),
          o("AdsPETypeaheadMAIBAPresetFilters").getLowCostPerResultFilters(e),
        ].concat(
          i
            ? [
                o("AdsPETypeaheadMAIBAPresetFilters").getHighSpendFilters(e, a),
                o("AdsPETypeaheadMAIBAPresetFilters").getHighResultsFilters(
                  e,
                  a,
                ),
                o(
                  "AdsPETypeaheadMAIBAPresetFilters",
                ).getPerformanceOutliersFilters(e, a),
              ]
            : [],
        ),
        s = t
          ? new (r("AdsUniversalComposerSuggestSearchSource"))(a)
          : new (r("StaticSearchSource"))(
              l.map(function (e) {
                return r(
                  "AdsPETypeaheadMAIBAFilterSearchableEntry",
                ).createFromPreset(e);
              }),
              null,
              !0,
              !1,
            ),
        u = [
          r(
            "AdsPETypeaheadMAIBAFilterSearchableEntry",
          ).createFreeformTemplate(),
        ],
        c = new (r("MAIBAFreeformSearchSource"))(u, e, a),
        d = t
          ? [
              new (r("AdsUniversalComposerCarrierSearchSource"))(
                e,
                function () {
                  return n;
                },
                {
                  isFilterValueCompositionOn: function () {
                    return (
                      n &&
                      o(
                        "AdsPEAISearchFilter2026H2GatingUtils",
                      ).getIsUCMilestone3Enabled()
                    );
                  },
                  isFilterValueContinuationsOnly: function () {
                    return (
                      n &&
                      o(
                        "AdsUniversalComposerAIMode2026H1GatingUtils",
                      ).getIsInUCFilterValueContinuationsOnly()
                    );
                  },
                },
              ),
            ]
          : [],
        m = t
          ? [
              new (r("AdsUniversalComposerSemanticSearchSource"))(
                a,
                function () {
                  return o(
                    "AdsPEAISearchFilter2026H2GatingUtils",
                  ).getIsUCSemanticSuggestionsEnabled(n);
                },
              ),
            ]
          : [];
      return new (r("CompositeSearchSource"))(
        [s].concat(m, d, [c]),
        t ? { allowClownyReflow: !0 } : null,
      );
    }
    function T(e, t) {
      return new (r("StaticSearchSource"))(
        [].concat(
          e.map(function (e) {
            return r("AdsPETypeaheadOneClickFilterSearchableEntry").create({
              fieldConfig: e,
              timezoneID: t,
            });
          }),
        ),
        null,
        !0,
        !1,
      );
    }
    function D(t, n, a, i, l, s, u, c) {
      var d, m;
      (l === void 0 &&
        (l = {
          isPE: !0,
          isAdsManager: !1,
          showLowestLevelDeliveryFilter: !1,
          enableSearchableDeliveryFilter: !0,
          suggestPageID: !1,
          suggestPageName: !1,
          adAccountID: null,
          currentLevel: null,
          enableAutoSuggestedFullName: !1,
        }),
        s === void 0 && (s = []),
        u === void 0 && (u = null),
        c === void 0 && (c = null));
      var p = l,
        _ = p.adAccountID,
        f = p.enableAutoSuggestedFullName,
        C = t ? g(t, l.suggestPageName) : null,
        b =
          l.isPE === !0
            ? g(
                r("AdsPETypeaheadContainsAllNameFilterSearchableEntry"),
                l.suggestPageName,
              )
            : null,
        v =
          l.isPE === !0
            ? g(
                r("AdsPETypeaheadContainsAllNameFilterSearchableEntry"),
                l.suggestPageName,
                t,
              )
            : null,
        D = i ? E(i, l.suggestPageID) : null,
        x = null;
      a && l.isPE
        ? (x = L(a))
        : l.enableSearchableDeliveryFilter &&
          n &&
          (x = R(n, l.showLowestLevelDeliveryFilter));
      var $ = (e || (e = r("isEmpty")))(s) ? null : k(s),
        P = h(_),
        N = y(_, f, l.currentLevel),
        M = u != null && c != null ? T(u, c) : null,
        w =
          l.isPE &&
          o(
            "AdsMgmtFlow53MR2025H2GatingUtils",
          ).getIsAccountInActionFilterUpdatesH22025WithExposure()
            ? S()
            : null,
        A = (d = l.isAdsManager) != null ? d : !1,
        F = o(
          "AdsUniversalComposerAIMode2026H1GatingUtils",
        ).getIsInUniversalComposerAIModeWithoutExposure(A),
        O = (m = l.isInAiSearchV2) != null ? m : !1,
        B =
          l.isPE &&
          !r("justknobx")._("3263") &&
          (o("AdsPEAISearchFilter2026H1GatingUtils").getIsInGenAISearchSettings(
            A,
          ) ||
            F ||
            O)
            ? I(l.currentLevel, O, A, O)
            : null;
      return {
        nameFilter: C,
        containsAllNameFilterSearchSource: b,
        autoSuggestedLabelSearchSource: P,
        allWithAnyOfNameFiltersSearchSource: v,
        deliveryFilter: x,
        idFilter: D,
        maibaFilter: B,
        otherFilters: $,
        autoSuggestedNameFilter: N,
        actionCategoryFilters: w,
        oneClickFilter: M,
      };
    }
    ((l.buildActionCategoryEntries = m),
      (l.buildDeliveryStatusEntries = p),
      (l.buildFuzzySearchEntries = _),
      (l.getNameFilterSearchSource = g),
      (l.getAutoSuggestedLabelSearchSource = h),
      (l.getOtherSuggestedFilterSearchSources = k),
      (l.getAllSearchableFilterSearchSources = D));
  },
  98,
);

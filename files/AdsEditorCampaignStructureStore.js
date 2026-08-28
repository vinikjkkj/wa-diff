__d(
  "AdsEditorCampaignStructureStore",
  [
    "AdDraftFragmentSource",
    "AdsAdgroupListBatchLoadedDataActionFlux",
    "AdsApplicationUtils",
    "AdsCampaignListBatchLoadedActionFlux",
    "AdsCopyCopyCompletedDataActionFlux",
    "AdsCreateCompletedActionFlux",
    "AdsCrepeNavigationUtils",
    "AdsDataAtom",
    "AdsDraftGroupByUtils",
    "AdsDuplicationOpenHiddenEditorActionFlux",
    "AdsDuplicationPreloadEditorOnHoverExperimentUtils",
    "AdsEditingAdgroupEditorContext",
    "AdsEditingCampaignEditorContext",
    "AdsEditingCampaignGroupEditorContext",
    "AdsExperimentsToolbarTestButtonModalActionFlux",
    "AdsInterfacesRouteUpdateParamsDataActionFlux",
    "AdsMgmtDrawerToggleDataActionFlux",
    "AdsMgmtDrawerToggleTabActionFlux",
    "AdsPEAdgroupSelectionSelectAllActionFlux",
    "AdsPECampaignGroupSelectionSelectAllActionFlux",
    "AdsPECampaignSelectionSelectAllActionFlux",
    "AdsPEFluxAdSelectionIdClickedActionFlux",
    "AdsPEFluxCampaignGroupSelectionIdClickedActionFlux",
    "AdsPEFluxCampaignSelectionIdClickedActionFlux",
    "AdsPERouterHelper",
    "AdsSelectorUtils",
    "FluxReduceStore",
    "distinctArray",
    "immutable",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = "campaignGroupIDs",
      p = "selectedIDs",
      _ = "currentLevel",
      f = "packageID",
      g = r("immutable").Record(
        ((e = {}),
        (e[m] = r("immutable").List([])),
        (e[p] = []),
        (e[_] = "L3"),
        (e[f] = r("immutable").List([])),
        e),
      ),
      h = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getInitialState = function () {
            return g();
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsAdgroupListBatchLoadedDataActionFlux").actionType,
              o("AdsCampaignListBatchLoadedActionFlux").actionType,
              o("AdsCopyCopyCompletedDataActionFlux").actionType,
              o("AdsCreateCompletedActionFlux").actionType,
              o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType,
              o("AdsMgmtDrawerToggleDataActionFlux").actionType,
              o("AdsMgmtDrawerToggleTabActionFlux").actionType,
              o("AdsPEAdgroupSelectionSelectAllActionFlux").actionType,
              o("AdsPECampaignGroupSelectionSelectAllActionFlux").actionType,
              o("AdsPECampaignSelectionSelectAllActionFlux").actionType,
              o("AdsPEFluxAdSelectionIdClickedActionFlux").actionType,
              o("AdsPEFluxCampaignGroupSelectionIdClickedActionFlux")
                .actionType,
              o("AdsPEFluxCampaignSelectionIdClickedActionFlux").actionType,
              o("AdsExperimentsToolbarTestButtonModalActionFlux").actionType,
              o("AdsDuplicationOpenHiddenEditorActionFlux").actionType,
            ];
          }),
          (n.__getDependencyStores = function () {
            return [];
          }),
          (n.reduce = function (t, n) {
            var e = n.action;
            switch (
              ((d || (d = r("AdsDataAtom"))).isDispatching() &&
                this.getDispatcher().waitFor(
                  this.getDependencyDispatchTokens(),
                ),
              e.type)
            ) {
              case o("AdsCampaignListBatchLoadedActionFlux").actionType:
              case o("AdsAdgroupListBatchLoadedDataActionFlux").actionType: {
                var a = r("AdsPERouterHelper").getRouter().getParams();
                if (a.tray) {
                  var i = v(t);
                  return ((i = i.set(_, D(a.section))), E(i, e));
                }
                return t;
              }
              case o("AdsExperimentsToolbarTestButtonModalActionFlux")
                .actionType:
                return e.showModal ? v(t) : t;
              case o("AdsDuplicationOpenHiddenEditorActionFlux").actionType:
                return o(
                  "AdsDuplicationPreloadEditorOnHoverExperimentUtils",
                ).isEligibleForPreloadEditorOnHoverSilent() ||
                  o(
                    "AdsDuplicationPreloadEditorOnHoverExperimentUtils",
                  ).isEligibleForPreloadEditorOnSelectSilent()
                  ? e.fromInitialLoad === !0
                    ? b(t)
                    : v(t)
                  : t;
              case o("AdsMgmtDrawerToggleTabActionFlux").actionType:
                return t.set(p, T(t));
              case o("AdsMgmtDrawerToggleDataActionFlux").actionType:
              case o("AdsPEFluxCampaignGroupSelectionIdClickedActionFlux")
                .actionType:
              case o("AdsPECampaignGroupSelectionSelectAllActionFlux")
                .actionType:
                return S(t);
              case o("AdsPEFluxCampaignSelectionIdClickedActionFlux")
                .actionType:
              case o("AdsPEFluxAdSelectionIdClickedActionFlux").actionType:
              case o("AdsPECampaignSelectionSelectAllActionFlux").actionType:
              case o("AdsPEAdgroupSelectionSelectAllActionFlux").actionType:
                return R(t);
              case o("AdsInterfacesRouteUpdateParamsDataActionFlux")
                .actionType: {
                var l,
                  s = e.data || {},
                  u = s.context || {},
                  c = (l = u.shouldEditorBeHidden) != null ? l : !1;
                return L(t, c);
              }
              case o("AdsCopyCopyCompletedDataActionFlux").actionType:
                return I(t, e);
              case o("AdsCreateCompletedActionFlux").actionType:
                return k(t, e);
              default:
                return t;
            }
          }),
          t
        );
      })(r("FluxReduceStore"));
    h.__moduleID = i.id;
    function y() {
      return (
        (d || (d = r("AdsDataAtom"))).waitFor(
          (s || (s = o("AdsSelectorUtils"))).getStoreDispatchTokens(
            [
              r("AdsEditingCampaignEditorContext")
                .selectedCampaignGroupIDsSelector,
            ],
            r("AdsEditingCampaignEditorContext"),
          ),
        ),
        d.waitFor(
          s.getStoreDispatchTokens(
            [
              r("AdsEditingAdgroupEditorContext")
                .selectedCampaignGroupIDsSelector,
            ],
            r("AdsEditingAdgroupEditorContext"),
          ),
        ),
        (u || (u = r("distinctArray")))(
          r("AdsEditingCampaignEditorContext")
            .selectedCampaignGroupIDsSelector(
              r("AdsEditingCampaignEditorContext"),
            )
            .concat(
              r(
                "AdsEditingAdgroupEditorContext",
              ).selectedCampaignGroupIDsSelector(
                r("AdsEditingAdgroupEditorContext"),
              ),
            ),
        )
      );
    }
    function C() {
      var e;
      return (
        (d || (d = r("AdsDataAtom"))).waitFor(
          (s || (s = o("AdsSelectorUtils"))).getStoreDispatchTokens(
            [
              r("AdsEditingCampaignGroupEditorContext")
                .selectedCampaignGroupsSelector,
            ],
            r("AdsEditingCampaignGroupEditorContext"),
          ),
        ),
        Array(
          (e = r("AdsEditingCampaignGroupEditorContext")
            .selectedCampaignGroupsSelector(
              r("AdsEditingCampaignGroupEditorContext"),
            )
            .at(0)) == null || (e = e.ad_creation_package_config) == null
            ? void 0
            : e.id,
        )
      );
    }
    function b(e) {
      var t = r("AdsPERouterHelper").getRouter().getParams(),
        n = t.selected_campaign_ids;
      return (
        n && n.size === 0 && (n = y()),
        e.set(m, r("immutable").List(n)).set(p, T(e))
      );
    }
    function v(e) {
      var t = e.campaignGroupIDs;
      return t.size === 0 ? S(e) : e;
    }
    function S(e) {
      (d || (d = r("AdsDataAtom"))).waitFor(
        (s || (s = o("AdsSelectorUtils"))).getStoreDispatchTokens(
          [
            r("AdsEditingCampaignGroupEditorContext")
              .selectedCampaignGroupIDsSelector,
          ],
          r("AdsEditingCampaignGroupEditorContext"),
        ),
      );
      var t = r(
          "AdsEditingCampaignGroupEditorContext",
        ).selectedCampaignGroupIDsSelector(
          r("AdsEditingCampaignGroupEditorContext"),
        ),
        n = C();
      return e
        .set(m, r("immutable").List(t))
        .set(f, r("immutable").List(n))
        .set(p, T(e));
    }
    function R(e) {
      var t = e.get(m);
      return e.set(m, r("immutable").List(t.concat(y()).toSet())).set(p, T(e));
    }
    function L(e, t) {
      var n = e;
      if (o("AdsApplicationUtils").isPowerEditor()) {
        var a = r("AdsPERouterHelper").getRouter().getParams(),
          i = o("AdsCrepeNavigationUtils").isInCreationPackageFlow(a.section);
        if (!a.tray && !i) return g();
        if (a.selected_campaign_ids && a.selected_campaign_ids.size > 0)
          if (t) n = e.set(m, r("immutable").List([]));
          else {
            var l = e.get(m);
            n = e.set(
              m,
              i
                ? a.selected_campaign_ids
                : l.concat(
                    r("immutable").List(
                      a.selected_campaign_ids.filter(function (e) {
                        return !l.includes(e);
                      }),
                    ),
                  ),
            );
          }
        n = n.set(_, D(a.section));
      }
      return n.set(p, T(n));
    }
    function E(e, t) {
      var n = function (t) {
          return t == null || t.length === 0;
        },
        r = new Set();
      for (var o of t.responses) {
        var a = o[0],
          i = o[1];
        e.campaignGroupIDs.contains(a) && n(i) && r.add(a);
      }
      return r.size > 0
        ? e.set(
            m,
            e.campaignGroupIDs.filter(function (e) {
              return !r.has(e);
            }),
          )
        : e;
    }
    function k(e, t) {
      if (t.campaignGroupIDs) {
        var n =
            t.creationSource ===
              r("AdDraftFragmentSource").CLICK_QUICK_CREATE ||
            t.creationSource ===
              r("AdDraftFragmentSource").CAMPAIGN_TEMPLATE_CREATION,
          o = n
            ? r("immutable").List(t.campaignGroupIDs)
            : e.get(m).concat(t.campaignGroupIDs);
        return e.set(m, o);
      }
      return e.set(m, e.get(m).concat(r("immutable").List(y())));
    }
    function I(e, t) {
      var n = o("AdsDraftGroupByUtils").groupAdObjectIDsByLevel(t.fragments),
        a = [];
      if ((c || (c = r("isEmpty")))(n.campaign)) {
        var i = t.newParentCampaignGroupIds;
        a = i != null && i.length > 0 ? i : y();
      } else a = n.campaign;
      return t.shouldKeepOriginalsInCampaignTree
        ? e.set(
            m,
            r("immutable").List(
              (u || (u = r("distinctArray")))(e.get(m).toArray().concat(a)),
            ),
          )
        : e.set(m, r("immutable").List(a));
    }
    function T(e) {
      if (o("AdsApplicationUtils").isPowerEditor()) {
        var t,
          n,
          a,
          i = r("AdsPERouterHelper").getRouter().getParams(),
          l = i.section,
          s = i.selected_ad_ids,
          u = i.selected_adset_ids,
          c = i.selected_campaign_ids,
          d = (t = s == null ? void 0 : s.toArray()) != null ? t : [],
          m = (n = u == null ? void 0 : u.toArray()) != null ? n : [],
          p = (a = c == null ? void 0 : c.toArray()) != null ? a : [];
        if (l === "CAMPAIGN_OVERVIEW") {
          if (d.length > 0) return d;
          if (m.length > 0) return m;
          if (p.length > 0) return p;
        }
        return l === "L3" ? p : l === "L2" ? m : l === "L1" ? d : e.selectedIDs;
      }
      return e.selectedIDs;
    }
    function D(e) {
      if (e === "CAMPAIGN_OVERVIEW") {
        var t = r("AdsPERouterHelper").getRouter().getParams(),
          n = t.selected_ad_ids,
          o = t.selected_adset_ids,
          a = t.selected_campaign_ids;
        if ((n == null ? void 0 : n.size) > 0) return "ad";
        if ((o == null ? void 0 : o.size) > 0) return "ad_set";
        if ((a == null ? void 0 : a.size) > 0) return "campaign";
      }
      switch (e) {
        case "L3":
          return "campaign";
        case "L2":
          return "ad_set";
        case "L1":
          return "ad";
      }
      return "campaign";
    }
    var x = new h(d || (d = r("AdsDataAtom")));
    l.default = x;
  },
  98,
);

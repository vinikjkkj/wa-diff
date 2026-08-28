__d(
  "AdsMgmtOpenTrayStore",
  [
    "AdsCampaignStructureConstants",
    "AdsDataAtom",
    "AdsDraftDraftFragmentBatchDeletedDataActionFlux",
    "AdsDuplicationOpenHiddenEditorActionFlux",
    "AdsDuplicationPreloadEditorOnHoverExperimentUtils",
    "AdsEditorSelectedIDsSelector",
    "AdsGetAvailableIDsSelectors",
    "AdsInsightsTableViewStore",
    "AdsInterfacesRouteUpdateParamsDataActionFlux",
    "AdsMgmtDrawerUtils",
    "AdsMgmtInitialDataFetchStateProvider",
    "AdsObjectTypeUtils",
    "AdsPEAdgroupSelectionSelectAllActionFlux",
    "AdsPECampaignGroupSelectionSelectAllActionFlux",
    "AdsPECampaignSelectionSelectAllActionFlux",
    "AdsPEFluxAdSelectionIdClickedActionFlux",
    "AdsPEFluxCampaignGroupSelectionIdClickedActionFlux",
    "AdsPEFluxCampaignSelectionIdClickedActionFlux",
    "AdsPENavSectionToAvailableIDStoreMap",
    "AdsPENavigationUtils",
    "AdsPERouterHelper",
    "AdsSelectionLevelSelectors",
    "AdsSelectorUtils",
    "FBLogger",
    "FluxStore",
    "adsPEManageAdsSectionSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        goals: "GOALS_DRAWER",
        history: "ACTIVITY_HISTORY_DRAWER",
        edit: "EDITOR_DRAWER",
        insights: "INSIGHTS_DRAWER",
      },
      c = (function (t) {
        function n() {
          var e;
          return (
            (e = t.call(this, s || (s = r("AdsDataAtom"))) || this),
            (e.$_AdsMgmtOpenTrayStore$p_1 = null),
            (e.$_AdsMgmtOpenTrayStore$p_2 = null),
            (e.$_AdsMgmtOpenTrayStore$p_3 = null),
            (e.$_AdsMgmtOpenTrayStore$p_4 = !1),
            (e.$_AdsMgmtOpenTrayStore$p_6 = !1),
            (e.$_AdsMgmtOpenTrayStore$p_7 = !1),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getTrayState = function () {
            return (o(
              "AdsDuplicationPreloadEditorOnHoverExperimentUtils",
            ).isEligibleForPreloadEditorOnHoverSilent() ||
              o(
                "AdsDuplicationPreloadEditorOnHoverExperimentUtils",
              ).isEligibleForPreloadEditorOnSelectSilent()) &&
              this.$_AdsMgmtOpenTrayStore$p_6 === !0
              ? null
              : this.$_AdsMgmtOpenTrayStore$p_1;
          }),
          (a.getTreeNavState = function () {
            return this.$_AdsMgmtOpenTrayStore$p_4;
          }),
          (a.getPreviousOpenTray = function () {
            return this.$_AdsMgmtOpenTrayStore$p_2;
          }),
          (a.getIsEditorHidden = function () {
            return this.$_AdsMgmtOpenTrayStore$p_6;
          }),
          (a.getIsCampaignStructurePanelOpen = function () {
            return this.$_AdsMgmtOpenTrayStore$p_4;
          }),
          (a.getDefaultOpenTray = function () {
            var t = this.$_AdsMgmtOpenTrayStore$p_2;
            return t && this.$_AdsMgmtOpenTrayStore$p_8(t)
              ? t
              : ((s || (s = r("AdsDataAtom"))).isDispatching() &&
                  (s || (s = r("AdsDataAtom"))).waitFor(
                    (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
                      r("adsPEManageAdsSectionSelector"),
                    ]),
                  ),
                this.$_AdsMgmtOpenTrayStore$p_9() === "ad_account"
                  ? "ACTIVITY_HISTORY_DRAWER"
                  : "INSIGHTS_DRAWER");
          }),
          (a.getLastToggleSource = function () {
            return this.$_AdsMgmtOpenTrayStore$p_3;
          }),
          (a.__onDispatch = function (t) {
            var e = this.$_AdsMgmtOpenTrayStore$p_1,
              n = t.action;
            switch (n.type) {
              case o("AdsInterfacesRouteUpdateParamsDataActionFlux")
                .actionType: {
                var a = n.data || {},
                  i = a.params || {},
                  l = a.context || {},
                  s = l.toggleSource,
                  u = this.$_AdsMgmtOpenTrayStore$p_10(i.tray),
                  c = this.$_AdsMgmtOpenTrayStore$p_6,
                  d = l.shouldEditorBeHidden;
                c !== d &&
                  ((this.$_AdsMgmtOpenTrayStore$p_6 = d != null ? d : !1),
                  this.__emitChange());
                var m = this.$_AdsMgmtOpenTrayStore$p_4,
                  p = i[o("AdsCampaignStructureConstants").URL_PARAMETER_KEY];
                ((this.$_AdsMgmtOpenTrayStore$p_4 = p == null ? !0 : !!p),
                  m !== this.$_AdsMgmtOpenTrayStore$p_4 && this.__emitChange(),
                  u
                    ? this.$_AdsMgmtOpenTrayStore$p_11(u, s)
                    : this.$_AdsMgmtOpenTrayStore$p_12(s));
                break;
              }
              case o("AdsPECampaignGroupSelectionSelectAllActionFlux")
                .actionType:
              case r("AdsPEFluxCampaignGroupSelectionIdClickedActionFlux")
                .actionType:
              case o("AdsPEFluxCampaignSelectionIdClickedActionFlux")
                .actionType:
              case o("AdsPEFluxAdSelectionIdClickedActionFlux").actionType:
              case o("AdsPECampaignSelectionSelectAllActionFlux").actionType:
              case o("AdsPEAdgroupSelectionSelectAllActionFlux").actionType: {
                o(
                  "AdsDuplicationPreloadEditorOnHoverExperimentUtils",
                ).isEligibleForPreloadEditorOnSelect() &&
                  this.$_AdsMgmtOpenTrayStore$p_7 === !1 &&
                  ((this.$_AdsMgmtOpenTrayStore$p_6 = !0),
                  this.$_AdsMgmtOpenTrayStore$p_11("EDITOR_DRAWER"),
                  (this.$_AdsMgmtOpenTrayStore$p_7 = !0),
                  this.__emitChange());
                break;
              }
              case o("AdsDuplicationOpenHiddenEditorActionFlux").actionType: {
                (o(
                  "AdsDuplicationPreloadEditorOnHoverExperimentUtils",
                ).isEligibleForPreloadEditorOnHoverSilent() ||
                  o(
                    "AdsDuplicationPreloadEditorOnHoverExperimentUtils",
                  ).isEligibleForPreloadEditorOnSelectSilent()) &&
                  ((this.$_AdsMgmtOpenTrayStore$p_6 = !0),
                  this.$_AdsMgmtOpenTrayStore$p_11("EDITOR_DRAWER"),
                  this.__emitChange());
                break;
              }
              case o("AdsDraftDraftFragmentBatchDeletedDataActionFlux")
                .actionType:
                this.$_AdsMgmtOpenTrayStore$p_13(
                  n,
                  this.$_AdsMgmtOpenTrayStore$p_14(t),
                );
                break;
              default:
                this.$_AdsMgmtOpenTrayStore$p_14(t) &&
                  r("AdsPERouterHelper")
                    .getRouteBuilder()
                    .closeTray()
                    .navigate(!0);
            }
            this.$_AdsMgmtOpenTrayStore$p_1 !== e && this.__emitChange();
          }),
          (a.$_AdsMgmtOpenTrayStore$p_13 = function (t, n) {
            var e = r("AdsPERouterHelper").getRouteBuilder();
            n && e.closeTray();
            var o = [],
              a = [],
              i = [];
            (t.fragments.forEach(function (e) {
              if (
                !(
                  e.action !== "add" ||
                  (e.status !== "CANCELED" && e.status !== "USER_CANCELED")
                )
              )
                switch (e.ad_object_type) {
                  case "campaign":
                    o.push(e.ad_object_id);
                    break;
                  case "ad_set":
                    a.push(e.ad_object_id);
                    break;
                  case "ad":
                    i.push(e.ad_object_id);
                    break;
                }
            }),
              o.length > 0 && e.removeSelectedIDs(o, "campaign"),
              a.length > 0 && e.removeSelectedIDs(a, "ad_set"),
              i.length > 0 && e.removeSelectedIDs(i, "ad"),
              e.navigate(!0));
          }),
          (a.$_AdsMgmtOpenTrayStore$p_9 = function () {
            return (
              (s || (s = r("AdsDataAtom"))).isDispatching() &&
                (s || (s = r("AdsDataAtom"))).waitFor(
                  [].concat(
                    o("AdsSelectionLevelSelectors")
                      .adsSelectionLevelSelector.getStores()
                      .map(function (e) {
                        return e.getDispatchToken();
                      }),
                  ),
                ),
              o("AdsSelectionLevelSelectors").adsSelectionLevelSelector(
                r("adsPEManageAdsSectionSelector")(),
              )
            );
          }),
          (a.$_AdsMgmtOpenTrayStore$p_10 = function (t) {
            return (
              (s || (s = r("AdsDataAtom"))).isDispatching() &&
                (s || (s = r("AdsDataAtom"))).waitFor(
                  [].concat(
                    o("AdsSelectionLevelSelectors")
                      .adsEditorLevelSelector.getStores()
                      .map(function (e) {
                        return e.getDispatchToken();
                      }),
                  ),
                ),
              t != null &&
                u[t] == null &&
                r("FBLogger")("ads").mustfix(
                  'The tray value "%s" is defined as active state in ICE routing, but it does not exist in this module\'s trayMap.',
                  t,
                ),
              t ? u[t] : null
            );
          }),
          (a.$_AdsMgmtOpenTrayStore$p_12 = function (t) {
            ((this.$_AdsMgmtOpenTrayStore$p_2 =
              this.$_AdsMgmtOpenTrayStore$p_1),
              (this.$_AdsMgmtOpenTrayStore$p_1 = null),
              (this.$_AdsMgmtOpenTrayStore$p_3 = t));
          }),
          (a.$_AdsMgmtOpenTrayStore$p_11 = function (t, n) {
            this.$_AdsMgmtOpenTrayStore$p_8(t) &&
              ((this.$_AdsMgmtOpenTrayStore$p_2 =
                this.$_AdsMgmtOpenTrayStore$p_1),
              (this.$_AdsMgmtOpenTrayStore$p_1 = t),
              (this.$_AdsMgmtOpenTrayStore$p_3 = n));
          }),
          (a.$_AdsMgmtOpenTrayStore$p_8 = function (n) {
            if (
              ((s || (s = r("AdsDataAtom"))).isDispatching() &&
                (s || (s = r("AdsDataAtom"))).waitFor(
                  [].concat(
                    (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
                      o("AdsEditorSelectedIDsSelector")
                        .AdsEditorSelectedIDsSelector,
                      r("adsPEManageAdsSectionSelector"),
                    ]),
                  ),
                ),
              this.$_AdsMgmtOpenTrayStore$p_9() === "ad_account" ||
                n === "INSIGHTS_DRAWER")
            )
              return !0;
            var t = o("AdsObjectTypeUtils").getAdLevelFromObjectLevel(
              o("AdsSelectionLevelSelectors").adsEditorLevelSelector(),
            );
            return (
              !!t &&
              o("AdsEditorSelectedIDsSelector").AdsEditorSelectedIDsSelector(t)
                .length > 0
            );
          }),
          (a.$_AdsMgmtOpenTrayStore$p_14 = function (t) {
            var e = this.getTrayState();
            if (e == null) return !1;
            this.$_AdsMgmtOpenTrayStore$p_15(
              this.$_AdsMgmtOpenTrayStore$p_16(),
            );
            var n = this.$_AdsMgmtOpenTrayStore$p_16().some(function (e) {
              return e.hasChanged();
            });
            if (n) {
              if (e && !this.$_AdsMgmtOpenTrayStore$p_8(e)) return !0;
              var r = o("AdsPENavSectionToAvailableIDStoreMap")
                .toArray()
                .some(function (e) {
                  return e.hasChanged();
                });
              if (e && r && this.$_AdsMgmtOpenTrayStore$p_17(e)) return !0;
            }
            var a = t.action,
              i = a.actionType;
            return (
              o("AdsMgmtDrawerUtils").drawerShouldCloseFromAction(
                i,
                this.$_AdsMgmtOpenTrayStore$p_4,
              ) &&
              a.source !== "INITIAL_PAGE_LOAD_REMINDER" &&
              a.source !== "EDITOR_HEADER" &&
              a.source !== "EDITOR_FOOTER_REVIEW_AND_PUBLISH"
            );
          }),
          (a.$_AdsMgmtOpenTrayStore$p_17 = function (t) {
            if (
              t === "INSIGHTS_DRAWER" &&
              r("AdsMgmtInitialDataFetchStateProvider")().isInitialDataFetched
            ) {
              var e = r("gkx")("19404"),
                n,
                a;
              if (e) {
                var i = r("adsPEManageAdsSectionSelector")();
                if (i == null) return !1;
                ((a = i),
                  (n = o(
                    "AdsGetAvailableIDsSelectors",
                  ).adsGetAvailableIDsSelector(i)));
              } else {
                var l = r("AdsInsightsTableViewStore").getOrNull(),
                  s = l
                    ? r("AdsPENavigationUtils").getNavStateFromObjectType(
                        l.objectType,
                      )
                    : null;
                ((a = s == null ? void 0 : s.section),
                  (n = o(
                    "AdsGetAvailableIDsSelectors",
                  ).adsGetAvailableIDsSelector(
                    s == null ? void 0 : s.section,
                  )));
              }
              if (n.length > 0) return !1;
              var u = o("AdsObjectTypeUtils").getAdLevelFromObjectLevel(
                  o("AdsSelectionLevelSelectors").adsEditorLevelSelector(),
                ),
                c =
                  !!u &&
                  o(
                    "AdsEditorSelectedIDsSelector",
                  ).AdsEditorSelectedIDsSelector(u).length > 0;
              return (
                c ||
                  r("FBLogger")("ads_manager_open_tray_store").warn(
                    "Closing insights drawer: section=%s, availableIDs=0, selectedIDs=0, fix=%s",
                    a != null ? a : "null",
                    e ? "on" : "off",
                  ),
                e ? !1 : !c
              );
            }
            return !1;
          }),
          (a.$_AdsMgmtOpenTrayStore$p_16 = function () {
            return (
              this.$_AdsMgmtOpenTrayStore$p_5 ||
                (this.$_AdsMgmtOpenTrayStore$p_5 = [].concat(
                  r("adsPEManageAdsSectionSelector").getStores(),
                  o(
                    "AdsEditorSelectedIDsSelector",
                  ).AdsEditorSelectedIDsSelector.getStores(),
                  o(
                    "AdsSelectionLevelSelectors",
                  ).adsEditorLevelSelector.getStores(),
                  o(
                    "AdsGetAvailableIDsSelectors",
                  ).adsGetAvailableIDsSelector.getStores(),
                  o("AdsPENavSectionToAvailableIDStoreMap").toArray(),
                  [r("AdsMgmtInitialDataFetchStateProvider").toFluxStore()],
                )),
              this.$_AdsMgmtOpenTrayStore$p_5
            );
          }),
          (a.$_AdsMgmtOpenTrayStore$p_15 = function (t) {
            (s || (s = r("AdsDataAtom"))).waitFor(
              t.map(function (e) {
                return e.getDispatchToken();
              }),
            );
          }),
          n
        );
      })(r("FluxStore"));
    c.__moduleID = i.id;
    var d = new c();
    l.AdsMgmtOpenTrayStore = d;
  },
  98,
);

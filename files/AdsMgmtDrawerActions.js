__d(
  "AdsMgmtDrawerActions",
  [
    "AdsActionCategories",
    "AdsApplicationUtils",
    "AdsConvergenceReminderDialogUtils",
    "AdsCreationAndEditingScenarioLoggerUtils",
    "AdsGuidanceActionsTabsAction",
    "AdsGuidanceBudgetTypes",
    "AdsGuidanceTab",
    "AdsInteractions",
    "AdsMgmt2026H1ExperimentUtils",
    "AdsMgmtDrawerCloseDataAction",
    "AdsMgmtDrawerOpenTargetDataAction",
    "AdsMgmtDrawerToggleDataAction",
    "AdsMgmtDrawerToggleTabAction",
    "AdsNavOrigin",
    "AdsObjectTypeUtils",
    "AdsObjectTypes",
    "AdsPEAdSortActions",
    "AdsPECampaignSortActions",
    "AdsPERouteHelper",
    "AdsPERouterHelper",
    "AdsPERoutingIDsStoreUtils",
    "AdsPETableConfig",
    "AdsPerfInteractionsController",
    "AdsReviewViewQuickSwitchToEditFieldDataAction",
    "AdsReviewViewToggleDataAction",
    "AdsToggleSource",
    "AdsUnificationCampaignNUXModalActionDispatcher",
    "AdsUnificationCampaignNUXModalEntrypointActionDispatcher",
    "AdsUnificationCampaignNUXModalScenario",
    "JSResource",
    "PerformanceSummaryTabsAction",
    "PerformanceSummaryTabsConstants",
    "QPLUserFlow",
    "isResolutionFlowXOutToSYDEnabled",
    "isXoutToPreviousScreenEnabled",
    "nullthrows",
    "requireDeferred",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("AdsInsightsPreloader").__setRef(
        "AdsMgmtDrawerActions",
      ),
      s = ["EDITOR_DRAWER"],
      u = function (t, n, r) {
        if (n != null) {
          var e = n.adgroupIDs,
            o = n.campaignGroupIDs,
            a = n.campaignIDs,
            i = n.packageConfigID;
          (o.length > 0 && t.addSelectedIDs(o, "campaign"),
            a.length > 0 && t.addSelectedIDs(a, "ad_set"),
            e.length > 0 && t.addSelectedIDs(e, "ad"),
            t.setCreationPackageConfigID(i));
        }
        r != null && t.setCurrentStep(r);
      };
    function c(t, n, a, l, s, c, d, m, p) {
      if (!o("AdsApplicationUtils").isPowerEditor()) {
        s();
        return;
      }
      var _ = r("AdsPERouterHelper").getRouteBuilder(),
        f = r("nullthrows")(o("AdsObjectTypeUtils").fromObjectLevel(a)),
        g = _.getNavUtils().getNavStateFromObjectType(f),
        h = r("AdsPERoutingIDsStoreUtils").getNewIDsDependingOnCurrentLevel(
          a,
          n,
        );
      if (l === r("AdsToggleSource").table_lower_level_fix_inline_cta) {
        if (
          (_.selectedIDs(f === r("AdsObjectTypes").ADGROUP ? n : [], "ad"),
          d && d.extraIdsForLowerLevelFix)
        ) {
          var y =
            f === r("AdsObjectTypes").CAMPAIGN
              ? [].concat(d.extraIdsForLowerLevelFix.adset, n)
              : [].concat(d.extraIdsForLowerLevelFix.adset);
          _.selectedIDs(y, "ad_set");
        }
        _.selectedIDs(
          (d &&
            d.extraIdsForLowerLevelFix &&
            [].concat(d.extraIdsForLowerLevelFix.campaign)) ||
            [],
          "campaign",
        );
      } else
        (h.selected_ad_ids && _.selectedIDs(h.selected_ad_ids, "ad"),
          h.selected_adset_ids && _.selectedIDs(h.selected_adset_ids, "ad_set"),
          h.selected_campaign_ids &&
            _.selectedIDs(h.selected_campaign_ids, "campaign"),
          u(_, m, p));
      (t === "EDITOR_DRAWER" &&
        d &&
        d.inReviewMode === !0 &&
        _.setReviewMode(!0),
        t === "INSIGHTS_DRAWER" &&
          l === r("AdsToggleSource").action_column_cell &&
          _.setTreeNav(!1),
        t === "GOALS_DRAWER" && _.setTreeNav(!1),
        c != null &&
          _.action(function () {
            window.setTimeout(function () {
              return r(
                "AdsReviewViewQuickSwitchToEditFieldDataAction",
              ).dispatch(
                {
                  aoPluginKey: null,
                  adObjectLevel: a,
                  inReviewMode: !1,
                  quickSwitchFieldPath: c,
                },
                {
                  line: "214",
                  module: "AdsMgmtDrawerActions.js",
                  moduleID: i.id,
                },
              );
            }, 2e3);
          }),
        d && d.params && _.params(d.params),
        _.onComplete(s)
          .navState(g)
          .tray(t)
          .context({ toggleSource: l })
          .navigate(),
        t === "INSIGHTS_DRAWER" &&
          e.onReady(function (e) {
            return e.preload();
          }));
    }
    function d(e, t, n, a, l, u, d, m, p) {
      var _ = r("AdsPERouteHelper").getOpenTray(),
        f = {
          category: r("AdsActionCategories").STATE_CHANGE,
          ids: t,
          objectLevel: n,
          source: a,
          tab: e,
          isErrorVideoToastCard: l,
        },
        g = function () {
          var e;
          (r("AdsMgmtDrawerOpenTargetDataAction").dispatch(
            babelHelpers.extends({}, f, { currentTray: _ }),
            { line: "272", module: "AdsMgmtDrawerActions.js", moduleID: i.id },
          ),
            (d == null || (e = d.params) == null
              ? void 0
              : e.canShowUnificationNUXModal) === !0 &&
              (r("AdsUnificationCampaignNUXModalActionDispatcher")({
                modalScenario: o("AdsUnificationCampaignNUXModalScenario")
                  .UnificationCamapignNuxScenario.Editing,
              }),
              r("AdsUnificationCampaignNUXModalEntrypointActionDispatcher")()));
        };
      if (a === r("AdsToggleSource").toast_card_cta) {
        r("JSResource").loadAll(
          [
            r("JSResource")("AdsVideoToastCardsClickCTADataAction").__setRef(
              "AdsMgmtDrawerActions",
            ),
          ],
          function (r) {
            c(e, t, n, a, function () {
              return r.dispatch(
                { queuedCallback: g, data: f },
                {
                  line: "289",
                  module: "AdsMgmtDrawerActions.js",
                  moduleID: i.id,
                },
              );
            });
          },
        );
        return;
      }
      if (
        a === r("AdsToggleSource").inline_publish_cta ||
        a === r("AdsToggleSource").draft_indicator_table_cell
      ) {
        c(
          e,
          t,
          n,
          a,
          function () {
            r("AdsReviewViewToggleDataAction").dispatch(
              { adObjectLevel: n, inReviewMode: !0 },
              {
                line: "309",
                module: "AdsMgmtDrawerActions.js",
                moduleID: i.id,
              },
            );
          },
          null,
          { inReviewMode: !0 },
        );
        return;
      }
      if (a === r("AdsToggleSource").accept_ad_proposal_dialog) {
        c(
          e,
          t,
          n,
          a,
          function () {
            r("setTimeout")(function () {
              r("AdsReviewViewToggleDataAction").dispatch(
                { adObjectLevel: n, inReviewMode: !0 },
                {
                  line: "328",
                  module: "AdsMgmtDrawerActions.js",
                  moduleID: i.id,
                },
              );
            }, 100);
          },
          null,
          { inReviewMode: !0 },
        );
        return;
      }
      if (a === r("AdsToggleSource").table_lower_level_fix_inline_cta) {
        c(
          e,
          t,
          n,
          a,
          function () {
            n === "ad_set"
              ? o("AdsPECampaignSortActions").setSortColumnSortKey(
                  "errors",
                  o("AdsPETableConfig").SORTING_OPTIONS.DESC,
                )
              : o("AdsPEAdSortActions").setSortColumnSortKey(
                  "errors",
                  o("AdsPETableConfig").SORTING_OPTIONS.DESC,
                );
          },
          null,
          d,
        );
        return;
      }
      var h = function () {
        (o("AdsApplicationUtils").isPowerEditor() && s.includes(e)
          ? g()
          : o(
              "AdsConvergenceReminderDialogUtils",
            ).executeCallbackOnEditorClosed(g),
          a === r("AdsToggleSource").action_column_cell
            ? r("AdsGuidanceActionsTabsAction").dispatch(
                { isActionTabShown: !0 },
                {
                  line: "376",
                  module: "AdsMgmtDrawerActions.js",
                  moduleID: i.id,
                },
              )
            : r("AdsGuidanceActionsTabsAction").dispatch(
                { isActionTabShown: !1 },
                {
                  line: "378",
                  module: "AdsMgmtDrawerActions.js",
                  moduleID: i.id,
                },
              ),
          a === r("AdsToggleSource").table_creative_potential_cell &&
            r("AdsGuidanceActionsTabsAction").dispatch(
              {
                selectedTab: r("AdsGuidanceTab").CREATIVE,
                isActionTabShown: !1,
              },
              {
                line: "382",
                module: "AdsMgmtDrawerActions.js",
                moduleID: i.id,
              },
            ),
          a === r("AdsToggleSource").table_budget_cell &&
            (o(
              "AdsMgmt2026H1ExperimentUtils",
            ).getIsAccountInBudgetReportingPerfSummaryWithoutExposure()
              ? r("AdsGuidanceActionsTabsAction").dispatch(
                  {
                    selectedTab: r("AdsGuidanceTab").BUDGET,
                    isActionTabShown: !1,
                    scrollTarget: o("AdsGuidanceBudgetTypes")
                      .BUDGET_FORECAST_SCROLL_TARGET,
                  },
                  {
                    line: "391",
                    module: "AdsMgmtDrawerActions.js",
                    moduleID: i.id,
                  },
                )
              : r("PerformanceSummaryTabsAction").dispatch(
                  {
                    insights_selected_tab: o("PerformanceSummaryTabsConstants")
                      .PSTabID.BUDGET,
                  },
                  {
                    line: "397",
                    module: "AdsMgmtDrawerActions.js",
                    moduleID: i.id,
                  },
                )));
      };
      c(e, t, n, a, h, u, d, m, p);
    }
    function m(e, t, n, a, l) {
      var s = r("AdsPERouteHelper").getOpenTray(),
        u = function () {
          var u,
            c = r("AdsPERouterHelper")
              .getRouteBuilder()
              .toggleTray(t)
              .context({ toggleSource: e })
              .action(function () {
                (r("AdsMgmtDrawerToggleDataAction").dispatch(
                  {
                    category: r("AdsActionCategories").STATE_CHANGE,
                    source: e,
                    shouldSaveSyncStatus: a,
                    currentTray: s,
                  },
                  {
                    line: "432",
                    module: "AdsMgmtDrawerActions.js",
                    moduleID: i.id,
                  },
                ),
                  s === "INSIGHTS_DRAWER" &&
                    r("AdsGuidanceActionsTabsAction").dispatch(
                      { isActionTabShown: !1 },
                      {
                        line: "440",
                        module: "AdsMgmtDrawerActions.js",
                        moduleID: i.id,
                      },
                    ),
                  l && n != null && l(n),
                  r("JSResource")("VCCClearCacheDataAction")
                    .__setRef("AdsMgmtDrawerActions")
                    .load()
                    .then(function (e) {
                      return e.dispatch(
                        {},
                        {
                          line: "448",
                          module: "AdsMgmtDrawerActions.js",
                          moduleID: i.id,
                        },
                      );
                    }));
              }),
            d =
              (u = r("AdsPERouterHelper").getRouter()) == null ||
              (u = u.getParams()) == null
                ? void 0
                : u.nav_origin;
          (d != null && c.params({ nav_origin: null }),
            d === r("AdsNavOrigin").ACCOUNT_OVERVIEW &&
              (o(
                "isResolutionFlowXOutToSYDEnabled",
              ).isResolutionFlowXOutToSYDEnabled() ||
                o(
                  "isXoutToPreviousScreenEnabled",
                ).isXoutToPreviousScreenEnabled()) &&
              c.clearSelectedIDs("ad_set").section("ACCOUNT"),
            c.navigate());
        };
      o("AdsConvergenceReminderDialogUtils").executeCallbackOnEditorClosed(u);
    }
    function p(e, t, n, a, l) {
      e === "EDITOR_DRAWER" &&
        r("AdsInteractions").singleFrameInteraction("open_editor");
      var s = r("AdsPERouteHelper").getOpenTray(),
        c = function () {
          var o = r("AdsPERouterHelper")
            .getRouteBuilder()
            .toggleTray(e)
            .context({ toggleSource: t })
            .action(function () {
              r("AdsMgmtDrawerToggleTabAction").dispatch(
                {
                  category: r("AdsActionCategories").STATE_CHANGE,
                  source: t,
                  tab: e,
                  currentTray: s,
                },
                {
                  line: "489",
                  module: "AdsMgmtDrawerActions.js",
                  moduleID: i.id,
                },
              );
            });
          (n && o.onComplete(n),
            e === "GOALS_DRAWER" && o.setTreeNav(!1),
            u(o, a, l),
            o.navigate());
        };
      o("AdsConvergenceReminderDialogUtils").executeCallbackOnEditorClosed(c);
    }
    function _(e) {
      var t,
        n = r("AdsToggleSource").editor_footer;
      for (var a of o("AdsCreationAndEditingScenarioLoggerUtils")
        .EDIT_USER_FLOWS)
        r("QPLUserFlow").endCancel(a, {
          annotations: { string: { ad_object_level: e, source: n } },
        });
      return (
        r("AdsPerfInteractionsController").addCustomInteractionAnnotation(
          "am.editor",
          ((t = { cancel_source: n }),
          (t.cancel_reason = "close_editor_edit_view"),
          t),
        ),
        f("EDITOR_DRAWER", n)
      );
    }
    function f(e, t) {
      var n = function () {
        var n,
          a = r("AdsPERouterHelper")
            .getRouteBuilder()
            .closeTray(e || "EDITOR_DRAWER")
            .context({ toggleSource: t })
            .action(function () {
              r("AdsMgmtDrawerCloseDataAction").dispatch(
                {},
                {
                  line: "546",
                  module: "AdsMgmtDrawerActions.js",
                  moduleID: i.id,
                },
              );
            }),
          l =
            (n = r("AdsPERouterHelper").getRouter()) == null ||
            (n = n.getParams()) == null
              ? void 0
              : n.nav_origin;
        (l != null && a.params({ nav_origin: null }),
          l === r("AdsNavOrigin").ACCOUNT_OVERVIEW &&
            (o(
              "isResolutionFlowXOutToSYDEnabled",
            ).isResolutionFlowXOutToSYDEnabled() ||
              o(
                "isXoutToPreviousScreenEnabled",
              ).isXoutToPreviousScreenEnabled()) &&
            a.clearSelectedIDs("ad_set").section("ACCOUNT"),
          a.navigate());
      };
      o("AdsConvergenceReminderDialogUtils").executeCallbackOnEditorClosed(n);
    }
    function g() {
      var e = function () {
        var e,
          t = r("AdsPERouterHelper")
            .getRouteBuilder()
            .closeTray()
            .action(function () {
              r("AdsMgmtDrawerCloseDataAction").dispatch(
                {},
                {
                  line: "572",
                  module: "AdsMgmtDrawerActions.js",
                  moduleID: i.id,
                },
              );
            }),
          n =
            (e = r("AdsPERouterHelper").getRouter()) == null ||
            (e = e.getParams()) == null
              ? void 0
              : e.nav_origin;
        (n != null && t.params({ nav_origin: null }), t.navigate());
      };
      o("AdsConvergenceReminderDialogUtils").executeCallbackOnEditorClosed(e);
    }
    function h(e, t, n, a) {
      var i = r("AdsPERouterHelper").getRouteBuilder(),
        l = r("nullthrows")(o("AdsObjectTypeUtils").fromObjectLevel(n)),
        s = i.getNavUtils().getNavStateFromObjectType(l);
      return (
        i.selectedIDs(t, n),
        i.navState(s).tray(e).context({ toggleSource: a }).getURI()
      );
    }
    ((l._openTarget = c),
      (l.openTarget = d),
      (l.toggle = m),
      (l.toggleTab = p),
      (l.closeEditor = _),
      (l.close = f),
      (l.closeTab = g),
      (l.buildTargetURI = h));
  },
  98,
);

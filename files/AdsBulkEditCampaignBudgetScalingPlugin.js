__d(
  "AdsBulkEditCampaignBudgetScalingPlugin",
  [
    "AdsAPICampaignPaths",
    "AdsBudgetScalingConstants",
    "AdsBulkEditBudgetScalingClearButton.react",
    "AdsBulkEditBulkControlBudgetScalingFieldContainer.react",
    "AdsBulkEditCampaignBudgetScalingFieldContainer.react",
    "AdsBulkEditChangeBudgetScalingDataAction",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsBulkValueUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsMixedValue",
    "AdsNameBulkEditPluginUtils",
    "GeoFlexbox.react",
    "GeoHStack.react",
    "GeoTableWidth",
    "adsBudgetScalingGKUtils",
    "geoWidth",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t, n, r;
      return (
        !o("adsBudgetScalingGKUtils").hasBlockingAttributionForBudgetScaling(
          e.is_incremental_attribution_enabled,
          ((t = e.promoted_object) == null ||
          (t = t.custom_attribution_source_ids) == null
            ? void 0
            : t.some(function (e) {
                return e != null;
              })) === !0,
          ((n = e.promoted_object) == null
            ? void 0
            : n.passback_application_id) != null ||
            ((r = e.promoted_object) == null ? void 0 : r.passback_pixel_id) !=
              null,
        ) &&
        o("adsBudgetScalingGKUtils").isBidStrategyEligibleForBudgetScaling(
          o("adsBudgetScalingGKUtils").getEffectiveBidStrategyForCampaign(
            e.is_autobid,
            e.bid_strategy,
            null,
          ),
        )
      );
    }
    function c(e, t, n) {
      var o =
        n === r("AdsCampaignBulkEditColumnKeys").BUDGET_SCALING_EXTRA_BUDGET;
      return s.jsx(r("AdsBulkEditCampaignBudgetScalingFieldContainer.react"), {
        dataTestID: o
          ? "bulk-edit-budget-scaling-extra-budget-input"
          : "bulk-edit-budget-scaling-cost-target-input",
        isEligible: u(t),
        isExtraBudget: o,
        onChangeMinorUnit: function (o) {
          return r("AdsBulkEditChangeBudgetScalingDataAction").dispatch(
            { adObjectIDs: e, columnKey: n, value: o },
            {
              line: "94",
              module: "AdsBulkEditCampaignBudgetScalingPlugin.js",
              moduleID: i.id,
            },
          );
        },
        value: o ? t.budget_scaling_extra_budget : t.budget_scaling_cost_target,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t, n) {
      return s.jsx("div", {
        className: r("joinClasses")(void 0, n.className),
        children: c(
          e,
          t,
          r("AdsCampaignBulkEditColumnKeys").BUDGET_SCALING_EXTRA_BUDGET,
        ),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      var o = c(
          e,
          t,
          r("AdsCampaignBulkEditColumnKeys").BUDGET_SCALING_COST_TARGET,
        ),
        a = u(t);
      if (!a)
        return s.jsx("div", {
          className: r("joinClasses")(void 0, n.className),
          children: o,
        });
      var l =
        p(t.budget_scaling_extra_budget) || p(t.budget_scaling_cost_target);
      return s.jsx("div", {
        className: r("joinClasses")(void 0, n.className),
        children: s.jsxs(r("GeoHStack.react"), {
          alignItems: "center",
          context: "component",
          relation: "unrelated",
          xstyle: r("geoWidth").fullWidth,
          children: [
            s.jsx(r("GeoFlexbox.react"), {
              basis: "0",
              grow: 1,
              shrink: 1,
              children: o,
            }),
            s.jsx(r("GeoFlexbox.react"), {
              grow: 0,
              shrink: 0,
              children: s.jsx(r("AdsBulkEditBudgetScalingClearButton.react"), {
                hasAnyValue: l,
                onClear: function () {
                  return r("AdsBulkEditChangeBudgetScalingDataAction").dispatch(
                    { adObjectIDs: e },
                    {
                      line: "162",
                      module: "AdsBulkEditCampaignBudgetScalingPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
              }),
            }),
          ],
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      if (e == null) return !1;
      var t = Number(e);
      return Number.isFinite(t) && t > 0;
    }
    function _(e, t, n) {
      if (
        n !== r("AdsCampaignBulkEditColumnKeys").BUDGET_SCALING_EXTRA_BUDGET &&
        n !== r("AdsCampaignBulkEditColumnKeys").BUDGET_SCALING_COST_TARGET
      )
        return null;
      var a = s.jsx(
        r("AdsBulkEditBulkControlBudgetScalingFieldContainer.react"),
        { bulkControlSpec: t, campaignIDs: e, columnKey: n },
      );
      if (n === r("AdsCampaignBulkEditColumnKeys").BUDGET_SCALING_EXTRA_BUDGET)
        return a;
      var l = "budget_scaling_extra_budget",
        u = "budget_scaling_cost_target",
        c = t == null ? void 0 : t[l],
        d = t == null ? void 0 : t[u],
        m =
          c instanceof r("AdsMixedValue") ||
          d instanceof r("AdsMixedValue") ||
          p(o("AdsBulkValueUtils").getUniformValueOrDefault(c, null)) ||
          p(o("AdsBulkValueUtils").getUniformValueOrDefault(d, null));
      return s.jsxs(r("GeoHStack.react"), {
        alignItems: "center",
        context: "component",
        relation: "unrelated",
        xstyle: r("geoWidth").fullWidth,
        children: [
          s.jsx(r("GeoFlexbox.react"), {
            basis: "0",
            grow: 1,
            shrink: 1,
            children: a,
          }),
          s.jsx(r("GeoFlexbox.react"), {
            grow: 0,
            shrink: 0,
            children: s.jsx(r("AdsBulkEditBudgetScalingClearButton.react"), {
              hasAnyValue: m,
              onClear: function () {
                return r("AdsBulkEditChangeBudgetScalingDataAction").dispatch(
                  { adObjectIDs: e },
                  {
                    line: "226",
                    module: "AdsBulkEditCampaignBudgetScalingPlugin.js",
                    moduleID: i.id,
                  },
                );
              },
            }),
          }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignBudgetScaling",
          dialogType: r("AdsBulkEditDialogTypes")
            .PERFORMANCE_BASED_BUDGET_INCREASE,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent")
              .PERFORMANCE_BASED_BUDGET_INCREASE;
          },
          getTooltip: function (t) {
            var e;
            return ((e = t.isCBO) == null ? void 0 : e.all) === !0
              ? o("AdsBulkEditMenuContent").CAMPAIGN_CBO_BULK_EDIT_TOOLTIP
              : null;
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").PERFORMANCE_BASED_BUDGET_INCREASE,
              "ad_set",
              t.source,
            );
          },
          isHidden: function (t) {
            return (
              !o(
                "adsBudgetScalingGKUtils",
              ).isAdsBudgetScalingEnabledWithoutExposureLogging() ||
              t.hasAutobidCampaign !== !0
            );
          },
          isDisabled: function (t) {
            var e;
            return ((e = t.isCBO) == null ? void 0 : e.all) === !0;
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes")
              .PERFORMANCE_BASED_BUDGET_INCREASE,
          },
          getBulkControlConfig: function () {
            return { renderer: _ };
          },
          getSchema: function () {
            return {
              budget_scaling_cost_target: r(
                "AdsEmptyUniformMixedBulkValueTypes",
              ),
              budget_scaling_extra_budget: r(
                "AdsEmptyUniformMixedBulkValueTypes",
              ),
            };
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignNameColumnConfig(),
            ),
            {
              cellRenderer: d,
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .BUDGET_SCALING_EXTRA_BUDGET,
              label: o("AdsBudgetScalingConstants")
                .BUDGET_SCALING_EXTRA_BUDGET_LABEL,
              width: o("GeoTableWidth").pixel(192),
              fieldsPaths: [
                r("AdsAPICampaignPaths").BUDGET_SCALING_EXTRA_BUDGET,
                r("AdsAPICampaignPaths").BID_STRATEGY,
                r("AdsAPICampaignPaths").IS_AUTOBID,
                r("AdsAPICampaignPaths").IS_INCREMENTAL_ATTRIBUTION_ENABLED,
                r("AdsAPICampaignPaths").PROMOTED_OBJECT
                  .CUSTOM_ATTRIBUTION_SOURCE_IDS,
                r("AdsAPICampaignPaths").PROMOTED_OBJECT
                  .PASSBACK_APPLICATION_ID,
                r("AdsAPICampaignPaths").PROMOTED_OBJECT.PASSBACK_PIXEL_ID,
              ],
            },
            {
              cellRenderer: m,
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .BUDGET_SCALING_COST_TARGET,
              label: o("AdsBudgetScalingConstants")
                .BUDGET_SCALING_COST_TARGET_LABEL,
              width: o("GeoTableWidth").pixel(236),
              fieldsPaths: [
                r("AdsAPICampaignPaths").BUDGET_SCALING_COST_TARGET,
                r("AdsAPICampaignPaths").BID_STRATEGY,
                r("AdsAPICampaignPaths").IS_AUTOBID,
                r("AdsAPICampaignPaths").IS_INCREMENTAL_ATTRIBUTION_ENABLED,
                r("AdsAPICampaignPaths").PROMOTED_OBJECT
                  .CUSTOM_ATTRIBUTION_SOURCE_IDS,
                r("AdsAPICampaignPaths").PROMOTED_OBJECT
                  .PASSBACK_APPLICATION_ID,
                r("AdsAPICampaignPaths").PROMOTED_OBJECT.PASSBACK_PIXEL_ID,
              ],
            },
          ],
        },
      ),
      g = f;
    l.default = g;
  },
  98,
);

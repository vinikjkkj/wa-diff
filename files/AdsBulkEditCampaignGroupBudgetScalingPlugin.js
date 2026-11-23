__d(
  "AdsBulkEditCampaignGroupBudgetScalingPlugin",
  [
    "AdsAPICampaignGroupPaths",
    "AdsBudgetScalingConstants",
    "AdsBulkEditBudgetScalingClearButton.react",
    "AdsBulkEditCampaignBudgetScalingFieldContainer.react",
    "AdsBulkEditChangeCampaignGroupBudgetScalingDataAction",
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
      return (
        e === r("AdsCampaignBulkEditColumnKeys").BUDGET_SCALING_EXTRA_BUDGET
      );
    }
    function c(e) {
      var t = o("AdsBulkValueUtils").getUniformValueOrDefault(e, null);
      return typeof t == "number" || typeof t == "string" ? t : null;
    }
    function d(e) {
      if (e == null) return !1;
      var t = Number(e);
      return Number.isFinite(t) && t > 0;
    }
    function m(e, t, n) {
      var a = u(n);
      return s.jsx(r("AdsBulkEditCampaignBudgetScalingFieldContainer.react"), {
        dataTestID: a
          ? "bulk-edit-budget-scaling-extra-budget-input"
          : "bulk-edit-budget-scaling-cost-target-input",
        isEligible: o(
          "adsBudgetScalingGKUtils",
        ).isBidStrategyEligibleForBudgetScaling(t.bid_strategy),
        isExtraBudget: a,
        onChangeMinorUnit: function (o) {
          return r(
            "AdsBulkEditChangeCampaignGroupBudgetScalingDataAction",
          ).dispatch(
            { adObjectIDs: e, columnKey: n, value: o },
            {
              line: "95",
              module: "AdsBulkEditCampaignGroupBudgetScalingPlugin.js",
              moduleID: i.id,
            },
          );
        },
        value: a ? t.budget_scaling_extra_budget : t.budget_scaling_cost_target,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t, n) {
      return s.jsx("div", {
        className: r("joinClasses")(void 0, n.className),
        children: m(
          e,
          t,
          r("AdsCampaignBulkEditColumnKeys").BUDGET_SCALING_EXTRA_BUDGET,
        ),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t, n) {
      var a = m(
        e,
        t,
        r("AdsCampaignBulkEditColumnKeys").BUDGET_SCALING_COST_TARGET,
      );
      if (
        !o("adsBudgetScalingGKUtils").isBidStrategyEligibleForBudgetScaling(
          t.bid_strategy,
        )
      )
        return s.jsx("div", {
          className: r("joinClasses")(void 0, n.className),
          children: a,
        });
      var l =
        d(t.budget_scaling_extra_budget) || d(t.budget_scaling_cost_target);
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
              children: a,
            }),
            s.jsx(r("GeoFlexbox.react"), {
              grow: 0,
              shrink: 0,
              children: s.jsx(r("AdsBulkEditBudgetScalingClearButton.react"), {
                hasAnyValue: l,
                onClear: function () {
                  return r(
                    "AdsBulkEditChangeCampaignGroupBudgetScalingDataAction",
                  ).dispatch(
                    { adObjectIDs: e },
                    {
                      line: "161",
                      module: "AdsBulkEditCampaignGroupBudgetScalingPlugin.js",
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
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t, n) {
      if (
        n !== r("AdsCampaignBulkEditColumnKeys").BUDGET_SCALING_EXTRA_BUDGET &&
        n !== r("AdsCampaignBulkEditColumnKeys").BUDGET_SCALING_COST_TARGET
      )
        return null;
      var o = u(n),
        a = "budget_scaling_extra_budget",
        l = "budget_scaling_cost_target",
        m = t == null ? void 0 : t[a],
        p = t == null ? void 0 : t[l],
        _ = s.jsx(r("AdsBulkEditCampaignBudgetScalingFieldContainer.react"), {
          dataTestID: o
            ? "bulk-edit-all-budget-scaling-extra-budget-input"
            : "bulk-edit-all-budget-scaling-cost-target-input",
          isEligible: !0,
          isExtraBudget: o,
          onChangeMinorUnit: function (o) {
            return r(
              "AdsBulkEditChangeCampaignGroupBudgetScalingDataAction",
            ).dispatch(
              { adObjectIDs: e, columnKey: n, value: o },
              {
                line: "199",
                module: "AdsBulkEditCampaignGroupBudgetScalingPlugin.js",
                moduleID: i.id,
              },
            );
          },
          value: c(o ? m : p),
        });
      if (o) return _;
      var f =
        m instanceof r("AdsMixedValue") ||
        p instanceof r("AdsMixedValue") ||
        d(c(m)) ||
        d(c(p));
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
            children: _,
          }),
          s.jsx(r("GeoFlexbox.react"), {
            grow: 0,
            shrink: 0,
            children: s.jsx(r("AdsBulkEditBudgetScalingClearButton.react"), {
              hasAnyValue: f,
              onClear: function () {
                return r(
                  "AdsBulkEditChangeCampaignGroupBudgetScalingDataAction",
                ).dispatch(
                  { adObjectIDs: e },
                  {
                    line: "232",
                    module: "AdsBulkEditCampaignGroupBudgetScalingPlugin.js",
                    moduleID: i.id,
                  },
                );
              },
            }),
          }),
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = babelHelpers.extends(
        {
          type: "campaignGroupBulkEditMenu",
          key: "campaignGroupBudgetScaling",
          dialogType: r("AdsBulkEditDialogTypes")
            .CAMPAIGN_GROUP_PERFORMANCE_BASED_BUDGET_INCREASE,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent")
              .PERFORMANCE_BASED_BUDGET_INCREASE;
          },
          getTooltip: function (t) {
            return t.noneCampaignGroupWithBudget === !0
              ? o("AdsBulkEditMenuContent").CAMPAIGN_GROUP_NON_CBO_TOOLTIP
              : null;
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes")
                .CAMPAIGN_GROUP_PERFORMANCE_BASED_BUDGET_INCREASE,
              "campaign",
              t.source,
            );
          },
          isHidden: function () {
            return !o(
              "adsBudgetScalingGKUtils",
            ).isAdsBudgetScalingEnabledWithoutExposureLogging();
          },
          isDisabled: function (t) {
            return t.noneCampaignGroupWithBudget === !0;
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes")
              .CAMPAIGN_GROUP_PERFORMANCE_BASED_BUDGET_INCREASE,
          },
          getBulkControlConfig: function () {
            return { renderer: f };
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
              ).getBulkEditCampaignGroupNameColumnConfig(),
            ),
            {
              cellRenderer: p,
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .BUDGET_SCALING_EXTRA_BUDGET,
              label: o("AdsBudgetScalingConstants")
                .BUDGET_SCALING_EXTRA_BUDGET_LABEL,
              width: o("GeoTableWidth").pixel(192),
              fieldsPaths: [
                r("AdsAPICampaignGroupPaths").BUDGET_SCALING_EXTRA_BUDGET,
                r("AdsAPICampaignGroupPaths").BID_STRATEGY,
              ],
            },
            {
              cellRenderer: _,
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .BUDGET_SCALING_COST_TARGET,
              label: o("AdsBudgetScalingConstants")
                .BUDGET_SCALING_COST_TARGET_LABEL,
              width: o("GeoTableWidth").pixel(236),
              fieldsPaths: [
                r("AdsAPICampaignGroupPaths").BUDGET_SCALING_COST_TARGET,
                r("AdsAPICampaignGroupPaths").BID_STRATEGY,
              ],
            },
          ],
        },
      ),
      h = g;
    l.default = h;
  },
  98,
);

__d(
  "AdsBulkEditCampaignBudgetPlugin",
  [
    "cx",
    "fbt",
    "AdsAPICampaignPaths",
    "AdsBulkEditBaseBudgetSpentFieldContainer.react",
    "AdsBulkEditBulkControlBudgetField.react",
    "AdsBulkEditCampaignBudgetFieldContainer.react",
    "AdsBulkEditCampaignBudgetPluginBulkControlQuery.graphql",
    "AdsBulkEditChangeBudgetDataAction",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsBulkEditTotalBudgetSectionContainer.react",
    "AdsBulkValueUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGroupBudgetStrings",
    "AdsDeliveryBulkBudgetOperatorTypes",
    "AdsDeliveryBulkBudgetUnitTypes",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsErrorBoundary.react",
    "AdsErrorUtils",
    "AdsNameBulkEditPluginUtils",
    "CometPlaceholder.react",
    "GeoTableWidth",
    "RelayHooks",
    "adsCampaignGetBudgetAmount",
    "adsCampaignGetBudgetMode",
    "getByPath",
    "joinClasses",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = c || (c = o("react"));
    function m(t) {
      var a = t.adObjectIDs,
        i = t.dailyBudget,
        l = t.lifetimeBudget,
        s = t.onBulkChangeBudget,
        u = o("RelayHooks").useClientQuery(
          e !== void 0
            ? e
            : (e = n(
                "AdsBulkEditCampaignBudgetPluginBulkControlQuery.graphql",
              )),
          {},
        );
      return d.jsx(r("AdsBulkEditBulkControlBudgetField.react"), {
        adObjectIDs: a,
        dailyBudget: i,
        fragmentKey: u.selected_ad_account,
        lifetimeBudget: l,
        onBulkChangeBudget: s,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t) {
      var n = o("AdsBulkValueUtils").getUniformValueOrDefault(
          t == null ? void 0 : t.daily_budget,
          null,
        ),
        a = o("AdsBulkValueUtils").getUniformValueOrDefault(
          t == null ? void 0 : t.lifetime_budget,
          null,
        ),
        l = function (n, o, a, l) {
          r("AdsBulkEditChangeBudgetDataAction").dispatch(
            {
              budget: n,
              budgetMode: o,
              budgetOperator: a,
              budgetUnit: l,
              columnKey: r("AdsCampaignBulkEditColumnKeys").BUDGET,
              adObjectIDs: e,
            },
            {
              line: "117",
              module: "AdsBulkEditCampaignBudgetPlugin.js",
              moduleID: i.id,
            },
          );
        };
      return d.jsx(r("AdsErrorBoundary.react"), {
        moduleName: i.id,
        children: d.jsx(r("CometPlaceholder.react"), {
          fallback: null,
          name: i.id,
          children: d.jsx(m, {
            adObjectIDs: e,
            dailyBudget: n,
            lifetimeBudget: a,
            onBulkChangeBudget: l,
          }),
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t) {
      var n = e,
        o = +n.lifetime_spent || 0;
      return d.jsx("div", {
        className: r("joinClasses")("_1pqw amountSpentField", t.className),
        children: d.jsx(r("AdsBulkEditBaseBudgetSpentFieldContainer.react"), {
          amountSpent: o,
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t, n) {
      var a = r("adsCampaignGetBudgetAmount")(t),
        l = r("nullthrows")(
          r("adsCampaignGetBudgetMode")(t.daily_budget, t.lifetime_budget),
        ),
        s = n.className,
        u = n.newCampaignStatus,
        c = function (n, o) {
          n &&
            r("AdsBulkEditChangeBudgetDataAction").dispatch(
              {
                budget: n,
                budgetMode: o,
                budgetOperator: r("AdsDeliveryBulkBudgetOperatorTypes").SET_TO,
                budgetUnit: r("AdsDeliveryBulkBudgetUnitTypes").CURRENCY,
                columnKey: r("AdsCampaignBulkEditColumnKeys").BUDGET,
                adObjectIDs: e,
              },
              {
                line: "173",
                module: "AdsBulkEditCampaignBudgetPlugin.js",
                moduleID: i.id,
              },
            );
        },
        m = r("getByPath")(
          o("AdsErrorUtils").getErrorSpec(
            (n == null ? void 0 : n.errors) || [],
          ),
          r("AdsAPICampaignPaths").DAILY_BUDGET,
        ),
        p = r("getByPath")(
          o("AdsErrorUtils").getErrorSpec(
            (n == null ? void 0 : n.errors) || [],
          ),
          r("AdsAPICampaignPaths").LIFETIME_BUDGET,
        ),
        _ = m || p;
      return d.jsx("div", {
        className: r("joinClasses")(void 0, s),
        children: d.jsx(r("AdsBulkEditCampaignBudgetFieldContainer.react"), {
          budget: a,
          budgetMode: l,
          campaign: t,
          errorMessage: _,
          isNewCampaign: !0,
          isReadOnly: !u,
          minDailyBudget: 100,
          onBudgetChange: c,
          onBudgetModeChange: c,
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignBudget",
          dialogType: r("AdsBulkEditDialogTypes").BUDGET,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").BUDGET;
          },
          getTooltip: function (t) {
            var e;
            return t.isRF === !0
              ? o("AdsBulkEditMenuContent").CAMPAIGN_RF_TOOLTIP
              : ((e = t.isCBO) == null ? void 0 : e.all) === !0
                ? o("AdsBulkEditMenuContent").CAMPAIGN_CBO_BULK_EDIT_TOOLTIP
                : t.hasBudgetFlex === !0
                  ? o("AdsBulkEditMenuContent").CAMPAIGN_BUDGET_FLEX_TOOLTIP
                  : null;
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").BUDGET,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            var e;
            return (
              t.isRF === !0 ||
              ((e = t.isCBO) == null ? void 0 : e.all) === !0 ||
              t.hasBudgetFlex === !0
            );
          },
          pivots: { dialogType: r("AdsBulkEditDialogTypes").BUDGET },
          getBulkControlConfig: function () {
            return { renderer: p };
          },
          getSchema: function () {
            return {
              daily_budget: r("AdsEmptyUniformMixedBulkValueTypes"),
              lifetime_budget: r("AdsEmptyUniformMixedBulkValueTypes"),
            };
          },
          getSummarySection: function () {
            return {
              position: "bottom",
              node: d.jsx(r("AdsBulkEditTotalBudgetSectionContainer.react"), {
                level: "ad_set",
              }),
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
              cellRenderer: function (t, n, r) {
                return _(n, r);
              },
              columnKey: r("AdsCampaignBulkEditColumnKeys").AMOUNT_SPENT,
              label: o("AdsCampaignGroupBudgetStrings")
                .campaignGroupBudgetToggleOffModalAmountSpentColumnTitle,
              width: o("GeoTableWidth").pixel(120),
              fieldsPaths: [r("AdsAPICampaignPaths").LIFETIME_BUDGET_SPENT],
            },
            {
              cellRenderer: f,
              columnKey: r("AdsCampaignBulkEditColumnKeys").BUDGET,
              label: u._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(400),
              fieldsPaths: [
                r("AdsAPICampaignPaths").DAILY_BUDGET,
                r("AdsAPICampaignPaths").LIFETIME_BUDGET,
              ],
            },
          ],
        },
      ),
      h = g;
    l.default = h;
  },
  226,
);

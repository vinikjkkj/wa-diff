__d(
  "AdsBulkEditCampaignGroupBudgetPlugin",
  [
    "cx",
    "fbt",
    "AdsAPICampaignGroupPaths",
    "AdsBulkEditBaseBudgetSpentFieldContainer.react",
    "AdsBulkEditBulkControlBudgetField.react",
    "AdsBulkEditCampaignGroupBudgetFieldContainer.react",
    "AdsBulkEditCampaignGroupBudgetPluginBulkControlQuery.graphql",
    "AdsBulkEditChangeCampaignGroupBudgetDataAction",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsBulkEditTotalBudgetSectionContainer.react",
    "AdsCampaignGroupBudgetStrings",
    "AdsCampaignGroupBulkEditColumnKeys",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsEmptyValue",
    "AdsErrorBoundary.react",
    "AdsNameBulkEditPluginUtils",
    "AdsUniformValue",
    "CometPlaceholder.react",
    "GeoTableWidth",
    "RelayHooks",
    "joinClasses",
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
                "AdsBulkEditCampaignGroupBudgetPluginBulkControlQuery.graphql",
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
    var p = u._(/*BTDS*/ "");
    function _(e) {
      return e instanceof r("AdsEmptyValue")
        ? 0
        : e instanceof r("AdsUniformValue")
          ? Number(e.getValue())
          : null;
    }
    function f(e, t) {
      var n = _(t == null ? void 0 : t.daily_budget),
        o = _(t == null ? void 0 : t.lifetime_budget),
        a = function (n, o, a, l) {
          r("AdsBulkEditChangeCampaignGroupBudgetDataAction").dispatch(
            {
              adObjectIDs: e,
              budget: n,
              budgetMode: o,
              budgetOperator: a,
              budgetUnit: l,
              columnKey: r("AdsCampaignGroupBulkEditColumnKeys")
                .CAMPAIGN_GROUP_BUDGET,
            },
            {
              line: "129",
              module: "AdsBulkEditCampaignGroupBudgetPlugin.js",
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
            lifetimeBudget: o,
            onBulkChangeBudget: a,
          }),
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      return d.jsx("div", {
        className: r("joinClasses")(void 0, e.className),
        children: d.jsx(
          r("AdsBulkEditCampaignGroupBudgetFieldContainer.react"),
          { extraData: e },
        ),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e, t) {
      var n = e,
        o = +n.lifetime_spent || 0;
      return d.jsx("div", {
        className: r("joinClasses")("_1pqw amountSpentField", t.className),
        children: d.jsx(r("AdsBulkEditBaseBudgetSpentFieldContainer.react"), {
          amountSpent: o,
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = babelHelpers.extends(
        {
          type: "campaignGroupBulkEditMenu",
          key: "campaignGroupCampaignGroupBudget",
          dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_GROUP_BUDGET,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").CAMPAIGN_GROUP_BUDGET;
          },
          getTooltip: function (t) {
            return t.noneCampaignGroupWithBudget === !0
              ? o("AdsBulkEditMenuContent").CAMPAIGN_GROUP_NON_CBO_TOOLTIP
              : null;
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").CAMPAIGN_GROUP_BUDGET,
              "campaign",
              t.source,
            );
          },
          isDisabled: function (t) {
            return t.noneCampaignGroupWithBudget === !0;
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_GROUP_BUDGET,
          },
          getBulkControlConfig: function () {
            return { renderer: f };
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
                dailyBudgetPath: r("AdsAPICampaignGroupPaths").DAILY_BUDGET,
                level: "campaign",
                lifetimeBudgetPath: r("AdsAPICampaignGroupPaths")
                  .LIFETIME_BUDGET,
                statusPath: r("AdsAPICampaignGroupPaths").STATUS,
              }),
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
              cellRenderer: function (t, n, r) {
                return h(n, r);
              },
              columnKey: r("AdsCampaignGroupBulkEditColumnKeys")
                .CAMPAIGN_GROUP_AMOUNT_SPENT,
              label: o("AdsCampaignGroupBudgetStrings")
                .campaignGroupBudgetToggleOffModalAmountSpentColumnTitle,
              width: o("GeoTableWidth").pixel(120),
              fieldsPaths: [
                r("AdsAPICampaignGroupPaths").LIFETIME_BUDGET_SPENT,
              ],
            },
            {
              cellRenderer: function (t, n, r) {
                return g(r);
              },
              columnKey: r("AdsCampaignGroupBulkEditColumnKeys")
                .CAMPAIGN_GROUP_BUDGET,
              label: p,
              width: o("GeoTableWidth").pixel(400),
              fieldsPaths: [
                r("AdsAPICampaignGroupPaths").DAILY_BUDGET,
                r("AdsAPICampaignGroupPaths").LIFETIME_BUDGET,
              ],
            },
          ],
        },
      ),
      C = y;
    l.default = C;
  },
  226,
);

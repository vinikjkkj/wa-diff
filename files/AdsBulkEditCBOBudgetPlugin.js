__d(
  "AdsBulkEditCBOBudgetPlugin",
  [
    "cx",
    "fbt",
    "AdsAPICampaignPaths",
    "AdsBulkEditBaseBudgetSpentFieldContainer.react",
    "AdsBulkEditCampaignBudgetFieldContainer.react",
    "AdsBulkEditChangeAllCampaignBudgetsDataAction",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditTotalBudgetSectionContainer.react",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGroupBudgetLoggingUtils",
    "AdsCampaignGroupBudgetMidFlightToggleLoggingEvents",
    "AdsCampaignGroupBudgetStrings",
    "AdsCampaignStatusLabels",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsErrorUtils",
    "AdsNameBulkEditPluginUtils",
    "GeoTableWidth",
    "GeoText.react",
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
      c = e || (e = o("react"));
    function d(e, t) {
      var n = r("AdsCampaignStatusLabels")[
        e.getIn(r("AdsAPICampaignPaths").STATUS)
      ];
      return c.jsx("div", {
        className: r("joinClasses")("_1pqw statusField", t.className),
        children: c.jsx(r("GeoText.react"), { children: n }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t) {
      var n = e,
        o = +n.lifetime_spent || 0;
      return c.jsx("div", {
        className: r("joinClasses")("_1pqw amountSpentField", t.className),
        children: c.jsx(r("AdsBulkEditBaseBudgetSpentFieldContainer.react"), {
          amountSpent: o,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t, n) {
      var a = r("adsCampaignGetBudgetAmount")(t),
        l = r("nullthrows")(
          r("adsCampaignGetBudgetMode")(t.daily_budget, t.lifetime_budget),
        ),
        s = n.className,
        u = n.newCampaignStatus,
        d = function (n, o) {
          n &&
            r("AdsBulkEditChangeAllCampaignBudgetsDataAction").dispatch(
              {
                budget: n,
                budgetMode: o,
                columnKey: r("AdsCampaignBulkEditColumnKeys").BUDGET,
                adObjectIDs: e,
              },
              {
                line: "94",
                module: "AdsBulkEditCBOBudgetPlugin.js",
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
      return (
        _ != null &&
          o("AdsCampaignGroupBudgetLoggingUtils").logMidFlightToggleEvent(
            o("AdsCampaignGroupBudgetMidFlightToggleLoggingEvents")
              .ToggleOffError,
            e,
            null,
            _,
          ),
        c.jsx("div", {
          className: r("joinClasses")("_48je budgetInputBox", s),
          children: c.jsx(r("AdsBulkEditCampaignBudgetFieldContainer.react"), {
            budget: a,
            budgetMode: l,
            campaign: t,
            errorMessage: _,
            isNewCampaign: !0,
            isReadOnly: !u,
            minDailyBudget: 100,
            onBudgetChange: d,
            onBudgetModeChange: d,
          }),
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = babelHelpers.extends(
        {
          type: "campaignGroupBulkEditMenu",
          key: "campaignGroupCBOBudget",
          dialogType: r("AdsBulkEditDialogTypes").ALL_CAMPAIGN_BUDGETS,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").BUDGET;
          },
          getTooltip: function () {
            return null;
          },
          getTestID: function () {
            return "";
          },
          onClick: function () {},
          isDisabled: function () {
            return !0;
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").ALL_CAMPAIGN_BUDGETS,
          },
          supportBulkControl: !1,
          getSchema: function () {
            return {
              daily_budget: r("AdsEmptyUniformMixedBulkValueTypes"),
              lifetime_budget: r("AdsEmptyUniformMixedBulkValueTypes"),
            };
          },
          getSummarySection: function () {
            return {
              position: "bottom",
              node: c.jsx(r("AdsBulkEditTotalBudgetSectionContainer.react"), {
                level: "campaign",
                showBreakdown: !0,
              }),
            };
          },
          getDescriptionText: function () {
            return o("AdsCampaignGroupBudgetStrings")
              .campaignGroupBudgetToggleOffModalLifetimeBudgetDescription;
          },
          columnConfigs: [
            {
              cellRenderer: function (t, n, a) {
                return o("AdsNameBulkEditPluginUtils").getColumnRenderer(
                  t,
                  n,
                  r("AdsCampaignBulkEditColumnKeys").CAMPAIGN_NAME,
                  a,
                  "ad_set",
                  r("AdsAPICampaignPaths").NAME,
                  !0,
                );
              },
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .CAMPAIGN_NAME_READ_ONLY,
              label: u._(/*BTDS*/ ""),
              width: o("GeoTableWidth").proportional(100),
              fieldsPaths: [r("AdsAPICampaignPaths").NAME],
            },
            {
              cellRenderer: function (t, n, r) {
                return d(n, r);
              },
              columnKey: r("AdsCampaignBulkEditColumnKeys").STATUS,
              label: u._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(80),
              fieldsPaths: [r("AdsAPICampaignPaths").STATUS],
            },
            {
              cellRenderer: function (t, n, r) {
                return m(n, r);
              },
              columnKey: r("AdsCampaignBulkEditColumnKeys").AMOUNT_SPENT,
              label: o("AdsCampaignGroupBudgetStrings")
                .campaignGroupBudgetToggleOffModalAmountSpentColumnTitle,
              width: o("GeoTableWidth").pixel(120),
              fieldsPaths: [r("AdsAPICampaignPaths").LIFETIME_BUDGET_SPENT],
            },
            {
              cellRenderer: p,
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .CAMPAIGN_BUDGET_FROM_CAMPAIGN_GROUP,
              label: u._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(300),
              fieldsPaths: [
                r("AdsAPICampaignPaths").DAILY_BUDGET,
                r("AdsAPICampaignPaths").LIFETIME_BUDGET,
              ],
            },
          ],
        },
      ),
      f = _;
    l.default = f;
  },
  226,
);

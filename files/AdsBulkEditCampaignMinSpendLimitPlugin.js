__d(
  "AdsBulkEditCampaignMinSpendLimitPlugin",
  [
    "cx",
    "fbt",
    "AdsAPICampaignPaths",
    "AdsBulkEditBaseBudgetSpentFieldContainer.react",
    "AdsBulkEditBulkControlSpendLimitFieldContainer.react",
    "AdsBulkEditCampaignSpendLimitFieldContainer.react",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsBulkEditSpendLimitSummarySectionContainer.react",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGroupBudgetStrings",
    "AdsCampaignGroupBudgetValidationUtils",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "GeoTableWidth",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = u._(/*BTDS*/ "");
    function m(e, t) {
      return c.jsx(r("AdsBulkEditBulkControlSpendLimitFieldContainer.react"), {
        bulkControlSpec: t,
        campaignIDs: e,
        columnKey: r("AdsCampaignBulkEditColumnKeys").MIN_SPEND_LIMIT,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t, n) {
      return c.jsx("div", {
        className: r("joinClasses")(void 0, n.className),
        children: c.jsx(
          r("AdsBulkEditCampaignSpendLimitFieldContainer.react"),
          {
            columnKey: r("AdsCampaignBulkEditColumnKeys").MIN_SPEND_LIMIT,
            extraData: n,
          },
        ),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t) {
      var n = e,
        o = +n.lifetime_spent || 0;
      return c.jsx("div", {
        className: r("joinClasses")("_1pqw amountSpentField", t.className),
        children: c.jsx(r("AdsBulkEditBaseBudgetSpentFieldContainer.react"), {
          amountSpent: o,
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignMinSpendLimit",
          dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_MIN_SPEND_LIMIT,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").CAMPAIGN_MIN_SPEND_LIMIT;
          },
          getTooltip: function (t) {
            return o(
              "AdsBulkEditMenuItemUtils",
            ).getCampaignSpendLimitDisabledTooltip(t);
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").CAMPAIGN_MIN_SPEND_LIMIT,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            return t.isRF === !0 || t.isCampaignSpendLimitDisabled === !0;
          },
          isHidden: function (t) {
            return (
              t.someCampaignsHaveValidNonPercentageLimits === !0 &&
              t.someCampaignsHaveValidPercentageLimits === !0
            );
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_MIN_SPEND_LIMIT,
          },
          getBulkControlConfig: function () {
            return { renderer: m };
          },
          getSchema: function () {
            var e;
            return {
              daily_min_spend_target: (e = r(
                "AdsEmptyUniformMixedBulkValueTypes",
              )),
              daily_spend_cap: e,
              lifetime_min_spend_target: e,
              lifetime_spend_cap: e,
              max_budget_spend_percentage: e,
              min_budget_spend_percentage: e,
            };
          },
          getSummarySection: function () {
            return {
              position: "bottom",
              node: c.jsx(
                r("AdsBulkEditSpendLimitSummarySectionContainer.react"),
                {
                  columnKey: r("AdsCampaignBulkEditColumnKeys").MIN_SPEND_LIMIT,
                  level: "ad_set",
                },
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
              cellRenderer: p,
              columnKey: r("AdsCampaignBulkEditColumnKeys").MIN_SPEND_LIMIT,
              label: d,
              width: o("GeoTableWidth").pixel(400),
              fieldsPaths: [
                r("AdsAPICampaignPaths").DAILY_MIN_SPEND_TARGET,
                r("AdsAPICampaignPaths").LIFETIME_MIN_SPEND_TARGET,
                o("AdsCampaignGroupBudgetValidationUtils")
                  .CAMPAIGN_MIN_SPEND_TARGET_PATH,
                o("AdsCampaignGroupBudgetValidationUtils")
                  .CAMPAIGN_SPEND_LIMIT_PATH,
                o("AdsCampaignGroupBudgetValidationUtils")
                  .CAMPAIGN_MIN_SPEND_TARGET_OR_CAMPAIGN_GROUP_BUDGET_PATH,
              ],
            },
          ],
        },
      ),
      g = f;
    l.default = g;
  },
  226,
);

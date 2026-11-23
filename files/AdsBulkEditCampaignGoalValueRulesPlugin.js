__d(
  "AdsBulkEditCampaignGoalValueRulesPlugin",
  [
    "fbt",
    "AdsBulkEditCampaignValueAdjustmentRuleContainer.react",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuItemUtils",
    "AdsBulkValueUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGoalExpressionUtils",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "GeoTableWidth",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 400;
    function d(e, t) {
      var n = t == null ? void 0 : t.value_rule_set_id;
      return u.jsx(r("AdsBulkEditCampaignValueAdjustmentRuleContainer.react"), {
        bulkCampaignRuleCollectionID:
          n != null ? n : o("AdsBulkValueUtils").aggregate([]),
        campaignIDs: e,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      return u.jsx("div", {
        className: r("joinClasses")(void 0, n.className),
        children: u.jsx(
          r("AdsBulkEditCampaignValueAdjustmentRuleContainer.react"),
          {
            bulkCampaignRuleCollectionID: o("AdsBulkValueUtils").aggregate([
              t.value_rule_set_id,
            ]),
            campaignIDs: e,
          },
        ),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignGoalValueRules",
          dialogType: r("AdsBulkEditDialogTypes")
            .CAMPAIGN_GOAL_VALUE_ADJUSTMENT_RULE,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return s._(/*BTDS*/ "");
          },
          getTestID: function () {
            return "quick_edit_campaign_goal_value_rules_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").CAMPAIGN_GOAL_VALUE_ADJUSTMENT_RULE,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            return !1;
          },
          isHidden: function (t) {
            return (
              t.shouldRenderCampaignGoalPGDSection !== !0 ||
              !o(
                "AdsCampaignGoalExpressionUtils",
              ).shouldShowVARInGoalExpression()
            );
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes")
              .CAMPAIGN_GOAL_VALUE_ADJUSTMENT_RULE,
          },
          getSchema: function () {
            return {
              value_rule_set_id: r("AdsEmptyUniformMixedBulkValueTypes"),
            };
          },
          getBulkControlConfig: function () {
            return { renderer: d };
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignNameColumnConfig(),
            ),
            {
              cellRenderer: m,
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .CAMPAIGN_GOAL_VALUE_ADJUSTMENT_RULE,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(c),
            },
          ],
        },
      ),
      _ = p;
    l.default = _;
  },
  226,
);

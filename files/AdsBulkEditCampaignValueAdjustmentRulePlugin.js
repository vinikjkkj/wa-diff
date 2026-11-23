__d(
  "AdsBulkEditCampaignValueAdjustmentRulePlugin",
  [
    "AdsBulkEditCampaignValueAdjustmentRuleContainer.react",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuItemUtils",
    "AdsBulkValueUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "AdsValueAdjustmentRulePersonaStrings",
    "GeoTableWidth",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n = "value_rule_set_id",
        a = t == null ? void 0 : t[n];
      return s.jsx(r("AdsBulkEditCampaignValueAdjustmentRuleContainer.react"), {
        bulkCampaignRuleCollectionID:
          a != null ? a : o("AdsBulkValueUtils").aggregate([]),
        campaignIDs: e,
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e, t, n) {
      return s.jsx(r("AdsBulkEditCampaignValueAdjustmentRuleContainer.react"), {
        bulkCampaignRuleCollectionID: o("AdsBulkValueUtils").aggregate([
          t.value_rule_set_id,
        ]),
        campaignIDs: e,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignValueAdjustmentRule",
          dialogType: r("AdsBulkEditDialogTypes").VALUE_ADJUSTMENT_RULE,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsValueAdjustmentRulePersonaStrings").getVARFieldTitle();
          },
          getTooltip: function (t) {
            var e,
              n = t.accountValueAdjustmentRuleCollectionsLO;
            if (n == null || !n.hasValueWithoutError())
              return "This is not available";
            var r = n.getValueEnforcing();
            return r.length === 0
              ? "Create a rule set first"
              : ((e = t.isCampaignEligibleForValueAdjustmentRule) == null
                    ? void 0
                    : e.some) === !1
                ? "This is not available"
                : null;
          },
          getTestID: function () {
            return "bulk_edit_value_adjustment_rule";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").VALUE_ADJUSTMENT_RULE,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            var e,
              n = t.accountValueAdjustmentRuleCollectionsLO;
            if (n == null || !n.hasValueWithoutError()) return !0;
            var r = n.getValueEnforcing();
            return r.length === 0
              ? !0
              : ((e = t.isCampaignEligibleForValueAdjustmentRule) == null
                  ? void 0
                  : e.some) === !1;
          },
          isHidden: function (t) {
            return !1;
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").VALUE_ADJUSTMENT_RULE,
          },
          getBulkControlConfig: function () {
            return { renderer: u };
          },
          getSchema: function () {
            return {
              value_rule_set_id: r("AdsEmptyUniformMixedBulkValueTypes"),
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
              cellRenderer: c,
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .VALUE_ADJUSTMENT_RULE,
              label: o(
                "AdsValueAdjustmentRulePersonaStrings",
              ).getVARFieldTitle(),
              width: o("GeoTableWidth").pixel(440),
            },
          ],
        },
      ),
      m = d;
    l.default = m;
  },
  98,
);

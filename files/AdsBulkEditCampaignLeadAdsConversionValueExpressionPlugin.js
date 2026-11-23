__d(
  "AdsBulkEditCampaignLeadAdsConversionValueExpressionPlugin",
  [
    "AdsAPICampaignPaths",
    "AdsBulkEditCampaignLeadAdsValueExpressionContainer.react",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditFieldsDialogConfig",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsLeadGenConversionValueExpressionUtils",
    "AdsNameBulkEditPluginUtils",
    "GeoTableWidth",
    "LeadAdsValueExpressionStrings",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t, n) {
      return s.jsx("div", {
        className: n.className,
        children: s.jsx(
          r("AdsBulkEditCampaignLeadAdsValueExpressionContainer.react"),
          { adObjectIDs: e, campaign: t },
        ),
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    var c = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignLeadAdsConversionValueExpression",
          dialogType: r("AdsBulkEditDialogTypes")
            .CAMPAIGN_LEAD_ADS_CONVERSION_VALUE_EXPRESSION,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("LeadAdsValueExpressionStrings")
              .VALUE_EXPRESSION_VALUE_RULES_TITLE;
          },
          getTestID: function () {
            return "bulk_edit_campaign_lead_ads_conversion_value_expression";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes")
                .CAMPAIGN_LEAD_ADS_CONVERSION_VALUE_EXPRESSION,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            var e;
            return (
              ((e = t.isLeadAdsConversionValueExpressionEnabled) == null
                ? void 0
                : e.some) === !1
            );
          },
          isHidden: function (t) {
            return !o(
              "AdsLeadGenConversionValueExpressionUtils",
            ).isValueExpressionBulkEditingEnabled();
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes")
              .CAMPAIGN_LEAD_ADS_CONVERSION_VALUE_EXPRESSION,
          },
          getBulkControlConfig: function () {
            return null;
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignNameColumnConfig(),
            ),
            {
              cellRenderer: u,
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .CAMPAIGN_LEAD_ADS_CONVERSION_VALUE_EXPRESSION,
              label: o("LeadAdsValueExpressionStrings")
                .VALUE_EXPRESSION_VALUE_RULES_TITLE,
              width: o("GeoTableWidth").proportional(
                o("AdsBulkEditFieldsDialogConfig").GEO_DATA_TABLE.CELL_WIDTH,
              ),
              fieldsPaths: [
                r("AdsAPICampaignPaths").CONVERSION_VALUE_EXPRESSION_SPEC,
              ],
            },
          ],
        },
      ),
      d = c;
    l.default = d;
  },
  98,
);

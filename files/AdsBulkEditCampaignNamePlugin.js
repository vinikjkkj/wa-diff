__d(
  "AdsBulkEditCampaignNamePlugin",
  [
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsNameBulkEditPluginCommon",
    "AdsNameBulkEditPluginUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignName",
          dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_NAME,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").NAME_LABEL;
          },
          getTestID: function () {
            return "quick_edit_campaign_name_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").CAMPAIGN_NAME,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            return !1;
          },
          pivots: { dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_NAME },
          getBulkControlConfig: function () {
            return o("AdsNameBulkEditPluginUtils").getBulkControlConfigs(
              "ad_set",
              r("AdsCampaignBulkEditColumnKeys").CAMPAIGN_NAME,
            );
          },
          getSchema: o("AdsNameBulkEditPluginCommon").getSchema,
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignNameColumnConfig(),
            ),
          ],
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);

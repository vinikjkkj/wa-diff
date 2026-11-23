__d(
  "AdsBulkEditCampaignGroupNamePlugin",
  [
    "fbt",
    "AdsAPICampaignGroupPaths",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditFieldsDialogConfig",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignGroupBulkEditColumnKeys",
    "AdsNameBulkEditPluginCommon",
    "AdsNameBulkEditPluginUtils",
    "GeoTableWidth",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = babelHelpers.extends(
        {
          type: "campaignGroupBulkEditMenu",
          key: "campaignGroupName",
          dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_GROUP_NAME,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").NAME_LABEL;
          },
          getTestID: function () {
            return "quick_edit_campaign_group_name_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").CAMPAIGN_GROUP_NAME,
              "campaign",
              t.source,
            );
          },
          isDisabled: function (t) {
            return !1;
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_GROUP_NAME,
          },
          getBulkControlConfig: function () {
            return o("AdsNameBulkEditPluginUtils").getBulkControlConfigs(
              "campaign",
              r("AdsCampaignGroupBulkEditColumnKeys").CAMPAIGN_GROUP_NAME,
            );
          },
          getSchema: o("AdsNameBulkEditPluginCommon").getSchema,
          columnConfigs: [
            {
              cellRenderer: function (t, n, a) {
                var e;
                return o("AdsNameBulkEditPluginUtils").getColumnRenderer(
                  t,
                  n,
                  r("AdsCampaignGroupBulkEditColumnKeys").CAMPAIGN_GROUP_NAME,
                  a,
                  "campaign",
                  r("AdsAPICampaignGroupPaths").NAME,
                  (e = a.readOnly) != null ? e : !1,
                );
              },
              columnKey: r("AdsCampaignGroupBulkEditColumnKeys")
                .CAMPAIGN_GROUP_NAME,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").proportional(
                o("AdsBulkEditFieldsDialogConfig").GEO_DATA_TABLE.CELL_WIDTH,
              ),
              fieldsPaths: [r("AdsAPICampaignGroupPaths").NAME],
            },
          ],
        },
      ),
      u = e;
    l.default = u;
  },
  226,
);

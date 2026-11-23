__d(
  "AdsBulkEditCampaignGroupDeactivateAllPlugin",
  [
    "AdsAccountCreationUtils",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsShowAdsStatusChangeDialogAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {
          type: "campaignGroupBulkEditMenu",
          key: "campaignGroupDeactivateAll",
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").DEACTIVATE_ALL_CAMPAIGNS;
          },
          getTestID: function () {
            return "bulk_edit_status_turn_off";
          },
          getTooltip: function (t) {
            return t.isRF === !0
              ? o("AdsBulkEditMenuContent").CAMPAIGN_GROUP_RF_TOOLTIP
              : o(
                  "AdsAccountCreationUtils",
                ).getAccountHasNoPublishPermissionDisabledReason(t.account);
          },
          onClick: function (t) {
            r("AdsShowAdsStatusChangeDialogAction").dispatch(
              {
                ids: o(
                  "AdsBulkEditMenuItemUtils",
                ).getValidIDsForToggleStatusChange(t.statusDataArray, "PAUSED"),
                targetStatus: "PAUSED",
                level: "campaign",
              },
              {
                line: "44",
                module: "AdsBulkEditCampaignGroupDeactivateAllPlugin.js",
                moduleID: i.id,
              },
            );
          },
          isDisabled: function (t) {
            return (
              o("AdsBulkEditMenuItemUtils").isRunStatusChangeInvalid(
                t.statusDataArray,
                "PAUSED",
              ) ||
              t.isRF === !0 ||
              o(
                "AdsAccountCreationUtils",
              ).getAccountHasNoPublishPermissionDisabledReason(t.account) !=
                null
            );
          },
          dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_GROUP_DEACTIVATE_ALL,
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes")
              .CAMPAIGN_GROUP_DEACTIVATE_ALL,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);

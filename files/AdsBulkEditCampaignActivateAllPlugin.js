__d(
  "AdsBulkEditCampaignActivateAllPlugin",
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
        { type: "campaignBulkEditMenu", key: "campaignActivateAll" },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").ACTIVATE_ALL_CAMPAIGNS;
          },
          getTooltip: function (t) {
            return o(
              "AdsAccountCreationUtils",
            ).getAccountHasNoPublishPermissionDisabledReason(t.account);
          },
          onClick: function (t) {
            r("AdsShowAdsStatusChangeDialogAction").dispatch(
              {
                ids: o(
                  "AdsBulkEditMenuItemUtils",
                ).getValidIDsForToggleStatusChange(t.statusDataArray, "ACTIVE"),
                targetStatus: "ACTIVE",
                level: "ad_set",
              },
              {
                line: "38",
                module: "AdsBulkEditCampaignActivateAllPlugin.js",
                moduleID: i.id,
              },
            );
          },
          isDisabled: function (t) {
            return (
              o("AdsBulkEditMenuItemUtils").isRunStatusChangeInvalid(
                t.statusDataArray,
                "ACTIVE",
              ) ||
              o(
                "AdsAccountCreationUtils",
              ).getAccountHasNoPublishPermissionDisabledReason(t.account) !=
                null ||
              t.isAnyPublishedCreativeTestingAdObject === !0
            );
          },
          dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_ACTIVATE_ALL,
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_ACTIVATE_ALL,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);

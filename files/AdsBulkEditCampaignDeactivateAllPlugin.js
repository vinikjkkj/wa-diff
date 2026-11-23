__d(
  "AdsBulkEditCampaignDeactivateAllPlugin",
  [
    "AdsAccountCreationUtils",
    "AdsBulkEditCTXEarlyPausePreventionVisibilitySelectors",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditEarlyPausePreventionVisibilitySelectors",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsBuyingTypes",
    "AdsCampaignGroupStatusUtils",
    "AdsCampaignStatusUtils",
    "AdsMgmtFrictionPopupHelper",
    "AdsObjectTypes",
    "AdsPECBOMidflightDialogQueuedAction",
    "AdsShowAdsStatusChangeDialogAction",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return (
        e.isRF === !0 &&
        o("AdsCampaignStatusUtils").isPauseRF(
          r("AdsBuyingTypes").RESERVED,
          "ACTIVE",
        )
      );
    }
    var u = babelHelpers.extends(
        { type: "campaignBulkEditMenu", key: "campaignDeactivateAll" },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").DEACTIVATE_ALL_CAMPAIGNS;
          },
          getTestID: function () {
            return "quick_edit_campaign_turn_off_button";
          },
          getTooltip: function (t) {
            return s(t)
              ? o("AdsCampaignGroupStatusUtils")
                  .CANNOT_PAUSE_RF_TOOLTIP_CAMPAIGN
              : t.hasBudgetFlex === !0
                ? o("AdsBulkEditMenuContent").CAMPAIGN_BUDGET_FLEX_TOOLTIP
                : o(
                    "AdsAccountCreationUtils",
                  ).getAccountHasNoPublishPermissionDisabledReason(t.account);
          },
          onClick: function (n) {
            var t = o(
              "AdsBulkEditMenuItemUtils",
            ).getValidIDsForToggleStatusChange(n.statusDataArray, "PAUSED");
            if (
              t.length !== 1 ||
              n.isAnyPublishedCreativeTestingAdObject === !0
            )
              r("AdsShowAdsStatusChangeDialogAction").dispatch(
                { ids: t, targetStatus: "PAUSED", level: "ad_set" },
                {
                  line: "79",
                  module: "AdsBulkEditCampaignDeactivateAllPlugin.js",
                  moduleID: i.id,
                },
              );
            else {
              var a = r(
                  "AdsBulkEditCTXEarlyPausePreventionVisibilitySelectors",
                )(r("AdsObjectTypes").CAMPAIGN),
                l = a.ctxPausePreventionData,
                s = a.plugins;
              if (l.isEligible && !(e || (e = r("isEmpty")))(s)) {
                r("AdsShowAdsStatusChangeDialogAction").dispatch(
                  { ids: t, targetStatus: "PAUSED", level: "ad_set" },
                  {
                    line: "92",
                    module: "AdsBulkEditCampaignDeactivateAllPlugin.js",
                    moduleID: i.id,
                  },
                );
                return;
              }
              {
                var u = r("AdsBulkEditEarlyPausePreventionVisibilitySelectors")(
                    r("AdsObjectTypes").CAMPAIGN,
                  ),
                  c = u.bulk,
                  d = u.earlyPausePreventionData,
                  m = u.plugins;
                if (
                  o(
                    "AdsMgmtFrictionPopupHelper",
                  ).baseCheckForEarlyPausePreventionModalEligibilityCriteria(
                    t[0],
                    !1,
                    d,
                  ) &&
                  (d == null ? void 0 : d.adObjectID) != null &&
                  c &&
                  !(e || (e = r("isEmpty")))(m)
                ) {
                  r("AdsShowAdsStatusChangeDialogAction").dispatch(
                    { ids: t, targetStatus: "PAUSED", level: "ad_set" },
                    {
                      line: "116",
                      module: "AdsBulkEditCampaignDeactivateAllPlugin.js",
                      moduleID: i.id,
                    },
                  );
                  return;
                }
              }
              r("AdsPECBOMidflightDialogQueuedAction").dispatch(
                {
                  breakdownIssueType: null,
                  campaignID: t[0],
                  midflightActionType: "PAUSE",
                  runStatus: "PAUSED",
                },
                {
                  line: "127",
                  module: "AdsBulkEditCampaignDeactivateAllPlugin.js",
                  moduleID: i.id,
                },
              );
            }
          },
          isDisabled: function (t) {
            return (
              o("AdsBulkEditMenuItemUtils").isRunStatusChangeInvalid(
                t.statusDataArray,
                "PAUSED",
              ) ||
              s(t) ||
              o(
                "AdsAccountCreationUtils",
              ).getAccountHasNoPublishPermissionDisabledReason(t.account) !=
                null ||
              t.hasBudgetFlex === !0
            );
          },
          dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_DEACTIVATE_ALL,
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_DEACTIVATE_ALL,
          },
        },
      ),
      c = u;
    l.default = c;
  },
  98,
);

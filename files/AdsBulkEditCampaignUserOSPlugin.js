__d(
  "AdsBulkEditCampaignUserOSPlugin",
  [
    "AdsAPICampaignPaths",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "AdsPlacementFieldLabels",
    "AdsUEditorCampaignBulkEditMobileOsVersionContainer.react",
    "GeoTableWidth",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(e, t, n) {
      return u.jsx("div", {
        className: n.className,
        children: u.jsx(
          r("AdsUEditorCampaignBulkEditMobileOsVersionContainer.react"),
          {},
        ),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignUserOS",
          dialogType: r("AdsBulkEditDialogTypes").USER_OS,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            var e;
            return (e = r("AdsPlacementFieldLabels").get("user_os")) != null
              ? e
              : "";
          },
          getTooltip: function (t) {
            var e;
            if (t.isRF === !0)
              return o("AdsBulkEditMenuContent").CAMPAIGN_RF_TOOLTIP;
            if (
              ((e = t.isAutomatedCampaign) == null ? void 0 : e.isAutomated) ===
              !0
            ) {
              var n;
              return (n = t.isAutomatedCampaign) == null
                ? void 0
                : n.automatedCampaignMessage;
            }
            return t.isAutoPlacementEnabledOrInAutomationUnificationExp
              ? o("AdsBulkEditMenuContent").CAMPAIGN_PLACEMENT_AUTO_TOOLTIP
              : t.isPACCampaign === !0
                ? o("AdsBulkEditMenuContent").CAMPAIGN_PLACEMENT_PAC_TOOLTIP
                : t.isMobileOptionsDisabled === !0
                  ? o("AdsBulkEditMenuContent")
                      .CAMPAIGN_PLACEMENT_MOBILE_DEVICE_TOOLTIP
                  : t.isMobileOSVersionDisabled === !0
                    ? o("AdsBulkEditMenuContent")
                        .CAMPAIGN_PLACEMENT_MOBILE_OS_TOOLTIP
                    : null;
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").USER_OS,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            var e;
            return (
              t.isRF === !0 ||
              ((e = t.isAutomatedCampaign) == null ? void 0 : e.isAutomated) ===
                !0 ||
              !!t.isAutoPlacementEnabledOrInAutomationUnificationExp ||
              t.isPACCampaign === !0 ||
              t.isMobileOptionsDisabled === !0 ||
              t.isMobileOSVersionDisabled === !0
            );
          },
          pivots: { dialogType: r("AdsBulkEditDialogTypes").USER_OS },
          getSchema: function () {
            return {
              targeting: { user_os: r("AdsEmptyUniformMixedBulkValueTypes") },
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
              columnKey: r("AdsCampaignBulkEditColumnKeys").USER_OS,
              label:
                (e = r("AdsPlacementFieldLabels").get("user_os")) != null
                  ? e
                  : "",
              width: o("GeoTableWidth").pixel(420),
              fieldsPaths: [r("AdsAPICampaignPaths").TARGETING.USER_OS],
            },
          ],
        },
      ),
      m = d;
    l.default = m;
  },
  98,
);

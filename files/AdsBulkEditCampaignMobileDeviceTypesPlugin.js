__d(
  "AdsBulkEditCampaignMobileDeviceTypesPlugin",
  [
    "fbt",
    "AdsAPICampaignPaths",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "AdsUEditorCampaignBulkEditMobileDeviceTypeContainer.react",
    "GeoTableWidth",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      return u.jsx("div", {
        className: void 0,
        children: u.jsx(
          r("AdsUEditorCampaignBulkEditMobileDeviceTypeContainer.react"),
          { disabled: e.length === 0 },
        ),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t, n) {
      return u.jsx("div", {
        className: r("joinClasses")(void 0, n.className),
        children: u.jsx(
          r("AdsUEditorCampaignBulkEditMobileDeviceTypeContainer.react"),
          {},
        ),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignMobileDeviceTypes",
          dialogType: r("AdsBulkEditDialogTypes").MOBILE_DEVICE_TYPES,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").MOBILE_DEVICE_TYPES;
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
                  : null;
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").MOBILE_DEVICE_TYPES,
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
              t.isMobileOptionsDisabled === !0
            );
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").MOBILE_DEVICE_TYPES,
          },
          getBulkControlConfig: function () {
            return { renderer: c };
          },
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
              cellRenderer: d,
              columnKey: r("AdsCampaignBulkEditColumnKeys").MOBILE_DEVICE_TYPES,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(420),
              fieldsPaths: [r("AdsAPICampaignPaths").TARGETING.USER_OS],
            },
          ],
        },
      ),
      p = m;
    l.default = p;
  },
  226,
);

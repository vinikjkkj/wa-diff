__d(
  "AdsBulkEditCampaignDevicePlatformsPlugin",
  [
    "fbt",
    "AdsAPICampaignPaths",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsDevicePlatformsBulkEditContainer.react",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "AdsPlacementFieldLabels",
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
        children: u.jsx(r("AdsDevicePlatformsBulkEditContainer.react"), {
          disabled: e.length === 0,
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t, n) {
      return u.jsx("div", {
        className: r("joinClasses")(void 0, n.className),
        children: u.jsx(r("AdsDevicePlatformsBulkEditContainer.react"), {}),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignDevicePlatforms",
          dialogType: r("AdsBulkEditDialogTypes").DEVICE_PLATFORMS,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            var e;
            return (e = r("AdsPlacementFieldLabels").get("device_platforms")) !=
              null
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
                : null;
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").DEVICE_PLATFORMS,
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
              t.isPACCampaign === !0
            );
          },
          pivots: { dialogType: r("AdsBulkEditDialogTypes").DEVICE_PLATFORMS },
          getBulkControlConfig: function () {
            return { renderer: c };
          },
          getSchema: function () {
            return {
              targeting: {
                device_platforms: r("AdsEmptyUniformMixedBulkValueTypes"),
              },
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
              columnKey: r("AdsCampaignBulkEditColumnKeys").DEVICE_PLATFORMS,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(420),
              fieldsPaths: [
                r("AdsAPICampaignPaths").TARGETING.DEVICE_PLATFORMS,
              ],
            },
          ],
        },
      ),
      p = m;
    l.default = p;
  },
  226,
);

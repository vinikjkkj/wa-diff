__d(
  "AdsBulkEditCampaignProductSetPlugin",
  [
    "cx",
    "fbt",
    "AdsAPICampaignPaths",
    "AdsBulkEditCampaignProductSetFieldContainer.react",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "AdsPlacementFieldLabels",
    "GeoTableWidth",
    "firstx",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react"));
    function d(e, t) {
      return c.jsx("div", {
        className: r("joinClasses")("_48je", "_1pqw", t.className),
        children: c.jsx(
          r("AdsBulkEditCampaignProductSetFieldContainer.react"),
          { campaignID: r("firstx")(e) },
        ),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignProductSet",
          dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_PRODUCT_SET,
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
            return t.isAutoPlacement === !0
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
              t.isAutoPlacement === !0 ||
              t.isPACCampaign === !0 ||
              t.isMobileOptionsDisabled === !0 ||
              t.isMobileOSVersionDisabled === !0
            );
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_PRODUCT_SET,
          },
          getSchema: function () {
            return {
              promoted_object: {
                product_set_id: r("AdsEmptyUniformMixedBulkValueTypes"),
              },
            };
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
              cellRenderer: function (t, n, r) {
                return d(t, r);
              },
              columnKey: r("AdsCampaignBulkEditColumnKeys").PRODUCT_SET,
              label: u._(/*BTDS*/ ""),
              width: o("GeoTableWidth").proportional(120),
              fieldsPaths: [
                r("AdsAPICampaignPaths").PROMOTED_OBJECT.PRODUCT_SET_ID,
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

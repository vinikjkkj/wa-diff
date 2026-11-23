__d(
  "AdsBulkEditCampaignBillingEventPlugin",
  [
    "fbt",
    "invariant",
    "AdsAPICampaignPaths",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsBulkEditOptimizationDeliveryContainer.react",
    "AdsCampaignBulkEditColumnKeys",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "AdsOptimizationStrings",
    "AdsUniformValue",
    "GeoTableWidth",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react"));
    function d(e, t) {
      var n = t == null ? void 0 : t.billing_event;
      return (
        n || u(0, 6186),
        c.jsx("div", {
          className: void 0,
          children: c.jsx(r("AdsBulkEditOptimizationDeliveryContainer.react"), {
            billingEvent: n,
            campaignIDs: e,
            columnKey: r("AdsCampaignBulkEditColumnKeys").BILLING_EVENT,
          }),
        })
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      var o = n.className,
        a = t.billing_event,
        i = new (r("AdsUniformValue"))(a);
      return c.jsx("div", {
        className: r("joinClasses")(void 0, o),
        children: c.jsx(r("AdsBulkEditOptimizationDeliveryContainer.react"), {
          billingEvent: i,
          campaignIDs: e,
          columnKey: r("AdsCampaignBulkEditColumnKeys").BILLING_EVENT,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignBillingEvent",
          dialogType: r("AdsBulkEditDialogTypes").BILLING_EVENT,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").CAMPAIGN_BILLING_EVENT;
          },
          getTooltip: function (t) {
            return t.hasSAPCampaign === !0
              ? o("AdsBulkEditMenuContent")
                  .SAP_DISABLED_BILLING_EVENT_FIELD_TOOLTIP
              : t.isRF === !0
                ? o("AdsBulkEditMenuContent").CAMPAIGN_RF_TOOLTIP
                : t.isBillingEventDisabled === !0
                  ? o(
                      "AdsOptimizationStrings",
                    ).getEventBasedBillingDisableBulkEditBillingEventTooltip()
                  : null;
          },
          getTestID: function () {
            return "quick_edit_billing_event_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").BILLING_EVENT,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            return (
              t.hasSAPCampaign === !0 ||
              t.isRF === !0 ||
              t.isBillingEventDisabled === !0
            );
          },
          pivots: { dialogType: r("AdsBulkEditDialogTypes").BILLING_EVENT },
          getBulkControlConfig: function () {
            return { renderer: d };
          },
          getSchema: function () {
            return { billing_event: r("AdsEmptyUniformMixedBulkValueTypes") };
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignNameColumnConfig(),
            ),
            {
              cellRenderer: m,
              columnKey: r("AdsCampaignBulkEditColumnKeys").BILLING_EVENT,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(360),
              fieldsPaths: [r("AdsAPICampaignPaths").BILLING_EVENT],
            },
          ],
        },
      ),
      _ = p;
    l.default = _;
  },
  226,
);

__d(
  "AdsBulkEditCampaignDeliveryTypePlugin",
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
      var n = t == null ? void 0 : t.pacing_type;
      return (
        n || u(0, 3923),
        c.jsx("div", {
          className: void 0,
          children: c.jsx(r("AdsBulkEditOptimizationDeliveryContainer.react"), {
            campaignIDs: e,
            columnKey: r("AdsCampaignBulkEditColumnKeys").DELIVERY_TYPE,
            pacingType: n,
          }),
        })
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      var o,
        a = n.className,
        i = (o = t.pacing_type) == null ? void 0 : o.toArray(),
        l = new (r("AdsUniformValue"))(i);
      return c.jsx("div", {
        className: r("joinClasses")(void 0, a),
        children: c.jsx(r("AdsBulkEditOptimizationDeliveryContainer.react"), {
          campaignIDs: e,
          columnKey: r("AdsCampaignBulkEditColumnKeys").DELIVERY_TYPE,
          pacingType: l,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignDeliveryType",
          dialogType: r("AdsBulkEditDialogTypes").DELIVERY_TYPE,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").CAMPAIGN_DELIVERY_TYPE;
          },
          getTestID: function () {
            return "quick_edit_delivery_type_button";
          },
          getTooltip: function (t) {
            var e;
            return t.hasSAPCampaign === !0
              ? o("AdsBulkEditMenuContent")
                  .SAP_DISABLED_DELIVERY_TYPE_FIELD_TOOLTIP
              : t.isRF === !0
                ? o("AdsBulkEditMenuContent").CAMPAIGN_RF_TOOLTIP
                : ((e = t.isCBO) == null ? void 0 : e.all) === !0
                  ? o("AdsBulkEditMenuContent").CAMPAIGN_CBO_TOOLTIP
                  : null;
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").DELIVERY_TYPE,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            var e;
            return (
              t.hasSAPCampaign === !0 ||
              t.isRF === !0 ||
              ((e = t.isCBO) == null ? void 0 : e.all) === !0
            );
          },
          pivots: { dialogType: r("AdsBulkEditDialogTypes").DELIVERY_TYPE },
          getBulkControlConfig: function () {
            return { renderer: d };
          },
          getSchema: function () {
            return { pacing_type: r("AdsEmptyUniformMixedBulkValueTypes") };
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
              columnKey: r("AdsCampaignBulkEditColumnKeys").DELIVERY_TYPE,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(360),
              fieldsPaths: [r("AdsAPICampaignPaths").PACING_TYPE],
            },
          ],
        },
      ),
      _ = p;
    l.default = _;
  },
  226,
);

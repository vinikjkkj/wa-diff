__d(
  "AdsBulkEditCampaignBidStrategyPlugin",
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
      var n = "bid_amount",
        o = "is_autobid",
        a = "is_average_price_pacing",
        i = "bid_strategy",
        l = t == null ? void 0 : t[n],
        s = t == null ? void 0 : t[o],
        d = t == null ? void 0 : t[a],
        m = t == null ? void 0 : t[i];
      return (
        (l != null && s != null && d != null && m != null) || u(0, 4439),
        c.jsx("div", {
          className: void 0,
          children: c.jsx(r("AdsBulkEditOptimizationDeliveryContainer.react"), {
            bidAmount: l,
            bidStrategy: m,
            campaignIDs: e,
            columnKey: r("AdsCampaignBulkEditColumnKeys").BID_STRATEGY,
            isBulkControl: !0,
          }),
        })
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      var o = n.className,
        a = new (r("AdsUniformValue"))(t.bid_amount),
        i = t.bid_strategy
          ? new (r("AdsUniformValue"))(t.bid_strategy)
          : void 0,
        l = t.bid_constraints
          ? new (r("AdsUniformValue"))(t.bid_constraints)
          : void 0;
      return c.jsx("div", {
        className: r("joinClasses")(void 0, o),
        children: c.jsx(r("AdsBulkEditOptimizationDeliveryContainer.react"), {
          bidAmount: a,
          bidConstraints: l,
          bidStrategy: i,
          campaignIDs: e,
          columnKey: r("AdsCampaignBulkEditColumnKeys").BID_STRATEGY,
          isBulkControl: !1,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignBidStrategy",
          dialogType: r("AdsBulkEditDialogTypes").BID_STRATEGY,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").BID_STRATEGY;
          },
          getTooltip: function (t) {
            var e;
            return t.hasSAPCampaign === !0
              ? o("AdsBulkEditMenuContent")
                  .SAP_DISABLED_BID_STRATEGY_FIELD_TOOLTIP
              : t.isRF === !0
                ? o("AdsBulkEditMenuContent").CAMPAIGN_RF_TOOLTIP
                : t.hasTargetFrequency === !0
                  ? o("AdsBulkEditMenuContent")
                      .CAMPAIGN_TARGET_FREQUENCY_BID_STRATEGY_TOOLTIP
                  : ((e = t.isCBO) == null ? void 0 : e.all) === !0
                    ? o("AdsBulkEditMenuContent").CAMPAIGN_CBO_TOOLTIP
                    : t.hasBudgetFlex === !0
                      ? o("AdsBulkEditMenuContent").CAMPAIGN_BUDGET_FLEX_TOOLTIP
                      : null;
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").BID_STRATEGY,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            var e;
            return (
              t.hasSAPCampaign === !0 ||
              t.isRF === !0 ||
              t.hasTargetFrequency === !0 ||
              ((e = t.isCBO) == null ? void 0 : e.all) === !0 ||
              t.hasBudgetFlex === !0
            );
          },
          pivots: { dialogType: r("AdsBulkEditDialogTypes").BID_STRATEGY },
          getBulkControlConfig: function () {
            return { renderer: d };
          },
          getSchema: function () {
            var e;
            return {
              bid_amount: (e = r("AdsEmptyUniformMixedBulkValueTypes")),
              bid_strategy: e,
              is_autobid: e,
              is_average_price_pacing: e,
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
              cellRenderer: m,
              columnKey: r("AdsCampaignBulkEditColumnKeys").BID_STRATEGY,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(440),
              fieldsPaths: [
                r("AdsAPICampaignPaths").BID_AMOUNT,
                r("AdsAPICampaignPaths").BID_CONSTRAINTS,
                r("AdsAPICampaignPaths").BID_STRATEGY,
                r("AdsAPICampaignPaths").IS_AUTOBID,
                r("AdsAPICampaignPaths").IS_AVERAGE_PRICE_PACING,
              ],
            },
          ],
        },
      ),
      _ = p;
    l.default = _;
  },
  226,
);

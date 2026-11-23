__d(
  "AdsBulkEditCBOBidCapPlugin",
  [
    "cx",
    "fbt",
    "AdsAPIBidStrategies",
    "AdsAPICampaignPaths",
    "AdsBulkEditCampaignBidAmountFieldContainer.react",
    "AdsBulkEditChangeTotalBudgetSectionContainer.react",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGroupBudgetStrings",
    "AdsCampaignStatusLabels",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "GeoTableWidth",
    "GeoText.react",
    "adsCampaignGetBidAmountFromRecord",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react"));
    function d(e, t) {
      var n = r("AdsCampaignStatusLabels"),
        o = n[String(e.status)];
      return c.jsx("div", {
        className: r("joinClasses")("_1pqw statusField", t.className),
        children: c.jsx(r("GeoText.react"), { children: o }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      var o = r("adsCampaignGetBidAmountFromRecord")(t),
        a = n.className;
      return c.jsx("div", {
        className: r("joinClasses")("_48je", a),
        children: c.jsx(r("AdsBulkEditCampaignBidAmountFieldContainer.react"), {
          bidAmount: o,
          bidStrategy: r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP,
          campaign: t,
          campaignIDs: e,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = babelHelpers.extends(
        {
          type: "campaignGroupBulkEditMenu",
          key: "campaignGroupCBOBidcap",
          dialogType: r("AdsBulkEditDialogTypes").ALL_CAMPAIGN_BID_CAPS,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsCampaignGroupBudgetStrings")
              .campaignGroupBidStrategyToggleDialogToBidCapsTitle;
          },
          getTooltip: function () {
            return null;
          },
          getTestID: function () {
            return "";
          },
          onClick: function () {},
          isDisabled: function () {
            return !0;
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").ALL_CAMPAIGN_BID_CAPS,
          },
          supportBulkControl: !1,
          getBulkControlConfig: function () {
            return null;
          },
          getDescriptionText: function () {
            return o("AdsCampaignGroupBudgetStrings")
              .campaignGroupBidStrategyToggleDialogToBidCapsHeaderText;
          },
          getSchema: function () {
            return {
              bid_strategy_cap: r("AdsEmptyUniformMixedBulkValueTypes"),
            };
          },
          getSummarySection: function () {
            return {
              position: "bottom",
              node: c.jsx(
                r("AdsBulkEditChangeTotalBudgetSectionContainer.react"),
                {},
              ),
            };
          },
          columnConfigs: [
            {
              cellRenderer: function (t, n, a) {
                return o("AdsNameBulkEditPluginUtils").getColumnRenderer(
                  t,
                  n,
                  r("AdsCampaignBulkEditColumnKeys").CAMPAIGN_NAME,
                  a,
                  "ad_set",
                  r("AdsAPICampaignPaths").NAME,
                  !0,
                );
              },
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .CAMPAIGN_NAME_READ_ONLY,
              label: u._(/*BTDS*/ ""),
              width: o("GeoTableWidth").proportional(100),
              fieldsPaths: [r("AdsAPICampaignPaths").NAME],
            },
            {
              cellRenderer: function (t, n, r) {
                return d(n, r);
              },
              columnKey: r("AdsCampaignBulkEditColumnKeys").STATUS,
              label: u._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(80),
              fieldsPaths: [r("AdsAPICampaignPaths").STATUS],
            },
            {
              cellRenderer: m,
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .CAMPAIGN_BID_CAPS_FROM_CAMPAIGN_GROUP,
              label: o("AdsCampaignGroupBudgetStrings")
                .campaignGroupBidStrategyToggleDialogToBidCapsColumnHeader,
              width: o("GeoTableWidth").pixel(400),
              fieldsPaths: [r("AdsAPICampaignPaths").BID_AMOUNT],
            },
          ],
        },
      ),
      _ = p;
    l.default = _;
  },
  226,
);

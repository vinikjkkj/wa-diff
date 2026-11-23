__d(
  "AdsBulkEditCBOCostCapPlugin",
  [
    "cx",
    "fbt",
    "AdsAPIBidStrategies",
    "AdsAPICampaignPaths",
    "AdsBidStrategyV3Strings",
    "AdsBulkEditChangeTotalBudgetSectionContainer.react",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignStatusLabels",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsL3BiddingUtils",
    "AdsNameBulkEditPluginUtils",
    "CometPlaceholder.react",
    "GeoSpinner.react",
    "GeoTableWidth",
    "GeoText.react",
    "JSResource",
    "adsCampaignGetBidAmountFromRecord",
    "joinClasses",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsBulkEditCampaignBidAmountFieldContainer.react",
        ).__setRef("AdsBulkEditCBOCostCapPlugin"),
      ),
      m = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsCampaignGroupCostCapDifferentGoalsTableHeader.react",
        ).__setRef("AdsBulkEditCBOCostCapPlugin"),
      ),
      p = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsCampaignGroupCostCapGoalBulkEditSection.react",
        ).__setRef("AdsBulkEditCBOCostCapPlugin"),
      );
    function _(e, t) {
      var n = r("AdsCampaignStatusLabels"),
        o = n[String(e.status)];
      return c.jsx("div", {
        className: r("joinClasses")("_1pqw statusField", t.className),
        children: c.jsx(r("GeoText.react"), { children: o }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t, n) {
      var o = r("adsCampaignGetBidAmountFromRecord")(t),
        a = n.className;
      return c.jsx("div", {
        className: r("joinClasses")("_48je", a),
        children: c.jsx(r("CometPlaceholder.react"), {
          fallback: c.jsx(r("GeoSpinner.react"), { loggingName: i.id }),
          name: i.id,
          children: c.jsx(d, {
            bidAmount: o,
            bidStrategy: r("AdsAPIBidStrategies").COST_CAP,
            campaign: t,
            campaignIDs: e,
          }),
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = babelHelpers.extends(
        {
          type: "campaignGroupBulkEditMenu",
          key: "campaignGroupCBOCostcap",
          dialogType: r("AdsBulkEditDialogTypes").ALL_CAMPAIGN_COST_CAPS,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o(
              "AdsBidStrategyV3Strings",
            ).getCampaignGroupBidStrategyToggleDialogToCostPerResultGoalsTitle();
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
            dialogType: r("AdsBulkEditDialogTypes").ALL_CAMPAIGN_COST_CAPS,
          },
          supportBulkControl: !1,
          getBulkControlConfig: function () {
            return null;
          },
          getDescriptionText: function () {
            return o(
              "AdsBidStrategyV3Strings",
            ).getCampaignGroupBidStrategyToggleDialogToCostPerResultGoalsHeaderText();
          },
          getHeaderSection: function () {
            return o("AdsL3BiddingUtils").isL3BiddingEnabled()
              ? c.jsx(r("CometPlaceholder.react"), {
                  fallback: null,
                  name: i.id,
                  children: c.jsx(p, {}),
                })
              : null;
          },
          getTableHeader: function () {
            return o("AdsL3BiddingUtils").isL3BiddingEnabled()
              ? c.jsx(r("CometPlaceholder.react"), {
                  fallback: null,
                  name: i.id,
                  children: c.jsx(m, {}),
                })
              : null;
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
                return _(n, r);
              },
              columnKey: r("AdsCampaignBulkEditColumnKeys").STATUS,
              label: u._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(80),
              fieldsPaths: [r("AdsAPICampaignPaths").STATUS],
            },
            {
              cellRenderer: f,
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .CAMPAIGN_COST_CAPS_FROM_CAMPAIGN_GROUP,
              label: o(
                "AdsBidStrategyV3Strings",
              ).getBidStrategyLabelForBidRenamingGK(
                r("AdsAPIBidStrategies").COST_CAP,
              ),
              width: o("GeoTableWidth").pixel(400),
              fieldsPaths: [r("AdsAPICampaignPaths").BID_AMOUNT],
            },
          ],
        },
      ),
      h = g;
    l.default = h;
  },
  226,
);

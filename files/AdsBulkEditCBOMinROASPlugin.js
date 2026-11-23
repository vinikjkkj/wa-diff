__d(
  "AdsBulkEditCBOMinROASPlugin",
  [
    "fbt",
    "AdsAPIBidStrategies",
    "AdsAPICampaignPaths",
    "AdsBidConstraintsUtils",
    "AdsBidStrategyV3Strings",
    "AdsBulkEditChangeAllCampaignBidConstraintsDataAction",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignStatusLabels",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "AdsROASValueInput.react",
    "GeoTableWidth",
    "GeoText.react",
    "emptyFunction",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = new Set();
    function _(e, t) {
      var n = r("AdsCampaignStatusLabels"),
        o = n[String(e.status)];
      return u.jsx("div", {
        className: t.className,
        children: u.jsx(r("GeoText.react"), { children: o }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t) {
      var n,
        r =
          (n = o("AdsBidConstraintsUtils").getMinROASInReporting(
            e.bid_constraints,
          )) != null
            ? n
            : o("AdsBidConstraintsUtils").getDefaultROASAverageFloor();
      return u.jsx("div", {
        className: "x1klvvdw xmzvs34",
        children: u.jsx(g, { campaignIDs: [e.id], roasAverageFloor: r }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.campaignIDs,
        n = e.roasAverageFloor,
        a = t[0];
      m(
        function () {
          return function () {
            a != null && p.delete(a);
          };
        },
        [a],
      );
      var l = d(
          function (e) {
            a != null &&
              (o("AdsBidConstraintsUtils").isValidROASAverageFloor(e)
                ? (p.delete(a),
                  r(
                    "AdsBulkEditChangeAllCampaignBidConstraintsDataAction",
                  ).dispatch(
                    {
                      adObjectIDs: t,
                      roasAverageFloorValue: e,
                      isApplyDisabled: p.size > 0,
                    },
                    {
                      line: "100",
                      module: "AdsBulkEditCBOMinROASPlugin.js",
                      moduleID: i.id,
                    },
                  ))
                : (p.add(a),
                  r(
                    "AdsBulkEditChangeAllCampaignBidConstraintsDataAction",
                  ).dispatch(
                    {
                      adObjectIDs: [],
                      roasAverageFloorValue: null,
                      isApplyDisabled: !0,
                    },
                    {
                      line: "107",
                      module: "AdsBulkEditCBOMinROASPlugin.js",
                      moduleID: i.id,
                    },
                  )));
          },
          [a, t],
        ),
        s = d(
          function (e) {
            a != null &&
              (e ? p.add(a) : p.delete(a),
              r(
                "AdsBulkEditChangeAllCampaignBidConstraintsDataAction",
              ).dispatch(
                {
                  adObjectIDs: [],
                  roasAverageFloorValue: null,
                  isApplyDisabled: p.size > 0,
                },
                {
                  line: "127",
                  module: "AdsBulkEditCBOMinROASPlugin.js",
                  moduleID: i.id,
                },
              ));
          },
          [a],
        );
      return a == null
        ? null
        : u.jsx(r("AdsROASValueInput.react"), {
            customizedValidation: o("AdsBidConstraintsUtils")
              .isValidROASAverageFloor,
            decimals: o("AdsBidConstraintsUtils").getDefaultROASDecimals(),
            onChange: l,
            onErrorChange: s,
            onUnderlyingValueChange: r("emptyFunction"),
            scale: o("AdsBidConstraintsUtils").getROASDefaultScale(),
            value: n,
          });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = babelHelpers.extends(
        {
          type: "campaignGroupBulkEditMenu",
          key: "campaignGroupCBOMinRoas",
          dialogType: r("AdsBulkEditDialogTypes").ALL_CAMPAIGN_MIN_ROAS,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o(
              "AdsBidStrategyV3Strings",
            ).getBidStrategyLabelForBidRenamingGK(
              r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS,
            );
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
            dialogType: r("AdsBulkEditDialogTypes").ALL_CAMPAIGN_MIN_ROAS,
          },
          supportBulkControl: !1,
          getBulkControlConfig: function () {
            return null;
          },
          getDescriptionText: function () {
            return s._(/*BTDS*/ "");
          },
          getSchema: function () {
            return {
              bid_strategy_cap: r("AdsEmptyUniformMixedBulkValueTypes"),
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
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").proportional(100),
              fieldsPaths: [r("AdsAPICampaignPaths").NAME],
            },
            {
              cellRenderer: function (t, n, r) {
                return _(n, r);
              },
              columnKey: r("AdsCampaignBulkEditColumnKeys").STATUS,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(80),
              fieldsPaths: [r("AdsAPICampaignPaths").STATUS],
            },
            {
              cellRenderer: function (t, n, r) {
                return f(n, r);
              },
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .CAMPAIGN_BID_CONATRAINTS_FROM_CAMPAIGN_GROUP,
              label: o(
                "AdsBidStrategyV3Strings",
              ).getBidStrategyLabelForBidRenamingGK(
                r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS,
              ),
              width: o("GeoTableWidth").pixel(400),
              fieldsPaths: [r("AdsAPICampaignPaths").BID_CONSTRAINTS],
            },
          ],
        },
      ),
      y = h;
    l.default = y;
  },
  226,
);

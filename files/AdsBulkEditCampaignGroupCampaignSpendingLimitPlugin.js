__d(
  "AdsBulkEditCampaignGroupCampaignSpendingLimitPlugin",
  [
    "fbt",
    "AdsAPICampaignGroupPaths",
    "AdsBulkEditCampaignGroupSpendCapContainer.react",
    "AdsBulkEditChangeSpendCapDataAction",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignGroupBulkEditColumnKeys",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsErrorUtils",
    "AdsNameBulkEditPluginUtils",
    "AdsUniformValue",
    "GeoTableWidth",
    "joinClasses",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      var n = "spend_cap",
        o = r("nullthrows")(t)[n],
        a = function (n) {
          return r("AdsBulkEditChangeSpendCapDataAction").dispatch(
            {
              supportNullValue: !0,
              spendCap: n,
              adObjectIDs: e,
              columnKey: r("AdsCampaignGroupBulkEditColumnKeys").SPEND_CAP,
            },
            {
              line: "50",
              module: "AdsBulkEditCampaignGroupCampaignSpendingLimitPlugin.js",
              moduleID: i.id,
            },
          );
        };
      return u.jsx("div", {
        className: void 0,
        children: u.jsx(r("AdsBulkEditCampaignGroupSpendCapContainer.react"), {
          campaignGroupIDs: e,
          errorMessage: null,
          onSpendCapChange: a,
          selectorRootTestID:
            "bulk_edit_campaign_group_spending_limit_selector_root",
          selectorTestID: "bulk_edit_campaign_group_spending_limit_selector",
          showSpendInfo: !1,
          spendCap: o,
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t, n) {
      var a,
        l = t.spend_cap,
        s = new (r("AdsUniformValue"))(l === null ? void 0 : l),
        c = function (n) {
          r("AdsBulkEditChangeSpendCapDataAction").dispatch(
            {
              supportNullValue: !0,
              spendCap: n,
              adObjectIDs: e,
              columnKey: r("AdsCampaignGroupBulkEditColumnKeys").SPEND_CAP,
            },
            {
              line: "87",
              module: "AdsBulkEditCampaignGroupCampaignSpendingLimitPlugin.js",
              moduleID: i.id,
            },
          );
        },
        d =
          (a = o("AdsErrorUtils").getErrorSpec(
            (n == null ? void 0 : n.errors) || [],
          )) == null
            ? void 0
            : a.spend_cap,
        m = typeof d == "string" ? d : null;
      return u.jsx("div", {
        className: r("joinClasses")(void 0, n.className),
        children: u.jsx(r("AdsBulkEditCampaignGroupSpendCapContainer.react"), {
          campaignGroupIDs: e,
          errorMessage: m,
          onSpendCapChange: c,
          showSpendInfo: !0,
          spendCap: s,
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = babelHelpers.extends(
        {
          type: "campaignGroupBulkEditMenu",
          key: "campaignGroupCampaignSpendingLimit",
          dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_SPENDING_LIMIT,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").CAMPAIGN_SPENDING_LIMIT;
          },
          getTooltip: function (t) {
            return t.allCBOWithLifetimeBudget === !0
              ? o("AdsBulkEditMenuContent")
                  .CAMPAIGN_GROUP_SPEND_CAP_UNAVAILABLE_TOOLTIP
              : null;
          },
          getTestID: function () {
            return "quick_edit_campaign_spending_limit_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").CAMPAIGN_SPENDING_LIMIT,
              "campaign",
              t.source,
            );
          },
          isDisabled: function (t) {
            var e;
            return (
              (t == null ? void 0 : t.shouldRenderSpendCap) !== !0 ||
              (t == null || (e = t.crepeBulkEditValidation) == null
                ? void 0
                : e.isSpendCapDisabled) === !0
            );
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_SPENDING_LIMIT,
          },
          getBulkControlConfig: function () {
            return { renderer: c };
          },
          getSchema: function () {
            return { spend_cap: r("AdsEmptyUniformMixedBulkValueTypes") };
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignGroupNameColumnConfig(),
            ),
            {
              cellRenderer: d,
              columnKey: r("AdsCampaignGroupBulkEditColumnKeys").SPEND_CAP,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(440),
              fieldsPaths: [r("AdsAPICampaignGroupPaths").SPEND_CAP],
            },
          ],
        },
      ),
      p = m;
    l.default = p;
  },
  226,
);

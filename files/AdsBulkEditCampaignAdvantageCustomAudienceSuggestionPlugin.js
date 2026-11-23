__d(
  "AdsBulkEditCampaignAdvantageCustomAudienceSuggestionPlugin",
  [
    "cx",
    "fbt",
    "AdsBulkEditCampaignCustomAudienceBulkRowContainer.react",
    "AdsBulkEditCampaignCustomAudienceContainer.react",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditFieldsDialogConfig",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCustomerAcquisitionStrings",
    "GeoTableWidth",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react"));
    function d(e, t) {
      return c.jsx("div", {
        className: "_9a7j",
        children: c.jsx(
          r("AdsBulkEditCampaignCustomAudienceBulkRowContainer.react"),
          { advantageAudienceCASuggestionSection: !0 },
        ),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t) {
      return c.jsx("div", {
        className: r("joinClasses")("_9a7j", t.className),
        children: c.jsx(r("AdsBulkEditCampaignCustomAudienceContainer.react"), {
          advantageAudienceCASuggestionSection: !0,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignAdvantageAudienceCustomAudienceSuggestion",
          dialogType: r("AdsBulkEditDialogTypes").CUSTOM_AUDIENCE_SUGGESTION,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").CAMPAIGN_CUSTOM_AUDIENCE;
          },
          getTooltip: function (t) {
            return (t == null
              ? void 0
              : t.hasAtLeastOneCampaignTurnedOnCustomerAcquisition) === !0
              ? o("AdsCustomerAcquisitionStrings")
                  .BULK_EDIT_CUSTOM_AUDIENCE_DISABLED_DESCRIPTION
              : null;
          },
          getTestID: function () {
            return "bulk_edit_custom_audience";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").CUSTOM_AUDIENCE_SUGGESTION,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            return (
              (t == null
                ? void 0
                : t.hasAtLeastOneCampaignTurnedOnCustomerAcquisition) === !0
            );
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").CUSTOM_AUDIENCE_SUGGESTION,
          },
          getBulkControlConfig: function () {
            return { renderer: d };
          },
          columnConfigs: [
            {
              cellRenderer: function (t, n, r) {
                return m(n, r);
              },
              columnKey: r("AdsCampaignBulkEditColumnKeys").CUSTOM_AUDIENCE,
              label: u._(/*BTDS*/ ""),
              width: o("GeoTableWidth").proportional(
                o("AdsBulkEditFieldsDialogConfig").GEO_DATA_TABLE.CELL_WIDTH,
              ),
            },
          ],
        },
      ),
      _ = p;
    l.default = _;
  },
  226,
);

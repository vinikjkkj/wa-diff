__d(
  "AdsBulkEditCampaignAdvantageAudienceExcludedCustomAudiencePlugin",
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
          { advantageAudienceCAExclusionSection: !0 },
        ),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t) {
      return c.jsx("div", {
        className: r("joinClasses")("_9a7j", t.className),
        children: c.jsx(r("AdsBulkEditCampaignCustomAudienceContainer.react"), {
          advantageAudienceCAExclusionSection: !0,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignAdvantageAudienceExcludedCustomAudience",
          dialogType: r("AdsBulkEditDialogTypes").EXCLUDED_CUSTOM_AUDIENCE,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent")
              .CAMPAIGN_ADVANTAGE_AUDIENCE_EXCLUDED_CUSTOM_AUDIENCE;
          },
          getTestID: function () {
            return "bulk_edit_advantage_audiece_excluded_custom_audience";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").EXCLUDED_CUSTOM_AUDIENCE,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            return !1;
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").EXCLUDED_CUSTOM_AUDIENCE,
          },
          getBulkControlConfig: function () {
            return { renderer: d };
          },
          columnConfigs: [
            {
              cellRenderer: function (t, n, r) {
                return m(n, r);
              },
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .EXCLUDED_CUSTOM_AUDIENCE,
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

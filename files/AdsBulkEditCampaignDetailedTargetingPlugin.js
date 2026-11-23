__d(
  "AdsBulkEditCampaignDetailedTargetingPlugin",
  [
    "cx",
    "fbt",
    "AdsBulkEditCampaignDetailedTargetingContainer.react",
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
        className: r("joinClasses")("_9a7j", t.className),
        children: c.jsx(
          r("AdsBulkEditCampaignDetailedTargetingContainer.react"),
          {},
        ),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignDetailedTargeting",
          dialogType: r("AdsBulkEditDialogTypes").DETAILED_TARGETING,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").CAMPAIGN_DETAILED_TARGETING;
          },
          getTestID: function () {
            return "bulk_edit_detailed_targeting";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").DETAILED_TARGETING,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            return !1;
          },
          isHidden: function (t) {
            return !1;
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").DETAILED_TARGETING,
          },
          getBulkControlConfig: function () {
            return null;
          },
          columnConfigs: [
            {
              cellRenderer: function (t, n, r) {
                return d(n, r);
              },
              columnKey: r("AdsCampaignBulkEditColumnKeys").DETAILED_TARGETING,
              label: u._(/*BTDS*/ ""),
              width: o("GeoTableWidth").proportional(
                o("AdsBulkEditFieldsDialogConfig").GEO_DATA_TABLE.CELL_WIDTH,
              ),
            },
          ],
        },
      ),
      p = m;
    l.default = p;
  },
  226,
);

__d(
  "AdsBulkEditCampaignGroupObjectivePlugin",
  [
    "cx",
    "fbt",
    "AdsAPICampaignGroupPaths",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsCampaignGroupBulkEditColumnKeys",
    "AdsNameBulkEditPluginUtils",
    "GeoTableWidth",
    "adsGetObjectiveName",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react"));
    function d(e, t, n) {
      var o = r("adsGetObjectiveName")(
        t.objective,
        null,
        t.is_odax_campaign_group === !0,
      );
      return c.jsx("div", {
        className: r("joinClasses")("_nz8", n.className),
        children: o,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = babelHelpers.extends(
        {
          type: "campaignGroupBulkEditMenu",
          key: "campaignGroupObjective",
          dialogType: r("AdsBulkEditDialogTypes").OBJECTIVE,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return u._(/*BTDS*/ "");
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
          pivots: { dialogType: r("AdsBulkEditDialogTypes").OBJECTIVE },
          supportBulkControl: !1,
          getBulkControlConfig: function () {
            return null;
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
              columnKey: r("AdsCampaignGroupBulkEditColumnKeys").OBJECTIVE,
              label: u._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(200),
              fieldsPaths: [r("AdsAPICampaignGroupPaths").OBJECTIVE],
            },
          ],
        },
      ),
      p = m;
    l.default = p;
  },
  226,
);

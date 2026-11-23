__d(
  "AdsBulkEditCampaignGroupRegulatedCategoryPlugin",
  [
    "cx",
    "fbt",
    "AdsAPICampaignGroupPaths",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsCampaignGroupBulkEditColumnKeys",
    "AdsNameBulkEditPluginUtils",
    "AdsRegulatedCategory",
    "AdsRegulatedCategoryConstants",
    "GeoTableWidth",
    "intlList",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react"));
    function d(e, t, n) {
      var a = t.special_ad_categories,
        i =
          a == null
            ? o("AdsRegulatedCategoryConstants").AdsRegulatedCategoryNameMap[
                r("AdsRegulatedCategory").NONE
              ]
            : r("intlList")(
                Array.from(a).map(function (e) {
                  return o("AdsRegulatedCategoryConstants")
                    .AdsRegulatedCategoryNameMap[e];
                }),
              );
      return c.jsx("div", {
        className: r("joinClasses")("_nz8", n.className),
        children: i,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = babelHelpers.extends(
        {
          type: "campaignGroupBulkEditMenu",
          key: "campaignGroupRegulatedCategory",
          dialogType: r("AdsBulkEditDialogTypes").REGULATED_CATEGORIES,
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
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").REGULATED_CATEGORIES,
          },
          supportBulkControl: !1,
          getSchema: function () {
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
              columnKey: r("AdsCampaignGroupBulkEditColumnKeys")
                .REGULATED_CATEGORIES,
              label: o("AdsRegulatedCategoryConstants")
                .REGULATED_CATEGORIES_TITLE,
              width: o("GeoTableWidth").pixel(300),
              fieldsPaths: [
                r("AdsAPICampaignGroupPaths").SPECIAL_AD_CATEGORIES,
              ],
            },
          ],
        },
      ),
      p = m;
    l.default = p;
  },
  226,
);

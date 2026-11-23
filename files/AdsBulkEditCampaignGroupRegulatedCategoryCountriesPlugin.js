__d(
  "AdsBulkEditCampaignGroupRegulatedCategoryCountriesPlugin",
  [
    "cx",
    "fbt",
    "AdsAPICampaignGroupPaths",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsCampaignGroupBulkEditColumnKeys",
    "AdsCountries",
    "AdsNameBulkEditPluginUtils",
    "AdsRegulatedCategoryCountryConstants",
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
      var a,
        i = r("intlList")(
          Array.from((a = t.special_ad_category_country) != null ? a : []).map(
            function (e) {
              return o("AdsCountries").countries[e];
            },
          ),
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
          key: "campaignGroupRegulatedCategoryCountries",
          dialogType: r("AdsBulkEditDialogTypes").REGULATED_CATEGORY_COUNTRIES,
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
            dialogType: r("AdsBulkEditDialogTypes")
              .REGULATED_CATEGORY_COUNTRIES,
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
                .REGULATED_CATEGORY_COUNTRIES,
              label: o("AdsRegulatedCategoryCountryConstants")
                .REGULATED_CATEGORY_COUNTRIES_TITLE,
              width: o("GeoTableWidth").pixel(300),
              fieldsPaths: [
                r("AdsAPICampaignGroupPaths").SPECIAL_AD_CATEGORY_COUNTRY,
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

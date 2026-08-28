__d(
  "AdsUEditorCampaignGroupSACSelectedCountriesSelector",
  ["AdsBulkValueUtils", "AdsUEditorSelectors", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(function (e) {
          return e.special_ad_category_country;
        }),
      ],
      function (t) {
        return Array.from(
          o("AdsBulkValueUtils").getUniformValueOrDefault(t, []),
        );
      },
      { name: i.id + ".selectedSACCountriesSelector" },
    );
    l.selectedSACCountriesSelector = e;
  },
  98,
);

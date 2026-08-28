__d(
  "adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector",
  [
    "AdsEmptyValue",
    "AdsRasLearnMoreCategoryContentHeaderFBT",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsRegulatedCategoryIsHECRegulatedCategory",
    "adsRegulatedCategoryIsRegulatedCategory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e instanceof r("AdsEmptyValue")) return [];
      var t = new Set();
      if (Array.isArray(e)) {
        var n = Array.from(e);
        return (
          n.forEach(function (e) {
            (r("adsRegulatedCategoryIsRegulatedCategory")(e) ||
              r("adsRegulatedCategoryIsHECRegulatedCategory")(e)) &&
              t.add(e);
          }),
          Array.from(t)
            .concat()
            .sort(function (e, t) {
              return o("AdsRasLearnMoreCategoryContentHeaderFBT")
                .AdsRasLearnMoreCategoryContentHeaderFBT[e].toString()
                .localeCompare(
                  o(
                    "AdsRasLearnMoreCategoryContentHeaderFBT",
                  ).AdsRasLearnMoreCategoryContentHeaderFBT[t].toString(),
                );
            })
        );
      }
      return (
        e.getValues().forEach(function (e) {
          return (
            e != null &&
            e.forEach(function (e) {
              (r("adsRegulatedCategoryIsRegulatedCategory")(e) ||
                r("adsRegulatedCategoryIsHECRegulatedCategory")(e)) &&
                t.add(e);
            })
          );
        }),
        Array.from(t)
          .concat()
          .sort(function (e, t) {
            return o("AdsRasLearnMoreCategoryContentHeaderFBT")
              .AdsRasLearnMoreCategoryContentHeaderFBT[e].toString()
              .localeCompare(
                o(
                  "AdsRasLearnMoreCategoryContentHeaderFBT",
                ).AdsRasLearnMoreCategoryContentHeaderFBT[t].toString(),
              );
          })
      );
    }
    var s = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
            function (e) {
              return e.special_ad_categories;
            },
          ),
        ],
        e,
        {
          name:
            i.id +
            ".adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector",
        },
      ),
      u = s;
    ((l.getAdsUEditorCampaignGroupSelectedRegulatedCategoriesSet = e),
      (l.adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector = s),
      (l.adsUEditorCampaignSelectedRegulatedCategoriesSetSelector = u));
  },
  98,
);

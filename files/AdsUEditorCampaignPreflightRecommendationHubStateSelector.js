__d(
  "AdsUEditorCampaignPreflightRecommendationHubStateSelector",
  [
    "AdsUEditorCampaignGroupRegulatedCategorySelectors",
    "AdsUEditorPreflightRecommendationHubCoreSelectors",
    "adsCreateSelector",
    "adsPECrepeEditorStepsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return r("adsCreateSelector")(
        [
          o("AdsUEditorPreflightRecommendationHubCoreSelectors")
            .selectedAdObjectIDSelector,
          o("adsPECrepeEditorStepsSelector").adsPECrepeEditorStepsSelector,
          o("AdsUEditorCampaignGroupRegulatedCategorySelectors")
            .isSelectedRegulatedCategorySelector,
          o("AdsUEditorPreflightRecommendationHubCoreSelectors")
            .buyingTypeSelector,
          o("AdsUEditorPreflightRecommendationHubCoreSelectors")
            .objectiveSelector,
        ],
        function (n, r, a, i, l) {
          return o(
            "AdsUEditorPreflightRecommendationHubCoreSelectors",
          ).getPFRHubState(n, r, t, a, i, l, !0);
        },
        { name: i.id },
      );
    };
    l.AdsUEditorCampaignPreflightRecommendationHubStateSelector = e;
  },
  98,
);

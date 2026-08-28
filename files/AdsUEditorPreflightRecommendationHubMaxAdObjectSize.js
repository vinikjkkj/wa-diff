__d(
  "AdsUEditorPreflightRecommendationHubMaxAdObjectSize",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 100,
      l = 200;
    function s(t) {
      return t > e && t <= l;
    }
    ((i.MAX_AD_OBJECT_SIZE = e),
      (i.MAX_AD_OBJECT_SIZE_FOR_LARGE_CAMPAIGN = l),
      (i.isLargeCampaign = s));
  },
  66,
);

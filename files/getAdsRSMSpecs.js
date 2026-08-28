__d(
  "getAdsRSMSpecs",
  ["JSResource", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (t, n, r) {
        return {
          adObjectIDs: t,
          recommendationID: n,
          recommendationSource: r,
          recommendationType: e,
        };
      };
    }
    function s(t) {
      return t == null
        ? null
        : t === "fragmentation"
          ? r("gkx")("13938")
            ? function (e, t, n) {
                return {
                  adObjectIDs: e,
                  onButtonClick: function () {
                    r("JSResource")("AdsMidFlightRecommendationOpenModalAction")
                      .__setRef("getAdsRSMSpecs")
                      .load()
                      .then(function (t) {
                        return t.dispatch(
                          { campaignIDs: e },
                          {
                            line: "63",
                            module: "getAdsRSMSpecs.js",
                            moduleID: i.id,
                          },
                        );
                      });
                  },
                  recommendationID: t,
                  recommendationSource: n,
                  recommendationType: "fragmentation",
                };
              }
            : null
          : t === "automatic_placements" ||
              t === "music" ||
              t === "advantage_plus_audience" ||
              t === "web_engaged_view_conversions"
            ? e(t)
            : null;
    }
    l.default = s;
  },
  98,
);

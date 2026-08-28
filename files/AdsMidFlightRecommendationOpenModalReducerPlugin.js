__d(
  "AdsMidFlightRecommendationOpenModalReducerPlugin",
  ["getAdsRSMSpecs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e;
          return babelHelpers.extends({}, t, {
            isModalShown: r("getAdsRSMSpecs")(t.recommendationType) == null,
            recommendation: (e = n.recommendation) != null ? e : null,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);

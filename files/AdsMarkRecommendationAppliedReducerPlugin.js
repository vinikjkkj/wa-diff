__d(
  "AdsMarkRecommendationAppliedReducerPlugin",
  ["isFalsey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.isOneClickApplyOnSYD,
            o = n.recommendationId;
          return r("isFalsey")(o)
            ? t
            : e === !0
              ? babelHelpers.extends({}, t, {
                  recentlyAppliedSYDOneClickRecommendations:
                    t.recentlyAppliedSYDOneClickRecommendations.add(o),
                })
              : babelHelpers.extends({}, t, {
                  recentlyAppliedRecommendations:
                    t.recentlyAppliedRecommendations.add(o),
                });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);

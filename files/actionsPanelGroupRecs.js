__d(
  "actionsPanelGroupRecs",
  ["AdAccountRecommendationType", "groupBy", "sumBy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return {
        groupKeyString: e,
        recommendationType: r("AdAccountRecommendationType")[e.toUpperCase()],
        recommendations: t,
        totalScoreLift: Number(
          r("sumBy")(t, function (e) {
            var t;
            return (t = e == null ? void 0 : e.score_lift) != null ? t : 0;
          }).toFixed(1),
        ),
      };
    }
    function s(t) {
      var n = r("groupBy")(t, function (e) {
        var t, n;
        return (t =
          (n = e.recommendation_data) == null
            ? void 0
            : n.recommendation_type.toString()) != null
          ? t
          : "";
      });
      return Object.keys(n)
        .map(function (t) {
          return e(t, n[t]);
        })
        .sort(function (e, t) {
          return t.totalScoreLift - e.totalScoreLift;
        });
    }
    l.actionsPanelGroupRecs = s;
  },
  98,
);

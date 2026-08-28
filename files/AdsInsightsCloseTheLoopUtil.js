__d(
  "AdsInsightsCloseTheLoopUtil",
  ["fbt", "filterNulls", "isFalsey"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t) {
        return s._(/*BTDS*/ '_j{"*":"ad sets","_1":"ad set"}', [s._plural(t)]);
      },
      u = function (t) {
        return s._(/*BTDS*/ '_j{"*":"{number} ad sets","_1":"1 ad set"}', [
          s._plural(t, "number"),
        ]);
      },
      c = function (t) {
        return s._(/*BTDS*/ '_j{"*":"ads","_1":"ad"}', [s._plural(t)]);
      },
      d = function (t) {
        return s._(/*BTDS*/ '_j{"*":"{number} ads","_1":"1 ad"}', [
          s._plural(t, "number"),
        ]);
      },
      m = function (t) {
        var e;
        if (r("isFalsey")(t)) return [];
        var n = p.includes(t.recommendation_type)
            ? t.ad_group_ids
            : t.campaigns_ids,
          o =
            n == null || (e = n.nodes) == null
              ? void 0
              : e.map(function (e) {
                  return e.id;
                });
        return r("filterNulls")(o != null ? o : []);
      },
      p = ["music", "uncrop_image"],
      _ = function (t) {
        return r("isFalsey")(t) || t.length === 0
          ? null
          : t.reduce(function (e, t) {
              var n,
                r,
                o = (n = t.scoreLiftData) == null ? void 0 : n.recLift;
              if (o == null) return e;
              var a =
                e == null || (r = e.scoreLiftData) == null ? void 0 : r.recLift;
              return e == null || (a != null && o > a) ? t : e;
            }, null);
      };
    ((l.campaignLevelFbt = e),
      (l.campaignLevelFbtShowCount = u),
      (l.adLevelFbt = c),
      (l.adLevelFbtShowCount = d),
      (l.getOtherAdObjectsForAdoptedRecommendation = m),
      (l.getRecommendationWithHighestLift = _));
  },
  226,
);

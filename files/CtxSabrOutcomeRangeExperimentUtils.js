__d(
  "CtxSabrOutcomeRangeExperimentUtils",
  ["gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    var e = "dynamic_recommendation_control",
      s = "dynamic_recommendation",
      u = "bullet_points_control",
      c = "bullet_points";
    function d(e) {
      e === void 0 && (e = !1);
      var t = e ? r("gkx")("26992") : r("gkx")("26993"),
        n = e ? r("qex")._("336") : r("qex")._("418");
      return t ? s : n;
    }
    function m(e) {
      return e === s;
    }
    function p(e) {
      return e === c;
    }
    function _(t) {
      return t === e || t === u;
    }
    function f() {
      var e = d(!1);
      return m(e) || p(e);
    }
    ((l.getCtxSabrOutcomeRangeGroup = d),
      (l.isCtxSabrOutcomeRangeDynamicRecommendationTestGroup = m),
      (l.isCtxSabrOutcomeRangeBulletPointsTestGroup = p),
      (l.isCtxSabrOutcomeRangeControlGroup = _),
      (l.isInCtxSabrOutcomeRangeTestGroup = f));
  },
  98,
);

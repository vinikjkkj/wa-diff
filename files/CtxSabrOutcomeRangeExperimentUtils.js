__d(
  "CtxSabrOutcomeRangeExperimentUtils",
  ["qex"],
  function (t, n, r, o, a, i, l) {
    var e = "dynamic_recommendation_control",
      s = "dynamic_recommendation",
      u = "bullet_points_control",
      c = "bullet_points";
    function d(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("336") : r("qex")._("418")
      );
    }
    function m(e) {
      return e != null && e !== "";
    }
    function p(e) {
      return e === s;
    }
    function _(e) {
      return e === c;
    }
    function f(t) {
      return t === e || t === u;
    }
    function g(e) {
      e === void 0 && (e = !1);
      var t = d(e);
      return p(t) || _(t);
    }
    ((l.CTX_SABR_OUTCOME_RANGE_DYNAMIC_RECOMMENDATION_CONTROL = e),
      (l.CTX_SABR_OUTCOME_RANGE_DYNAMIC_RECOMMENDATION = s),
      (l.CTX_SABR_OUTCOME_RANGE_BULLET_POINTS_CONTROL = u),
      (l.CTX_SABR_OUTCOME_RANGE_BULLET_POINTS = c),
      (l.getCtxSabrOutcomeRangeGroup = d),
      (l.isInCtxSabrOutcomeRangeExperimentGroup = m),
      (l.isCtxSabrOutcomeRangeDynamicRecommendationTestGroup = p),
      (l.isCtxSabrOutcomeRangeBulletPointsTestGroup = _),
      (l.isCtxSabrOutcomeRangeControlGroup = f),
      (l.isInCtxSabrOutcomeRangeTestGroup = g));
  },
  98,
);

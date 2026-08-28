__d(
  "ClickToMessageCTXMDOptimizationExpansionFeatureGating",
  ["AdsAPIObjectives", "AdsAPIOptimizationGoals", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      switch ((t === void 0 && (t = !1), e)) {
        case r("AdsAPIObjectives").OUTCOME_SALES:
          return c(t);
        case r("AdsAPIObjectives").OUTCOME_TRAFFIC:
        case r("AdsAPIObjectives").LINK_CLICKS:
          return d(t);
        case null:
          return c(!1) || d(!1);
        default:
          return !1;
      }
    }
    function c(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("13415") === !0 : r("gkx")("13439") === !0
      );
    }
    function d(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("13474") === !0 : r("gkx")("14014") === !0
      );
    }
    var m =
      ((e = {}),
      (e[r("AdsAPIObjectives").OUTCOME_ENGAGEMENT] = new Set([
        (s = r("AdsAPIOptimizationGoals")).THRUPLAY,
        s.TWO_SECOND_CONTINUOUS_VIDEO_VIEWS,
        s.POST_ENGAGEMENT,
      ])),
      (e[r("AdsAPIObjectives").OUTCOME_AWARENESS] = new Set([
        s.THRUPLAY,
        s.TWO_SECOND_CONTINUOUS_VIDEO_VIEWS,
        s.AD_RECALL_LIFT,
        s.REACH,
        s.IMPRESSIONS,
      ])),
      e);
    function p(e, t, n) {
      if ((n === void 0 && (n = !1), e == null || t == null)) return !1;
      var o = m[e];
      if (o != null && o.has(t)) return !0;
      var a =
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
        t === r("AdsAPIOptimizationGoals").REACH &&
        !n;
      return a;
    }
    ((l.enableUnifiedCreationWTXMDL1 = u),
      (l.enableUnifiedCreationWTXMDL1Sales = c),
      (l.enableUnifiedCreationWTXMDL1Traffic = d),
      (l.enableUnifiedCreationCTXMDL1 = p));
  },
  98,
);

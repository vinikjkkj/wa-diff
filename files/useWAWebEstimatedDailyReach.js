__d(
  "useWAWebEstimatedDailyReach",
  [
    "fbt",
    "AdsBisonUtils",
    "CometRelay",
    "LWICometPFROFEstimationUtils",
    "intlSummarizeNumber",
    "useWAWebEstimatedDailyReachQuery.graphql",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u =
        e !== void 0 ? e : (e = n("useWAWebEstimatedDailyReachQuery.graphql"));
    function c(e, t) {
      return s._(/*BTDS*/ "{lower_bound} - {upper_bound}", [
        s._param("lower_bound", r("intlSummarizeNumber")(e)),
        s._param("upper_bound", r("intlSummarizeNumber")(t)),
      ]);
    }
    function d(e) {
      var t,
        n = e.audienceOptionAudience,
        a = e.currency,
        i = e.dailyBudget,
        l = e.flow,
        s = e.flowID,
        d = e.legacyAdAccountID,
        m = e.optimizationGoalInput,
        p = e.postID,
        _ = e.selectedPublisherPlatforms,
        f = e.targetingSpecAudience,
        g = o("CometRelay").useLazyLoadQuery(u, {
          audienceOptionAudience: n,
          configuredPlacementSpec: { publisher_platforms: _ },
          currency: a,
          flow: l,
          flowID: s,
          legacyAdAccountID: d,
          optimizationGoalInput: m,
          postID: p,
          targetingSpecAudience: f,
        }),
        h = g.lwi,
        y = h == null ? void 0 : h.budget_estimate_data_v2,
        C = (t = y == null ? void 0 : y.daily_outcomes_curve) != null ? t : [],
        b = C.map(function (e) {
          var t, n, r, o, a, i, l, s, u;
          return {
            actions: (t = e.actions) != null ? t : 0,
            actions_lower_bound: (n = e.actions_lower_bound) != null ? n : 0,
            actions_upper_bound: (r = e.actions_upper_bound) != null ? r : 0,
            bid: (o = e.bid) != null ? o : 0,
            impressions: (a = e.impressions) != null ? a : 0,
            predicted_errors_conversions: 1,
            predicted_errors_reach: 1,
            reach: (i = e.reach) != null ? i : 0,
            reach_lower_bound: (l = e.reach_lower_bound) != null ? l : 0,
            reach_upper_bound: (s = e.reach_upper_bound) != null ? s : 0,
            spend: (u = e.spend) != null ? u : 0,
          };
        }),
        v = r("AdsBisonUtils").getReachEstimateByBudget(
          b,
          i != null ? i : 0,
          null,
          !0,
        ),
        S = o("LWICometPFROFEstimationUtils").getImpressionRange(v.impressions);
      return c(S.min, S.max);
    }
    l.default = d;
  },
  226,
);

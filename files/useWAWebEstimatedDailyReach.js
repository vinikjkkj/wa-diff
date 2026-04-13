__d(
  "useWAWebEstimatedDailyReach",
  [
    "fbt",
    "AdsBisonUtils",
    "CometRelay",
    "LWICometPFROFEstimationUtils",
    "intlSummarizeNumber",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(5),
        n = e.audienceOptionAudience,
        a = e.currency,
        i = e.dailyBudget,
        l = e.flow,
        s = e.flowID,
        d = e.legacyAdAccountID,
        p = e.optimizationGoalInput,
        _ = e.postID,
        f = e.selectedPublisherPlatforms,
        g = e.targetingSpecAudience,
        h = o("CometRelay").useLazyLoadQuery(u, {
          audienceOptionAudience: n,
          configuredPlacementSpec: { publisher_platforms: f },
          currency: a,
          flow: l,
          flowID: s,
          legacyAdAccountID: d,
          optimizationGoalInput: p,
          postID: _,
          targetingSpecAudience: g,
        }),
        y = h.lwi,
        C = y == null ? void 0 : y.budget_estimate_data_v2,
        b;
      if (t[0] !== (C == null ? void 0 : C.daily_outcomes_curve)) {
        var v;
        ((b =
          (v = C == null ? void 0 : C.daily_outcomes_curve) != null ? v : []),
          (t[0] = C == null ? void 0 : C.daily_outcomes_curve),
          (t[1] = b));
      } else b = t[1];
      var S = b,
        R;
      if (t[2] !== i || t[3] !== S) {
        var L = S.map(m),
          E = r("AdsBisonUtils").getReachEstimateByBudget(
            L,
            i != null ? i : 0,
            null,
            !0,
          ),
          k = o("LWICometPFROFEstimationUtils").getImpressionRange(
            E.impressions,
          );
        ((R = c(k.min, k.max)), (t[2] = i), (t[3] = S), (t[4] = R));
      } else R = t[4];
      return R;
    }
    function m(e) {
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
    }
    l.default = d;
  },
  226,
);

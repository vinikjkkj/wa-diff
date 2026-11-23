__d(
  "AdsPlacementConfigOptimizationGoalEligibilityUtils",
  [
    "AdsAPIOptimizationGoals",
    "AdsInstagramSupportedOptimizationGoals",
    "AdsInterfacesLogger",
    "AdsPlacementConfigPositionPluginUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementOptimizationGoalConfig",
    "isConsiderationPlacementLocked",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["stream", "story", "reels"]);
    function s(t, n, a, i) {
      var l = a.optimizationGoal;
      if (l == null) return null;
      if (r("isConsiderationPlacementLocked")(l))
        return e.has(n)
          ? null
          : o("AdsPlacementIneligibilityReason").createOptimizationGoalReason();
      var s = o(
          "AdsInstagramSupportedOptimizationGoals",
        ).supportedOptimizationGoals.get(n),
        d;
      if (
        (t === "instagram" || t === "threads") &&
        s &&
        (s.includes(r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND) &&
          !s.includes(r("AdsAPIOptimizationGoals").VALUE) &&
          s.push(r("AdsAPIOptimizationGoals").VALUE),
        (d = s.includes(l)
          ? null
          : o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason()),
        o(
          "AdsPlacementConfigPositionPluginUtils",
        ).enableV2PlacementEligibilityCheck(n))
      )
        return d;
      var m = u(t, n, a, i);
      return (
        o(
          "AdsPlacementConfigPositionPluginUtils",
        ).shouldLogPlacementEligibility(n) &&
          i != null &&
          c(n === "profile_feed" ? !m : i, d, a, t, n, !0),
        m
      );
    }
    function u(e, t, n, a) {
      var i = n.capabilities,
        l = n.optimizationGoal;
      if (
        l == null ||
        !Object.prototype.hasOwnProperty.call(
          r("AdsPlacementOptimizationGoalConfig"),
          e,
        )
      )
        return null;
      var s = r("AdsPlacementOptimizationGoalConfig")[e];
      if (!Object.prototype.hasOwnProperty.call(s, t)) return null;
      var u = s[t];
      if (!Object.prototype.hasOwnProperty.call(u, l)) return null;
      var d = u[l],
        m = o(
          "AdsPlacementConfigPositionPluginUtils",
        ).getFirstEnabledConfigValue(d, i, !0),
        p = m
          ? null
          : o("AdsPlacementIneligibilityReason").createOptimizationGoalReason();
      return (a != null && c(a, p, n, e, t, !1), p);
    }
    function c(e, t, n, o, a, i) {
      var l = { platform: o, placement: a },
        s = t == null,
        u = i
          ? "ig_dev_efficiency_type_optimization_goal_v2"
          : "ig_dev_efficiency_type_optimization_goal";
      e !== s &&
        r("AdsInterfacesLogger").logOnce({
          eventName: u,
          data: {
            is_enabled: e,
            optimization_goal: n.optimizationGoal,
            campaign_spec: JSON.stringify(l),
          },
        });
    }
    l.getOptimizationGoalIneligibilityReasonForPlacementType = s;
  },
  98,
);

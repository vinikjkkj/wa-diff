__d(
  "AdsPlacementConfigOptimizationGoalEligibilityUtils",
  [
    "AdsAPIOptimizationGoals",
    "AdsInstagramSupportedOptimizationGoals",
    "AdsInterfacesLogger",
    "AdsPlacementConfigPositionPluginUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementOptimizationGoalConfig",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = n.optimizationGoal;
      if (i == null) return null;
      var l = o(
          "AdsInstagramSupportedOptimizationGoals",
        ).supportedOptimizationGoals.get(t),
        c;
      if (
        (e === "instagram" || e === "threads") &&
        l &&
        (l.includes(r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND) &&
          !l.includes(r("AdsAPIOptimizationGoals").VALUE) &&
          l.push(r("AdsAPIOptimizationGoals").VALUE),
        (c = l.includes(i)
          ? null
          : o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason()),
        o(
          "AdsPlacementConfigPositionPluginUtils",
        ).enableV2PlacementEligibilityCheck(t))
      )
        return c;
      var d = s(e, t, n, a);
      return (
        o(
          "AdsPlacementConfigPositionPluginUtils",
        ).shouldLogPlacementEligibility(t) &&
          a != null &&
          u(t === "profile_feed" ? !d : a, c, n, e, t, !0),
        r("AdsInterfacesLogger").logOnce({
          eventName: "running_optimization_goal_validation_v1",
          data: {
            message: JSON.stringify({ placement_key: t }),
            optimization_goal: i,
          },
        }),
        d
      );
    }
    function s(e, t, n, a) {
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
      var c = s[t];
      if (!Object.prototype.hasOwnProperty.call(c, l)) return null;
      var d = c[l],
        m = o(
          "AdsPlacementConfigPositionPluginUtils",
        ).getFirstEnabledConfigValue(d, i, !0),
        p = m
          ? null
          : o("AdsPlacementIneligibilityReason").createOptimizationGoalReason();
      return (a != null && u(a, p, n, e, t, !1), p);
    }
    function u(e, t, n, o, a, i) {
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
    l.getOptimizationGoalIneligibilityReasonForPlacementType = e;
  },
  98,
);

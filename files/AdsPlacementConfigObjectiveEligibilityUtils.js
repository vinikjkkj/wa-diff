__d(
  "AdsPlacementConfigObjectiveEligibilityUtils",
  [
    "AdsInstagramSupportedObjectives",
    "AdsInterfacesLogger",
    "AdsODAXUtils",
    "AdsPlacementConfigPositionPluginUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementObjectiveConfig",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = o("AdsODAXUtils").maybeTranslateObjective(
          n.objective,
          n.promotedObjectType,
          n.optimizationGoal,
        ),
        l = o("AdsInstagramSupportedObjectives").supportedObjectives.get(t),
        c;
      if (
        (e === "instagram" || e === "threads") &&
        l &&
        ((c = l.includes(i)
          ? null
          : o("AdsPlacementIneligibilityReason").createObjectiveReason(
              n.objective,
            )),
        o(
          "AdsPlacementConfigPositionPluginUtils",
        ).enableV2PlacementEligibilityCheck(t))
      )
        return c;
      var d = s(e, t, n, a, i);
      return (
        o(
          "AdsPlacementConfigPositionPluginUtils",
        ).shouldLogPlacementEligibility(t) &&
          a != null &&
          u(t === "profile_feed" ? !d : a, c, n, e, t, !0),
        r("AdsInterfacesLogger").logOnce({
          eventName: "running_objective_validation_v1",
          data: { message: JSON.stringify({ placement_key: t }), objective: i },
        }),
        d
      );
    }
    function s(e, t, n, a, i) {
      if (
        !Object.prototype.hasOwnProperty.call(
          r("AdsPlacementObjectiveConfig"),
          e,
        )
      )
        return null;
      var l = r("AdsPlacementObjectiveConfig")[e];
      if (!Object.prototype.hasOwnProperty.call(l, t)) return null;
      var s = l[t];
      if (!Object.prototype.hasOwnProperty.call(s, i))
        return o("AdsPlacementIneligibilityReason").createObjectiveReason(
          n.objective,
        );
      var c = s[i],
        d = o(
          "AdsPlacementConfigPositionPluginUtils",
        ).getFirstEnabledConfigValue(c, n.capabilities),
        m = d
          ? null
          : o("AdsPlacementIneligibilityReason").createObjectiveReason(
              n.objective,
            );
      return (a != null && u(a, m, n, e, t, !1), m);
    }
    function u(e, t, n, o, a, i) {
      var l = { platform: o, placement: a },
        s = t == null,
        u = i
          ? "ig_dev_efficiency_type_objective_v2"
          : "ig_dev_efficiency_type_objective";
      if (e !== s) {
        var c = n.objective,
          d = n.optimizationGoal,
          m = n.promotedObjectType;
        r("AdsInterfacesLogger").logOnce({
          eventName: u,
          data: {
            is_enabled: e,
            objective: c,
            optimization_goal: d,
            campaign_spec: JSON.stringify(
              babelHelpers.extends({}, l, { promoted_object_type: m }),
            ),
            message: JSON.stringify(t),
          },
        });
      }
    }
    l.getObjectiveIneligibilityReasonForPlacementType = e;
  },
  98,
);

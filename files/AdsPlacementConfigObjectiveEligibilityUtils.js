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
    function e(e, t, n, r) {
      var a = o("AdsODAXUtils").maybeTranslateObjective(
          n.objective,
          n.promotedObjectType,
          n.optimizationGoal,
        ),
        i = o("AdsInstagramSupportedObjectives").supportedObjectives.get(t),
        l;
      if (
        (e === "instagram" || e === "threads") &&
        i &&
        ((l = i.includes(a)
          ? null
          : o("AdsPlacementIneligibilityReason").createObjectiveReason(
              n.objective,
            )),
        o(
          "AdsPlacementConfigPositionPluginUtils",
        ).enableV2PlacementEligibilityCheck(t))
      )
        return l;
      var u = s(e, t, n, r, a);
      return u;
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
      return (a != null && u(a, m, n, e, t), m);
    }
    function u(e, t, n, o, a) {
      var i = { platform: o, placement: a },
        l = t == null,
        s = "ig_dev_efficiency_type_objective";
      if (e !== l) {
        var u = n.objective,
          c = n.optimizationGoal,
          d = n.promotedObjectType;
        r("AdsInterfacesLogger").logOnce({
          eventName: s,
          data: {
            is_enabled: e,
            objective: u,
            optimization_goal: c,
            campaign_spec: JSON.stringify(
              babelHelpers.extends({}, i, { promoted_object_type: d }),
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

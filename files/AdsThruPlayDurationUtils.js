__d(
  "AdsThruPlayDurationUtils",
  ["$InternalEnum", "AdsAPIBillingEvents", "AdsAPIOptimizationGoals"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["SIX_SECONDS", "FIFTEEN_SECONDS"]),
      s = e.FIFTEEN_SECONDS;
    function u(e) {
      return (
        e === r("AdsAPIOptimizationGoals").THRUPLAY ||
        e === r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS
      );
    }
    function c(t) {
      return t === e.SIX_SECONDS
        ? r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS
        : r("AdsAPIOptimizationGoals").THRUPLAY;
    }
    function d(t) {
      switch (t) {
        case r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS:
          return e.SIX_SECONDS;
        case r("AdsAPIOptimizationGoals").THRUPLAY:
          return e.FIFTEEN_SECONDS;
        default:
          return null;
      }
    }
    function m(e) {
      return (
        e === r("AdsAPIBillingEvents").THRUPLAY ||
        e === r("AdsAPIBillingEvents").SIX_SECOND_VIDEO_VIEWS
      );
    }
    function p(e) {
      switch (e) {
        case r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS:
          return r("AdsAPIBillingEvents").SIX_SECOND_VIDEO_VIEWS;
        case r("AdsAPIOptimizationGoals").THRUPLAY:
          return r("AdsAPIBillingEvents").THRUPLAY;
        default:
          return null;
      }
    }
    ((l.ThruPlayDuration = e),
      (l.DEFAULT_THRUPLAY_DURATION = s),
      (l.isThruPlayFamilyGoal = u),
      (l.getOptimizationGoalForDuration = c),
      (l.getDurationForOptimizationGoal = d),
      (l.isCpvBillingEvent = m),
      (l.getCpvBillingEventForGoal = p));
  },
  98,
);

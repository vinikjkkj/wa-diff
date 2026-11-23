__d(
  "adsMAIBAIGCombinedObjectiveConfig",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "IGBoostGoalPreference",
    "PolarisBoostObjectiveUtils",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = "AUTOMATIC_PROFILE_VISITS_COMBO";
      return {
        callToAction: o(
          "PolarisBoostObjectiveUtils",
        ).getAutomaticObjectiveCTAFromAutomaticObjectiveGoal(e),
        destinationType: r("AdCampaignDestination").INSTAGRAM_PROFILE,
        objective: r("AdsAPIObjectives").LINK_CLICKS,
        optimizationGoal: r("AdsAPIOptimizationGoals").AUTOMATIC_OBJECTIVE,
        resolvedDestination: e,
      };
    }
    function s(e) {
      var t = o(
        "PolarisBoostObjectiveUtils",
      ).convertXFBIGBoostGoalPreferenceToIGBoostGoalPreference(e);
      return JSON.stringify({ most_important_goals: t == null ? [] : [t] });
    }
    function u(e, t) {
      var n = t.destinationType,
        a = t.optimizationGoal,
        i = t.readSucceeded,
        l = { isReadOnly: !0, status: "INVALID" };
      if (!i) return l;
      if (e == null) return { status: "NOT_COMBINED" };
      var s = e.most_important_goals;
      if (s.length > 1) return l;
      var u = s[0],
        c = r("objectValues")(r("IGBoostGoalPreference")).find(function (e) {
          return (
            e === u ||
            o(
              "PolarisBoostObjectiveUtils",
            ).convertIGBoostGoalPreferenceToXFBIGBoostGoalPreference(e) === u
          );
        }),
        d = o(
          "PolarisBoostObjectiveUtils",
        ).convertIGBoostGoalPreferenceToXFBIGBoostGoalPreference(c);
      return u != null && d == null
        ? l
        : n !== r("AdCampaignDestination").INSTAGRAM_PROFILE ||
            a !== r("AdsAPIOptimizationGoals").AUTOMATIC_OBJECTIVE ||
            (c != null && c !== "no_preference")
          ? { goalPreference: d, status: "INCONSISTENT" }
          : {
              status: "COMBINED",
              callToAction: o(
                "PolarisBoostObjectiveUtils",
              ).getAutomaticObjectiveCTAFromAutomaticObjectiveGoal(
                "AUTOMATIC_PROFILE_VISITS_COMBO",
              ),
              goalPreference: d,
              resolvedDestination: "AUTOMATIC_PROFILE_VISITS_COMBO",
            };
    }
    function c(e) {
      return e.status === "INVALID" && e.isReadOnly === !0;
    }
    ((l.getIGCombinedObjectiveProjection = e),
      (l.encodeIGCombinedObjectiveMetadata = s),
      (l.resolveIGCombinedObjectiveSavedState = u),
      (l.isIGCombinedObjectiveSavedStateReadOnly = c));
  },
  98,
);

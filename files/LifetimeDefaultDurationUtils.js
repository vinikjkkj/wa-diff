__d(
  "LifetimeDefaultDurationUtils",
  [
    "AdsAPIObjectives",
    "AdsAwarenessLifetimeDefaultedDurationExperimentUtils",
    "AdsLeadsLifetimeDefaultedDurationExperimentUtils",
    "CampaignDefaultBudgetConfig",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return !0;
    }
    function s() {
      return !(!e() || r("gkx")("10063") === !0);
    }
    function u(e, t) {
      return e === r("AdsAPIObjectives").LINK_CLICKS ||
        e === r("AdsAPIObjectives").OUTCOME_TRAFFIC
        ? t
          ? r("qex")._("2192") === !0
          : r("qex")._("2193") === !0
        : !1;
    }
    function c(e, t) {
      return e !== r("AdsAPIObjectives").OUTCOME_SALES
        ? !1
        : t
          ? r("qex")._("889") === !0
          : r("qex")._("1215") === !0;
    }
    function d(e, t) {
      return e !== r("AdsAPIObjectives").APP_INSTALLS
        ? !1
        : t
          ? r("qex")._("1229") === !0
          : r("qex")._("1409") === !0;
    }
    function m(e, t) {
      return (
        t === void 0 && (t = !1),
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
          ? s()
          : e === r("AdsAPIObjectives").OUTCOME_SALES
            ? c(e, t)
            : e === r("AdsAPIObjectives").APP_INSTALLS
              ? d(e, t)
              : e === r("AdsAPIObjectives").OUTCOME_AWARENESS
                ? o(
                    "AdsAwarenessLifetimeDefaultedDurationExperimentUtils",
                  ).passesAwarenessLifetimeDefaultedDurationExperiment(t)
                : e === r("AdsAPIObjectives").OUTCOME_LEADS
                  ? o(
                      "AdsLeadsLifetimeDefaultedDurationExperimentUtils",
                    ).passesLeadsLifetimeDefaultedDurationExperiment(t)
                  : u(e, t)
      );
    }
    function p() {
      return 5;
    }
    function _(e) {
      return e === r("AdsAPIObjectives").OUTCOME_SALES
        ? p()
        : e === r("AdsAPIObjectives").APP_INSTALLS
          ? 10
          : e === r("AdsAPIObjectives").OUTCOME_LEADS
            ? 14
            : r("CampaignDefaultBudgetConfig").campaign_length_days;
    }
    function f(e, t) {
      return t === "lifetime" && m(e);
    }
    ((l.isSevenDayLifetimeDurationEnabledForObjective = m),
      (l.getLifetimeDefaultDurationDays = _),
      (l.shouldUseSevenDayLifetimeBudget = f));
  },
  98,
);

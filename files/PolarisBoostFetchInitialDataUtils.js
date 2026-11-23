__d(
  "PolarisBoostFetchInitialDataUtils",
  [
    "PolarisBoostBudgetAndDurationUtils",
    "PolarisBoostDefaultValues",
    "PolarisBoostObjectiveUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e == null ? void 0 : e.country_prefix,
        n = e == null ? void 0 : e.phone_number;
      return t == null || t === "" || n == null || n === ""
        ? ""
        : "+" + t + " " + n;
    }
    function s(e, t, n) {
      if (o("PolarisBoostObjectiveUtils").isMessagingObjective(e)) {
        var r;
        return t && e === o("PolarisBoostDefaultValues").BIO_GOAL
          ? o("PolarisBoostObjectiveUtils").VIEW_PRODUCT
          : (r = o("PolarisBoostObjectiveUtils").getMessagingCTAFromObjective(
                e,
              )) != null
            ? r
            : o("PolarisBoostDefaultValues").DEFAULT_CTA;
      }
      return o("PolarisBoostObjectiveUtils").isCombinedObjective(e)
        ? o(
            "PolarisBoostObjectiveUtils",
          ).getAutomaticObjectiveCTAFromAutomaticObjectiveGoal(e)
        : n != null
          ? n
          : o("PolarisBoostDefaultValues").DEFAULT_CTA;
    }
    function u(e) {
      var t = e.currency,
        n = e.currencyOffset,
        r = e.isPreLiveBoost,
        a = e.prefilledBudgetWithOffset,
        i = e.prefilledDurationInSeconds,
        l = e.prefilledStartTimeMs;
      if (!r) return null;
      var s = parseInt(String(a), 10);
      return {
        durationInSeconds: l != null ? i : null,
        startTimeMs: l,
        totalBudget:
          s > 0
            ? o("PolarisBoostBudgetAndDurationUtils").getBillingCurrencyAmount(
                s,
                t,
                n,
              )
            : null,
      };
    }
    ((l.formatPolarisBoostWhatsAppNumber = e),
      (l.getInitialDefaultCTA = s),
      (l.getPolarisBoostPrefilledLvaSchedule = u));
  },
  98,
);

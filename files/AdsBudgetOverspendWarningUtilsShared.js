__d(
  "AdsBudgetOverspendWarningUtilsShared",
  [
    "fbt",
    "AdsCurrencyFormatter",
    "OverspendProtectionControls.experimental",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, r, o, a, i) {
      var l = c(e, t, n, r, o, i);
      return l ? d(t, e, a, !0) : null;
    }
    function u(e, t, n, r, o, a, i) {
      var l = c(e, t, n, r, o, i);
      return l ? d(t, e, a, !1) : null;
    }
    function c(e, t, n, o, a, i) {
      var l = r("isTruthy")(t),
        s = l ? t : e;
      if (i != null && s != null && s <= i) return !1;
      var u = 0,
        c = l
          ? r("OverspendProtectionControls.experimental")
              .overspend_protection_lifetime_budget_tiers
          : r("OverspendProtectionControls.experimental")
              .overspend_protection_daily_budget_tiers;
      if (
        ((u = r("isTruthy")(n) ? n : l ? a : o),
        !r("isTruthy")(u) || !r("isTruthy")(s))
      )
        return !1;
      for (var d = 0; d < c.length - 1 && !(u < c[d]); d++);
      return (
        s >
        r("OverspendProtectionControls.experimental")
          .overspend_protection_budget_tier_thresholds[d] *
          u
      );
    }
    function d(e, t, n, a) {
      var i = r("isTruthy")(e),
        l = i ? e : t;
      if (!r("isTruthy")(l)) return null;
      var u = o("AdsCurrencyFormatter").formatCurrencyWithNumberDelimiters(
        n,
        l,
      );
      return a
        ? s._(
            /*BTDS*/ "Your {budgetType} ad set budget of {budget} looks higher than usual. If it's correct, you can ignore this warning.",
            [
              s._param("budgetType", i ? "lifetime" : "daily"),
              s._param("budget", u),
            ],
          )
        : s._(
            /*BTDS*/ "Your {budgetType} campaign budget of {budget} looks higher than usual. If it's correct, you can ignore this warning.",
            [
              s._param("budgetType", i ? "lifetime" : "daily"),
              s._param("budget", u),
            ],
          );
    }
    ((l.generateCampaignOverspendWarning = e),
      (l.generateCampaignGroupOverspendWarning = u),
      (l.shouldShowWarning = c));
  },
  226,
);

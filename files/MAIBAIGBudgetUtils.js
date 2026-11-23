__d(
  "MAIBAIGBudgetUtils",
  [
    "BillingCurrencyAmount",
    "DateTime",
    "MAIBAIGStrings",
    "PECurrency",
    "PolarisBoostBudgetAndDurationScreenStrings",
    "PolarisBoostBudgetAndDurationUtils",
    "PolarisBoostDurationType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 86400,
      s = 6;
    function u(e, t) {
      if (e == null || t <= 0) return null;
      var n = Number(e.getAmountWithPEOffset());
      return Number.isFinite(n)
        ? Math.round((n / o("PECurrency").DEFAULT_AMOUNT_OFFSET) * t)
        : null;
    }
    function c(t, n) {
      if (n == null || n <= 0) return null;
      var o = r("DateTime").now(0).getUnixTimestampSeconds(),
        a = t != null && t > o ? t : o;
      return Math.max(1, Math.round((n - a) / e));
    }
    function d(t, n) {
      var o = r("DateTime").now(0).getUnixTimestampSeconds(),
        a = t != null && t > o ? t : o;
      return a + n * e;
    }
    function m(e, t, n) {
      return e != null && e > 0
        ? e
        : t != null && t > 0 && n > 0
          ? Math.round(t / n)
          : null;
    }
    function p(e, t, n) {
      return { dailyBudget: null, lifetimeBudget: e * t, stopTime: d(n, t) };
    }
    function _(e, t, n, o) {
      return n === r("PolarisBoostDurationType").INDEFINITE
        ? { dailyBudget: e, lifetimeBudget: null, stopTime: null }
        : p(e, t, o);
    }
    function f(e, t, n, o) {
      return n === r("PolarisBoostDurationType").INDEFINITE
        ? { dailyBudget: e, lifetimeBudget: null, stopTime: null }
        : p(e, t, o);
    }
    function g(e, t, n, r) {
      var a = o(
          "PolarisBoostBudgetAndDurationUtils",
        ).getDailyBudgetOptionsFromAccountCurrencyOffsetAmounts(r, e, t),
        i =
          n != null && n > 0
            ? o("PolarisBoostBudgetAndDurationUtils").getBillingCurrencyAmount(
                n,
                e,
                t,
              )
            : null;
      return o(
        "PolarisBoostBudgetAndDurationUtils",
      ).withInitialDailyBudgetOption(a, i);
    }
    function h(e, t, n, r, a) {
      if (t <= 0 || n == null || n <= 0)
        return o("MAIBAIGStrings").SUMMARY_UNAVAILABLE_LABEL;
      var i = o("BillingCurrencyAmount").getFromUserInput(
          (n / t).toString(10),
          e,
        ),
        l = c(r, a);
      return l == null
        ? o("PolarisBoostBudgetAndDurationScreenStrings").getDailyBudgetSubtext(
            i,
          )
        : o(
            "PolarisBoostBudgetAndDurationScreenStrings",
          ).getTotalSpendDurationInDaysText(i.multiply(l), l);
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.MAIBA_IG_DEFAULT_DURATION_IN_DAYS = s),
      (l.getBudgetAmountInAccountCurrencyOffsetUnits = u),
      (l.getBudgetDurationInDays = c),
      (l.getDraftDailyBudgetInAccountCurrencyOffsetUnits = m),
      (l.getBudgetFieldsForDurationChange = p),
      (l.getBudgetFieldsForDurationTypeChange = _),
      (l.getBudgetFieldsForDailyBudgetChange = f),
      (l.buildIGDailyBudgetOptions = g),
      (l.formatIGBudgetDurationSummary = h));
  },
  98,
);

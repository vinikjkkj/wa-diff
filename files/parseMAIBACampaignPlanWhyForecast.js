__d(
  "parseMAIBACampaignPlanWhyForecast",
  ["CurrencyConfig", "MAIBACampaignPlanTypes", "objectHasOwn"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function s(e) {
      return typeof e == "number" && Number.isSafeInteger(e) && e >= 0
        ? e
        : null;
    }
    function u(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    function c(t) {
      var n = e(t);
      if (n != null) {
        var r = s(n.low),
          a = s(n.high),
          i = u(n.unit),
          l = o("MAIBACampaignPlanTypes").WHY_FORECAST_PERIODS.find(
            function (e) {
              return e === n.period;
            },
          );
        return r != null && a != null && r <= a && i != null && l
          ? { high: a, low: r, period: l, unit: i }
          : void 0;
      }
    }
    function d(t) {
      var n = e(t);
      if (n != null) {
        var o = s(n.amount_minor),
          a = u(n.currency_code),
          i =
            a != null &&
            r("objectHasOwn")(r("CurrencyConfig").allCurrenciesByCode, a),
          l = u(n.unit);
        return o != null && o > 0 && a != null && i && l != null
          ? { amountMinor: o, currencyCode: a, unit: l }
          : void 0;
      }
    }
    function m(t) {
      var n = e(t);
      if (n == null) return null;
      var r = c(n.results),
        o = d(n.cost);
      return r == null && o == null ? null : { cost: o, results: r };
    }
    l.default = m;
  },
  98,
);

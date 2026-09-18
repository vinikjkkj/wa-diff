__d(
  "WAWebBizBroadcastProCurrencyUtils",
  ["Currency", "WAWebL10nGetRenderedLocale"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("Currency").getSymbol(e) || e;
    }
    function s(e) {
      return o("Currency").getISO(e);
    }
    function u(e, t, n, r) {
      var a = o("WAWebL10nGetRenderedLocale")
        .WAWebL10nGetRenderedLocale()
        .valueOf()
        .replace(/_/g, "-");
      return new Intl.NumberFormat(
        a,
        babelHelpers.extends(
          { style: "currency", currency: t },
          n != null
            ? {
                maximumFractionDigits: r != null ? r : n,
                minimumFractionDigits: n,
              }
            : null,
        ),
      ).format(e);
    }
    function c(e, t) {
      var n = o("Currency").getOffset(t) || 100;
      return Math.round(e * n);
    }
    var d = 1e3;
    function m(e, t) {
      var n = o("Currency").getOffset(t) || 100;
      return Math.round(e * n * d);
    }
    function p(e, t) {
      var n = o("Currency").getOffset(t) || 100;
      return e / n / d;
    }
    function _(e, t, n) {
      var r = o("Currency").getOffset(n) || 100;
      return Math.ceil((e * t) / d) / r;
    }
    function f(e) {
      var t = o("Currency").getOffset(e) || 100;
      return t === 1 ? 0 : t === 10 ? 1 : t === 1e3 ? 3 : 2;
    }
    var g = 2;
    function h(e) {
      return f(e) + g;
    }
    ((l.getCurrencySymbol = e),
      (l.getCurrencyISO = s),
      (l.formatCurrencyAmount = u),
      (l.displayAmountToSmallestUnit = c),
      (l.displayAmountToCpmSmallestUnit = m),
      (l.cpmSmallestUnitToDisplayAmount = p),
      (l.budgetToFundCount = _),
      (l.getCurrencyDecimalPlaces = f),
      (l.BID_EXTRA_PRECISION = g),
      (l.getBidDecimalPlaces = h));
  },
  98,
);

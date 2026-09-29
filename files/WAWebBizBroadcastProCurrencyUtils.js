__d(
  "WAWebBizBroadcastProCurrencyUtils",
  ["WAWebBizCurrency", "WAWebL10nGetRenderedLocale"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAWebBizCurrency").getSymbol(e) || e;
    }
    function s(e) {
      return o("WAWebBizCurrency").getISO(e);
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
      var n = o("WAWebBizCurrency").getOffset(t) || 100;
      return Math.round(e * n);
    }
    function d(e, t) {
      var n = o("WAWebBizCurrency").getOffset(t) || 100;
      return e / n;
    }
    var m = 1e3;
    function p(e, t) {
      var n = o("WAWebBizCurrency").getOffset(t) || 100;
      return Math.round(e * n * m);
    }
    function _(e, t) {
      var n = o("WAWebBizCurrency").getOffset(t) || 100;
      return e / n / m;
    }
    function f(e, t, n) {
      var r = o("WAWebBizCurrency").getOffset(n) || 100;
      return Math.ceil((e * t) / m) / r;
    }
    function g(e) {
      var t = o("WAWebBizCurrency").getOffset(e) || 100;
      return t === 1 ? 0 : t === 10 ? 1 : t === 1e3 ? 3 : 2;
    }
    var h = 2;
    function y(e) {
      return g(e) + h;
    }
    ((l.getCurrencySymbol = e),
      (l.getCurrencyISO = s),
      (l.formatCurrencyAmount = u),
      (l.displayAmountToSmallestUnit = c),
      (l.smallestUnitToDisplayAmount = d),
      (l.displayAmountToCpmSmallestUnit = p),
      (l.cpmSmallestUnitToDisplayAmount = _),
      (l.budgetToFundCount = f),
      (l.getCurrencyDecimalPlaces = g),
      (l.BID_EXTRA_PRECISION = h),
      (l.getBidDecimalPlaces = y));
  },
  98,
);

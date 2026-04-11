__d(
  "AdsCurrencyFormatter",
  [
    "Currency",
    "NumberFormatConfig",
    "intlNumUtils",
    "isCurrencyWithSymbolAndThousandsSeparators",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return Math.round(Math.log(e) / Math.LN10);
    }
    function s(e, t, n) {
      var o = r("Currency").getFormat(e) || "{symbol}{amount}",
        a = r("Currency").getSymbol(e) || "",
        i = o.replace("{symbol}", a).replace("{amount}", t);
      return n === !0 ? i + " " + r("Currency").getISO(e) : i;
    }
    function u(t, n, o, a) {
      a === void 0 && (a = !0);
      var i = r("Currency").getOffset(t) || 100,
        l = a ? e(i) : 0;
      return o === !0
        ? r("intlNumUtils").formatNumberWithThousandDelimiters(n / i, l)
        : r("intlNumUtils").formatNumber(n / i, l);
    }
    function c(e, t, n, r, o, a) {
      (o === void 0 && (o = !0), a === void 0 && (a = !1));
      var i = (a && t > 0 ? "+" : "") + u(e, t, r, o);
      return s(e, i, n);
    }
    function d(e, t) {
      return c(e, t);
    }
    function m(e, t, n, r) {
      return u(e, t, n, r);
    }
    function p(e, t) {
      return c(e, t, !0);
    }
    function _(e, t) {
      return u(e, t) + " " + r("Currency").getISO(e);
    }
    function f(e, t, n) {
      return (n === void 0 && (n = !0), c(e, t, !1, !0, n));
    }
    function g(t, n) {
      for (
        var o = r("Currency").getOffset(t) || 100, a = e(o);
        n !== 0 && Math.round((Math.abs(n) * Math.pow(10, a)) / o) < 1;
      )
        a++;
      return a;
    }
    function h(e, t) {
      var n = y(e, t);
      return s(e, n, !1);
    }
    function y(e, t, n) {
      n === void 0 && (n = !0);
      var o = r("Currency").getOffset(e) || 100,
        a = g(e, t),
        i = n
          ? r("intlNumUtils").formatNumberWithThousandDelimiters(t / o, a)
          : r("intlNumUtils").formatNumber(t / o, a);
      return i;
    }
    function C(e, t, n) {
      var o = r("Currency").getOffset(e) || 100;
      return s(
        e,
        r("intlNumUtils").formatNumberWithThousandDelimiters(
          t / o,
          Math.max(n, g(e, t)),
        ),
      );
    }
    function b(e, t, n) {
      return S(e, t, n, !0);
    }
    function v(e, t, n) {
      return S(e, t, n, !1);
    }
    function S(t, n, o, a) {
      var i = r("Currency").getOffset(t) || 100,
        l = e(i);
      l && n % i === 0 && (l = 0);
      var u =
        o === !0
          ? r("intlNumUtils").formatNumberWithThousandDelimiters(n / i, l)
          : r("intlNumUtils").formatNumber(n / i, l);
      return a === !0 ? s(t, u, !1) : u;
    }
    function R(e, t, n) {
      return I(d(e, t), d(e, n));
    }
    function L(e, t, n, r) {
      return r - n < t ? d(e, r) : R(e, n, r);
    }
    var E = "\u2013";
    function k(e, t) {
      var n = t.toFixed(2);
      return r("Currency").getSymbol(e) + " " + n;
    }
    function I(e, t) {
      return e + E + t;
    }
    function T(e, t, n) {
      return D(e, t, n) || 0;
    }
    function D(e, t, n) {
      var o = r("Currency").getOffset(e),
        a = r("intlNumUtils").parseNumberRaw(
          t,
          n,
          r("NumberFormatConfig").numberDelimiter,
        );
      return a == null ? null : Math.round(a * o);
    }
    function x(t, n) {
      var o = r("Currency").getOffset(t),
        a = e(o),
        i = r("intlNumUtils").parseNumber(n) || 0;
      return +i.toFixed(a);
    }
    function $(e, t, n) {
      return T(
        e,
        t,
        n != null && n != "" ? n : r("NumberFormatConfig").decimalSeparator,
      );
    }
    function P(e, t, n) {
      return D(
        e,
        t,
        n != null && n != "" ? n : r("NumberFormatConfig").decimalSeparator,
      );
    }
    function N(e, t, n, r, o, a) {
      return (
        o === void 0 && (o = !0),
        a === void 0 && (a = !1),
        c(e, t, n, r, o, a)
      );
    }
    function M(e, t) {
      var n = 100,
        o = r("Currency").getOffset(e) || n;
      return (t / n) * o;
    }
    function w(e, t) {
      var n = r("Currency").getOffset(e) || 100,
        o = r("Currency").getSymbol(e),
        a = t / n,
        i = "",
        l = "";
      if (a > 1e6) ((a /= 1e6), (i = "M"));
      else if (a > 1e3) ((a /= 1e3), (i = "K"));
      else return S(e, t, !0, !0);
      return (
        (a = Math.round(a * 10) / 10),
        (l = r("intlNumUtils").formatNumber(a, 1)),
        o + l + i
      );
    }
    i.exports = {
      formatCurrency: d,
      formatCurrencyAtLeastOneSigFig: h,
      formatCurrencyAtLeastOneSigFigNoSymbol: y,
      formatCurrencyFullFormat: N,
      formatCurrencyNoSymbol: m,
      formatCurrencyRange: R,
      formatCurrencyWithFixedDecimalAndSymbol: k,
      formatCurrencyRangeWithThreshold: L,
      formatCurrencyWithAtLeastNumberOfDecimalPlacesAndOneSigFig: C,
      formatCurrencyWithISO: p,
      formatCurrencyWithISONoSymbol: _,
      formatCurrencyWithLargerNumber: w,
      formatCurrencyWithNumberDelimiters: f,
      formatCurrencyWithOptionalDecimals: b,
      formatCurrencyWithOptionalDecimalsNoSymbol: v,
      formatRange: I,
      isCurrencyWithSymbolAndThousandsSeparators: r(
        "isCurrencyWithSymbolAndThousandsSeparators",
      ),
      parseCurrency: $,
      parseOptionalCurrency: P,
      parsePECurrency: x,
      replaceWithSymbol: s,
      replaceOffsetFactorFromAmount: M,
    };
  },
  34,
);

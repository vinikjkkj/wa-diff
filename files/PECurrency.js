__d(
  "PECurrency",
  ["PECurrencyConfig", "intlNumUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100;
    function s(e) {
      for (var t = 0, n = e; n > 1; ) (t++, (n /= 10));
      return t;
    }
    function u(e, t, n) {
      var o = r("PECurrencyConfig").currency_map_for_render[e].symbol,
        a =
          r("PECurrencyConfig").currency_map_for_render[e].format ||
          "{symbol}{amount}";
      return (
        n === !0 &&
          o != e &&
          (a.indexOf("{symbol}") >= a.indexOf("{amount}")
            ? (a += " (" + e + ") ")
            : (a += " " + e)),
        a.replace("{symbol}", o).replace("{amount}", String(t))
      );
    }
    function c(t, n, o) {
      var a = babelHelpers.extends(
          {
            showCurrencyCode: !1,
            showDecimals: !0,
            showSymbol: !0,
            stripZeros: !1,
            thousandSeparator: !1,
          },
          o,
        ),
        i = L(t) || e,
        l;
      l = n / i;
      var c = a.showDecimals ? s(i) : 0;
      (a.stripZeros || (l = r("intlNumUtils").formatNumber(l, c)),
        a.thousandSeparator &&
          (typeof l == "string" && (l = r("intlNumUtils").parseNumber(l)),
          (l = r("intlNumUtils").formatNumberWithThousandDelimiters(
            Number(l),
            c,
          ))));
      var d;
      return (
        a.showSymbol
          ? (typeof l == "number" && (l = "" + l),
            (d = u(t, l, a.showCurrencyCode)))
          : (d = a.showCurrencyCode ? String(l) + " " + t : String(l)),
        d
      );
    }
    function d(t, n, o) {
      var a = babelHelpers.extends(
          {
            showCurrencyCode: !1,
            showDecimals: !0,
            showSymbol: !0,
            stripZeros: !1,
            thousandSeparator: !1,
          },
          o,
        ),
        i = L(t) || 0,
        l;
      l = n / e;
      var c = a.showDecimals ? s(i) : 0;
      (a.stripZeros || (l = r("intlNumUtils").formatNumber(l, c)),
        a.thousandSeparator &&
          (typeof l == "string" && (l = r("intlNumUtils").parseNumber(l)),
          (l = r("intlNumUtils").formatNumberWithThousandDelimiters(
            Number(l),
            c,
          ))));
      var d;
      return (
        a.showSymbol
          ? (typeof l == "number" && (l = "" + l),
            (d = u(t, l, a.showCurrencyCode)))
          : (d = a.showCurrencyCode ? String(l) + " " + t : String(l)),
        d
      );
    }
    function m(e, t) {
      switch (t) {
        case "AUD":
          return "A" + e;
        case "CAD":
          return "CA" + e;
        case "HKD":
          return "HK" + e;
        case "SGD":
          return "S" + e;
        case "COP":
          return "COP" + e;
        case "MXN":
          return "MX" + e;
        default:
          return e;
      }
    }
    function p(e) {
      var t = R(e);
      return t == null ? null : m(t, e);
    }
    function _(e, t, n, r, o) {
      var a = g(e, t, !0, n, r, o);
      return m(a, e);
    }
    function f(e, t, n, r, o) {
      var a = y(e, t, !0, n, r, o);
      return m(a, e);
    }
    function g(t, n, o, a, i, l) {
      var c = o != null ? o : !0,
        d = a != null ? a : !1,
        m = i != null ? i : !1,
        p = l != null ? l : !1,
        _ = L(t) || e,
        f;
      f = Math.abs(n) / _;
      var g = s(_);
      (m || (f = r("intlNumUtils").formatNumber(f, g)),
        p &&
          (typeof f == "string" && (f = r("intlNumUtils").parseNumber(f)),
          (f = r("intlNumUtils").formatNumberWithThousandDelimiters(
            Number(f),
            m ? 0 : g,
          ))));
      var h;
      return (
        c
          ? (typeof f == "number" && (f = "" + f), (h = u(t, f, d)))
          : (h = d ? String(f) + " " + t : String(f)),
        n < 0 && (h = "-" + h),
        h
      );
    }
    function h(e, t, n, o, a, i) {
      var l = n != null ? n : !0,
        c = o != null ? o : !1,
        d = a != null ? a : !1,
        m = i != null ? i : !1,
        p = L(e) || 0,
        _;
      _ = Math.abs(t);
      var f = s(p);
      (d || (_ = r("intlNumUtils").formatNumber(_, f)),
        m &&
          (typeof _ == "string" && (_ = r("intlNumUtils").parseNumber(_)),
          (_ = r("intlNumUtils").formatNumberWithThousandDelimiters(
            Number(_),
            d ? 0 : f,
          ))));
      var g;
      return (
        l
          ? (typeof _ == "number" && (_ = "" + _), (g = u(e, _, c)))
          : (g = c ? String(_) + " " + e : String(_)),
        t < 0 && (g = "-" + g),
        g
      );
    }
    function y(t, n, o, a, i, l) {
      var c = o != null ? o : !0,
        d = a != null ? a : !1,
        m = i != null ? i : !1,
        p = l != null ? l : !1,
        _ = L(t) || 0,
        f;
      f = Math.abs(n) / e;
      var g = s(_);
      (m || (f = r("intlNumUtils").formatNumber(f, g)),
        p &&
          (typeof f == "string" && (f = r("intlNumUtils").parseNumber(f)),
          (f = r("intlNumUtils").formatNumberWithThousandDelimiters(
            Number(f),
            m ? 0 : g,
          ))));
      var h;
      return (
        c
          ? (typeof f == "number" && (f = "" + f), (h = u(t, f, d)))
          : (h = d ? String(f) + " " + t : String(f)),
        n < 0 && (h = "-" + h),
        h
      );
    }
    function C(e, t, n, r, o) {
      return g(e.currency, e.amount, t, n, r, o);
    }
    function b(e, t, n, r, o) {
      return y(e.currency, e.amount, t, n, r, o);
    }
    function v(e) {
      var t = E(e);
      return t != null ? Object.keys(t) : [];
    }
    function S(e) {
      return r("PECurrencyConfig").currency_map_for_render[e]
        ? r("PECurrencyConfig").currency_map_for_render[e].screen_name
        : null;
    }
    function R(e) {
      return r("PECurrencyConfig").currency_map_for_render[e]
        ? r("PECurrencyConfig").currency_map_for_render[e].symbol
        : null;
    }
    function L(e) {
      return r("PECurrencyConfig").currency_map_for_render[e]
        ? r("PECurrencyConfig").currency_map_for_render[e].offset
        : null;
    }
    function E(e) {
      switch (e) {
        case 2:
          return r("PECurrencyConfig").currency_map_for_cc;
        case 1:
          return r("PECurrencyConfig").currency_map_for_render;
        default:
          return null;
      }
    }
    i.exports = {
      addExtendedSymbol: m,
      DEFAULT_AMOUNT_OFFSET: e,
      formatAmount: y,
      formatAmountWithOffset: g,
      formatAmountWithExtendedSymbol: f,
      formatAmountWithExtendedSymbolAndOffset: _,
      formatAmountX: d,
      formatAmountXWithOffset: c,
      formatCurrencyAmount: b,
      formatCurrencyAmountWithOffset: C,
      formatRawAmount: u,
      getAllCurrencies: v,
      getCurrencyScreenName: S,
      getCurrencySymbol: R,
      getCurrencyOffset: L,
      getExtendedCurrencySymbol: p,
      getMaxSubDenomLength: s,
      formatAmountWithoutOffset: h,
    };
  },
  34,
);

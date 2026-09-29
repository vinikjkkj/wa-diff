__d(
  "WAWebBizAdCreationCurrencyUtils",
  [
    "FBLogger",
    "WAWebBizAdsLocaleTag",
    "WAWebBizCurrency",
    "WAWebBizNativeAdsGatingUtils",
    "cr:16083",
    "getErrorSafe",
    "intlNumUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100,
      s = 100;
    function u(e, t, n) {
      var r;
      return (r = new Intl.NumberFormat(e, {
        currency: t,
        style: "currency",
      }).resolvedOptions().maximumFractionDigits) != null
        ? r
        : Math.round(Math.log(n) / Math.LN10);
    }
    function c(t, n, r) {
      var a = o("WAWebBizCurrency").getOffset(n) || e,
        i = o("WAWebBizAdsLocaleTag").getWAWebBizAdsLocaleTag(),
        l = r.withDecimals ? u(i, n, a) : 0,
        s = r.withSymbol
          ? new Intl.NumberFormat(i, {
              currency: n,
              maximumFractionDigits: l,
              minimumFractionDigits: l,
              style: "currency",
              useGrouping: r.withNumberDelimiters,
            }).format(t / a)
          : new Intl.NumberFormat(i, {
              maximumFractionDigits: l,
              minimumFractionDigits: l,
              style: "decimal",
              useGrouping: r.withNumberDelimiters,
            }).format(t / a);
      if (!r.withISO) return s;
      var c = o("WAWebBizCurrency").getISO(n);
      return c != null && c !== "" ? s + " " + c : s;
    }
    function d(t, n, a) {
      var i = t / (o("WAWebBizCurrency").getOffset(n) || e);
      return a.withNumberDelimiters
        ? r("intlNumUtils").formatNumberWithThousandDelimiters(i, 0)
        : r("intlNumUtils").formatNumber(i, 0);
    }
    function m(e, t, a) {
      var i,
        l,
        s,
        u,
        m = {
          withDecimals:
            (i = a == null ? void 0 : a.withDecimals) != null ? i : !1,
          withISO: (l = a == null ? void 0 : a.withISO) != null ? l : !1,
          withNumberDelimiters:
            (s = a == null ? void 0 : a.withNumberDelimiters) != null ? s : !0,
          withSymbol: (u = a == null ? void 0 : a.withSymbol) != null ? u : !0,
        };
      if (
        o(
          "WAWebBizNativeAdsGatingUtils",
        ).nativeAdsCldrCurrencyFormattingEnabled()
      )
        try {
          return c(e, t, m);
        } catch (e) {
          r("FBLogger")("wa_ctwa_web")
            .catching(r("getErrorSafe")(e))
            .info("CLDR currency formatting failed for " + t);
        }
      return n("cr:16083") != null
        ? n("cr:16083").formatCurrencyWithLegacyFormatter(e, t, m)
        : d(e, t, m);
    }
    function p(e, t, n) {
      n === void 0 && (n = !1);
      var r = o("WAWebBizCurrency").getOffset(t),
        a = Math.round(e / r);
      return n ? a.toLocaleString() : String(a);
    }
    function _(e, t) {
      var n = o("WAWebBizCurrency").getOffset(t),
        a = r("intlNumUtils").parseNumber(e),
        i = a == null ? null : Math.round(a * n);
      if (i == null || !Number.isFinite(i)) return null;
      var l = Math.round(Math.abs(i) / n);
      return l * n;
    }
    function f(t, n, r) {
      var a = o("WAWebBizCurrency").getOffset(n) || e;
      return m(Math.round((t * a) / s), n, r);
    }
    function g(e, t, n) {
      var r = e != null && e.trim() !== "" ? Number(e) : null;
      return o(
        "WAWebBizNativeAdsGatingUtils",
      ).nativeAdsCldrCurrencyFormattingEnabled() &&
        r != null &&
        Number.isFinite(r) &&
        t != null
        ? f(r, t, { withDecimals: !0 })
        : n;
    }
    function h(e) {
      return o("WAWebBizCurrency").getOffset(e);
    }
    function y(e) {
      if (
        o(
          "WAWebBizNativeAdsGatingUtils",
        ).nativeAdsCldrCurrencyFormattingEnabled()
      )
        try {
          var t = o("WAWebBizAdsLocaleTag").getWAWebBizAdsLocaleTag(),
            n = new Intl.NumberFormat(t, {
              currency: e,
              maximumFractionDigits: 0,
              minimumFractionDigits: 0,
              style: "currency",
              useGrouping: !1,
            }).format(0),
            a = new Intl.NumberFormat(t, {
              maximumFractionDigits: 0,
              minimumFractionDigits: 0,
              style: "decimal",
              useGrouping: !1,
            }).format(0),
            i = n.indexOf(a);
          if (i !== -1)
            return { prefix: n.slice(0, i), suffix: n.slice(i + a.length) };
        } catch (t) {
          r("FBLogger")("wa_ctwa_web")
            .catching(r("getErrorSafe")(t))
            .info("CLDR currency affix lookup failed for " + e);
        }
      return { prefix: o("WAWebBizCurrency").getSymbol(e), suffix: "" };
    }
    var C = {
        formatCurrency: m,
        formatCurrencyForInput: p,
        formatPECurrencyAmount: f,
        formatServerCurrencyAmount: g,
        getCurrencyAffixes: y,
        getCurrencyOffset: h,
        parseCurrencyInput: _,
      },
      b = C;
    l.default = b;
  },
  98,
);

__d(
  "WAWebBizAdCreationCurrencyUtils",
  [
    "AdsCurrencyFormatter",
    "Currency",
    "FBLogger",
    "LWICometFormatCurrency",
    "WAWebBizAdsLocaleTag",
    "WAWebBizNativeAdsGatingUtils",
    "getErrorSafe",
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
      var a = o("Currency").getOffset(n) || e,
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
      var c = o("Currency").getISO(n);
      return c != null && c !== "" ? s + " " + c : s;
    }
    function d(e, t, n) {
      var a,
        i,
        l,
        s,
        u = {
          withDecimals:
            (a = n == null ? void 0 : n.withDecimals) != null ? a : !1,
          withISO: (i = n == null ? void 0 : n.withISO) != null ? i : !1,
          withNumberDelimiters:
            (l = n == null ? void 0 : n.withNumberDelimiters) != null ? l : !0,
          withSymbol: (s = n == null ? void 0 : n.withSymbol) != null ? s : !0,
        };
      if (
        o(
          "WAWebBizNativeAdsGatingUtils",
        ).nativeAdsCldrCurrencyFormattingEnabled()
      )
        try {
          return c(e, t, u);
        } catch (e) {
          r("FBLogger")("wa_ctwa_web")
            .catching(r("getErrorSafe")(e))
            .info("CLDR currency formatting failed for " + t);
        }
      return o("LWICometFormatCurrency").getLWIFormatCurrency(e, t, u);
    }
    function m(e, t, n) {
      n === void 0 && (n = !1);
      var r = o("Currency").getOffset(t),
        a = Math.round(e / r);
      return n ? a.toLocaleString() : String(a);
    }
    function p(e, t) {
      var n = o("AdsCurrencyFormatter").parseOptionalCurrency(t, e);
      if (n == null || !Number.isFinite(n)) return null;
      var r = o("Currency").getOffset(t),
        a = Math.round(Math.abs(n) / r);
      return a * r;
    }
    function _(t, n, r) {
      var a = o("Currency").getOffset(n) || e;
      return d(Math.round((t * a) / s), n, r);
    }
    function f(e, t, n) {
      var r = e != null && e.trim() !== "" ? Number(e) : null;
      return o(
        "WAWebBizNativeAdsGatingUtils",
      ).nativeAdsCldrCurrencyFormattingEnabled() &&
        r != null &&
        Number.isFinite(r) &&
        t != null
        ? _(r, t, { withDecimals: !0 })
        : n;
    }
    function g(e) {
      return o("Currency").getOffset(e);
    }
    function h(e) {
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
      return { prefix: o("Currency").getSymbol(e) || "", suffix: "" };
    }
    var y = {
        formatCurrency: d,
        formatCurrencyForInput: m,
        formatPECurrencyAmount: _,
        formatServerCurrencyAmount: f,
        getCurrencyAffixes: h,
        getCurrencyOffset: g,
        parseCurrencyInput: p,
      },
      C = y;
    l.default = C;
  },
  98,
);

__d(
  "WAWebBizAdCreationCurrencyUtils",
  ["AdsCurrencyFormatter", "Currency", "LWICometFormatCurrency"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r, a, i, l;
      return o("LWICometFormatCurrency").getLWIFormatCurrency(e, t, {
        withDecimals:
          (r = n == null ? void 0 : n.withDecimals) != null ? r : !1,
        withISO: (a = n == null ? void 0 : n.withISO) != null ? a : !1,
        withNumberDelimiters:
          (i = n == null ? void 0 : n.withNumberDelimiters) != null ? i : !0,
        withSymbol: (l = n == null ? void 0 : n.withSymbol) != null ? l : !0,
      });
    }
    function s(e, t, n) {
      n === void 0 && (n = !1);
      var r = o("Currency").getOffset(t),
        a = Math.round(e / r);
      return n ? a.toLocaleString() : String(a);
    }
    function u(e, t) {
      var n = o("AdsCurrencyFormatter").parseOptionalCurrency(t, e);
      if (n == null || !Number.isFinite(n)) return null;
      var r = o("Currency").getOffset(t),
        a = Math.round(Math.abs(n) / r);
      return a * r;
    }
    function c(e) {
      return o("Currency").getOffset(e);
    }
    function d(e) {
      return o("Currency").getSymbol(e) || "";
    }
    var m = {
        formatCurrency: e,
        formatCurrencyForInput: s,
        getCurrencyOffset: c,
        getCurrencySymbol: d,
        parseCurrencyInput: u,
      },
      p = m;
    l.default = p;
  },
  98,
);

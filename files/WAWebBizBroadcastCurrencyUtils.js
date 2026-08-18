__d(
  "WAWebBizBroadcastCurrencyUtils",
  ["WAWebL10nGetRenderedLocale"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.amountInMinorUnits,
        n = e.currency,
        r = e.fallback,
        a = r === void 0 ? "N/A" : r,
        i = e.offset;
      if (t == null || n == null || i == null || i === 0) return a;
      try {
        var l = t / i,
          s = o("WAWebL10nGetRenderedLocale")
            .WAWebL10nGetRenderedLocale()
            .replace("_", "-"),
          u = new Intl.NumberFormat(s, {
            currency: n || "USD",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
            style: "currency",
          });
        return u.format(l);
      } catch (e) {
        return a;
      }
    }
    l.formatCurrencyFromMinorUnits = e;
  },
  98,
);

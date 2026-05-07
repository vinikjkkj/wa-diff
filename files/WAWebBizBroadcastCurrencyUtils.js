__d(
  "WAWebBizBroadcastCurrencyUtils",
  ["WAWebL10nGetRenderedLocale"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      if (
        (r === void 0 && (r = "N/A"),
        e == null || t == null || n == null || n === 0)
      )
        return r;
      try {
        var a = e / n,
          i = o("WAWebL10nGetRenderedLocale")
            .WAWebL10nGetRenderedLocale()
            .replace("_", "-"),
          l = new Intl.NumberFormat(i, {
            currency: t || "USD",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
            style: "currency",
          });
        return l.format(a);
      } catch (e) {
        return r;
      }
    }
    l.formatCurrencyFromMinorUnits = e;
  },
  98,
);

__d(
  "WAWebBizBroadcastCurrencyUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      if (
        (r === void 0 && (r = "N/A"),
        e == null || t == null || n == null || n === 0)
      )
        return r;
      try {
        var o = e / n,
          a = new Intl.NumberFormat("en-US", {
            currency: t || "USD",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
            style: "currency",
          });
        return a.format(o);
      } catch (e) {
        return r;
      }
    }
    i.formatCurrencyFromMinorUnits = e;
  },
  66,
);

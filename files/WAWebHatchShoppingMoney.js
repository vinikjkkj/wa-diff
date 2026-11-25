__d(
  "WAWebHatchShoppingMoney",
  ["WALogger", "WAWebCurrencyUtils", "WAWebHatchJsonReaders", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      var n = c(e);
      if (n == null || e == null) return null;
      var r = t != null && t.currency === e.currency && t.amount > e.amount,
        o = r ? c(t) : null,
        a = o !== n ? o : null,
        i =
          a != null && t != null
            ? Math.round(((t.amount - e.amount) / t.amount) * 100)
            : 0;
      return {
        current: n,
        original: i > 0 ? a : null,
        discountPercent: i > 0 ? i : null,
      };
    }
    function u(e) {
      var t = o("WAWebHatchJsonReaders").readInteger(e, "amount"),
        n = o("WAWebHatchJsonReaders").readString(e, "currency");
      return t == null || n == null
        ? null
        : [
              Number.isSafeInteger(t),
              t > 0,
              o("WAWebCurrencyUtils").isSupportedCurrency(n),
            ].every(Boolean)
          ? { amount: t, currency: n }
          : null;
    }
    function c(t) {
      if (
        t == null ||
        !Number.isSafeInteger(t.amount) ||
        t.amount <= 0 ||
        !o("WAWebCurrencyUtils").isSupportedCurrency(t.currency)
      )
        return null;
      try {
        var n = new Intl.NumberFormat("en", {
          style: "currency",
          currency: t.currency,
        }).resolvedOptions().maximumFractionDigits;
        if (n == null) return null;
        var a = o("WAWebCurrencyUtils").formatAmount({
            amount: t.amount / Math.pow(10, n),
            currency: t.currency,
          }),
          i = o("WAWebCurrencyUtils").formatAmount({
            amount: 0,
            currency: t.currency,
          });
        return a === i ? null : a;
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-shopping: price formatting failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("hatch-shopping-price-formatting-failed"),
          null
        );
      }
    }
    ((l.getShoppingPrice = s), (l.decodeMoney = u), (l.formatMoney = c));
  },
  98,
);

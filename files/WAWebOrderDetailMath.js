__d(
  "WAWebOrderDetailMath",
  ["WAWebCurrencyUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "%",
      s = 1e3;
    function u(e) {
      if (e === "") return null;
      var t = o("WAWebCurrencyUtils").valueFromString("USD", e) / s;
      return Number.isNaN(t) ? 0 : t;
    }
    function c(t) {
      var n = t.total,
        r = t.type,
        o = t.value,
        a = u(o);
      return a == null ? null : r === e ? (a / 100) * n : a;
    }
    function d(e) {
      var t = e.discountText,
        n = e.discountType,
        r = e.orderSubtotal,
        o = e.shippingText,
        a = e.taxText,
        i = e.taxType,
        l = c({ total: r, type: n, value: t }),
        d = c({ total: r - (l != null ? l : 0), type: i, value: a }),
        m = u(o),
        p = r - (l != null ? l : 0) + (m != null ? m : 0) + (d != null ? d : 0);
      return {
        discount: l == null ? null : Math.trunc(l * s),
        shipping: m == null ? null : Math.trunc(m * s),
        tax: d == null ? null : Math.trunc(d * s),
        total: Math.trunc(p * s),
      };
    }
    ((l.PERCENTAGE_SYMBOL = e),
      (l.DEFAULT_OFFSET = s),
      (l.calculateFlatAmounts = d));
  },
  98,
);

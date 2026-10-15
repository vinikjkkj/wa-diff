__d(
  "WAWebOrderDetailMath",
  [
    "WAWebCurrencyUtils",
    "WAWebOrderDetailMathDefaultOffset",
    "WAWebOrderDetailMathPercentageSymbol",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e === "") return null;
      var t =
        o("WAWebCurrencyUtils").valueFromString("USD", e) /
        o("WAWebOrderDetailMathDefaultOffset").DEFAULT_OFFSET;
      return Number.isNaN(t) ? 0 : t;
    }
    function s(t) {
      var n = t.total,
        r = t.type,
        a = t.value,
        i = e(a);
      return i == null
        ? null
        : r === o("WAWebOrderDetailMathPercentageSymbol").PERCENTAGE_SYMBOL
          ? (i / 100) * n
          : i;
    }
    function u(t) {
      var n = t.discountText,
        r = t.discountType,
        a = t.orderSubtotal,
        i = t.shippingText,
        l = t.taxText,
        u = t.taxType,
        c = s({ total: a, type: r, value: n }),
        d = s({ total: a - (c != null ? c : 0), type: u, value: l }),
        m = e(i),
        p = a - (c != null ? c : 0) + (m != null ? m : 0) + (d != null ? d : 0);
      return {
        discount:
          c == null
            ? null
            : Math.trunc(
                c * o("WAWebOrderDetailMathDefaultOffset").DEFAULT_OFFSET,
              ),
        shipping:
          m == null
            ? null
            : Math.trunc(
                m * o("WAWebOrderDetailMathDefaultOffset").DEFAULT_OFFSET,
              ),
        tax:
          d == null
            ? null
            : Math.trunc(
                d * o("WAWebOrderDetailMathDefaultOffset").DEFAULT_OFFSET,
              ),
        total: Math.trunc(
          p * o("WAWebOrderDetailMathDefaultOffset").DEFAULT_OFFSET,
        ),
      };
    }
    l.calculateFlatAmounts = u;
  },
  98,
);

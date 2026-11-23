__d(
  "WAWebOrderDetailAmountTypeSelector",
  [
    "fbt",
    "WAWebCurrencyUtils",
    "WAWebOrderDetailMathPercentageSymbol",
    "WAWebOrderDetailSelector",
    "fbs",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = e.currency,
        n = e.onChange,
        a = e.value,
        i = o("WAWebCurrencyUtils").formatLocalSymbol(t),
        l = r("fbs")._(/*BTDS*/ ""),
        d = [
          {
            id: "percentage",
            label: s._(/*BTDS*/ "", [
              s._param(
                "percentage-symbol",
                o("WAWebOrderDetailMathPercentageSymbol").PERCENTAGE_SYMBOL,
              ),
            ]),
            value: o("WAWebOrderDetailMathPercentageSymbol").PERCENTAGE_SYMBOL,
          },
          {
            id: "flat-amount",
            label: s._(/*BTDS*/ "", [s._param("currency-symbol", i)]),
            value: i,
          },
        ],
        m = c(function () {
          return d.findIndex(function (e) {
            return e.value === a;
          });
        }),
        p = m[0];
      return u.jsx(r("WAWebOrderDetailSelector"), {
        "aria-label": l,
        options: d,
        defaultIndex: p,
        onChange: n,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);

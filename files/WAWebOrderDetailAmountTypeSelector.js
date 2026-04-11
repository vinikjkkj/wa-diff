__d(
  "WAWebOrderDetailAmountTypeSelector",
  [
    "fbt",
    "WAWebCurrencyUtils",
    "WAWebOrderDetailMath",
    "WAWebOrderDetailSelector",
    "fbs",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo;
    function d(e) {
      var t = e.currency,
        n = e.onChange,
        a = e.value,
        i = o("WAWebCurrencyUtils").formatLocalSymbol(t),
        l = r("fbs")._(/*BTDS*/ "Select amount type"),
        d = [
          {
            id: "percentage",
            label: s._(/*BTDS*/ "by percentage ({percentage-symbol})", [
              s._param(
                "percentage-symbol",
                o("WAWebOrderDetailMath").PERCENTAGE_SYMBOL,
              ),
            ]),
            value: o("WAWebOrderDetailMath").PERCENTAGE_SYMBOL,
          },
          {
            id: "flat-amount",
            label: s._(/*BTDS*/ "by flat amount ({currency-symbol})", [
              s._param("currency-symbol", i),
            ]),
            value: i,
          },
        ],
        m = c(function () {
          return d.findIndex(function (e) {
            return e.value === a;
          });
        }, []);
      return u.jsx(r("WAWebOrderDetailSelector"), {
        "aria-label": l,
        options: d,
        defaultIndex: m,
        onChange: n,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);

__d(
  "WAWebOrderDetailAmountTypeSelector",
  [
    "fbt",
    "WAWebCurrencyUtils",
    "WAWebOrderDetailMathPercentageSymbol",
    "WAWebOrderDetailSelector",
    "fbs",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.currency,
        a = e.onChange,
        i = e.value,
        l;
      t[0] !== n
        ? ((l = o("WAWebCurrencyUtils").formatLocalSymbol(n)),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var d = l,
        m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = r("fbs")._(/*BTDS*/ "Select amount type")), (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = {
            id: "percentage",
            label: s._(/*BTDS*/ "by percentage ({percentage-symbol})", [
              s._param(
                "percentage-symbol",
                o("WAWebOrderDetailMathPercentageSymbol").PERCENTAGE_SYMBOL,
              ),
            ]),
            value: o("WAWebOrderDetailMathPercentageSymbol").PERCENTAGE_SYMBOL,
          }),
          (t[3] = _))
        : (_ = t[3]);
      var f;
      t[4] !== d
        ? ((f = s._(/*BTDS*/ "by flat amount ({currency-symbol})", [
            s._param("currency-symbol", d),
          ])),
          (t[4] = d),
          (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] !== d || t[7] !== f
        ? ((g = [_, { id: "flat-amount", label: f, value: d }]),
          (t[6] = d),
          (t[7] = f),
          (t[8] = g))
        : (g = t[8]);
      var h = g,
        y;
      t[9] !== h || t[10] !== i
        ? ((y = function () {
            return h.findIndex(function (e) {
              return e.value === i;
            });
          }),
          (t[9] = h),
          (t[10] = i),
          (t[11] = y))
        : (y = t[11]);
      var C = c(y),
        b = C[0],
        v;
      return (
        t[12] !== b || t[13] !== a || t[14] !== h
          ? ((v = u.jsx(r("WAWebOrderDetailSelector"), {
              "aria-label": p,
              options: h,
              defaultIndex: b,
              onChange: a,
            })),
            (t[12] = b),
            (t[13] = a),
            (t[14] = h),
            (t[15] = v))
          : (v = t[15]),
        v
      );
    }
    l.default = d;
  },
  226,
);

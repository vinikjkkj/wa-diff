__d(
  "WAWebPaymentAmount.react",
  [
    "WAWebCurrencyUtils",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        amount: {
          display: "x78zum5",
          alignItems: "x1cy8zhl",
          lineHeight: "xggjnk3",
          $$css: !0,
        },
        amountCurrency: { fontSize: "x1aueamr", $$css: !0 },
        isQuotedAmountCurrency: {
          fontSize: "x1f6kntn",
          fontWeight: "xk50ysn",
          $$css: !0,
        },
        amountInteger: {
          marginTop: "xifccgj",
          fontSize: "x8cw2a4",
          fontWeight: "x1iikomf",
          $$css: !0,
        },
        isQuotedAmountInteger: {
          marginTop: "x1y332i5",
          fontSize: "x1aueamr",
          fontWeight: "x1fcty0u",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(23),
        a = t.amount1000,
        i = t.currency,
        l = t.isQuoted,
        s;
      n[0] !== a || n[1] !== i
        ? ((s = o("WAWebCurrencyUtils").formatAmount1000ToParts(i, a)),
          (n[0] = a),
          (n[1] = i),
          (n[2] = s))
        : (s = n[2]);
      var d = s,
        m;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = (e || (e = r("stylex"))).props(
            c.amount,
            o("WAWebUISpacing").uiMargin.top4,
          )),
          (n[3] = m))
        : (m = n[3]);
      var p;
      n[4] !== l
        ? ((p = (e || (e = r("stylex"))).props(
            c.amountCurrency,
            l === !0 && c.isQuotedAmountCurrency,
            l === !0
              ? o("WAWebUISpacing").uiMargin.end1
              : o("WAWebUISpacing").uiMargin.end3,
          )),
          (n[4] = l),
          (n[5] = p))
        : (p = n[5]);
      var _;
      n[6] !== d.symbol || n[7] !== p
        ? ((_ = u.jsx(
            "span",
            babelHelpers.extends({}, p, { children: d.symbol }),
          )),
          (n[6] = d.symbol),
          (n[7] = p),
          (n[8] = _))
        : (_ = n[8]);
      var f;
      n[9] !== l
        ? ((f = (e || (e = r("stylex"))).props(
            c.amountInteger,
            l === !0 && c.isQuotedAmountInteger,
            l === !0
              ? o("WAWebUISpacing").uiMargin.end0
              : o("WAWebUISpacing").uiMargin.end2,
          )),
          (n[9] = l),
          (n[10] = f))
        : (f = n[10]);
      var g;
      n[11] !== d.integer || n[12] !== f
        ? ((g = u.jsx(
            "span",
            babelHelpers.extends({}, f, { children: d.integer }),
          )),
          (n[11] = d.integer),
          (n[12] = f),
          (n[13] = g))
        : (g = n[13]);
      var h;
      n[14] !== l
        ? ((h = {
            0: { className: "x1aueamr" },
            1: { className: "x1f6kntn xk50ysn" },
          }[(l === !0) << 0]),
          (n[14] = l),
          (n[15] = h))
        : (h = n[15]);
      var y;
      n[16] !== d.decimal || n[17] !== h
        ? ((y = u.jsx(
            "span",
            babelHelpers.extends({}, h, { children: d.decimal }),
          )),
          (n[16] = d.decimal),
          (n[17] = h),
          (n[18] = y))
        : (y = n[18]);
      var C;
      return (
        n[19] !== _ || n[20] !== g || n[21] !== y
          ? ((C = u.jsxs(
              "div",
              babelHelpers.extends({}, m, { children: [_, g, y] }),
            )),
            (n[19] = _),
            (n[20] = g),
            (n[21] = y),
            (n[22] = C))
          : (C = n[22]),
        C
      );
    }
    l.default = d;
  },
  98,
);

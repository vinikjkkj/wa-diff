__d(
  "WAWebPaymentAmount.react",
  ["WAWebCurrencyUtils", "WAWebUISpacing", "react", "stylex"],
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
      var n = t.amount1000,
        a = t.currency,
        i = t.isQuoted,
        l = o("WAWebCurrencyUtils").formatAmount1000ToParts(a, n);
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            c.amount,
            o("WAWebUISpacing").uiMargin.top4,
          ),
          {
            children: [
              u.jsx(
                "span",
                babelHelpers.extends(
                  {},
                  e.props(
                    c.amountCurrency,
                    i === !0 && c.isQuotedAmountCurrency,
                    i === !0
                      ? o("WAWebUISpacing").uiMargin.end1
                      : o("WAWebUISpacing").uiMargin.end3,
                  ),
                  { children: l.symbol },
                ),
              ),
              u.jsx(
                "span",
                babelHelpers.extends(
                  {},
                  e.props(
                    c.amountInteger,
                    i === !0 && c.isQuotedAmountInteger,
                    i === !0
                      ? o("WAWebUISpacing").uiMargin.end0
                      : o("WAWebUISpacing").uiMargin.end2,
                  ),
                  { children: l.integer },
                ),
              ),
              u.jsx(
                "span",
                babelHelpers.extends(
                  {},
                  {
                    0: { className: "x1aueamr" },
                    1: { className: "x1f6kntn xk50ysn" },
                  }[(i === !0) << 0],
                  { children: l.decimal },
                ),
              ),
            ],
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);

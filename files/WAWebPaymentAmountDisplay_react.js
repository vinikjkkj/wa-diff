__d(
  "WAWebPaymentAmountDisplay.react",
  [
    "WAWebCurrencyUtils",
    "WAWebFlex.react",
    "WAWebPaymentBackground.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 36,
      c = 80,
      d = {
        amount: { fontWeight: "xk50ysn", $$css: !0 },
        amountStrike: {
          fontWeight: "xk50ysn",
          textDecoration: "xmqliwb",
          textDecorationThickness: "xudwaec",
          $$css: !0,
        },
        amountContainer: { marginTop: "x1xmf6yo", $$css: !0 },
        paymentBackgroundThumb: { height: "x5yr21d", $$css: !0 },
        paymentBackgroundWrapper: { alignSelf: "xkh2ocl", $$css: !0 },
      };
    function m(e) {
      var t = e.amount1000,
        n = e.currency,
        a = e.fontSize,
        i = a === void 0 ? u : a,
        l = e.height,
        m = l === void 0 ? c : l,
        p = e.isStrikethrough,
        _ = p === void 0 ? !1 : p,
        f = e.width,
        g = o("WAWebCurrencyUtils").formatAmount1000ToParts(n, t);
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        grow: 1,
        shrink: 0,
        xstyle: d.paymentBackgroundWrapper,
        style: { height: m, width: f },
        children: s.jsx(r("WAWebPaymentBackground.react"), {
          thumbXstyle: d.paymentBackgroundThumb,
          children: s.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: d.amountContainer,
            children: s.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: _ ? d.amountStrike : d.amount,
              style: { fontSize: i },
              children: g.symbol + " " + g.integer + g.decimal,
            }),
          }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);

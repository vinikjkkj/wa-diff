__d(
  "WAWebPaymentAmountDisplay.react",
  [
    "WAWebCurrencyUtils",
    "WAWebFlex.react",
    "WAWebPaymentBackground.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(15),
        n = e.amount1000,
        a = e.currency,
        i = e.fontSize,
        l = e.height,
        m = e.isStrikethrough,
        p = e.width,
        _ = i === void 0 ? u : i,
        f = l === void 0 ? c : l,
        g = m === void 0 ? !1 : m,
        h;
      t[0] !== n || t[1] !== a
        ? ((h = o("WAWebCurrencyUtils").formatAmount1000ToParts(a, n)),
          (t[0] = n),
          (t[1] = a),
          (t[2] = h))
        : (h = t[2]);
      var y = h,
        C;
      t[3] !== f || t[4] !== p
        ? ((C = { height: f, width: p }), (t[3] = f), (t[4] = p), (t[5] = C))
        : (C = t[5]);
      var b = g ? d.amountStrike : d.amount,
        v;
      t[6] !== _ ? ((v = { fontSize: _ }), (t[6] = _), (t[7] = v)) : (v = t[7]);
      var S = y.symbol + " " + y.integer + y.decimal,
        R;
      t[8] !== b || t[9] !== v || t[10] !== S
        ? ((R = s.jsx(r("WAWebPaymentBackground.react"), {
            thumbXstyle: d.paymentBackgroundThumb,
            children: s.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: d.amountContainer,
              children: s.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: b,
                style: v,
                children: S,
              }),
            }),
          })),
          (t[8] = b),
          (t[9] = v),
          (t[10] = S),
          (t[11] = R))
        : (R = t[11]);
      var L;
      return (
        t[12] !== C || t[13] !== R
          ? ((L = s.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              grow: 1,
              shrink: 0,
              xstyle: d.paymentBackgroundWrapper,
              style: C,
              children: R,
            })),
            (t[12] = C),
            (t[13] = R),
            (t[14] = L))
          : (L = t[14]),
        L
      );
    }
    l.default = m;
  },
  98,
);

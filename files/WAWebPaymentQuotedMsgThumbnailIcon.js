__d(
  "WAWebPaymentQuotedMsgThumbnailIcon",
  [
    "WAWebPaymentAmount.react",
    "WAWebPaymentBackground.react",
    "isNonZeroNumber",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.msg,
        a = e.theme;
      if (
        !o("isNonZeroNumber").isNonZeroNumber(n.paymentAmount1000) ||
        !n.paymentCurrency
      )
        return null;
      var i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { className: "xk1v102" }), (t[0] = i))
        : (i = t[0]);
      var l = a === "composeBox",
        u;
      t[1] !== n.paymentAmount1000 || t[2] !== n.paymentCurrency
        ? ((u = s.jsx(r("WAWebPaymentAmount.react"), {
            currency: n.paymentCurrency,
            amount1000: n.paymentAmount1000,
            isQuoted: !0,
          })),
          (t[1] = n.paymentAmount1000),
          (t[2] = n.paymentCurrency),
          (t[3] = u))
        : (u = t[3]);
      var c;
      return (
        t[4] !== l || t[5] !== u
          ? ((c = s.jsx(
              "div",
              babelHelpers.extends({}, i, {
                children: s.jsx(r("WAWebPaymentBackground.react"), {
                  isQuoted: !0,
                  isQuotedInComposeBox: l,
                  children: u,
                }),
              }),
            )),
            (t[4] = l),
            (t[5] = u),
            (t[6] = c))
          : (c = t[6]),
        c
      );
    }
    l.default = u;
  },
  98,
);

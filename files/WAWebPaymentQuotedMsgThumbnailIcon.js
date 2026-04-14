__d(
  "WAWebPaymentQuotedMsgThumbnailIcon",
  [
    "WAWebPaymentAmount.react",
    "WAWebPaymentBackground.react",
    "isNonZeroNumber",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg,
        n = e.theme;
      return !o("isNonZeroNumber").isNonZeroNumber(t.paymentAmount1000) ||
        !t.paymentCurrency
        ? null
        : s.jsx("div", {
            className: "xk1v102",
            children: s.jsx(r("WAWebPaymentBackground.react"), {
              isQuoted: !0,
              isQuotedInComposeBox: n === "composeBox",
              children: s.jsx(r("WAWebPaymentAmount.react"), {
                currency: t.paymentCurrency,
                amount1000: t.paymentAmount1000,
                isQuoted: !0,
              }),
            }),
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);

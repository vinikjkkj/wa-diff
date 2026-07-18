__d(
  "WAWebUprPaymentMethodRenderData",
  [
    "WAWebUprPaymentMethodLabels",
    "WDSIconIcAccountBalance.react",
    "WDSIconIcAccountBalanceWallet.react",
    "WDSIconIcQrCode.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n = o("WAWebUprPaymentMethodLabels").getUprMethodLabels(e, t);
      return n == null ? null : babelHelpers.extends({}, n, { icon: c(e) });
    }
    function c(e) {
      return r(
        e === "digital_wallet" || e === "mobile_money"
          ? "WDSIconIcAccountBalanceWallet.react"
          : e === "qr_code"
            ? "WDSIconIcQrCode.react"
            : "WDSIconIcAccountBalance.react",
      );
    }
    l.getUprMethodRenderData = u;
  },
  98,
);

__d(
  "WAWebUprPaymentMethodRenderData",
  [
    "WAWebUprPaymentMethodLabels",
    "WDSIconIcAccountBalance.react",
    "WDSIconIcAccountBalanceWallet.react",
    "WDSIconIcPhoneAndroid.react",
    "WDSIconIcQrCode.react",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebUprPaymentMethodLabels").getUprMethodLabels(e, t);
      return n == null ? null : babelHelpers.extends({}, n, { icon: s(e) });
    }
    function s(e) {
      return r(
        e === "digital_wallet"
          ? "WDSIconIcAccountBalanceWallet.react"
          : e === "mobile_money"
            ? "WDSIconIcPhoneAndroid.react"
            : e === "qr_code"
              ? "WDSIconIcQrCode.react"
              : "WDSIconIcAccountBalance.react",
      );
    }
    l.getUprMethodRenderData = e;
  },
  98,
);

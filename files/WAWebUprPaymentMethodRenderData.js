__d(
  "WAWebUprPaymentMethodRenderData",
  [
    "WAWebUprConstants",
    "WAWebUprPaymentMethodLabels",
    "WDSIconIcAccountBalance.react",
    "WDSIconIcAccountBalanceWallet.react",
    "WDSIconIcQrCode.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c =
        ((e = {}),
        (e[
          o("WAWebUprPaymentMethodLabels").methodKey(
            o("WAWebUprConstants").UprPaymentAccountType.BANK_ACCOUNT,
            o("WAWebUprConstants").UprIdentifierType.CLABE,
          )
        ] = r("WDSIconIcAccountBalance.react")),
        (e[
          o("WAWebUprPaymentMethodLabels").methodKey(
            o("WAWebUprConstants").UprPaymentAccountType.QR_CODE,
            o("WAWebUprConstants").UprIdentifierType.QRIS,
          )
        ] = r("WDSIconIcQrCode.react")),
        (e[
          o("WAWebUprPaymentMethodLabels").methodKey(
            o("WAWebUprConstants").UprPaymentAccountType.DIGITAL_WALLET,
            o("WAWebUprConstants").UprIdentifierType.PHONE_NUMBER,
          )
        ] = r("WDSIconIcAccountBalanceWallet.react")),
        e);
    function d(e, t) {
      var n = o("WAWebUprPaymentMethodLabels").getUprMethodLabels(e, t),
        r = c[o("WAWebUprPaymentMethodLabels").methodKey(e, t)];
      return n == null || r == null
        ? null
        : babelHelpers.extends({}, n, { icon: r });
    }
    l.getUprMethodRenderData = d;
  },
  98,
);

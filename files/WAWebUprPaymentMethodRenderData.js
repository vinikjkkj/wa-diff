__d(
  "WAWebUprPaymentMethodRenderData",
  [
    "WAWebUprConstants",
    "WAWebUprPaymentMethodLabels",
    "WDSIconIcAccountBalance.react",
    "WDSIconIcAccountBalanceWallet.react",
    "WDSIconIcCreditCard.react",
    "WDSIconIcPhoneAndroid.react",
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
    function m(e) {
      return e == null
        ? r("WDSIconIcCreditCard.react")
        : e === o("WAWebUprConstants").UprPaymentAccountType.BANK_ACCOUNT
          ? r("WDSIconIcAccountBalance.react")
          : e === o("WAWebUprConstants").UprPaymentAccountType.DIGITAL_WALLET
            ? r("WDSIconIcAccountBalanceWallet.react")
            : e === o("WAWebUprConstants").UprPaymentAccountType.MOBILE_MONEY
              ? r("WDSIconIcPhoneAndroid.react")
              : e === o("WAWebUprConstants").UprPaymentAccountType.QR_CODE
                ? r("WDSIconIcQrCode.react")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    ((l.getUprMethodRenderData = d), (l.getPayWithIcon = m));
  },
  98,
);

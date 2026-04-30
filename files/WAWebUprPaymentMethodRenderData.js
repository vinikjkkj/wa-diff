__d(
  "WAWebUprPaymentMethodRenderData",
  [
    "fbt",
    "WAWebUprConstants",
    "WDSIconIcAccountBalance.react",
    "WDSIconIcAccountBalanceWallet.react",
    "WDSIconIcCreditCard.react",
    "WDSIconIcPhoneAndroid.react",
    "WDSIconIcQrCode.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t) {
      return e + "/" + t;
    }
    var m =
      ((e = {}),
      (e[
        d(
          o("WAWebUprConstants").UprPaymentAccountType.BANK_ACCOUNT,
          o("WAWebUprConstants").UprIdentifierType.CLABE,
        )
      ] = {
        label: function () {
          return s._(/*BTDS*/ "CLABE");
        },
        copyLabel: function () {
          return s._(/*BTDS*/ "Copy CLABE");
        },
        copySuccessToast: function () {
          return s._(/*BTDS*/ "CLABE copied");
        },
        icon: r("WDSIconIcAccountBalance.react"),
      }),
      (e[
        d(
          o("WAWebUprConstants").UprPaymentAccountType.QR_CODE,
          o("WAWebUprConstants").UprIdentifierType.QRIS,
        )
      ] = {
        label: function () {
          return s._(/*BTDS*/ "QRIS");
        },
        copyLabel: function () {
          return s._(/*BTDS*/ "Copy QR code");
        },
        copySuccessToast: function () {
          return s._(/*BTDS*/ "QR code copied");
        },
        icon: r("WDSIconIcQrCode.react"),
      }),
      (e[
        d(
          o("WAWebUprConstants").UprPaymentAccountType.DIGITAL_WALLET,
          o("WAWebUprConstants").UprIdentifierType.PHONE_NUMBER,
        )
      ] = {
        label: function () {
          return s._(/*BTDS*/ "Wallet");
        },
        copyLabel: function () {
          return s._(/*BTDS*/ "Copy wallet number");
        },
        copySuccessToast: function () {
          return s._(/*BTDS*/ "Wallet number copied");
        },
        icon: r("WDSIconIcAccountBalanceWallet.react"),
      }),
      e);
    function p(e, t) {
      var n;
      return (n = m[d(e, t)]) != null ? n : null;
    }
    function _(e) {
      switch (e.toUpperCase()) {
        case "CLABE":
          return {
            accountType:
              o("WAWebUprConstants").UprPaymentAccountType.BANK_ACCOUNT,
            identifierType: o("WAWebUprConstants").UprIdentifierType.CLABE,
          };
        case "ID_PAYMENT_ACCOUNT":
          return {
            accountType:
              o("WAWebUprConstants").UprPaymentAccountType.BANK_ACCOUNT,
            identifierType:
              o("WAWebUprConstants").UprIdentifierType.ACCOUNT_NUMBER,
          };
        default:
          return null;
      }
    }
    function f(e) {
      var t = _(e);
      return t == null ? null : p(t.accountType, t.identifierType);
    }
    function g(e) {
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
    ((l.getUprMethodRenderData = p),
      (l.getUprMethodRenderDataForPaymentKey = f),
      (l.getPayWithIcon = g));
  },
  226,
);

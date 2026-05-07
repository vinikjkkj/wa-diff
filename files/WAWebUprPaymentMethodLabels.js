__d(
  "WAWebUprPaymentMethodLabels",
  ["fbt", "WAWebUprConstants"],
  function (t, n, r, o, a, i, l, s) {
    var e, u;
    function c(e, t) {
      return e + "/" + t;
    }
    var d =
      ((e = {}),
      (e[
        c(
          (u = o("WAWebUprConstants")).UprPaymentAccountType.BANK_ACCOUNT,
          u.UprIdentifierType.CLABE,
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
      }),
      (e[c(u.UprPaymentAccountType.QR_CODE, u.UprIdentifierType.QRIS)] = {
        label: function () {
          return s._(/*BTDS*/ "QRIS");
        },
        copyLabel: function () {
          return s._(/*BTDS*/ "Copy QR code");
        },
        copySuccessToast: function () {
          return s._(/*BTDS*/ "QR code copied");
        },
      }),
      (e[
        c(
          u.UprPaymentAccountType.DIGITAL_WALLET,
          u.UprIdentifierType.PHONE_NUMBER,
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
      }),
      e);
    function m(e, t) {
      var n;
      return (n = d[c(e, t)]) != null ? n : null;
    }
    ((l.methodKey = c), (l.getUprMethodLabels = m));
  },
  226,
);

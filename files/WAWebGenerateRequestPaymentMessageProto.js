__d(
  "WAWebGenerateRequestPaymentMessageProto",
  ["WAWebPaymentsProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json,
        n = o("WAWebPaymentsProtoUtils").generatePaymentsNoteMessage(t);
      return {
        requestPaymentMessage: {
          amount1000: t.amount1000,
          expiryTimestamp: t._paymentExpiryTimestamp,
          requestFrom: t._paymentRequestFrom,
          currencyCodeIso4217: t._currencyCodeIso4217,
          noteMessage: n,
        },
      };
    }
    l.default = e;
  },
  98,
);

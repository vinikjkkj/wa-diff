__d(
  "WAWebPaymentsOdsBridgeApi",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    var e = {
      logPaymentsDehydratedOdsCounter: function (t) {
        var e = t.type;
        e: {
          if (e === "pay") {
            r("WAWebODS").incr("web.payments.dehydrated_pay");
            break e;
          }
          if (e === "transaction") {
            r("WAWebODS").incr("web.payments.dehydrated_transaction");
            break e;
          }
          if (e === "transaction_notification") {
            r("WAWebODS").incr(
              "web.payments.dehydrated_transaction_notification",
            );
            break e;
          }
          {
            r("WAWebODS").incr("web.payments.dehydrated_unknown");
            break e;
          }
        }
      },
    };
    l.PaymentsOdsBridgeApi = e;
  },
  98,
);

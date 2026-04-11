__d(
  "WAWebParseMsgPaymentInfo",
  ["WALongInt", "WANullthrows", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        paymentStatus: e.status,
        paymentTxnStatus: e.txnStatus,
        paymentCurrency: e.currency || "",
        paymentAmount1000: r("WANullthrows")(
          o("WALongInt").maybeNumberOrThrowIfTooLarge(e.amount1000),
        ),
        paymentMessageReceiverJid: o("WAWebWidFactory").createWid(
          r("WANullthrows")(e.receiverJid),
        ),
        paymentExpiryTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(
          e.expiryTimestamp,
        ),
        paymentTransactionTimestamp: r("WANullthrows")(
          o("WALongInt").maybeNumberOrThrowIfTooLarge(e.transactionTimestamp),
        ),
      };
    }
    l.parseMsgPaymentInfo = e;
  },
  98,
);

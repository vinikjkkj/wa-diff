__d(
  "WAWebNewsletterStatusViewReceiptUtils",
  [
    "WASmaxReceiptPublishViewRPC",
    "WAStanzaUtils",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (yield o("WASmaxReceiptPublishViewRPC").sendPublishViewRPC({
            receiptTo: o(
              "WAWebNewsletterValidationUtils",
            ).toNewsletterJidOrThrow(e.toString()),
            receiptId: o("WAStanzaUtils").toStanzaId(t.id),
            itemArgs: [{ itemServerId: n }],
            hasStatusClass: !0,
          }),
            yield o("WAWebNewsletterDBUtils").updateMsgViewReceipt([
              t.toString(),
            ]));
        })),
        s.apply(this, arguments)
      );
    }
    l.sendNewsletterStatusViewReceipt = e;
  },
  98,
);

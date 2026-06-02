__d(
  "WAWebNewsletterStatusViewReceiptUtils",
  [
    "WASmaxReceiptPublishViewRPC",
    "WAStanzaUtils",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterValidationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      (await o("WASmaxReceiptPublishViewRPC").sendPublishViewRPC({
        receiptTo: o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
          e.toString(),
        ),
        receiptId: o("WAStanzaUtils").toStanzaId(t.id),
        itemArgs: [{ itemServerId: n }],
        hasStatusClass: !0,
      }),
        await o("WAWebNewsletterDBUtils").updateMsgViewReceipt([t.toString()]));
    }
    l.sendNewsletterStatusViewReceipt = e;
  },
  98,
);

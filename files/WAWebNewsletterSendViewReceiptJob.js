__d(
  "WAWebNewsletterSendViewReceiptJob",
  [
    "WABatcher",
    "WAJobOrchestratorTypes",
    "WASmaxReceiptPublishViewRPC",
    "WAStanzaUtils",
    "WAWap",
    "WAWebNewsletterDBUtils",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map(),
      s = 3e3;
    async function u(t, n) {
      var r,
        a =
          (r = e.get(t)) != null
            ? r
            : o("WABatcher").createSimpleBatcher(
                { delayMs: s },
                async function (e) {
                  return (await c(t, e), e);
                },
              );
      (e.set(t, a), await a.accept(n));
    }
    async function c(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "sendNewsletterViewReceipt",
          async function () {
            (await o("WASmaxReceiptPublishViewRPC").sendPublishViewRPC({
              receiptTo: e,
              receiptId: o("WAStanzaUtils").toStanzaId(o("WAWap").generateId()),
              itemArgs: t.map(function (e) {
                var t = e.itemServerId;
                return { itemServerId: t };
              }),
            }),
              await o("WAWebNewsletterDBUtils").updateMsgViewReceipt(
                t.map(function (e) {
                  return e.itemId;
                }),
              ));
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW },
        )
        .waitUntilCompleted();
    }
    l.sendViewReceiptJob = u;
  },
  98,
);

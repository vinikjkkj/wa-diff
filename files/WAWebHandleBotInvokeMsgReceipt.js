__d(
  "WAWebHandleBotInvokeMsgReceipt",
  [
    "WAWebAck",
    "WAWebMessageReceiptBatcher",
    "WAWebMsgKey",
    "WAWebOfflineHandler",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ack,
            n = e.ackString,
            a = e.externalIds,
            i = e.from,
            l = e.offline,
            s = e.recipient,
            u = e.ts,
            c =
              l != null &&
              !o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete();
          if (n !== o("WAWebAck").ACK_STRING.READ || s == null || !i.isBot())
            throw r("err")(
              "handleBotOneToOneInvokeSimpleReadReceipt: unexpected receipt",
            );
          var d = a.map(function (e) {
              return new (r("WAWebMsgKey"))({ id: e, remote: s, fromMe: !0 });
            }),
            m = d.map(function (e) {
              return e.toString();
            }),
            p = o(
              "WAWebMessageReceiptBatcher",
            ).receiptBatcher.acceptOtherReceipt({
              ack: t,
              ts: u,
              receiverId: i,
              msgKeys: m,
              isBotInvoke: !0,
            });
          return (
            c ||
              (yield o("WAWebOrchestratorNonPersistedJob")
                .createNonPersistedJob(
                  "receiptBatcherRunActiveBatches",
                  function () {
                    return o(
                      "WAWebMessageReceiptBatcher",
                    ).receiptBatcher.runActiveBatches();
                  },
                )
                .waitUntilCompleted()),
            p
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.handleBotOneToOneInvokeSimpleReadReceipt = e;
  },
  98,
);

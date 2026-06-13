__d(
  "WAWebHandleGroupChatReceipt",
  [
    "WALogger",
    "WAWebAck",
    "WAWebHandleMsgReceiptCommon",
    "WAWebHandleMsgReceiptUtils",
    "WAWebMessageReceiptBatcher",
    "WAWebMsgKey",
    "WAWebOfflineHandler",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.ack,
            a = t.ackString,
            i = t.externalIds,
            l = t.from,
            u = t.isLidBot,
            c = t.offline,
            d = t.participant,
            m = t.recipient,
            p = t.ts;
          if (!d) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "error: got group ack without participant.",
                  ])),
              )
              .sendLogs("handleGroupSimpleReceipt: failed");
            return;
          }
          var _ = o("WAWebWidFactory").asUserWidOrThrow(d),
            f = a === o("WAWebAck").ACK_STRING.SENDER,
            g = !f && o("WAWebUserPrefsMeUser").isMeAccount(_),
            h;
          if (g) {
            if (!m) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[handleGroupSimpleReceipt] skip self peer: no recipient",
                    ])),
                )
                .sendLogs(
                  "handleGroupSimpleReceipt: skip self receipt without recipient",
                  { sampling: 0.01 },
                );
              return;
            }
            h = m;
          } else
            h =
              _.isLid() || u
                ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
                : o("WAWebUserPrefsMeUser").getMeUser();
          var y = i.map(function (e) {
            return new (r("WAWebMsgKey"))({
              id: e,
              remote: l,
              fromMe: !g,
              participant: h,
            });
          });
          g &&
            n === o("WAWebAck").ACK.PLAYED &&
            o("WAWebHandleMsgReceiptCommon").handleViewOnceOpenedIfNecessary(y);
          var C = y.map(function (e) {
            return e.toString();
          });
          c != null &&
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
          var b =
              c != null &&
              !o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete(),
            v;
          return (
            g
              ? m != null &&
                o("WAWebHandleMsgReceiptUtils").isReadOrPlayedReceipt(a) &&
                i.length > 0 &&
                (v = o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.acceptPeerReceipt({
                  isOffline: b,
                  ack: n,
                  ts: p,
                  msgKeys: C,
                  remote: l,
                }))
              : (v = o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.acceptOtherReceipt({
                  ack: n,
                  ts: p,
                  receiverId: d,
                  msgKeys: C,
                })),
            b ||
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
            v
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.handleGroupSimpleReceipt = u;
  },
  98,
);

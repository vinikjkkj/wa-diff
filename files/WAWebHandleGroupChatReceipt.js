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
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.ack,
            a = t.ackString,
            i = t.externalIds,
            l = t.from,
            c = t.isLidBot,
            d = t.offline,
            m = t.participant,
            p = t.recipient,
            _ = t.ts;
          if (!m)
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "error: got group ack without participant.",
                    ])),
                )
                .sendLogs("handleGroupSimpleReceipt: failed"),
              r("err")(
                "handleGroupSimpleReceipt: got group ack without participant.",
              )
            );
          var f = o("WAWebWidFactory").asUserWidOrThrow(m),
            g = a === o("WAWebAck").ACK_STRING.SENDER,
            h = !g && o("WAWebUserPrefsMeUser").isMeAccount(f),
            y;
          if (h) {
            if (!p)
              throw (
                r("gkx")("26258")
                  ? o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "error: invalid sender/peer receipt without recipient",
                        ])),
                    )
                  : o("WALogger")
                      .WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "error: invalid sender/peer receipt without recipient",
                          ])),
                      )
                      .sendLogs("handleGroupSimpleReceipt: failed"),
                r("err")(
                  "handleGroupSimpleReceipt: invalid sender/peer receipt without recipient",
                )
              );
            y = p;
          } else
            y =
              f.isLid() || c
                ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
                : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
          var C = i.map(function (e) {
            return new (r("WAWebMsgKey"))({
              id: e,
              remote: l,
              fromMe: !h,
              participant: y,
            });
          });
          h &&
            n === o("WAWebAck").ACK.PLAYED &&
            o("WAWebHandleMsgReceiptCommon").handleViewOnceOpenedIfNecessary(C);
          var b = C.map(function (e) {
            return e.toString();
          });
          d != null &&
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
          var v =
              d != null &&
              !o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete(),
            S;
          return (
            h
              ? p != null &&
                o("WAWebHandleMsgReceiptUtils").isReadOrPlayedReceipt(a) &&
                i.length > 0 &&
                (S = o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.acceptPeerReceipt({
                  isOffline: v,
                  ack: n,
                  ts: _,
                  msgKeys: b,
                  remote: l,
                }))
              : (S = o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.acceptOtherReceipt({
                  ack: n,
                  ts: _,
                  receiverId: m,
                  msgKeys: b,
                })),
            v ||
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
            S
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.handleGroupSimpleReceipt = c;
  },
  98,
);

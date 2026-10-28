__d(
  "WAWebIncomingMsgReceiptPlan",
  [
    "$InternalEnum",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgSendReceipt",
    "WAWebHandleMsgTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "AggregateDuplicateCheck",
      "SendNow",
      "AggregateDeliveryReceipt",
    ]);
    function s(t) {
      var n = t.canNack,
        r = t.decryptResult,
        a = t.msgInfo,
        i = t.msgMeta,
        l = t.sendsGroupAgentDeliveryReceipt;
      return r.result ===
        o("WAWebHandleMsgTypes").E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR && n
        ? e.AggregateDuplicateCheck
        : a.offline == null ||
            a.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer ||
            o("WAWebHandleMsgSendReceipt").isCoexV2SenderReceiptMessage(a) ||
            o("WAWebHandleMsgSendReceipt").isCoexV2PeerDeliveryReceiptMessage(
              a,
            ) ||
            i.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify ||
            l ||
            u(r)
          ? e.SendNow
          : e.AggregateDeliveryReceipt;
    }
    function u(e) {
      return (
        e.result !== o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS &&
        e.result !==
          o("WAWebHandleMsgTypes").E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR
      );
    }
    ((l.IncomingMsgReceiptPlan = e), (l.getIncomingMsgReceiptPlan = s));
  },
  98,
);

__d(
  "MAWHandleIndividualRetryReceipt",
  ["Promise", "WAProtocolQueue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (r) {
        var t = r.chat,
          a = r.makeAck,
          i = r.offline,
          l = r.retryReceipt,
          s = l.keys,
          u = l.receiptSender,
          c = l.recipient,
          d = l.regId,
          m = l.retryCount,
          p = l.stanzaId,
          _ = l.timestamp,
          f = {
            category: null,
            externalId: p,
            from: { author: u, chat: t, deviceJid: u, type: "device" },
            keys: s,
            offline: i,
            recipient: c,
            regId: d,
            retryCount: m,
            timestamp: _,
          };
        return (
          o("WAProtocolQueue").pqFlushable.enqueue({
            jid: t,
            priority: o("WAProtocolQueue").WAProtocolQueuePriorityBackground,
            retry: f,
            stanzaId: p,
            type: "retryReceipt",
          }),
          (e || (e = n("Promise"))).resolve(a())
        );
      };
    l.handleIndividualRetryReceipt = s;
  },
  98,
);

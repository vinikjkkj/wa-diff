__d(
  "MAWHandlePeerAppdataRetryReceipt",
  ["Promise", "WAJids", "WAProtocolQueue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (r) {
        var t = r.category,
          a = r.makeAck,
          i = r.retryReceipt,
          l = i.keys,
          s = i.receiptSender,
          u = i.regId,
          c = i.retryCount,
          d = i.stanzaId,
          m = i.timestamp,
          p = {
            category: t,
            externalId: d,
            from: {
              author: s,
              chat: o("WAJids").extractUserJid(s),
              deviceJid: s,
              type: "device",
            },
            keys: l,
            offline: null,
            recipient: null,
            regId: u,
            retryCount: c,
            timestamp: m,
          };
        return (
          o("WAProtocolQueue").pqFlushable.enqueue({
            jid: o("WAJids").extractUserJid(s),
            priority: o("WAProtocolQueue").WAProtocolQueuePriorityLow,
            retry: p,
            stanzaId: d,
            type: "retryReceipt",
          }),
          (e || (e = n("Promise"))).resolve(a())
        );
      };
    l.handlePeerAppdataRetryReceipt = s;
  },
  98,
);

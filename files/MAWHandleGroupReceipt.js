__d(
  "MAWHandleGroupReceipt",
  ["MWFBLogger", "Promise", "WAProtocolQueue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("MWFBLogger").MWLogger().tags(["backend", "handleGroupReceipt"]),
      c = function (r) {
        switch (
          (u.DEBUG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "start handling...",
              ])),
          ),
          r.aggregatedType)
        ) {
          case "none": {
            var t,
              a = {
                chat: r.chat,
                externalIds: [r.stanzaId],
                from: {
                  author: r.receiptSender,
                  chat: r.chat,
                  groupJid: r.chat,
                  type: "group",
                },
                messageAuthor: r.author,
                offline: (t = r.offline) != null ? t : null,
                receiptType: "group",
                stanzaId: r.stanzaId,
                ts: r.serverTs,
                type: r.receiptType,
              };
            o("WAProtocolQueue").pqFlushable.enqueue({
              jid: r.chat,
              priority: o("WAProtocolQueue").WAProtocolQueuePriorityLow,
              receipt: a,
              stanzaId: r.stanzaId,
              type: "receipt",
            });
            break;
          }
          case "sender": {
            var i = r.stanzaIds[0],
              l = {
                chat: r.chat,
                externalIds: r.stanzaIds,
                from: {
                  author: r.receiptSender,
                  chat: r.chat,
                  groupJid: r.chat,
                  type: "group",
                },
                messageAuthor: r.author,
                offline: r.offline,
                receiptType: "group",
                stanzaId: i,
                ts: r.serverTs,
                type: r.receiptType,
              };
            o("WAProtocolQueue").pqFlushable.enqueue({
              jid: r.chat,
              priority: o("WAProtocolQueue").WAProtocolQueuePriorityLow,
              receipt: l,
              stanzaId: i,
              type: "receipt",
            });
            break;
          }
          default: {
            r.aggregatedType;
            var c = {
              chat: r.chat,
              externalId: r.stanzaId,
              messageAuthor: r.author,
              offline: r.offline,
              receiptType: "group-server-agg",
              receivers: r.receiptSenders,
              stanzaId: r.stanzaId,
              type: r.receiptType,
            };
            o("WAProtocolQueue").pqFlushable.enqueue({
              jid: r.chat,
              priority: o("WAProtocolQueue").WAProtocolQueuePriorityLow,
              receipt: c,
              stanzaId: r.stanzaId,
              type: "receipt",
            });
          }
        }
        return (s || (s = n("Promise"))).resolve(r.makeAck());
      };
    l.handleGroupReceipt = c;
  },
  98,
);

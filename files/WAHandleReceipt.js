__d(
  "WAHandleReceipt",
  ["Promise", "WAProtocolQueue", "WATagsLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("WATagsLogger").TAGS(["backend", "handleIndividualReceipt"]),
      d = function (r) {
        return (
          c.DEV(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "start handling...",
              ])),
          ),
          (u || (u = n("Promise")))
            .resolve()
            .then(function () {
              if (r.receiptType !== "read")
                switch (r.aggregatedType) {
                  case "none": {
                    var e = {
                      chat: r.chat,
                      externalIds: [r.stanzaId],
                      from: {
                        author: r.receiptSender,
                        chat: r.chat,
                        deviceJid: r.receiptSender,
                        type: "device",
                      },
                      messageAuthor: r.author,
                      offline: r.offline,
                      receiptType: "user",
                      stanzaId: r.stanzaId,
                      ts: r.serverTs,
                      type: r.receiptType,
                    };
                    o("WAProtocolQueue").pqFlushable.enqueue({
                      jid: r.chat,
                      receipt: e,
                      stanzaId: r.stanzaId,
                      type: "receipt",
                      priority: o("WAProtocolQueue").WAProtocolQueuePriorityLow,
                    });
                    break;
                  }
                  default: {
                    r.aggregatedType;
                    var t = r.stanzaIds[0],
                      n = {
                        chat: r.chat,
                        externalIds: r.stanzaIds,
                        from: {
                          author: r.receiptSender,
                          chat: r.chat,
                          deviceJid: r.receiptSender,
                          type: "device",
                        },
                        messageAuthor: r.author,
                        offline: r.offline,
                        receiptType: "user",
                        stanzaId: t,
                        ts: r.serverTs,
                        type: r.receiptType,
                      };
                    o("WAProtocolQueue").pqFlushable.enqueue({
                      jid: r.chat,
                      receipt: n,
                      stanzaId: t,
                      type: "receipt",
                      priority: o("WAProtocolQueue").WAProtocolQueuePriorityLow,
                    });
                  }
                }
            })
            .catch(function (e) {
              c.ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleIndividualReceipts error: ",
                    "",
                  ])),
                String(e),
              );
            })
            .then(function () {
              return r.makeAck();
            })
        );
      };
    l.handleIndividualReceipt = d;
  },
  98,
);

__d(
  "MAWHandlePeerAppdataReceipt",
  ["MWFBLogger", "Promise", "WAJids", "WAProtocolQueue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("MWFBLogger")
        .MWLogger()
        .tags(["backend", "handlePeerAppdataReceipt"]),
      c = function (r) {
        var t = r.makeAck,
          a = r.receiptSender,
          i = r.receiptType,
          l = r.stanzaId;
        return (
          o("WAProtocolQueue").pqFlushable.enqueue(
            {
              jid: o("WAJids").extractUserJid(a),
              priority: o("WAProtocolQueue").WAProtocolQueuePriorityLow,
              receipt: {
                externalIds: [l],
                from: a,
                offline: null,
                receiptType: "appdata",
                stanzaId: l,
                type: i,
              },
              stanzaId: l,
              type: "receipt",
            },
            void 0,
            function (t) {
              u.catching(t).MUSTFIX(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to persist incoming stanza",
                  ])),
              );
            },
          ),
          (s || (s = n("Promise"))).resolve(t())
        );
      };
    l.handlePeerAppdataReceipt = c;
  },
  98,
);

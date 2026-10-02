__d(
  "WACreateHandlePeerMessageBranch",
  [
    "Promise",
    "WAHandlePeerMessageProtocol",
    "WAResultOrError",
    "WASmaxMessageDeliverPeerRPC",
    "WATimeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = t.peerMessage;
      return function (a, i) {
        var t = o("WASmaxMessageDeliverPeerRPC").receivePeerRPC(a),
          l = t.makePeerResponseSuccess,
          s = t.parsedRequest,
          u = s.fromCoExV2PeerOrUserMixinGroup,
          c = s.id,
          d = s.retryOrIndividualRegularMixinGroup,
          m = s.t;
        if (r != null && u.name === "FromUser") {
          var p,
            _ = u.value.from;
          return r
            .handlePeerMessage(
              {
                from: _,
                parsedMessage: (p = o(
                  "WAHandlePeerMessageProtocol",
                )).parsePeerMessage({
                  from: _,
                  retryOrIndividualRegularMixinGroup: d,
                }),
                stanzaId: c,
                sendPeerMessageReceipt: p.sendPeerMessageReceipt,
                sendHistorySyncReceipt: p.sendHistorySyncReceipt,
                sendRetryReceipt: p.sendPeerMessageRetryReceipt,
                makeAck: l,
                decryptMessage: p.decryptPeerMessage,
                decodeMessage: p.decodePeerMessage,
                serverTs: o("WATimeUtils").castToUnixTime(m),
              },
              i,
            )
            .then(o("WAResultOrError").makeResult);
        }
        return (e || (e = n("Promise"))).resolve(
          o("WAResultOrError").makeResult(l()),
        );
      };
    }
    l.createHandlePeerMessageBranch = s;
  },
  98,
);

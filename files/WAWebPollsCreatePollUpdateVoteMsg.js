__d(
  "WAWebPollsCreatePollUpdateVoteMsg",
  [
    "Promise",
    "WAWebAck",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebPollVoteTCMetadata",
    "WAWebPollsProtobufConversion",
    "WAWebPollsVoteEncryption",
    "WAWebReferentialMsgKey",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i,
            l = self.crypto.getRandomValues(new Uint8Array(12)),
            s = yield (e || (e = n("Promise"))).all([
              o("WAWebPollsVoteEncryption").encryptVote({
                encodedProtobuf: yield o(
                  "WAWebPollsProtobufConversion",
                ).protobufFromVote(t, a.pollOptions),
                isOneOnOne: o("WAWebMsgGetters").getRemote(a.unsafe()).isUser(),
                iv: l,
                messageSecret: r("nullthrows")(
                  a.messageSecret,
                  "Poll creation missing message secret",
                ),
                pollCreationOriginalSender: r("nullthrows")(
                  o("WAWebMsgGetters").getOriginalSender(a.unsafe()),
                  "Poll creation missing original sender",
                ),
                stanzaId: a.id.id,
                voteSender: t.sender,
              }),
              o("WAWebPollVoteTCMetadata").buildOutgoingPollVoteTCMetadata(
                a.unsafe(),
              ),
            ]),
            u = s[0].encPayload,
            c = s[1],
            d = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
              t.msgKey,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
            ),
            m = d.author,
            p = d.to;
          return {
            id: t.msgKey,
            type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
            kind: o("WAWebMsgType").MsgKind.PollVoteEncrypted,
            subtype: "poll_vote",
            addonEncrypted: !0,
            t: Math.floor(t.senderTimestampMs / 1e3),
            from: t.sender,
            to: p,
            author: m,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            isNewMsg: !0,
            local: !0,
            ack: (i = t.ack) != null ? i : o("WAWebAck").ACK.CLOCK,
            pollUpdateParentKey: o(
              "WAWebReferentialMsgKey",
            ).getReferentialMsgKey(a),
            encPollVote: { encPayload: u, encIv: l.buffer },
            senderTimestampMs: t.senderTimestampMs,
            pollUpdateMessageMetadata: c != null ? c : void 0,
          };
        })),
        u.apply(this, arguments)
      );
    }
    l.createPollUpdateVoteMsg = s;
  },
  98,
);

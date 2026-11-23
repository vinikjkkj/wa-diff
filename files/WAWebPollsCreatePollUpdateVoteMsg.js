__d(
  "WAWebPollsCreatePollUpdateVoteMsg",
  [
    "WAWebAck",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebPollVoteTCMetadata",
    "WAWebPollsProtobufConversion",
    "WAWebPollsVoteEncryption",
    "WAWebReferentialMsgKey",
    "WAWebViewMode.flow",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n,
        a = self.crypto.getRandomValues(new Uint8Array(12)),
        i = await Promise.all([
          o("WAWebPollsVoteEncryption").encryptVote({
            encodedProtobuf: await o(
              "WAWebPollsProtobufConversion",
            ).protobufFromVote(e, t.pollOptions),
            isOneOnOne: o("WAWebMsgGetters").getRemote(t.unsafe()).isUser(),
            iv: a,
            messageSecret: r("nullthrows")(
              t.messageSecret,
              "Poll creation missing message secret",
            ),
            pollCreationOriginalSender: r("nullthrows")(
              o("WAWebMsgGetters").getOriginalSender(t.unsafe()),
              "Poll creation missing original sender",
            ),
            stanzaId: t.id.id,
            voteSender: e.sender,
          }),
          o("WAWebPollVoteTCMetadata").buildOutgoingPollVoteTCMetadata(
            t.unsafe(),
          ),
        ]),
        l = i[0].encPayload,
        s = i[1],
        u = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          e.msgKey,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        c = u.author,
        d = u.to;
      return {
        id: e.msgKey,
        type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
        kind: o("WAWebMsgType").MsgKind.PollVoteEncrypted,
        subtype: "poll_vote",
        addonEncrypted: !0,
        t: Math.floor(e.senderTimestampMs / 1e3),
        from: e.sender,
        to: d,
        author: c,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        isNewMsg: !0,
        local: !0,
        ack: (n = e.ack) != null ? n : o("WAWebAck").ACK.CLOCK,
        pollUpdateParentKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(
          t,
        ),
        encPollVote: { encPayload: l, encIv: a.buffer },
        senderTimestampMs: e.senderTimestampMs,
        pollUpdateMessageMetadata: s != null ? s : void 0,
      };
    }
    l.createPollUpdateVoteMsg = e;
  },
  98,
);

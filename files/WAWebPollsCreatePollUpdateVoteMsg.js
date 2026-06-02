__d(
  "WAWebPollsCreatePollUpdateVoteMsg",
  [
    "WANullthrows",
    "WAWebAck",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebPollsProtobufConversion",
    "WAWebPollsVoteEncryption",
    "WAWebReferentialMsgKey",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n,
        a = self.crypto.getRandomValues(new Uint8Array(12)),
        i = await o("WAWebPollsVoteEncryption").encryptVote({
          encodedProtobuf: await o(
            "WAWebPollsProtobufConversion",
          ).protobufFromVote(e, t.pollOptions),
          isOneOnOne: o("WAWebMsgGetters").getRemote(t).isUser(),
          iv: a,
          messageSecret: r("WANullthrows")(
            t.messageSecret,
            "Poll creation missing message secret",
          ),
          pollCreationOriginalSender: o("WAWebMsgGetters").getOriginalSender(
            t.unsafe(),
          ),
          stanzaId: t.id.id,
          voteSender: e.sender,
        }),
        l = i.encPayload,
        s = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          e.msgKey,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        u = s.author,
        c = s.to;
      return {
        id: e.msgKey,
        type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
        kind: o("WAWebMsgType").MsgKind.PollVoteEncrypted,
        subtype: "poll_vote",
        addonEncrypted: !0,
        t: Math.floor(e.senderTimestampMs / 1e3),
        from: e.sender,
        to: c,
        author: u,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        isNewMsg: !0,
        local: !0,
        ack: (n = e.ack) != null ? n : o("WAWebAck").ACK.CLOCK,
        pollUpdateParentKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(
          t,
        ),
        encPollVote: { encPayload: l, encIv: a.buffer },
        senderTimestampMs: e.senderTimestampMs,
      };
    }
    l.createPollUpdateVoteMsg = e;
  },
  98,
);

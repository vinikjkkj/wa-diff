__d(
  "WAWebPollVoteEncryptMsgData",
  [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebPollVoteTCMetadata",
    "WAWebPollsProtobufConversion",
    "WAWebPollsVoteEncryption",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i,
            l = o("WAWebMsgGetters").getPollEndTime(a);
          if (l != null && l <= Date.now())
            throw (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "blocked-encrypting-poll-vote/poll-ended",
                  ])),
              ),
              r("err")("Poll has ended")
            );
          var u = r("nullthrows")(o("WAWebMsgGetters").getPollOptions(a)),
            c = r("nullthrows")(
              o("WAWebMsgGetters").getMessageSecret(a),
              "Poll creation missing message secret",
            ),
            d = r("nullthrows")(o("WAWebMsgGetters").getOriginalSender(a)),
            m = self.crypto.getRandomValues(new Uint8Array(12)),
            p = yield (s || (s = n("Promise"))).all([
              o("WAWebPollsVoteEncryption").encryptVote({
                encodedProtobuf: yield o(
                  "WAWebPollsProtobufConversion",
                ).protobufFromVote(t, u),
                iv: m,
                messageSecret: c,
                pollCreationOriginalSender: d,
                stanzaId: a.id.id,
                voteSender: o("WAWebWidFactory").asUserWidOrThrow(
                  r("nullthrows")(o("WAWebMsgGetters").getSender(t)),
                ),
                isOneOnOne: o("WAWebMsgGetters").getRemote(a).isUser(),
              }),
              o("WAWebPollVoteTCMetadata").buildOutgoingPollVoteTCMetadata(a),
            ]),
            _ = p[0].encPayload,
            f = p[1];
          return babelHelpers.extends(
            {
              id: t.id,
              type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
              kind: o("WAWebMsgType").MsgKind.PollVoteEncrypted,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              subtype: "poll_vote",
              addonEncrypted: !0,
              t: Math.floor(t.senderTimestampMs / 1e3),
            },
            o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
              t.id,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
            ),
            {
              isNewMsg: !0,
              local: !0,
              ack: (i = t.ack) != null ? i : o("WAWebAck").ACK.CLOCK,
              pollUpdateParentKey: a.id,
              encPollVote: { encPayload: _, encIv: m.buffer },
              senderTimestampMs: t.senderTimestampMs,
              pollUpdateMessageMetadata: f != null ? f : void 0,
            },
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.encryptPollVoteMsgData = u;
  },
  98,
);

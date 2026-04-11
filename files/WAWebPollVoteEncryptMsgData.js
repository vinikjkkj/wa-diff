__d(
  "WAWebPollVoteEncryptMsgData",
  [
    "WALogger",
    "WANullthrows",
    "WAWebAck",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebPollsProtobufConversion",
    "WAWebPollsVoteEncryption",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a,
            i = o("WAWebMsgGetters").getPollEndTime(n);
          if (i != null && i <= Date.now())
            throw (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "blocked-encrypting-poll-vote/poll-ended",
                  ])),
              ),
              r("err")("Poll has ended")
            );
          var l = r("WANullthrows")(o("WAWebMsgGetters").getPollOptions(n)),
            s = r("WANullthrows")(
              o("WAWebMsgGetters").getMessageSecret(n),
              "Poll creation missing message secret",
            ),
            u = r("WANullthrows")(o("WAWebMsgGetters").getOriginalSender(n)),
            c = self.crypto.getRandomValues(new Uint8Array(12)),
            d = yield o("WAWebPollsVoteEncryption").encryptVote({
              encodedProtobuf: yield o(
                "WAWebPollsProtobufConversion",
              ).protobufFromVote(t, l),
              iv: c,
              messageSecret: s,
              pollCreationOriginalSender: u,
              stanzaId: n.id.id,
              voteSender: o("WAWebWidFactory").asUserWidOrThrow(
                r("WANullthrows")(o("WAWebMsgGetters").getSender(t)),
              ),
              isOneOnOne: o("WAWebMsgGetters").getRemote(n).isUser(),
            }),
            m = d.encPayload;
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
              ack: (a = t.ack) != null ? a : o("WAWebAck").ACK.CLOCK,
              pollUpdateParentKey: n.id,
              encPollVote: { encPayload: m, encIv: c.buffer },
              senderTimestampMs: t.senderTimestampMs,
            },
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.encryptPollVoteMsgData = s;
  },
  98,
);

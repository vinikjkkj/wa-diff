__d(
  "WAWebPollsVoteEncryptionInternal",
  [
    "WAWebAddonEncryption",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = {
              type: o("WAWebMsgType").MsgKind.PollVoteEncrypted,
              encryptedAddOn: e.encryptedVote,
            },
            n = yield o("WAWebAddonEncryption").decryptAddOn(t, {
              messageSecret: e.messageSecret,
              iv: e.iv,
              stanzaId: e.stanzaId,
              originalMessageSender: e.pollCreationOriginalSender,
              addOnSender: e.voteSender,
            });
          return o("decodeProtobuf").decodeProtobuf(
            o("WAWebProtobufsE2E.pb").Message$PollVoteMessageSpec,
            n,
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.decryptVoteInternal = e;
  },
  98,
);

__d(
  "WAWebPollsVoteEncryptionInternal",
  [
    "WAWebAddonEncryption",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = {
          type: o("WAWebMsgType").MsgKind.PollVoteEncrypted,
          encryptedAddOn: e.encryptedVote,
        },
        n = await o("WAWebAddonEncryption").decryptAddOn(t, {
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
    }
    l.decryptVoteInternal = e;
  },
  98,
);

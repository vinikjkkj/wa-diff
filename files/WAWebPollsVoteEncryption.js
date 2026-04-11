__d(
  "WAWebPollsVoteEncryption",
  [
    "WAWebAddonEncryption",
    "WAWebApiContact",
    "WAWebLidMigrationUtils",
    "WAWebMsgType",
    "WAWebPollsVoteEncryptionInternal",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebPollsVoteEncryptionInternal")
        .decryptVoteInternal(e)
        .catch(function (t) {
          if (e.isOneOnOne) {
            var n = u(e.pollCreationOriginalSender, e.voteSender),
              r = n.alignedPollCreator,
              a = n.alignedVoteSender;
            if (r != null && a != null)
              return o("WAWebPollsVoteEncryptionInternal")
                .decryptVoteInternal(
                  babelHelpers.extends({}, e, {
                    pollCreationOriginalSender: r,
                    voteSender: a,
                  }),
                )
                .catch(function (t) {
                  var n = o("WAWebApiContact").getAlternateUserWid(r),
                    i = o("WAWebApiContact").getAlternateUserWid(a);
                  if (n != null && i != null)
                    return o(
                      "WAWebPollsVoteEncryptionInternal",
                    ).decryptVoteInternal(
                      babelHelpers.extends({}, e, {
                        pollCreationOriginalSender: n,
                        voteSender: i,
                      }),
                    );
                  throw t;
                });
          }
          throw t;
        });
    }
    function s(e) {
      var t = {
        type: o("WAWebMsgType").MsgKind.PollVoteDecrypted,
        encode: e.encodedProtobuf,
      };
      if (e.isOneOnOne) {
        var n = u(e.pollCreationOriginalSender, e.voteSender),
          r = n.alignedPollCreator,
          a = n.alignedVoteSender;
        r != null &&
          a != null &&
          ((e.pollCreationOriginalSender = r), (e.voteSender = a));
      }
      return o("WAWebAddonEncryption").encryptAddOn(t, {
        messageSecret: e.messageSecret,
        iv: e.iv,
        stanzaId: e.stanzaId,
        originalMessageSender: e.pollCreationOriginalSender,
        addOnSender: e.voteSender,
      });
    }
    function u(e, t) {
      var n = o("WAWebLidMigrationUtils").toCommonAddressingMode(e, t),
        r = n[0],
        a = n[1];
      return {
        alignedVoteSender:
          a != null ? o("WAWebWidFactory").asUserWidOrThrow(a) : null,
        alignedPollCreator:
          r != null ? o("WAWebWidFactory").asUserWidOrThrow(r) : null,
      };
    }
    ((l.decryptVote = e), (l.encryptVote = s));
  },
  98,
);

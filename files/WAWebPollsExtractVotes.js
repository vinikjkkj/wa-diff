__d(
  "WAWebPollsExtractVotes",
  [
    "WALogger",
    "WANullthrows",
    "WAWebAddonEncryptionError",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPollsCreateOptionLocalIdMap",
    "WAWebPollsProtobufConversion",
    "WAWebPollsValidationError",
    "WAWebPollsVoteEncryption",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = await Promise.allSettled(
        Array.from(t.entries(), function (e) {
          var t = e[0],
            n = e[1];
          return c(t, n);
        }),
      );
      return r("compactMap")(n, function (t) {
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected": {
            var n = t.reason;
            if (
              n instanceof
              o("WAWebPollsValidationError").PollVoteValidationError
            ) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Poll vote extraction failed: ",
                      "",
                    ])),
                  n.code,
                )
                .sendLogs(n.code);
              return;
            }
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose(
                    [
                      "Poll vote extraction failed: ",
                      `
`,
                      "",
                    ],
                    ["Poll vote extraction failed: ", "\\n", ""],
                  )),
                n.message,
                n.stack,
              )
              .sendLogs("poll-vote-extraction-unknown-error");
          }
        }
      });
    }
    async function c(e, t) {
      var n = o("WAWebAddonEncryptionError").getValidatedMessageSecret(
          o("WAWebMsgType").MsgKind.PollVoteEncrypted,
          t,
        ),
        a = r("WANullthrows")(t.pollSelectableOptionsCount),
        i = r("WANullthrows")(t.pollOptions),
        l = r("WANullthrows")(e.encPollVote),
        s = o("WAWebWidFactory").asUserWidOrThrow(
          o("WAWebMsgGetters").getSender(e),
        ),
        u = await o("WAWebPollsVoteEncryption").decryptVote({
          encryptedVote: l.encPayload,
          iv: l.encIv,
          messageSecret: n,
          stanzaId: t.id.id,
          pollCreationOriginalSender: o("WAWebMsgGetters").getOriginalSender(t),
          voteSender: s,
          isOneOnOne: o("WAWebMsgGetters").getRemote(t).isUser(),
        }),
        c = u.selectedOptions.length;
      if (c > i.length || (a !== 0 && c > a))
        throw new (o("WAWebPollsValidationError").PollVoteValidationError)(
          o("WAWebPollsValidationError").PollVoteValidationErrorCode
            .INVALID_OPTIONS_COUNT,
        );
      if (
        u.selectedOptions.some(function (e) {
          return e.byteLength !== 32;
        })
      )
        throw new (o("WAWebPollsValidationError").PollVoteValidationError)(
          o("WAWebPollsValidationError").PollVoteValidationErrorCode
            .INVALID_OPTION,
        );
      var d = await o(
        "WAWebPollsCreateOptionLocalIdMap",
      ).createOptionLocalIdMap(i);
      if (!d.includesHashes(u.selectedOptions))
        throw new (o("WAWebPollsValidationError").PollVoteValidationError)(
          o("WAWebPollsValidationError").PollVoteValidationErrorCode
            .OPTION_NOT_FOUND,
        );
      return o("WAWebPollsProtobufConversion").voteFromProtobuf({
        voteProtobuf: u,
        pollVoteMsgKey: e.id,
        parentMsgKey: e.pollUpdateParentKey,
        sender: s,
        senderTimestampMs: e.senderTimestampMs,
        t: r("WANullthrows")(e.t),
        optionLocalIdMap: d,
        ack: e.ack,
        read: o("WAWebUserPrefsMeUser").isMeAccount(s),
      });
    }
    ((l.extractVotes = u), (l.extractVote = c));
  },
  98,
);

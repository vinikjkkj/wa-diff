__d(
  "WAWebPollsExtractVotes",
  [
    "WALogger",
    "WAWebAddonEncryptionError",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPollsCreateOptionLocalIdMap",
    "WAWebPollsGatingUtils",
    "WAWebPollsProtobufConversion",
    "WAWebPollsValidationError",
    "WAWebPollsVoteEncryption",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "compactMap",
    "nullthrows",
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
      var n,
        a = o("WAWebAddonEncryptionError").getValidatedMessageSecret(
          o("WAWebMsgType").MsgKind.PollVoteEncrypted,
          t,
        ),
        i = (n = r("nullthrows"))(t.pollSelectableOptionsCount),
        l = n(t.pollOptions),
        s = n(e.encPollVote),
        u = o("WAWebWidFactory").asUserWidOrThrow(
          n(o("WAWebMsgGetters").getSender(e)),
        ),
        c = await o("WAWebPollsVoteEncryption").decryptVote({
          encryptedVote: s.encPayload,
          iv: s.encIv,
          messageSecret: a,
          stanzaId: t.id.id,
          pollCreationOriginalSender: n(
            o("WAWebMsgGetters").getOriginalSender(t),
          ),
          voteSender: u,
          isOneOnOne: o("WAWebMsgGetters").getRemote(t).isUser(),
        }),
        d = o("WAWebPollsGatingUtils").isPollAddOptionReceivingEnabled(),
        m = c.selectedOptions.length;
      if (
        m >
          (d ? o("WAWebPollsGatingUtils").getMaxPollOptionCount() : l.length) ||
        (i !== 0 && m > i)
      )
        throw new (o("WAWebPollsValidationError").PollVoteValidationError)(
          o("WAWebPollsValidationError").PollVoteValidationErrorCode
            .INVALID_OPTIONS_COUNT,
        );
      if (
        c.selectedOptions.some(function (e) {
          return e.byteLength !== 32;
        })
      )
        throw new (o("WAWebPollsValidationError").PollVoteValidationError)(
          o("WAWebPollsValidationError").PollVoteValidationErrorCode
            .INVALID_OPTION,
        );
      var p = await o(
        "WAWebPollsCreateOptionLocalIdMap",
      ).createOptionLocalIdMap(l);
      if (!d && !p.includesHashes(c.selectedOptions))
        throw new (o("WAWebPollsValidationError").PollVoteValidationError)(
          o("WAWebPollsValidationError").PollVoteValidationErrorCode
            .OPTION_NOT_FOUND,
        );
      return o("WAWebPollsProtobufConversion").voteFromProtobuf({
        voteProtobuf: c,
        pollVoteMsgKey: e.id,
        parentMsgKey: e.pollUpdateParentKey,
        sender: u,
        senderTimestampMs: e.senderTimestampMs,
        t: r("nullthrows")(e.t),
        optionLocalIdMap: p,
        ack: e.ack,
        read: o("WAWebUserUtils").isMeAccount(u),
        allowUnresolvedOptions: d,
      });
    }
    ((l.extractVotes = u), (l.extractVote = c));
  },
  98,
);

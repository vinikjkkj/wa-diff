__d(
  "WAWebPollsExtractVotes",
  [
    "Promise",
    "WALogger",
    "WAWebAddonEncryptionError",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPollsCreateOptionLocalIdMap",
    "WAWebPollsProtobufConversion",
    "WAWebPollsValidationError",
    "WAWebPollsVoteEncryption",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = yield (u || (u = n("Promise"))).allSettled(
            Array.from(t.entries(), function (e) {
              var t = e[0],
                n = e[1];
              return m(t, n);
            }),
          );
          return r("compactMap")(a, function (t) {
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
                        ["Poll vote extraction failed: ", "\n", ""],
                        ["Poll vote extraction failed: ", "\\n", ""],
                      )),
                    n.message,
                    n.stack,
                  )
                  .sendLogs("poll-vote-extraction-unknown-error");
              }
            }
          });
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            c = yield o("WAWebPollsVoteEncryption").decryptVote({
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
            d = c.selectedOptions.length;
          if (d > l.length || (i !== 0 && d > i))
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
          var m = yield o(
            "WAWebPollsCreateOptionLocalIdMap",
          ).createOptionLocalIdMap(l);
          if (!m.includesHashes(c.selectedOptions))
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
            optionLocalIdMap: m,
            ack: e.ack,
            read: o("WAWebUserPrefsMeUser").isMeAccount(u),
          });
        })),
        p.apply(this, arguments)
      );
    }
    ((l.extractVotes = c), (l.extractVote = m));
  },
  98,
);

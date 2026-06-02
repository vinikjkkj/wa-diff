__d(
  "WAWebPollVoteAddonMessageProcessor",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAddonConstants",
    "WAWebAddonCreateMsgProcessor",
    "WAWebAddonInfraError",
    "WAWebAddonLogUtils",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSelectUtils",
    "WAWebBackendApi",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebLastAddOnDBSerialization",
    "WAWebMsgType",
    "WAWebPollVoteEncryptMsgData",
    "WAWebPollVoteFromHistorySyncMsg",
    "WAWebPollsExtractVotes",
    "WAWebPollsVoteDataUtils",
    "WAWebShouldUpdateLastAddOnPreview",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = o(
        "WAWebAddonCreateMsgProcessor",
      ).createAddonMsgProcessorDualEncrypted({
        isEnabled: function () {
          return o("WAWebABProps").getABPropConfigValue(
            "unified_poll_vote_addon_infra_enabled",
          );
        },
        convert: {
          fromHistorySyncMsg: r("WAWebPollVoteFromHistorySyncMsg"),
          toDualEncryptedMsgData: async function (t, n) {
            return t.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted
              ? t
              : o("WAWebPollVoteEncryptMsgData").encryptPollVoteMsgData(t, n);
          },
          toDualDecryptedMsgData: async function (t, n) {
            return t.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted
              ? t
              : o("WAWebPollsExtractVotes")
                  .extractVote(t, n)
                  .then(o("WAWebPollsVoteDataUtils").voteDataToPollVoteMsgData);
          },
        },
        updateCollection: async function (t, n) {
          return o("WAWebBackendApi").frontendSendAndReceive(
            "upsertVotesModelCollection",
            {
              votes: t.add.map(
                o("WAWebPollsVoteDataUtils").pollVoteMsgDataToVoteData,
              ),
              votesToRemove: t.remove,
              restoredFromDb:
                n === o("WAWebAddonConstants").AddonProcessMode.Hydration ||
                n === o("WAWebAddonConstants").AddonProcessMode.HistorySync,
            },
          );
        },
        beforeUpsert: async function (n, r) {
          var t = r.parents,
            a = [],
            i = [];
          for (var l of n)
            if (l.addonEncrypted) {
              var d = t.getForAddon(l);
              if (d == null)
                throw new (o("WAWebAddonInfraError").AddonInfraError)(
                  o("WAWebAddonInfraError").AddonInfraErrorCode
                    .MissingParentMsg,
                );
              (i.push(c.convert.toDualDecryptedMsgData(l, d)),
                o("WALogger")
                  .LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[pollVoteMsgProcessor] Decrypting poll vote message",
                      ])),
                  )
                  .sendLogs("unexpected encrypted poll vote", {
                    sampling: 0.01,
                  }));
            } else a.push(l);
          if (i.length !== 0) {
            var m = await Promise.allSettled(i);
            for (var p of m)
              p.status === "fulfilled" &&
              p.value.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted
                ? a.push(p.value)
                : o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Cannot decrypt poll vote message: ",
                        "",
                      ])),
                    p.reason,
                  );
            o("WAWebAddonLogUtils").hasSettledWithError(m) &&
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[pollVoteMsgProcessor] Failed to decrypt poll vote message",
                    ])),
                )
                .tags("messagings", "addons")
                .sendLogs("poll-vote-decryption-error", { sampling: 0.01 });
          }
          return a;
        },
        afterUpsert: async function (t, n) {
          var e = n.parents,
            r = n.processMode,
            a = e;
          if (r === o("WAWebAddonConstants").AddonProcessMode.HistorySync) {
            var i = await o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(
                t,
                r,
              ),
              l = i[0];
            a = o("WAWebAddonSelectUtils").createAddonParentSelector(l);
          }
          (await o(
            "WAWebShouldUpdateLastAddOnPreview",
          ).filterAndUpdateChatPreviews(
            t.map(function (e) {
              var t;
              try {
                var n = a.getForAddon(e);
                t = n == null ? void 0 : n.pollHideVoterNames;
              } catch (e) {}
              return o(
                "WAWebLastAddOnDBSerialization",
              ).lastAddOnPreviewCandidateFromVoteData(
                o("WAWebPollsVoteDataUtils").pollVoteMsgDataToVoteData(e),
                !1,
                t,
              );
            }),
          ),
            r !== o("WAWebAddonConstants").AddonProcessMode.HistorySync &&
              r === o("WAWebAddonConstants").AddonProcessMode.OnlineReceive &&
              (await o(
                "WAWebDBMarkFutureproofMessagesReparsed",
              ).markFutureproofMessagesReparsed(
                t.map(function (e) {
                  return e.id.toString();
                }),
              )));
        },
        manageNotifications: async function () {},
      }),
      d = c;
    l.default = d;
  },
  98,
);

__d(
  "WAWebPollVoteAddonMessageProcessor",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebAddonConstants",
    "WAWebAddonCreateMsgProcessor",
    "WAWebAddonInfraError",
    "WAWebAddonLogUtils",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSelectUtils",
    "WAWebApplyPollVoteTCValidation",
    "WAWebBackendApi",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebLastAddOnDBSerialization",
    "WAWebMsgType",
    "WAWebPollVoteEncryptMsgData",
    "WAWebPollVoteFromHistorySyncMsg",
    "WAWebPollsExtractVotes",
    "WAWebPollsVoteDataUtils",
    "WAWebShouldUpdateLastAddOnPreview",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = o(
        "WAWebAddonCreateMsgProcessor",
      ).createAddonMsgProcessorDualEncrypted({
        isEnabled: function () {
          return o("WAWebABProps").getABPropConfigValue(
            "unified_poll_vote_addon_infra_enabled",
          );
        },
        convert: {
          fromHistorySyncMsg: r("WAWebPollVoteFromHistorySyncMsg"),
          toDualEncryptedMsgData: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                return e.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted
                  ? e
                  : o("WAWebPollVoteEncryptMsgData").encryptPollVoteMsgData(
                      e,
                      t,
                    );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          toDualDecryptedMsgData: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (e.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted)
                  return e;
                var n = yield o("WAWebPollsExtractVotes").extractVote(e, t);
                return babelHelpers.extends(
                  {},
                  o("WAWebPollsVoteDataUtils").voteDataToPollVoteMsgData(n),
                  { pollUpdateMessageMetadata: e.pollUpdateMessageMetadata },
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        },
        updateCollection: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              return o("WAWebBackendApi").frontendSendAndReceive(
                "upsertVotesModelCollection",
                {
                  votes: e.add.map(
                    o("WAWebPollsVoteDataUtils").pollVoteMsgDataToVoteData,
                  ),
                  votesToRemove: e.remove,
                  restoredFromDb:
                    t === o("WAWebAddonConstants").AddonProcessMode.Hydration ||
                    t === o("WAWebAddonConstants").AddonProcessMode.HistorySync,
                },
              );
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        beforeUpsert: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, r) {
              var a = r.parents,
                i = [],
                l = [];
              for (var p of t)
                if (p.addonEncrypted) {
                  var _ = a.getForAddon(p);
                  if (_ == null)
                    throw new (o("WAWebAddonInfraError").AddonInfraError)(
                      o("WAWebAddonInfraError").AddonInfraErrorCode
                        .MissingParentMsg,
                    );
                  (l.push(d.convert.toDualDecryptedMsgData(p, _)),
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
                } else i.push(p);
              if (l.length !== 0) {
                var f = yield (c || (c = n("Promise"))).allSettled(l);
                for (var g of f)
                  g.status === "fulfilled" &&
                  g.value.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted
                    ? i.push(g.value)
                    : o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Cannot decrypt poll vote message: ",
                            "",
                          ])),
                        g.reason,
                      );
                o("WAWebAddonLogUtils").hasSettledWithError(f) &&
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
              return m(i, a);
            },
          );
          function r(e, n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        afterUpsert: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = t.parents,
                r = t.processMode,
                a = n;
              if (r === o("WAWebAddonConstants").AddonProcessMode.HistorySync) {
                var i = yield o(
                    "WAWebAddonProcessMsgsUtils",
                  ).queryAddonParentMsgs(e, r),
                  l = i[0];
                a = o("WAWebAddonSelectUtils").createAddonParentSelector(l);
              }
              (yield o(
                "WAWebShouldUpdateLastAddOnPreview",
              ).filterAndUpdateChatPreviews(
                e.map(function (e) {
                  var t;
                  try {
                    var n = a.getForAddon(e);
                    t = n == null ? void 0 : n.pollHideVoterNames;
                  } catch (e) {}
                  return o(
                    "WAWebLastAddOnDBSerialization",
                  ).lastAddOnPreviewCandidateFromVoteData(
                    o("WAWebPollsVoteDataUtils").pollVoteMsgDataToVoteData(e),
                    t,
                  );
                }),
              ),
                r !== o("WAWebAddonConstants").AddonProcessMode.HistorySync &&
                  r ===
                    o("WAWebAddonConstants").AddonProcessMode.OnlineReceive &&
                  (yield o(
                    "WAWebDBMarkFutureproofMessagesReparsed",
                  ).markFutureproofMessagesReparsed(
                    e.map(function (e) {
                      return e.id.toString();
                    }),
                  )));
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        manageNotifications: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* () {},
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      });
    function m(e, t) {
      return o("WAWebApplyPollVoteTCValidation").applyPollVoteTCValidation(
        e.map(function (e) {
          var n,
            r = p(t, e),
            a = o("WAWebPollsVoteDataUtils").pollVoteMsgDataToVoteData(e);
          return {
            vote: e,
            parentMsg: r != null ? r : {},
            voteMetadata: e.pollUpdateMessageMetadata,
            parentMsgKey:
              (n = r == null ? void 0 : r.id) != null ? n : a.parentMsgKey,
            voteMsgKey: a.msgKey,
            sender: a.sender,
            senderTimestampMs: a.senderTimestampMs,
            selectedOptionLocalIds: a.selectedOptionLocalIds,
          };
        }),
        "live-vote",
      );
    }
    function p(e, t) {
      try {
        return e.getForAddon(t);
      } catch (e) {
        if (e instanceof o("WAWebAddonInfraError").AddonInfraError) return null;
        throw e;
      }
    }
    var _ = d;
    l.default = _;
  },
  98,
);

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
                return e.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted
                  ? e
                  : o("WAWebPollsExtractVotes")
                      .extractVote(e, t)
                      .then(
                        o("WAWebPollsVoteDataUtils").voteDataToPollVoteMsgData,
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
              for (var m of t)
                if (m.addonEncrypted) {
                  var p = a.getForAddon(m);
                  if (p == null)
                    throw new (o("WAWebAddonInfraError").AddonInfraError)(
                      o("WAWebAddonInfraError").AddonInfraErrorCode
                        .MissingParentMsg,
                    );
                  (l.push(d.convert.toDualDecryptedMsgData(m, p)),
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
                } else i.push(m);
              if (l.length !== 0) {
                var _ = yield (c || (c = n("Promise"))).allSettled(l);
                for (var f of _)
                  f.status === "fulfilled" &&
                  f.value.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted
                    ? i.push(f.value)
                    : o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Cannot decrypt poll vote message: ",
                            "",
                          ])),
                        f.reason,
                      );
                o("WAWebAddonLogUtils").hasSettledWithError(_) &&
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
              return i;
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
                    !1,
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
      }),
      m = d;
    l.default = m;
  },
  98,
);

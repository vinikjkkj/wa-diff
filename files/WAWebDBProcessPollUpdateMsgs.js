__d(
  "WAWebDBProcessPollUpdateMsgs",
  [
    "WALogger",
    "WAWebApplyPollVoteTCValidation",
    "WAWebBackendApi",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebDBPollsGetParentMessages",
    "WAWebDBPollsUpsertVotes",
    "WAWebDBStoreMessageOrphans",
    "WAWebDBUpdateLastAddOnPreviewChat",
    "WAWebLastAddOnDBSerialization",
    "WAWebPollsExtractVotes",
    "WAWebShouldUpdateLastAddOnPreview",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      if (t.length === 0) return [];
      var n = await o("WAWebDBPollsGetParentMessages").getParentMessages(t),
        r = n.orphans,
        a = n.pollUpdateMsgsToParentMsgs;
      for (var i of a.entries()) {
        var l = i[0],
          s = i[1];
        s.pollInvalidated === !0 && a.delete(l);
      }
      for (var c of a.entries()) {
        var d = c[0],
          m = c[1],
          p = m.pollEndTime;
        p != null &&
          d.t != null &&
          d.t * 1e3 > p &&
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "poll-update-past-end-time/dropped",
              ])),
          ),
          a.delete(d));
      }
      var _ = await Promise.all([
          (async function () {
            if (r.length !== 0) {
              await o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
                r,
                function (e) {
                  return e.pollUpdateParentKey;
                },
              );
              var e = r.map(function (e) {
                return e.id.toString();
              });
              await o(
                "WAWebDBMarkFutureproofMessagesReparsed",
              ).markFutureproofMessagesReparsed(e);
            }
          })(),
          (async function () {
            if (a.size !== 0) {
              var e = await o("WAWebPollsExtractVotes").extractVotes(a),
                t = await u(e, a);
              if (t.length !== 0) {
                var n = await o("WAWebDBPollsUpsertVotes").upsertVotesDb(t);
                await o("WAWebBackendApi").frontendSendAndReceive(
                  "upsertVotesModelCollection",
                  { votes: n, votesToRemove: null, restoredFromDb: !1 },
                );
                var r = n.map(function (e) {
                  return e.msgKey.toString();
                });
                await o(
                  "WAWebDBMarkFutureproofMessagesReparsed",
                ).markFutureproofMessagesReparsed(r);
                var i = new Map();
                for (var l of a.values())
                  i.set(l.id.toString(), l.pollHideVoterNames);
                var s = await o(
                  "WAWebShouldUpdateLastAddOnPreview",
                ).filterChatsWithAddOnPreviewUpdates(
                  n.map(function (e) {
                    return o(
                      "WAWebLastAddOnDBSerialization",
                    ).lastAddOnPreviewCandidateFromVoteData(
                      e,
                      i.get(e.parentMsgKey.toString()),
                    );
                  }),
                );
                return (
                  s.size > 0 &&
                    (await o(
                      "WAWebDBUpdateLastAddOnPreviewChat",
                    ).updateDatabaseForLastAddOnPreview(s),
                    o("WAWebBackendApi").frontendFireAndForget(
                      "updateChatLastAddOnPreview",
                      { chatMap: s },
                    )),
                  n
                );
              }
            }
          })(),
        ]),
        f = _[1];
      return f != null ? f : [];
    }
    function u(e, t) {
      var n = new Map();
      for (var r of t) {
        var a = r[0],
          i = r[1];
        n.set(a.id.toString(), { pollUpdateMsg: a, parentMsg: i });
      }
      return o("WAWebApplyPollVoteTCValidation").applyPollVoteTCValidation(
        e.map(function (e) {
          var t,
            r,
            o,
            a = n.get(e.msgKey.toString());
          return {
            vote: e,
            parentMsg: (t = a == null ? void 0 : a.parentMsg) != null ? t : {},
            voteMetadata:
              a == null ? void 0 : a.pollUpdateMsg.pollUpdateMessageMetadata,
            parentMsgKey:
              (r = a == null ? void 0 : a.parentMsg.id) != null
                ? r
                : e.parentMsgKey,
            voteMsgKey: e.msgKey,
            sender: e.sender,
            senderTimestampMs: e.senderTimestampMs,
            t: e.t,
            selectedOptionLocalIds: e.selectedOptionLocalIds,
            unresolvedOptionHashes:
              (o = e.unresolvedOptionHashes) != null ? o : [],
          };
        }),
        "live-vote",
      );
    }
    l.processPollUpdateMsgs = s;
  },
  98,
);

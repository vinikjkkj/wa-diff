__d(
  "WAWebDBProcessPollUpdateMsgs",
  [
    "WALogger",
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
      for (var u of a.entries()) {
        var c = u[0],
          d = u[1],
          m = d.pollEndTime;
        m != null &&
          c.t != null &&
          c.t * 1e3 > m &&
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "poll-update-past-end-time/dropped",
              ])),
          ),
          a.delete(c));
      }
      var p = await Promise.all([
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
              var e = await o("WAWebDBPollsUpsertVotes").upsertVotesDb(
                await o("WAWebPollsExtractVotes").extractVotes(a),
              );
              await o("WAWebBackendApi").frontendSendAndReceive(
                "upsertVotesModelCollection",
                { votes: e, votesToRemove: null, restoredFromDb: !1 },
              );
              var t = e.map(function (e) {
                return e.msgKey.toString();
              });
              await o(
                "WAWebDBMarkFutureproofMessagesReparsed",
              ).markFutureproofMessagesReparsed(t);
              var n = new Map();
              for (var r of a.values())
                n.set(r.id.toString(), r.pollHideVoterNames);
              var i = await o(
                "WAWebShouldUpdateLastAddOnPreview",
              ).filterChatsWithAddOnPreviewUpdates(
                e.map(function (e) {
                  return o(
                    "WAWebLastAddOnDBSerialization",
                  ).lastAddOnPreviewCandidateFromVoteData(
                    e,
                    !1,
                    n.get(e.parentMsgKey.toString()),
                  );
                }),
              );
              return (
                i.size > 0 &&
                  (await o(
                    "WAWebDBUpdateLastAddOnPreviewChat",
                  ).updateDatabaseForLastAddOnPreview(i),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateChatLastAddOnPreview",
                    { chatMap: i },
                  )),
                e
              );
            }
          })(),
        ]),
        _ = p[1];
      return _ != null ? _ : [];
    }
    l.processPollUpdateMsgs = s;
  },
  98,
);

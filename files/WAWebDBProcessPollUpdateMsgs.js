__d(
  "WAWebDBProcessPollUpdateMsgs",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length === 0) return [];
          var r = yield o("WAWebDBPollsGetParentMessages").getParentMessages(t),
            a = r.orphans,
            i = r.pollUpdateMsgsToParentMsgs;
          for (var l of i.entries()) {
            var u = l[0],
              c = l[1];
            c.pollInvalidated === !0 && i.delete(u);
          }
          for (var m of i.entries()) {
            var p = m[0],
              _ = m[1],
              f = _.pollEndTime;
            f != null &&
              p.t != null &&
              p.t * 1e3 > f &&
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "poll-update-past-end-time/dropped",
                  ])),
              ),
              i.delete(p));
          }
          var g = yield (s || (s = n("Promise"))).all([
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (a.length !== 0) {
                  yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
                    a,
                    function (e) {
                      return e.pollUpdateParentKey;
                    },
                  );
                  var e = a.map(function (e) {
                    return e.id.toString();
                  });
                  yield o(
                    "WAWebDBMarkFutureproofMessagesReparsed",
                  ).markFutureproofMessagesReparsed(e);
                }
              })(),
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (i.size !== 0) {
                  var e = yield o("WAWebPollsExtractVotes").extractVotes(i),
                    t = yield d(e, i);
                  if (t.length !== 0) {
                    var n = yield o("WAWebDBPollsUpsertVotes").upsertVotesDb(t);
                    yield o("WAWebBackendApi").frontendSendAndReceive(
                      "upsertVotesModelCollection",
                      { votes: n, votesToRemove: null, restoredFromDb: !1 },
                    );
                    var r = n.map(function (e) {
                      return e.msgKey.toString();
                    });
                    yield o(
                      "WAWebDBMarkFutureproofMessagesReparsed",
                    ).markFutureproofMessagesReparsed(r);
                    var a = new Map();
                    for (var l of i.values())
                      a.set(l.id.toString(), l.pollHideVoterNames);
                    var s = yield o(
                      "WAWebShouldUpdateLastAddOnPreview",
                    ).filterChatsWithAddOnPreviewUpdates(
                      n.map(function (e) {
                        return o(
                          "WAWebLastAddOnDBSerialization",
                        ).lastAddOnPreviewCandidateFromVoteData(
                          e,
                          a.get(e.parentMsgKey.toString()),
                        );
                      }),
                    );
                    return (
                      s.size > 0 &&
                        (yield o(
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
            h = g[1];
          return h != null ? h : [];
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
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
            o = n.get(e.msgKey.toString());
          return {
            vote: e,
            parentMsg: (t = o == null ? void 0 : o.parentMsg) != null ? t : {},
            voteMetadata:
              o == null ? void 0 : o.pollUpdateMsg.pollUpdateMessageMetadata,
            parentMsgKey:
              (r = o == null ? void 0 : o.parentMsg.id) != null
                ? r
                : e.parentMsgKey,
            voteMsgKey: e.msgKey,
            sender: e.sender,
            senderTimestampMs: e.senderTimestampMs,
            selectedOptionLocalIds: e.selectedOptionLocalIds,
          };
        }),
        "live-vote",
      );
    }
    l.processPollUpdateMsgs = u;
  },
  98,
);

__d(
  "WAWebDBProcessPollUpdateMsgs",
  [
    "Promise",
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
          for (var d of i.entries()) {
            var m = d[0],
              p = d[1],
              _ = p.pollEndTime;
            _ != null &&
              m.t != null &&
              m.t * 1e3 > _ &&
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "poll-update-past-end-time/dropped",
                  ])),
              ),
              i.delete(m));
          }
          var f = yield (s || (s = n("Promise"))).all([
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
                  var e = yield o("WAWebDBPollsUpsertVotes").upsertVotesDb(
                    yield o("WAWebPollsExtractVotes").extractVotes(i),
                  );
                  yield o("WAWebBackendApi").frontendSendAndReceive(
                    "upsertVotesModelCollection",
                    { votes: e, votesToRemove: null, restoredFromDb: !1 },
                  );
                  var t = e.map(function (e) {
                    return e.msgKey.toString();
                  });
                  yield o(
                    "WAWebDBMarkFutureproofMessagesReparsed",
                  ).markFutureproofMessagesReparsed(t);
                  var n = new Map();
                  for (var r of i.values())
                    n.set(r.id.toString(), r.pollHideVoterNames);
                  var a = yield o(
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
                    a.size > 0 &&
                      (yield o(
                        "WAWebDBUpdateLastAddOnPreviewChat",
                      ).updateDatabaseForLastAddOnPreview(a),
                      o("WAWebBackendApi").frontendFireAndForget(
                        "updateChatLastAddOnPreview",
                        { chatMap: a },
                      )),
                    e
                  );
                }
              })(),
            ]),
            g = f[1];
          return g != null ? g : [];
        })),
        c.apply(this, arguments)
      );
    }
    l.processPollUpdateMsgs = u;
  },
  98,
);

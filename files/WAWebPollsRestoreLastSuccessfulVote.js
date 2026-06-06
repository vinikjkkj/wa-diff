__d(
  "WAWebPollsRestoreLastSuccessfulVote",
  [
    "WALogger",
    "WAWebAck",
    "WAWebDBPollsUpsertVotes",
    "WAWebPollsPollVoteCollection",
    "WAWebPollsVotesSchema",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.lastSuccessfulSelectedOptionLocalIds;
          if (n == null) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[Polls] no cached vote, removing failed vote",
                ])),
            );
            var r = o("WAWebPollsVotesSchema").getTable();
            (yield r.bulkRemove([
              [t.parentMsgKey.toString(), t.sender.toString()],
            ]),
              o("WAWebPollsPollVoteCollection").PollVoteCollection.remove(t));
            return;
          }
          var a = {
            msgKey: t.msgKey,
            parentMsgKey: t.parentMsgKey,
            selectedOptionLocalIds: n,
            senderTimestampMs: t.senderTimestampMs,
            t: t.t,
            sender: t.sender,
            ack: o("WAWebAck").ACK.SENT,
            read: !0,
            lastSuccessfulSelectedOptionLocalIds: n,
          };
          (yield o("WAWebDBPollsUpsertVotes").upsertVotesDb([a]),
            o("WAWebPollsPollVoteCollection").PollVoteCollection.remove(t),
            (t.selectedOptionLocalIds = n),
            (t.ack = o("WAWebAck").ACK.SENT),
            (t.isSendFailure = !1),
            o("WAWebPollsPollVoteCollection").PollVoteCollection.add(t));
        })),
        u.apply(this, arguments)
      );
    }
    l.restoreLastSuccessfulVote = s;
  },
  98,
);

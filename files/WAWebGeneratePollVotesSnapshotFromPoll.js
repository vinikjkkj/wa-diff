__d(
  "WAWebGeneratePollVotesSnapshotFromPoll",
  [
    "WAWebMsgGetters",
    "WAWebNewsletterPollVotesModelCollection",
    "WAWebNewsletterPollsUtils",
    "WAWebPollCreationUtils",
    "WAWebPollsPollVoteCollection",
    "WAWebPollsUseResults",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebMsgGetters").getIsNewsletterMsg(e);
      return t ? s(e) : u(e);
    }
    function s(e) {
      var t = e.id,
        n = e.pollOptions,
        r = o(
          "WAWebNewsletterPollVotesModelCollection",
        ).NewsletterPollVotesModelCollection.get(t),
        a = o("WAWebNewsletterPollsUtils").aggregateNewsletterVotes(r, n);
      return c(a, e.pollType);
    }
    function u(e) {
      var t = e.id,
        n = e.pollOptions,
        r = o(
          "WAWebPollsPollVoteCollection",
        ).PollVoteCollection.getForParentAddressingModeInsensitive([t]),
        a = r[0],
        i = a.toArray(),
        l = o("WAWebPollsUseResults").aggregateVotes(i, n);
      return c(l, e.pollType);
    }
    function c(e, t) {
      var n = t === o("WAWebPollCreationUtils").PollType.QUIZ,
        r = Array.from(e.entries()).map(function (e) {
          var t = e[0],
            r = e[1];
          return { option: t, optionVoteCount: n ? 0 : r.count };
        });
      return { pollVotes: r };
    }
    l.generatePollVotesSnapshotFromPoll = e;
  },
  98,
);

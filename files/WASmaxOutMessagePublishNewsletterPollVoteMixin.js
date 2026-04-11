__d(
  "WASmaxOutMessagePublishNewsletterPollVoteMixin",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypePollVoteMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.voteElementValue,
        n = o("WASmaxJsx").smax("vote", null, t);
      return n;
    }
    function s(t) {
      var n = t.voteArgs,
        r = o(
          "WASmaxOutMessagePublishContentTypePollVoteMixin",
        ).mergeContentTypePollVoteMixin(
          o("WASmaxJsx").smax(
            "message",
            null,
            o("WASmaxJsx").smax(
              "votes",
              null,
              o("WASmaxChildren").REPEATED_CHILD(e, n, 0, 1e3),
            ),
          ),
          t,
        );
      return r;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeNewsletterPollVoteVotesVote = e),
      (l.mergeNewsletterPollVoteMixin = u));
  },
  98,
);

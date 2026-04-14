__d(
  "useWAWebPollVotesToResend",
  [
    "WAWebFrontendMsgGetters",
    "WAWebFrontendNewsletterPollVotesGetters",
    "WAWebFrontendPollVoteGetters",
    "WAWebNewsletterPollVotesModel",
    "WAWebPollsPollVoteModel",
    "WAWebPollsUseMyVote",
    "useWAWebNewsletterPollVotesValues",
    "useWAWebPollVoteValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r,
        a =
          e != null ? o("WAWebFrontendMsgGetters").getAsPollCreation(e) : null,
        i = o("WAWebPollsUseMyVote").useMyVote({
          pollCreationMsg: a,
          includeUnvote: !0,
        }),
        l = i instanceof o("WAWebPollsPollVoteModel").PollVote ? i : null,
        s =
          i instanceof o("WAWebNewsletterPollVotesModel").NewsletterPollVotes
            ? i
            : null,
        u =
          (t = o(
            "useWAWebNewsletterPollVotesValues",
          ).useOptionalNewsletterPollVotesValues(s == null ? void 0 : s.id, [
            o("WAWebFrontendNewsletterPollVotesGetters").getIsFailed,
          ])) == null
            ? void 0
            : t[0],
        c =
          (n = o("useWAWebPollVoteValues").useOptionalPollVoteValues(
            l == null ? void 0 : l.id,
            [o("WAWebFrontendPollVoteGetters").getIsFailed],
          )) == null
            ? void 0
            : n[0],
        d = (r = u != null ? u : c) != null ? r : !1,
        m = d && i != null ? [i] : [];
      return m;
    }
    l.default = e;
  },
  98,
);

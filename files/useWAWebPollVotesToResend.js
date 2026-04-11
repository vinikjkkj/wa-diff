__d(
  "useWAWebPollVotesToResend",
  [
    "WAWebFrontendMsgGetters",
    "WAWebFrontendNewsletterPollVotesGetters",
    "WAWebFrontendPollVoteGetters",
    "WAWebNewsletterPollVotesModel",
    "WAWebPollsPollVoteModel",
    "WAWebPollsUseMyVote",
    "react-compiler-runtime",
    "useWAWebNewsletterPollVotesValues",
    "useWAWebPollVoteValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r,
        a = o("react-compiler-runtime").c(7),
        i;
      a[0] !== e
        ? ((i =
            e != null
              ? o("WAWebFrontendMsgGetters").getAsPollCreation(e)
              : null),
          (a[0] = e),
          (a[1] = i))
        : (i = a[1]);
      var l = i,
        s;
      a[2] !== l
        ? ((s = { pollCreationMsg: l, includeUnvote: !0 }),
          (a[2] = l),
          (a[3] = s))
        : (s = a[3]);
      var u = o("WAWebPollsUseMyVote").useMyVote(s),
        c = u instanceof o("WAWebPollsPollVoteModel").PollVote ? u : null,
        d =
          u instanceof o("WAWebNewsletterPollVotesModel").NewsletterPollVotes
            ? u
            : null,
        m =
          (t = o(
            "useWAWebNewsletterPollVotesValues",
          ).useOptionalNewsletterPollVotesValues(d == null ? void 0 : d.id, [
            o("WAWebFrontendNewsletterPollVotesGetters").getIsFailed,
          ])) == null
            ? void 0
            : t[0],
        p =
          (n = o("useWAWebPollVoteValues").useOptionalPollVoteValues(
            c == null ? void 0 : c.id,
            [o("WAWebFrontendPollVoteGetters").getIsFailed],
          )) == null
            ? void 0
            : n[0],
        _ = (r = m != null ? m : p) != null ? r : !1,
        f;
      a[4] !== u || a[5] !== _
        ? ((f = _ && u != null ? [u] : []), (a[4] = u), (a[5] = _), (a[6] = f))
        : (f = a[6]);
      var g = f;
      return g;
    }
    l.default = e;
  },
  98,
);

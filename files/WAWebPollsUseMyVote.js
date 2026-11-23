__d(
  "WAWebPollsUseMyVote",
  [
    "WAWebNewsletterPollVotesGetters",
    "WAWebNewsletterPollVotesModel",
    "WAWebNewsletterPollVotesModelCollection",
    "WAWebPollVoteGetters",
    "WAWebPollsPollVoteCollection",
    "WAWebPollsPollVoteModel",
    "WAWebUserUtils",
    "WAWebWid",
    "useWAWebEventTargetValue",
    "useWAWebNewsletterPollVotesValues",
    "useWAWebPollVoteValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        a = e.includeUnvote,
        i = e.pollCreationMsg,
        l = i == null ? void 0 : i.id,
        u = s(l),
        c = o("WAWebUserUtils").getMeLidUserOrThrow(),
        d = r("useWAWebEventTargetValue")(
          u,
          ["add", "remove", "reset"],
          function () {
            if (
              u instanceof
              o("WAWebPollsPollVoteCollection").GroupedPollVoteCollection
            )
              return u.getVoteFromSenderAddressingModeInsensitive(c);
            if (l != null) return u == null ? void 0 : u.get(l);
          },
        ),
        m = d instanceof o("WAWebPollsPollVoteModel").PollVote ? d : null,
        p =
          d instanceof o("WAWebNewsletterPollVotesModel").NewsletterPollVotes
            ? d
            : null,
        _ =
          (t = o(
            "useWAWebNewsletterPollVotesValues",
          ).useOptionalNewsletterPollVotesValues(p == null ? void 0 : p.id, [
            o("WAWebNewsletterPollVotesGetters").getIsUnvote,
          ])) != null
            ? t
            : [],
        f = _[0],
        g =
          (n = o("useWAWebPollVoteValues").useOptionalPollVoteValues(
            m == null ? void 0 : m.id,
            [o("WAWebPollVoteGetters").getIsUnvote],
          )) != null
            ? n
            : [],
        h = g[0],
        y = f != null ? f : h;
      return d == null || (y === !0 && !a) ? null : d;
    }
    function s(e) {
      if (e == null) return null;
      var t = r("WAWebWid").isNewsletter(e == null ? void 0 : e.remote);
      return t
        ? o("WAWebNewsletterPollVotesModelCollection")
            .NewsletterPollVotesModelCollection
        : o(
            "WAWebPollsPollVoteCollection",
          ).PollVoteCollection.getForParentAddressingModeInsensitive([e])[0];
    }
    l.useMyVote = e;
  },
  98,
);

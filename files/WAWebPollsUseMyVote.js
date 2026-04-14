__d(
  "WAWebPollsUseMyVote",
  [
    "WAWebNewsletterPollVotesModel",
    "WAWebNewsletterPollVotesModelCollection",
    "WAWebPollVoteGetters",
    "WAWebPollsPollVoteCollection",
    "WAWebPollsPollVoteModel",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
    "useWAWebPollVoteValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        a,
        i = e.includeUnvote,
        l = e.pollCreationMsg,
        u =
          (t = o("useWAWebModelValues").useOptionalModelValues(l, ["id"])) ==
          null
            ? void 0
            : t.id,
        c = s(u),
        d = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        m = r("useWAWebEventTargetValue")(c, "add remove reset", function () {
          if (
            c instanceof
            o("WAWebPollsPollVoteCollection").GroupedPollVoteCollection
          )
            return c.getVoteFromSenderAddressingModeInsensitive(d);
          if (u != null) return c == null ? void 0 : c.get(u);
        }),
        p = m instanceof o("WAWebPollsPollVoteModel").PollVote ? m : null,
        _ =
          m instanceof o("WAWebNewsletterPollVotesModel").NewsletterPollVotes
            ? m
            : null,
        f =
          (n = o("useWAWebModelValues").useOptionalModelValues(_, [
            "isUnvote",
          ])) == null
            ? void 0
            : n.isUnvote,
        g =
          (a = o("useWAWebPollVoteValues").useOptionalPollVoteValues(
            p == null ? void 0 : p.id,
            [o("WAWebPollVoteGetters").getIsUnvote],
          )) == null
            ? void 0
            : a[0],
        h = f != null ? f : g;
      return m == null || (h === !0 && !i) ? null : m;
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

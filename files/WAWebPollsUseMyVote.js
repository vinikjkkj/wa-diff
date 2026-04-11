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
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
    "useWAWebPollVoteValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        a,
        i = o("react-compiler-runtime").c(6),
        l = e.includeUnvote,
        u = e.pollCreationMsg,
        c =
          (t = o("useWAWebModelValues").useOptionalModelValues(u, ["id"])) ==
          null
            ? void 0
            : t.id,
        d;
      i[0] !== c ? ((d = s(c)), (i[0] = c), (i[1] = d)) : (d = i[1]);
      var m = d,
        p;
      i[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()),
          (i[2] = p))
        : (p = i[2]);
      var _ = p,
        f;
      i[3] !== m || i[4] !== c
        ? ((f = function () {
            if (
              m instanceof
              o("WAWebPollsPollVoteCollection").GroupedPollVoteCollection
            )
              return m.getVoteFromSenderAddressingModeInsensitive(_);
            if (c != null) return m == null ? void 0 : m.get(c);
          }),
          (i[3] = m),
          (i[4] = c),
          (i[5] = f))
        : (f = i[5]);
      var g = r("useWAWebEventTargetValue")(m, "add remove reset", f),
        h = g instanceof o("WAWebPollsPollVoteModel").PollVote ? g : null,
        y =
          g instanceof o("WAWebNewsletterPollVotesModel").NewsletterPollVotes
            ? g
            : null,
        C =
          (n = o("useWAWebModelValues").useOptionalModelValues(y, [
            "isUnvote",
          ])) == null
            ? void 0
            : n.isUnvote,
        b =
          (a = o("useWAWebPollVoteValues").useOptionalPollVoteValues(
            h == null ? void 0 : h.id,
            [o("WAWebPollVoteGetters").getIsUnvote],
          )) == null
            ? void 0
            : a[0],
        v = C != null ? C : b;
      return g == null || (v === !0 && !l) ? null : g;
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

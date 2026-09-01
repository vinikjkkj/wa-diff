__d(
  "WAWebPollsUseMyVote",
  [
    "WAWebNewsletterPollVotesGetters",
    "WAWebNewsletterPollVotesModel",
    "WAWebNewsletterPollVotesModelCollection",
    "WAWebPollVoteGetters",
    "WAWebPollsPollVoteCollection",
    "WAWebPollsPollVoteModel",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebNewsletterPollVotesValues",
    "useWAWebPollVoteValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(6),
        i = e.includeUnvote,
        l = e.pollCreationMsg,
        u = l == null ? void 0 : l.id,
        c;
      a[0] !== u ? ((c = s(u)), (a[0] = u), (a[1] = c)) : (c = a[1]);
      var d = c,
        m;
      a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()), (a[2] = m))
        : (m = a[2]);
      var p = m,
        _;
      a[3] !== d || a[4] !== u
        ? ((_ = function () {
            if (
              d instanceof
              o("WAWebPollsPollVoteCollection").GroupedPollVoteCollection
            )
              return d.getVoteFromSenderAddressingModeInsensitive(p);
            if (u != null) return d == null ? void 0 : d.get(u);
          }),
          (a[3] = d),
          (a[4] = u),
          (a[5] = _))
        : (_ = a[5]);
      var f = r("useWAWebEventTargetValue")(d, "add remove reset", _),
        g = f instanceof o("WAWebPollsPollVoteModel").PollVote ? f : null,
        h =
          f instanceof o("WAWebNewsletterPollVotesModel").NewsletterPollVotes
            ? f
            : null,
        y =
          (t = o(
            "useWAWebNewsletterPollVotesValues",
          ).useOptionalNewsletterPollVotesValues(h == null ? void 0 : h.id, [
            o("WAWebNewsletterPollVotesGetters").getIsUnvote,
          ])) != null
            ? t
            : [],
        C = y[0],
        b =
          (n = o("useWAWebPollVoteValues").useOptionalPollVoteValues(
            g == null ? void 0 : g.id,
            [o("WAWebPollVoteGetters").getIsUnvote],
          )) != null
            ? n
            : [],
        v = b[0],
        S = C != null ? C : v;
      return f == null || (S === !0 && !i) ? null : f;
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

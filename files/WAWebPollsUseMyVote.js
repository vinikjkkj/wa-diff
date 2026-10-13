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
        a = o("react-compiler-runtime").c(7),
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
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = ["add", "remove", "reset"]), (a[3] = _))
        : (_ = a[3]);
      var f;
      a[4] !== d || a[5] !== u
        ? ((f = function () {
            if (
              d instanceof
              o("WAWebPollsPollVoteCollection").GroupedPollVoteCollection
            )
              return d.getVoteFromSenderAddressingModeInsensitive(p);
            if (u != null) return d == null ? void 0 : d.get(u);
          }),
          (a[4] = d),
          (a[5] = u),
          (a[6] = f))
        : (f = a[6]);
      var g = r("useWAWebEventTargetValue")(d, _, f),
        h = g instanceof o("WAWebPollsPollVoteModel").PollVote ? g : null,
        y =
          g instanceof o("WAWebNewsletterPollVotesModel").NewsletterPollVotes
            ? g
            : null,
        C =
          (t = o(
            "useWAWebNewsletterPollVotesValues",
          ).useOptionalNewsletterPollVotesValues(y == null ? void 0 : y.id, [
            o("WAWebNewsletterPollVotesGetters").getIsUnvote,
          ])) != null
            ? t
            : [],
        b = C[0],
        v =
          (n = o("useWAWebPollVoteValues").useOptionalPollVoteValues(
            h == null ? void 0 : h.id,
            [o("WAWebPollVoteGetters").getIsUnvote],
          )) != null
            ? n
            : [],
        S = v[0],
        R = b != null ? b : S;
      return g == null || (R === !0 && !i) ? null : g;
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

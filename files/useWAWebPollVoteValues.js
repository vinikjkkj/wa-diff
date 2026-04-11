__d(
  "useWAWebPollVoteValues",
  ["WAWebPollsPollVoteCollection", "useWAWebCollectionValues"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("useWAWebCollectionValues").useCollectionValues(
        o("WAWebPollsPollVoteCollection").PollVoteCollection,
        e,
        t,
      );
    }
    function s(e, t) {
      return o("useWAWebCollectionValues").useOptionalCollectionValues(
        o("WAWebPollsPollVoteCollection").PollVoteCollection,
        e,
        t,
      );
    }
    ((l.usePollVoteValues = e), (l.useOptionalPollVoteValues = s));
  },
  98,
);

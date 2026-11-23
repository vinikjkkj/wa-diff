__d(
  "WAWebLoadPendingPollVoteResolver",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")(
          "WAWebResolvePendingPollVotesForAddedOptions",
        )
          .__setRef("WAWebLoadPendingPollVoteResolver")
          .load();
      }, "WAWebResolvePendingPollVotesForAddedOptions"),
      s = e;
    l.default = s;
  },
  98,
);

__d(
  "WAWebLoadPendingPollVoteResolver",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebResolvePendingPollVotesForAddedOptions",
          )
            .__setRef("WAWebLoadPendingPollVoteResolver")
            .load();
        }),
        "WAWebResolvePendingPollVotesForAddedOptions",
      ),
      s = e;
    l.default = s;
  },
  98,
);

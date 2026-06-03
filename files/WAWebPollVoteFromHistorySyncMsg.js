__d(
  "WAWebPollVoteFromHistorySyncMsg",
  [
    "WAWebPollsParseWebMsgInfoPollUpdates",
    "WAWebPollsVoteDataUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebPollsParseWebMsgInfoPollUpdates")
            .parseWebMsgInfoPollUpdates(e)
            .then(function (e) {
              return e.map(
                o("WAWebPollsVoteDataUtils").voteDataToPollVoteMsgData,
              );
            });
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);

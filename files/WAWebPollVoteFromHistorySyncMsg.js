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
          var t = yield o(
            "WAWebPollsParseWebMsgInfoPollUpdates",
          ).parseWebMsgInfoPollUpdates(e);
          return t.map(function (e) {
            var t = e.pollUpdateMessageMetadata,
              n = e.voteData;
            return babelHelpers.extends(
              {},
              o("WAWebPollsVoteDataUtils").voteDataToPollVoteMsgData(n),
              { pollUpdateMessageMetadata: t },
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

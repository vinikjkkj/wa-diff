__d(
  "WAWebPollVoteFromHistorySyncMsg",
  ["WAWebPollsParseWebMsgInfoPollUpdates", "WAWebPollsVoteDataUtils"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      return o("WAWebPollsParseWebMsgInfoPollUpdates")
        .parseWebMsgInfoPollUpdates(e)
        .then(function (e) {
          return e.map(o("WAWebPollsVoteDataUtils").voteDataToPollVoteMsgData);
        });
    }
    l.default = e;
  },
  98,
);

__d(
  "WAWebPollVoteFromHistorySyncMsg",
  ["WAWebPollsParseWebMsgInfoPollUpdates", "WAWebPollsVoteDataUtils"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await o(
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
    }
    l.default = e;
  },
  98,
);

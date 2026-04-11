__d(
  "WAWebGeneratePollResultSnapshotMessageProto",
  ["WAWebPollCreationUtils", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        r = e.msgContext,
        a = n.pollName;
      if (r === "quoted")
        return {
          pollResultSnapshotMessage: { name: a, pollVotes: [], contextInfo: t },
        };
      var i = o("WAWebPollCreationUtils").getPollTypeAsE2EValue(n.pollType),
        l = n.pollVotesSnapshot,
        s = l.pollVotes.map(function (e) {
          var t = e.option,
            n = e.optionVoteCount;
          return {
            optionName: t.name,
            optionVoteCount:
              i === o("WAWebProtobufsE2E.pb").Message$PollType.QUIZ ? 0 : n,
          };
        }),
        u = { name: a, pollVotes: s, contextInfo: t };
      return i === o("WAWebProtobufsE2E.pb").Message$PollType.QUIZ
        ? {
            pollResultSnapshotMessageV3: babelHelpers.extends({}, u, {
              pollType: i,
            }),
          }
        : { pollResultSnapshotMessage: u };
    }
    l.default = e;
  },
  98,
);

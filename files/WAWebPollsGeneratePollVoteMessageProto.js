__d(
  "WAWebPollsGeneratePollVoteMessageProto",
  ["WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json,
        n = {
          pollCreationMessageKey: o("WAWebE2EProtoUtils").encodeKey(
            t.pollUpdateParentKey,
          ),
          vote: t.encPollVote,
          senderTimestampMs: t.senderTimestampMs,
        };
      return { pollUpdateMessage: n };
    }
    l.default = e;
  },
  98,
);

__d(
  "WAWebPollsProtobufConversion",
  ["WALongInt", "WANullthrows", "WAWebPollsCreateOptionLocalIdMap"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = await o(
          "WAWebPollsCreateOptionLocalIdMap",
        ).createOptionLocalIdMap(t),
        r = e.selectedOptionLocalIds.map(n.getHashForLocalId);
      return { selectedOptions: r.length === 0 ? null : r };
    }
    function s(e) {
      var t = e.ack,
        n = e.optionLocalIdMap,
        a = e.parentMsgKey,
        i = e.pollVoteMsgKey,
        l = e.read,
        s = e.sender,
        u = e.senderTimestampMs,
        c = e.t,
        d = e.voteProtobuf;
      return {
        msgKey: i,
        parentMsgKey: r("WANullthrows")(a),
        selectedOptionLocalIds: d.selectedOptions.map(n.getLocalIdForHash),
        senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(u),
        t: o("WALongInt").maybeNumberOrThrowIfTooLarge(c),
        sender: s,
        ack: t,
        read: l,
      };
    }
    ((l.protobufFromVote = e), (l.voteFromProtobuf = s));
  },
  98,
);

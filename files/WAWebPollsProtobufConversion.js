__d(
  "WAWebPollsProtobufConversion",
  ["WALongInt", "WAWebPollsCreateOptionLocalIdMap", "nullthrows"],
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
        n = e.allowUnresolvedOptions,
        a = n === void 0 ? !1 : n,
        i = e.optionLocalIdMap,
        l = e.parentMsgKey,
        s = e.pollVoteMsgKey,
        c = e.read,
        d = e.sender,
        m = e.senderTimestampMs,
        p = e.t,
        _ = e.voteProtobuf;
      return babelHelpers.extends(
        { msgKey: s, parentMsgKey: r("nullthrows")(l) },
        u(_.selectedOptions, i, a),
        {
          senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(m),
          t: o("WALongInt").maybeNumberOrThrowIfTooLarge(p),
          sender: d,
          ack: t,
          read: c,
        },
      );
    }
    function u(e, t, n) {
      if (!n) return { selectedOptionLocalIds: e.map(t.getLocalIdForHash) };
      var r = [],
        o = [];
      for (var a of e)
        t.includesHashes([a]) ? r.push(t.getLocalIdForHash(a)) : o.push(a);
      return o.length > 0
        ? { selectedOptionLocalIds: r, unresolvedOptionHashes: o }
        : { selectedOptionLocalIds: r };
    }
    ((l.protobufFromVote = e), (l.voteFromProtobuf = s));
  },
  98,
);

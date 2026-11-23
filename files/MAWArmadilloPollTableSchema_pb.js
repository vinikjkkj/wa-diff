__d(
  "MAWArmadilloPollTableSchema.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { OPEN: 0, FROZEN: 1 },
      u = {},
      c = {},
      d = {},
      m = {};
    ((u.name = "PollOptionProto"),
      (u.internalSpec = {
        optionText: [1, (e = o("WAProtoConst")).TYPES.STRING],
        voteAuthors: [2, e.FLAGS.REPEATED | e.TYPES.STRING],
      }),
      (c.name = "PollOptionsProto"),
      (c.internalSpec = {
        pollOptionHash: [1, e.TYPES.STRING],
        pollOption: [2, e.TYPES.MESSAGE, u],
      }),
      (d.name = "LatestSenderTimestampsMsProto"),
      (d.internalSpec = {
        author: [1, e.TYPES.STRING],
        latestSenderTimestampMs: [2, e.TYPES.INT64],
      }),
      (m.name = "PollTableSchemaProto"),
      (m.internalSpec = {
        chatJid: [1, e.TYPES.STRING],
        encKey: [2, e.TYPES.BYTES],
        pollAuthor: [3, e.TYPES.STRING],
        pollStanzaId: [4, e.TYPES.STRING],
        pollOptions: [5, e.FLAGS.REPEATED | e.TYPES.MESSAGE, c],
        pollParticipantCount: [6, e.TYPES.UINT32],
        pollState: [7, e.TYPES.ENUM, s],
        selectableOptionsCount: [8, e.TYPES.UINT32],
        title: [9, e.TYPES.STRING],
        latestSenderTimestampsMs: [10, e.FLAGS.REPEATED | e.TYPES.MESSAGE, d],
      }),
      (l.POLL_STATE = s),
      (l.PollOptionProtoSpec = u),
      (l.PollOptionsProtoSpec = c),
      (l.LatestSenderTimestampsMsProtoSpec = d),
      (l.PollTableSchemaProtoSpec = m));
  },
  98,
);

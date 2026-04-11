__d(
  "WAWebProtobufsGroupHistory.pb",
  [
    "WAProtoConst",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsProtocol.pb",
    "WAWebProtobufsWeb.pb",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {},
      c = {},
      d = {},
      m = {},
      p = {};
    ((u.name = "GroupHistory"),
      (u.internalSpec = {
        messages: [
          1,
          (e = o("WAProtoConst")).FLAGS.REPEATED | e.TYPES.MESSAGE,
          (s = o("WAWebProtobufsWeb.pb")).WebMessageInfoSpec,
        ],
        uncountedAssociatedMessageLists: [
          2,
          e.FLAGS.REPEATED | e.TYPES.MESSAGE,
          c,
        ],
        commentMessages: [
          3,
          e.FLAGS.REPEATED | e.TYPES.MESSAGE,
          s.WebMessageInfoSpec,
        ],
        outOfWindowPinnedMessages: [
          4,
          e.FLAGS.REPEATED | e.TYPES.MESSAGE,
          s.WebMessageInfoSpec,
        ],
      }),
      (c.name = "UnCountedAssociatedMessageList"),
      (c.internalSpec = {
        messages: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, s.WebMessageInfoSpec],
        parentMessage: [
          2,
          e.TYPES.MESSAGE,
          o("WAWebProtobufsProtocol.pb").MessageKeySpec,
        ],
        associationType: [
          3,
          e.TYPES.ENUM,
          o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType,
        ],
      }),
      (d.name = "WebMessageInfoWithMessageBytes"),
      (d.internalSpec = {
        key: [
          1,
          e.TYPES.MESSAGE,
          o("WAWebProtobufsProtocol.pb").MessageKeySpec,
        ],
        messageBytes: [2, e.TYPES.BYTES],
      }),
      (m.name = "UnCountedAssociatedMessageListWithMessageBytes"),
      (m.internalSpec = {
        messages: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, d],
        parentMessage: [
          2,
          e.TYPES.MESSAGE,
          o("WAWebProtobufsProtocol.pb").MessageKeySpec,
        ],
      }),
      (p.name = "GroupHistoryWithMessageBytes"),
      (p.internalSpec = {
        messages: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, d],
        uncountedAssociatedMessageLists: [
          2,
          e.FLAGS.REPEATED | e.TYPES.MESSAGE,
          m,
        ],
        commentMessages: [3, e.FLAGS.REPEATED | e.TYPES.MESSAGE, d],
        outOfWindowPinnedMessages: [4, e.FLAGS.REPEATED | e.TYPES.MESSAGE, d],
      }),
      (l.GroupHistorySpec = u),
      (l.UnCountedAssociatedMessageListSpec = c),
      (l.WebMessageInfoWithMessageBytesSpec = d),
      (l.UnCountedAssociatedMessageListWithMessageBytesSpec = m),
      (l.GroupHistoryWithMessageBytesSpec = p));
  },
  98,
);

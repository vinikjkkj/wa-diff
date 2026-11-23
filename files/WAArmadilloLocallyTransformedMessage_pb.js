__d(
  "WAArmadilloLocallyTransformedMessage.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e = {},
      s = {};
    ((e.name = "LocallyTransformedMessage"),
      (e.internalSpec = {
        pollUpdateMessage: [1, o("WAProtoConst").TYPES.MESSAGE, s],
        __oneofs__: { content: ["pollUpdateMessage"] },
      }),
      (s.name = "LocallyTransformedMessage$PollUpdateAdminMessage"),
      (s.internalSpec = {
        pollCreationMessageId: [1, o("WAProtoConst").TYPES.STRING],
        pollUpdateMessageId: [2, o("WAProtoConst").TYPES.STRING],
      }),
      (l.LocallyTransformedMessageSpec = e),
      (l.LocallyTransformedMessage$PollUpdateAdminMessageSpec = s));
  },
  98,
);

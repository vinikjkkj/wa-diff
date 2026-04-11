__d(
  "WAWebReactionsGenerateReactionMessageProto",
  ["WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json;
      return {
        reactionMessage: {
          key: o("WAWebE2EProtoUtils").encodeKey(t.reactionParentKey),
          text: t.reactionText,
          senderTimestampMs: t.reactionTimestamp,
        },
      };
    }
    l.default = e;
  },
  98,
);

__d(
  "WAWebGenerateKeepInChatMessageProto",
  ["WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json;
      return {
        keepInChatMessage: {
          key: o("WAWebE2EProtoUtils").encodeKey(t.keptMessageKey),
          keepType: t.keepType,
          timestampMs: t.senderTimestampMs,
        },
      };
    }
    l.default = e;
  },
  98,
);

__d(
  "WAWebGeneratePinMessageProto",
  ["WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json;
      return {
        pinInChatMessage: {
          key: o("WAWebE2EProtoUtils").encodeKey(t.pinParentKey),
          type: t.pinMessageType,
          senderTimestampMs: t.pinSenderTimestampMs,
        },
        messageContextInfo: { messageAddOnDurationInSecs: t.pinExpiryDuration },
      };
    }
    l.default = e;
  },
  98,
);

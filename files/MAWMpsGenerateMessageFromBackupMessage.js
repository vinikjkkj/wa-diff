__d(
  "MAWMpsGenerateMessageFromBackupMessage",
  [
    "MAWProtobufDeserializers",
    "MpsErrors",
    "MpsTypes",
    "WmiErrorReport",
    "classifyProtobufDecodeError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      try {
        var n,
          a,
          i = e.decryptedProtobuf,
          l = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(i),
          s = l.payload().kind;
        if (s !== "messageApplication" && s !== "adminMessage")
          return (
            o("WmiErrorReport").reportWmiError(
              o("MpsErrors").MpsErrors.error(
                "unsupported_payload",
                "expected messageApplication or adminMessage, got %s",
                s,
              ),
            ),
            null
          );
        var u = (n = l.proto.metadata) == null ? void 0 : n.senderId,
          c = (a = l.proto.metadata) == null ? void 0 : a.messageId;
        return u != null && c != null
          ? {
              messageId: o("MpsTypes").toMessageId(c),
              payload: o("MpsTypes").toBytes(i),
              senderId: u,
              threadId: t,
              timestampMs: o("MpsTypes").toTimestamp(e.protobufTimestampMS),
            }
          : null;
      } catch (e) {
        throw r("classifyProtobufDecodeError")(
          e,
          "generate_message_from_backup",
        );
      }
    }
    l.generateMessage = e;
  },
  98,
);

__d(
  "MAWMpsGenerateSupplementalFromBackupMessage",
  [
    "MAWProtobufDeserializers",
    "MpsErrors",
    "MpsTypes",
    "WALongInt",
    "WmiErrorReport",
    "classifyProtobufDecodeError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      try {
        var t,
          n,
          a = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(e);
        if (a.payload().kind !== "messageApplication")
          return (
            o("WmiErrorReport").reportWmiError(
              o("MpsErrors").MpsErrors.error(
                "unsupported_payload",
                "expected messageApplication, got %s",
                a.payload().kind,
              ),
            ),
            null
          );
        var i = (t = a.proto.metadata) == null ? void 0 : t.messageId,
          l = (n = a.proto.metadata) == null ? void 0 : n.timestampMs;
        return i != null && l != null
          ? {
              messageId: o("MpsTypes").toMessageId(i),
              payload: o("MpsTypes").toBytes(e),
              timestampMs: o("MpsTypes").toTimestamp(
                o("WALongInt").numberOrThrowIfTooLarge(l),
              ),
            }
          : null;
      } catch (e) {
        throw r("classifyProtobufDecodeError")(
          e,
          "generate_supplemental_from_backup",
        );
      }
    }
    l.generateSupplemental = e;
  },
  98,
);

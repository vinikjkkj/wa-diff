__d(
  "WAWebParseAIMetadataOperationProto",
  [
    "WAWebParseBizAIMetadataSyncProto",
    "WAWebParseHatchMetadataSyncProto",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.messageProtobuf.protocolMessage;
      if (
        t == null ||
        t.type !==
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .AI_METADATA_OPERATION
      )
        return null;
      var n = t.aiMetadataOperation;
      return (n == null ? void 0 : n.bizAiMetadataSync) != null
        ? r("WAWebParseBizAIMetadataSyncProto")(e)
        : r("WAWebParseHatchMetadataSyncProto")(e, n);
    }
    l.default = e;
  },
  98,
);

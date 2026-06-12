__d(
  "WAWebGenerateHatchMetadataSyncProto",
  [
    "WATimeUtils",
    "WAWebHatchMetadataOperationEncoder",
    "WAWebProtobufsE2E.pb",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.json,
        n = t.hatchMetadataSync;
      if (n == null || n.type !== "req")
        throw r("err")(
          "Missing req-typed hatchMetadataSync for hatch_metadata_sync message",
        );
      return {
        protocolMessage: {
          type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .AI_METADATA_OPERATION,
          aiMetadataOperation: {
            hatchMetadataSync: {
              data: o("WAWebHatchMetadataOperationEncoder").encodeHatchRequest(
                n.request,
              ),
              requestId: n.requestId,
              timestampMs: o("WATimeUtils").unixTimeMs(),
            },
          },
        },
      };
    }
    l.default = e;
  },
  98,
);

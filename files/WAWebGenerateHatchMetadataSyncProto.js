__d(
  "WAWebGenerateHatchMetadataSyncProto",
  [
    "WATimeUtils",
    "WAWebHatchMetadataOperationEncoder",
    "WAWebProtobufsE2E.pb",
    "cr:7454",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.json,
        a = t.hatchMetadataSync;
      if (a == null || a.type !== "req")
        throw r("err")(
          "Missing req-typed hatchMetadataSync for hatch_metadata_sync message",
        );
      var i = o("WAWebHatchMetadataOperationEncoder").encodeHatchRequest(
        a.request,
      );
      return (
        n("cr:7454") == null ||
          n("cr:7454").recordOutbound(a.request, a.requestId, i),
        {
          protocolMessage: {
            type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
              .AI_METADATA_OPERATION,
            aiMetadataOperation: {
              hatchMetadataSync: {
                data: i,
                requestId: a.requestId,
                timestampMs: o("WATimeUtils").unixTimeMs(),
              },
            },
          },
        }
      );
    }
    l.default = e;
  },
  98,
);

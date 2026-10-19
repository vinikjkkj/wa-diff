__d(
  "WAWebGenerateHatchProtocolMessage",
  ["WATimeUtils", "WAWebHatchMetadataOperationEncoder", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        protocolMessage: {
          type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .AI_METADATA_OPERATION,
          aiMetadataOperation: {
            hatchMetadataSync: {
              data: o("WAWebHatchMetadataOperationEncoder").encodeHatchRequest(
                e.request,
              ),
              requestId: e.requestId,
              timestampMs: o("WATimeUtils").unixTimeMs(),
            },
          },
        },
      };
    }
    l.generateHatchProtocolMessage = e;
  },
  98,
);

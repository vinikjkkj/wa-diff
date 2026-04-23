__d(
  "WAWebGenerateAiMediaCollectionProtocolMsg",
  ["WAWebProtobufsE2E.pb", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json,
        n = t.aiMediaCollectionInfo;
      if (
        n == null ||
        n.expectedMediaCount == null ||
        n.hasGlobalCaption == null
      )
        throw r("err")(
          "Missing required parent envelope fields for ai media collection message",
        );
      return {
        protocolMessage: {
          type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .AI_MEDIA_COLLECTION_MESSAGE,
          aiMediaCollectionMessage: {
            collectionId: n.collectionId,
            expectedMediaCount: n.expectedMediaCount,
            hasGlobalCaption: n.hasGlobalCaption,
          },
        },
      };
    }
    l.default = e;
  },
  98,
);

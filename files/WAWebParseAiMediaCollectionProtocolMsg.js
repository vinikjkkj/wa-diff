__d(
  "WAWebParseAiMediaCollectionProtocolMsg",
  ["WALogger", "WAWebMsgType", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = t.baseMessage,
        r = t.messageProtobuf,
        a = r.protocolMessage;
      if (a == null) return null;
      var i = a.aiMediaCollectionMessage,
        l = a.type;
      if (
        l !==
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .AI_MEDIA_COLLECTION_MESSAGE ||
        i == null
      )
        return null;
      var s = i.collectionId,
        u = i.expectedMediaCount,
        c = i.hasGlobalCaption;
      return s == null
        ? (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[ai_media_collection] parent envelope missing collectionId; dropping message",
                ])),
            )
            .sendLogs("ai-media-collection-parse-missing-collection-id"),
          null)
        : {
            msgData: babelHelpers.extends({}, n, {
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              kind: o("WAWebMsgType").MsgKind.AiMediaCollection,
              subtype: "ai_media_collection",
              aiMediaCollectionInfo: {
                collectionId: s,
                expectedMediaCount: u,
                hasGlobalCaption: c,
              },
            }),
            contextInfo: null,
          };
    }
    l.default = s;
  },
  98,
);

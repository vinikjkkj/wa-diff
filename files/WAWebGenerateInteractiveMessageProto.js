__d(
  "WAWebGenerateInteractiveMessageProto",
  [
    "WAWebE2EProtoUtils",
    "WAWebGenerateDocumentMessageProto",
    "WAWebGenerateImageMessageProto",
    "WAWebGenerateVideoMessageProto",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInteractiveMessagesNativeFlowName",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        a = e.mediaMetadata,
        i;
      if (n.interactiveHeader) {
        if (
          ((i = {
            title: n.interactiveHeader.title,
            subtitle: n.interactiveHeader.subtitle,
            hasMediaAttachment: n.interactiveHeader.hasMediaAttachment,
          }),
          n.interactiveHeader.thumbnail)
        )
          i = babelHelpers.extends({}, i, {
            jpegThumbnail: o("WAWebE2EProtoUtils").encodeBytes(
              n.interactiveHeader.thumbnail,
            ),
          });
        else if (n.interactiveHeader.mediaType)
          switch (n.interactiveHeader.mediaType) {
            case o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.VIDEO: {
              var l = r("WAWebGenerateVideoMessageProto")({
                json: n,
                mediaMetadata: a,
                contextInfo: t,
              }).videoMessage;
              i = babelHelpers.extends({}, i, {
                videoMessage: babelHelpers.extends({}, l, { caption: void 0 }),
              });
              break;
            }
            case o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.DOCUMENT:
              i = babelHelpers.extends({}, i, {
                documentMessage: r("WAWebGenerateDocumentMessageProto")({
                  json: n,
                  mediaMetadata: a,
                  contextInfo: t,
                }).documentMessage,
              });
              break;
            case o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.IMAGE:
              i = babelHelpers.extends({}, i, {
                imageMessage: r("WAWebGenerateImageMessageProto")({
                  json: n,
                  mediaMetadata: a,
                  contextInfo: t,
                }).imageMessage,
              });
              break;
          }
      }
      var s = babelHelpers.extends(
          {
            body:
              n.caption ||
              n.nativeFlowName ===
                r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
                ? { text: n.caption }
                : void 0,
            footer: n.footer ? { text: n.footer } : void 0,
            header: i,
          },
          t && { contextInfo: t },
        ),
        u = o("WAWebE2EProtoUtils").getInteractiveMessageFieldNameForType(
          n.interactiveType,
        );
      return (u && (s[u] = n.interactivePayload), { interactiveMessage: s });
    }
    l.default = e;
  },
  98,
);

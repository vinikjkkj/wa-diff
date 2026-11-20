__d(
  "WAWebGenerateInteractiveMessageProto",
  [
    "WAWebE2EProtoUtils",
    "WAWebGenerateDocumentMessageProto",
    "WAWebGenerateImageMessageProto",
    "WAWebGenerateVideoMessageProto",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebStripBrazilPaymentState",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        a = e.mediaMetadata,
        i = e.msgContext,
        l;
      if (n.interactiveHeader) {
        if (
          ((l = {
            title: n.interactiveHeader.title,
            subtitle: n.interactiveHeader.subtitle,
            hasMediaAttachment: n.interactiveHeader.hasMediaAttachment,
          }),
          n.interactiveHeader.thumbnail)
        )
          l = babelHelpers.extends({}, l, {
            jpegThumbnail: o("WAWebE2EProtoUtils").encodeBytes(
              n.interactiveHeader.thumbnail,
            ),
          });
        else if (n.interactiveHeader.mediaType)
          switch (n.interactiveHeader.mediaType) {
            case o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.VIDEO: {
              var u = r("WAWebGenerateVideoMessageProto")({
                json: n,
                mediaMetadata: a,
                contextInfo: t,
              }).videoMessage;
              l = babelHelpers.extends({}, l, {
                videoMessage: babelHelpers.extends({}, u, { caption: void 0 }),
              });
              break;
            }
            case o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.DOCUMENT:
              l = babelHelpers.extends({}, l, {
                documentMessage: r("WAWebGenerateDocumentMessageProto")({
                  json: n,
                  mediaMetadata: a,
                  contextInfo: t,
                }).documentMessage,
              });
              break;
            case o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.IMAGE:
              l = babelHelpers.extends({}, l, {
                imageMessage: r("WAWebGenerateImageMessageProto")({
                  json: n,
                  mediaMetadata: a,
                  contextInfo: t,
                }).imageMessage,
              });
              break;
          }
      }
      var c = babelHelpers.extends(
        {
          body:
            n.caption ||
            n.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
              ? { text: n.caption }
              : void 0,
          footer: n.footer ? { text: n.footer } : void 0,
          header: l,
        },
        t && { contextInfo: t },
      );
      i === "quoted" &&
        n.bloksWidget != null &&
        (c.bloksWidget = n.bloksWidget);
      var d = o("WAWebE2EProtoUtils").getInteractiveMessageFieldNameForType(
        n.interactiveType,
      );
      return (d && (c[d] = s(n)), { interactiveMessage: c });
    }
    function s(e) {
      return e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW
        ? o("WAWebStripBrazilPaymentState").stripBrazilPaymentState(
            e.interactivePayload,
          )
        : e.interactivePayload;
    }
    l.default = e;
  },
  98,
);

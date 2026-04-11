__d(
  "WAWebGenerateNativeFlowButtonsMessageProto",
  [
    "WAWebButtonsMessageProtoUtils",
    "WAWebGenerateImageMessageProto",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        a = e.mediaMetadata,
        i = e.message,
        l = babelHelpers.extends({}, i);
      if (
        n.headerType ===
        o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.IMAGE
      ) {
        var s = r("WAWebGenerateImageMessageProto")({
            json: n,
            mediaMetadata: a,
            contextInfo: void 0,
          }),
          u = s.imageMessage;
        l = babelHelpers.extends({}, l, { imageMessage: u });
      }
      return (
        (l = o(
          "WAWebButtonsMessageProtoUtils",
        ).createDynamicReplyButtonsMessage(l, n, t)),
        (l.buttonsMessage = babelHelpers.extends({}, l.buttonsMessage, {
          buttons: n.nativeFlowButtons,
        })),
        l
      );
    }
    l.default = e;
  },
  98,
);

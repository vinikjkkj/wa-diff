__d(
  "WAWebBuildEditedMessageProto",
  ["WAWebE2EProtoGenerator", "WAWebMsgType", "err", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.contextInfo,
        a = e.json,
        i = !!(a.matchedText || a.description || a.title),
        l = (t = a.editMsgType) != null ? t : o("WAWebMsgType").MSG_TYPE.CHAT;
      switch (l) {
        case o("WAWebMsgType").MSG_TYPE.CHAT: {
          var s = babelHelpers.extends({}, a, {
            type: o("WAWebMsgType").MSG_TYPE.CHAT,
            subtype: i ? "url" : void 0,
          });
          return o("WAWebE2EProtoGenerator").getProtobufMessage(s, void 0, n);
        }
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          return { imageMessage: { caption: a.caption, contextInfo: n } };
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
          return { videoMessage: { caption: a.caption, contextInfo: n } };
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return {
            documentWithCaptionMessage: {
              message: {
                documentMessage: { caption: a.caption, contextInfo: n },
              },
            },
          };
        default:
          if (!r("gkx")("26258") && l === o("WAWebMsgType").MSG_TYPE.AUDIO)
            return { audioMessage: {} };
          throw r("err")("Unsupported edit msg type: " + l);
      }
    }
    l.buildEditedMessageProto = e;
  },
  98,
);

__d(
  "WAWebParseButtonsResponseMessageProto",
  ["WAWebE2EProtoUtils", "WAWebMsgType", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.buttonsResponseMessage;
      if (r != null) {
        if (
          r.type ===
          o("WAWebProtobufsE2E.pb").Message$ButtonsResponseMessage$Type
            .DISPLAY_TEXT
        ) {
          var a = babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.BUTTONS_RESPONSE,
            kind: o("WAWebMsgType").MsgKind.ButtonsResponse,
            selectedButtonId: r.selectedButtonId,
            body: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
              r.selectedDisplayText,
            ),
          });
          return { msgData: a, contextInfo: r.contextInfo };
        }
        return {
          msgData: babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            kind: o("WAWebMsgType").MsgKind.Unknown,
          }),
          contextInfo: r.contextInfo,
        };
      }
    }
    l.default = e;
  },
  98,
);

__d(
  "WAWebParseTemplateButtonReplyMessageProto",
  ["WAWebE2EProtoUtils", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.templateButtonReplyMessage;
      if (r != null) {
        var a = babelHelpers.extends({}, t, {
          type: o("WAWebMsgType").MSG_TYPE.TEMPLATE_BUTTON_REPLY,
          kind: o("WAWebMsgType").MsgKind.TemplateButtonReply,
          body: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
            r.selectedDisplayText,
          ),
          selectedIndex: r.selectedIndex,
          selectedId: r.selectedId,
          selectedCarouselCardIndex: r.selectedCarouselCardIndex,
        });
        return { msgData: a, contextInfo: r.contextInfo };
      }
    }
    l.default = e;
  },
  98,
);

__d(
  "WAWebQuotedMessageProtoUtils",
  ["WALogger", "WAWebE2EProtoParser", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = e.isCarouselCardReply,
        n = e.msgContext,
        r = e.quotedMsg;
      return o("WAWebE2EProtoParser").parseMsgProto({
        messageProtobuf: r,
        message: { type: o("WAWebMsgType").MSG_TYPE.UNKNOWN },
        msgContext: n === "history" ? "history_quoted" : "quoted",
        bizSource: t ? "quoted_carousel_card" : null,
      });
    }
    function u(t) {
      try {
        return s(t);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "failed parsing quoted message: ",
                  "",
                ])),
              t,
            )
            .sendLogs("parse-quoted-msg-error"),
          null
        );
      }
    }
    l.parseQuotedMessage = u;
  },
  98,
);

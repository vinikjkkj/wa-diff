__d(
  "WAWebQuotedMessageProtoUtils",
  [
    "WALogger",
    "WAWebDecodeJid",
    "WAWebE2EProtoParser",
    "WAWebMsgType",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = e.contextInfo,
        n = e.isCarouselCardReply,
        a = e.msgContext,
        i = e.quotedMsg,
        l = o("WAWebDecodeJid").decodeJid(t.participant);
      return o("WAWebE2EProtoParser").parseMsgProto({
        messageProtobuf: i,
        message: { type: o("WAWebMsgType").MSG_TYPE.UNKNOWN },
        msgContext: a === "history" ? "history_quoted" : "quoted",
        quotedMsgSender: l instanceof r("WAWebWid") ? l : null,
        bizSource: n ? "quoted_carousel_card" : null,
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

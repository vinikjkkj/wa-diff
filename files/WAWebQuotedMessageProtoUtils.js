__d(
  "WAWebQuotedMessageProtoUtils",
  [
    "WALogger",
    "WAWebE2EProtoParser",
    "WAWebGetPlatformFromStanzaId",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
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
    function c(t) {
      try {
        var n = u(t);
        return (d(t, n), n);
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
    function d(e, t) {
      var n,
        r,
        a = e.contextInfo,
        i = e.msgContext,
        l = e.quotedMsg,
        u = e.targetMessageKey,
        c = l.conversation,
        d = l.imageMessage,
        m = l.videoMessage;
      if (c != null) {
        var p = Object.entries(l)
          .filter(function (e) {
            var t = e[0],
              n = e[1];
            return n != null && !t.startsWith("$$");
          })
          .map(function (e) {
            var t = e[0];
            return t;
          })
          .sort();
        if (
          p.some(function (e) {
            return e !== "conversation" && e !== "messageContextInfo";
          })
        ) {
          var _ = (n = d != null ? d : m) == null ? void 0 : n.caption,
            f = _ == null ? "no_caption" : String(_ === c),
            g = a.stanzaId;
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "parseQuotedMessage: plain text next to other content, fields: ",
                  ", parsed: ",
                  ", msgContext: ",
                  ", replySender: ",
                  ", quotedSender: ",
                  ", replyFromMe: ",
                  ", group: ",
                  ", forwarded: ",
                  ", quotedType: ",
                  ", captionMatchesText: ",
                  "",
                ])),
              p.join(","),
              (r = t == null ? void 0 : t.type) != null ? r : "null",
              i,
              u != null
                ? String(
                    o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(
                      u.id,
                    ),
                  )
                : "none",
              g != null
                ? String(
                    o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(
                      g,
                    ),
                  )
                : "none",
              String(u == null ? void 0 : u.fromMe),
              String(u == null ? void 0 : u.remote.isGroup()),
              String(a.isForwarded === !0),
              String(a.quotedType),
              f,
            )
            .sendLogs("parse-quoted-msg-plain-text-and-other", {
              sampling: 0.01,
            });
        }
      }
    }
    l.parseQuotedMessage = c;
  },
  98,
);

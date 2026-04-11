__d(
  "WAWebButtonsMessageProtoUtils",
  [
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebParseDocumentMessageProto",
    "WAWebParseImageMessageProto",
    "WAWebParseLocationMessageProto",
    "WAWebParseVideoMessageProto",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.buttonsMessage,
        a = e.msgContext,
        i = n.contentText,
        l = n.documentMessage,
        s = n.footerText,
        u = n.headerType,
        c = n.imageMessage,
        d = n.locationMessage,
        m = n.text,
        p = n.videoMessage,
        _ = function () {
          var e = babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.CHAT,
            kind: o("WAWebMsgType").MsgKind.Chat,
            title:
              m == null
                ? t.title
                : o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(m),
            body:
              i == null
                ? t.body
                : o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(i),
          });
          if (c) {
            var n, s;
            return (n =
              (s = r("WAWebParseImageMessageProto")({
                messageProtobuf: { imageMessage: c },
                baseMessage: t,
                msgContext: a,
              })) == null
                ? void 0
                : s.msgData) != null
              ? n
              : e;
          }
          if (l) {
            var u, _;
            return (u =
              (_ = r("WAWebParseDocumentMessageProto")({
                messageProtobuf: { documentMessage: l },
                baseMessage: t,
                msgContext: a,
              })) == null
                ? void 0
                : _.msgData) != null
              ? u
              : e;
          }
          if (d) {
            var f, g;
            return (f =
              (g = r("WAWebParseLocationMessageProto")({
                messageProtobuf: {
                  locationMessage: babelHelpers.extends({}, d, {
                    name: void 0,
                    address: void 0,
                  }),
                },
                baseMessage: t,
                msgContext: a,
              })) == null
                ? void 0
                : g.msgData) != null
              ? f
              : e;
          }
          if (p) {
            var h, y;
            return (h =
              (y = r("WAWebParseVideoMessageProto")({
                messageProtobuf: { videoMessage: p },
                baseMessage: t,
                msgContext: a,
              })) == null
                ? void 0
                : y.msgData) != null
              ? h
              : e;
          }
          return e;
        },
        f = _();
      return babelHelpers.extends({}, f, {
        headerType: u,
        caption:
          i != null
            ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(i)
            : f.caption,
        footer:
          s != null
            ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(s)
            : f.footer,
      });
    }
    function s(e, t, n) {
      var r = e.documentMessage,
        a = e.imageMessage,
        i = e.locationMessage,
        l = e.videoMessage;
      if (t.isForwarded && (r || a || i || l)) return e;
      var s = {
        buttons: t.isForwarded === !0 ? void 0 : t.dynamicReplyButtons,
        footerText: t.footer,
        contextInfo: n,
      };
      return (
        r
          ? ((s.documentMessage = r),
            (s.headerType = o(
              "WAWebProtobufsE2E.pb",
            ).Message$ButtonsMessage$HeaderType.DOCUMENT),
            (s.contentText = t.caption))
          : a
            ? ((s.imageMessage = a),
              (s.headerType = o(
                "WAWebProtobufsE2E.pb",
              ).Message$ButtonsMessage$HeaderType.IMAGE),
              (s.contentText = t.caption))
            : i
              ? ((s.locationMessage = i),
                (s.headerType = o(
                  "WAWebProtobufsE2E.pb",
                ).Message$ButtonsMessage$HeaderType.LOCATION),
                (s.contentText = t.caption))
              : l
                ? ((s.videoMessage = l),
                  (s.headerType = o(
                    "WAWebProtobufsE2E.pb",
                  ).Message$ButtonsMessage$HeaderType.VIDEO),
                  (s.contentText = t.caption))
                : t.title
                  ? ((s.text = t.title),
                    (s.headerType = o(
                      "WAWebProtobufsE2E.pb",
                    ).Message$ButtonsMessage$HeaderType.TEXT),
                    (s.contentText = t.body))
                  : ((s.contentText = t.body),
                    (s.headerType = o(
                      "WAWebProtobufsE2E.pb",
                    ).Message$ButtonsMessage$HeaderType.EMPTY)),
        { buttonsMessage: s }
      );
    }
    ((l.parseButtonsMessageProto = e),
      (l.createDynamicReplyButtonsMessage = s));
  },
  98,
);

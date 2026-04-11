__d(
  "WAWebParseProtocolMessageEditProto",
  [
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WAWebBotBaseGating",
    "WAWebE2EProtoParser",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = t.baseMessage,
        a = t.messageProtobuf,
        i = t.msgContext,
        l = a.protocolMessage;
      if (
        !(
          l == null ||
          (l == null ? void 0 : l.type) !==
            o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT
        ) &&
        !(i !== "relay" && i !== "outgoing")
      )
        try {
          var s,
            p,
            _,
            f =
              (s =
                (p = (_ = u(n, l, i)) != null ? _ : m(n, l, i)) != null
                  ? p
                  : c(n, l)) != null
                ? s
                : d(n, l, i, a.messageContextInfo);
          return f || null;
        } catch (t) {
          var g = r("getErrorSafe")(t);
          throw (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseProtocolMessageEditProto: error:",
                    ", stack: ",
                    "",
                  ])),
                g.name,
                g.stack,
              )
              .tags("messaging")
              .sendLogs("parseProtocolMessageEditProto: EditParseError"),
            g
          );
        }
    }
    function u(e, t, n) {
      var a,
        i,
        l =
          (a =
            (i = t.editedMessage) == null ||
            (i = i.groupMentionedMessage) == null
              ? void 0
              : i.message) != null
            ? a
            : t.editedMessage,
        s =
          !!(l != null && l.conversation) ||
          !!(l != null && l.extendedTextMessage);
      if (!s) return null;
      var u = o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(t.key, e),
        c = babelHelpers.extends(
          {},
          o("WAWebE2EProtoParser").parseMsgProto({
            messageProtobuf: r("WANullthrows")(l),
            message: e,
            msgContext: n,
          }),
          {
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.Protocol,
            subtype: "message_edit",
            editMsgType: o("WAWebMsgType").MSG_TYPE.CHAT,
            latestEditSenderTimestampMs: o(
              "WALongInt",
            ).maybeNumberOrThrowIfTooLarge(t.timestampMs),
            latestEditMsgKey: e.id,
            protocolMessageKey: u,
          },
        );
      return { msgData: c, contextInfo: null };
    }
    function c(e, t) {
      var n,
        r,
        a =
          (n =
            (r = t.editedMessage) == null ||
            (r = r.groupMentionedMessage) == null
              ? void 0
              : r.message) != null
            ? n
            : t.editedMessage,
        i,
        l,
        s;
      if (a != null && a.imageMessage)
        ((i = o("WAWebMsgType").MSG_TYPE.IMAGE),
          (l = a.imageMessage.caption),
          (s = a.imageMessage.contextInfo));
      else if (a != null && a.videoMessage)
        ((i = o("WAWebMsgType").MSG_TYPE.VIDEO),
          (l = a.videoMessage.caption),
          (s = a.videoMessage.contextInfo));
      else if (a != null && a.documentMessage)
        ((i = o("WAWebMsgType").MSG_TYPE.DOCUMENT),
          (l = a.documentMessage.caption),
          (s = a.documentMessage.contextInfo));
      else if (a != null && a.documentWithCaptionMessage) {
        var u, c;
        ((i = o("WAWebMsgType").MSG_TYPE.DOCUMENT),
          (l =
            (u = a.documentWithCaptionMessage) == null ||
            (u = u.message) == null ||
            (u = u.documentMessage) == null
              ? void 0
              : u.caption),
          (s =
            (c = a.documentWithCaptionMessage) == null ||
            (c = c.message) == null ||
            (c = c.documentMessage) == null
              ? void 0
              : c.contextInfo));
      }
      if (!i || l === "" || l == null) return null;
      var d = babelHelpers.extends({}, e, {
        type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
        kind: o("WAWebMsgType").MsgKind.Protocol,
        subtype: "message_edit",
        editMsgType: i,
        caption: l,
        latestEditSenderTimestampMs: o(
          "WALongInt",
        ).maybeNumberOrThrowIfTooLarge(t.timestampMs),
        latestEditMsgKey: e.id,
        protocolMessageKey: o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(t.key, e),
      });
      return { msgData: d, contextInfo: s };
    }
    function d(e, t, n, r) {
      var a,
        i = (a = t.editedMessage) == null ? void 0 : a.richResponseMessage;
      return i ? p(e, t, n, o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE, r) : null;
    }
    function m(e, t, n) {
      var r,
        a = t.editedMessage,
        i =
          (r = a == null ? void 0 : a.imageMessage) != null
            ? r
            : a == null
              ? void 0
              : a.videoMessage;
      return !i || !o("WAWebBotBaseGating").isLoadingMediaMessagesEnabled(e)
        ? null
        : p(e, t, n, o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA);
    }
    function p(e, t, n, a, i) {
      var l = o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(t.key, e),
        s = babelHelpers.extends(
          {},
          o("WAWebE2EProtoParser").parseMsgProto({
            messageProtobuf: babelHelpers.extends(
              {},
              r("WANullthrows")(t.editedMessage),
              i ? { messageContextInfo: i } : {},
            ),
            message: e,
            msgContext: n,
          }),
          {
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.Protocol,
            subtype: "message_edit",
            editMsgType: a,
            latestEditSenderTimestampMs: o(
              "WALongInt",
            ).maybeNumberOrThrowIfTooLarge(t.timestampMs),
            latestEditMsgKey: e.id,
            protocolMessageKey: l,
          },
        );
      return { msgData: s, contextInfo: null };
    }
    l.default = s;
  },
  98,
);

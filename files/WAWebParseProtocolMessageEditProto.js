__d(
  "WAWebParseProtocolMessageEditProto",
  [
    "WALogger",
    "WALongInt",
    "WAWebBotBaseGating",
    "WAWebE2EProtoParser",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebSpoilerGating",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t,
        n,
        r,
        o = e.editedMessage,
        a = (t = o) == null ? void 0 : t.spoilerMessage;
      return (
        a != null && (o = a.message),
        (n =
          (r = o) == null || (r = r.groupMentionedMessage) == null
            ? void 0
            : r.message) != null
          ? n
          : o
      );
    }
    function u(e) {
      var t, n;
      if (o("WAWebSpoilerGating").isSpoilerReceiverEnabled()) return !1;
      var r =
        (t = e.spoilerMessage) == null || (t = t.message) == null
          ? void 0
          : t.protocolMessage;
      if (
        (r == null ? void 0 : r.type) ===
        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT
      )
        return !0;
      var a = e.protocolMessage;
      return (
        a != null &&
        a.type ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT &&
        ((n = a.editedMessage) == null ? void 0 : n.spoilerMessage) != null
      );
    }
    function c(e) {
      return {
        msgData: babelHelpers.extends({}, e, {
          type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
          kind: o("WAWebMsgType").MsgKind.Unknown,
          futureproofType: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          futureproofSubtype: "message_edit",
        }),
        contextInfo: null,
      };
    }
    function d(t) {
      var n = t.baseMessage,
        a = t.messageProtobuf,
        i = t.msgContext;
      if (u(a)) return c(n);
      var l = a.protocolMessage;
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
            d,
            g,
            h =
              (s =
                (d = (g = m(n, l, i)) != null ? g : f(n, l, i)) != null
                  ? d
                  : p(n, l)) != null
                ? s
                : _(n, l, i, a.messageContextInfo);
          return h || null;
        } catch (t) {
          var y = r("getErrorSafe")(t);
          throw (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseProtocolMessageEditProto: error:",
                    ", stack: ",
                    "",
                  ])),
                y.name,
                y.stack,
              )
              .tags("messaging")
              .sendLogs("parseProtocolMessageEditProto: EditParseError"),
            y
          );
        }
    }
    function m(e, t, n) {
      var a = s(t),
        i =
          !!(a != null && a.conversation) ||
          !!(a != null && a.extendedTextMessage);
      if (!i) return null;
      var l = o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(t.key, e),
        u = babelHelpers.extends(
          {},
          o("WAWebE2EProtoParser").parseMsgProto({
            messageProtobuf: r("nullthrows")(a),
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
            protocolMessageKey: l,
          },
        );
      return { msgData: u, contextInfo: null };
    }
    function p(e, t) {
      var n = s(t),
        r,
        a,
        i;
      if (n != null && n.imageMessage)
        ((r = o("WAWebMsgType").MSG_TYPE.IMAGE),
          (a = n.imageMessage.caption),
          (i = n.imageMessage.contextInfo));
      else if (n != null && n.videoMessage)
        ((r = o("WAWebMsgType").MSG_TYPE.VIDEO),
          (a = n.videoMessage.caption),
          (i = n.videoMessage.contextInfo));
      else if (n != null && n.documentMessage)
        ((r = o("WAWebMsgType").MSG_TYPE.DOCUMENT),
          (a = n.documentMessage.caption),
          (i = n.documentMessage.contextInfo));
      else if (n != null && n.documentWithCaptionMessage) {
        var l, u;
        ((r = o("WAWebMsgType").MSG_TYPE.DOCUMENT),
          (a =
            (l = n.documentWithCaptionMessage) == null ||
            (l = l.message) == null ||
            (l = l.documentMessage) == null
              ? void 0
              : l.caption),
          (i =
            (u = n.documentWithCaptionMessage) == null ||
            (u = u.message) == null ||
            (u = u.documentMessage) == null
              ? void 0
              : u.contextInfo));
      }
      if (!r || a === "" || a == null) return null;
      var c = babelHelpers.extends({}, e, {
        type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
        kind: o("WAWebMsgType").MsgKind.Protocol,
        subtype: "message_edit",
        editMsgType: r,
        caption: a,
        latestEditSenderTimestampMs: o(
          "WALongInt",
        ).maybeNumberOrThrowIfTooLarge(t.timestampMs),
        latestEditMsgKey: e.id,
        protocolMessageKey: o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(t.key, e),
      });
      return { msgData: c, contextInfo: i };
    }
    function _(e, t, n, r) {
      var a,
        i = (a = t.editedMessage) == null ? void 0 : a.richResponseMessage;
      return i
        ? g({
            baseMessage: e,
            editMsgType: o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE,
            messageContextInfo: r,
            msgContext: n,
            protocolMessage: t,
          })
        : null;
    }
    function f(e, t, n) {
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
        : g({
            baseMessage: e,
            editMsgType: o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA,
            msgContext: n,
            protocolMessage: t,
          });
    }
    function g(e) {
      var t = e.baseMessage,
        n = e.editMsgType,
        a = e.messageContextInfo,
        i = e.msgContext,
        l = e.protocolMessage,
        s = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(
          l.key,
          t,
        ),
        u = babelHelpers.extends(
          {},
          o("WAWebE2EProtoParser").parseMsgProto({
            messageProtobuf: babelHelpers.extends(
              {},
              r("nullthrows")(l.editedMessage),
              a ? { messageContextInfo: a } : {},
            ),
            message: t,
            msgContext: i,
          }),
          {
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.Protocol,
            subtype: "message_edit",
            editMsgType: n,
            latestEditSenderTimestampMs: o(
              "WALongInt",
            ).maybeNumberOrThrowIfTooLarge(l.timestampMs),
            latestEditMsgKey: t.id,
            protocolMessageKey: s,
          },
        );
      return { msgData: u, contextInfo: null };
    }
    l.default = d;
  },
  98,
);

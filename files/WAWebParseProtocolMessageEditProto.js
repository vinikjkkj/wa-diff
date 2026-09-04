__d(
  "WAWebParseProtocolMessageEditProto",
  [
    "WALogger",
    "WALongInt",
    "WAWebBotBaseGating",
    "WAWebE2EProtoParser",
    "WAWebE2EProtoUtils",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebSpoilerGating",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3;
    function u(e) {
      for (var t = e.editedMessage, n = 0; n < s; n++) {
        var r = c(t);
        if (r == null) break;
        t = r;
      }
      return t;
    }
    function c(e) {
      if (e == null) return null;
      var t = e.associatedChildMessage,
        n = e.groupMentionedMessage,
        r = e.spoilerMessage;
      return t != null &&
        o(
          "WAWebMessageAssociationGatingUtils",
        ).isFutureproofAssociatedChildEnabled()
        ? t.message
        : r != null && o("WAWebSpoilerGating").isSpoilerReceiverEnabled()
          ? r.message
          : n == null
            ? void 0
            : n.message;
    }
    function d(e) {
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
    function m(e) {
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
    function p(t) {
      var n = t.baseMessage,
        a = t.messageProtobuf,
        i = t.msgContext;
      if (d(a)) return m(n);
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
            u,
            c,
            p =
              (s =
                (u = (c = _(n, l, i)) != null ? c : h(n, l, i)) != null
                  ? u
                  : f(n, l)) != null
                ? s
                : g(n, l, i, a.messageContextInfo);
          return p || null;
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
    function _(e, t, n) {
      var a = u(t),
        i =
          !!(a != null && a.conversation) ||
          !!(a != null && a.extendedTextMessage);
      if (!i) return null;
      var l = o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(t.key, e),
        s = babelHelpers.extends(
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
      return { msgData: s, contextInfo: null };
    }
    function f(e, t) {
      var n = u(t),
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
        var l, s;
        ((r = o("WAWebMsgType").MSG_TYPE.DOCUMENT),
          (a =
            (l = n.documentWithCaptionMessage) == null ||
            (l = l.message) == null ||
            (l = l.documentMessage) == null
              ? void 0
              : l.caption),
          (i =
            (s = n.documentWithCaptionMessage) == null ||
            (s = s.message) == null ||
            (s = s.documentMessage) == null
              ? void 0
              : s.contextInfo));
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
    function g(e, t, n, r) {
      var a,
        i = (a = t.editedMessage) == null ? void 0 : a.richResponseMessage;
      return i
        ? y({
            baseMessage: e,
            editMsgType: o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE,
            messageContextInfo: r,
            msgContext: n,
            protocolMessage: t,
          })
        : null;
    }
    function h(e, t, n) {
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
        : y({
            baseMessage: e,
            editMsgType: o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA,
            msgContext: n,
            protocolMessage: t,
          });
    }
    function y(e) {
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
    l.default = p;
  },
  98,
);

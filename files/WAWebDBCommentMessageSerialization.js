__d(
  "WAWebDBCommentMessageSerialization",
  [
    "WANullthrows",
    "WAWebDBMessageSerialization",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = babelHelpers.extends({}, e);
      return (
        o("WAWebDBMessageSerialization").movEncFieldToOpaqueData(t),
        babelHelpers.extends({}, t, {
          msgKey: t.id.toString(),
          parentMsgKey: t.parentMsgKey.toString(),
          sender: t.author.toString(),
        })
      );
    }
    function s(e) {
      var t;
      return {
        msgKey: e.id.toString(),
        sender: r("WANullthrows")(
          o("WAWebMsgGetters").getSender(e),
          "undefined sender",
        ).toString(),
        parentMsgKey: e.parentMsgKey.toString(),
        t: o("WAWebMsgGetters").getT(e),
        ack: (t = o("WAWebMsgGetters").getAck(e)) != null ? t : void 0,
        read: e.read,
        isOverwrittenByRevoke: !0,
        subtype: e.subtype,
        revokeTimestamp: e.revokeTimestamp,
        protocolMessageKey: e.protocolMessageKey.toString(),
      };
    }
    function u(e) {
      return {
        isPlaceholder: !0,
        msgKey: e.id.toString(),
        sender: r("WANullthrows")(
          o("WAWebMsgGetters").getSender(e),
          "undefined sender",
        ).toString(),
        parentMsgKey: e.parentMsgKey.toString(),
        read: e.read,
        t: o("WAWebMsgGetters").getT(e),
      };
    }
    function c(e) {
      var t,
        n = r("WAWebMsgKey").from(e.msgKey),
        a = r("WAWebMsgKey").from(e.parentMsgKey),
        i = babelHelpers.extends(
          { id: n, parentMsgKey: a, ack: e.ack, t: e.t },
          o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
            n,
            o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
          ),
          { viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE },
        );
      if (e.isOverwrittenByRevoke === !0) {
        var l;
        return babelHelpers.extends({}, i, {
          type: o("WAWebMsgType").MSG_TYPE.REVOKED,
          kind: o("WAWebMsgType").MsgKind.RevokedAddon,
          subtype: r("WANullthrows")(e.subtype),
          revokeAddonType: o("WAWebMsgType").MSG_TYPE.COMMENT,
          revokeTimestamp: (l = e.revokeTimestamp) != null ? l : void 0,
          protocolMessageKey: r("WAWebMsgKey").from(
            r("WANullthrows")(
              e.protocolMessageKey,
              "undefined protocolMessageKey",
            ),
          ),
        });
      }
      if (e.isPlaceholder === !0)
        return babelHelpers.extends({}, i, {
          type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
          kind: o("WAWebMsgType").MsgKind.PlaceholderAddon,
          realType: o("WAWebMsgType").MSG_TYPE.COMMENT,
        });
      var s = babelHelpers.extends({}, e);
      return (
        o("WAWebDBMessageSerialization").movFieldFromOpaqueDataBackToMsg(s),
        babelHelpers.extends({}, i, {
          type: o("WAWebMsgType").MSG_TYPE.COMMENT,
          kind: o("WAWebMsgType").MsgKind.CommentDecrypted,
          from: o("WAWebWidFactory").createUserWidOrThrow(s.sender),
          body: s.body,
          author: o("WAWebWidFactory").createUserWidOrThrow(s.sender),
          read: (t = e.read) != null ? t : !1,
        })
      );
    }
    ((l.dbRowFromCommentMessage = e),
      (l.dbRowFromRevokedMsgData = s),
      (l.dbRowFromPlaceholderAddon = u),
      (l.commentMessageFromDbRow = c));
  },
  98,
);

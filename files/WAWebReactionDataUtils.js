__d(
  "WAWebReactionDataUtils",
  [
    "WANullthrows",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebReactionsBEUtils",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        a,
        i = r("WAWebMsgKey").fromString(e.msgKey),
        l = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          i,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        s = l.author,
        u = l.from,
        c = l.to;
      return {
        id: i,
        to: c,
        from: u,
        author: s,
        type: o("WAWebMsgType").MSG_TYPE.REACTION,
        kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        reactionParentKey: r("WAWebMsgKey").fromString(e.parentMsgKey),
        reactionText: e.reactionText,
        reactionTimestamp: e.timestamp,
        t: (t = e.t) != null ? t : void 0,
        ack: (n = e.ack) != null ? n : void 0,
        read: (a = e.read) != null ? a : !1,
      };
    }
    function s(e) {
      var t;
      return {
        msgKey: e.id.toString(),
        parentMsgKey: e.reactionParentKey.toString(),
        senderUserJid: r("WANullthrows")(
          o("WAWebMsgGetters").getSender(e),
        ).toString(),
        reactionText: e.reactionText,
        timestamp: e.reactionTimestamp,
        t: o("WAWebMsgGetters").getT(e),
        ack: (t = o("WAWebMsgGetters").getAck(e)) != null ? t : void 0,
        orphan: 0,
        read: e.read,
      };
    }
    function u(e) {
      var t = e.id,
        n = e.reactionParentKey,
        r = e.reactionText,
        a = e.reactionTimestamp,
        i = e.sender,
        l = e.unread,
        s = o("WAWebWidFactory").asUserWidOrThrow(i),
        u = 0;
      return {
        msgKey: t.toString(),
        parentMsgKey: n.toString(),
        senderUserJid: s.toString(),
        reactionText:
          r != null ? r : o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT,
        timestamp: a,
        orphan: u,
        read: !l,
      };
    }
    ((l.reactionRowToReactionMsgData = e),
      (l.reactionMsgDataToReactionRow = s),
      (l.webMsgInfoReactionTypeToReactionsRow = u));
  },
  98,
);

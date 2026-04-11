__d(
  "WAWebNewsletterMsgStanzaAdapters",
  [
    "WAAckLevel",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterMsgEditUtils",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (n.addOnParentKey == null)
        throw r("err")("Reaction message without parent");
      return {
        id: e,
        reactionParentKey: n.addOnParentKey,
        type: o("WAWebMsgType").MSG_TYPE.REACTION,
        kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        t: t.t,
        from: t.from,
        to: t.to,
        serverId: t.serverId,
        isNewMsg: !1,
        ack: o("WAAckLevel").ACK.SENT,
        read: !1,
        reactionText: t.reactionCode,
        reactionTimestamp: t.t * 1e3,
      };
    }
    function s(e, t, n) {
      var a;
      if (n.addOnParentKey == null)
        throw r("err")("Reaction message without parent");
      return {
        id: e,
        t: t.t,
        from: t.from,
        to: t.to,
        serverId: t.serverId,
        isNewMsg: !1,
        ack: o("WAAckLevel").ACK.SENT,
        type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
        kind: o("WAWebMsgType").MsgKind.PollVoteDecrypted,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        subtype: "poll_vote",
        pollUpdateParentKey: n.addOnParentKey,
        selectedOptionLocalIds: (a = n.pollVotesAsLocalIds) != null ? a : [],
        senderTimestampMs: t.t * 1e3,
        read: !1,
      };
    }
    function u(e) {
      var t = e.baseMsgData,
        n = e.msg,
        a = e.msgContext,
        i = e.msgKey,
        l = e.parsingContext,
        s = o("WAWebViewMode.flow").ViewModeType.NEWSLETTER_TOMBSTONE;
      if (l === "history") {
        var u, c;
        return {
          id: new (r("WAWebMsgKey"))({
            remote: n.from,
            fromMe: n.isSender,
            id: n.id,
          }),
          from: n.from,
          to: n.isSender
            ? n.from
            : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          t: (u = a.metaOriginalMsgT) != null ? u : n.t,
          serverId: n.serverId,
          lastUpdateFromServerTs:
            (c = a.lastUpdateFromServerTs) != null ? c : void 0,
          type: "revoked",
          kind: o("WAWebMsgType").MsgKind.RevokedMessage,
          viewMode: s,
          revokeSender: n.from,
          subtype: "admin",
        };
      }
      return babelHelpers.extends({}, t, {
        serverId: n.serverId,
        id: new (r("WAWebMsgKey"))({
          remote: n.from,
          fromMe: n.isSender,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        }),
        type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
        kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
        subtype: "admin_revoke",
        protocolMessageKey: i,
        viewMode: s,
      });
    }
    function c(e, t, n) {
      return t !== "history"
        ? o("WAWebNewsletterMsgEditUtils").mapMsgToEditProtocolMsg(e, {
            latestEditSenderTimestampMs: n.latestEditSenderTimestampMs,
          })
        : e;
    }
    ((l.mapReactionMsgStanza = e),
      (l.mapPollVoteMsgStanza = s),
      (l.mapRevokeMsgStanza = u),
      (l.mapEditMsgStanza = c));
  },
  98,
);

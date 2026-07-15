__d(
  "WAWebExtractQuoteFieldsFromScheduledMsg",
  [
    "WAWebDecodeJid",
    "WAWebGetScheduledMsgContextInfo",
    "WAWebLidMigrationUtils",
    "WAWebQuotedMessageProtoUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebGetScheduledMsgContextInfo").getScheduledMsgContextInfo(
        e,
      );
      if (n == null) return {};
      var r = {},
        a = n.quotedMessage;
      a != null &&
        a.reactionMessage == null &&
        (r.quotedMsg = o("WAWebQuotedMessageProtoUtils").parseQuotedMessage({
          quotedMsg: a,
          msgContext: "relay",
          isCarouselCardReply: !1,
          contextInfo: n,
          targetMessageKey: t,
        }));
      var i = t.remote.isGroup();
      n.stanzaId != null && (r.quotedStanzaID = n.stanzaId);
      var l = s(n.participant);
      if (l != null)
        if (i && t.participant != null) {
          var u = o("WAWebLidMigrationUtils").toCommonAddressingMode(
              l,
              t.participant,
            ),
            c = u[0];
          r.quotedParticipant = c != null ? c : l;
        } else r.quotedParticipant = l;
      var d = s(n.remoteJid);
      (d != null && i && (r.quotedRemoteJid = d),
        n.groupSubject != null && (r.quotedGroupSubject = n.groupSubject));
      var m = s(n.parentGroupJid);
      return (
        m != null && (r.quotedParentGroupJid = m),
        n.quotedType != null && (r.quotedType = n.quotedType),
        r
      );
    }
    function s(e) {
      var t = o("WAWebDecodeJid").decodeJid(e);
      return typeof t == "string" ? null : t;
    }
    l.extractQuoteFieldsFromScheduledMsg = e;
  },
  98,
);

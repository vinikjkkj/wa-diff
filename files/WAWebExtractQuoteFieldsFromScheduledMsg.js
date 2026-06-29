__d(
  "WAWebExtractQuoteFieldsFromScheduledMsg",
  ["WAWebDecodeJid", "WAWebLidMigrationUtils", "WAWebQuotedMessageProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r = (n = e.extendedTextMessage) == null ? void 0 : n.contextInfo;
      if (r == null) return {};
      var a = {},
        i = r.quotedMessage;
      i != null &&
        i.reactionMessage == null &&
        (a.quotedMsg = o("WAWebQuotedMessageProtoUtils").parseQuotedMessage({
          quotedMsg: i,
          msgContext: "relay",
          isCarouselCardReply: !1,
          contextInfo: r,
          targetMessageKey: t,
        }));
      var l = t.remote.isGroup();
      r.stanzaId != null && (a.quotedStanzaID = r.stanzaId);
      var u = s(r.participant);
      if (u != null)
        if (l && t.participant != null) {
          var c = o("WAWebLidMigrationUtils").toCommonAddressingMode(
              u,
              t.participant,
            ),
            d = c[0];
          a.quotedParticipant = d != null ? d : u;
        } else a.quotedParticipant = u;
      var m = s(r.remoteJid);
      (m != null && l && (a.quotedRemoteJid = m),
        r.groupSubject != null && (a.quotedGroupSubject = r.groupSubject));
      var p = s(r.parentGroupJid);
      return (
        p != null && (a.quotedParentGroupJid = p),
        r.quotedType != null && (a.quotedType = r.quotedType),
        a
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

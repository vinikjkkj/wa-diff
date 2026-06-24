__d(
  "WAWebExtractQuoteFieldsFromScheduledMsg",
  ["WAWebDecodeJid", "WAWebQuotedMessageProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r = (n = e.extendedTextMessage) == null ? void 0 : n.contextInfo;
      if (r == null) return {};
      var a = {},
        i = r.quotedMessage;
      (i != null &&
        i.reactionMessage == null &&
        (a.quotedMsg = o("WAWebQuotedMessageProtoUtils").parseQuotedMessage({
          quotedMsg: i,
          msgContext: "relay",
          isCarouselCardReply: !1,
          contextInfo: r,
          targetMessageKey: t,
        })),
        r.stanzaId != null && (a.quotedStanzaID = r.stanzaId));
      var l = s(r.participant);
      l != null && (a.quotedParticipant = l);
      var u = s(r.remoteJid);
      (u != null && (a.quotedRemoteJid = u),
        r.groupSubject != null && (a.quotedGroupSubject = r.groupSubject));
      var c = s(r.parentGroupJid);
      return (
        c != null && (a.quotedParentGroupJid = c),
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

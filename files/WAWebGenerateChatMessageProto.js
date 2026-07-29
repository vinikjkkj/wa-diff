__d(
  "WAWebGenerateChatMessageProto",
  ["WAWebGenerateExtendedTextMessageProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json;
      return n.quotedMsg ||
        n.quotedRemoteJid ||
        (Array.isArray(n.mentionedJidList) && n.mentionedJidList.length > 0) ||
        (Array.isArray(n.groupMentions) && n.groupMentions.length > 0) ||
        n.conversionTuple ||
        n.isForwarded ||
        n.forwardingScore ||
        n._isPaymentNoteMsg ||
        n.ephemeralDuration ||
        n.ephemeralSettingTimestamp ||
        n.ctwaContext ||
        n.backgroundColor ||
        (t != null && t.utm) ||
        (t == null ? void 0 : t.isSpoiler) === !0 ||
        (t == null ? void 0 : t.isQuestion) === !0 ||
        (t != null && t.questionReplyQuotedMessage) ||
        n.paymentLinkMetadata ||
        ((t == null ? void 0 : t.nonJidMentions) != null &&
          t.nonJidMentions > 0)
        ? r("WAWebGenerateExtendedTextMessageProtoUtils")({
            json: n,
            contextInfo: t,
          })
        : { conversation: n.body };
    }
    l.default = e;
  },
  98,
);

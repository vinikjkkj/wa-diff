__d(
  "WASmaxInMessageDeliverMessageTargetMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "meta");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "target_id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "target_sender_jid",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "target_chat_jid",
        o("WASmaxInMessageDeliverEnums").GROUPJID_USERJID,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        e,
        "target_chat_jid_lid",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        e,
        "from",
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            targetId: n.value,
            targetSenderJid: r.value,
            targetChatJid: a.value,
            targetChatJidLid: i.value,
            from: l.value,
          })
        : l;
    }
    l.parseMessageTargetMixin = e;
  },
  98,
);

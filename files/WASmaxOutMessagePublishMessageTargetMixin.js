__d(
  "WASmaxOutMessagePublishMessageTargetMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = e.metaTargetId,
        a = e.metaTargetSenderJid,
        i = e.metaTargetChatJid,
        l = e.metaTargetChatJidLid,
        s = e.metaFrom,
        u = o("WASmaxJsx").smax("meta", {
          target_id: (t = o("WAWap")).STANZA_ID(r),
          target_sender_jid: (n = o("WASmaxAttrs")).OPTIONAL(t.USER_JID, a),
          target_chat_jid: n.OPTIONAL(t.JID, i),
          target_chat_jid_lid: n.OPTIONAL(t.JID, l),
          from: n.OPTIONAL(t.JID, s),
        });
      return u;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageTargetMixin = s;
  },
  98,
);

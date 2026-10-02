__d(
  "WASmaxInMessageDeliverThreadMsgMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(n.value, "thread_msg_id");
      if (!r.success) return r;
      var a = o("WASmaxParseJid").attrUserJid(n.value, "thread_msg_sender_jid");
      return a.success
        ? o("WAResultOrError").makeResult({
            metaThreadMsgId: r.value,
            metaThreadMsgSenderJid: a.value,
          })
        : a;
    }
    l.parseThreadMsgMixin = e;
  },
  98,
);

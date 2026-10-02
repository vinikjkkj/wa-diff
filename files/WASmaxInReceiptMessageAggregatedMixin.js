__d(
  "WASmaxInReceiptMessageAggregatedMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrDeviceJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      return r.success
        ? o("WAResultOrError").makeResult({ jid: n.value, t: r.value })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "receipt");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "participants");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStanzaId(t, "id");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStanzaId(r.value, "key");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "user",
        1,
        1024,
        e,
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            id: a.value,
            participantsKey: i.value,
            participantsUser: l.value,
          })
        : l;
    }
    ((l.parseMessageAggregatedParticipantsUser = e),
      (l.parseMessageAggregatedMixin = s));
  },
  98,
);

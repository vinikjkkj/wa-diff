__d(
  "WASmaxInReceiptAggregatedByMessageIdMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrDeviceJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        e,
        "t",
        1577865600,
        4102473600,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInReceiptEnums").ENUM_DELIVERY_INACTIVE_PLAYED_READ,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            jid: n.value,
            t: r.value,
            type: a.value,
          })
        : a;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "receipt");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "participants");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStanzaId(t, "id");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStanzaId(r.value, "message_id");
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
            participantsMessageId: i.value,
            participantsUser: l.value,
          })
        : l;
    }
    ((l.parseAggregatedByMessageIdParticipantsUser = e),
      (l.parseAggregatedByMessageIdMixin = s));
  },
  98,
);

__d(
  "WASmaxInStreamErrorAckKickRequest",
  ["WAResultOrError", "WASmaxInStreamErrorEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "stream:error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "class",
        o("WASmaxInStreamErrorEnums")
          .ENUM_APPDATA_CALL_MESSAGE_NOTIFICATION_RECEIPT,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(n.value, "type");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStanzaId(n.value, "id");
      return i.success
        ? o("WAResultOrError").makeResult({
            ackClass: r.value,
            ackType: a.value,
            ackId: i.value,
          })
        : i;
    }
    l.parseAckKickRequest = e;
  },
  98,
);

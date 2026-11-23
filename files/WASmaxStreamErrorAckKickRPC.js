__d(
  "WASmaxStreamErrorAckKickRPC",
  [
    "WAResultOrError",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("AckKick", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "stream:error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(n.value, "class", u);
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
    var u = {
      appdata: "appdata",
      call: "call",
      message: "message",
      notification: "notification",
      receipt: "receipt",
      status: "status",
    };
    ((l.receiveAckKickRPC = e),
      (l.parseAckKickRequest = s),
      (l.ENUM_APPDATA_CALL_MESSAGE_NOTIFICATION_RECEIPT_STATUS = u));
  },
  98,
);

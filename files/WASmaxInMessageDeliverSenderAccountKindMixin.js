__d(
  "WASmaxInMessageDeliverSenderAccountKindMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "sender_account_kind",
        o("WASmaxInMessageDeliverEnums").ENUM_GUEST_WA,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaSenderAccountKind: r.value })
        : r;
    }
    l.parseSenderAccountKindMixin = e;
  },
  98,
);

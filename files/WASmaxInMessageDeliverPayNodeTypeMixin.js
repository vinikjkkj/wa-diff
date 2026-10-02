__d(
  "WASmaxInMessageDeliverPayNodeTypeMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInMessageDeliverEnums").ENUM_REQUEST_SEND,
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    l.parsePayNodeTypeMixin = e;
  },
  98,
);

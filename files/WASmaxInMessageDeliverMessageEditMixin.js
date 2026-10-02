__d(
  "WASmaxInMessageDeliverMessageEditMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "edit",
        "1",
      );
      return n.success ? o("WAResultOrError").makeResult({ edit: n.value }) : n;
    }
    l.parseMessageEditMixin = e;
  },
  98,
);

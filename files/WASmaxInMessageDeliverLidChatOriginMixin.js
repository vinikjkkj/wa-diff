__d(
  "WASmaxInMessageDeliverLidChatOriginMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "origin",
        "ctwa",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaOrigin: r.value })
        : r;
    }
    l.parseLidChatOriginMixin = e;
  },
  98,
);

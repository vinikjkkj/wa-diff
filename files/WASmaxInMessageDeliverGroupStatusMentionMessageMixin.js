__d(
  "WASmaxInMessageDeliverGroupStatusMentionMessageMixin",
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
        "is_group_status_mention",
        "true",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaIsGroupStatusMention: r.value })
        : r;
    }
    l.parseGroupStatusMentionMessageMixin = e;
  },
  98,
);

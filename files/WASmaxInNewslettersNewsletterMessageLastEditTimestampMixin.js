__d(
  "WASmaxInNewslettersNewsletterMessageLastEditTimestampMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "msg_edit_t",
        15778656e5,
        41024736e5,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaMsgEditT: r.value })
        : r;
    }
    l.parseNewsletterMessageLastEditTimestampMixin = e;
  },
  98,
);

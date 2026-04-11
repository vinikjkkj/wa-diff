__d(
  "WASmaxInNewslettersQuestionTypeResponseMixin",
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
        "questiontype",
        "response",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaQuestiontype: r.value })
        : r;
    }
    l.parseQuestionTypeResponseMixin = e;
  },
  98,
);

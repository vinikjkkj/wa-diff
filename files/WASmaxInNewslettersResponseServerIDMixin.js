__d(
  "WASmaxInNewslettersResponseServerIDMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "response_server_id");
      return r.success
        ? o("WAResultOrError").makeResult({ metaResponseServerId: r.value })
        : r;
    }
    l.parseResponseServerIDMixin = e;
  },
  98,
);

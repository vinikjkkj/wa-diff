__d(
  "WASmaxInMessageDeliverRequestIDMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "trace");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "request_id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(n.value, 1, 16);
      return r.success
        ? o("WAResultOrError").makeResult({ requestIdElementValue: r.value })
        : r;
    }
    l.parseRequestIDMixin = e;
  },
  98,
);

__d(
  "WASmaxInMessageDeliverThreadTypeTagEnumMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "meta");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrInt(e, "thread_type");
      return n.success
        ? o("WAResultOrError").makeResult({ threadType: n.value })
        : n;
    }
    l.parseThreadTypeTagEnumMixin = e;
  },
  98,
);

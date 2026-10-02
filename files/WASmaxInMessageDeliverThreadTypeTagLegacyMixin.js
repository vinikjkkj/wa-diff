__d(
  "WASmaxInMessageDeliverThreadTypeTagLegacyMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "meta");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "thread_type");
      return n.success
        ? o("WAResultOrError").makeResult({ threadType: n.value })
        : n;
    }
    l.parseThreadTypeTagLegacyMixin = e;
  },
  98,
);

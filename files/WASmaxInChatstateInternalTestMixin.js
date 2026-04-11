__d(
  "WASmaxInChatstateInternalTestMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "test");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t.value,
        "config",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ testConfig: n.value })
        : n;
    }
    l.parseInternalTestMixin = e;
  },
  98,
);

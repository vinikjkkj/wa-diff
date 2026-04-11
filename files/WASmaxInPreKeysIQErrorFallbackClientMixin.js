__d(
  "WASmaxInPreKeysIQErrorFallbackClientMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "text");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "code", 400, 499);
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    l.parseIQErrorFallbackClientMixin = e;
  },
  98,
);

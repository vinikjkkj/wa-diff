__d(
  "WASmaxInGroupsIQErrorFallbackServerMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "text");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "code", 500, 599);
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    l.parseIQErrorFallbackServerMixin = e;
  },
  98,
);

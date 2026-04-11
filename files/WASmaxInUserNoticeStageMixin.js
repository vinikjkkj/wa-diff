__d(
  "WASmaxInUserNoticeStageMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notice");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "id", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "stage", 0, 1e3);
      return r.success
        ? o("WAResultOrError").makeResult({ id: n.value, stage: r.value })
        : r;
    }
    l.parseStageMixin = e;
  },
  98,
);

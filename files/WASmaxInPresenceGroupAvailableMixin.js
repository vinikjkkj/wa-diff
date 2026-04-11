__d(
  "WASmaxInPresenceGroupAvailableMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "presence");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "count", 1, 1024);
      return r.success
        ? o("WAResultOrError").makeResult({ from: n.value, count: r.value })
        : r;
    }
    l.parseGroupAvailableMixin = e;
  },
  98,
);

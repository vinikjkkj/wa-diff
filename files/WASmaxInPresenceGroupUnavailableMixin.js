__d(
  "WASmaxInPresenceGroupUnavailableMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "presence");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "unavailable",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ from: n.value, type: r.value })
        : r;
    }
    l.parseGroupUnavailableMixin = e;
  },
  98,
);

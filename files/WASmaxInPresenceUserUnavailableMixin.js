__d(
  "WASmaxInPresenceUserUnavailableMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "presence");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "unavailable",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "last",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            from: n.value,
            type: r.value,
            last: a.value,
          })
        : a;
    }
    l.parseUserUnavailableMixin = e;
  },
  98,
);

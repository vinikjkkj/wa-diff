__d(
  "WASmaxInPresenceAvailableMixin",
  [
    "WAResultOrError",
    "WASmaxInPresenceEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "presence");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "from",
        o("WASmaxInPresenceEnums").GROUPJID_USERJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "available",
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
    l.parseAvailableMixin = e;
  },
  98,
);
